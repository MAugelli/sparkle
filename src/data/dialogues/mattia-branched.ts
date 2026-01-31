import { Message, MessageChoice, NPCDialogueSet } from "../../types";

// ==================== VARIAZIONE 1: PRIMO CONTATTO (0-10 relazione) ====================

const mattiaFirstChoices: MessageChoice[] = [
  {
    id: "mattia_intro_1a",
    text: "Non amo descrivermi troppo.",
    nextMessageId: "mattia_msg_2",
    relationshipDelta: 1,
  },
  {
    id: "mattia_intro_1b",
    text: "È solo un profilo, niente di serio.",
    nextMessageId: "mattia_msg_2",
    relationshipDelta: 0,
  },
];

const mattiaFirstDialogues: Message[] = [
  {
    id: "mattia_msg_1",
    sender: "npc",
    text: "Ciao. Profilo minimale. Di solito significa che uno spera di non dover spiegare troppo.",
    timestamp: new Date(),
    choices: mattiaFirstChoices,
  },
  {
    id: "mattia_msg_2",
    sender: "npc",
    text: "Anch’io faccio così. Più resti vago, meno deludi.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_3",
  },
  {
    id: "mattia_msg_3",
    sender: "npc",
    text: "Lavoro. Funziono. Pago le bollette. A quanto pare basta per sembrare a posto.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_3a",
        text: "Non sembri entusiasta.",
        nextMessageId: "mattia_msg_4",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_3b",
        text: "In effetti è già qualcosa.",
        nextMessageId: "mattia_msg_4",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_4",
    sender: "npc",
    text: "L’entusiasmo è rumoroso. Io preferisco non farmi notare.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_5",
  },
  {
    id: "mattia_msg_5",
    sender: "npc",
    text: "Se non dai fastidio, nessuno ti chiede come stai davvero.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_5a",
        text: "Sembra triste.",
        nextMessageId: "mattia_msg_6",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_5b",
        text: "Sembra pratico.",
        nextMessageId: "mattia_msg_6",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_6",
    sender: "npc",
    text: "È gestibile. La tristezza vera arriva quando qualcuno insiste.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_7",
  },
  {
    id: "mattia_msg_7",
    sender: "npc",
    text: "Tu insisti?",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_7a",
        text: "Solo se ne vale la pena.",
        nextMessageId: "mattia_msg_8",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_7b",
        text: "No, figurati.",
        nextMessageId: "mattia_msg_8",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_8",
    sender: "npc",
    text: "Meglio così.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_9",
  },
  {
    id: "mattia_msg_9",
    sender: "npc",
    text: "Le persone che insistono di solito vogliono qualcosa.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_9a",
        text: "E tu cosa vuoi?",
        nextMessageId: "mattia_msg_10",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_9b",
        text: "Non sempre.",
        nextMessageId: "mattia_msg_10",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_10",
    sender: "npc",
    text: "Che la conversazione finisca prima di diventare scomoda.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_11",
  },
  {
    id: "mattia_msg_11",
    sender: "npc",
    text: "Ma per ora… possiamo continuare.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_11a",
        text: "Mi va.",
        nextMessageId: "mattia_msg_12",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_11b",
        text: "Se vuoi.",
        nextMessageId: "mattia_msg_12",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_12",
    sender: "npc",
    text: "Ok.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 2: APERTURA CONTROLLATA (10-25 relazione) ====================

const mattiaGrowingDialogues: Message[] = [
  {
    id: "mattia_msg_13",
    sender: "npc",
    text: "Sai cosa mi stanca? Dover spiegare che sto bene.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_13a",
        text: "Forse non lo sei.",
        nextMessageId: "mattia_msg_14",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_13b",
        text: "È una risposta comoda.",
        nextMessageId: "mattia_msg_14",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_14",
    sender: "npc",
    text: "È quella che funziona.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_15",
  },
  {
    id: "mattia_msg_15",
    sender: "npc",
    text: "Se dici che stai male, la gente si aspetta che tu voglia qualcosa.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_15a",
        text: "E se lo volessi?",
        nextMessageId: "mattia_msg_16",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_15b",
        text: "Ha senso.",
        nextMessageId: "mattia_msg_16",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_16",
    sender: "npc",
    text: "Io non voglio niente. Così non resto deluso.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_17",
  },
  {
    id: "mattia_msg_17",
    sender: "npc",
    text: "È una strategia sottovalutata.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_17a",
        text: "Ti protegge.",
        nextMessageId: "mattia_msg_18",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_17b",
        text: "Ti isola.",
        nextMessageId: "mattia_msg_checkpoint2_fail",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "mattia_msg_checkpoint2_fail",
    sender: "npc",
    text: "No. Stai già andando oltre. Non è il tipo di conversazione che cerco.",
    timestamp: new Date(),
  },
  {
    id: "mattia_msg_18",
    sender: "npc",
    text: "Esatto.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 3: FRATTURA VISIBILE (25-50 relazione) ====================

const mattiaDeepDialogues: Message[] = [
  {
    id: "mattia_msg_19",
    sender: "npc",
    text: "A volte sparisco mentre sono con qualcuno.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_19a",
        text: "Succede anche a me.",
        nextMessageId: "mattia_msg_20",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_19b",
        text: "È dissociazione.",
        nextMessageId: "mattia_msg_20",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_20",
    sender: "npc",
    text: "Sì. Ma detta così sembra una cosa seria.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_21",
  },
  {
    id: "mattia_msg_21",
    sender: "npc",
    text: "Io preferisco pensare che sono solo bravo a non esserci.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_21a",
        text: "È triste.",
        nextMessageId: "mattia_msg_22",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_21b",
        text: "È utile.",
        nextMessageId: "mattia_msg_22",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_22",
    sender: "npc",
    text: "È necessario.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_23",
  },
  {
    id: "mattia_msg_23",
    sender: "npc",
    text: "Se resto davvero, qualcuno si accorge che non so cosa voglio.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_23a",
        text: "Puoi scoprirlo.",
        nextMessageId: "mattia_msg_24",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_23b",
        text: "Non devi per forza.",
        nextMessageId: "mattia_msg_24",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_24",
    sender: "npc",
    text: "Non ho mai imparato.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_25",
  },
  {
    id: "mattia_msg_25",
    sender: "npc",
    text: "Ho imparato a sembrare stabile.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_25a",
        text: "Non è la stessa cosa.",
        nextMessageId: "mattia_msg_26",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_25b",
        text: "È abbastanza.",
        nextMessageId: "mattia_msg_checkpoint3_fail",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "mattia_msg_checkpoint3_fail",
    sender: "npc",
    text: "No. Così no. Non voglio essere capito a metà.",
    timestamp: new Date(),
  },
  {
    id: "mattia_msg_26",
    sender: "npc",
    text: "Infatti.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 4: ESPOSIZIONE (50+ relazione) ====================

const mattiaIntenseDialogues: Message[] = [
  {
    id: "mattia_msg_27",
    sender: "npc",
    text: "Se resto troppo, mi sento… sfocato.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_27a",
        text: "Perché?",
        nextMessageId: "mattia_msg_28",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_27b",
        text: "Allora vai.",
        nextMessageId: "mattia_msg_checkpoint4_fail",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "mattia_msg_checkpoint4_fail",
    sender: "npc",
    text: "Ecco. Visto? Meglio così.",
    timestamp: new Date(),
  },
  {
    id: "mattia_msg_28",
    sender: "npc",
    text: "Perché non so chi sono quando qualcuno mi guarda davvero.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_29",
  },
  {
    id: "mattia_msg_29",
    sender: "npc",
    text: "Finché non mi guardano, posso essere qualunque cosa.",
    timestamp: new Date(),
    choices: [
      {
        id: "mattia_choice_29a",
        text: "E ora?",
        nextMessageId: "mattia_msg_30",
        relationshipDelta: 1,
      },
      {
        id: "mattia_choice_29b",
        text: "Ti stai nascondendo.",
        nextMessageId: "mattia_msg_30",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "mattia_msg_30",
    sender: "npc",
    text: "Ora sono stanco.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 5: EPILOGO (60+ relazione) ====================

const mattiaEpilogueDialogues: Message[] = [
  {
    id: "mattia_msg_31",
    sender: "npc",
    text: "Se sparisco non è perché non mi importi.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_32",
  },
  {
    id: "mattia_msg_32",
    sender: "npc",
    text: "È perché restare richiede una forma che non ho mai costruito.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_33",
  },
  {
    id: "mattia_msg_33",
    sender: "npc",
    text: "Alcuni diventano qualcosa. Io ho imparato a non esserlo.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_34",
  },
  {
    id: "mattia_msg_34",
    sender: "npc",
    text: "Se mi cerchi, mi trovi sempre qui.",
    timestamp: new Date(),
    nextMessageId: "mattia_msg_35",
  },
  {
    id: "mattia_msg_35",
    sender: "npc",
    text: "Un passo prima.",
    timestamp: new Date(),
  },
];

export const mattiaDialogueSet: NPCDialogueSet = {
  npcId: "npc_mattia",
  variations: [
    { minRelationshipLevel: 0, messages: mattiaFirstDialogues },
    { minRelationshipLevel: 10, messages: mattiaGrowingDialogues },
    { minRelationshipLevel: 25, messages: mattiaDeepDialogues },
    { minRelationshipLevel: 50, messages: mattiaIntenseDialogues },
    { minRelationshipLevel: 60, messages: mattiaEpilogueDialogues },
  ],
};
