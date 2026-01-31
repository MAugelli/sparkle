import { Message, MessageChoice, NPCDialogueSet } from '../../types'

// ==================== VARIAZIONE 1: PRIMO INCONTRO (0-22 relazione) ====================

const firstMeetingChoices: MessageChoice[] = [
  {
    id: 'luna_intro_1',
    text: '📖 Mi piacciono i tuoi scritti',
    nextMessageId: 'luna_msg_2',
    relationshipDelta: 10,
  },
  {
    id: 'luna_intro_2',
    text: 'Di cosa scrivi di solito?',
    nextMessageId: 'luna_msg_3',
    relationshipDelta: 8,
  },
]

const firstMeetingDialogues: Message[] = [
  {
    id: 'luna_msg_1',
    sender: 'npc',
    text: 'Ciao... scusami se sono un po\' timida. Mi piace più osservare che parlare. Tu chi sei?',
    timestamp: new Date(),
    choices: firstMeetingChoices,
  },
  {
    id: 'luna_msg_2',
    sender: 'npc',
    text: 'Oh... grazie davvero. Scrivo dalle emozioni che sento. A volte è facile, a volte no.',
    timestamp: new Date(),
    choices: [
      {
        id: 'luna_msg2_1',
        text: 'Mi piacerebbe sapere le tue emozioni',
        nextMessageId: 'luna_msg_2_follow',
        relationshipDelta: 11,
      },
    ],
  },
  {
    id: 'luna_msg_3',
    sender: 'npc',
    text: 'Storie su persone, sul dolore, sulla speranza... tutto quello che tocca il cuore. E tu? Cosa ti muove?',
    timestamp: new Date(),
    choices: [
      {
        id: 'luna_msg3_1',
        text: 'Tu... tu mi muovi',
        nextMessageId: 'luna_msg_3_follow',
        relationshipDelta: 13,
      },
    ],
  },
]

// ==================== VARIAZIONE 2: CONNESSIONE CRESCENTE (22-52 relazione) ====================

const growingBondChoices: MessageChoice[] = [
  {
    id: 'luna_bond_1',
    text: 'Voglio scoprire i tuoi veri sentimenti',
    nextMessageId: 'luna_bond_msg_2',
    relationshipDelta: 13,
  },
  {
    id: 'luna_bond_2',
    text: 'Sono caduto per te',
    nextMessageId: 'luna_bond_msg_3',
    relationshipDelta: 16,
  },
]

const growingBondDialogues: Message[] = [
  {
    id: 'luna_bond_msg_1',
    sender: 'npc',
    text: 'I miei sentimenti? Con te, sono... complicati. Mi sento vista, finalmente.',
    timestamp: new Date(),
    choices: growingBondChoices,
  },
  {
    id: 'luna_bond_msg_2',
    sender: 'npc',
    text: 'Allora raccontami. Cosa vedi in me? Voglio sentire le tue parole.',
    timestamp: new Date(),
    choices: [
      {
        id: 'luna_bond_msg2_1',
        text: 'Vedo una donna profonda e meravigliosa',
        nextMessageId: 'luna_bond_msg_2_follow',
        relationshipDelta: 14,
      },
    ],
  },
  {
    id: 'luna_bond_msg_3',
    sender: 'npc',
    text: 'Caduto... che parola dolce. Io sto cadendo anche io. Verso di te.',
    timestamp: new Date(),
    choices: [
      {
        id: 'luna_bond_msg3_1',
        text: 'Allora cadiamo insieme',
        nextMessageId: 'luna_bond_msg_3_follow',
        relationshipDelta: 17,
      },
    ],
  },
]

// ==================== VARIAZIONE 3: PROFONDA CONNESSIONE (52+ relazione) ====================

const deepBondDialogues: Message[] = [
  {
    id: 'luna_deep_msg_1',
    sender: 'npc',
    text: 'Ti amo. Lo so che è difficile credere, visto chi sono... ma è vero.',
    timestamp: new Date(),
    choices: [
      {
        id: 'luna_deep_1',
        text: '❤️ Ti amo anche io, per sempre',
        nextMessageId: 'luna_deep_msg_2',
        relationshipDelta: 25,
      },
      {
        id: 'luna_deep_2',
        text: 'Io amo te, Luna',
        nextMessageId: 'luna_deep_msg_2',
        relationshipDelta: 20,
      },
    ],
  },
  {
    id: 'luna_deep_msg_2',
    sender: 'npc',
    text: 'Allora viviamo una storia vera insieme. La più bella che io possa scrivere.',
    timestamp: new Date(),
    choices: [
      {
        id: 'luna_deep_final',
        text: 'Scriviamo la nostra storia insieme',
        nextMessageId: 'luna_deep_ending',
        relationshipDelta: 23,
      },
    ],
  },
]

// ==================== EXPORT ====================

export const lunaDialogueSet: NPCDialogueSet = {
  npcId: 'npc_luna',
  variations: [
    {
      minRelationshipLevel: 0,
      messages: firstMeetingDialogues,
    },
    {
      minRelationshipLevel: 22,
      messages: growingBondDialogues,
    },
    {
      minRelationshipLevel: 52,
      messages: deepBondDialogues,
    },
  ],
}

export const lunaDialogues = firstMeetingDialogues
