import { Message, NPCDialogueSet } from '../types'

/**
 * Seleziona i dialoghi corretti in base al livello di relazione
 * Ritorna i dialoghi del livello di relazione più alto disponibile
 */
export const getDialoguesForRelationship = (
  dialogueSet: NPCDialogueSet,
  relationshipLevel: number
): Message[] => {
  // Ordina le variazioni per livello di relazione (crescente)
  const sortedVariations = [...dialogueSet.variations].sort(
    (a, b) => a.minRelationshipLevel - b.minRelationshipLevel
  )

  // Trova la variazione più alta che il giocatore ha raggiunto
  let selectedVariation = sortedVariations[0] // Default: prima variazione

  for (const variation of sortedVariations) {
    if (relationshipLevel >= variation.minRelationshipLevel) {
      selectedVariation = variation
    } else {
      break // Non ci sono più variazioni disponibili
    }
  }

  return selectedVariation.messages
}

/**
 * Ottiene il messaggio iniziale di una conversazione
 * In base al livello di relazione, il primo messaggio può variare
 */
export const getInitialMessage = (
  dialogueSet: NPCDialogueSet,
  relationshipLevel: number
): Message | undefined => {
  const dialogues = getDialoguesForRelationship(dialogueSet, relationshipLevel)
  return dialogues.length > 0 ? dialogues[0] : undefined
}

/**
 * Verifica se un dialogo è bloccato per il livello di relazione attuale
 */
export const isDialogueLocked = (
  minRelationshipRequired: number,
  currentRelationshipLevel: number
): boolean => {
  return currentRelationshipLevel < minRelationshipRequired
}
