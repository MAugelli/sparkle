import { Message, MessageChoice } from '../../types'

export const lunaDialogues: Message[] = [
  {
    id: 'luna_msg_1',
    sender: 'npc',
    text: 'Mi piace osservare le persone interessanti come te. C\'è qualcosa di diverso in te.',
    timestamp: new Date(),
    choices: [
      {
        id: 'luna_choice_1',
        text: '📚 Mi piace leggere e scrivere storie',
        nextMessageId: 'luna_msg_2',
        relationshipDelta: 13,
      },
      {
        id: 'luna_choice_2',
        text: '☕ Adoro i caffè tranquilli dove pensare',
        nextMessageId: 'luna_msg_3',
        relationshipDelta: 14,
      },
      {
        id: 'luna_choice_3',
        text: '🎬 Sono appassionato di cinema e arti',
        nextMessageId: 'luna_msg_4',
        relationshipDelta: 12,
      },
    ],
  },
  {
    id: 'luna_msg_2',
    sender: 'npc',
    text: 'Allora siamo due anime gemelle. Amo fantasticare di mondi diversi attraverso le pagine. Quale genere preferisci?',
    timestamp: new Date(),
  },
  {
    id: 'luna_msg_3',
    sender: 'npc',
    text: 'Il mio posto preferito è il caffè di Via Roma. Ci vado ogni sera per scrivere e osservare.',
    timestamp: new Date(),
  },
  {
    id: 'luna_msg_4',
    sender: 'npc',
    text: 'Bellissimo! Recentemente ho scoperto alcuni film indipendenti straordinari. Te li consiglierò.',
    timestamp: new Date(),
  },
]
