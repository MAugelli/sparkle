import { PlayerProfile, Message, NPCProfile } from "../types";

const STORAGE_KEYS = {
  PLAYER_PROFILE: "sparkle_player_profile",
  CONVERSATIONS: "sparkle_conversations",
  NPC_RELATIONSHIPS: "sparkle_npc_relationships",
};

/**
 * Salva il profilo del giocatore in localStorage
 */
export const savePlayerProfile = (profile: PlayerProfile): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PLAYER_PROFILE, JSON.stringify(profile));
  } catch (error) {
    console.error("Errore nel salvataggio del profilo:", error);
  }
};

/**
 * Carica il profilo del giocatore da localStorage
 */
export const loadPlayerProfile = (): PlayerProfile | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PLAYER_PROFILE);
    if (stored) {
      const profile = JSON.parse(stored);
      // Converti la data string in Date object
      if (profile.createdAt) {
        profile.createdAt = new Date(profile.createdAt);
      }
      return profile;
    }
  } catch (error) {
    console.error("Errore nel caricamento del profilo:", error);
  }
  return null;
};

/**
 * Salva tutte le conversazioni in localStorage
 */
export const saveConversations = (
  conversations: Record<string, Message[]>,
): void => {
  try {
    localStorage.setItem(
      STORAGE_KEYS.CONVERSATIONS,
      JSON.stringify(conversations),
    );
  } catch (error) {
    console.error("Errore nel salvataggio delle conversazioni:", error);
  }
};

/**
 * Carica tutte le conversazioni da localStorage
 */
export const loadConversations = (): Record<string, Message[]> | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.CONVERSATIONS);
    if (stored) {
      const conversations = JSON.parse(stored);
      // Converti le date string in Date objects
      Object.keys(conversations).forEach((npcId) => {
        conversations[npcId] = conversations[npcId].map((msg: Message) => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        }));
      });
      return conversations;
    }
  } catch (error) {
    console.error("Errore nel caricamento delle conversazioni:", error);
  }
  return null;
};

/**
 * Salva i livelli di relazione degli NPC in localStorage
 */
export const saveNpcRelationships = (npcProfiles: NPCProfile[]): void => {
  try {
    const relationships: Record<string, number> = {};
    npcProfiles.forEach((npc) => {
      relationships[npc.id] = npc.relationshipLevel;
    });
    localStorage.setItem(
      STORAGE_KEYS.NPC_RELATIONSHIPS,
      JSON.stringify(relationships),
    );
  } catch (error) {
    console.error("Errore nel salvataggio delle relazioni NPC:", error);
  }
};

/**
 * Carica i livelli di relazione degli NPC da localStorage
 */
export const loadNpcRelationships = (): Record<string, number> | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.NPC_RELATIONSHIPS);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Errore nel caricamento delle relazioni NPC:", error);
  }
  return null;
};

/**
 * Applica i livelli di relazione salvati agli NPC
 */
export const applyRelationshipsToNpcs = (
  npcProfiles: NPCProfile[],
  relationships: Record<string, number>,
): NPCProfile[] => {
  return npcProfiles.map((npc) => ({
    ...npc,
    relationshipLevel: relationships[npc.id] ?? npc.relationshipLevel,
  }));
};

/**
 * Cancella tutti i dati salvati
 */
export const clearAllSavedData = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEYS.NPC_RELATIONSHIPS);
    localStorage.removeItem(STORAGE_KEYS.PLAYER_PROFILE);
    localStorage.removeItem(STORAGE_KEYS.CONVERSATIONS);
  } catch (error) {
    console.error("Errore nella cancellazione dei dati:", error);
  }
};
