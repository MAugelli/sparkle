import { Message, MessageChoice } from '../../types'

// Scelte disponibili per il primo messaggio di Aurora
const introChoices: MessageChoice[] = [
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

// Dialoghi di Aurora - messaggio per messaggio con scelte
export const auroraDialogues: Message[] = [
  {
    id: 'aurora_msg_1',
    sender: 'npc',
    text: 'Ciao! Sono Aurora. Mi piacciono persone creative. Dimmi, cosa ti affascina di più?',
    timestamp: new Date(),
    choices: introChoices,
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
        text: '🎧 Qual è il tuo artista indie preferito?',
        nextMessageId: 'aurora_msg_4_follow',
        relationshipDelta: 8,
      },
      {
        id: 'aurora_msg4_2',
        text: '🎵 Mi piacerebbe fare una playlist insieme',
        nextMessageId: 'aurora_msg_4_follow2',
        relationshipDelta: 12,
      },
    ],
  },
  {
    id: 'aurora_msg_5',
    sender: 'npc',
    text: 'Magnifico! La natura e la filosofia sono la fonte della mia ispirazione artistica. Mi trovi spesso a contemplare il tramonto.',
    timestamp: new Date(),
    choices: [
      {
        id: 'aurora_msg5_1',
        text: '🌅 I tramonti sono magici, qual è il tuo posto preferito?',
        nextMessageId: 'aurora_msg_5_follow',
        relationshipDelta: 12,
      },
      {
        id: 'aurora_msg5_2',
        text: '📖 Mi piacerebbe condividere quel momento con te',
        nextMessageId: 'aurora_msg_5_follow2',
        relationshipDelta: 15,
      },
    ],
  },
  // Follow-up messages
  {
    id: 'aurora_msg_3_follow',
    sender: 'npc',
    text: 'Uso principalmente Procreate e Photoshop. Ma ultimamente sto sperimentando anche con l\'AI art. È un mondo affascinante!',
    timestamp: new Date(),
  },
  {
    id: 'aurora_msg_3_follow2',
    sender: 'npc',
    text: 'Mi piacerebbe! Potremmo fare una sessione di brainstorming creativo insieme. Mi eccita l\'idea!',
    timestamp: new Date(),
  },
  {
    id: 'aurora_msg_4_follow',
    sender: 'npc',
    text: 'Amo Clairo, Conan Gray, e recentemente mi sto innamorando di Chloe Moriondo. Loro catturano emozioni vere.',
    timestamp: new Date(),
  },
  {
    id: 'aurora_msg_4_follow2',
    sender: 'npc',
    text: 'Che idea romantica! Mi farebbe piacere. La musica e la compagnia giusta possono creare momenti indimenticabili.',
    timestamp: new Date(),
  },
  {
    id: 'aurora_msg_5_follow',
    sender: 'npc',
    text: 'C\'è una collina vicino a casa mia dove il cielo diventa rosso fuoco. È il mio rifugio quando ho bisogno di ispirazione.',
    timestamp: new Date(),
  },
  {
    id: 'aurora_msg_5_follow2',
    sender: 'npc',
    text: 'Davvero? Sarebbe bellissimo... Mi sento come se ti conossi già.',
    timestamp: new Date(),
  },
]
