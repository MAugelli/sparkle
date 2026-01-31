import { useState } from 'react'
import { usePlayerProfile } from '../hooks/usePlayerProfile'
import { PlayerProfile } from '../types'
import styles from './ProfileEditor.module.css'

interface ProfileEditorProps {
  initialProfile: PlayerProfile
  onSave: (profile: PlayerProfile) => void
  onCancel?: () => void
}

export default function ProfileEditor({ initialProfile, onSave, onCancel }: ProfileEditorProps) {
  const { profile, updateName, updateAge, updateBio, toggleInterest, getAvailableInterests } =
    usePlayerProfile(initialProfile)

  const [error, setError] = useState<string>('')

  const handleSave = () => {
    // Validazione
    if (profile.name.trim() === '') {
      setError('Per favore, inserisci il tuo nome.')
      return
    }

    if (profile.bio.trim() === '') {
      setError('Per favore, scrivi una bio.')
      return
    }

    if (profile.interests.length < 2) {
      setError(`Hai selezionato ${profile.interests.length} interesse/i. Ne servono almeno 2!`)
      return
    }

    setError('')
    onSave(profile)
  }

  const availableInterests = getAvailableInterests()

  return (
    <div className={styles.editorContainer}>
      <div className={styles.profileCard}>
        <h2>✨ Configura il tuo Profilo</h2>

        {error && <div className={styles.errorMessage}>{error}</div>}

        <div className={styles.formGroup}>
          <label>Come ti chiami?</label>
          <input
            type="text"
            value={profile.name}
            onChange={e => updateName(e.target.value)}
            placeholder="Inserisci il tuo nome..."
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Quanti anni hai?</label>
          <input
            type="number"
            value={profile.age}
            onChange={e => updateAge(parseInt(e.target.value) || 0)}
            min="18"
            max="100"
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Parlaci di te (Bio):</label>
          <textarea
            value={profile.bio}
            onChange={e => updateBio(e.target.value)}
            placeholder="Scrivi qualcosa di interessante su di te..."
            className={styles.textarea}
            rows={4}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Cosa ti piace? (Seleziona almeno 2 interessi)</label>
          <div className={styles.interestsGrid}>
            {availableInterests.map(interest => (
              <label key={interest} className={styles.interestChip}>
                <input
                  type="checkbox"
                  checked={profile.interests.includes(interest)}
                  onChange={() => toggleInterest(interest)}
                  className={styles.checkbox}
                />
                <span className={styles.chipLabel}>{interest}</span>
              </label>
            ))}
          </div>
          <p className={styles.interestCount}>
            {profile.interests.length} interesse/i selezionato/i
          </p>
        </div>

        <div className={styles.formActions}>
          <button onClick={handleSave} className={styles.primaryBtn}>
            SALVA PROFILO
          </button>
          {onCancel && (
            <button onClick={onCancel} className={styles.secondaryBtn}>
              ANNULLA
            </button>
          )}
        </div>

        {profile.interests.length > 0 && (
          <div className={styles.previewSection}>
            <h3>Anteprima:</h3>
            <p>
              <strong>{profile.name}</strong>, {profile.age} anni
            </p>
            <p>{profile.bio}</p>
            <div className={styles.previewTags}>
              {profile.interests.map(interest => (
                <span key={interest} className={styles.tag}>
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
