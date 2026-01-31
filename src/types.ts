// Profilo base condiviso tra Player e NPC
export interface BaseProfile {
  id: string;
  name: string;
  age: number;
  bio: string;
  interests: string[];
}

// Profilo del giocatore
export interface PlayerProfile extends BaseProfile {
  avatar?: string;
  createdAt: Date;
}

// Profilo NPC con dati aggiuntivi narrativi
export interface NPCProfile extends BaseProfile {
  avatar?: string;
  personality: string; // Descrizione breve della personalità
  relationshipLevel: number; // 0-100, influenza i dialoghi
}

// Conversazione con un NPC
export interface Chat {
  id: string;
  npcId: string;
  npcName: string;
  unread?: boolean;
}

// Singolo messaggio
export interface Message {
  id: string;
  sender: "npc" | "player";
  text: string;
  timestamp: Date;
  choices?: MessageChoice[]; // Per dialoghi con scelte
  nextMessageId?: string; // Per sequenze lineari senza scelte
}

// Scelta di risposta in un dialogo ramificato
export interface MessageChoice {
  id: string;
  text: string;
  nextMessageId?: string;
  relationshipDelta?: number; // Modifica relationship level
}

// Storico conversazione
export interface Conversation {
  chatId: string;
  messages: Message[];
  startedAt: Date;
  lastMessageAt: Date;
}

// Dialogo che varia in base al livello di relazione
export interface DialogueVariation {
  minRelationshipLevel: number; // Minimum relationship level to see this variant
  messages: Message[]; // Dialogue messages for this relationship tier
  failMessages?: Message[]; // Messaggi di fallimento se non raggiungi il prossimo livello
}

// Set completo di dialoghi per un NPC con variazioni
export interface NPCDialogueSet {
  npcId: string;
  variations: DialogueVariation[]; // Ordered from lowest to highest relationship
}
