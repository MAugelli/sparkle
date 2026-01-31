import { Message, MessageChoice, NPCDialogueSet } from '../../types'

// ==================== VARIAZIONE 1: PRIMO INCONTRO (0-25 relazione) ====================

const firstMeetingChoices: MessageChoice[] = [
  {
    id: 'nyx_intro_1',
    text: '🌙 Sei misteriosa... mi piace',
    nextMessageId: 'nyx_msg_2',
    relationshipDelta: 12,
  },
  {
    id: 'nyx_intro_2',
    text: '💻 Lavori nel tech?',
    nextMessageId: 'nyx_msg_3',
    relationshipDelta: 8,
  },
]

const firstMeetingDialogues: Message[] = [
  {
    id: 'nyx_msg_1',
    sender: 'npc',
    text: 'Ciao... non vedo molte persone interessanti da queste parti. Tu lo sei?',
    timestamp: new Date(),
    choices: firstMeetingChoices,
  },
  {
    id: 'nyx_msg_2',
    sender: 'npc',
    text: 'Bene, allora magari non sarà una conversazione noiosa. Mi piace quando qualcuno non ha paura del buio.',
    timestamp: new Date(),
    choices: [
      {
        id: 'nyx_msg2_1',
        text: 'Il buio non mi spaventa, specialmente con te',
        nextMessageId: 'nyx_msg_2_follow',
        relationshipDelta: 10,
      },
    ],
  },
  {
    id: 'nyx_msg_3',
    sender: 'npc',
    text: 'Più o meno. Lavoro su cose... interessanti. Robe che la maggior parte della gente non capisce.',
    timestamp: new Date(),
    choices: [
      {
        id: 'nyx_msg3_1',
        text: 'Mi piacerebbe capire le tue cose',
        nextMessageId: 'nyx_msg_3_follow',
        relationshipDelta: 9,
      },
    ],
  },
]

// ==================== VARIAZIONE 2: CONNESSIONE CRESCENTE (25-55 relazione) ====================

const growingBondChoices: MessageChoice[] = [
  {
    id: 'nyx_bond_1',
    text: 'Sento che tra noi c\'è qualcosa di diverso',
    nextMessageId: 'nyx_bond_msg_2',
    relationshipDelta: 12,
  },
  {
    id: 'nyx_bond_2',
    text: 'Mi piaci... molto più di quanto dovrebbe',
    nextMessageId: 'nyx_bond_msg_3',
    relationshipDelta: 18,
  },
]

const growingBondDialogues: Message[] = [
  {
    id: 'nyx_bond_msg_1',
    sender: 'npc',
    text: 'Sai... di solito le persone mi annoiano dopo un po\'. Con te... non succede. È strano.',
    timestamp: new Date(),
    choices: growingBondChoices,
  },
  {
    id: 'nyx_bond_msg_2',
    sender: 'npc',
    text: 'Diverso, eh? Potrei abituarmi a questo tipo di diverso. Continua così.',
    timestamp: new Date(),
    choices: [
      {
        id: 'nyx_bond_msg2_1',
        text: 'Voglio essere importante per te',
        nextMessageId: 'nyx_bond_msg_2_follow',
        relationshipDelta: 14,
      },
    ],
  },
  {
    id: 'nyx_bond_msg_3',
    sender: 'npc',
    text: 'Mi dici così come se fosse facile... Non conosco questo terreno. Fammi capire cosa significa.',
    timestamp: new Date(),
    choices: [
      {
        id: 'nyx_bond_msg3_1',
        text: 'Significa che voglio stare con te, davvero',
        nextMessageId: 'nyx_bond_msg_3_follow',
        relationshipDelta: 16,
      },
    ],
  },
]

// ==================== VARIAZIONE 3: PROFONDA CONNESSIONE (55+ relazione) ====================

const deepBondDialogues: Message[] = [
  {
    id: 'nyx_deep_msg_1',
    sender: 'npc',
    text: 'Ti amo. Non pensavo di dire queste parole, ma eccoti qui... a cambiare tutto.',
    timestamp: new Date(),
    choices: [
      {
        id: 'nyx_deep_1',
        text: '❤️ Io amo te, più di qualsiasi cosa',
        nextMessageId: 'nyx_deep_msg_2',
        relationshipDelta: 25,
      },
      {
        id: 'nyx_deep_2',
        text: 'Avevo bisogno di sentirlo',
        nextMessageId: 'nyx_deep_msg_2',
        relationshipDelta: 15,
      },
    ],
  },
  {
    id: 'nyx_deep_msg_2',
    sender: 'npc',
    text: 'Allora restiamo insieme? Voglio vivere questa strana avventura... con te.',
    timestamp: new Date(),
    choices: [
      {
        id: 'nyx_deep_final',
        text: 'Per sempre, Nyx',
        nextMessageId: 'nyx_deep_ending',
        relationshipDelta: 20,
      },
    ],
  },
]

// ==================== EXPORT ====================

export const nyxDialogueSet: NPCDialogueSet = {
  npcId: 'npc_nyx',
  variations: [
    {
      minRelationshipLevel: 0,
      messages: firstMeetingDialogues,
    },
    {
      minRelationshipLevel: 25,
      messages: growingBondDialogues,
    },
    {
      minRelationshipLevel: 55,
      messages: deepBondDialogues,
    },
  ],
}

export const nyxDialogues = firstMeetingDialogues
