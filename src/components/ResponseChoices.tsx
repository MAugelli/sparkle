import { MessageChoice } from '../types'
import styles from './ResponseChoices.module.css'

interface ResponseChoicesProps {
  choices: MessageChoice[]
  onChoiceSelect: (choice: MessageChoice) => void
}

export default function ResponseChoices({ choices, onChoiceSelect }: ResponseChoicesProps) {
  return (
    <div className={styles.choicesContainer}>
      <p className={styles.choicesLabel}>Scegli una risposta:</p>
      <div className={styles.choicesGrid}>
        {choices.map(choice => (
          <button
            key={choice.id}
            className={styles.choiceBtn}
            onClick={() => onChoiceSelect(choice)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  )
}
