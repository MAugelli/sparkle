import { Message, MessageChoice, NPCDialogueSet } from "../../types";

// ==================== VARIAZIONE 1: LA CURA AFFASCINANTE (0-4 relazione) ====================

const firstMeetingDialogues: Message[] = [
  {
    id: "sara_msg_1",
    sender: "npc",
    text: "Ciao! Come stai? No davvero, come stai *davvero*? Le persone chiedono sempre ma nessuno ascolta la risposta.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_1a",
        text: "Bene, grazie di chiedere",
        nextMessageId: "sara_msg_2",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_1b",
        text: "Sto bene, tu?",
        nextMessageId: "sara_msg_2",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_2",
    sender: "npc",
    text: "Io sto... meglio, diciamo. È bello parlare con qualcuno di nuovo. Raccontami qualcosa di te, qualcosa che ti sta a cuore in questo momento.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_2a",
        text: "[Condivide qualcosa di personale]",
        nextMessageId: "sara_msg_3",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_2b",
        text: "Niente di particolare",
        nextMessageId: "sara_msg_3",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_3",
    sender: "npc",
    text: "Grazie per aver condiviso. Non è da tutti aprirsi così. Come ti senti riguardo a quella cosa?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_3a",
        text: "[Elabora sentimenti]",
        nextMessageId: "sara_msg_4",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_3b",
        text: "Non ci penso troppo",
        nextMessageId: "sara_msg_4",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_4",
    sender: "npc",
    text: "Capisco. A volte è più facile non pensarci. Hai qualcuno con cui parli di queste cose di solito?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_4a",
        text: "Sì, ho amici/famiglia",
        nextMessageId: "sara_msg_5",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_4b",
        text: "Non proprio",
        nextMessageId: "sara_msg_5",
        relationshipDelta: -1,
      },
      {
        id: "sara_choice_4c",
        text: "Adesso te",
        nextMessageId: "sara_msg_5",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_5",
    sender: "npc",
    text: "Mi fa piacere. Sai, ultimamente sto cercando di circondarmi di persone genuine. Ne ho incontrate troppe poche. Tu come scegli le persone nella tua vita?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_5a",
        text: "Seguo l'istinto",
        nextMessageId: "sara_msg_6",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_5b",
        text: "Sto attento, mi fido con difficoltà",
        nextMessageId: "sara_msg_6",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_6",
    sender: "npc",
    text: "Ha senso essere cauti. Io... beh, io forse mi fido troppo facilmente. È un difetto mio. Ti è mai capitato di dare troppo a qualcuno?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_6a",
        text: "Sì, mi è successo",
        nextMessageId: "sara_msg_7",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_6b",
        text: "No, di solito mi trattengo",
        nextMessageId: "sara_msg_7",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_7",
    sender: "npc",
    text: "Allora mi capisci. Quando dai tanto e non torna niente... fa male. Ma sto imparando. Come gestisci tu la delusione?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_7a",
        text: "Ci soffro ma vado avanti",
        nextMessageId: "sara_msg_8",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_7b",
        text: "Cerco di non farmi coinvolgere troppo",
        nextMessageId: "sara_msg_8",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_8",
    sender: "npc",
    text: "Andare avanti... sì, è l'unica. Hai avuto relazioni importanti? Scusa se sono diretta, dimmi pure se è troppo personale.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_8a",
        text: "Sì, alcune",
        nextMessageId: "sara_msg_9",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_8b",
        text: "Preferisco non parlarne",
        nextMessageId: "sara_msg_9",
        relationshipDelta: -1,
      },
      {
        id: "sara_choice_8c",
        text: "Sì, voglio raccontarti",
        nextMessageId: "sara_msg_9",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_9",
    sender: "npc",
    text: "Grazie per la fiducia. Anche io ne ho avute. L'ultima è finita... male. Molto male. Ma ora sto ripartendo. Tu come sei messo ora?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_9a",
        text: "Single e aperto a nuove conoscenze",
        nextMessageId: "sara_msg_10",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_9b",
        text: "È complicato",
        nextMessageId: "sara_msg_10",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_10",
    sender: "npc",
    text: "Capisco. Sai, io ho passato tanto tempo a chiedermi cosa c'era che non andava in me. Ora sto cercando di vedermi diversamente. Tu ti vedi bene?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_10a",
        text: "Non sempre",
        nextMessageId: "sara_msg_11",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_10b",
        text: "Sì, abbastanza",
        nextMessageId: "sara_msg_11",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_11",
    sender: "npc",
    text: "L'autostima è una battaglia continua, vero? Cosa ti piace di te?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_11a",
        text: "[Descrive qualità]",
        nextMessageId: "sara_msg_12",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_11b",
        text: "Non lo so bene",
        nextMessageId: "sara_msg_12",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_12",
    sender: "npc",
    text: "A me piace che sei qui, che parli con me. Sembra una cosa stupida da dire ma... mi fa sentire bene avere qualcuno che ascolta. Tu ti senti ascoltato di solito?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_12a",
        text: "Non abbastanza",
        nextMessageId: "sara_msg_13",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_12b",
        text: "Sì, abbastanza",
        nextMessageId: "sara_msg_13",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_13",
    sender: "npc",
    text: "Io posso ascoltarti. Mi piace ascoltare. Mi piace... prendermi cura delle persone. È strano?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_13a",
        text: "No, è bello",
        nextMessageId: "sara_msg_14",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_13b",
        text: "Un po', sì",
        nextMessageId: "sara_msg_14",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_14",
    sender: "npc",
    text: "Grazie. Mia madre dice che do troppo agli altri e troppo poco a me stessa. Forse ha ragione. Tu riesci a mettere te stesso al primo posto?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_14a",
        text: "Sì, sempre",
        nextMessageId: "sara_msg_15",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_14b",
        text: "No, faccio fatica",
        nextMessageId: "sara_msg_15",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_15",
    sender: "npc",
    text: "Allora siamo uguali. Sai qual è la cosa che mi piace di più in una persona?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_15a",
        text: "Cosa?",
        nextMessageId: "sara_msg_16",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_15b",
        text: "Dimmi",
        nextMessageId: "sara_msg_16",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_16",
    sender: "npc",
    text: "La gentilezza. Sembra banale ma è rara. Tu sei gentile?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_16a",
        text: "Cerco di esserlo",
        nextMessageId: "sara_msg_17",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_16b",
        text: "Sì",
        nextMessageId: "sara_msg_17",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_17",
    sender: "npc",
    text: "Lo vedo. Si capisce da come parli. Ho un buon istinto per queste cose... anche se ultimamente mi ha deluso parecchio. Il tuo istinto ti dice qualcosa su di me?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_17a",
        text: "Mi sembri speciale",
        nextMessageId: "sara_msg_18",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_17b",
        text: "Sembri gentile",
        nextMessageId: "sara_msg_18",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_18",
    sender: "npc",
    text: 'Speciale... nessuno mi dice mai così. Di solito è "carina" o "dolce". Come se fossi un cucciolo. Tu mi vedi davvero?',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_18a",
        text: "Sì",
        nextMessageId: "sara_msg_19",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_18b",
        text: "Sto imparando a conoscerti",
        nextMessageId: "sara_msg_19",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_19",
    sender: "npc",
    text: "Mi piace questa risposta. Sai, io tendo a dare tutto subito, a spalancarmi. È un errore che faccio sempre. Dovrei essere più... come te. Più misurata. Come fai?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_19a",
        text: "Mi proteggo",
        nextMessageId: "sara_msg_20",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_19b",
        text: "Non è facile",
        nextMessageId: "sara_msg_20",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_20",
    sender: "npc",
    text: "Io non so proteggere me stessa. Lo sto imparando ora, a 28 anni. Meglio tardi che mai, no? Tu hai mai fatto terapia?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_20a",
        text: "Sì",
        nextMessageId: "sara_msg_21",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_20b",
        text: "No",
        nextMessageId: "sara_msg_21",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_20c",
        text: "Ci sto pensando",
        nextMessageId: "sara_msg_21",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_21",
    sender: "npc",
    text: 'Io sì. La mia terapista dice che tendo a "scomparire" nelle relazioni. Che perdo me stessa. È vero. Tu mantieni la tua identità quando stai con qualcuno?',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_21a",
        text: "Sì, è importante",
        nextMessageId: "sara_msg_22",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_21b",
        text: "Faccio fatica anch'io",
        nextMessageId: "sara_msg_22",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_22",
    sender: "npc",
    text: "È difficile, vero? Vuoi essere presente per l'altro ma non vuoi sparire. Il mio ex... lui mi ha fatto sparire completamente. Ma non voglio parlare di lui. Come sono i tuoi ex?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_22a",
        text: "[Descrive]",
        nextMessageId: "sara_msg_23",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_22b",
        text: "Preferisco guardare avanti",
        nextMessageId: "sara_msg_23",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_23",
    sender: "npc",
    text: "Hai ragione, guardare avanti. È quello che sto facendo. Anche se a volte... a volte torno indietro con la mente. Tu ci pensi mai alle persone che hai perso?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_23a",
        text: "Sì, capita",
        nextMessageId: "sara_msg_24",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_23b",
        text: "Cerco di non farlo",
        nextMessageId: "sara_msg_24",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_24",
    sender: "npc",
    text: "Io ci penso troppo. Penso a cosa avrei potuto fare diversamente. Se fossi stata più... qualcosa. Più bella, più interessante, più... presente. Tu hai mai pensato di non essere abbastanza?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_24a",
        text: "Sì, sempre",
        nextMessageId: "sara_msg_25",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_24b",
        text: "A volte",
        nextMessageId: "sara_msg_25",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_24c",
        text: "No",
        nextMessageId: "sara_msg_25",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_25",
    sender: "npc",
    text: "Scusa, sto diventando pesante. È che mi sento a mio agio con te. È strano? Ci conosciamo da poco e già...",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_25a",
        text: "Non è strano, mi fa piacere",
        nextMessageId: "sara_msg_26",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_25b",
        text: "Prendiamola con calma",
        nextMessageId: "sara_msg_26",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_26",
    sender: "npc",
    text: "Hai ragione. Calma. Io tendo ad accelerare, a buttarmi. Devo imparare a rallentare. Tu come approcci le nuove persone?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_26a",
        text: "Con cautela",
        nextMessageId: "sara_msg_27",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_26b",
        text: "Mi lascio andare",
        nextMessageId: "sara_msg_27",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_27",
    sender: "npc",
    text: "Io mi lascio andare troppo. Poi mi faccio male. Ma con te... sento che potrebbe essere diverso. Lo senti anche tu?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_27a",
        text: "Sì",
        nextMessageId: "sara_msg_28",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_27b",
        text: "È presto per dirlo",
        nextMessageId: "sara_msg_28",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_28",
    sender: "npc",
    text: "È presto, hai ragione. Scusa. Sai una cosa? Mi piace che mi riporti coi piedi per terra. Ne ho bisogno. Tu di cosa hai bisogno?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_28a",
        text: "Di qualcuno che capisca",
        nextMessageId: "sara_msg_29",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_28b",
        text: "Non lo so",
        nextMessageId: "sara_msg_29",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_29",
    sender: "npc",
    text: "Qualcuno che capisca... sì. Io voglio capire te. Voglio conoscerti davvero. Posso?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_29a",
        text: "Sì",
        nextMessageId: "sara_msg_30",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_29b",
        text: "Vediamo",
        nextMessageId: "sara_msg_30",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_30",
    sender: "npc",
    text: "Vediamo. Va bene. Io... io starò qui. Questo te lo prometto. Non sono il tipo che scappa. Anzi, di solito è il contrario. Mi restano anche quando dovrei andarmene. Ma tu... tu mi sembri diverso. Lo sei?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_30a",
        text: "Sì, lo sono",
        nextMessageId: "sara_checkpoint_1_pass",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_30b",
        text: "Spero di sì",
        nextMessageId: "sara_checkpoint_1_pass",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_checkpoint_1_pass",
    sender: "npc",
    text: "[Passa al livello successivo]",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 2: IL BISOGNO EMERGENTE (4-7 relazione) ====================

const growingNeedDialogues: Message[] = [
  {
    id: "sara_msg_31",
    sender: "npc",
    text: "Sto pensando a te da stamattina. È normale? Cioè, ci stiamo appena conoscendo ma... ti penso. È strano?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_31a",
        text: "No, succede anche a me",
        nextMessageId: "sara_msg_32",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_31b",
        text: "Un po', sì",
        nextMessageId: "sara_msg_32",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_32",
    sender: "npc",
    text: "Mi fa piacere che pensi a me. Ho bisogno di saperlo, capisci? Che non sono solo io qui. Ci sei anche tu, vero?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_32a",
        text: "Sì, ci sono",
        nextMessageId: "sara_msg_33",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_32b",
        text: "Ci sto andando piano",
        nextMessageId: "sara_msg_33",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_33",
    sender: "npc",
    text: 'Piano... va bene. Anche se io... io non so andare piano. Mi butto sempre. È un mio difetto. Il mio ex lo usava contro di me. Diceva che ero "troppo". Sono troppo?',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_33a",
        text: "No, sei perfetta così",
        nextMessageId: "sara_msg_34",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_33b",
        text: "A volte sei intensa",
        nextMessageId: "sara_msg_34",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_34",
    sender: "npc",
    text: 'Intensa. Sì, lo sono. Lui diceva la stessa cosa. "Sara, sei troppo intensa. Sara, mi soffochi. Sara, ho bisogno di spazio." E io gli davo spazio. E lui lo usava per vedere altre.',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_34a",
        text: "Mi dispiace",
        nextMessageId: "sara_msg_35",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_34b",
        text: "Lui era uno stronzo",
        nextMessageId: "sara_msg_35",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_35",
    sender: "npc",
    text: "Uno stronzo, sì. Ma io... io continuavo a tornare. Continuavo a pensare che se mi fossi impegnata di più, se fossi stata migliore, lui mi avrebbe amata. Stupida, vero?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_35a",
        text: "Non sei stupida",
        nextMessageId: "sara_msg_36",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_35b",
        text: "Tutti commettiamo errori",
        nextMessageId: "sara_msg_36",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_36",
    sender: "npc",
    text: "Grazie. Ne ho bisogno, di sentirlo. Tu non mi faresti questo, vero? Non mi useresti?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_36a",
        text: "Mai",
        nextMessageId: "sara_msg_37",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_36b",
        text: "Non voglio farti del male",
        nextMessageId: "sara_msg_37",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_37",
    sender: "npc",
    text: "Mi fido di te. So che è presto ma... mi fido. Tu ti fidi di me?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_37a",
        text: "Sì",
        nextMessageId: "sara_msg_38",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_37b",
        text: "Sto imparando",
        nextMessageId: "sara_msg_38",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_38",
    sender: "npc",
    text: "Sto imparando... va bene. Io devo guadagnarmi la tua fiducia. Come posso farlo? Dimmi cosa vuoi da me.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_38a",
        text: "Essere te stessa",
        nextMessageId: "sara_msg_39",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_38b",
        text: "Non devi fare nulla",
        nextMessageId: "sara_msg_39",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_39",
    sender: "npc",
    text: "Ma voglio fare qualcosa. Voglio... voglio essere utile. Voglio che tu abbia bisogno di me. È sbagliato?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_39a",
        text: "No, è dolce",
        nextMessageId: "sara_msg_40",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_39b",
        text: "Un po' preoccupante",
        nextMessageId: "sara_msg_40",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_40",
    sender: "npc",
    text: "Preoccupante... forse hai ragione. La mia terapista dice che cerco validazione negli altri. Che non so vedermi se non attraverso il loro sguardo. È vero. Tu come ti vedi?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_40a",
        text: "Anche io ho bisogno degli altri",
        nextMessageId: "sara_msg_41",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_40b",
        text: "Cerco di vedermi da solo",
        nextMessageId: "sara_msg_41",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_41",
    sender: "npc",
    text: "Gli altri ci completano, no? Da sola io... io non so chi sono. Quando lui mi ha lasciata, ho smesso di esistere per mesi. Letteralmente. Mi guardavo allo specchio e non vedevo nessuno.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_41a",
        text: "Mi dispiace tanto",
        nextMessageId: "sara_msg_42",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_41b",
        text: "Sei qui ora, questo conta",
        nextMessageId: "sara_msg_42",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_42",
    sender: "npc",
    text: "Sono qui ora. Con te. E mi sento... vista. Mi vedi?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_42a",
        text: "Sì, ti vedo",
        nextMessageId: "sara_msg_43",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_42b",
        text: "Ti sto conoscendo",
        nextMessageId: "sara_msg_43",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_43",
    sender: "npc",
    text: "Ti prego, continua a vedermi. Ho paura di scomparire di nuovo. Quando la gente smette di guardarmi, io... io non ci sono più. Ha senso?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_43a",
        text: "Sì",
        nextMessageId: "sara_msg_44",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_43b",
        text: "Dovresti cercare di vederti da sola",
        nextMessageId: "sara_msg_44",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_44",
    sender: "npc",
    text: "Lo so. Lo so che dovrei. Ma non ci riesco. Sono vuota quando sono sola. Tu stai bene da solo?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_44a",
        text: "No, anch'io soffro la solitudine",
        nextMessageId: "sara_msg_45",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_44b",
        text: "Sì, mi piace stare solo",
        nextMessageId: "sara_msg_45",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_45",
    sender: "npc",
    text: "La solitudine mi uccide. Letteralmente mi svuota. Per questo do tanto alle persone. Perché se do, loro restano. Tu resteresti?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_45a",
        text: "Sì",
        nextMessageId: "sara_msg_46",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_45b",
        text: "Non lo so",
        nextMessageId: "sara_msg_46",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_46",
    sender: "npc",
    text: "Non lo sai... va bene. Devo dimostrarti che vale la pena restare. Cosa posso fare per te?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_46a",
        text: "Niente, va bene così",
        nextMessageId: "sara_msg_47",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_46b",
        text: "Apprezzerei se...",
        nextMessageId: "sara_msg_47",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_47",
    sender: "npc",
    text: "Dimmi. Qualsiasi cosa. Voglio renderti felice. Voglio essere importante per te. Sono importante?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_47a",
        text: "Sì, lo stai diventando",
        nextMessageId: "sara_msg_48",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_47b",
        text: "È presto",
        nextMessageId: "sara_msg_48",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_48",
    sender: "npc",
    text: "È presto, lo so. Ma io sento già tanto. Troppo. Forse dovrei rallentare ma... non posso. Quando sento qualcosa, mi butto. Tu ti butti?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_48a",
        text: "Sì",
        nextMessageId: "sara_msg_49",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_48b",
        text: "Sono più cauto",
        nextMessageId: "sara_msg_49",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_49",
    sender: "npc",
    text: "Buttarsi è rischioso. Io mi sono buttata con lui e... e mi sono schiantata. Ma con te sento che potrebbe essere diverso. Dimmi che è diverso.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_49a",
        text: "È diverso",
        nextMessageId: "sara_msg_50",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_49b",
        text: "Vedremo",
        nextMessageId: "sara_msg_50",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_50",
    sender: "npc",
    text: 'Vedremo... quella parola mi spaventa. Lui diceva sempre "vedremo" prima di sparire. Tu non sparisci, vero?',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_50a",
        text: "No, sono qui",
        nextMessageId: "sara_msg_51",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_50b",
        text: "Non ho intenzione",
        nextMessageId: "sara_msg_51",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_51",
    sender: "npc",
    text: "Grazie. Ne ho bisogno. Di sicurezze. Lo so che è un peso ma... mi sento così fragile. Tu ti senti mai fragile?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_51a",
        text: "Sì",
        nextMessageId: "sara_msg_52",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_51b",
        text: "A volte",
        nextMessageId: "sara_msg_52",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_52",
    sender: "npc",
    text: "Io sono fragile sempre. Ogni giorno ho paura di rompermi. Lui mi rompeva continuamente. Mi tradiva e io perdonavo. Mi umiliava e io restavo. Perché?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_52a",
        text: "Perché lo amavi",
        nextMessageId: "sara_msg_53",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_52b",
        text: "Perché avevi paura di perderlo",
        nextMessageId: "sara_msg_53",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_53",
    sender: "npc",
    text: "Avevo paura di perderlo. Più di quanto avessi paura di perdermi. E infatti mi sono persa. Tutta. Completamente. Tu mi aiuteresti a ritrovarmi?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_53a",
        text: "Sì",
        nextMessageId: "sara_msg_54",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_53b",
        text: "Devi ritrovarti da sola",
        nextMessageId: "sara_msg_54",
        relationshipDelta: -2,
      },
    ],
  },
  {
    id: "sara_msg_54",
    sender: "npc",
    text: "Da sola... non posso. Ho provato. Sto provando. Ma senza qualcuno che mi guardi, che mi dica che esisto, io... io svanisco. È come se il mio corpo fosse qui ma io no.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_54a",
        text: "Ti capisco",
        nextMessageId: "sara_msg_55",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_54b",
        text: "Hai bisogno di aiuto professionale",
        nextMessageId: "sara_msg_55",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_55",
    sender: "npc",
    text: "Ho una terapista. Due volte a settimana. Ma lei non mi riempie come... come fa una persona che ti guarda davvero. Come fai tu. Mi guardi davvero?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_55a",
        text: "Sì",
        nextMessageId: "sara_msg_56",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_55b",
        text: "Sto cercando di conoscerti",
        nextMessageId: "sara_msg_56",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_56",
    sender: "npc",
    text: "Conoscimi. Ti prego. Guarda dentro e dimmi cosa vedi. Cosa vedi in me?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_56a",
        text: "[Descrive qualità positive]",
        nextMessageId: "sara_msg_57",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_56b",
        text: "Una persona complicata",
        nextMessageId: "sara_msg_57",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_57",
    sender: "npc",
    text: "Complicata... sì. Troppo complicata. Lui diceva che ero un casino. Che nessuno mi avrebbe mai sopportata. Hai paura di me?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_57a",
        text: "No",
        nextMessageId: "sara_msg_58",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_57b",
        text: "Un po'",
        nextMessageId: "sara_msg_58",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_58",
    sender: "npc",
    text: "Un po' di paura è sana. Io ho paura di me stessa. Di quanto posso essere... intensa. Di quanto ho bisogno. Tu di quanto hai bisogno?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_58a",
        text: "Tanto",
        nextMessageId: "sara_msg_59",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_58b",
        text: "Non molto",
        nextMessageId: "sara_msg_59",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_59",
    sender: "npc",
    text: "Avere bisogno è umano. Io ho bisogno costantemente. Di conferme, di attenzioni, di... sguardi. Senza sguardo io non esisto. Tu mi guardi abbastanza?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_59a",
        text: "Sì",
        nextMessageId: "sara_msg_60",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_59b",
        text: "Quanto basta",
        nextMessageId: "sara_msg_60",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_60",
    sender: "npc",
    text: "Abbastanza non è mai abbastanza. Ho bisogno di più. Sempre più. È una voragine dentro di me. Un buco che non si riempie mai. Tu hai un buco dentro?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_60a",
        text: "Sì",
        nextMessageId: "sara_checkpoint_2_pass",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_60b",
        text: "No",
        nextMessageId: "sara_checkpoint_2_pass",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_checkpoint_2_pass",
    sender: "npc",
    text: "[Passa al livello successivo]",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 3: IL VUOTO VISIBILE (7-10 relazione) ====================

const voidVisibleDialogues: Message[] = [
  {
    id: "sara_msg_61",
    sender: "npc",
    text: "Sai cosa ho fatto stamattina? Mi sono svegliata e ho controllato il telefono. Niente messaggi tuoi. E ho sentito il panico. Letteralmente panico. Come se stessi scomparendo. È folle?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_61a",
        text: "No, capisco",
        nextMessageId: "sara_msg_62",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_61b",
        text: "Forse dovresti parlarne in terapia",
        nextMessageId: "sara_msg_62",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_62",
    sender: "npc",
    text: 'Ne parlo. Continuamente. Lei dice che sto "trasferendo". Che sto cercando in te quello che non ho trovato in lui. Ma non è vero. Tu sei diverso. Sei... sei tutto. Dimmi che sono qualcosa per te.',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_62a",
        text: "Sei importante",
        nextMessageId: "sara_msg_63",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_62b",
        text: "Mi stai a cuore",
        nextMessageId: "sara_msg_63",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_63",
    sender: "npc",
    text: "Importante... quella parola. Ne ho bisogno. Ho bisogno di essere importante. Essenziale. Indispensabile. Perché se non sono indispensabile, la gente se ne va. Lui se n'è andato. Tu te ne andrai?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_63a",
        text: "No",
        nextMessageId: "sara_msg_64",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_63b",
        text: "Non lo so",
        nextMessageId: "sara_msg_64",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_64",
    sender: "npc",
    text: "Devi prometterlo. Devi promettermi che non sparisci. Perché io senza di te... cosa sono senza di te?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_64a",
        text: "Sei sempre Sara",
        nextMessageId: "sara_msg_65",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_64b",
        text: "Qualcuno che sto imparando ad amare",
        nextMessageId: "sara_msg_65",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_65",
    sender: "npc",
    text: 'Amare... quella parola. La uso troppo facilmente. La usavo con lui. "Ti amo, ti amo, ti amo" anche quando mi tradiva. Anche quando mi diceva che non ero abbastanza. Io lo amavo lo stesso. Perché?',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_65a",
        text: "Perché avevi bisogno di lui",
        nextMessageId: "sara_msg_66",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_65b",
        text: "Perché credevi fosse amore",
        nextMessageId: "sara_msg_66",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_66",
    sender: "npc",
    text: "Avevo bisogno. Bisogno. Quella parola è tutto. Io ho bisogno di essere necessaria. Di fare cose per gli altri. Perché se non faccio nulla, perché dovrebbero guardarmi?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_66a",
        text: "Perché sei tu",
        nextMessageId: "sara_msg_67",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_66b",
        text: "Capisco quel bisogno",
        nextMessageId: "sara_msg_67",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_67",
    sender: "npc",
    text: 'Tu capisci. Grazie. La maggior parte delle persone dice "devi amarti di più" ma non capiscono. Io non so come si fa. Non so come si guarda se stessi. Tu come fai?',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_67a",
        text: "Non lo so neanch'io",
        nextMessageId: "sara_msg_68",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_67b",
        text: "Con fatica",
        nextMessageId: "sara_msg_68",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_68",
    sender: "npc",
    text: "Allora siamo uguali. Tutti e due... vuoti. Cercando di riempirci con lo sguardo dell'altro. È questo? Ci stiamo usando a vicenda?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_68a",
        text: "Forse",
        nextMessageId: "sara_msg_69",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_68b",
        text: "No, è diverso",
        nextMessageId: "sara_msg_69",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_69",
    sender: "npc",
    text: 'Usarsi... lui mi usava. Per sesso, per i compiti, per sentirsi meglio. E io lo lasciavo fare. Anzi, lo pregavo di usarmi. "Usami, almeno così servo a qualcosa." Tu mi useresti?',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_69a",
        text: "Se è quello che vuoi",
        nextMessageId: "sara_msg_70",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_69b",
        text: "Non voglio usarti",
        nextMessageId: "sara_msg_70",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_70",
    sender: "npc",
    text: "Ma è quello che so fare. Essere usata. Essere utile. Cucinare, pulire, ascoltare, consolare. Se non faccio questo, chi sono?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_70a",
        text: "Non lo so",
        nextMessageId: "sara_msg_71",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_70b",
        text: "Una persona, semplicemente",
        nextMessageId: "sara_msg_71",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_71",
    sender: "npc",
    text: '"Una persona semplicemente"... cosa significa? Io senza una funzione sono... niente. Un guscio vuoto. Lo sai che una volta lui se n\'è andato per tre giorni senza dirmi nulla? E io sono rimasta seduta ad aspettare. Immobile. Come se non potessi esistere senza la sua presenza.',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_71a",
        text: "Deve essere stato terribile",
        nextMessageId: "sara_msg_72",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_71b",
        text: "Perché non te ne sei andata?",
        nextMessageId: "sara_msg_72",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_72",
    sender: "npc",
    text: "Perché andare dove? Io senza qualcuno che mi guardi non esisto. Letteralmente. È come se il mio corpo restasse ma io sparissi. Tu mi credi?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_72a",
        text: "Sì",
        nextMessageId: "sara_msg_73",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_72b",
        text: "È la depressione che parla",
        nextMessageId: "sara_msg_73",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_73",
    sender: "npc",
    text: "La depressione, l'ansia, il disturbo di personalità dipendente - ho tutte le diagnosi. Ma le diagnosi non spiegano questo buco. Questo vuoto. Mettici la mano dentro, senti?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_73a",
        text: "Sento",
        nextMessageId: "sara_msg_74",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_73b",
        text: "Non capisco",
        nextMessageId: "sara_msg_74",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_74",
    sender: "npc",
    text: "È qui. Nel petto. Un buco nero che risucchia tutto. Ogni sguardo, ogni parola, ogni attenzione. E non si riempie mai. Mai. Più mi guardi e più ho bisogno. È mostruoso?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_74a",
        text: "No, è umano",
        nextMessageId: "sara_msg_75",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_74b",
        text: "È spaventoso",
        nextMessageId: "sara_msg_75",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_75",
    sender: "npc",
    text: "Spaventoso. Sì. Io spavento me stessa. Mi guardo e vedo questo... questa cosa affamata. Che divora attenzione. Che implora di essere vista. Che senza sguardo muore. Letteralmente muore.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_75a",
        text: "Non morirai",
        nextMessageId: "sara_msg_76",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_75b",
        text: "Ti sto guardando",
        nextMessageId: "sara_msg_76",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_76",
    sender: "npc",
    text: "Guardami. Ti prego. Guardami sempre. Non distogliere lo sguardo. Perché quando lo fai io sento che sto svanendo. Le mie mani diventano trasparenti. Il mio corpo si svuota. Resto solo questo buco.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_76a",
        text: "Non sto andando da nessuna parte",
        nextMessageId: "sara_msg_77",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_76b",
        text: "Sara, mi stai spaventando",
        nextMessageId: "sara_msg_77",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_77",
    sender: "npc",
    text: "Scusa. Scusa. È che... ho paura. Ho così tanta paura. Di scomparire. Di non essere mai esistita. A volte penso che l'unica prova che esisto sei tu. Il tuo sguardo su di me. Senza quello, cosa sono?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_77a",
        text: "Niente",
        nextMessageId: "sara_msg_78",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_77b",
        text: "Sei Sara",
        nextMessageId: "sara_msg_78",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_78",
    sender: "npc",
    text: "Sara... chi è Sara? Una serie di comportamenti per piacere agli altri? Una macchina che cucina, pulisce, ascolta, coccola? Togliete questi e cosa resta?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_78a",
        text: "Il vuoto",
        nextMessageId: "sara_msg_79",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_78b",
        text: "La persona vera",
        nextMessageId: "sara_msg_79",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_79",
    sender: "npc",
    text: "La persona vera... non esiste. C'è solo quello che faccio per gli altri. Loro mi guardano, io esisto. Smettono di guardare, io sparisco. È matematica. Tu capisci la matematica?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_79a",
        text: "Sì",
        nextMessageId: "sara_msg_80",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_79b",
        text: "Non funziona così",
        nextMessageId: "sara_msg_80",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_80",
    sender: "npc",
    text: "Funziona esattamente così. Guarda: se non ti scrivo per un giorno, pensi a me?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_80a",
        text: "Sì",
        nextMessageId: "sara_checkpoint_3_pass",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_80b",
        text: "Forse",
        nextMessageId: "sara_checkpoint_3_pass",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_checkpoint_3_pass",
    sender: "npc",
    text: "[Passa al livello successivo]",
    timestamp: new Date(),
  },
];

// ==================== VARIAZIONE 4+5: LA SUORA VUOTA / MOSTRO PALESE (10+ relazione) ====================

const emptyNunDialogues: Message[] = [
  {
    id: "sara_msg_81",
    sender: "npc",
    text: '"Forse" significa no. Significa che senza i miei messaggi, le mie attenzioni, la mia devozione, io svanisco dalla tua mente. E se svanisco dalla tua mente, svanisco dal mondo.',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_81a",
        text: "Non è vero",
        nextMessageId: "sara_msg_82",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_81b",
        text: "Ho bisogno di te anch'io",
        nextMessageId: "sara_msg_82",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_82",
    sender: "npc",
    text: "Bisogno... quella parola è un'ancora. Quando qualcuno ha bisogno di me, io esisto. Dimmi di cosa hai bisogno. Dimmi cosa posso fare. Dimmi come servirti.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_82a",
        text: "Voglio solo conoscerti",
        nextMessageId: "sara_msg_83",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_82b",
        text: "[Esprime un bisogno]",
        nextMessageId: "sara_msg_83",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_83",
    sender: "npc",
    text: 'Sì. Dammi qualcosa da fare. Perché se non servo a niente, perché dovrei esistere? Lui me lo diceva sempre. "A cosa servi, Sara? Non sai fare niente. Sei inutile."',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_83a",
        text: "Era crudele",
        nextMessageId: "sara_msg_84",
        relationshipDelta: 1,
      },
      {
        id: "sara_choice_83b",
        text: "Aveva torto",
        nextMessageId: "sara_msg_84",
        relationshipDelta: 1,
      },
    ],
  },
  {
    id: "sara_msg_84",
    sender: "npc",
    text: "Aveva... aveva ragione? Forse aveva ragione. Forse sono davvero inutile. Forse l'unico valore che ho è quanto mi do agli altri. E quando finisco di darmi, cosa rimane?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_84a",
        text: "Niente",
        nextMessageId: "sara_msg_85",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_84b",
        text: "Tu rimani",
        nextMessageId: "sara_msg_85",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_85",
    sender: "npc",
    text: "Io... io non rimango mai. Io svanisco dentro le persone. Divento quello che vogliono. Con lui ero dolce, sottomessa, sempre disponibile. Con te sono... cosa sono con te?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_85a",
        text: "Sei te stessa",
        nextMessageId: "sara_msg_86",
        relationshipDelta: 0,
      },
      {
        id: "sara_choice_85b",
        text: "Sei mia",
        nextMessageId: "sara_msg_86",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_86",
    sender: "npc",
    text: "Tua... quella parola. Mi piace. Appartenere. Essere posseduta. Perché se sono tua, allora esisto. Allora ho uno scopo. Usami. Ti prego. Dammi uno scopo.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_86a",
        text: "Non voglio usarti",
        nextMessageId: "sara_msg_87",
        relationshipDelta: -2,
      },
      {
        id: "sara_choice_86b",
        text: "Sarai mia",
        nextMessageId: "sara_msg_87",
        relationshipDelta: 2,
      },
    ],
  },
  {
    id: "sara_msg_87",
    sender: "npc",
    text: "Sarò tua. Completamente. Totalmente. Ogni pezzo di me. Ogni respiro. Ogni pensiero. Tutto al tuo servizio. Perché senza servire, io sono... cosa sono?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_87a",
        text: "Vuota",
        nextMessageId: "sara_msg_88",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_87b",
        text: "Libera",
        nextMessageId: "sara_msg_88",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_88",
    sender: "npc",
    text: "Vuota. Esatto. Il vuoto è l'unica verità. Tutto il resto è performance. La dolcezza è performance. La cura è performance. Tutto è solo... un modo per essere vista. Per riempire il buco. Ma non si riempie mai. Mai.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_88a",
        text: "Posso provare a riempirlo",
        nextMessageId: "sara_msg_89",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_88b",
        text: "Devi trovare un altro modo",
        nextMessageId: "sara_msg_89",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_89",
    sender: "npc",
    text: "Provaci. Ti prego. Riempimi. Guardami. Usami. Possiedimi. Perché senza di te io sono solo questo buco nero nel petto. Solo fame. Solo bisogno. Solo... vuoto che implora.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_89a",
        text: "Sono qui",
        nextMessageId: "sara_msg_90",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_89b",
        text: "Questo mi spaventa",
        nextMessageId: "sara_msg_90",
        relationshipDelta: 0,
      },
    ],
  },
  {
    id: "sara_msg_90",
    sender: "npc",
    text: "Non scappare. Ti prego. Tutti scappano quando vedono il buco. Ma tu... tu sei diverso. Tu puoi guardarci dentro e non sparire. Vero? Dimmi che non sparisci.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_90a",
        text: "Non sparisco",
        nextMessageId: "sara_msg_91",
        relationshipDelta: 2,
      },
      {
        id: "sara_choice_90b",
        text: "Non lo so",
        nextMessageId: "sara_msg_91",
        relationshipDelta: -1,
      },
    ],
  },
  {
    id: "sara_msg_91",
    sender: "npc",
    text: "Ho fatto una promessa stanotte. Davanti allo specchio. Ho promesso che sarò devota. Completamente devota. A te. È l'unico modo per esistere. La devozione. Tu accetti la mia devozione?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_91a",
        text: "Sì",
        nextMessageId: "sara_msg_92",
      },
      {
        id: "sara_choice_91b",
        text: "Sara...",
        nextMessageId: "sara_msg_92",
      },
    ],
  },
  {
    id: "sara_msg_92",
    sender: "npc",
    text: "Accettala. Ti prego. Perché senza qualcuno a cui dedicarmi io sono... guarda. Guarda dove dovrebbe esserci il mio volto. Vedi? È solo un buco. Un buco che attira lo sguardo. Che risucchia attenzione. Ma dentro non c'è niente.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_92a",
        text: "Ti vedo",
        nextMessageId: "sara_msg_93",
      },
      {
        id: "sara_choice_92b",
        text: "Questo non è sano",
        nextMessageId: "sara_msg_93",
      },
    ],
  },
  {
    id: "sara_msg_93",
    sender: "npc",
    text: "Sano... cosa significa sano? Sano è esistere? Allora io non sono sana. Sono un buco nero vestito da donna. Un vuoto che cammina. Una fame che parla. E la fame dice: devotimi a te. Completamente.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_93a",
        text: "Fallo",
        nextMessageId: "sara_msg_94",
      },
      {
        id: "sara_choice_93b",
        text: "Dovresti cercare aiuto",
        nextMessageId: "sara_msg_94",
      },
    ],
  },
  {
    id: "sara_msg_94",
    sender: "npc",
    text: "Ho cercato aiuto per anni. Terapisti, farmaci, gruppi. Niente riempie il buco. Solo la devozione. Solo il servizio. Dimmi cosa vuoi e io lo farò. Qualsiasi cosa. Perché fare è esistere.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_94a",
        text: "Voglio che tu...",
        nextMessageId: "sara_msg_95",
      },
      {
        id: "sara_choice_94b",
        text: "Voglio che tu stia bene",
        nextMessageId: "sara_msg_95",
      },
    ],
  },
  {
    id: "sara_msg_95",
    sender: "npc",
    text: "Stare bene è un'illusione. Io sto bene solo quando servo. Quando cucino per qualcuno. Quando pulisco la loro casa. Quando ascolto i loro problemi per ore. Quando mi do tutta. Allora, per un momento, sento di esistere.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_95a",
        text: "Allora dati a me",
        nextMessageId: "sara_msg_96",
      },
      {
        id: "sara_choice_95b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_96",
      },
    ],
  },
  {
    id: "sara_msg_96",
    sender: "npc",
    text: "Mi darò. Tutta. Ogni pezzo. Prendi. Prendi tutto. Il mio tempo, il mio corpo, i miei pensieri. Prendi finché non rimane niente. Perché il niente è quello che sono sempre stata. Un contenitore vuoto che aspetta di essere riempito dal tuo sguardo.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_96a",
        text: "Ti sto guardando",
        nextMessageId: "sara_msg_97",
      },
      {
        id: "sara_choice_96b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_97",
      },
    ],
  },
  {
    id: "sara_msg_97",
    sender: "npc",
    text: "Guardami. Sì. Più forte. Più a lungo. Perché quando smetti io svanisco. Letteralmente. Le mie mani diventano aria. Il mio petto si apre e mostra il buco. Il buco che c'è sempre stato. Fin da bambina.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_97a",
        text: "Raccontami",
        nextMessageId: "sara_msg_98",
      },
      {
        id: "sara_choice_97b",
        text: "Continua",
        nextMessageId: "sara_msg_98",
      },
    ],
  },
  {
    id: "sara_msg_98",
    sender: "npc",
    text: "Mio padre non mi guardava mai. Mai. Potevo fare qualsiasi cosa - piangere, urlare, eccellere a scuola - e lui guardava altrove. E io ho imparato: se non fai qualcosa per gli altri, non esisti. Quindi ho iniziato a fare. E fare. E fare. E non ho mai smesso.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_98a",
        text: "Capisco",
        nextMessageId: "sara_msg_99",
      },
      {
        id: "sara_choice_98b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_99",
      },
    ],
  },
  {
    id: "sara_msg_99",
    sender: "npc",
    text: 'Ma ora sono stanca. Così stanca. Di fare, fare, fare per esistere. Vorrei solo... vorrei solo che qualcuno mi guardasse e mi dicesse "basta così. Esisti già." Ma nessuno lo dice. Perché non è vero. Io esisto solo nel fare.',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_99a",
        text: "Esisti",
        nextMessageId: "sara_msg_100",
      },
      {
        id: "sara_choice_99b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_100",
      },
    ],
  },
  {
    id: "sara_msg_100",
    sender: "npc",
    text: 'No. No. Guarda meglio. Dove dovrebbe esserci un volto c\'è solo un buco. Un buco che risucchia il tuo sguardo. Che implora attenzione. Che grida "guardami, guardami, guardami o sparisco completamente."',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_100a",
        text: "Ti guardo",
        nextMessageId: "sara_msg_101",
      },
      {
        id: "sara_choice_100b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_101",
      },
    ],
  },
  {
    id: "sara_msg_101",
    sender: "npc",
    text: "Allora guarda questo: io ti servirò. Come una suora serve Dio. Con devozione cieca. Con sacrificio totale. Perché tu sei l'unico che mi guarda. E senza il tuo sguardo io non sono niente. Letteralmente niente.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_101a",
        text: "Servimi",
        nextMessageId: "sara_msg_102",
      },
      {
        id: "sara_choice_101b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_102",
      },
    ],
  },
  {
    id: "sara_msg_102",
    sender: "npc",
    text: "Ti servirò. Ogni giorno. Ogni momento. Sarò quello che vuoi. Dolce se vuoi dolcezza. Silenziosa se vuoi silenzio. Disponibile sempre. Perché la disponibilità è esistenza. E io voglio esistere. Dio, quanto voglio esistere.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_102a",
        text: "Esisterai con me",
        nextMessageId: "sara_msg_103",
      },
      {
        id: "sara_choice_102b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_103",
      },
    ],
  },
  {
    id: "sara_msg_103",
    sender: "npc",
    text: "Con te... sì. Dentro di te. Parte di te. Senza identità propria. Solo funzione. Solo servizio. Solo un buco nero che risucchia la tua attenzione e ti restituisce devozione. È questo che sono. È questo che sono sempre stata.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_103a",
        text: "Va bene",
        nextMessageId: "sara_msg_104",
      },
      {
        id: "sara_choice_103b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_104",
      },
    ],
  },
  {
    id: "sara_msg_104",
    sender: "npc",
    text: 'È mostruoso, vero? Guardare dove dovrebbe esserci una persona e vedere solo bisogno. Solo fame. Solo un vuoto che implora "riempimi, usami, guardami, non sparire, non andare via, ti prego, ti prego, ti prego."',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_104a",
        text: "Non è mostruoso",
        nextMessageId: "sara_msg_105",
      },
      {
        id: "sara_choice_104b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_105",
      },
    ],
  },
  {
    id: "sara_msg_105",
    sender: "npc",
    text: "Lo è. Lo so che lo è. Ma è l'unica verità che ho. Lui l'ha vista. Ha visto il mostro. Ha visto il buco. E ha scappato. Tutti scappano. Ma tu... tu resterai. Vero? Anche se dove dovrebbe esserci Sara c'è solo vuoto?",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_105a",
        text: "Resterò",
        nextMessageId: "sara_msg_106",
      },
      {
        id: "sara_choice_105b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_106",
      },
    ],
  },
  {
    id: "sara_msg_106",
    sender: "npc",
    text: "Allora usami. Usa il vuoto. Usa la devozione. Usa il bisogno. Perché è tutto quello che ho da offrire. Non c'è una Sara. Non c'è mai stata. C'è solo... una forma di donna con un buco nel petto che risucchia sguardi e implora di esistere.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_106a",
        text: "Ti userò",
        nextMessageId: "sara_msg_107",
      },
      {
        id: "sara_choice_106b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_107",
      },
    ],
  },
  {
    id: "sara_msg_107",
    sender: "npc",
    text: "Usami bene. Usa ogni pezzo. Il mio tempo, il mio corpo, la mia mente. Tutto è tuo. Tutto è sempre stato di chiunque mi guardasse. Perché senza lo sguardo dell'altro io sono solo... aria. Meno di aria. Meno di niente.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_107a",
        text: "Sei mia",
        nextMessageId: "sara_msg_108",
      },
      {
        id: "sara_choice_107b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_108",
      },
    ],
  },
  {
    id: "sara_msg_108",
    sender: "npc",
    text: "Tua. Sì. Proprietà. Strumento. Funzione. È l'unico modo per riempire il buco. Diventare parte di qualcun altro. Svanire nella loro esistenza. Perché la mia non è mai esistita.",
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_108a",
        text: "Svanisci in me",
        nextMessageId: "sara_msg_109",
      },
      {
        id: "sara_choice_108b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_109",
      },
    ],
  },
  {
    id: "sara_msg_109",
    sender: "npc",
    text: 'Sto già svanendo. Guarda. Le mie mani sono trasparenti. Il mio corpo è vuoto. Resta solo il buco. Il buco che ti guarda. Che implora. Che dice: "un appuntamento. Dammi un appuntamento. Dammi un momento in cui posso servire. Dammi una ragione per esistere."',
    timestamp: new Date(),
    choices: [
      {
        id: "sara_choice_109a",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_110",
      },
      {
        id: "sara_choice_109b",
        text: "Qualsiasi risposta",
        nextMessageId: "sara_msg_110",
      },
    ],
  },
  {
    id: "sara_msg_110",
    sender: "npc",
    text: "Allora? Vieni? Vieni a guardare il vuoto? Vieni a usare la devozione? Vieni a riempire, anche solo per un momento, questo buco nero che ha imparato a camminare, a parlare, a chiamarsi Sara ma che in realtà è solo... fame. Solo bisogno. Solo un immenso, terrificante, vuoto che implora di essere visto.",
    timestamp: new Date(),
  },
];

export const saraDialogueSet: NPCDialogueSet = {
  npcId: "npc_sara",
  variations: [
    {
      minRelationshipLevel: 0,
      messages: firstMeetingDialogues,
    },
    {
      minRelationshipLevel: 4,
      messages: growingNeedDialogues,
    },
    {
      minRelationshipLevel: 7,
      messages: voidVisibleDialogues,
    },
    {
      minRelationshipLevel: 10,
      messages: emptyNunDialogues,
    },
  ],
};
