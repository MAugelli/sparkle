import { Message, MessageChoice, NPCDialogueSet } from '../../types'

// ==================== VARIAZIONE 1: PRIMO INCONTRO (0-20 relazione) ====================

const firstMeetingChoices: MessageChoice[] = [
  {
    id: 'sora_intro_1',
    text: '⚡ Mi piace la tua energia!',
    nextMessageId: 'sora_msg_2',
    relationshipDelta: 11,
  },
  {
    id: 'sora_intro_2',
    text: 'Cosa ami fare nel tuo tempo libero?',
    nextMessageId: 'sora_msg_3',
    relationshipDelta: 7,
  },
]

const firstMeetingDialogues: Message[] = [
  {
    id: 'sora_msg_1',
    sender: 'npc',
    text: 'Hey! Sono Sora! Non posso stare ferma un secondo... ho sempre bisogno di fare qualcosa! Tu sei uguale?',
    timestamp: new Date(),
    choices: firstMeetingChoices,
  },
  {
    id: 'sora_msg_2',
    sender: 'npc',
    text: 'Yeees! Finalmente qualcuno che capisce! La vita è troppo breve per annoiarsi. Vuoi fare qualcosa insieme?',
    timestamp: new Date(),
    choices: [
      {
        id: 'sora_msg2_1',
        text: '🏃 Sì! Fammi sorprendere',
        nextMessageId: 'sora_msg_2_follow',
        relationshipDelta: 9,
      },
    ],
  },
  {
    id: 'sora_msg_3',
    sender: 'npc',
    text: 'Oh! Mi piace sport, musica, uscire con gli amici... praticamente tutto che non sia stare seduta! 😄',
    timestamp: new Date(),
    choices: [
      {
        id: 'sora_msg3_1',
        text: 'Potremmo fare sport insieme?',
        nextMessageId: 'sora_msg_3_follow',
        relationshipDelta: 8,
      },
    ],
  },
]

// ==================== VARIAZIONE 2: CONNESSIONE CRESCENTE (20-50 relazione) ====================

const growingBondChoices: MessageChoice[] = [
  {
    id: 'sora_bond_1',
    text: 'Mi piace stare con te, anche se sei sempre in movimento',
    nextMessageId: 'sora_bond_msg_2',
    relationshipDelta: 11,
  },
  {
    id: 'sora_bond_2',
    text: 'Mi fai sentire vivo quando sei accanto a me',
    nextMessageId: 'sora_bond_msg_3',
    relationshipDelta: 14,
  },
]

const growingBondDialogues: Message[] = [
  {
    id: 'sora_bond_msg_1',
    sender: 'npc',
    text: 'Sai, di solito la gente mi dice che sono troppo... ma con te non mi chiedi di cambiar. Mi piace!',
    timestamp: new Date(),
    choices: growingBondChoices,
  },
  {
    id: 'sora_bond_msg_2',
    sender: 'npc',
    text: 'Aww! Allora forse non è male avere qualcuno che mi segue in questa pazza avventura! 💕',
    timestamp: new Date(),
    choices: [
      {
        id: 'sora_bond_msg2_1',
        text: 'Andiamo dovunque tu voglia',
        nextMessageId: 'sora_bond_msg_2_follow',
        relationshipDelta: 12,
      },
    ],
  },
  {
    id: 'sora_bond_msg_3',
    sender: 'npc',
    text: 'Vivo? Mi piace come suona quando lo dici. Forse sei la mia persona speciale?',
    timestamp: new Date(),
    choices: [
      {
        id: 'sora_bond_msg3_1',
        text: 'Sei la mia persona speciale',
        nextMessageId: 'sora_bond_msg_3_follow',
        relationshipDelta: 15,
      },
    ],
  },
]

// ==================== VARIAZIONE 3: PROFONDA CONNESSIONE (50+ relazione) ====================

const deepBondDialogues: Message[] = [
  {
    id: 'sora_deep_msg_1',
    sender: 'npc',
    text: 'Hey... sto rallentando i miei ritmi perché penso solo a te. È questo l\'amore?',
    timestamp: new Date(),
    choices: [
      {
        id: 'sora_deep_1',
        text: '❤️ È esattamente così',
        nextMessageId: 'sora_deep_msg_2',
        relationshipDelta: 20,
      },
      {
        id: 'sora_deep_2',
        text: 'Sì, è amore',
        nextMessageId: 'sora_deep_msg_2',
        relationshipDelta: 18,
      },
    ],
  },
  {
    id: 'sora_deep_msg_2',
    sender: 'npc',
    text: 'Allora voglio vivere una vita con te. Lenta, veloce, pazza... non importa. Importa solo che sei tu.',
    timestamp: new Date(),
    choices: [
      {
        id: 'sora_deep_final',
        text: 'Viviamo questa vita insieme',
        nextMessageId: 'sora_deep_ending',
        relationshipDelta: 22,
      },
    ],
  },
]

// ==================== EXPORT ====================

export const soraDialogueSet: NPCDialogueSet = {
  npcId: 'npc_sora',
  variations: [
    {
      minRelationshipLevel: 0,
      messages: firstMeetingDialogues,
    },
    {
      minRelationshipLevel: 20,
      messages: growingBondDialogues,
    },
    {
      minRelationshipLevel: 50,
      messages: deepBondDialogues,
    },
  ],
}

export const soraDialogues = firstMeetingDialogues
