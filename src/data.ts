import { PlayerProfile } from "./types";
import { NPC_PROFILES } from "./data/npc";

// Lista di interessi disponibili che i giocatori e NPC possono scegliere
export const AVAILABLE_INTERESTS = [
  "Lettura",
  "Musica",
  "Gaming",
  "Arte",
  "Sport",
  "Cucina",
  "Viaggio",
  "Tecnologia",
  "Cinema",
  "Fotografia",
  "Filosofia",
  "Danza",
  "Natura",
  "Scrittura",
  "Animali",
  "Moda",
  "Caffè",
  "Astronomia",
  "Yoga",
  "Podcast",
  "Psicologia",
  "Volontariato",
  "Crescita personale",
  "Lingue",
  "Connessioni",
  "Successo",
  "Networking",
  "Performance",
  "Ottimizzazione",
];

// Profilo del giocatore (di default, può essere customizzato)
export const DEFAULT_PLAYER_PROFILE: PlayerProfile = {
  id: "player_1",
  name: "Tu",
  age: 25,
  bio: "Un viaggiatore misterioso con storie interessanti da raccontare.",
  interests: ["Viaggio", "Tecnologia", "Lettura"],
  createdAt: new Date(),
};

// Export NPC profiles da cartella dedicata
export { NPC_PROFILES };
export { Aurora, Nyx, Sora, Luna } from "./data/npc";
