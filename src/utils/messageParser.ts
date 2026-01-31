import { Message, PlayerProfile, NPCProfile } from "../types";
import { getSharedInterests } from "./interests";

/**
 * Sostituisce i placeholder nei messaggi con dati dinamici
 */
export const replaceMessagePlaceholders = (
  message: Message,
  playerProfile: PlayerProfile,
  npcProfile: NPCProfile,
): Message => {
  const sharedInterests = getSharedInterests(playerProfile, npcProfile);
  const firstSharedInterest =
    sharedInterests.length > 0 ? sharedInterests[0] : "interessi comuni";

  return {
    ...message,
    text: message.text
      .replace("{interesse}", firstSharedInterest)
      .replace("{playerName}", playerProfile.name)
      .replace("{npcName}", npcProfile.name),
    choices: message.choices?.map((choice) => ({
      ...choice,
      text: choice.text
        .replace("{interesse}", firstSharedInterest)
        .replace("{playerName}", playerProfile.name)
        .replace("{npcName}", npcProfile.name),
    })),
  };
};

/**
 * Sostituisce i placeholder in un array di messaggi
 */
export const replaceMessagesPlaceholders = (
  messages: Message[],
  playerProfile: PlayerProfile,
  npcProfile: NPCProfile,
): Message[] => {
  return messages.map((msg) =>
    replaceMessagePlaceholders(msg, playerProfile, npcProfile),
  );
};
