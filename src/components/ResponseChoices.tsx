import { Message, MessageChoice } from "../types";
import styles from "./ResponseChoices.module.css";

interface ResponseChoicesProps {
  choices: MessageChoice[];
  lastMessge: Message | undefined;
  onChoiceSelect: (choice: MessageChoice) => void;
}

export default function ResponseChoices({
  choices,
  lastMessge,
  onChoiceSelect,
}: ResponseChoicesProps) {
  return (
    <div className={styles.choicesContainer}>
      <p className={styles.choicesLabel}>Scegli una risposta:</p>
      <div className={styles.choicesGrid}>
        {choices.map((choice, i) => (
          <button
            key={choice.id}
            className={styles.choiceBtn}
            onClick={() => onChoiceSelect(choice)}
          >
            {lastMessge?.choices?.[i]?.text ?? "non so che dire..."}
          </button>
        ))}
      </div>
    </div>
  );
}
