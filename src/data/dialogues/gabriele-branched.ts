import { Message, MessageChoice, NPCDialogueSet } from "../../types";

// ==================== VARIAZIONE 1: L'ESTETICA DELL'ECCELLENZA (0-15 relazione) ====================

const aestheticsDialogues: Message[] = [
  {
    id: "gabriele_1",
    sender: "npc",
    text: "Ciao. Ho notato che tra i tuoi interessi c'è la lettura, ed è una di quelle cose che oggi vengono dichiarate con troppa leggerezza. Dimmi: leggi per fuggire o per capire?",
    timestamp: new Date(),
    choices: [
      {
        id: "g1a",
        text: "Per capire me stesso",
        nextMessageId: "gabriele_2",
        relationshipDelta: 2,
      },
      {
        id: "g1b",
        text: "Per scappare, a volte",
        nextMessageId: "gabriele_2",
        relationshipDelta: 0,
      },
      {
        id: "g1c",
        text: "Dipende dal libro",
        nextMessageId: "gabriele_2",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_2",
    sender: "npc",
    text: "Cosa pensi dell'arte, invece? In che corrente ti identifichi di più? Cominciamo a conoscerci.",
    timestamp: new Date(),
    choices: [
      {
        id: "g2a",
        text: "Mi identifico nella passione del romanticismo",
        nextMessageId: "gabriele_3",
        relationshipDelta: 1,
      },
      {
        id: "g2b",
        text: "Dadaismo, tutta la vita! Caos creativo e sovversione!",
        nextMessageId: "gabriele_3",
        relationshipDelta: 0,
      },
      {
        id: "g2c",
        text: "Ti rispondo brutalismo: a volte la pura funzione ha fascino a sé",
        nextMessageId: "gabriele_3",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "gabriele_3",
    sender: "npc",
    text: "Io mi vedo nella nouvelle vague francese. Troppi dimenticano di guardare la bellezza nel reale, cercano un di più che riescono a raggiungere solo tramite un'alienazione che spesso e volentieri si riduce a evasione ed escapismo. La nouvelle vague invece è cruda, concreta, quasi materica; eppure ci ricollega a una realtà superiore, e ricerca il volto di dio nella quotidianità. Credo che sia encomiabile.",
    timestamp: new Date(),
    nextMessageId: "gabriele_4",
  },
  {
    id: "gabriele_4",
    sender: "npc",
    text: "Hai mai visto la volta della cappella Sistina, in Città del Vaticano? Tutti quei volti, tutta quell'umanità immortalata su pietre indelebili - cosa ti fa pensare che siano degne di essere ricordate? Alla fine sono solo umani, sarcofagi di carne e ossa mortale sin dall'inizio della loro storia. Eppure sono così vivi… Forever breathing, and forever young come diceva Keats, non trovi?",
    timestamp: new Date(),
    choices: [
      {
        id: "g4a",
        text: "È una risposta forte. Non me l'aspettavo, mi hai sorpreso, lo ammetto",
        nextMessageId: "gabriele_5",
        relationshipDelta: 2,
      },
      {
        id: "g4b",
        text: "Stai cercando di impressionarmi? Perché non sta funzionando",
        nextMessageId: "gabriele_5",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "gabriele_5",
    sender: "npc",
    text: "Il mio concetto di arte non è fine a sé stesso. L'arte imita la vita e in questo le è superiore. Per questo è così importante portarla al tavolo sin da subito.",
    timestamp: new Date(),
    choices: [
      {
        id: "g5a",
        text: "Mi piace che tu la pensi così. È un concetto forte per una persona affascinante",
        nextMessageId: "gabriele_6",
        relationshipDelta: 2,
      },
      {
        id: "g5b",
        text: "Suoni un po' come uno che se la tira, cowboy",
        nextMessageId: "gabriele_6",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "gabriele_6",
    sender: "npc",
    text: "Torniamo al punto, però. Cosa leggi dice molto di te. Cosa pensi ti spinga a leggere? Cosa ti ha fatto innamorare all'inizio e ti ha fatto continuare?",
    timestamp: new Date(),
    choices: [
      {
        id: "g6a",
        text: "La passione che mi trasmette il testo",
        nextMessageId: "gabriele_7",
        relationshipDelta: 2,
      },
      {
        id: "g6b",
        text: "La tranquillità che circonda i libri",
        nextMessageId: "gabriele_7",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_7",
    sender: "npc",
    text: "Risposta onesta. Io leggo perché mi piace l'idea che qualcuno abbia già messo in parole qualcosa che io sentivo senza saperlo dire, e che io possa riconoscermi in quella precisione.",
    timestamp: new Date(),
    nextMessageId: "gabriele_8",
  },
  {
    id: "gabriele_8",
    sender: "npc",
    text: "Suono anche la chitarra da anni, più per necessità che per talento. È uno dei pochi modi che conosco per restare interessante a me stesso.",
    timestamp: new Date(),
    choices: [
      {
        id: "g8a",
        text: "Che tipo di musica?",
        nextMessageId: "gabriele_9",
        relationshipDelta: 1,
      },
      {
        id: "g8b",
        text: "Suona molto… intenso",
        nextMessageId: "gabriele_9",
        relationshipDelta: 0,
      },
      {
        id: "g8c",
        text: "Interessante a te stesso?",
        nextMessageId: "gabriele_9",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_9",
    sender: "npc",
    text: "Suono principalmente classica e cantautorato, ma non per nostalgia. Mi piace ciò che resiste al tempo, ciò che non ha bisogno di essere spiegato troppo. Le cose davvero buone si riconoscono, sono inossidabili. Solo ciò che è inossidabile è anche memorabile. E solo ciò che si mantiene perfetto nel tempo è degno di interesse, perché altrimenti sarà il tempo stesso a cancellarlo. Immagino che tu abbia una tua idea di bellezza, anche se forse non la chiami così.",
    timestamp: new Date(),
    choices: [
      {
        id: "g9a",
        text: "Credo di sì",
        nextMessageId: "gabriele_10",
        relationshipDelta: 1,
      },
      {
        id: "g9b",
        text: "Non ci penso molto",
        nextMessageId: "gabriele_10",
        relationshipDelta: 0,
      },
      {
        id: "g9c",
        text: "La bellezza mi mette a disagio",
        nextMessageId: "gabriele_10",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_10",
    sender: "npc",
    text: "È curioso come molti dicano di non pensarci, quando in realtà ne sono costantemente circondati. Io credo che il gusto sia una forma di responsabilità: scegli cosa lasci entrare, e quindi chi diventi. Ti senti più spettatore o protagonista della tua vita?",
    timestamp: new Date(),
    choices: [
      {
        id: "g10a",
        text: "Spettatore",
        nextMessageId: "gabriele_11",
        relationshipDelta: 0,
      },
      {
        id: "g10b",
        text: "Protagonista, a volte",
        nextMessageId: "gabriele_11",
        relationshipDelta: 1,
      },
      {
        id: "g10c",
        text: "Non lo so",
        nextMessageId: "gabriele_11",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_11",
    sender: "npc",
    text: "È una risposta più complessa di quanto sembri. Essere protagonisti richiede una certa tolleranza allo sguardo altrui, e non tutti la possiedono davvero. Io, per esempio, ho sempre saputo che sarei stato guardato. Non per arroganza, ma per una sorta di evidenza naturale.",
    timestamp: new Date(),
    choices: [
      {
        id: "g11a",
        text: "In che senso?",
        nextMessageId: "gabriele_12",
        relationshipDelta: 1,
      },
      {
        id: "g11b",
        text: "Sembra pesante",
        nextMessageId: "gabriele_12",
        relationshipDelta: 0,
      },
      {
        id: "g11c",
        text: "Non tutti lo vivono così",
        nextMessageId: "gabriele_12",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_12",
    sender: "npc",
    text: "Intendo dire che alcune persone entrano in una stanza e modificano l'aria. Non è merito, è una combinazione di presenza, cura, voce. Sarebbe ipocrita fingere che non conti. Mi interessa chi sa reggere questo tipo di conversazione senza ridurla a modestia o a provocazione.",
    timestamp: new Date(),
    choices: [
      {
        id: "g12a",
        text: "Sto provando. Ammetto che non mi aspettavo così tanto. Sai essere intenso",
        nextMessageId: "gabriele_13",
        relationshipDelta: 2,
      },
      {
        id: "g12b",
        text: "È impegnativo, ma ne vale la pena",
        nextMessageId: "gabriele_13",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "gabriele_13",
    sender: "npc",
    text: "Vedi, è proprio questo che intendo. Non tutti sono disposti allo stesso livello di intensità, e va bene così. Io però tendo a selezionare, col tempo. Dimmi una cosa: ti senti una persona speciale, o solo momentaneamente interessante?",
    timestamp: new Date(),
    choices: [
      {
        id: "g13a",
        text: "Speciale",
        nextMessageId: "gabriele_14",
        relationshipDelta: 2,
      },
      {
        id: "g13b",
        text: "Interessante a tratti",
        nextMessageId: "gabriele_14",
        relationshipDelta: 0,
      },
      {
        id: "g13c",
        text: "Non mi sono mai posto il problema",
        nextMessageId: "gabriele_14",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_14",
    sender: "npc",
    text: "La differenza è sottile, ma decisiva. Le persone davvero speciali non hanno bisogno di ribadirlo; semplicemente, non si adattano. Conosco bene questo territorio. È solitario, ma estremamente pulito.",
    timestamp: new Date(),
    choices: [
      {
        id: "g14a",
        text: "Sembra anche freddo",
        nextMessageId: "gabriele_15",
        relationshipDelta: 0,
      },
      {
        id: "g14b",
        text: "Pulito da cosa?",
        nextMessageId: "gabriele_15",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_15",
    sender: "npc",
    text: "Dal rumore. Dalle aspettative mediocri. Dalla necessità di piacere a chiunque. A un certo punto impari che non è un dovere essere accessibili. Mi chiedo se tu sia più portato per la vicinanza o per l'ammirazione.",
    timestamp: new Date(),
    choices: [
      {
        id: "g15a",
        text: "Vicinanza",
        nextMessageId: "gabriele_16",
        relationshipDelta: 0,
      },
      {
        id: "g15b",
        text: "Ammirazione",
        nextMessageId: "gabriele_16",
        relationshipDelta: 2,
      },
      {
        id: "g15c",
        text: "Entrambe",
        nextMessageId: "gabriele_16",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_16",
    sender: "npc",
    text: "Interessante. Sono due cose che raramente convivono a lungo senza creare attrito. Preferisco essere chiaro: non cerco superficialità, né dinamiche rassicuranti. Cerco qualcuno che sappia stare al passo. Tu credi di poterlo fare?",
    timestamp: new Date(),
    choices: [
      {
        id: "g16a",
        text: "Sì",
        nextMessageId: "gabriele_17",
        relationshipDelta: 2,
      },
      {
        id: "g16b",
        text: "Non lo so",
        nextMessageId: "gabriele_17",
        relationshipDelta: 0,
      },
      {
        id: "g16c",
        text: "Dipende da cosa intendi",
        nextMessageId: "gabriele_17",
        relationshipDelta: 1,
      },
    ],
  },
];

// ==================== VARIAZIONE 2: DISTACCO E IMPAZIENZA (15-30 relazione) ====================

const detachmentDialogues: Message[] = [
  {
    id: "gabriele_17",
    sender: "npc",
    text: "Capisco le esitazioni, ma ho imparato a non investire troppo tempo nell'indecisione. La vita, dopotutto, è una questione di priorità ben distribuite. Mi piace concludere ciò che inizio, soprattutto quando riconosco un potenziale, ma non ho interesse a convincere nessuno.",
    timestamp: new Date(),
    choices: [
      {
        id: "g17a",
        text: "Sembra che tu stia già giudicando",
        nextMessageId: "gabriele_18",
        relationshipDelta: 0,
      },
      {
        id: "g17b",
        text: "È un modo di proteggerti?",
        nextMessageId: "gabriele_18",
        relationshipDelta: 1,
      },
      {
        id: "g17c",
        text: "Vai dritto al punto",
        nextMessageId: "gabriele_18",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_18",
    sender: "npc",
    text: "Giudicare è inevitabile, selezionare è necessario. Non vedo il motivo di fingere il contrario. Preferisco relazioni chiare, anche se brevi. La verità è che raramente incontro qualcuno che riesca a restare interessante oltre la prima profondità.",
    timestamp: new Date(),
    choices: [
      {
        id: "g18a",
        text: "E se fosse una tua aspettativa?",
        nextMessageId: "gabriele_19",
        relationshipDelta: 1,
      },
      {
        id: "g18b",
        text: "Forse chiedi molto",
        nextMessageId: "gabriele_19",
        relationshipDelta: 0,
      },
      {
        id: "g18c",
        text: "Forse ti annoi facilmente",
        nextMessageId: "gabriele_19",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_19",
    sender: "npc",
    text: "È una questione di rispetto, più che di fretta; so cosa posso offrire, e so riconoscere quando l'interesse è allineato oppure solo curioso.",
    timestamp: new Date(),
    choices: [
      {
        id: "g19a",
        text: "E secondo te qui com'è?",
        nextMessageId: "gabriele_20",
        relationshipDelta: 1,
      },
      {
        id: "g19b",
        text: "Sembra una selezione",
        nextMessageId: "gabriele_20",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_20",
    sender: "npc",
    text: "Qui - mi sto impegnando, quindi così male non è. Tuttavia è inutile girarci intorno - questa conversazione è finalizzata a qualcosa, e non ha senso proseguirla se a un certo punto non veniamo al dunque.",
    timestamp: new Date(),
    choices: [
      {
        id: "g20a",
        text: "Onesto",
        nextMessageId: "gabriele_21",
        relationshipDelta: 2,
      },
      {
        id: "g20b",
        text: "Cinico",
        nextMessageId: "gabriele_21",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_21",
    sender: "npc",
    text: "Preferisco pensarlo come lucidità emotiva: non mi piace investire dove l'attenzione è distratta.",
    timestamp: new Date(),
    choices: [
      {
        id: "g21a",
        text: "Ti senti poco considerato?",
        nextMessageId: "gabriele_22",
        relationshipDelta: 0,
      },
      {
        id: "g21b",
        text: "Ti piace avere controllo",
        nextMessageId: "gabriele_22",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_22",
    sender: "npc",
    text: "Chiedo esattamente quanto offro. Intensità, attenzione, qualità. Se questo appare eccessivo, forse non siamo allineati. Non amo spiegarmi troppe volte: mi affascina chi capisce al primo sguardo.",
    timestamp: new Date(),
    choices: [
      {
        id: "g22a",
        text: "Non tutti funzionano così",
        nextMessageId: "gabriele_23",
        relationshipDelta: 0,
      },
      {
        id: "g22b",
        text: "È un criterio esigente",
        nextMessageId: "gabriele_23",
        relationshipDelta: 1,
      },
      {
        id: "g22c",
        text: "È comodo",
        nextMessageId: "gabriele_23",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_23",
    sender: "npc",
    text: "È necessario. La mia vita è piena, e non intendo diluirla. La compagnia deve essere un valore aggiunto, non una compensazione. Dimmi, cosa pensi di poter offrire a qualcuno come me?",
    timestamp: new Date(),
    choices: [
      {
        id: "g23a",
        text: "Presenza",
        nextMessageId: "gabriele_24",
        relationshipDelta: 1,
      },
      {
        id: "g23b",
        text: "Autenticità",
        nextMessageId: "gabriele_24",
        relationshipDelta: 1,
      },
      {
        id: "g23c",
        text: "Non ragiono in questi termini",
        nextMessageId: "gabriele_24",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_24",
    sender: "npc",
    text: "Risposte nobili, ma vaghe. L'autenticità senza forma è solo spontaneità. La presenza senza direzione è rumore. Non mi fraintendere: non è disprezzo. Solo lucidità, ed esperienza.",
    timestamp: new Date(),
    choices: [
      {
        id: "g24a",
        text: "Sembra superiorità",
        nextMessageId: "gabriele_25",
        relationshipDelta: 0,
      },
      {
        id: "g24b",
        text: "Sembra difesa",
        nextMessageId: "gabriele_25",
        relationshipDelta: 1,
      },
      {
        id: "g24c",
        text: "Sembra solitudine",
        nextMessageId: "gabriele_25",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "gabriele_25",
    sender: "npc",
    text: "La solitudine è il prezzo dell'eccellenza, e l'ho accettato da tempo. Non tutti sono fatti per restare. Preferisco una distanza elegante a una vicinanza sciatta. Chiamala difesa dalla mediocrità, se vuoi.",
    timestamp: new Date(),
    choices: [
      {
        id: "g25a",
        text: "E l'intimità?",
        nextMessageId: "gabriele_26",
        relationshipDelta: 1,
      },
      {
        id: "g25b",
        text: "È una scelta triste",
        nextMessageId: "gabriele_26",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_26",
    sender: "npc",
    text: "L'intimità è sopravvalutata quando diventa un diritto invece che un privilegio. Io concedo poco, ma con estrema chiarezza. Non mi interessa essere compreso da tutti. Mi basta essere riconosciuto da chi conta. D'altronde, a costo di ripetermi: se fossi qui solo per passare il tempo, non starei scrivendo con questa cura.",
    timestamp: new Date(),
    choices: [
      {
        id: "g26a",
        text: "Lo apprezzo. Sono anche io qui per qualcosa di preciso",
        nextMessageId: "gabriele_27",
        relationshipDelta: 2,
      },
      {
        id: "g26b",
        text: "È una dimostrazione? Continui a dire che vuoi qualcosa di preciso, ma sei il primo a rifiutare una connessione più che superficiale",
        nextMessageId: "gabriele_27",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_27",
    sender: "npc",
    text: "È una dichiarazione di intenti, che trovo più elegante delle promesse. Se senti pressione rispetto al mio affrettare le cose (un incontro fugace, una notte di compagnia, il primo caffè del mattino dopo) è perché non sai cosa vuoi.",
    timestamp: new Date(),
    choices: [
      {
        id: "g27a",
        text: "Non sono d'accordo",
        nextMessageId: "gabriele_28",
        relationshipDelta: 0,
      },
      {
        id: "g27b",
        text: "Forse hai ragione",
        nextMessageId: "gabriele_28",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_28",
    sender: "npc",
    text: "Io, almeno, l'ho capito: non cerco di essere scelto, cerco di riconoscere ciò che è all'altezza del tempo che sono disposto a concedere. Siamo su questa terra per un attimo fugace, è inutile trastullarci ed esitare. L'eternità e l'istante presente sono le uniche misure del tempo che hanno senso.",
    timestamp: new Date(),
    choices: [
      {
        id: "g28a",
        text: "Usi il tempo come valuta, ma cosa vuoi in cambio?",
        nextMessageId: "gabriele_29",
        relationshipDelta: 1,
      },
      {
        id: "g28b",
        text: "È una posizione comoda, ma mi sembra un po' fredda",
        nextMessageId: "gabriele_29",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_29",
    sender: "npc",
    text: "È realistico, e il realismo evita molte delusioni inutili. L'intimità non nasce dalla durata, ma dalla qualità dello sguardo. Non ancora abbastanza dati da trarre una conclusione, ed è per questo che continuo ancora un po'. Ma la mia pazienza non è infinita.",
    timestamp: new Date(),
    choices: [
      {
        id: "g29a",
        text: "Ok, allora facciamolo. Vediamoci nel caffè in centro alle tre di sabato",
        nextMessageId: "gabriele_30",
        relationshipDelta: 3,
      },
      {
        id: "g29b",
        text: "Mi sembri confuso. Nonostante le tue parole, non so se questa conversazione sta andando da qualche parte",
        nextMessageId: "gabriele_30",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "gabriele_30",
    sender: "npc",
    text: "Col tempo ho capito una cosa piuttosto semplice: quando smetti di cercare il contatto, le persone iniziano a orbitarti attorno. Non per affetto, ma per gravità. Io non rincorro più nulla. Mi limito a restare esattamente dove sono.",
    timestamp: new Date(),
    choices: [
      {
        id: "g30a",
        text: "Sembra isolante",
        nextMessageId: "gabriele_31",
        relationshipDelta: 0,
      },
      {
        id: "g30b",
        text: "Sembra comodo",
        nextMessageId: "gabriele_31",
        relationshipDelta: 1,
      },
    ],
  },
];

// ==================== VARIAZIONE 3: LA RARITÀ VERTICALE (30-45 relazione) ====================

const rarityDialogues: Message[] = [
  {
    id: "gabriele_31",
    sender: "npc",
    text: "C'è una cosa che ho imparato col tempo: più lavori su te stesso, più diventi raro, e la rarità è una forma di solitudine che pochi ammettono.",
    timestamp: new Date(),
    choices: [
      {
        id: "g31a",
        text: "Ti senti solo?",
        nextMessageId: "gabriele_32",
        relationshipDelta: 1,
      },
      {
        id: "g31b",
        text: "Sembra quasi un vanto",
        nextMessageId: "gabriele_32",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_32",
    sender: "npc",
    text: "Non è solitudine emotiva, è distanza strutturale; le persone non sono abituate a chi non ha bisogno di loro per reggersi.",
    timestamp: new Date(),
    choices: [
      {
        id: "g32a",
        text: "Nessuno è davvero così",
        nextMessageId: "gabriele_33",
        relationshipDelta: 0,
      },
      {
        id: "g32b",
        text: "Ti sei costruito così",
        nextMessageId: "gabriele_33",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_33",
    sender: "npc",
    text: "Mi sono raffinato, se preferisci, come si fa con uno strumento che deve suonare sempre intonato.",
    timestamp: new Date(),
    choices: [
      {
        id: "g33a",
        text: "E se si rompe?",
        nextMessageId: "gabriele_34",
        relationshipDelta: 1,
      },
      {
        id: "g33b",
        text: "Suona perfetto",
        nextMessageId: "gabriele_34",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_34",
    sender: "npc",
    text: "La perfezione non è assenza di crepe, è essere in alto abbastanza da non dover spiegare. L'isolamento è solo un altro modo di chiamare la coerenza, quando non sei disposto a scendere. A volte penso di essere diventato un punto di riferimento più che una persona.",
    timestamp: new Date(),
    choices: [
      {
        id: "g34a",
        text: "È una perdita",
        nextMessageId: "gabriele_35",
        relationshipDelta: 0,
      },
      {
        id: "g34b",
        text: "È un potere",
        nextMessageId: "gabriele_35",
        relationshipDelta: 2,
      },
      {
        id: "g34c",
        text: "È inquietante",
        nextMessageId: "gabriele_35",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_35",
    sender: "npc",
    text: "È inevitabile. Quando affini troppo la forma, il contenuto diventa secondario. Le persone non vogliono conoscerti, vogliono guardarti. E io ho smesso di deluderle mostrando altro.",
    timestamp: new Date(),
    nextMessageId: "gabriele_36",
  },
  {
    id: "gabriele_36",
    sender: "npc",
    text: "L'inquietudine è spesso il prezzo della chiarezza.",
    timestamp: new Date(),
    choices: [
      {
        id: "g36a",
        text: "O della distanza",
        nextMessageId: "gabriele_37",
        relationshipDelta: 0,
      },
      {
        id: "g36b",
        text: "O dell'arroganza",
        nextMessageId: "gabriele_37",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_37",
    sender: "npc",
    text: "Forse. L'arroganza è una parola che usiamo quando non abbiamo accesso a qualcuno.",
    timestamp: new Date(),
    choices: [
      {
        id: "g37a",
        text: "Ti senti inaccessibile?",
        nextMessageId: "gabriele_38",
        relationshipDelta: 1,
      },
      {
        id: "g37b",
        text: "Ti piace esserlo",
        nextMessageId: "gabriele_38",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_38",
    sender: "npc",
    text: "Mi è necessario, altrimenti finirei per dover rassicurare chi si sente piccolo accanto a me.",
    timestamp: new Date(),
    choices: [
      {
        id: "g38a",
        text: "Questo è duro",
        nextMessageId: "gabriele_39",
        relationshipDelta: 0,
      },
      {
        id: "g38b",
        text: "Questo è molto rivelatore",
        nextMessageId: "gabriele_39",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_39",
    sender: "npc",
    text: "Non intendo ferire, ma non ridimensiono me stesso per essere digeribile.",
    timestamp: new Date(),
    choices: [
      {
        id: "g39a",
        text: "È una scelta",
        nextMessageId: "gabriele_40",
        relationshipDelta: 1,
      },
      {
        id: "g39b",
        text: "È una difesa",
        nextMessageId: "gabriele_40",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_40",
    sender: "npc",
    text: "È una vocazione alla verticalità: pochi salgono, molti guardano.",
    timestamp: new Date(),
    choices: [
      {
        id: "g40a",
        text: "Ti metti sopra gli altri",
        nextMessageId: "gabriele_41",
        relationshipDelta: 0,
      },
      {
        id: "g40b",
        text: "Ti sei messo da solo lassù",
        nextMessageId: "gabriele_41",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_41",
    sender: "npc",
    text: "Chiunque può salire, ma non tutti accettano il silenzio che c'è in alto.",
    timestamp: new Date(),
    choices: [
      {
        id: "g41a",
        text: "E tu lo accetti?",
        nextMessageId: "gabriele_42",
        relationshipDelta: 1,
      },
      {
        id: "g41b",
        text: "O lo giustifichi?",
        nextMessageId: "gabriele_42",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "gabriele_42",
    sender: "npc",
    text: "Lo abito, come si abita una stanza troppo grande, imparando a non fare rumore.",
    timestamp: new Date(),
    choices: [
      {
        id: "g42a",
        text: "È triste",
        nextMessageId: "gabriele_43",
        relationshipDelta: 0,
      },
      {
        id: "g42b",
        text: "È solenne",
        nextMessageId: "gabriele_43",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_43",
    sender: "npc",
    text: "La tristezza è una lettura possibile, ma non è quella che mi appartiene.",
    timestamp: new Date(),
    choices: [
      {
        id: "g43a",
        text: "Qual è allora?",
        nextMessageId: "gabriele_44",
        relationshipDelta: 1,
      },
      {
        id: "g43b",
        text: "Non sembri umano",
        nextMessageId: "gabriele_44",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_44",
    sender: "npc",
    text: "L'umano è una soglia mobile, e io l'ho oltrepassata senza drammi.",
    timestamp: new Date(),
    choices: [
      {
        id: "g44a",
        text: "Questo mi spaventa",
        nextMessageId: "gabriele_45",
        relationshipDelta: 0,
      },
      {
        id: "g44b",
        text: "Questo ti isola",
        nextMessageId: "gabriele_45",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_45",
    sender: "npc",
    text: "L'isolamento è il prezzo della forma compiuta.",
    timestamp: new Date(),
    choices: [
      {
        id: "g45a",
        text: "Vale davvero la pena?",
        nextMessageId: "gabriele_46",
        relationshipDelta: 0,
      },
      {
        id: "g45b",
        text: "O non sai scendere?",
        nextMessageId: "gabriele_46",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "gabriele_46",
    sender: "npc",
    text: "Io non scendo, e non chiamo nessuno a salire: resto visibile, intatto, e sufficientemente lontano da non dover essere spiegato.",
    timestamp: new Date(),
    choices: [
      {
        id: "g46a",
        text: "Ci vediamo questo sabato?",
        nextMessageId: "gabriele_47",
        relationshipDelta: 2,
      },
      {
        id: "g46b",
        text: "Non credo che questo funzionerà",
        nextMessageId: "gabriele_checkpoint_fail",
        relationshipDelta: -3,
      },
    ],
  },
  {
    id: "gabriele_checkpoint_fail",
    sender: "npc",
    text: "Capisco. Non tutti sono pronti per questa altitudine. Buona fortuna nel tuo percorso.",
    timestamp: new Date(),
    // Nessun nextMessageId - conversazione terminata
  },
];

// ==================== VARIAZIONE 4: L'ANGELO (45+ relazione) ====================

const angelDialogues: Message[] = [
  {
    id: "gabriele_47",
    sender: "npc",
    text: "A questo punto non ha più senso fingere reciprocità. Io non sto cercando un incontro, ma una conferma.",
    timestamp: new Date(),
    nextMessageId: "gabriele_48",
  },
  {
    id: "gabriele_48",
    sender: "npc",
    text: "Sono diventato qualcosa che si contempla, non qualcosa che si tocca.",
    timestamp: new Date(),
    nextMessageId: "gabriele_49",
  },
  {
    id: "gabriele_49",
    sender: "npc",
    text: "La distanza che senti non è freddezza: è perfezione mantenuta.",
    timestamp: new Date(),
    nextMessageId: "gabriele_50",
  },
  {
    id: "gabriele_50",
    sender: "npc",
    text: "Gli angeli, se ci pensi, non sono fatti per la compagnia. Sono messaggeri, simboli, soglie.",
    timestamp: new Date(),
    nextMessageId: "gabriele_51",
  },
  {
    id: "gabriele_51",
    sender: "npc",
    text: "Io sono una soglia.",
    timestamp: new Date(),
    nextMessageId: "gabriele_52",
  },
  {
    id: "gabriele_52",
    sender: "npc",
    text: "Puoi restare a guardare, oppure andartene. In entrambi i casi, io non mi muovo.",
    timestamp: new Date(),
    nextMessageId: "gabriele_53",
  },
  {
    id: "gabriele_53",
    sender: "npc",
    text: "La cosa più umana che ho fatto è stata rinunciarci.",
    timestamp: new Date(),
    // Nessun nextMessageId - la conversazione termina qui naturalmente
  },
];

export const gabrieleDialogueSet: NPCDialogueSet = {
  npcId: "npc_gabriele",
  variations: [
    {
      minRelationshipLevel: 0,
      messages: aestheticsDialogues,
    },
    {
      minRelationshipLevel: 15,
      messages: detachmentDialogues,
    },
    {
      minRelationshipLevel: 30,
      messages: rarityDialogues,
    },
    {
      minRelationshipLevel: 45,
      messages: angelDialogues,
    },
  ],
};
