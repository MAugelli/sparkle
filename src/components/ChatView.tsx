import { useRef, useEffect, useState } from 'react'
import { NPCProfile, PlayerProfile, Message } from '../types'
import styles from './ChatView.module.css'

interface ChatViewProps {
  npcProfile?: NPCProfile
  playerProfile: PlayerProfile
  messages: Message[]
}

export default function ChatView({ npcProfile, playerProfile, messages }: ChatViewProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (inputText.trim()) {
      console.log('Messaggio inviato:', inputText)
      setInputText('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!npcProfile) {
    return (
      <div className={styles.chatContainer}>
        <div className={styles.emptyState}>Seleziona una chat</div>
      </div>
    )
  }

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatHeader}>
        <div className={styles.headerContent}>
          <span className={styles.avatar}>{npcProfile.avatar}</span>
          <div>
            <h3>{npcProfile.name}</h3>
            <p className={styles.headerSubtitle}>{npcProfile.personality}</p>
          </div>
        </div>
      </div>

      <div className={styles.profileInfo}>
        <div className={styles.profileCard}>
          <div className={styles.profileRow}>
            <span className={styles.label}>Età:</span>
            <span>{npcProfile.age}</span>
          </div>
          <div className={styles.profileRow}>
            <span className={styles.label}>Bio:</span>
            <span>{npcProfile.bio}</span>
          </div>
          <div className={styles.profileRow}>
            <span className={styles.label}>Interessi:</span>
            <div className={styles.interestsTags}>
              {npcProfile.interests.map(interest => (
                <span key={interest} className={styles.tag}>{interest}</span>
              ))}
            </div>
          </div>
          <div className={styles.profileRow}>
            <span className={styles.label}>Relationship:</span>
            <div className={styles.relationshipBar}>
              <div 
                className={styles.relationshipFill} 
                style={{ width: `${npcProfile.relationshipLevel}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.chatMessages}>
        {messages.map(msg => (
          <div key={msg.id} className={`${styles.msg} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className={styles.chatInputArea}>
        <textarea
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Scrivi un messaggio..."
          className={styles.inputField}
          rows={3}
        />
        <button onClick={handleSendMessage} className={styles.sendBtn}>
          Invia
        </button>
      </div>
    </div>
  )
}
