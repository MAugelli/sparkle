import { PlayerProfile, NPCProfile } from '../types'

/**
 * Controlla se player e NPC hanno almeno un interesse in comune
 */
export const hasSharedInterests = (
  playerProfile: PlayerProfile,
  npcProfile: NPCProfile
): boolean => {
  return playerProfile.interests.some(interest =>
    npcProfile.interests.includes(interest)
  )
}

/**
 * Ritorna gli interessi comuni tra player e NPC
 */
export const getSharedInterests = (
  playerProfile: PlayerProfile,
  npcProfile: NPCProfile
): string[] => {
  return playerProfile.interests.filter(interest =>
    npcProfile.interests.includes(interest)
  )
}

/**
 * Filtra gli NPC per mostrare solo quelli con interessi comuni
 */
export const filterNpcsBySharedInterests = (
  npcProfiles: NPCProfile[],
  playerProfile: PlayerProfile
): NPCProfile[] => {
  return npcProfiles.filter(npc =>
    hasSharedInterests(playerProfile, npc)
  )
}
