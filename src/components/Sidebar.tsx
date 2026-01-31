import { NPCProfile, PlayerProfile, Chat as ChatType } from "../types";
import { hasSharedInterests, getSharedInterests } from "../utils/interests";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  chats: ChatType[];
  selectedNpcId: string | null;
  onSelectNpc: (id: string) => void;
  npcProfiles: NPCProfile[];
  playerProfile: PlayerProfile;
  onEditProfile: () => void;
}

export default function Sidebar({
  chats,
  selectedNpcId,
  onSelectNpc,
  npcProfiles,
  playerProfile,
  onEditProfile,
}: SidebarProps) {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>✨ Sparkle</h2>
        <button
          className={styles.editProfileBtn}
          onClick={onEditProfile}
          title="Modifica profilo"
        >
          ⚙️
        </button>
      </div>

      <div className={styles.playerSection}>
        <div className={styles.playerInfo}>
          <p className={styles.playerName}>{playerProfile.name}</p>
          <p className={styles.playerAge}>{playerProfile.age} anni</p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.chatList}>
        {chats
          .filter((chat) => {
            const npc = npcProfiles.find((p) => p.id === chat.npcId);
            return npc && hasSharedInterests(playerProfile, npc);
          })
          .map((chat) => {
            const npc = npcProfiles.find((p) => p.id === chat.npcId);
            const sharedInterests = npc
              ? getSharedInterests(playerProfile, npc)
              : [];

            return (
              <div
                key={chat.id}
                className={`${styles.sidebarItem} ${
                  selectedNpcId === chat.npcId ? styles.active : ""
                }`}
                onClick={() => onSelectNpc(chat.npcId)}
                title={npc?.bio}
              >
                <div className={styles.itemContent}>
                  <span className={styles.avatar}>{npc?.avatar}</span>
                  <div className={styles.info}>
                    <span className={styles.characterName}>{chat.npcName}</span>
                    <span className={styles.interests}>
                      {sharedInterests.join(", ")}
                    </span>
                    <span className={styles.sharedBadge}>
                      interessi in comune
                    </span>
                  </div>
                </div>
                {chat.unread && (
                  <span className={styles.dot} title="Puoi rispondere" />
                )}
              </div>
            );
          })}
      </div>
    </nav>
  );
}
