import styles from './WelcomeScreen.module.css'

interface WelcomeScreenProps {
  onStartProfile: () => void
  onContinueGame?: () => void
  hasSavedData?: boolean
}

export default function WelcomeScreen({ onStartProfile, onContinueGame, hasSavedData }: WelcomeScreenProps) {
  return (
    <div className={styles.welcomeContainer}>
      <div className={styles.welcomeBox}>
        <div className={styles.sparkleEmoji}>✨</div>
        <h1>Benvenuto su Sparkle</h1>
        <p className={styles.subtitle}>
          Trova la tua anima gemella (o almeno qualcuno che non usi filtri imbarazzanti).
        </p>
        
        {hasSavedData ? (
          <div className={styles.buttonGroup}>
            <button onClick={onContinueGame} className={styles.primaryBtn}>
              CONTINUA
            </button>
            <button onClick={onStartProfile} className={styles.secondaryBtn}>
              NUOVO PROFILO
            </button>
          </div>
        ) : (
          <button onClick={onStartProfile} className={styles.primaryBtn}>
            AGGIUNGI IL TUO PROFILO
          </button>
        )}
      </div>
    </div>
  )
}
