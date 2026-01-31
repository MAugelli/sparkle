import { useRef, useEffect, useState } from 'react'
import { NPCProfile, Message, MessageChoice } from '../types'
import ResponseChoices from './ResponseChoices'
import styles from './ChatView.module.css'

interface ChatViewProps {
  npcProfile?: NPCProfile
  messages: Message[]
  onAddMessage?: (message: Message) => void
}

export default function ChatView({ npcProfile, messages, onAddMessage }: ChatViewProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [inputText, setInputText] = useState('')
  const [waitingForResponse, setWaitingForResponse] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const playerMessage: Message = {
        id: `msg_${Date.now()}`,
        sender: 'player',
        text: inputText,
        timestamp: new Date(),
      }
      onAddMessage?.(playerMessage)
      setInputText('')
      setWaitingForResponse(true)
    }
  }

  const handleChoiceSelect = (choice: MessageChoice) => {
    // Aggiungi il messaggio della scelta
    const playerMessage: Message = {
      id: `msg_${Date.now()}`,
      sender: 'player',
      text: choice.text,
      timestamp: new Date(),
    }
    onAddMessage?.(playerMessage)
    setWaitingForResponse(true)
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

  // Controlla se l'ultimo messaggio ha scelte
  const lastMessage = messages[messages.length - 1]
  const hasChoices = lastMessage?.sender === 'npc' && lastMessage?.choices && lastMessage.choices.length > 0

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

      {hasChoices && lastMessage?.choices ? (
        <ResponseChoices choices={lastMessage.choices} onChoiceSelect={handleChoiceSelect} />
      ) : (
        <div className={styles.chatInputArea}>
          <textarea
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Scrivi un messaggio..."
            className={styles.inputField}
            rows={3}
            disabled={waitingForResponse}
          />
          <button 
            onClick={handleSendMessage} 
            className={styles.sendBtn}
            disabled={waitingForResponse}
          >
            {waitingForResponse ? '⏳' : 'Invia'}
          </button>
        </div>
      )}
    </div>
  )
}
