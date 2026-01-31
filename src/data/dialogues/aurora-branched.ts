import { Message, MessageChoice, NPCDialogueSet } from '../../types'

// ==================== VARIAZIONE 1: PRIMO INCONTRO (0-20 relazione) ====================

const firstMeetingChoices: MessageChoice[] = [
  {
    id: 'aurora_intro_1',
    text: '✨ Mi piace molto l\'arte! Che genere preferisci?',
    nextMessageId: 'aurora_msg_3',
    relationshipDelta: 10,
  },
  {
    id: 'aurora_intro_2',
    text: '🎵 La musica è la mia passione, specialmente quella indie',
    nextMessageId: 'aurora_msg_4',
    relationshipDelta: 8,
  },
  {
    id: 'aurora_intro_3',
    text: '🌿 Mi affascinano la natura e la filosofia',
    nextMessageId: 'aurora_msg_5',
    relationshipDelta: 12,
  },
]

const firstMeetingDialogues: Message[] = [
  {
    id: 'aurora_msg_1',
    sender: 'npc',
    text: 'Ciao! Sono Aurora. Mi piacciono persone creative. Dimmi, cosa ti affascina di più?',
    timestamp: new Date(),
    choices: firstMeetingChoices,
  },
  {
    id: 'aurora_msg_3',
    sender: 'npc',
    text: 'Bellissimo! L\'arte è il linguaggio dell\'anima. Io lavoro principalmente con scultura e pittura digitale.',
    timestamp: new Date(),
    choices: [
      {
        id: 'aurora_msg3_1',
        text: '💻 La pittura digitale è affascinante! Usi programmi particolari?',
        nextMessageId: 'aurora_msg_3_follow',
        relationshipDelta: 5,
      },
      {
        id: 'aurora_msg3_2',
        text: '🎨 Mi piacerebbe vederti lavorare un giorno',
        nextMessageId: 'aurora_msg_3_follow2',
        relationshipDelta: 15,
      },
    ],
  },
  {
    id: 'aurora_msg_4',
    sender: 'npc',
    text: 'Oh, indie music! Anche io adoro gli artisti indipendenti. C\'è qualcosa di puro nella loro musica.',
    timestamp: new Date(),
    choices: [
      {
        id: 'aurora_msg4_1',
        text: '🎧 Quale è il tuo artista indie preferito?',
        nextMessageId: 'aurora_msg_4_follow',
        relationshipDelta: 6,
      },
    ],
  },
]

// ==================== VARIAZIONE 2: CONNESSIONE CRESCENTE (20-50 relazione) ====================

const growingBondChoices: MessageChoice[] = [
  {
    id: 'aurora_bond_1',
    text: 'Mi piacerebbe conoscerti meglio... com\'è la tua vita di solito?',
    nextMessageId: 'aurora_bond_msg_2',
    relationshipDelta: 10,
  },
  {
    id: 'aurora_bond_2',
    text: 'Possiamo vederci di persona qualche volta?',
    nextMessageId: 'aurora_bond_msg_3',
    relationshipDelta: 15,
  },
]

const growingBondDialogues: Message[] = [
  {
    id: 'aurora_bond_msg_1',
    sender: 'npc',
    text: 'Sai, parlando con te sento una vibrazione diversa... c\'è qualcosa di speciale. Mi piace scoprire chi sei veramente.',
    timestamp: new Date(),
    choices: growingBondChoices,
  },
  {
    id: 'aurora_bond_msg_2',
    sender: 'npc',
    text: 'La mia vita è un mix di arte, solitudine creativa e momenti di gioia condivisi. Ultimamente penso molto a te...',
    timestamp: new Date(),
    choices: [
      {
        id: 'aurora_bond_msg2_1',
        text: 'Mi fa piacere sapere che pensi a me',
        nextMessageId: 'aurora_bond_msg_2_follow',
        relationshipDelta: 12,
      },
    ],
  },
]

// ==================== VARIAZIONE 3: PROFONDA CONNESSIONE (50+ relazione) ====================

const deepBondDialogues: Message[] = [
  {
    id: 'aurora_deep_msg_1',
    sender: 'npc',
    text: 'Non riesco a negarlo... mi sei importantissimo. I tuoi messaggi illuminano le mie giornate buie.',
    timestamp: new Date(),
    choices: [
      {
        id: 'aurora_deep_1',
        text: '❤️ Anche tu sei importante per me, più di quanto pensi',
        nextMessageId: 'aurora_deep_msg_2',
        relationshipDelta: 20,
      },
      {
        id: 'aurora_deep_2',
        text: 'Non voglio deluderti...',
        nextMessageId: 'aurora_deep_msg_sad',
        relationshipDelta: -10,
      },
    ],
  },
  {
    id: 'aurora_deep_msg_2',
    sender: 'npc',
    text: 'Allora... cosa pensi del nostro futuro? Potrebbe essere qualcosa di vero tra noi?',
    timestamp: new Date(),
    choices: [
      {
        id: 'aurora_deep_final_1',
        text: 'Credo che potremmo provare a costruire qualcosa insieme',
        nextMessageId: 'aurora_deep_ending_good',
        relationshipDelta: 25,
      },
    ],
  },
]

// ==================== EXPORT: Configurazione completa di Aurora ====================

export const auroraDialogueSet: NPCDialogueSet = {
  npcId: 'aurora',
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

// ==================== Esportazione per retrocompatibilità ====================
// Se usi ancora il vecchio sistema di array semplice, questo esporta i dialoghi base
export const auroraDialogues = firstMeetingDialogues
