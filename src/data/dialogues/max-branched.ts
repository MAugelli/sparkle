import { Message, NPCDialogueSet } from "../../types";

export const maxDialogueSet: NPCDialogueSet = {
  npcId: "npc_max",
  variations: [
    {
      minRelationshipLevel: 0,
      messages: [
        {
          id: "max_msg_1",
          sender: "npc",
          text: "Ciao. Vedo che hai messo {interesse} tra gli interessi. Non è comune.",
          timestamp: new Date(),
          choices: [
            {
              id: "max_choice_1a",
              text: "Sì, la mia passione è {interesse}. Senza non saprei cosa fare.",
              nextMessageId: "max_msg_2",
              relationshipDelta: 1,
            },
            {
              id: "max_choice_1b",
              text: "Era più un modo di dire.",
              nextMessageId: "max_msg_2",
              relationshipDelta: 0,
            },
          ],
        },
        {
          id: "max_msg_2",
          sender: "npc",
          text: "Capisco. La mia passione è l'allenamento. Non per vanità. Per struttura.",
          timestamp: new Date(),
        },
        {
          id: "max_msg_3",
          sender: "npc",
          text: "Mi alleno quasi ogni giorno. È l'unica cosa che non mi tradisce.",
          timestamp: new Date(),
          choices: [
            {
              id: "max_choice_3a",
              text: "Figo! Da quanto tempo?",
              nextMessageId: "max_msg_4",
              relationshipDelta: 1,
            },
            {
              id: "max_choice_3b",
              text: "Suona ossessionante.",
              nextMessageId: "max_msg_4",
              relationshipDelta: 0,
            },
          ],
        },
        {
          id: "max_msg_4",
          sender: "npc",
          text: "Da più di dieci anni. All'inizio per rabbia. Poi per abitudine. Ora perché funziona.",
          timestamp: new Date(),
        },
      ],
    },
    {
      minRelationshipLevel: 3,
      messages: [
        {
          id: "max_deep_1",
          sender: "npc",
          text: "Quando il corpo risponde, la testa smette di fare casino.",
          timestamp: new Date(),
        },
        {
          id: "max_deep_2",
          sender: "npc",
          text: "Ho visto cosa succede quando molli. Non è bello.",
          timestamp: new Date(),
          choices: [
            {
              id: "max_deep_2a",
              text: "Ti è successo qualcosa?",
              nextMessageId: "max_deep_3",
              relationshipDelta: 1,
            },
            {
              id: "max_deep_2b",
              text: "Sicuro di volerne parlare?",
              nextMessageId: "max_deep_3",
              relationshipDelta: 0,
            },
          ],
        },
        {
          id: "max_deep_3",
          sender: "npc",
          text: "Un infortunio. Tre mesi fermo. Il corpo cambia. Poi la testa segue.",
          timestamp: new Date(),
        },
        {
          id: "max_deep_4",
          sender: "npc",
          text: "Ho capito che se perdo questo, perdo tutto.",
          timestamp: new Date(),
        },
      ],
    },
  ],
};
