import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ChatView from './components/ChatView'
import WelcomeScreen from './components/WelcomeScreen'
import ProfileEditor from './components/ProfileEditor'
import { NPC_PROFILES, DEFAULT_PLAYER_PROFILE } from './data'
import { auroraDialogues } from './data/dialogues/aurora'
import { nyxDialogues } from './data/dialogues/nyx'
import { soraDialogues } from './data/dialogues/sora'
import { lunaDialogues } from './data/dialogues/luna'
import { NPCProfile, PlayerProfile, Message, Chat as ChatType } from './types'
import './App.css'

type AppScreen = 'welcome' | 'profile-editor' | 'chat'

function App() {
  const [screen, setScreen] = useState<AppScreen>('welcome')
  const [selectedNpcId, setSelectedNpcId] = useState<string | null>('npc_aurora')
  const [playerProfile, setPlayerProfile] = useState<PlayerProfile>(DEFAULT_PLAYER_PROFILE)
  const [npcProfiles] = useState<NPCProfile[]>(NPC_PROFILES)

  // Map dei dialoghi per NPC
  const dialoguesMap: Record<string, Message[]> = {
    npc_aurora: auroraDialogues,
    npc_nyx: nyxDialogues,
    npc_sora: soraDialogues,
    npc_luna: lunaDialogues,
  }

  // Conversazioni mappate per NPC - ora inizializzate con il primo messaggio di dialogo
  const [conversations, setConversations] = useState<Record<string, Message[]>>({
    npc_aurora: [auroraDialogues[0]],
    npc_nyx: [nyxDialogues[0]],
    npc_sora: [soraDialogues[0]],
    npc_luna: [lunaDialogues[0]],
  })

  // Costruisci la lista di chat dalla lista NPC
  const chats: ChatType[] = npcProfiles.map((npc, idx) => ({
    id: npc.id,
    npcId: npc.id,
    npcName: npc.name,
    unread: idx === 0 ? 2 : idx === 2 ? 1 : 0,
  }))

  const selectedNpc = npcProfiles.find(npc => npc.id === selectedNpcId)
  const currentMessages = selectedNpcId ? conversations[selectedNpcId] || [] : []

  const handleStartProfile = () => {
    setScreen('profile-editor')
  }

  const handleProfileSaved = (profile: PlayerProfile) => {
    setPlayerProfile(profile)
    setScreen('chat')
  }

  const handleEditProfile = () => {
    setScreen('profile-editor')
  }

  const handleBackToChat = () => {
    setScreen('chat')
  }

  const handleAddMessage = (message: Message) => {
    if (!selectedNpcId) return

    const updatedMessages = [...currentMessages, message]

    // Se il messaggio è del player e ha una scelta (choice), ottieni il prossimo messaggio
    if (message.sender === 'player' && currentMessages.length > 0) {
      const previousMessage = currentMessages[currentMessages.length - 1]

      if (previousMessage.choices) {
        // Trova la scelta selezionata dall'utente
        const selectedChoice = previousMessage.choices.find(c => c.text === message.text)

        if (selectedChoice && selectedChoice.nextMessageId) {
          // Cerca il messaggio successivo nei dialoghi
          const allDialogues = dialoguesMap[selectedNpcId]
          const nextMessage = allDialogues.find(m => m.id === selectedChoice.nextMessageId)

          if (nextMessage) {
            updatedMessages.push(nextMessage)

            // Aggiorna il relationship level se presente
            if (selectedChoice.relationshipDelta && selectedNpc) {
              const newRelationship = Math.min(
                100,
                selectedNpc.relationshipLevel + selectedChoice.relationshipDelta
              )
              selectedNpc.relationshipLevel = newRelationship
            }
          }
        }
      }
    }

    setConversations(prev => ({
      ...prev,
      [selectedNpcId]: updatedMessages,
    }))
  }

  // Render basato su screen
  if (screen === 'welcome') {
    return <WelcomeScreen onStartProfile={handleStartProfile} />
  }

  if (screen === 'profile-editor') {
    return (
      <ProfileEditor
        initialProfile={playerProfile}
        onSave={handleProfileSaved}
        onCancel={screen === 'profile-editor' ? handleBackToChat : undefined}
      />
    )
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
  )
}

export default App
