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
import { replaceMessagesPlaceholders } from "./utils/messageParser";
import { mattiaDialogueSet } from "./data/dialogues/mattia-branched";

type AppScreen = "welcome" | "profile-editor" | "chat";

function App() {
  const [screen, setScreen] = useState<AppScreen>("welcome");
  const [selectedNpcId, setSelectedNpcId] = useState<string | null>(null);

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
    npc_mattia: mattiaDialogueSet,
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

    const dialogues = getDialoguesForRelationship(dialogueSet, 0);
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
        npc_mattia: getInitialMessages("npc_mattia"),
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
    const msg = replaceMessagesPlaceholders(npcMessages, playerProfile, npc);

    const lastMessage = msg.length > 0 ? msg[msg.length - 1] : null;
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
      setNpcProfiles([...NPC_PROFILES]);
      setConversations({
        npc_mattia: getInitialMessages("npc_mattia"),
        npc_aurora: getInitialMessages("npc_aurora"),
        npc_nyx: getInitialMessages("npc_nyx"),
        npc_sora: getInitialMessages("npc_sora"),
        npc_luna: getInitialMessages("npc_luna"),
        npc_max: getInitialMessages("npc_max"),
      });
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

  // FIX CORRETTO per handleAddMessage in App.tsx

  const handleAddMessage = (message: Message) => {
    if (!selectedNpcId) return;

    const updatedMessages = [...currentMessages, message];

    // Se il messaggio è del player e ha una scelta (choice), ottieni il prossimo messaggio
    if (message.sender === "player" && currentMessages.length > 0) {
      const previousMessage = currentMessages[currentMessages.length - 1];

      if (previousMessage.choices && selectedNpc) {
        // Trova la scelta selezionata dall'utente
        const selectedChoice = previousMessage.choices.find(
          (c) => c.text === message.text,
        );

        if (selectedChoice && selectedChoice.nextMessageId) {
          const dialogueSet = dialogueSetsMap[selectedNpcId];
          if (!dialogueSet) return;

          // Calcola il NUOVO relationship level
          let newRelationship = selectedNpc.relationshipLevel;
          if (selectedChoice.relationshipDelta) {
            newRelationship = Math.min(
              100,
              Math.max(
                0,
                selectedNpc.relationshipLevel +
                  selectedChoice.relationshipDelta,
              ),
            );

            // Aggiorna subito il relationship
            setNpcProfiles((prev) =>
              prev.map((npc) =>
                npc.id === selectedNpcId
                  ? { ...npc, relationshipLevel: newRelationship }
                  : npc,
              ),
            );
          }

          // CHIAVE: Cerca in TUTTI i set disponibili, non solo in quello corrente
          // Concatena tutti i messaggi di tutte le variazioni
          const allMessages: Message[] = [];
          for (const variation of dialogueSet.variations) {
            allMessages.push(...variation.messages);
          }

          // Segui la catena di nextMessageId
          let currentMessageId: string | undefined =
            selectedChoice.nextMessageId;

          while (currentMessageId) {
            // Cerca il messaggio in TUTTI i messaggi disponibili
            const nextMessage = allMessages.find(
              (m) => m.id === currentMessageId,
            );

            if (!nextMessage) {
              console.warn(`Messaggio ${currentMessageId} non trovato`);
              break;
            }

            updatedMessages.push(nextMessage);

            // Se il messaggio ha scelte, fermati qui
            if (nextMessage.choices && nextMessage.choices.length > 0) {
              break;
            }

            // Se non ha nextMessageId, è la fine
            if (!nextMessage.nextMessageId) {
              break;
            }

            // Continua con il prossimo
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
        userProfile={playerProfile}
        messages={currentMessages}
        onAddMessage={handleAddMessage}
      />
    </div>
  );
}

export default App;
