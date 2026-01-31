// Profilo base condiviso tra Player e NPC
export interface BaseProfile {
  id: string
  name: string
  age: number
  bio: string
  interests: string[]
}

// Profilo del giocatore
export interface PlayerProfile extends BaseProfile {
  avatar?: string
  createdAt: Date
}

// Profilo NPC con dati aggiuntivi narrativi
export interface NPCProfile extends BaseProfile {
  avatar?: string
  personality: string // Descrizione breve della personalità
  relationshipLevel: number // 0-100, influenza i dialoghi
}

// Conversazione con un NPC
export interface Chat {
  id: string
  npcId: string
  npcName: string
  unread?: number
}

// Singolo messaggio
export interface Message {
  id: string
  sender: 'npc' | 'player'
  text: string
  timestamp: Date
  choices?: MessageChoice[] // Per dialoghi con scelte
}

// Scelta di risposta in un dialogo ramificato
export interface MessageChoice {
  id: string
  text: string
  nextMessageId?: string
  relationshipDelta?: number // Modifica relationship level
}

// Storico conversazione
export interface Conversation {
  chatId: string
  messages: Message[]
  startedAt: Date
  lastMessageAt: Date
}
