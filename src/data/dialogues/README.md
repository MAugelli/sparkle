# Sistema di Dialoghi Condizionali - Sparkle

## 📋 Panoramica

Questo sistema permette di organizzare i dialoghi degli NPC in **variazioni basate sul livello di relazione**. Man mano che la relazione sale, sbloccherai dialoghi più intimi e profondi.

## 🔧 Come Funziona

### Struttura Base

Ogni NPC ha un `NPCDialogueSet` con più `DialogueVariation`:

```typescript
{
  npcId: 'aurora',
  variations: [
    { minRelationshipLevel: 0,  messages: [...] },   // Primo incontro
    { minRelationshipLevel: 20, messages: [...] },   // Connessione crescente
    { minRelationshipLevel: 50, messages: [...] },   // Profonda connessione
  ]
}
```

### Livelli di Relazione

| Livello | Significato | Tipico |
|---------|------------|--------|
| 0-20 | Primo incontro | Dialoghi leggeri e esplorativi |
| 20-50 | Connessione crescente | Condivisione più profonda |
| 50-70 | Legame significativo | Sentimenti emergenti |
| 70-100 | Legame profondo | Confessioni e decisioni cruciali |

## 📝 Come Creare Dialoghi per un NPC

### Step 1: Definisci le Variazioni

```typescript
// src/data/dialogues/nyx-branched.ts

const firstMeetingDialogues: Message[] = [
  {
    id: 'nyx_msg_1',
    sender: 'npc',
    text: 'Ciao... sei nuovo qui?',
    timestamp: new Date(),
    choices: [...]
  }
]

const intimateDialogues: Message[] = [
  {
    id: 'nyx_intimate_1',
    sender: 'npc',
    text: 'Con te mi sento... vista davvero.',
    timestamp: new Date(),
    choices: [...]
  }
]

export const nyxDialogueSet: NPCDialogueSet = {
  npcId: 'nyx',
  variations: [
    { minRelationshipLevel: 0,  messages: firstMeetingDialogues },
    { minRelationshipLevel: 40, messages: intimateDialogues },
  ]
}
```

### Step 2: Usa la Funzione Helper

```typescript
// In App.tsx o ChatView.tsx
import { getDialoguesForRelationship } from '../utils/dialogueManager'

const currentDialogues = getDialoguesForRelationship(
  auroraDialogueSet, 
  npc.relationshipLevel
)
```

### Step 3: Aggiorna App.tsx

```typescript
import { auroraDialogueSet } from './data/dialogues/aurora-branched'
import { getDialoguesForRelationship } from './utils/dialogueManager'

const dialoguesMap: Record<string, Message[]> = {
  aurora: getDialoguesForRelationship(auroraDialogueSet, selectedNpc.relationshipLevel),
  // ... altri NPC
}
```

## 🎯 Best Practices

### 1. Costruisci Progressivamente
Crea dialoghi che escalano naturalmente:
- **0-20**: "Mi piacerebbe conoscerti"
- **20-50**: "Sento che potremmo connettere"
- **50+**: "Non riesco a negare i miei sentimenti"

### 2. Usa `relationshipDelta` Strategicamente
```typescript
choices: [
  {
    text: 'Mi racconti di te?',
    relationshipDelta: 10,  // Scelta positiva
  },
  {
    text: 'Non mi interessa',
    relationshipDelta: -5,  // Scelta negativa
  }
]
```

### 3. Crea Ramificazioni Significative
- Alcune scelte dovrebbero portare a messaggi diversi
- `nextMessageId` determina la continuazione

### 4. Usa ID Descrittivi
```typescript
id: 'aurora_intimate_confession'  // Non: id: 'msg_42'
```

## 🔄 Retrocompatibilità

Se continui a usare il vecchio sistema con array semplice:

```typescript
// Vecchio sistema (ancora supportato)
export const auroraDialogues: Message[] = [...]

// Nuovo sistema (raccomandato)
export const auroraDialogueSet: NPCDialogueSet = {...}
```

## 💡 Esempio Completo: Aurora

Vedi [aurora-branched.ts](./aurora-branched.ts) per un esempio completo con 3 livelli di relazione.

## 📚 Funzioni Disponibili

### `getDialoguesForRelationship(dialogueSet, relationshipLevel)`
Ritorna i dialoghi appropriati per il livello di relazione attuale.

### `getInitialMessage(dialogueSet, relationshipLevel)`
Ritorna il primo messaggio della conversazione corrente.

### `isDialogueLocked(minRelationshipRequired, currentRelationship)`
Verifica se un dialogo è bloccato per il livello attuale.

## 🚀 Prossimi Passi

1. Crea file `-branched.ts` per Nyx, Sora, e Luna
2. Aggiungi variazioni di dialogo (minimo 2-3 livelli per NPC)
3. Aggiorna App.tsx per usare `getDialoguesForRelationship`
4. Testa le transizioni tra livelli
