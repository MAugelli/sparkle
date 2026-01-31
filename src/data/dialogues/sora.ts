import { Message, MessageChoice } from '../../types'

export const soraDialogues: Message[] = [
  {
    id: 'sora_msg_1',
    sender: 'npc',
    text: 'Hey there! 👋 Pronta per un\'avventura? Io vivo per il movimento e l\'eccitazione!',
    timestamp: new Date(),
    choices: [
      {
        id: 'sora_choice_1',
        text: '⚡ Adoro lo sport e l\'azione!',
        nextMessageId: 'sora_msg_2',
        relationshipDelta: 12,
      },
      {
        id: 'sora_choice_2',
        text: '✈️ Mi piacciono i viaggi e scoprire nuovi posti',
        nextMessageId: 'sora_msg_3',
        relationshipDelta: 10,
      },
      {
        id: 'sora_choice_3',
        text: '🎉 Sono più per le feste e la vita sociale',
        nextMessageId: 'sora_msg_4',
        relationshipDelta: 11,
      },
    ],
  },
  {
    id: 'sora_msg_2',
    sender: 'npc',
    text: 'Perfetto! Allora ti piacerà sapere che domani vado a fare arrampicata. Vuoi venire?',
    timestamp: new Date(),
  },
  {
    id: 'sora_msg_3',
    sender: 'npc',
    text: 'Oh sì! Ho tante storie di viaggio. Il mio ultimo trek in montagna è stato incredibile!',
    timestamp: new Date(),
  },
  {
    id: 'sora_msg_4',
    sender: 'npc',
    text: 'Fantastico! Questo weekend c\'è una festa incredibile. Se ti interessa, potremmo andarci insieme!',
    timestamp: new Date(),
  },
]
