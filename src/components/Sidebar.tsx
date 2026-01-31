import { NPCProfile, Chat as ChatType } from '../types'
import styles from './Sidebar.module.css'

interface SidebarProps {
  chats: ChatType[]
  selectedNpcId: string | null
  onSelectNpc: (id: string) => void
  npcProfiles: NPCProfile[]
}

export default function Sidebar({ chats, selectedNpcId, onSelectNpc, npcProfiles }: SidebarProps) {
  return (
    <nav className={styles.sidebar}>
      <h2 className={styles.title}>✨ Sparkle</h2>
      <hr className={styles.divider} />
      <div className={styles.chatList}>
        {chats.map(chat => {
          const npc = npcProfiles.find(p => p.id === chat.npcId)
          return (
            <div
              key={chat.id}
              className={`${styles.sidebarItem} ${selectedNpcId === chat.npcId ? styles.active : ''}`}
              onClick={() => onSelectNpc(chat.npcId)}
              title={npc?.bio}
            >
              <div className={styles.itemContent}>
                <span className={styles.avatar}>{npc?.avatar}</span>
                <div className={styles.info}>
                  <span className={styles.characterName}>{chat.npcName}</span>
                  <span className={styles.interests}>{npc?.interests.join(', ')}</span>
                </div>
              </div>
              {chat.unread && chat.unread > 0 && (
                <span className={styles.badge}>{chat.unread}</span>
              )}
            </div>
          )
        })}
      </div>
    </nav>
  )
}
