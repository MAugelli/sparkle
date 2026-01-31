import { Message, MessageChoice } from '../../types'

export const nyxDialogues: Message[] = [
  {
    id: 'nyx_msg_1',
    sender: 'npc',
    text: 'Benvenuto nel mio mondo cibernetico. Che cosa ti porta in questi oscuri angoli del web?',
    timestamp: new Date(),
    choices: [
      {
        id: 'nyx_choice_1',
        text: '🔐 Mi incuriosisce la tecnologia e la sicurezza',
        nextMessageId: 'nyx_msg_2',
        relationshipDelta: 10,
      },
      {
        id: 'nyx_choice_2',
        text: '🎮 Sono qui per i giochi e l\'avventura',
        nextMessageId: 'nyx_msg_3',
        relationshipDelta: 8,
      },
      {
        id: 'nyx_choice_3',
        text: '✨ Ho sentito parlare di te e volevo conoscerti',
        nextMessageId: 'nyx_msg_4',
        relationshipDelta: 15,
      },
    ],
  },
  {
    id: 'nyx_msg_2',
    sender: 'npc',
    text: 'Interessante... Forse abbiamo qualcosa in comune. Mi piacciono le persone curiose che cercano di capire come funzionano le cose.',
    timestamp: new Date(),
  },
  {
    id: 'nyx_msg_3',
    sender: 'npc',
    text: 'Bene, allora sarai dalla mia parte. Ti presenterò alcuni dei miei giochi preferiti...',
    timestamp: new Date(),
  },
  {
    id: 'nyx_msg_4',
    sender: 'npc',
    text: 'Interessante... Una reputazione che mi precede. Mi piace. Parliamo un po\' di te.',
    timestamp: new Date(),
  },
]
