import { Message, MessageChoice, NPCDialogueSet } from "../../types";

// ==================== VARIAZIONE 1: LA SOLARITÀ INTEGRATA (0-10 relazione) ====================

const solarityDialogues: Message[] = [
  {
    id: "nihal_1",
    sender: "npc",
    text: "Ehi! Come va? Sai, mi hai fatto venire voglia di caffè con la tua foto profilo. Qui fa un freddo assurdo oggi, no?",
    timestamp: new Date(),
    choices: [
      {
        id: "n1a",
        text: "Sì, è gelido!",
        nextMessageId: "nihal_2",
        relationshipDelta: 1,
      },
      {
        id: "n1b",
        text: "Io sto bene, grazie",
        nextMessageId: "nihal_2",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_2",
    sender: "npc",
    text: "Gelido proprio! Io vengo da un posto dove il freddo vero non esiste, quindi ogni inverno è una scoperta. Tipo, il primo anno che sono arrivata qui non sapevo cosa fossero i termosifoni. Imbarazzante! Tu da dove vieni?",
    timestamp: new Date(),
    choices: [
      {
        id: "n2a",
        text: "Sono di qui",
        nextMessageId: "nihal_3",
        relationshipDelta: 0,
      },
      {
        id: "n2b",
        text: "[Altra città/paese]",
        nextMessageId: "nihal_3",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_3",
    sender: "npc",
    text: "Ah bello! Io sono qui da... wow, quasi quindici anni ormai. A volte mi sembra ieri, a volte sembra una vita fa. Ti senti legato al posto dove sei nato?",
    timestamp: new Date(),
    choices: [
      {
        id: "n3a",
        text: "Sì, molto",
        nextMessageId: "nihal_4",
        relationshipDelta: 0,
      },
      {
        id: "n3b",
        text: "Non particolarmente",
        nextMessageId: "nihal_4",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_4",
    sender: "npc",
    text: "Io ho un rapporto strano con il mio paese. Lo amo, ma è come... un amore a distanza? Non so se ha senso. Comunque! Dimmi qualcosa di te, cosa ti piace fare?",
    timestamp: new Date(),
    choices: [
      {
        id: "n4a",
        text: "[Descrive hobby/interessi]",
        nextMessageId: "nihal_5",
        relationshipDelta: 1,
      },
      {
        id: "n4b",
        text: "Un po' di tutto",
        nextMessageId: "nihal_5",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_5",
    sender: "npc",
    text: "Figo! Io adoro quello che hai detto. Anche se devo dire che a volte mi sento ancora un po' in ritardo rispetto agli altri. Tipo, riferimenti culturali che tutti conoscono e io... niente. Mai visto quel film, mai sentita quella canzone. Tu hai mai quella sensazione di essere fuori dal giro?",
    timestamp: new Date(),
    choices: [
      {
        id: "n5a",
        text: "Sì, capita",
        nextMessageId: "nihal_6",
        relationshipDelta: 1,
      },
      {
        id: "n5b",
        text: "No, di solito sono aggiornato",
        nextMessageId: "nihal_6",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_6",
    sender: "npc",
    text: "Essere aggiornato... io ci provo! Ma è come se ci fosse sempre qualcosa che mi sfugge. Vabbè, dettagli! L'importante è connettersi con le persone, no? E tu che lavoro fai?",
    timestamp: new Date(),
    choices: [
      {
        id: "n6a",
        text: "[Descrive lavoro]",
        nextMessageId: "nihal_7",
        relationshipDelta: 0,
      },
      {
        id: "n6b",
        text: "Niente di speciale",
        nextMessageId: "nihal_7",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_7",
    sender: "npc",
    text: "Io lavoro in un settore abbastanza generico. Mi piace, anche se all'inizio è stato difficile. Sai, capire le dinamiche, come ci si comporta... cose che per chi è cresciuto qui sono ovvie. Ma ho imparato! Almeno credo. Tu ti senti sicuro sul lavoro?",
    timestamp: new Date(),
    choices: [
      {
        id: "n7a",
        text: "Sì, abbastanza",
        nextMessageId: "nihal_8",
        relationshipDelta: 0,
      },
      {
        id: "n7b",
        text: "Dipende dai giorni",
        nextMessageId: "nihal_8",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_8",
    sender: "npc",
    text: "Dipende dai giorni, esatto! Ci sono giorni in cui penso 'wow, ce l'ho fatta, sono parte di questo posto' e giorni in cui... vabbè. Comunque, basta parlare di me! Cosa cerchi qui su Sparkle?",
    timestamp: new Date(),
    choices: [
      {
        id: "n8a",
        text: "Conoscere persone nuove",
        nextMessageId: "nihal_9",
        relationshipDelta: 1,
      },
      {
        id: "n8b",
        text: "Vedere cosa succede",
        nextMessageId: "nihal_9",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_9",
    sender: "npc",
    text: "Anche io! È bello conoscere gente. Anche se devo dire, a volte mi chiedo se le persone mi capiscono davvero. Non per la lingua eh, quella la parlo perfettamente. Ma proprio... capire. Sai cosa intendo?",
    timestamp: new Date(),
    choices: [
      {
        id: "n9a",
        text: "Sì, ti capisco",
        nextMessageId: "nihal_10",
        relationshipDelta: 1,
      },
      {
        id: "n9b",
        text: "Non sono sicuro",
        nextMessageId: "nihal_10",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_10",
    sender: "npc",
    text: "Vabbè, forse sto diventando troppo seria! Di solito sono più allegra, giuro. I miei amici dicono che sono la persona più solare che conoscono. Tu sei solare?",
    timestamp: new Date(),
    choices: [
      {
        id: "n10a",
        text: "Cerco di esserlo",
        nextMessageId: "nihal_11",
        relationshipDelta: 1,
      },
      {
        id: "n10b",
        text: "Non sempre",
        nextMessageId: "nihal_11",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_11",
    sender: "npc",
    text: "'Non sempre' è onesto. Mi piace l'onestà. Io cerco sempre di essere positiva, ma a volte è... faticoso? Non so se è la parola giusta. A volte sento che devo essere 'on' sempre, capisci?",
    timestamp: new Date(),
    choices: [
      {
        id: "n11a",
        text: "Capisco perfettamente",
        nextMessageId: "nihal_12",
        relationshipDelta: 1,
      },
      {
        id: "n11b",
        text: "Perché devi essere 'on'?",
        nextMessageId: "nihal_12",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_12",
    sender: "npc",
    text: "Bella domanda. Forse perché... se non lo sono, la gente potrebbe pensare che sono strana? O diversa? Che non appartengo? Scusa, sto dicendo cose strane. Parliamo d'altro! Cosa ti piace mangiare?",
    timestamp: new Date(),
    choices: [
      {
        id: "n12a",
        text: "[Cibo preferito]",
        nextMessageId: "nihal_13",
        relationshipDelta: 0,
      },
      {
        id: "n12b",
        text: "Un po' di tutto",
        nextMessageId: "nihal_13",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_13",
    sender: "npc",
    text: "Io amo la cucina di qui! Anche se all'inizio era tutto così... diverso. E la mia famiglia mi dice sempre 'hai dimenticato i sapori di casa'. Ma non è vero! È solo che... sono abituata a questi ora. È normale, no?",
    timestamp: new Date(),
    choices: [
      {
        id: "n13a",
        text: "Normalissimo",
        nextMessageId: "nihal_14",
        relationshipDelta: 1,
      },
      {
        id: "n13b",
        text: "È il cambiamento",
        nextMessageId: "nihal_14",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_14",
    sender: "npc",
    text: "Il cambiamento, sì. A volte mi chiedo se sono cambiata troppo. Se sono ancora... me. Ma vabbè, filosofie! Tu hai mai cambiato città o paese?",
    timestamp: new Date(),
    choices: [
      {
        id: "n14a",
        text: "Sì",
        nextMessageId: "nihal_15",
        relationshipDelta: 1,
      },
      {
        id: "n14b",
        text: "No, sempre qui",
        nextMessageId: "nihal_15",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_15",
    sender: "npc",
    text: "Sempre qui... deve essere bello avere radici così solide. Io le mie radici... non so dove siano più. Sono qui o là? O in mezzo? Scusa, di nuovo troppo seria! Raccontami una cosa divertente di te.",
    timestamp: new Date(),
    choices: [
      {
        id: "n15a",
        text: "[Racconta aneddoto]",
        nextMessageId: "nihal_16",
        relationshipDelta: 1,
      },
      {
        id: "n15b",
        text: "Non mi viene niente",
        nextMessageId: "nihal_16",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_16",
    sender: "npc",
    text: "Ahahah carino! Io una volta ho fatto una figura pessima perché non conoscevo un modo di dire locale e l'ho usato completamente a caso. Tutti ridevano e io non capivo perché. Poi me l'hanno spiegato e io... boh, volevo sparire.",
    timestamp: new Date(),
    choices: [
      {
        id: "n16a",
        text: "Capita a tutti",
        nextMessageId: "nihal_17",
        relationshipDelta: 1,
      },
      {
        id: "n16b",
        text: "Dev'essere stato imbarazzante",
        nextMessageId: "nihal_17",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_17",
    sender: "npc",
    text: "Imbarazzante sì. Ma sai, ci si abitua. All'imbarazzo di non capire sempre tutto. Di essere sempre leggermente... fuori sincrono. Ma va bene! Fa parte di me ormai. Tu ti sei mai sentito fuori sincrono?",
    timestamp: new Date(),
    choices: [
      {
        id: "n17a",
        text: "Sì, spesso",
        nextMessageId: "nihal_18",
        relationshipDelta: 1,
      },
      {
        id: "n17b",
        text: "Qualche volta",
        nextMessageId: "nihal_18",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_18",
    sender: "npc",
    text: "Almeno non sono l'unica! Anche se... ecco, io a volte mi chiedo se sia solo una mia percezione o se davvero c'è qualcosa che non colgo. Tipo, le persone mi guardano strano o sono io che penso mi guardino strano?",
    timestamp: new Date(),
    choices: [
      {
        id: "n18a",
        text: "Sei tu che ci pensi troppo",
        nextMessageId: "nihal_19",
        relationshipDelta: 0,
      },
      {
        id: "n18b",
        text: "Forse un po' entrambe",
        nextMessageId: "nihal_19",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_19",
    sender: "npc",
    text: "Un po' entrambe... sì, probabilmente. Vabbè, basta! Sono troppo nella mia testa stasera. Dimmi: cosa ti ha colpito di me finora?",
    timestamp: new Date(),
    choices: [
      {
        id: "n19a",
        text: "La tua energia positiva",
        nextMessageId: "nihal_20",
        relationshipDelta: 1,
      },
      {
        id: "n19b",
        text: "La tua sincerità",
        nextMessageId: "nihal_20",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_20",
    sender: "npc",
    text: "Grazie! Mi fa piacere. A volte temo di essere troppo... troppo qualcosa. Troppo allegra, troppo seria, troppo straniera. Ma con te mi sento... ok. È bello. Vuoi continuare a parlare?",
    timestamp: new Date(),
    choices: [
      {
        id: "n20a",
        text: "Sì, assolutamente",
        nextMessageId: "nihal_21",
        relationshipDelta: 1,
      },
      {
        id: "n20b",
        text: "Certo",
        nextMessageId: "nihal_21",
        relationshipDelta: 1,
      },
    ],
  },
];

// ==================== VARIAZIONE 2: L'INSICUREZZA EMERGENTE (10-20 relazione) ====================

const insecurityDialogues: Message[] = [
  {
    id: "nihal_21",
    sender: "npc",
    text: "Sai, mi hai fatto pensare a una cosa. Tu quando conosci qualcuno, quanto tempo ci metti a sentirti... a tuo agio? Io ci metto sempre un po'. Come se dovessi decifrare le regole prima.",
    timestamp: new Date(),
    choices: [
      {
        id: "n21a",
        text: "Anch'io ho bisogno di tempo",
        nextMessageId: "nihal_22",
        relationshipDelta: 1,
      },
      {
        id: "n21b",
        text: "Abbastanza velocemente",
        nextMessageId: "nihal_22",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_22",
    sender: "npc",
    text: "Le regole... è buffo, no? Ogni gruppo, ogni cultura, ha le sue regole non dette. E io a volte mi chiedo: le sto rispettando? Sto facendo tutto giusto? O c'è qualcosa che sto sbagliando senza saperlo?",
    timestamp: new Date(),
    choices: [
      {
        id: "n22a",
        text: "Stai facendo benissimo",
        nextMessageId: "nihal_23",
        relationshipDelta: 0,
      },
      {
        id: "n22b",
        text: "Quali regole intendi?",
        nextMessageId: "nihal_23",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_23",
    sender: "npc",
    text: "Non lo so nemmeno io! Tipo... quando salutare con un bacio, quando no. Quanto essere diretti. Quando è appropriato dire certe cose. Per chi è cresciuto qui è automatico. Per me... è sempre una scelta consapevole. E a volte sbaglio.",
    timestamp: new Date(),
    choices: [
      {
        id: "n23a",
        text: "Capisco la fatica",
        nextMessageId: "nihal_24",
        relationshipDelta: 1,
      },
      {
        id: "n23b",
        text: "Ma sei qui da anni, ti preoccupi troppo",
        nextMessageId: "nihal_24",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_24",
    sender: "npc",
    text: "Anni sì, ma è come... non importa quanto tempo passa, c'è sempre questo piccolo dubbio. 'L'ho fatto bene? L'ho detto nel modo giusto? Ho offeso qualcuno senza volerlo?' È estenuante a volte.",
    timestamp: new Date(),
    choices: [
      {
        id: "n24a",
        text: "Deve esserlo",
        nextMessageId: "nihal_25",
        relationshipDelta: 1,
      },
      {
        id: "n24b",
        text: "Nessuno ti giudica così tanto",
        nextMessageId: "nihal_25",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_25",
    sender: "npc",
    text: "Tu dici? Io... non lo so. A volte sento che la gente si aspetta che io sia in un certo modo perché vengo da dove vengo. E poi si aspetta anche che sia completamente integrata. È come se dovessi essere entrambe le cose e nessuna delle due allo stesso tempo.",
    timestamp: new Date(),
    choices: [
      {
        id: "n25a",
        text: "È una posizione difficile",
        nextMessageId: "nihal_26",
        relationshipDelta: 1,
      },
      {
        id: "n25b",
        text: "Puoi essere solo te stessa",
        nextMessageId: "nihal_26",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_26",
    sender: "npc",
    text: "'Me stessa'... chi è? La ragazza del mio paese o quella che sono diventata qui? Perché non sono più la prima, ma non sono del tutto la seconda. Sono... qualcosa in mezzo. Qualcosa che non ha un nome.",
    timestamp: new Date(),
    choices: [
      {
        id: "n26a",
        text: "Sei Nihal",
        nextMessageId: "nihal_27",
        relationshipDelta: 1,
      },
      {
        id: "n26b",
        text: "Sei unica proprio per questo",
        nextMessageId: "nihal_27",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_27",
    sender: "npc",
    text: "Unica... o strana? Scusa, oggi sono particolarmente... non lo so. È che a volte mi sento come se occupassi uno spazio che non mi appartiene. Come se fossi qui per errore e tutti lo sanno tranne me.",
    timestamp: new Date(),
    choices: [
      {
        id: "n27a",
        text: "Non è vero",
        nextMessageId: "nihal_28",
        relationshipDelta: 0,
      },
      {
        id: "n27b",
        text: "Perché dici così?",
        nextMessageId: "nihal_28",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_28",
    sender: "npc",
    text: "Perché... perché quando succede qualcosa di brutto, la mia prima reazione è sempre: è colpa mia. Ho sbagliato qualcosa. Non ho capito qualcosa. Ho fatto qualcosa di culturalmente inappropriato. Anche quando razionalmente so che non è così.",
    timestamp: new Date(),
    choices: [
      {
        id: "n28a",
        text: "È il senso di colpa",
        nextMessageId: "nihal_29",
        relationshipDelta: 0,
      },
      {
        id: "n28b",
        text: "Devi smettere di pensarla così",
        nextMessageId: "nihal_29",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_29",
    sender: "npc",
    text: "Lo so. Lo so che devo. Ma è come... radicato. Tipo, l'altro giorno un collega era arrabbiato e io subito: 'Cosa ho fatto? Cosa ho detto? L'ho offeso?' E invece era solo stressato per altro. Ma io do sempre per scontato che il problema sia io.",
    timestamp: new Date(),
    choices: [
      {
        id: "n29a",
        text: "Ti capisco",
        nextMessageId: "nihal_30",
        relationshipDelta: 1,
      },
      {
        id: "n29b",
        text: "Non sei il problema",
        nextMessageId: "nihal_30",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_30",
    sender: "npc",
    text: "E se lo fossi? E se davvero ci fosse qualcosa in me che... non funziona qui? Qualcosa che non riesco a vedere perché mi manca il codice per vederlo?",
    timestamp: new Date(),
    choices: [
      {
        id: "n30a",
        text: "Non c'è niente che non va",
        nextMessageId: "nihal_31",
        relationshipDelta: 0,
      },
      {
        id: "n30b",
        text: "Stai pensando troppo",
        nextMessageId: "nihal_31",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_31",
    sender: "npc",
    text: "Forse. Oppure non sto pensando abbastanza. Non lo so. È come... immagina di essere sempre un po' sfocata. Le altre persone sono a fuoco, tu sei sempre leggermente sfocata. Si vede?",
    timestamp: new Date(),
    choices: [
      {
        id: "n31a",
        text: "Non sei sfocata",
        nextMessageId: "nihal_32",
        relationshipDelta: 0,
      },
      {
        id: "n31b",
        text: "Cosa intendi?",
        nextMessageId: "nihal_32",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_32",
    sender: "npc",
    text: "Intendo che... le persone mi vedono davvero? O vedono quello che si aspettano? 'La ragazza straniera integrata' o 'quella diversa ma simpatica' o... non lo so. Chi vedono quando mi guardano?",
    timestamp: new Date(),
    choices: [
      {
        id: "n32a",
        text: "Vedono te",
        nextMessageId: "nihal_33",
        relationshipDelta: 1,
      },
      {
        id: "n32b",
        text: "Vedono quello che mostri",
        nextMessageId: "nihal_33",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_33",
    sender: "npc",
    text: "E se quello che mostro è... sbagliato? Se ho imparato a comportarmi in un certo modo ma è tutto una recita? E sotto non c'è niente di autentico perché ho dimenticato chi ero e non sono mai diventata davvero chi sono qui?",
    timestamp: new Date(),
    choices: [
      {
        id: "n33a",
        text: "Sei autentica",
        nextMessageId: "nihal_34",
        relationshipDelta: 1,
      },
      {
        id: "n33b",
        text: "Sembri confusa",
        nextMessageId: "nihal_34",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_34",
    sender: "npc",
    text: "Confusa sì. Sempre. È come vivere in traduzione. Anche i miei pensieri... a volte penso in una lingua, a volte nell'altra. E le cose si perdono nella traduzione. Pezzi di me si perdono.",
    timestamp: new Date(),
    choices: [
      {
        id: "n34a",
        text: "Quali pezzi?",
        nextMessageId: "nihal_35",
        relationshipDelta: 1,
      },
      {
        id: "n34b",
        text: "Capisco la sensazione",
        nextMessageId: "nihal_35",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_35",
    sender: "npc",
    text: "Non lo so quali. Questo è il problema. Come fai a sapere cosa hai perso se non ricordi più di averlo avuto? Tipo, ci sono emozioni che esistono solo nella mia lingua madre. E qui non le sento più. Sono sparite.",
    timestamp: new Date(),
    choices: [
      {
        id: "n35a",
        text: "Puoi ancora sentirle",
        nextMessageId: "nihal_36",
        relationshipDelta: 0,
      },
      {
        id: "n35b",
        text: "È il prezzo del cambiamento",
        nextMessageId: "nihal_36",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_36",
    sender: "npc",
    text: "Il prezzo... sì. Ma a volte mi chiedo se il prezzo è troppo alto. Se ho pagato con pezzi di me che non posso riavere. E in cambio cosa ho ottenuto? Un posto dove non sono mai completamente a casa.",
    timestamp: new Date(),
    choices: [
      {
        id: "n36a",
        text: "Hai ottenuto una nuova vita",
        nextMessageId: "nihal_37",
        relationshipDelta: 0,
      },
      {
        id: "n36b",
        text: "Puoi sentirti a casa",
        nextMessageId: "nihal_37",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_37",
    sender: "npc",
    text: "A casa... cosa significa? Mia madre dice che quando torno 'non sei più di qui'. I miei amici qui a volte fanno battute sul mio accento che ogni tanto salta fuori. Dove sono a casa?",
    timestamp: new Date(),
    choices: [
      {
        id: "n37a",
        text: "Dove scegli tu",
        nextMessageId: "nihal_38",
        relationshipDelta: 0,
      },
      {
        id: "n37b",
        text: "In nessun posto e ovunque",
        nextMessageId: "nihal_38",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_38",
    sender: "npc",
    text: "In nessun posto... forse è vero. Forse sono una di quelle persone che non appartengono da nessuna parte. Che occupano spazio senza averne diritto. Come un... non lo so. Un errore. Un glitch.",
    timestamp: new Date(),
    choices: [
      {
        id: "n38a",
        text: "Non sei un errore",
        nextMessageId: "nihal_39",
        relationshipDelta: 0,
      },
      {
        id: "n38b",
        text: "Perché parli così?",
        nextMessageId: "nihal_39",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_39",
    sender: "npc",
    text: "Perché è come mi sento. Soprattutto quando... quando faccio qualcosa di sbagliato senza rendermene conto. E poi la gente mi guarda con quella faccia. Quella faccia tipo 'ok, è straniera, non sa'. Anche dopo quindici anni. Quella faccia mi uccide.",
    timestamp: new Date(),
    choices: [
      {
        id: "n39a",
        text: "La gente è stronza",
        nextMessageId: "nihal_40",
        relationshipDelta: 1,
      },
      {
        id: "n39b",
        text: "Ti capisco",
        nextMessageId: "nihal_40",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_40",
    sender: "npc",
    text: "E la cosa peggiore? È che a volte hanno ragione. Non so. Non capisco. Manco un codice che tutti gli altri hanno. E questo mi fa sentire... difettosa. Come se ci fosse qualcosa di rotto in me che non si può aggiustare.",
    timestamp: new Date(),
    choices: [
      {
        id: "n40a",
        text: "Non sei rotta",
        nextMessageId: "nihal_41",
        relationshipDelta: 1,
      },
      {
        id: "n40b",
        text: "Niente è rotto in te",
        nextMessageId: "nihal_41",
        relationshipDelta: 1,
      },
    ],
  },
];

// ==================== VARIAZIONE 3: IL PARASSITA (20-35 relazione) ====================

const parasiteDialogues: Message[] = [
  {
    id: "nihal_41",
    sender: "npc",
    text: "Sai a cosa ho pensato stanotte? A volte mi sento come un organismo estraneo. Tipo un corpo estraneo in un sistema. Che non dovrebbe essere lì ma c'è. E il sistema non sa cosa farne.",
    timestamp: new Date(),
    choices: [
      {
        id: "n41a",
        text: "Che pensiero pesante",
        nextMessageId: "nihal_42",
        relationshipDelta: 0,
      },
      {
        id: "n41b",
        text: "Cosa intendi esattamente?",
        nextMessageId: "nihal_42",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_42",
    sender: "npc",
    text: "Intendo che... io sono qui, vivo qui, lavoro qui. Ma sono sempre un po' fuori posto. Come una cellula diversa in un tessuto. E a volte mi chiedo: sto danneggiando qualcosa? Sto occupando uno spazio che dovrebbe essere di qualcun altro?",
    timestamp: new Date(),
    choices: [
      {
        id: "n42a",
        text: "Non stai danneggiando niente",
        nextMessageId: "nihal_43",
        relationshipDelta: 0,
      },
      {
        id: "n42b",
        text: "Perché dovresti?",
        nextMessageId: "nihal_43",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_43",
    sender: "npc",
    text: "Perché non appartengo fino in fondo. Perché prendo risorse - lavoro, spazio, attenzione - ma non riesco mai a restituire nel modo giusto. Perché sbaglio i codici. Perché sono... un parassita mascherato da persona integrata.",
    timestamp: new Date(),
    choices: [
      {
        id: "n43a",
        text: "Non sei un parassita",
        nextMessageId: "nihal_44",
        relationshipDelta: 0,
      },
      {
        id: "n43b",
        text: "Questo non ha senso",
        nextMessageId: "nihal_44",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_44",
    sender: "npc",
    text: "Ha senso se pensi che... che io non dovrei essere qui. Che ogni errore che faccio, ogni incomprensione, è perché sono estranea. Letteralmente estranea. Un corpo estraneo che disturba l'equilibrio.",
    timestamp: new Date(),
    choices: [
      {
        id: "n44a",
        text: "Ti stai facendo del male con questi pensieri",
        nextMessageId: "nihal_45",
        relationshipDelta: 0,
      },
      {
        id: "n44b",
        text: "Continua",
        nextMessageId: "nihal_45",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_45",
    sender: "npc",
    text: "E sai cosa? A volte vedo come la gente reagisce a me. Come si irrigidiscono leggermente. Come c'è un momento di... cosa? Sorpresa? Disagio? Quando dico da dove vengo. Come se avessero appena realizzato che sono diversa.",
    timestamp: new Date(),
    choices: [
      {
        id: "n45a",
        text: "È la loro ignoranza",
        nextMessageId: "nihal_46",
        relationshipDelta: 0,
      },
      {
        id: "n45b",
        text: "Forse sei ipersensibile",
        nextMessageId: "nihal_46",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_46",
    sender: "npc",
    text: "Forse lo sono. O forse ho ragione. Forse sono davvero un elemento che non dovrebbe essere qui. Che contamina. Che porta confusione. Tipo, quando parlo e uso una parola sbagliata, o quando non capisco un riferimento, porto entropia nel sistema.",
    timestamp: new Date(),
    choices: [
      {
        id: "n46a",
        text: "Stai esagerando",
        nextMessageId: "nihal_47",
        relationshipDelta: 0,
      },
      {
        id: "n46b",
        text: "L'entropia fa parte della vita",
        nextMessageId: "nihal_47",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_47",
    sender: "npc",
    text: "Ma troppa entropia distrugge. E io quanta ne porto? Con la mia estraneità, con i miei errori, con il mio non capire mai tutto fino in fondo? Sono una forza distruttiva senza volerlo?",
    timestamp: new Date(),
    choices: [
      {
        id: "n47a",
        text: "No",
        nextMessageId: "nihal_48",
        relationshipDelta: 0,
      },
      {
        id: "n47b",
        text: "Cosa ti fa pensare questo?",
        nextMessageId: "nihal_48",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_48",
    sender: "npc",
    text: "Mi fa pensare questo il fatto che... che ogni volta che qualcosa va storto nelle mie relazioni, nel mio lavoro, ovunque... io do per scontato che è perché sono io. Perché ho interpretato male. Perché ho frainteso. Perché non appartengo.",
    timestamp: new Date(),
    choices: [
      {
        id: "n48a",
        text: "Non è sempre colpa tua",
        nextMessageId: "nihal_49",
        relationshipDelta: 0,
      },
      {
        id: "n48b",
        text: "È solo senso di colpa",
        nextMessageId: "nihal_49",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_49",
    sender: "npc",
    text: "Ma E SE fosse sempre colpa mia? E se davvero ci fosse qualcosa in me che corrompe le cose? Che le rende sbagliate? Tipo... un virus che si traveste da cellula normale ma che alla fine danneggia tutto?",
    timestamp: new Date(),
    choices: [
      {
        id: "n49a",
        text: "Non sei un virus",
        nextMessageId: "nihal_50",
        relationshipDelta: 0,
      },
      {
        id: "n49b",
        text: "Devi fermarti con queste metafore",
        nextMessageId: "nihal_50",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_50",
    sender: "npc",
    text: "Non sono metafore. È come mi sento. Letteralmente. Come se il mio corpo, la mia presenza, fosse sbagliata qui. Come se fossi troppo grande, troppo goffa, troppo ALIENA per questo spazio. E tutti lo vedono tranne me.",
    timestamp: new Date(),
    choices: [
      {
        id: "n50a",
        text: "Nessuno lo vede",
        nextMessageId: "nihal_51",
        relationshipDelta: 0,
      },
      {
        id: "n50b",
        text: "Sei nella tua testa",
        nextMessageId: "nihal_51",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_51",
    sender: "npc",
    text: "Forse sono nella mia testa. O forse la mia testa vede la verità. Che sono un organismo ospite. Che vivo su un terreno che non è il mio. Che succhio risorse senza dare niente di vero in cambio.",
    timestamp: new Date(),
    choices: [
      {
        id: "n51a",
        text: "Dai moltissimo",
        nextMessageId: "nihal_52",
        relationshipDelta: 1,
      },
      {
        id: "n51b",
        text: "Cosa vorresti dare?",
        nextMessageId: "nihal_52",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_52",
    sender: "npc",
    text: "Non lo so! Questo è il problema! Non so cosa questo posto vuole da me. Non so come essere abbastanza. Abbastanza integrata ma non troppo. Abbastanza me stessa ma non troppo diversa. È impossibile.",
    timestamp: new Date(),
    choices: [
      {
        id: "n52a",
        text: "Non devi essere niente per nessuno",
        nextMessageId: "nihal_53",
        relationshipDelta: 0,
      },
      {
        id: "n52b",
        text: "È davvero impossibile",
        nextMessageId: "nihal_53",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_53",
    sender: "npc",
    text: "Impossibile sì. Perché sono troppo. Troppo grande per lo spazio che mi è concesso. Come una gigantessa che cerca di vivere in una casa normale. Sbatto ovunque. Rompo tutto senza volerlo. Sono goffa. Mostruosa.",
    timestamp: new Date(),
    choices: [
      {
        id: "n53a",
        text: "Non sei mostruosa",
        nextMessageId: "nihal_54",
        relationshipDelta: 0,
      },
      {
        id: "n53b",
        text: "Perché gigantessa?",
        nextMessageId: "nihal_54",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_54",
    sender: "npc",
    text: "Perché è come mi sento. Enorme. Ingombrante. Fuori scala. Come se il mio corpo, la mia esistenza, fosse troppo per questo contesto. E io cerco di farmi piccola, di occupare meno spazio, ma non funziona. Sono sempre troppo.",
    timestamp: new Date(),
    choices: [
      {
        id: "n54a",
        text: "Occupi lo spazio giusto",
        nextMessageId: "nihal_55",
        relationshipDelta: 0,
      },
      {
        id: "n54b",
        text: "Troppo in che senso?",
        nextMessageId: "nihal_55",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_55",
    sender: "npc",
    text: "Troppo straniera. Troppo diversa. Troppo sbagliata. E le persone lo vedono. Vedono questa cosa enorme e aliena che cerca di mimetizzarsi. Ma la mimetizzazione non funziona quando sei così... così ALTRA.",
    timestamp: new Date(),
    choices: [
      {
        id: "n55a",
        text: "Non sei altra",
        nextMessageId: "nihal_56",
        relationshipDelta: 0,
      },
      {
        id: "n55b",
        text: "Altra da cosa?",
        nextMessageId: "nihal_56",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_56",
    sender: "npc",
    text: "Altra da tutto. Altra da chi sono stata. Altra da chi sono qui. Altra da qualsiasi cosa che abbia un nome o un posto. Sono solo... questa cosa. Questo corpo estraneo che vaga cercando di capire dove stare senza fare danni.",
    timestamp: new Date(),
    choices: [
      {
        id: "n56a",
        text: "Non fai danni",
        nextMessageId: "nihal_57",
        relationshipDelta: 0,
      },
      {
        id: "n56b",
        text: "Stai soffrendo",
        nextMessageId: "nihal_57",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_57",
    sender: "npc",
    text: "Sto soffrendo, sì. Perché non so chi sono. E quando non sai chi sei, come fai a non fare danni? Come fai a sapere se stai distruggendo qualcosa? Io potrei stare distruggendo e non rendermene conto. Perché non ho i codici per capirlo.",
    timestamp: new Date(),
    choices: [
      {
        id: "n57a",
        text: "Non stai distruggendo niente",
        nextMessageId: "nihal_58",
        relationshipDelta: 0,
      },
      {
        id: "n57b",
        text: "Quali codici?",
        nextMessageId: "nihal_58",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_58",
    sender: "npc",
    text: "I codici del posto. Della cultura. Dell'appartenenza. Mi mancano pezzi. Pezzi fondamentali. E con questi buchi nella mia comprensione, io mi muovo nel mondo come... come un elefante in una cristalleria. Ma l'elefante non sa di essere un elefante.",
    timestamp: new Date(),
    choices: [
      {
        id: "n58a",
        text: "Tu sai chi sei",
        nextMessageId: "nihal_59",
        relationshipDelta: 0,
      },
      {
        id: "n58b",
        text: "Non sei un elefante",
        nextMessageId: "nihal_59",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "nihal_59",
    sender: "npc",
    text: "Sono peggio. Sono una gigantessa che crede di essere normale. Che cerca di vivere una vita normale. Ma il mio corpo è troppo grande. La mia presenza è troppo ingombrante. E quando mi muovo, distruggo. Senza volerlo. Senza saperlo. Ma distruggo.",
    timestamp: new Date(),
    choices: [
      {
        id: "n59a",
        text: "Non distruggi niente",
        nextMessageId: "nihal_60",
        relationshipDelta: 0,
      },
      {
        id: "n59b",
        text: "Cosa pensi di aver distrutto?",
        nextMessageId: "nihal_60",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_60",
    sender: "npc",
    text: "Non lo so! E questa è la cosa più terrificante! Non sapere cosa ho rotto. Cosa ho corrotto con la mia presenza aliena. Quali relazioni ho rovinato perché non capivo. Quanto dolore ho causato perché interpretavo male i segnali. Sono un mostro inconsapevole.",
    timestamp: new Date(),
    choices: [
      {
        id: "n60a",
        text: "Non sei un mostro",
        nextMessageId: "nihal_61",
        relationshipDelta: 1,
      },
      {
        id: "n60b",
        text: "Basta",
        nextMessageId: "nihal_61",
        relationshipDelta: 1,
      },
    ],
  },
];

// ==================== VARIAZIONE 4: LA GIGANTESSA ALIENA (35+ relazione) ====================

const giantessDialogues: Message[] = [
  {
    id: "nihal_61",
    sender: "npc",
    text: "Guardami. Davvero. Vedi? Vedi questa cosa enorme? Questo corpo che non appartiene? Questa gigantessa goffa con il volto coperto perché il volto è troppo alieno, troppo ALTRO per essere mostrato?",
    timestamp: new Date(),
    choices: [
      {
        id: "n61a",
        text: "Ti vedo",
        nextMessageId: "nihal_62",
        relationshipDelta: 1,
      },
      {
        id: "n61b",
        text: "Cosa vedo?",
        nextMessageId: "nihal_62",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_62",
    sender: "npc",
    text: "Mi vedi. Ma cosa vedi? Vedi Nihal o vedi il mostro? Vedi la persona o vedi l'organismo estraneo? Vedi la ragazza integrata o vedi la gigantessa che rompe tutto ciò che tocca senza capire perché?",
    timestamp: new Date(),
    choices: [
      {
        id: "n62a",
        text: "Vedo te",
        nextMessageId: "nihal_63",
        relationshipDelta: 1,
      },
      {
        id: "n62b",
        text: "Vedo una persona che soffre",
        nextMessageId: "nihal_63",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_63",
    sender: "npc",
    text: "'Me'... ma chi sono io? Sono questa cosa enorme che vaga per le strade cercando di non pestare nessuno. Che sussurra 'scusa, scusa, scusa' ogni volta che si muove perché ogni movimento potrebbe essere sbagliato. Potrebbe distruggere qualcosa.",
    timestamp: new Date(),
    choices: [
      {
        id: "n63a",
        text: "Smetti di scusarti",
        nextMessageId: "nihal_64",
        relationshipDelta: 1,
      },
      {
        id: "n63b",
        text: "Non devi scusarti",
        nextMessageId: "nihal_64",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_64",
    sender: "npc",
    text: "Ma DEVO scusarmi. Perché sono fuori posto. Letteralmente. Il mio corpo è troppo grande per questo mondo. Il mio volto è troppo alieno per essere mostrato. Ecco perché è coperto. Perché sotto c'è solo... alterità. Pura, terrificante alterità.",
    timestamp: new Date(),
    choices: [
      {
        id: "n64a",
        text: "Mostrami il tuo volto",
        nextMessageId: "nihal_65",
        relationshipDelta: 1,
      },
      {
        id: "n64b",
        text: "Voglio vederti",
        nextMessageId: "nihal_65",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_65",
    sender: "npc",
    text: "Non puoi vederlo. Nessuno può. Perché non è un volto che appartiene a questo posto. È un volto che viene da altrove. Da un altro codice. Da un'altra lingua. Ed è mostruoso nel suo essere incomprensibile. Guardi e non capisci cosa stai vedendo.",
    timestamp: new Date(),
    choices: [
      {
        id: "n65a",
        text: "Voglio capire",
        nextMessageId: "nihal_66",
        relationshipDelta: 1,
      },
      {
        id: "n65b",
        text: "Non importa capire",
        nextMessageId: "nihal_66",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_66",
    sender: "npc",
    text: "Non SI PUÒ capire. È il punto. Io sono incomprensibile. Sono la gigantessa aliena che cerca di vivere tra voi ma che non sarà mai di voi. Che occupa spazio, che consuma risorse, che distrugge senza volerlo perché è fatta di una materia diversa.",
    timestamp: new Date(),
    choices: [
      {
        id: "n66a",
        text: "Non sei diversa",
        nextMessageId: "nihal_67",
        relationshipDelta: 0,
      },
      {
        id: "n66b",
        text: "Va bene essere diversa",
        nextMessageId: "nihal_67",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_67",
    sender: "npc",
    text: "Sono COMPLETAMENTE diversa. Guarda quanto sono grande. Quanto sono goffa. Quanto ogni mio movimento è sbagliato. Le persone normali si muovono con grazia. Io sbatto contro tutto. Rompo. Contamino. Porto entropia.",
    timestamp: new Date(),
    choices: [
      {
        id: "n67a",
        text: "Voglio conoscerti comunque",
        nextMessageId: "nihal_68",
        relationshipDelta: 1,
      },
      {
        id: "n67b",
        text: "Accetto chi sei",
        nextMessageId: "nihal_68",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_68",
    sender: "npc",
    text: "E la cosa più mostruosa? È che io non VOGLIO distruggere. Voglio solo... appartenere. Ma non posso. Perché sono troppo grande, troppo aliena, troppo ALTRA. Sono condannata a vagare ai margini, a guardare da fuori, a rompere ciò che tocco.",
    timestamp: new Date(),
    choices: [
      {
        id: "n68a",
        text: "Puoi appartenere",
        nextMessageId: "nihal_69",
        relationshipDelta: 1,
      },
      {
        id: "n68b",
        text: "Non sei condannata",
        nextMessageId: "nihal_69",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_69",
    sender: "npc",
    text: "Quindi... quindi cosa faccio? Continuo a vagare? Continuo a scusarmi? Continuo a coprire il volto sperando che nessuno veda quanto sono mostruosa? O... o accetto l'invito. Il tuo invito. A mostrarmi. Anche se sono una gigantessa. Anche se sono aliena. Anche se sono... questo.",
    timestamp: new Date(),
    choices: [
      {
        id: "n69a",
        text: "Accetta l'invito",
        nextMessageId: "nihal_70",
        relationshipDelta: 1,
      },
      {
        id: "n69b",
        text: "Ti voglio conoscere",
        nextMessageId: "nihal_70",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "nihal_70",
    sender: "npc",
    text: "Vieni. Vieni a vedere la gigantessa. Vieni a guardare il volto coperto. Vieni a stare con il mostro che non sa di esserlo. Vieni... e dimmi se dopo avermi vista davvero, tutta, enorme e goffa e aliena... vieni e dimmi se posso restare.",
    timestamp: new Date(),
  },
];

export const nihalDialogueSet: NPCDialogueSet = {
  npcId: "npc_nihal",
  variations: [
    {
      minRelationshipLevel: 0,
      messages: solarityDialogues,
    },
    {
      minRelationshipLevel: 10,
      messages: insecurityDialogues,
    },
    {
      minRelationshipLevel: 20,
      messages: parasiteDialogues,
    },
    {
      minRelationshipLevel: 35,
      messages: giantessDialogues,
    },
  ],
};
