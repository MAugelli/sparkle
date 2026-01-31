import { useState, useEffect } from "react";
import {
  WELCOME_TITLES,
  WELCOME_SUBTITLES,
  getRandomMessage,
  BUTTON_TEXT,
} from "../data/welcomeMessages";
import styles from "./WelcomeScreen.module.css";

interface WelcomeScreenProps {
  onStartProfile: () => void;
  onContinueGame?: () => void;
  hasSavedData?: boolean;
  onClearData?: () => void;
}

export default function WelcomeScreen({
  onStartProfile,
  onContinueGame,
  hasSavedData,
  onClearData,
}: WelcomeScreenProps) {
  const [title, setTitle] = useState("Benvenuto su Sparkle");
  const [subtitle, setSubtitle] = useState(
    "Trova la tua anima gemella (o almeno qualcuno che non usi filtri imbarazzanti).",
  );
  const [buttonText, setButtonText] = useState("CREA IL TUO PROFILO");

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("sparkle_first_visit_completed");

    if (isFirstVisit) {
      // Marca la prima visita come completata
      localStorage.setItem("sparkle_first_visit_completed", "true");
    } else {
      // Dopo la prima visita, usa messaggi randomici
      setTitle(getRandomMessage(WELCOME_TITLES));
      setSubtitle(getRandomMessage(WELCOME_SUBTITLES));
      setButtonText(getRandomMessage(BUTTON_TEXT));
    }
  }, []);

  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeBox}>
        <div className={styles.sparkleEmoji}>✨</div>
        <h1>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>

        {hasSavedData ? (
          <div className={styles.buttonGroup}>
            <button onClick={onContinueGame} className={styles.primaryBtn}>
              CONTINUA
            </button>
            <button onClick={onStartProfile} className={styles.secondaryBtn}>
              {buttonText.toUpperCase()}
            </button>
            {onClearData && (
              <button
                onClick={onClearData}
                className={styles.tertiaryBtn}
                title="Cancella tutti i dati salvati"
              >
                🗑️ CANCELLA DATI
              </button>
            )}
          </div>
        ) : (
          <button onClick={onStartProfile} className={styles.primaryBtn}>
            AGGIUNGI IL TUO PROFILO
          </button>
        )}
      </div>
    </div>
  );
}
