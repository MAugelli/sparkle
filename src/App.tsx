import { useState } from 'react'
import Sidebar from './components/Sidebar'
import { NPC_PROFILES, DEFAULT_PLAYER_PROFILE } from './data'
import { NPCProfile, PlayerProfile, Message, Chat as ChatType } from './types'
import './App.css'
import ChatView from './components/ChatView'

function App() {
  const [selectedNpcId, setSelectedNpcId] = useState<string | null>('npc_aurora')
  const [playerProfile] = useState<PlayerProfile>(DEFAULT_PLAYER_PROFILE)
  const [npcProfiles] = useState<NPCProfile[]>(NPC_PROFILES)

  // Conversazioni mappate per NPC
  const conversations: Record<string, Message[]> = {
    npc_aurora: [
      { id: '1', sender: 'npc', text: 'Ciao! Sono Aurora. Mi piacciono persone creative.', timestamp: new Date() },
      { id: '2', sender: 'player', text: 'Piacere! Anche io adoro l\'arte.', timestamp: new Date() },
      { id: '3', sender: 'npc', text: 'Fantastico! Raccontami di te...', timestamp: new Date() },
    ],
    npc_nyx: [
      { id: '1', sender: 'npc', text: 'Benvenuto nel mio mondo cibernetico.', timestamp: new Date() },
      { id: '2', sender: 'player', text: 'Mi piace questo posto', timestamp: new Date() },
    ],
    npc_sora: [
      { id: '1', sender: 'npc', text: 'Hey there! 👋 Pronta per un\'avventura?', timestamp: new Date() },
    ],
    npc_luna: [
      { id: '1', sender: 'npc', text: 'Mi piace osservare le persone interessanti come te.', timestamp: new Date() },
    ],
  }

  // Costruisci la lista di chat dalla lista NPC
  const chats: ChatType[] = npcProfiles.map((npc, idx) => ({
    id: npc.id,
    npcId: npc.id,
    npcName: npc.name,
    unread: idx === 0 ? 2 : idx === 2 ? 1 : 0,
  }))

  const selectedNpc = npcProfiles.find(npc => npc.id === selectedNpcId)
  const currentMessages = selectedNpcId ? conversations[selectedNpcId] || [] : []

  return (
    <div id="app-container">
      <Sidebar 
        chats={chats} 
        selectedNpcId={selectedNpcId} 
        onSelectNpc={setSelectedNpcId}
        npcProfiles={npcProfiles}
      />
      <ChatView 
        npcProfile={selectedNpc} 
        playerProfile={playerProfile}
        messages={currentMessages} 
      />
    </div>
  )
}

export default App
