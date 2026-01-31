import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ChatView from "./components/ChatView";
import WelcomeScreen from "./components/WelcomeScreen";
import ProfileEditor from "./components/ProfileEditor";
import { NPC_PROFILES, DEFAULT_PLAYER_PROFILE } from "./data";
import {
  NPCProfile,
  PlayerProfile,
  Message,
  Chat as ChatType,
  NPCDialogueSet,
} from "./types";
import "./App.css";
import { getDialoguesForRelationship } from "./utils/dialogueManager";
import {
  savePlayerProfile,
  loadPlayerProfile,
  saveConversations,
  loadConversations,
  saveNpcRelationships,
  loadNpcRelationships,
  applyRelationshipsToNpcs,
  clearAllSavedData,
} from "./utils/storage";
import { hasSharedInterests } from "./utils/interests";
import { auroraDialogueSet } from "./data/dialogues/aurora-branched";
import { nyxDialogueSet } from "./data/dialogues/nyx-branched";
import { soraDialogueSet } from "./data/dialogues/sora-branched";
import { lunaDialogueSet } from "./data/dialogues/luna-branched";
import { maxDialogueSet } from "./data/dialogues/max-branched";

type AppScreen = "welcome" | "profile-editor" | "chat";

function App() {
  const [screen, setScreen] = useState<AppScreen>("welcome");
  const [selectedNpcId, setSelectedNpcId] = useState<string | null>(
    "npc_aurora",
  );

  // Inizializza playerProfile da localStorage o default
  const [playerProfile, setPlayerProfile] = useState<PlayerProfile>(() => {
    const saved = loadPlayerProfile();
    return saved || DEFAULT_PLAYER_PROFILE;
  });

  // Inizializza npcProfiles con relazioni salvate
  const [npcProfiles, setNpcProfiles] = useState<NPCProfile[]>(() => {
    const profiles = [...NPC_PROFILES];
    const savedRelationships = loadNpcRelationships();
    if (savedRelationships) {
      return applyRelationshipsToNpcs(profiles, savedRelationships);
    }
    return profiles;
  });

  // Map dei DialogueSets per ogni NPC
  const dialogueSetsMap: Record<string, NPCDialogueSet> = {
    npc_aurora: auroraDialogueSet,
    npc_nyx: nyxDialogueSet,
    npc_sora: soraDialogueSet,
    npc_luna: lunaDialogueSet,
    npc_max: maxDialogueSet,
  };

  // Converti DialogueSet in messaggio iniziale per ogni NPC
  const getInitialMessages = (npcId: string): Message[] => {
    const npc = npcProfiles.find((p) => p.id === npcId);
    const dialogueSet = dialogueSetsMap[npcId];

    if (!npc || !dialogueSet) return [];

    const dialogues = getDialoguesForRelationship(
      dialogueSet,
      npc.relationshipLevel,
    );
    if (dialogues.length === 0) return [];

    return [dialogues[0]];
  };

  // Conversazioni mappate per NPC - carica da localStorage se disponibili
  const [conversations, setConversations] = useState<Record<string, Message[]>>(
    () => {
      const saved = loadConversations();
      if (saved) {
        return saved;
      }

      return {
        npc_aurora: getInitialMessages("npc_aurora"),
        npc_nyx: getInitialMessages("npc_nyx"),
        npc_sora: getInitialMessages("npc_sora"),
        npc_luna: getInitialMessages("npc_luna"),
        npc_max: getInitialMessages("npc_max"),
      };
    },
  );

  // Salva playerProfile quando cambia
  useEffect(() => {
    savePlayerProfile(playerProfile);
  }, [playerProfile]);

  // Salva conversazioni quando cambiano
  useEffect(() => {
    saveConversations(conversations);
  }, [conversations]);

  // Salva relazioni NPC quando cambiano
  useEffect(() => {
    saveNpcRelationships(npcProfiles);
  }, [npcProfiles]);

  // Costruisci la lista di chat dalla lista NPC
  const chats: ChatType[] = npcProfiles.map((npc) => {
    const npcMessages = conversations[npc.id] || [];
    // Mostra pallino se l'ultimo messaggio è dell'NPC e ha scelte disponibili
    const lastMessage =
      npcMessages.length > 0 ? npcMessages[npcMessages.length - 1] : null;
    const canRespond =
      lastMessage &&
      lastMessage.sender === "npc" &&
      lastMessage.choices &&
      lastMessage.choices.length > 0
        ? true
        : false;

    return {
      id: npc.id,
      npcId: npc.id,
      npcName: npc.name,
      unread: canRespond,
    };
  });

  const selectedNpc = npcProfiles.find((npc) => npc.id === selectedNpcId);
  const currentMessages = selectedNpcId
    ? conversations[selectedNpcId] || []
    : [];

  const handleStartProfile = () => {
    setScreen("profile-editor");
  };

  const handleContinueGame = () => {
    setScreen("chat");
  };

  const handleClearData = () => {
    // Chiedi conferma
    if (window.confirm("Sei sicuro? Tutti i tuoi dati verranno eliminati.")) {
      // Cancella localStorage
      clearAllSavedData();
      // Resetta lo stato
      setPlayerProfile(DEFAULT_PLAYER_PROFILE);
      setConversations({
        npc_aurora: getInitialMessages("npc_aurora"),
        npc_nyx: getInitialMessages("npc_nyx"),
        npc_sora: getInitialMessages("npc_sora"),
        npc_luna: getInitialMessages("npc_luna"),
        npc_max: getInitialMessages("npc_max"),
      });
      setSelectedNpcId("npc_aurora");
      // Rimuovi il flag della prima visita per mostrare i messaggi di benvenuto originali
      localStorage.removeItem("sparkle_first_visit_completed");
      // Rimani sulla welcome screen
    }
  };

  const handleProfileSaved = (profile: PlayerProfile) => {
    setPlayerProfile(profile);

    // Controlla se l'NPC selezionato ha ancora interessi comuni
    if (selectedNpcId) {
      const selectedNpc = npcProfiles.find((npc) => npc.id === selectedNpcId);
      if (selectedNpc && !hasSharedInterests(profile, selectedNpc)) {
        // Se non ha più interessi comuni, deseleziona l'NPC
        setSelectedNpcId(null);
      }
    }

    setScreen("chat");
  };

  const handleEditProfile = () => {
    setScreen("profile-editor");
  };

  const handleBackToChat = () => {
    setScreen("chat");
  };

  const handleAddMessage = (message: Message) => {
    if (!selectedNpcId) return;

    const updatedMessages = [...currentMessages, message];

    // Se il messaggio è del player e ha una scelta (choice), ottieni il prossimo messaggio
    if (message.sender === "player" && currentMessages.length > 0) {
      const previousMessage = currentMessages[currentMessages.length - 1];

      if (previousMessage.choices) {
        // Trova la scelta selezionata dall'utente
        const selectedChoice = previousMessage.choices.find(
          (c) => c.text === message.text,
        );

        if (selectedChoice && selectedChoice.nextMessageId && selectedNpc) {
          // Aggiorna il relationship level prima di ottenere i dialoghi
          if (selectedChoice.relationshipDelta) {
            const newRelationship = Math.min(
              100,
              Math.max(
                0,
                selectedNpc.relationshipLevel +
                  selectedChoice.relationshipDelta,
              ),
            );

            setNpcProfiles((prev) =>
              prev.map((npc) =>
                npc.id === selectedNpcId
                  ? { ...npc, relationshipLevel: newRelationship }
                  : npc,
              ),
            );
          }

          // Cerca il messaggio successivo nei dialoghi del set
          const dialogueSet = dialogueSetsMap[selectedNpcId];
          if (!dialogueSet) return;

          const dialogues = getDialoguesForRelationship(
            dialogueSet,
            selectedNpc.relationshipLevel +
              (selectedChoice.relationshipDelta || 0),
          );

          // Segui la catena di nextMessageId fino a trovare un messaggio con choices
          let currentMessageId: string | undefined =
            selectedChoice.nextMessageId;
          while (currentMessageId) {
            const nextMessage = dialogues.find(
              (m) => m.id === currentMessageId,
            );

            if (!nextMessage) break;

            updatedMessages.push(nextMessage);

            // Se il messaggio ha scelte, fermati
            if (nextMessage.choices && nextMessage.choices.length > 0) {
              break;
            }

            // Altrimenti, continua con il nextMessageId
            currentMessageId = nextMessage.nextMessageId;
          }
        }
      }
    }

    setConversations((prev) => ({
      ...prev,
      [selectedNpcId]: updatedMessages,
    }));
  };

  // Render basato su screen
  if (screen === "welcome") {
    const hasSavedData = !!loadPlayerProfile();
    return (
      <WelcomeScreen
        onStartProfile={handleStartProfile}
        onContinueGame={handleContinueGame}
        hasSavedData={hasSavedData}
        onClearData={handleClearData}
      />
    );
  }

  if (screen === "profile-editor") {
    return (
      <ProfileEditor
        initialProfile={playerProfile}
        onSave={handleProfileSaved}
        onCancel={screen === "profile-editor" ? handleBackToChat : undefined}
      />
    );
  }

  // screen === 'chat'
  return (
    <div id="app-container">
      <Sidebar
        chats={chats}
        selectedNpcId={selectedNpcId}
        onSelectNpc={setSelectedNpcId}
        npcProfiles={npcProfiles}
        playerProfile={playerProfile}
        onEditProfile={handleEditProfile}
      />
      <ChatView
        npcProfile={selectedNpc}
        messages={currentMessages}
        onAddMessage={handleAddMessage}
      />
    </div>
  );
}

export default App;
