import { NPCProfile, PlayerProfile, Chat as ChatType } from "../types";
import { hasSharedInterests, getSharedInterests } from "../utils/interests";
import styles from "./Sidebar.module.css";
import { useState } from "react";

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
}: Readonly<SidebarProps>) {
  const [selectedNpcForModal, setSelectedNpcForModal] =
    useState<NPCProfile | null>(null);
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
                  <div
                    className={styles.avatar}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNpcForModal(npc || null);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedNpcForModal(npc || null);
                      }
                    }}
                  >
                    {npc?.avatar?.startsWith("http") ||
                    npc?.avatar?.startsWith("/") ? (
                      <img
                        src={npc.avatar}
                        alt={chat.npcName}
                        className={styles.avatarImage}
                      />
                    ) : (
                      <span className={styles.avatarEmoji}>{npc?.avatar}</span>
                    )}
                  </div>
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

      {selectedNpcForModal && (
        <>
          <button
            className={styles.modalOverlay}
            onClick={() => setSelectedNpcForModal(null)}
            aria-label="Close modal"
            type="button"
          />
          <dialog className={styles.modal} open>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedNpcForModal(null)}
            >
              ✕
            </button>
            <div className={styles.modalContent}>
              <div className={styles.modalAvatar}>
                {selectedNpcForModal.avatar?.startsWith("http") ||
                selectedNpcForModal.avatar?.startsWith("/") ? (
                  <img
                    src={selectedNpcForModal.avatar}
                    alt={selectedNpcForModal.name}
                    className={styles.modalAvatarImage}
                  />
                ) : (
                  <span className={styles.modalAvatarEmoji}>
                    {selectedNpcForModal.avatar}
                  </span>
                )}
              </div>
              <h2 className={styles.modalTitle}>{selectedNpcForModal.name}</h2>
              <p className={styles.modalPersonality}>
                {selectedNpcForModal.personality}
              </p>
              <p className={styles.modalBio}>{selectedNpcForModal.bio}</p>
              <div className={styles.modalInfo}>
                <p>
                  <strong>Età:</strong> {selectedNpcForModal.age}
                </p>
                <p>
                  <strong>Interessi:</strong>{" "}
                  {selectedNpcForModal.interests.join(", ")}
                </p>
              </div>
            </div>
          </dialog>
        </>
      )}
    </nav>
  );
}
