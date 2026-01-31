import { useRef, useEffect, useState } from "react";
import { NPCProfile, Message, MessageChoice, PlayerProfile } from "../types";
import ResponseChoices from "./ResponseChoices";
import styles from "./ChatView.module.css";
import { replaceMessagesPlaceholders } from "../utils/messageParser";

interface ChatViewProps {
  npcProfile?: NPCProfile;
  userProfile?: PlayerProfile;
  messages: Message[];
  onAddMessage?: (message: Message) => void;
}

export default function ChatView({
  npcProfile,
  userProfile,
  messages,
  onAddMessage,
}: ChatViewProps) {
  const chatMessages = replaceMessagesPlaceholders(
    messages,
    userProfile!,
    npcProfile!,
  );

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [inputText, setInputText] = useState("");
  const [waitingForResponse, setWaitingForResponse] = useState(false);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      const playerMessage: Message = {
        id: `msg_${Date.now()}`,
        sender: "player",
        text: inputText,
        timestamp: new Date(),
      };
      onAddMessage?.(playerMessage);
      setInputText("");
      setWaitingForResponse(true);
    }
  };

  const handleChoiceSelect = (choice: MessageChoice) => {
    // Aggiungi il messaggio della scelta
    const playerMessage: Message = {
      id: `msg_${Date.now()}`,
      sender: "player",
      text: choice.text,
      timestamp: new Date(),
    };
    onAddMessage?.(playerMessage);
    setWaitingForResponse(true);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!npcProfile) {
    return (
      <div className={styles.chatContainer}>
        <div className={styles.emptyState}>Seleziona una chat</div>
      </div>
    );
  }

  // Controlla se l'ultimo messaggio ha scelte
  const lastMessage = messages[messages.length - 1];
  const hasChoices =
    lastMessage?.sender === "npc" &&
    lastMessage?.choices &&
    lastMessage.choices.length > 0;

  return (
    <div className={styles.chatContainer}>
      <div className={styles.bgWrap}>
        <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient
              id="Gradient1"
              cx="50%"
              cy="50%"
              fx="0.441602%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="34s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              ></animate>
              <stop offset="0%" stopColor="rgba(255, 0, 204, 0.8)"></stop>
              <stop offset="100%" stopColor="rgba(255, 0, 204, 0)"></stop>
            </radialGradient>
            <radialGradient
              id="Gradient2"
              cx="50%"
              cy="50%"
              fx="2.68147%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="23.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              ></animate>
              <stop offset="0%" stopColor="rgba(153, 51, 255, 0.8)"></stop>
              <stop offset="100%" stopColor="rgba(153, 51, 255, 0)"></stop>
            </radialGradient>
            <radialGradient
              id="Gradient3"
              cx="50%"
              cy="50%"
              fx="0.836536%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="21.5s"
                values="0%;3%;0%"
                repeatCount="indefinite"
              ></animate>
              <stop offset="0%" stopColor="rgba(51, 51, 255, 0.8)"></stop>
              <stop offset="100%" stopColor="rgba(51, 51, 255, 0)"></stop>
            </radialGradient>
            <radialGradient
              id="Gradient4"
              cx="50%"
              cy="50%"
              fx="4.56417%"
              fy="50%"
              r=".5"
            >
              <animate
                attributeName="fx"
                dur="23s"
                values="0%;5%;0%"
                repeatCount="indefinite"
              ></animate>
              <stop offset="0%" stopColor="rgba(200, 50, 255, 0.8)"></stop>
              <stop offset="100%" stopColor="rgba(200, 50, 255, 0)"></stop>
            </radialGradient>
          </defs>
          <rect
            x="13.744%"
            y="1.18473%"
            width="100%"
            height="100%"
            fill="url(#Gradient1)"
            transform="rotate(334.41 50 50)"
          >
            <animate
              attributeName="x"
              dur="20s"
              values="25%;0%;25%"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              dur="21s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="7s"
              repeatCount="indefinite"
            ></animateTransform>
          </rect>
          <rect
            x="-2.17916%"
            y="35.4267%"
            width="100%"
            height="100%"
            fill="url(#Gradient2)"
            transform="rotate(255.072 50 50)"
          >
            <animate
              attributeName="x"
              dur="23s"
              values="-25%;0%;-25%"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              dur="24s"
              values="0%;50%;0%"
              repeatCount="indefinite"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 50 50"
              to="360 50 50"
              dur="12s"
              repeatCount="indefinite"
            ></animateTransform>
          </rect>
          <rect
            x="9.00483%"
            y="14.5733%"
            width="100%"
            height="100%"
            fill="url(#Gradient3)"
            transform="rotate(139.903 50 50)"
          >
            <animate
              attributeName="x"
              dur="25s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              dur="12s"
              values="0%;25%;0%"
              repeatCount="indefinite"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="360 50 50"
              to="0 50 50"
              dur="9s"
              repeatCount="indefinite"
            ></animateTransform>
          </rect>
          <rect
            x="5.5%"
            y="25%"
            width="100%"
            height="100%"
            fill="url(#Gradient4)"
            transform="rotate(180 50 50)"
          >
            <animate
              attributeName="x"
              dur="26s"
              values="0%;-25%;0%"
              repeatCount="indefinite"
            ></animate>
            <animate
              attributeName="y"
              dur="27s"
              values="-25%;0%;-25%"
              repeatCount="indefinite"
            ></animate>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="180 50 50"
              to="540 50 50"
              dur="15s"
              repeatCount="indefinite"
            ></animateTransform>
          </rect>
        </svg>
      </div>

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
              {npcProfile.interests.map((interest) => (
                <span key={interest} className={styles.tag}>
                  {interest}
                </span>
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
        {chatMessages.map((msg) => (
          <div key={msg.id} className={`${styles.msg} ${styles[msg.sender]}`}>
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {hasChoices && lastMessage?.choices ? (
        <ResponseChoices
          choices={lastMessage.choices}
          onChoiceSelect={handleChoiceSelect}
        />
      ) : (
        <div className={styles.chatInputArea}>
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
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
            {waitingForResponse ? "⏳" : "Invia"}
          </button>
        </div>
      )}
    </div>
  );
}
