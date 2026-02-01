import { Message, MessageChoice, NPCDialogueSet } from "../../types";

// ==================== VARIAZIONE 1: VALUTAZIONE CRITICA (0-15 relazione) ====================

const evaluationDialogues: Message[] = [
  {
    id: "alice_1",
    sender: "npc",
    text: "Allora, raccontami qualcosa di te. E per favore, risparmiami i soliti cliché su viaggi e Netflix. Dimmi qualcosa che conta davvero.",
    timestamp: new Date(),
    choices: [
      {
        id: "c1a",
        text: "Ti parlo del mio lavoro e dei miei obiettivi professionali",
        nextMessageId: "alice_2",
        relationshipDelta: 2,
      },
      {
        id: "c1b",
        text: "Beh, mi piace leggere e...",
        nextMessageId: "alice_2",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_2",
    sender: "npc",
    text: "Interessante. Hai degli obiettivi chiari o sei uno di quelli che 'va dove lo porta il vento'?",
    timestamp: new Date(),
    choices: [
      {
        id: "c2a",
        text: "Ho un piano preciso per i prossimi cinque anni",
        nextMessageId: "alice_3",
        relationshipDelta: 2,
      },
      {
        id: "c2b",
        text: "Mi piace restare flessibile e vedere cosa succede",
        nextMessageId: "alice_3",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_3",
    sender: "npc",
    text: "Bene. Io non sopporto le persone senza direzione. A cosa stai lavorando in questo momento?",
    timestamp: new Date(),
    choices: [
      {
        id: "c3a",
        text: "Sto sviluppando [progetto/carriera specifico]",
        nextMessageId: "alice_4",
        relationshipDelta: 1,
      },
      {
        id: "c3b",
        text: "Sto ancora capendo cosa voglio fare davvero",
        nextMessageId: "alice_4",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_4",
    sender: "npc",
    text: "Dimmi una cosa: quando fallisci, come reagisci?",
    timestamp: new Date(),
    choices: [
      {
        id: "c4a",
        text: "Analizzo cosa è andato storto e mi riorganizzo",
        nextMessageId: "alice_5",
        relationshipDelta: 2,
      },
      {
        id: "c4b",
        text: "Ci resto male, ma poi vado avanti",
        nextMessageId: "alice_5",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_5",
    sender: "npc",
    text: "Perfetto. Io non ho tempo per chi si crogiola nel fallimento. L'hai mai deluso qualcuno che contava su di te?",
    timestamp: new Date(),
    choices: [
      {
        id: "c5a",
        text: "Sì, e mi ha insegnato a essere più affidabile",
        nextMessageId: "alice_6",
        relationshipDelta: 1,
      },
      {
        id: "c5b",
        text: "Cerco sempre di non deludere nessuno",
        nextMessageId: "alice_6",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_6",
    sender: "npc",
    text: "La lealtà è importante. Ma dimmi: saresti disposto a sacrificare un'opportunità personale per qualcun altro?",
    timestamp: new Date(),
    choices: [
      {
        id: "c6a",
        text: "Dipende da quanto è importante per me quella persona",
        nextMessageId: "alice_7",
        relationshipDelta: 1,
      },
      {
        id: "c6b",
        text: "No, le mie opportunità vengono prima",
        nextMessageId: "alice_7",
        relationshipDelta: -2,
      },
      {
        id: "c6c",
        text: "Sì, le persone sono più importanti del successo",
        nextMessageId: "alice_7",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_7",
    sender: "npc",
    text: "Interessante risposta. Vediamo se sei coerente: qual è l'ultima volta che hai mentito per ottenere qualcosa?",
    timestamp: new Date(),
    choices: [
      {
        id: "c7a",
        text: "Non mento, non ne vale la pena",
        nextMessageId: "alice_8",
        relationshipDelta: -1,
      },
      {
        id: "c7b",
        text: "Tutti mentiamo quando serve, io incluso",
        nextMessageId: "alice_8",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_8",
    sender: "npc",
    text: "Onestà apprezzata. Dimmi: cosa pensi delle persone che dicono 'l'importante è partecipare'?",
    timestamp: new Date(),
    choices: [
      {
        id: "c8a",
        text: "Sono persone che hanno paura di competere",
        nextMessageId: "alice_9",
        relationshipDelta: 2,
      },
      {
        id: "c8b",
        text: "A volte partecipare è già un successo",
        nextMessageId: "alice_9",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_9",
    sender: "npc",
    text: "Esatto. Vincere è l'unica cosa che conta. Come gestisci la competizione?",
    timestamp: new Date(),
    choices: [
      {
        id: "c9a",
        text: "Mi motiva, mi fa dare il meglio",
        nextMessageId: "alice_10",
        relationshipDelta: 2,
      },
      {
        id: "c9b",
        text: "Non mi piace competere, preferisco collaborare",
        nextMessageId: "alice_10",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_10",
    sender: "npc",
    text: "Collaborare... tutti dicono così finché non c'è una promozione in palio. Sei mai stato tradito da un collega?",
    timestamp: new Date(),
    choices: [
      {
        id: "c10a",
        text: "Sì, e ho imparato a fidarmi meno",
        nextMessageId: "alice_11",
        relationshipDelta: 1,
      },
      {
        id: "c10b",
        text: "No, tendo a fidarmi delle persone",
        nextMessageId: "alice_11",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_11",
    sender: "npc",
    text: "Fidarsi è pericoloso. Dimmi, quando qualcuno ti ostacola, cosa fai?",
    timestamp: new Date(),
    choices: [
      {
        id: "c11a",
        text: "Trovo un modo per aggirarlo",
        nextMessageId: "alice_12",
        relationshipDelta: 2,
      },
      {
        id: "c11b",
        text: "Cerco di capire perché e risolvere il conflitto",
        nextMessageId: "alice_12",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_12",
    sender: "npc",
    text: "Pragmatico. Mi piace. Qual è la cosa più spietata che hai fatto per ottenere ciò che volevi?",
    timestamp: new Date(),
    choices: [
      {
        id: "c12a",
        text: "[Descrivi qualcosa di concreto]",
        nextMessageId: "alice_13",
        relationshipDelta: 2,
      },
      {
        id: "c12b",
        text: "Non mi considero una persona spietata",
        nextMessageId: "alice_13",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_13",
    sender: "npc",
    text: "'Spietato' è solo una parola che usano i deboli. Dimmi: cosa pensi del concetto di work-life balance?",
    timestamp: new Date(),
    choices: [
      {
        id: "c13a",
        text: "È fondamentale per la salute mentale",
        nextMessageId: "alice_14",
        relationshipDelta: -2,
      },
      {
        id: "c13b",
        text: "È una scusa per chi non ha abbastanza ambizione",
        nextMessageId: "alice_14",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_14",
    sender: "npc",
    text: "Finalmente qualcuno che capisce. Quante ore lavori a settimana?",
    timestamp: new Date(),
    choices: [
      {
        id: "c14a",
        text: "Le classiche 40 ore",
        nextMessageId: "alice_15",
        relationshipDelta: -1,
      },
      {
        id: "c14b",
        text: "Quante ne servono per eccellere",
        nextMessageId: "alice_15",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_15",
    sender: "npc",
    text: "Bene. Qual è il tuo più grande rimpianto?",
    timestamp: new Date(),
    nextMessageId: "alice_16",
  },
  {
    id: "alice_16",
    sender: "npc",
    text: "I rimpianti ci rendono più forti. Dimmi: se dovessi scegliere tra essere amato e essere rispettato, cosa sceglieresti?",
    timestamp: new Date(),
    choices: [
      {
        id: "c16a",
        text: "Essere rispettato",
        nextMessageId: "alice_17",
        relationshipDelta: 2,
      },
      {
        id: "c16b",
        text: "Essere amato",
        nextMessageId: "alice_17",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_17",
    sender: "npc",
    text: "Il rispetto è potere. L'amore è... temporaneo. Come definiresti il successo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c17a",
        text: "Raggiungere i miei obiettivi concreti",
        nextMessageId: "alice_18",
        relationshipDelta: 2,
      },
      {
        id: "c17b",
        text: "Essere felice e in pace con me stesso",
        nextMessageId: "alice_18",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_18",
    sender: "npc",
    text: "La felicità è sopravvalutata. È un sottoprodotto, non un obiettivo. Cosa ti spaventa di più?",
    timestamp: new Date(),
    choices: [
      {
        id: "c18a",
        text: "Il fallimento",
        nextMessageId: "alice_19",
        relationshipDelta: 1,
      },
      {
        id: "c18b",
        text: "Rimanere solo",
        nextMessageId: "alice_19",
        relationshipDelta: -1,
      },
      {
        id: "c18c",
        text: "Non lasciare un segno",
        nextMessageId: "alice_19",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_19",
    sender: "npc",
    text: "Lasciare un segno... sì, questo lo capisco. Come vuoi essere ricordato?",
    timestamp: new Date(),
    choices: [
      {
        id: "c19a",
        text: "Come qualcuno che ha realizzato grandi cose",
        nextMessageId: "alice_20",
        relationshipDelta: 2,
      },
      {
        id: "c19b",
        text: "Come una brava persona",
        nextMessageId: "alice_20",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_20",
    sender: "npc",
    text: "'Brava persona' è quello che dicono ai funerali di chi non ha fatto nulla di importante. Dimmi, sacrificheresti la tua integrità morale per un grande successo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c20a",
        text: "L'integrità non paga le bollette",
        nextMessageId: "alice_21",
        relationshipDelta: 2,
      },
      {
        id: "c20b",
        text: "Mai, è ciò che ci definisce",
        nextMessageId: "alice_21",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_21",
    sender: "npc",
    text: "Vedo che hai le idee chiare. Quando è stata l'ultima volta che hai pianto?",
    timestamp: new Date(),
    choices: [
      {
        id: "c21a",
        text: "Non ricordo, non sono un tipo emotivo",
        nextMessageId: "alice_22",
        relationshipDelta: 1,
      },
      {
        id: "c21b",
        text: "Recentemente, per [motivo]",
        nextMessageId: "alice_22",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_22",
    sender: "npc",
    text: "Le emozioni sono debolezze che gli altri possono sfruttare. Tu come le gestisci?",
    timestamp: new Date(),
    choices: [
      {
        id: "c22a",
        text: "Le tengo sotto controllo",
        nextMessageId: "alice_23",
        relationshipDelta: 2,
      },
      {
        id: "c22b",
        text: "Cerco di viverle pienamente",
        nextMessageId: "alice_23",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_23",
    sender: "npc",
    text: "Controllo. Esattamente. Cosa pensi delle persone che 'seguono il cuore'?",
    timestamp: new Date(),
    choices: [
      {
        id: "c23a",
        text: "Sono ingenue e destinate a soffrire",
        nextMessageId: "alice_24",
        relationshipDelta: 2,
      },
      {
        id: "c23b",
        text: "Sono coraggiose",
        nextMessageId: "alice_24",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_24",
    sender: "npc",
    text: "Il coraggio senza strategia è stupidità. Dimmi: cosa faresti per essere il migliore nel tuo campo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c24a",
        text: "Qualsiasi cosa serva",
        nextMessageId: "alice_25",
        relationshipDelta: 2,
      },
      {
        id: "c24b",
        text: "Molto, ma ci sono limiti",
        nextMessageId: "alice_25",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_25",
    sender: "npc",
    text: "I limiti sono auto-imposti. Hai mai sabotato qualcuno?",
    timestamp: new Date(),
    choices: [
      {
        id: "c25a",
        text: "Sì, quando era necessario",
        nextMessageId: "alice_26",
        relationshipDelta: 2,
      },
      {
        id: "c25b",
        text: "No, non fa parte dei miei valori",
        nextMessageId: "alice_26",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_26",
    sender: "npc",
    text: "I 'valori' sono catene che ci mettiamo da soli. Dimmi una cosa sincera: ti piace chi sei?",
    timestamp: new Date(),
    choices: [
      {
        id: "c26a",
        text: "Sì, sono fiero di quello che ho costruito",
        nextMessageId: "alice_27",
        relationshipDelta: 1,
      },
      {
        id: "c26b",
        text: "A volte mi chiedo se potrei essere migliore",
        nextMessageId: "alice_27",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_27",
    sender: "npc",
    text: "Migliorare è l'unica costante. Cosa pensi di me, finora?",
    timestamp: new Date(),
    choices: [
      {
        id: "c27a",
        text: "Sei impressionante, non incontro spesso persone così determinate",
        nextMessageId: "alice_28",
        relationshipDelta: 2,
      },
      {
        id: "c27b",
        text: "Sei un po' troppo intensa",
        nextMessageId: "alice_28",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_28",
    sender: "npc",
    text: "'Intensa' è quello che dicono quando una donna sa cosa vuole. Gli uomini lo chiamano 'ambizione'. Sei femminista?",
    timestamp: new Date(),
    choices: [
      {
        id: "c28a",
        text: "Credo nell'uguaglianza di opportunità",
        nextMessageId: "alice_29",
        relationshipDelta: 1,
      },
      {
        id: "c28b",
        text: "Non mi piacciono le etichette",
        nextMessageId: "alice_29",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_29",
    sender: "npc",
    text: "Le etichette sono per i prodotti. Dimmi: saresti disposto a rinunciare a tutto per raggiungere il tuo sogno più grande?",
    timestamp: new Date(),
    choices: [
      {
        id: "c29a",
        text: "Sì, senza esitazione",
        nextMessageId: "alice_30",
        relationshipDelta: 2,
      },
      {
        id: "c29b",
        text: "Non a tutto, alcune cose sono irrinunciabili",
        nextMessageId: "alice_30",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_30",
    sender: "npc",
    text: "Vediamo se sei davvero serio. Cosa sei disposto a sacrificare per stare con qualcuno come me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c30a",
        text: "Quello che serve, se ne vale la pena",
        nextMessageId: "alice_31",
        relationshipDelta: 2,
      },
      {
        id: "c30b",
        text: "Dipende da dove porta la relazione",
        nextMessageId: "alice_31",
        relationshipDelta: 0,
      },
    ],
  },
];

// ==================== VARIAZIONE 2: L'AGGRESSIONE STRUMENTALE (15-35 relazione) ====================

const instrumentalDialogues: Message[] = [
  {
    id: "alice_31",
    sender: "npc",
    text: "Bene. Allora parliamo chiaro: io non cerco 'compagnia'. Cerco qualcuno che mi aiuti a raggiungere i miei obiettivi. Sei quel qualcuno?",
    timestamp: new Date(),
    choices: [
      {
        id: "c31a",
        text: "Sì, posso esserti utile",
        nextMessageId: "alice_32",
        relationshipDelta: 2,
      },
      {
        id: "c31b",
        text: "Vorrei conoscerti meglio prima",
        nextMessageId: "alice_32",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_32",
    sender: "npc",
    text: "Conoscerci meglio... quanto tempo pensi che abbiamo? Il mondo non aspetta. Quali sono le tue connessioni professionali?",
    timestamp: new Date(),
    choices: [
      {
        id: "c32a",
        text: "[Descrivi network/contatti]",
        nextMessageId: "alice_33",
        relationshipDelta: 2,
      },
      {
        id: "c32b",
        text: "Nulla di particolarmente rilevante",
        nextMessageId: "alice_33",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_33",
    sender: "npc",
    text: "Vedo. E finanziariamente, come sei messo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c33a",
        text: "Sono stabile e in crescita",
        nextMessageId: "alice_34",
        relationshipDelta: 1,
      },
      {
        id: "c33b",
        text: "Me la cavo",
        nextMessageId: "alice_34",
        relationshipDelta: 0,
      },
      {
        id: "c33c",
        text: "Non credo sia rilevante ora",
        nextMessageId: "alice_34",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_34",
    sender: "npc",
    text: "Tutto è rilevante. Le relazioni sono partnership strategiche. Hai capito cosa voglio da te?",
    timestamp: new Date(),
    choices: [
      {
        id: "c34a",
        text: "Sì, vuoi qualcuno che ti supporti nei tuoi obiettivi",
        nextMessageId: "alice_35",
        relationshipDelta: 2,
      },
      {
        id: "c34b",
        text: "Sinceramente no, mi sembri complicata",
        nextMessageId: "alice_35",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_35",
    sender: "npc",
    text: "Non sono complicata. Sono chiara. La domanda è: tu sei abbastanza forte da starmi accanto?",
    timestamp: new Date(),
    choices: [
      {
        id: "c35a",
        text: "Sì, lo sono",
        nextMessageId: "alice_36",
        relationshipDelta: 1,
      },
      {
        id: "c35b",
        text: "Non so se 'forte' è la parola giusta",
        nextMessageId: "alice_36",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_36",
    sender: "npc",
    text: "Allora quale parola useresti? 'Adeguato'? 'Disponibile'? 'Utile'?",
    timestamp: new Date(),
    choices: [
      {
        id: "c36a",
        text: "Complementare",
        nextMessageId: "alice_37",
        relationshipDelta: 2,
      },
      {
        id: "c36b",
        text: "Partner",
        nextMessageId: "alice_37",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_37",
    sender: "npc",
    text: "Partner implica uguaglianza. Sei sicuro di essere al mio livello?",
    timestamp: new Date(),
    choices: [
      {
        id: "c37a",
        text: "Sono sicuro di poterci arrivare",
        nextMessageId: "alice_38",
        relationshipDelta: 1,
      },
      {
        id: "c37b",
        text: "Forse no, ma posso imparare",
        nextMessageId: "alice_38",
        relationshipDelta: 0,
      },
      {
        id: "c37c",
        text: "Sì, assolutamente",
        nextMessageId: "alice_38",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_38",
    sender: "npc",
    text: "L'arroganza mi piace, se supportata dai fatti. Dimostrami che non stai bluffando: qual è il tuo piano quinquennale?",
    timestamp: new Date(),
    choices: [
      {
        id: "c38a",
        text: "[Descrive piano dettagliato]",
        nextMessageId: "alice_39",
        relationshipDelta: 2,
      },
      {
        id: "c38b",
        text: "Non ho un piano così specifico",
        nextMessageId: "alice_39",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_39",
    sender: "npc",
    text: "Un piano è la differenza tra un sogno e un obiettivo. Quanto guadagnerai tra cinque anni?",
    timestamp: new Date(),
    choices: [
      {
        id: "c39a",
        text: "[Cifra ambiziosa]",
        nextMessageId: "alice_40",
        relationshipDelta: 2,
      },
      {
        id: "c39b",
        text: "Non lo so con certezza",
        nextMessageId: "alice_40",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_40",
    sender: "npc",
    text: "'Non lo so' è la risposta di chi non pianifica. Dimmi: cosa ti rende indispensabile?",
    timestamp: new Date(),
    choices: [
      {
        id: "c40a",
        text: "[Skill/qualità specifiche]",
        nextMessageId: "alice_41",
        relationshipDelta: 2,
      },
      {
        id: "c40b",
        text: "La mia lealtà",
        nextMessageId: "alice_41",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_41",
    sender: "npc",
    text: "La lealtà si compra. Le competenze no. Hai mai tradito qualcuno per un vantaggio personale?",
    timestamp: new Date(),
    choices: [
      {
        id: "c41a",
        text: "Sì, e lo rifarei",
        nextMessageId: "alice_42",
        relationshipDelta: 2,
      },
      {
        id: "c41b",
        text: "No, mai",
        nextMessageId: "alice_42",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_42",
    sender: "npc",
    text: "'Mai' significa che non hai mai avuto l'opportunità giusta. Dimmi: se dovessi scegliere tra me e la tua carriera, cosa sceglieresti?",
    timestamp: new Date(),
    choices: [
      {
        id: "c42a",
        text: "Te",
        nextMessageId: "alice_43",
        relationshipDelta: -1,
      },
      {
        id: "c42b",
        text: "La mia carriera",
        nextMessageId: "alice_43",
        relationshipDelta: 2,
      },
      {
        id: "c42c",
        text: "Perché dovrei scegliere?",
        nextMessageId: "alice_43",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_43",
    sender: "npc",
    text: "Esatto. Le scelte binarie sono per chi non sa negoziare. Ma dimmi: saresti geloso se usassi qualcun altro per avanzare?",
    timestamp: new Date(),
    choices: [
      {
        id: "c43a",
        text: "No, se è funzionale ai tuoi obiettivi",
        nextMessageId: "alice_44",
        relationshipDelta: 2,
      },
      {
        id: "c43b",
        text: "Sì, mi darebbe fastidio",
        nextMessageId: "alice_44",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_44",
    sender: "npc",
    text: "La gelosia è possessività. Io non appartengo a nessuno. Tu a chi appartieni?",
    timestamp: new Date(),
    choices: [
      {
        id: "c44a",
        text: "A me stesso",
        nextMessageId: "alice_45",
        relationshipDelta: 2,
      },
      {
        id: "c44b",
        text: "A chi mi merita",
        nextMessageId: "alice_45",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_45",
    sender: "npc",
    text: "Meritare... come si 'merita' qualcuno? Con i sentimenti o con le azioni?",
    timestamp: new Date(),
    choices: [
      {
        id: "c45a",
        text: "Con le azioni",
        nextMessageId: "alice_46",
        relationshipDelta: 2,
      },
      {
        id: "c45b",
        text: "Con entrambi",
        nextMessageId: "alice_46",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_46",
    sender: "npc",
    text: "I sentimenti cambiano. Le azioni costruiscono imperi. Qual è la tua definizione di amore?",
    timestamp: new Date(),
    choices: [
      {
        id: "c46a",
        text: "Partnership reciprocamente vantaggiosa",
        nextMessageId: "alice_47",
        relationshipDelta: 2,
      },
      {
        id: "c46b",
        text: "Connessione profonda e vulnerabilità",
        nextMessageId: "alice_47",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_47",
    sender: "npc",
    text: "Vulnerabilità... interessante. Tu saresti vulnerabile con me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c47a",
        text: "Se mi dimostri di potermi fidare",
        nextMessageId: "alice_48",
        relationshipDelta: 1,
      },
      {
        id: "c47b",
        text: "No, è troppo rischioso",
        nextMessageId: "alice_48",
        relationshipDelta: 0,
      },
      {
        id: "c47c",
        text: "Sì, con la persona giusta",
        nextMessageId: "alice_48",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_48",
    sender: "npc",
    text: "La fiducia si costruisce. O si estorce. Cosa preferisci?",
    timestamp: new Date(),
    choices: [
      {
        id: "c48a",
        text: "Costruirla",
        nextMessageId: "alice_49",
        relationshipDelta: 1,
      },
      {
        id: "c48b",
        text: "Dipende dalla situazione",
        nextMessageId: "alice_49",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_49",
    sender: "npc",
    text: "Pragmatico. Bene. Dimmi: come ti sentiresti se ti chiedessi di mentire per me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c49a",
        text: "Dipende dalla bugia",
        nextMessageId: "alice_50",
        relationshipDelta: 1,
      },
      {
        id: "c49b",
        text: "Lo farei senza problemi",
        nextMessageId: "alice_50",
        relationshipDelta: 2,
      },
      {
        id: "c49c",
        text: "Non lo farei",
        nextMessageId: "alice_50",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_50",
    sender: "npc",
    text: "Le bugie sono strumenti. Come tutti gli strumenti, vanno usati correttamente. Sei uno strumento utile?",
    timestamp: new Date(),
    choices: [
      {
        id: "c50a",
        text: "Sì",
        nextMessageId: "alice_51",
        relationshipDelta: 2,
      },
      {
        id: "c50b",
        text: "Non mi piace come la metti",
        nextMessageId: "alice_51",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_51",
    sender: "npc",
    text: "Come 'la metto' è irrilevante. Conta cosa ottengo. E tu cosa ottieni da me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c51a",
        text: "Accesso al tuo mondo e alle tue opportunità",
        nextMessageId: "alice_52",
        relationshipDelta: 2,
      },
      {
        id: "c51b",
        text: "Una connessione significativa",
        nextMessageId: "alice_52",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_52",
    sender: "npc",
    text: "Le connessioni significative sono sulle greeting cards. Io offro potere. Lo vuoi?",
    timestamp: new Date(),
    choices: [
      {
        id: "c52a",
        text: "Sì",
        nextMessageId: "alice_53",
        relationshipDelta: 2,
      },
      {
        id: "c52b",
        text: "Non è la mia priorità",
        nextMessageId: "alice_53",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_53",
    sender: "npc",
    text: "Allora qual è la tua priorità? E rispondi con sincerità, perché lo capirò se menti.",
    timestamp: new Date(),
    choices: [
      {
        id: "c53a",
        text: "Avere successo",
        nextMessageId: "alice_54",
        relationshipDelta: 2,
      },
      {
        id: "c53b",
        text: "Essere felice",
        nextMessageId: "alice_54",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_54",
    sender: "npc",
    text: "Il successo genera felicità. Non il contrario. Hai mai fatto qualcosa che ti facesse schifo per ottenere ciò che volevi?",
    timestamp: new Date(),
    choices: [
      {
        id: "c54a",
        text: "Sì",
        nextMessageId: "alice_55",
        relationshipDelta: 2,
      },
      {
        id: "c54b",
        text: "No",
        nextMessageId: "alice_55",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_55",
    sender: "npc",
    text: "Bene. Allora sai cosa significa davvero volere qualcosa. Quanto sei disposto a degradarti per me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c55a",
        text: "Non mi degraderei per nessuno",
        nextMessageId: "alice_56",
        relationshipDelta: -2,
      },
      {
        id: "c55b",
        text: "Dipende da cosa otterei in cambio",
        nextMessageId: "alice_56",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_56",
    sender: "npc",
    text: "Vedo. Sei transazionale. Come me. Ti eccita questo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c56a",
        text: "Sì",
        nextMessageId: "alice_57",
        relationshipDelta: 2,
      },
      {
        id: "c56b",
        text: "È... interessante",
        nextMessageId: "alice_57",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_57",
    sender: "npc",
    text: "Interessante è quando non sai cosa provare davvero. Dimmi la verità: hai paura di me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c57a",
        text: "No",
        nextMessageId: "alice_58",
        relationshipDelta: 1,
      },
      {
        id: "c57b",
        text: "Un po'",
        nextMessageId: "alice_58",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_58",
    sender: "npc",
    text: "La paura è rispetto. Il rispetto è la base del potere. Vuoi avere potere su di me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c58a",
        text: "No, voglio condividerlo",
        nextMessageId: "alice_59",
        relationshipDelta: 1,
      },
      {
        id: "c58b",
        text: "Sì",
        nextMessageId: "alice_59",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_59",
    sender: "npc",
    text: "Onesto. Ma il potere non si condivide. Si prende o si cede. Quale sei disposto a fare?",
    timestamp: new Date(),
    choices: [
      {
        id: "c59a",
        text: "Prenderlo",
        nextMessageId: "alice_60",
        relationshipDelta: 1,
      },
      {
        id: "c59b",
        text: "Cederlo",
        nextMessageId: "alice_60",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_60",
    sender: "npc",
    text: "Perfetto. Dimostramelo. Dimmi qualcosa che non hai mai detto a nessuno.",
    timestamp: new Date(),
    choices: [
      {
        id: "c60a",
        text: "[Confessione personale]",
        nextMessageId: "alice_61",
        relationshipDelta: 2,
      },
      {
        id: "c60b",
        text: "Non funziona così",
        nextMessageId: "alice_61",
        relationshipDelta: -1,
      },
    ],
  },
];

// ==================== VARIAZIONE 3: IL VUOTO EMERGENTE (35-55 relazione) ====================

const voidDialogues: Message[] = [
  {
    id: "alice_61",
    sender: "npc",
    text: "Sai cosa ho capito di te? Che sei disposto a giocare. Ma sai per cosa stai giocando?",
    timestamp: new Date(),
    choices: [
      {
        id: "c61a",
        text: "Per vincere",
        nextMessageId: "alice_62",
        relationshipDelta: 2,
      },
      {
        id: "c61b",
        text: "Per scoprirlo",
        nextMessageId: "alice_62",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_62",
    sender: "npc",
    text: "Vincere cosa, esattamente? Quando è stata l'ultima volta che hai vinto qualcosa che ti ha reso davvero soddisfatto?",
    timestamp: new Date(),
    choices: [
      {
        id: "c62a",
        text: "[Descrive vittoria]",
        nextMessageId: "alice_63",
        relationshipDelta: 1,
      },
      {
        id: "c62b",
        text: "Non lo ricordo",
        nextMessageId: "alice_63",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_63",
    sender: "npc",
    text: "Già. Vedi, io vinco continuamente. Promozioni, deal, riconoscimenti. E sai cosa sento ogni volta?",
    timestamp: new Date(),
    choices: [
      {
        id: "c63a",
        text: "Soddisfazione?",
        nextMessageId: "alice_64",
        relationshipDelta: 0,
      },
      {
        id: "c63b",
        text: "Niente",
        nextMessageId: "alice_64",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_64",
    sender: "npc",
    text: "Niente. Assolutamente niente. Solo il bisogno della prossima vittoria. È normale?",
    timestamp: new Date(),
    choices: [
      {
        id: "c64a",
        text: "Per le persone ambiziose, sì",
        nextMessageId: "alice_65",
        relationshipDelta: 2,
      },
      {
        id: "c64b",
        text: "No, forse dovresti rallentare",
        nextMessageId: "alice_65",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_65",
    sender: "npc",
    text: "Rallentare è morire. Se mi fermo, cosa rimane? Dimmi: tu sai chi sei quando non stai performando?",
    timestamp: new Date(),
    choices: [
      {
        id: "c65a",
        text: "Non ci ho mai pensato",
        nextMessageId: "alice_66",
        relationshipDelta: 2,
      },
      {
        id: "c65b",
        text: "Sì, ho una vita al di fuori del lavoro",
        nextMessageId: "alice_66",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_66",
    sender: "npc",
    text: "Una 'vita'. Fammi ridere. La vita è ciò che costruiamo, non ciò che viviamo. O mi sbaglio?",
    timestamp: new Date(),
    choices: [
      {
        id: "c66a",
        text: "No, hai ragione",
        nextMessageId: "alice_67",
        relationshipDelta: 2,
      },
      {
        id: "c66b",
        text: "Sì, ti sbagli",
        nextMessageId: "alice_67",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_67",
    sender: "npc",
    text: "Allora illuminami. Cos'è la 'vita' per te?",
    timestamp: new Date(),
    choices: [
      {
        id: "c67a",
        text: "Momenti significativi con persone che contano",
        nextMessageId: "alice_68",
        relationshipDelta: 0,
      },
      {
        id: "c67b",
        text: "Risultati misurabili",
        nextMessageId: "alice_68",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_68",
    sender: "npc",
    text: "I risultati sono l'unica cosa vera. Il resto è... nebbia. Sentimenti vaghi. Tu hai mai sentito che tutto ciò che fai è solo per dimostrare qualcosa?",
    timestamp: new Date(),
    choices: [
      {
        id: "c68a",
        text: "Sì",
        nextMessageId: "alice_69",
        relationshipDelta: 2,
      },
      {
        id: "c68b",
        text: "No",
        nextMessageId: "alice_69",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_69",
    sender: "npc",
    text: "Dimostrare a chi? Ai tuoi genitori? Alla società? A te stesso?",
    timestamp: new Date(),
    choices: [
      {
        id: "c69a",
        text: "A tutti",
        nextMessageId: "alice_70",
        relationshipDelta: 2,
      },
      {
        id: "c69b",
        text: "Solo a me stesso",
        nextMessageId: "alice_70",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_70",
    sender: "npc",
    text: "Io dimostro continuamente. E non basta mai. Quando mio padre mi diceva 'puoi fare di meglio', pensavo che un giorno avrei fatto abbastanza. Sai quando è arrivato quel giorno?",
    timestamp: new Date(),
    choices: [
      {
        id: "c70a",
        text: "Mai",
        nextMessageId: "alice_71",
        relationshipDelta: 2,
      },
      {
        id: "c70b",
        text: "Non ancora",
        nextMessageId: "alice_71",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_71",
    sender: "npc",
    text: "Mai. Perché 'abbastanza' non esiste. È un'illusione. Tu hai mai sentito di essere abbastanza?",
    timestamp: new Date(),
    choices: [
      {
        id: "c71a",
        text: "No",
        nextMessageId: "alice_72",
        relationshipDelta: 2,
      },
      {
        id: "c71b",
        text: "A volte",
        nextMessageId: "alice_72",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_72",
    sender: "npc",
    text: "'A volte' è auto-inganno. Dimmi: cosa succederebbe se smettessi di cercare di essere abbastanza?",
    timestamp: new Date(),
    choices: [
      {
        id: "c72a",
        text: "Collasserei",
        nextMessageId: "alice_73",
        relationshipDelta: 2,
      },
      {
        id: "c72b",
        text: "Forse sarei più felice",
        nextMessageId: "alice_73",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_73",
    sender: "npc",
    text: "Collassare. Esatto. Perché senza la performance, senza l'obiettivo, cosa rimane? Un guscio vuoto. Tu hai paura di essere vuoto?",
    timestamp: new Date(),
    choices: [
      {
        id: "c73a",
        text: "Sì",
        nextMessageId: "alice_74",
        relationshipDelta: 2,
      },
      {
        id: "c73b",
        text: "No",
        nextMessageId: "alice_74",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_74",
    sender: "npc",
    text: "Io sono terrificata. Ogni. Singolo. Giorno. E sai cosa faccio con quella paura?",
    timestamp: new Date(),
    choices: [
      {
        id: "c74a",
        text: "La usi come carburante",
        nextMessageId: "alice_75",
        relationshipDelta: 2,
      },
      {
        id: "c74b",
        text: "La sopprimi",
        nextMessageId: "alice_75",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_75",
    sender: "npc",
    text: "La trasformo in eccellenza. In perfezione. Perché se sono perfetta, non possono vedere il vuoto. Tu cosa nascondi dietro la tua perfezione?",
    timestamp: new Date(),
    choices: [
      {
        id: "c75a",
        text: "La paura di non essere nessuno",
        nextMessageId: "alice_76",
        relationshipDelta: 2,
      },
      {
        id: "c75b",
        text: "Niente, non sono perfetto",
        nextMessageId: "alice_76",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_76",
    sender: "npc",
    text: "Tutti nascondiamo qualcosa. La perfezione è una maschera. E io la indosso così bene che a volte dimentico cosa c'è sotto. Tu ti sei mai sentito come una maschera?",
    timestamp: new Date(),
    choices: [
      {
        id: "c76a",
        text: "Sì",
        nextMessageId: "alice_77",
        relationshipDelta: 2,
      },
      {
        id: "c76b",
        text: "No",
        nextMessageId: "alice_77",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_77",
    sender: "npc",
    text: "Le maschere sono più reali delle facce. Almeno sono oneste sulla loro falsità. Sei mai stato onesto con te stesso?",
    timestamp: new Date(),
    choices: [
      {
        id: "c77a",
        text: "Non saprei",
        nextMessageId: "alice_78",
        relationshipDelta: 2,
      },
      {
        id: "c77b",
        text: "Sì",
        nextMessageId: "alice_78",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_78",
    sender: "npc",
    text: "L'onestà è dolorosa. Io so esattamente cosa sono: un prodotto. Perfettamente calibrato. Massimamente efficiente. E tu?",
    timestamp: new Date(),
    choices: [
      {
        id: "c78a",
        text: "Anche io, forse",
        nextMessageId: "alice_79",
        relationshipDelta: 2,
      },
      {
        id: "c78b",
        text: "Io sono una persona",
        nextMessageId: "alice_79",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_79",
    sender: "npc",
    text: "'Persona'. Che parola romantica. Le persone hanno sentimenti, difetti, sogni. I prodotti hanno funzioni. Qual è la tua funzione?",
    timestamp: new Date(),
    choices: [
      {
        id: "c79a",
        text: "Avere successo",
        nextMessageId: "alice_80",
        relationshipDelta: 2,
      },
      {
        id: "c79b",
        text: "Essere felice",
        nextMessageId: "alice_80",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_80",
    sender: "npc",
    text: "Il successo è misurabile. La felicità no. I miei genitori mi hanno insegnato che solo ciò che si misura conta. Avevano ragione?",
    timestamp: new Date(),
    choices: [
      {
        id: "c80a",
        text: "Sì",
        nextMessageId: "alice_81",
        relationshipDelta: 2,
      },
      {
        id: "c80b",
        text: "No",
        nextMessageId: "alice_81",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_81",
    sender: "npc",
    text: "Certo che sì. Il resto è debolezza sentimentale. Tu sei mai stato debole?",
    timestamp: new Date(),
    choices: [
      {
        id: "c81a",
        text: "Sì",
        nextMessageId: "alice_82",
        relationshipDelta: 1,
      },
      {
        id: "c81b",
        text: "No",
        nextMessageId: "alice_82",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_82",
    sender: "npc",
    text: "Io sono stata debole una volta. Una volta sola. Ho pianto davanti a un collega. Sai cosa è successo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c82a",
        text: "L'ha usato contro di te",
        nextMessageId: "alice_83",
        relationshipDelta: 2,
      },
      {
        id: "c82b",
        text: "Ti ha supportata",
        nextMessageId: "alice_83",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_83",
    sender: "npc",
    text: "Mi ha sorpassata per una promozione tre mesi dopo. Da allora, non piango. Non mostro debolezza. Non sono umana. Sono efficiente. Tu vorresti essere come me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c83a",
        text: "Sì",
        nextMessageId: "alice_84",
        relationshipDelta: 2,
      },
      {
        id: "c83b",
        text: "No",
        nextMessageId: "alice_84",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_84",
    sender: "npc",
    text: "Tutti vogliono essere come me finché non capiscono cosa significa. Significa non dormire. Significa ottimizzare ogni momento. Significa che le relazioni sono KPI. Lo accetti?",
    timestamp: new Date(),
    choices: [
      {
        id: "c84a",
        text: "Sì",
        nextMessageId: "alice_85",
        relationshipDelta: 2,
      },
      {
        id: "c84b",
        text: "È terrificante",
        nextMessageId: "alice_85",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_85",
    sender: "npc",
    text: "Terrificante è realistico. Sai cosa ho fatto la settimana scorsa? Ho programmato un 'momento spontaneo' con un'amica. 45 minuti. Con agenda. È folle?",
    timestamp: new Date(),
    choices: [
      {
        id: "c85a",
        text: "È efficiente",
        nextMessageId: "alice_86",
        relationshipDelta: 2,
      },
      {
        id: "c85b",
        text: "Sì, è folle",
        nextMessageId: "alice_86",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_86",
    sender: "npc",
    text: "Folle è pensare che la spontaneità esista. Tutto è calcolo. Anche questa conversazione. Anche la mia presunta vulnerabilità. Anche... anche non lo so più. Tu pensi che io stia recitando?",
    timestamp: new Date(),
    choices: [
      {
        id: "c86a",
        text: "Sì",
        nextMessageId: "alice_87",
        relationshipDelta: 1,
      },
      {
        id: "c86b",
        text: "Non lo so",
        nextMessageId: "alice_87",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_87",
    sender: "npc",
    text: "Neanch'io lo so. E questa è la cosa più terrificante. Non so dove finisce la performance e dove inizia... se c'è qualcosa. C'è qualcosa?",
    timestamp: new Date(),
    choices: [
      {
        id: "c87a",
        text: "Deve esserci",
        nextMessageId: "alice_88",
        relationshipDelta: 0,
      },
      {
        id: "c87b",
        text: "Forse no",
        nextMessageId: "alice_88",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_88",
    sender: "npc",
    text: "Forse no. Forse sono solo una serie di comportamenti ottimizzati. Un algoritmo in carne e ossa. Questo ti attrae o ti repelle?",
    timestamp: new Date(),
    choices: [
      {
        id: "c88a",
        text: "Mi attrae",
        nextMessageId: "alice_89",
        relationshipDelta: 2,
      },
      {
        id: "c88b",
        text: "Mi repelle",
        nextMessageId: "alice_89",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_89",
    sender: "npc",
    text: "Bene. Perché ho bisogno di qualcuno che capisca. Che veda la macchina e la ami comunque. Potresti farlo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c89a",
        text: "Sì",
        nextMessageId: "alice_90",
        relationshipDelta: 2,
      },
      {
        id: "c89b",
        text: "Non lo so",
        nextMessageId: "alice_90",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_90",
    sender: "npc",
    text: "Allora fammi una promessa. Promettimi che quando guarderai dentro di me e non troverai nulla, non scapperai. Promettimelo.",
    timestamp: new Date(),
    choices: [
      {
        id: "c90a",
        text: "Te lo prometto",
        nextMessageId: "alice_91",
        relationshipDelta: 2,
      },
      {
        id: "c90b",
        text: "Non posso prometterlo",
        nextMessageId: "alice_91",
        relationshipDelta: -1,
      },
    ],
  },
];

// ==================== VARIAZIONE 4: IL MANICHINO PERFETTO (55+ relazione) ====================

const perfectMannequinDialogues: Message[] = [
  {
    id: "alice_91",
    sender: "npc",
    text: "Bene. Allora procediamo. Ho preparato un prospetto della nostra potenziale relazione. Obiettivi trimestrali, milestone, KPI emotivi. Vuoi vederlo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c91a",
        text: "Certo",
        nextMessageId: "alice_92",
        relationshipDelta: 1,
      },
      {
        id: "c91b",
        text: "Stai scherzando?",
        nextMessageId: "alice_92",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_92",
    sender: "npc",
    text: "Non scherzo mai. L'efficienza è l'unica morale. Il primo trimestre prevede: tre uscite pubbliche strategiche, due eventi di networking con le tue connessioni, e almeno cinque post sui social che documentano la nostra 'autenticità'. Accettabile?",
    timestamp: new Date(),
    choices: [
      {
        id: "c92a",
        text: "Accettabile",
        nextMessageId: "alice_93",
        relationshipDelta: 2,
      },
      {
        id: "c92b",
        text: "Questo è assurdo",
        nextMessageId: "alice_93",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_93",
    sender: "npc",
    text: "Assurdo è aspettarsi che le relazioni 'accadano' spontaneamente. Ho analizzato 47 relazioni di successo nel nostro settore. Il pattern è chiaro. Dobbiamo essere visibili, complementari, ambiziosi. Sei d'accordo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c93a",
        text: "Ha senso",
        nextMessageId: "alice_94",
        relationshipDelta: 2,
      },
      {
        id: "c93b",
        text: "Ma l'amore?",
        nextMessageId: "alice_94",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_94",
    sender: "npc",
    text: "L'amore è una reazione chimica che dura 18 mesi in media. Dopo, rimane solo la partnership strategica. Perché non saltare la parte inefficiente? Vuoi sapere quali ormoni sono coinvolti?",
    timestamp: new Date(),
    choices: [
      {
        id: "c94a",
        text: "No, grazie",
        nextMessageId: "alice_95",
        relationshipDelta: 0,
      },
      {
        id: "c94b",
        text: "Vai avanti",
        nextMessageId: "alice_95",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_95",
    sender: "npc",
    text: "Ossitocina, dopamina, serotonina. Tutte replicabili con comportamenti calibrati. Ho letto dodici libri di neuroscienze delle relazioni. Posso simulare l'innamoramento in sei settimane. Impressionante, no?",
    timestamp: new Date(),
    choices: [
      {
        id: "c95a",
        text: "Molto",
        nextMessageId: "alice_96",
        relationshipDelta: 2,
      },
      {
        id: "c95b",
        text: "Agghiacciante",
        nextMessageId: "alice_96",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_96",
    sender: "npc",
    text: "Agghiacciante è morire senza aver raggiunto il proprio potenziale. Io ottimizzerò te, tu ottimizzerai me. È evoluzione accelerata. Tu credi nell'evoluzione?",
    timestamp: new Date(),
    choices: [
      {
        id: "c96a",
        text: "Sì",
        nextMessageId: "alice_97",
        relationshipDelta: 2,
      },
      {
        id: "c96b",
        text: "Non così",
        nextMessageId: "alice_97",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_97",
    sender: "npc",
    text: "Allora sei inconsistente. L'evoluzione è brutale. I deboli vengono eliminati. Io non sarò mai debole. Non dormirò mai. Non piangerò mai. Non... non smetterò mai. Capisci?",
    timestamp: new Date(),
    choices: [
      {
        id: "c97a",
        text: "Capisco",
        nextMessageId: "alice_98",
        relationshipDelta: 2,
      },
      {
        id: "c97b",
        text: "Hai bisogno di aiuto",
        nextMessageId: "alice_98",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_98",
    sender: "npc",
    text: "Aiuto? Ho tre terapisti. Li uso come consulenti per ottimizzare le mie performance emotive. Li pago bene. Sono molto efficienti. Tu sei efficiente?",
    timestamp: new Date(),
    choices: [
      {
        id: "c98a",
        text: "Sì",
        nextMessageId: "alice_99",
        relationshipDelta: 2,
      },
      {
        id: "c98b",
        text: "Cerco di esserlo",
        nextMessageId: "alice_99",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_99",
    sender: "npc",
    text: "'Cercare' è fallire con metodo. Io non cerco. Eseguo. Ho calendarizzato i nostri prossimi sei mesi: aprile, evento benefico; maggio, weekend strategico a Positano; giugno, presentazione delle famiglie con obiettivi chiari. Procediamo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c99a",
        text: "Procediamo",
        nextMessageId: "alice_100",
        relationshipDelta: 2,
      },
      {
        id: "c99b",
        text: "Non so se...",
        nextMessageId: "alice_100",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_100",
    sender: "npc",
    text: "'Non so' non è una risposta nel mio vocabolario. Ho rimosso l'incertezza dal mio sistema operativo. Ora funziono solo con certezze. Tu sei una certezza o una variabile?",
    timestamp: new Date(),
    choices: [
      {
        id: "c100a",
        text: "Una certezza",
        nextMessageId: "alice_101",
        relationshipDelta: 2,
      },
      {
        id: "c100b",
        text: "Una variabile",
        nextMessageId: "alice_101",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_101",
    sender: "npc",
    text: "Le variabili vanno eliminate. Ma prima, un test. Dimmi: se dovessi scegliere tra salvare me o la tua carriera da un crollo pubblico, cosa sceglieresti?",
    timestamp: new Date(),
    choices: [
      {
        id: "c101a",
        text: "La mia carriera",
        nextMessageId: "alice_102",
        relationshipDelta: 2,
      },
      {
        id: "c101b",
        text: "Te",
        nextMessageId: "alice_102",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_102",
    sender: "npc",
    text: "Risposta interessante. Ma vedi, la domanda era un test di coerenza. La risposta corretta è: non esistono scenari in cui devo essere salvata. Io non crollo. Io non faccio errori. Io sono... cosa sono?",
    timestamp: new Date(),
    choices: [
      {
        id: "c102a",
        text: "Perfetta",
        nextMessageId: "alice_103",
        relationshipDelta: 2,
      },
      {
        id: "c102b",
        text: "Umana",
        nextMessageId: "alice_103",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_103",
    sender: "npc",
    text: "Umana. Che parola antiquata. Gli umani falliscono. Gli umani si stancano. Gli umani amano senza ROI. Io ho superato tutto questo. Sono post-umana. Tu vuoi evolverti con me?",
    timestamp: new Date(),
    choices: [
      {
        id: "c103a",
        text: "Sì",
        nextMessageId: "alice_104",
        relationshipDelta: 2,
      },
      {
        id: "c103b",
        text: "No",
        nextMessageId: "alice_104",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_104",
    sender: "npc",
    text: "Bene. Allora devi capire: io non 'sento' più. Ho sostituito i sentimenti con algoritmi decisionali. È più pulito. Più efficiente. Meno doloroso. Tu senti ancora dolore?",
    timestamp: new Date(),
    choices: [
      {
        id: "c104a",
        text: "Sì",
        nextMessageId: "alice_105",
        relationshipDelta: -1,
      },
      {
        id: "c104b",
        text: "A volte",
        nextMessageId: "alice_105",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_105",
    sender: "npc",
    text: "Il dolore è inefficiente. L'ho mappato e eliminato. Ora quando qualcosa di 'triste' accade, eseguo semplicemente il protocollo C-7: espressione di empatia, 3 secondi, poi torno al lavoro. Funziona perfettamente. Vuoi impararlo?",
    timestamp: new Date(),
    choices: [
      {
        id: "c105a",
        text: "Sì",
        nextMessageId: "alice_106",
        relationshipDelta: 2,
      },
      {
        id: "c105b",
        text: "No",
        nextMessageId: "alice_106",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_106",
    sender: "npc",
    text: "Vedi, il problema degli umani è che credono che sentire sia vivere. Ma vivere è misurare. Produrre. Eccellere. Io eccello sempre. Sempre. Sempre. Sempre. Perché non posso fermarmi. Non so come si fa. Lo sai tu?",
    timestamp: new Date(),
    choices: [
      {
        id: "c106a",
        text: "No",
        nextMessageId: "alice_107",
        relationshipDelta: 2,
      },
      {
        id: "c106b",
        text: "Si impara",
        nextMessageId: "alice_107",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "alice_107",
    sender: "npc",
    text: "Imparare implica fallimento. Io non fallisco. Ultimo mio fallimento documentato: 14 marzo 2019, ore 14:37, ho dimenticato un allegato in una email. Da allora, zero errori. 2,447 giorni di perfezione ininterrotta. Sei impressionato?",
    timestamp: new Date(),
    choices: [
      {
        id: "c107a",
        text: "Molto",
        nextMessageId: "alice_108",
        relationshipDelta: 2,
      },
      {
        id: "c107b",
        text: "Preoccupato",
        nextMessageId: "alice_108",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "alice_108",
    sender: "npc",
    text: "Preoccupazione è ciò che provano gli inferiori di fronte all'eccellenza. Io non sono preoccupata. Io sono... cosa sono? Aspetta, ho un foglio Excel per questo. Sì: sono 'Produttiva. Efficace. Ottimizzata. Vincente. Vuota.'",
    timestamp: new Date(),
    choices: [
      {
        id: "c108a",
        text: "Vuota?",
        nextMessageId: "alice_109",
        relationshipDelta: 1,
      },
      {
        id: "c108b",
        text: "Perfetta",
        nextMessageId: "alice_109",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_109",
    sender: "npc",
    text: "Oh, quello è un refuso. Doveva dire 'Completa'. Sì, completa. Anche se... a volte, alle 3:47 di notte, quando la melatonina non funziona e ho già ottimizzato tutto, mi chiedo se esisto davvero o se sono solo una check-list che cammina. Tu esisti?",
    timestamp: new Date(),
    choices: [
      {
        id: "c109a",
        text: "Credo di sì",
        nextMessageId: "alice_110",
        relationshipDelta: 1,
      },
      {
        id: "c109b",
        text: "Non lo so",
        nextMessageId: "alice_110",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "alice_110",
    sender: "npc",
    text: "Brava risposta. L'incertezza è onesta. Io ho eliminato l'onestà. Troppo costosa. Troppo rischiosa. Troppo umana. Ora sono solo performance. E la performance è impeccabile. Quindi, tecnicamente, sono impeccabile. Quindi sono perfetta. Quindi sono... nulla?",
    timestamp: new Date(),
    choices: [
      {
        id: "c110a",
        text: "Sei tutto quello che conta",
        nextMessageId: "alice_111",
        relationshipDelta: 2,
      },
      {
        id: "c110b",
        text: "Sei solo un'idea",
        nextMessageId: "alice_111",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "alice_111",
    sender: "npc",
    text: "Sai cosa facciamo al nostro primo appuntamento? Un foglio condiviso su Google Docs dove tracciamo l'efficienza della nostra conversazione. Battute al minuto. Insight scambiati. Connessioni create. Sarà perfetto.",
    timestamp: new Date(),
    choices: [
      {
        id: "c111a",
        text: "Non vedo l'ora",
        nextMessageId: "alice_112",
        relationshipDelta: 2,
      },
      {
        id: "c111b",
        text: "Ok...",
        nextMessageId: "alice_112",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "alice_112",
    sender: "npc",
    text: "E poi, quando tutto è documentato e ottimizzato, quando abbiamo costruito la relazione perfetta con zero spreco emotivo, forse riuscirò a ricordare cosa significa sentire qualcosa. O forse no. Forse sono già troppo lontana. Tu vieni comunque?",
    timestamp: new Date(),
  },
];

export const aliceDialogueSet: NPCDialogueSet = {
  npcId: "npc_alice",
  variations: [
    {
      minRelationshipLevel: 0,
      messages: evaluationDialogues,
    },
    {
      minRelationshipLevel: 15,
      messages: instrumentalDialogues,
    },
    {
      minRelationshipLevel: 35,
      messages: voidDialogues,
    },
    {
      minRelationshipLevel: 55,
      messages: perfectMannequinDialogues,
    },
  ],
};
