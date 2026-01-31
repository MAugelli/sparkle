/**
 * Messaggi per la WelcomeScreen che variano dopo la prima visita
 */

export const WELCOME_TITLES = [
  "Benvenuto su Sparkle",
  "Bentornato su Sparkle",
  "Ancora qui? 💕",
  "Eccoti di nuovo!",
  "Mi sei mancato 😊",
  "Welcome back, casanova!",
  "Spero ti vada meglio oggi",
  "Round 2? 🔄",
];

export const WELCOME_SUBTITLES = [
  "Trova la tua anima gemella (o almeno qualcuno che non usi filtri imbarazzanti).",
  "Che nuovi interessi hai scoperto?",
  "Speriamo vada meglio questa volta... 😄",
  "La fortuna è dalla tua parte oggi?",
  "Non vedi l'ora di ricominciare?",
  "Forse oggi trovate quella scintilla... ✨",
  "Torniamo in pista!",
  "Spero le tue ultime conversazioni siano andate bene!",
  "Pronti per altre emozioni?",
  "Chi sai cosa succederà questa volta... 🎲",
];

export const BUTTON_TEXT = [
  "Modifica Profilo",
  "Cambia i tuoi interessi",
  "Nuova maschera?",
  "Cambia la tua pelle",
  "Modifica il tuo essere",
  "Ti conviene un aggiornamento",
  "Rinnova il tuo profilo",
  "Cambia la maschera",
];

/**
 * Ottiene un messaggio random da un array
 */
export const getRandomMessage = (messages: string[]): string => {
  return messages[Math.floor(Math.random() * messages.length)];
};
