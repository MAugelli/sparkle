import { Message, MessageChoice, NPCDialogueSet } from "../../types";

// ==================== VARIAZIONE 1: PRIMO INCONTRO (0-10 relazione) ====================

const firstMeetingChoices: MessageChoice[] = [
  {
    id: "max_intro_1a",
    text: "Sì, la mia passione è {interesse}. Senza non saprei cosa fare.",
    nextMessageId: "max_msg_2",
    relationshipDelta: 1,
  },
  {
    id: "max_intro_1b",
    text: "Era più un modo di dire.",
    nextMessageId: "max_msg_2",
    relationshipDelta: 0,
  },
];

const firstMeetingDialogues: Message[] = [
  {
    id: "max_msg_1",
    sender: "npc",
    text: "Ciao. Vedo che hai messo {interesse} tra gli interessi. Non è comune.",
    timestamp: new Date(),
    choices: firstMeetingChoices,
  },
  {
    id: "max_msg_2",
    sender: "npc",
    text: "Capisco. La mia passione è l'allenamento. La gente sottovaluta quanto sia facile perdersi senza.",
    timestamp: new Date(),
    nextMessageId: "max_msg_3",
  },
  {
    id: "max_msg_3",
    sender: "npc",
    text: "Io mi alleno quasi ogni giorno. Non per estetica. È struttura.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_3a",
        text: "Figo! Da quanto tempo ti alleni?",
        nextMessageId: "max_msg_4",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_3b",
        text: "Suona un po' estremo.",
        nextMessageId: "max_msg_4",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_4",
    sender: "npc",
    text: "Mi alleno da più di dieci anni. All'inizio per rabbia. Poi per abitudine. Ora perché funziona.",
    timestamp: new Date(),
    nextMessageId: "max_msg_5",
  },
  {
    id: "max_msg_5",
    sender: "npc",
    text: "Quando il corpo risponde, la testa smette di fare casino.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_5a",
        text: "Quindi è una forma di terapia?",
        nextMessageId: "max_msg_6",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_5b",
        text: "E quando non riesci ad allenarti?",
        nextMessageId: "max_msg_6",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_5c",
        text: "Non ti stanchi mai?",
        nextMessageId: "max_msg_6",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_6",
    sender: "npc",
    text: "Non è proprio terapia, ma quasi. Quando non mi alleno la sento, la testa va alla deriva. Preferisco allenarmi che non farlo, ecco. Diciamo che è qualcosa che non mi tradisce.",
    timestamp: new Date(),
    nextMessageId: "max_msg_7",
  },
  {
    id: "max_msg_7",
    sender: "npc",
    text: "Le persone sì. Le situazioni sì. Il corpo no. Se lavori, risponde.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_7a",
        text: "Suona come se ti fidassi poco degli altri.",
        nextMessageId: "max_msg_8",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_7b",
        text: "Non tutto si può controllare così.",
        nextMessageId: "max_msg_8",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_8",
    sender: "npc",
    text: "Cosa ti devo dire? È questione di responsabilità. Io so cosa devo fare. Gli altri no.",
    timestamp: new Date(),
    nextMessageId: "max_msg_9",
  },
  {
    id: "max_msg_9",
    sender: "npc",
    text: "Troppa gente scambia l'accettarsi con il lasciarsi andare.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_9a",
        text: "Non pensi che ci voglia equilibrio?",
        nextMessageId: "max_msg_10",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_9b",
        text: "Ognuno sopravvive come può.",
        nextMessageId: "max_msg_10",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_9c",
        text: "Sembra che tu ti chieda molto.",
        nextMessageId: "max_msg_10",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_10",
    sender: "npc",
    text: "Nessuno nasce stabile. Prima serve disciplina.",
    timestamp: new Date(),
    nextMessageId: "max_msg_11",
  },
  {
    id: "max_msg_11",
    sender: "npc",
    text: "Ho visto cosa succede quando molli. Non è bello.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_11a",
        text: "Ti è successo qualcosa?",
        nextMessageId: "max_msg_12",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_11b",
        text: "Sicuro di volerne parlare? Insomma, io ero qui per rimorchiare.",
        nextMessageId: "max_msg_12",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_12",
    sender: "npc",
    text: "Sì. Un infortunio, anni fa. Tre mesi fermo.",
    timestamp: new Date(),
    nextMessageId: "max_msg_13",
  },
  {
    id: "max_msg_13",
    sender: "npc",
    text: "All'inizio pensi: riposo. Poi il corpo cambia. Poi la testa segue.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_13a",
        text: "Dev'essere stato difficile.",
        nextMessageId: "max_msg_14",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_13b",
        text: "E cosa hai fatto?",
        nextMessageId: "max_msg_14",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_14",
    sender: "npc",
    text: "Ho capito che se perdo questo, perdo tutto. Non intendo ripeterlo.",
    timestamp: new Date(),
    nextMessageId: "max_msg_15",
  },
  {
    id: "max_msg_15",
    sender: "npc",
    text: "Per questo evito chi prende le cose alla leggera.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_15a",
        text: "Non pensi sia un po' ingiusto?",
        nextMessageId: "max_msg_checkpoint1_fail",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_15b",
        text: "Capisco cosa intendi.",
        nextMessageId: "max_msg_16",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "max_msg_checkpoint1_fail",
    sender: "npc",
    text: "Stiamo perdendo tempo. Non sento davvero la connessione. Chiudo qui. Buona fortuna.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 2: CONNESSIONE CRESCENTE (10-25 relazione) ====================

const growingBondDialogues: Message[] = [
  {
    id: "max_msg_16",
    sender: "npc",
    text: "La forza non è costante. La disciplina sì. È questo che la gente confonde.",
    nextMessageId: "max_msg_16",
    timestamp: new Date(),
  },
  {
    id: "max_msg_17",
    sender: "npc",
    text: "Tu come gestisci quando senti di stare cedendo?",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_17a",
        text: "Chiedo aiuto.",
        nextMessageId: "max_msg_18",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_17b",
        text: "Mi chiudo finché passa.",
        nextMessageId: "max_msg_18",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_17c",
        text: "Cerco distrazioni.",
        nextMessageId: "max_msg_18",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_18",
    sender: "npc",
    text: "Io aumento il carico. Finché il rumore sparisce.",
    timestamp: new Date(),
    nextMessageId: "max_msg_19",
  },
  {
    id: "max_msg_19",
    sender: "npc",
    text: "Non è elegante, ma è efficace.",
    timestamp: new Date(),
    nextMessageId: "max_msg_20",
  },
  {
    id: "max_msg_20",
    sender: "npc",
    text: "La verità è che nessuno ti salva. O reggi, o crolli.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_20a",
        text: "Non sono d'accordo.",
        nextMessageId: "max_msg_21",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_20b",
        text: "È una visione dura.",
        nextMessageId: "max_msg_21",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_20c",
        text: "Forse hai ragione.",
        nextMessageId: "max_msg_21",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "max_msg_21",
    sender: "npc",
    text: "Non è che io sia duro. È che ho visto cosa succede quando ti concedi margine.",
    timestamp: new Date(),
    nextMessageId: "max_msg_22",
  },
  {
    id: "max_msg_22",
    sender: "npc",
    text: "Il margine diventa abitudine, l'abitudine diventa scusa, la scusa diventa identità.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_22a",
        text: "Dipende da chi sei.",
        nextMessageId: "max_msg_23",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_22b",
        text: "Questa è un'idiozia. Tutti dobbiamo respirare.",
        nextMessageId: "max_msg_checkpoint2_fail",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "max_msg_checkpoint2_fail",
    sender: "npc",
    text: "Stai perdendo tempo. Non capirai mai come funziona realmente.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 3: CONNESSIONE PROFONDA (25-50 relazione) ====================

const deepBondDialogues: Message[] = [
  {
    id: "max_msg_23",
    sender: "npc",
    text: "All'inizio perdi tono. Poi perdi rispetto. Poi smetti di riconoscerti.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_23a",
        text: "Sembra una paura più che una regola.",
        nextMessageId: "max_msg_24",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_23b",
        text: "È una visione molto rigida.",
        nextMessageId: "max_msg_24",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_23c",
        text: "Non credo funzioni così per tutti.",
        nextMessageId: "max_msg_24",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_24",
    sender: "npc",
    text: "Funziona così per chi non può permettersi di cedere. Io sono uno di quelli.",
    timestamp: new Date(),
    nextMessageId: "max_msg_25",
  },
  {
    id: "max_msg_25",
    sender: "npc",
    text: "Se mollo, non resto 'me stesso ma stanco'. Resto altro.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_25a",
        text: "Ti giudichi molto.",
        nextMessageId: "max_msg_26",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_25b",
        text: "Tutti cambiano.",
        nextMessageId: "max_msg_26",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_26",
    sender: "npc",
    text: "Io divento inutile senza la palestra. Trasparente.",
    timestamp: new Date(),
    nextMessageId: "max_msg_27",
  },
  {
    id: "max_msg_27",
    sender: "npc",
    text: "Il corpo è l'unica prova che esisto davvero.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_27a",
        text: "Hai qualcosa da dimostrare, cowboy?",
        nextMessageId: "max_msg_28",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_27b",
        text: "È pesante da sentire.",
        nextMessageId: "max_msg_28",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_27c",
        text: "Capisco la sensazione.",
        nextMessageId: "max_msg_28",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "max_msg_28",
    sender: "npc",
    text: "Io esisto finché reggo.",
    timestamp: new Date(),
    nextMessageId: "max_msg_29",
  },
  {
    id: "max_msg_29",
    sender: "npc",
    text: "Quando mi alleno so esattamente dove finisco io e dove inizia il dolore. È chiaro. Onesto.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_29a",
        text: "Suona come se il dolore fosse rassicurante.",
        nextMessageId: "max_msg_30",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_29b",
        text: "Non ti fa paura vivere così?",
        nextMessageId: "max_msg_30",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_30",
    sender: "npc",
    text: "Fuori dalla palestra è tutto vago. Opinioni. Emozioni. Interpretazioni.",
    timestamp: new Date(),
    nextMessageId: "max_msg_31",
  },
  {
    id: "max_msg_31",
    sender: "npc",
    text: "In palestra no. I numeri non discutono. Cento chili in panca sono cento chili in panca.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_31a",
        text: "È rassicurante, capisco.",
        nextMessageId: "max_msg_32",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_31b",
        text: "Ma il corpo non è solo numeri.",
        nextMessageId: "max_msg_32",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_32",
    sender: "npc",
    text: "Il corpo è chimica, carico, recupero. Chi dice il contrario mente. Prima di tutto a sé stesso.",
    timestamp: new Date(),
    nextMessageId: "max_msg_33",
  },
  {
    id: "max_msg_33",
    sender: "npc",
    text: "Io non lascio nulla al caso.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_33a",
        text: "In che senso?",
        nextMessageId: "max_msg_34",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_33b",
        text: "Suona… molto controllato.",
        nextMessageId: "max_msg_34",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_34",
    sender: "npc",
    text: "Alimentazione, integrazione, sonno. E quando non basta, si trova altro modo.",
    timestamp: new Date(),
    nextMessageId: "max_msg_35",
  },
  {
    id: "max_msg_35",
    sender: "npc",
    text: "La gente pensa che la costanza sia naturale. Non lo è.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_35a",
        text: "'Altro modo' come?",
        nextMessageId: "max_msg_36",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_35b",
        text: "Non sembra salutare.",
        nextMessageId: "max_msg_36",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_36",
    sender: "npc",
    text: "Integratori, prevalentemente. Se non bastano… integro con qualcosa di più forte.",
    timestamp: new Date(),
    nextMessageId: "max_msg_37",
  },
  {
    id: "max_msg_37",
    sender: "npc",
    text: "Spero non sia un problema per te. Alcuni si spaventano quando scoprono che non tutto è naturale.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_37a",
        text: "Stai parlando di farmaci?",
        nextMessageId: "max_msg_38",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_37b",
        text: "Mi stai dicendo che ti fai del male.",
        nextMessageId: "max_msg_38",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_38",
    sender: "npc",
    text: "Sto dicendo che conosco i limiti e che non li subisco passivamente. Esami regolari. Valori sotto controllo. Non sono uno sprovveduto.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_38a",
        text: "Ti sei informato molto.",
        nextMessageId: "max_msg_39",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_38b",
        text: "Questo non lo rende sicuro.",
        nextMessageId: "max_msg_39",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_39",
    sender: "npc",
    text: "'Sicuro' non esiste. Ci sono due milioni di incidenti d'auto l'anno. L'aereo è infinitamente più sicuro, ma anche quelli cadono. E anche se trovassi un modo per avere una sicurezza del 100%... Alla fine moriresti. Esiste accettabile, e per me non è accettabile perdere la mia forma fisica. Perdere la mia disciplina.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_39a",
        text: "Ti stai uccidendo per avere degli addominali scolpiti, te ne rendi conto?",
        nextMessageId: "max_msg_checkpoint3_fail",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_39b",
        text: "So che in altri stati ci sono sostanze che sono accettate.",
        nextMessageId: "max_msg_40",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_39c",
        text: "Sì, questo è vero. Quando rinunci all'illusione di poter essere sicuro, tutto diventa quanto sei disposto a rischiare per ottenere il tuo risultato.",
        nextMessageId: "max_msg_40",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "max_msg_checkpoint3_fail",
    sender: "npc",
    text: "Sapevo non avresti capito. Non lo fa mai nessuno. Sei molle, come tutti gli altri.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 4: CONNESSIONE INTENSA (50+ relazione) ====================

const intenseBondDialogues: Message[] = [
  {
    id: "max_msg_40",
    sender: "npc",
    text: "Ho iniziato a sedici anni.",
    timestamp: new Date(),
    nextMessageId: "max_msg_41",
  },
  {
    id: "max_msg_41",
    sender: "npc",
    text: "Non era ancora per diventare grande, era per smettere di essere fragile.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_41a",
        text: "Cos'è successo a sedici anni?",
        nextMessageId: "max_msg_42",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_41b",
        text: "È presto per caricarsi così.",
        nextMessageId: "max_msg_42",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "max_msg_42",
    sender: "npc",
    text: "A sedici anni capisci una cosa semplice. Se non occupi spazio, qualcuno lo fa al posto tuo.",
    timestamp: new Date(),
    nextMessageId: "max_msg_43",
  },
  {
    id: "max_msg_43",
    sender: "npc",
    text: "Il primo giorno non riuscivo nemmeno a sentire i muscoli. Ma il dolore era chiaro. Finalmente qualcosa rispondeva.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_43a",
        text: "Sembra che ti abbia salvato.",
        nextMessageId: "max_msg_44",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_43b",
        text: "Dove eri prima?",
        nextMessageId: "max_msg_44",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_44",
    sender: "npc",
    text: "Prima ero… intercambiabile. I ricordi sono sbiaditi. Io ero sbiadito. Ora no. Ora il mio corpo parla prima di me. E non chiede il permesso.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_44a",
        text: "È potere, questo.",
        nextMessageId: "max_msg_45",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_44b",
        text: "È una gabbia dorata.",
        nextMessageId: "max_msg_45",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_44c",
        text: "Fa paura, detta così.",
        nextMessageId: "max_msg_45",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "max_msg_45",
    sender: "npc",
    text: "Non mi serve piacere. Mi serve essere inconfondibile.",
    timestamp: new Date(),
    nextMessageId: "max_msg_46",
  },
  {
    id: "max_msg_46",
    sender: "npc",
    text: "Ogni anno ho tolto qualcosa che non serviva. Grasso. Indecisione. Paura.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_46a",
        text: "Anche parti di te?",
        nextMessageId: "max_msg_47",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_46b",
        text: "E cosa resta?",
        nextMessageId: "max_msg_47",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_47",
    sender: "npc",
    text: "Quel che resta di me è perfetto.",
    timestamp: new Date(),
    nextMessageId: "max_msg_48",
  },
  {
    id: "max_msg_48",
    sender: "npc",
    text: "Quando mi guardo ora, non vedo un corpo. Vedo una macchina infallibile.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_48a",
        text: "Non ti manca altro?",
        nextMessageId: "max_msg_49",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_48b",
        text: "È inquietante.",
        nextMessageId: "max_msg_49",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "max_msg_49",
    sender: "npc",
    text: "Le macchine non deludono. Le persone sì.",
    timestamp: new Date(),
    nextMessageId: "max_msg_50",
  },
  {
    id: "max_msg_50",
    sender: "npc",
    text: "Se domani smettessi di allenarmi, non perderei massa. Perderei diritto.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_50a",
        text: "Diritto a cosa?",
        nextMessageId: "max_msg_51",
        relationshipDelta: 0,
      },
      {
        id: "max_choice_50b",
        text: "Chi te l'ha fatto credere?",
        nextMessageId: "max_msg_51",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_50c",
        text: "Questo è troppo.",
        nextMessageId: "max_msg_checkpoint4_fail",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "max_msg_checkpoint4_fail",
    sender: "npc",
    text: "Non capisci. Ho sperato capissi. Ho sperato davvero potessi capire.",
    timestamp: new Date(),
  },
  {
    id: "max_msg_51",
    sender: "npc",
    text: "Diritto a essere visto. A non essere spostato. A non essere ignorato.",
    timestamp: new Date(),
    nextMessageId: "max_msg_52",
  },
  {
    id: "max_msg_52",
    sender: "npc",
    text: "Il corpo è l'unica cosa che non puoi discutere. È lì. Occupa. Impone.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_52a",
        text: "È una visione violenta.",
        nextMessageId: "max_msg_53",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_52b",
        text: "È una verità scomoda.",
        nextMessageId: "max_msg_53",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "max_msg_53",
    sender: "npc",
    text: "Non sono solo questo. Ma senza questo, non sono niente.",
    timestamp: new Date(),
    nextMessageId: "max_msg_54",
  },
  {
    id: "max_msg_54",
    sender: "npc",
    text: "La gente parla di equilibrio perché non ha mai rischiato di sparire.",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_54a",
        text: "Stai diventando qualcosa d'altro.",
        nextMessageId: "max_msg_55",
        relationshipDelta: 1,
      },
      {
        id: "max_choice_54b",
        text: "Non so come risponderti.",
        nextMessageId: "max_msg_55",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "max_msg_55",
    sender: "npc",
    text: "Sto diventando coerente.",
    timestamp: new Date(),
    nextMessageId: "max_msg_56",
  },
  {
    id: "max_msg_56",
    sender: "npc",
    text: "Ogni giorno rimuovo l'errore. Ogni giorno mi avvicino alla forma giusta.",
    timestamp: new Date(),
    nextMessageId: "max_msg_57",
  },
  {
    id: "max_msg_57",
    sender: "npc",
    text: "Dimmi una cosa, e dimmela senza mentire.",
    timestamp: new Date(),
    nextMessageId: "max_msg_58",
  },
  {
    id: "max_msg_58",
    sender: "npc",
    text: "Se togliessi tutto questo… resteresti a guardarmi?",
    timestamp: new Date(),
    choices: [
      {
        id: "max_choice_58a",
        text: "Sì.",
        nextMessageId: "max_msg_59",
        relationshipDelta: 2,
      },
      {
        id: "max_choice_58b",
        text: "Non lo so.",
        nextMessageId: "max_msg_checkpoint5_fail",
        relationshipDelta: -1,
      },
      {
        id: "max_choice_58c",
        text: "No.",
        nextMessageId: "max_msg_checkpoint5_fail",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "max_msg_checkpoint5_fail",
    sender: "npc",
    text: "Non capisci. Speravo capissi. Ho sperato davvero potessi capire.",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 5: EPILOGO (60+ relazione) ====================

const epilogueDialogues: Message[] = [
  {
    id: "max_msg_59",
    sender: "npc",
    text: "Sai cosa succede quando non ti fermi mai?",
    timestamp: new Date(),
    nextMessageId: "max_msg_60",
  },
  {
    id: "max_msg_60",
    sender: "npc",
    text: "Che il corpo smette di essere qualcosa che hai. Diventa qualcosa che sei.",
    timestamp: new Date(),
    nextMessageId: "max_msg_61",
  },
  {
    id: "max_msg_61",
    sender: "npc",
    text: "All'inizio lo alleni. Poi lo ascolti. Poi fai quello che ti chiede.",
    timestamp: new Date(),
    nextMessageId: "max_msg_62",
  },
  {
    id: "max_msg_62",
    sender: "npc",
    text: "E lui chiede sempre di più.",
    timestamp: new Date(),
    nextMessageId: "max_msg_63",
  },
  {
    id: "max_msg_63",
    sender: "npc",
    text: "Io non ho più un nome lì sotto. Il nome serve alle cose fragili.",
    timestamp: new Date(),
    nextMessageId: "max_msg_64",
  },
  {
    id: "max_msg_64",
    sender: "npc",
    text: "Io sono volume. Sono tensione mantenuta. Sono carne che non cede.",
    timestamp: new Date(),
    nextMessageId: "max_msg_65",
  },
  {
    id: "max_msg_65",
    sender: "npc",
    text: "Guardo le persone e vedo margini. Spazio molle. Errore non corretto.",
    timestamp: new Date(),
    nextMessageId: "max_msg_66",
  },
  {
    id: "max_msg_66",
    sender: "npc",
    text: "Tu lo sai quanto spazio occupi?",
    timestamp: new Date(),
    nextMessageId: "max_msg_67",
  },
  {
    id: "max_msg_67",
    sender: "npc",
    text: "No. Quasi nessuno lo sa.",
    timestamp: new Date(),
    nextMessageId: "max_msg_68",
  },
  {
    id: "max_msg_68",
    sender: "npc",
    text: "A sedici anni ho capito che se non diventi forma, vieni attraversato. E io non vengo più attraversato.",
    timestamp: new Date(),
    nextMessageId: "max_msg_69",
  },
  {
    id: "max_msg_69",
    sender: "npc",
    text: "Il dolore non è un avvertimento. È un linguaggio.",
    timestamp: new Date(),
    nextMessageId: "max_msg_70",
  },
  {
    id: "max_msg_70",
    sender: "npc",
    text: "E io lo parlo fluentemente.",
    timestamp: new Date(),
    nextMessageId: "max_msg_71",
  },
  {
    id: "max_msg_71",
    sender: "npc",
    text: "Quando mi guardano adesso non chiedono chi sono. Si spostano.",
    timestamp: new Date(),
    nextMessageId: "max_msg_72",
  },
  {
    id: "max_msg_72",
    sender: "npc",
    text: "È questo che volevi capire, vero? Perché continuo.",
    timestamp: new Date(),
    nextMessageId: "max_msg_73",
  },
  {
    id: "max_msg_73",
    sender: "npc",
    text: "Non continuo. Sono arrivato.",
    timestamp: new Date(),
    nextMessageId: "max_msg_74",
  },
  {
    id: "max_msg_74",
    sender: "npc",
    text: "Il corpo ha vinto. Io mi sono tolto di mezzo.",
    timestamp: new Date(),
    nextMessageId: "max_msg_75",
  },
  {
    id: "max_msg_75",
    sender: "npc",
    text: "Tu sei ancora pieno di scuse. Le sento anche mentre scrivi.",
    timestamp: new Date(),
    nextMessageId: "max_msg_76",
  },
  {
    id: "max_msg_76",
    sender: "npc",
    text: "Potrei insegnarti. Ma dovresti sparire un po' alla volta.",
    timestamp: new Date(),
    nextMessageId: "max_msg_77",
  },
  {
    id: "max_msg_77",
    sender: "npc",
    text: "La parte che fa domande per prima.",
    timestamp: new Date(),
    nextMessageId: "max_msg_78",
  },
  {
    id: "max_msg_78",
    sender: "npc",
    text: "Non rispondere. Non serve.",
    timestamp: new Date(),
  },
];

export const maxDialogueSet: NPCDialogueSet = {
  npcId: "npc_max",
  variations: [
    {
      minRelationshipLevel: 0,
      messages: firstMeetingDialogues,
    },
    {
      minRelationshipLevel: 4,
      messages: growingBondDialogues,
    },
    {
      minRelationshipLevel: 7,
      messages: deepBondDialogues,
    },
    {
      minRelationshipLevel: 10,
      messages: intenseBondDialogues,
    },
    {
      minRelationshipLevel: 11,
      messages: epilogueDialogues,
    },
  ],
};
