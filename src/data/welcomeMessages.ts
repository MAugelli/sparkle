/**
 * Messaggi per la WelcomeScreen che variano dopo la prima visita
 */

export const WELCOME_TITLES = [
  "Benvenuto su Sparkle",
  "Bentornato su Sparkle",
  "Welcome back, casanova!",
  "Spero ti vada meglio oggi",
  "Round 2? 🔄",
  "Ti senti solo? Io no.",
  "Ti stavo guardando dormire. Bentornato!",
  "Questa volta cerca di non deludermi.",
  "Ti sta bene... Non toglierla",
];

export const WELCOME_SUBTITLES = [
  "Trova la tua anima gemella (o almeno qualcuno che non usi filtri imbarazzanti).",
  "Trova la tua anima gemella (o almeno qualcuno che non usi maschere).",
  "Che nuovi interessi hai scoperto?",
  "Speriamo vada meglio questa volta... 😄",
  "La fortuna è dalla tua parte oggi?",
  "Non vedi l'ora di ricominciare?",
  "Quale maschera indossi oggi?",
  "Forse oggi trovate quella scintilla... ✨",
  "Non preoccuparti, la maschera nasconde bene le tue intenzioni",
  "Assicurati che i fori per gli occhi siano allineati correttamente",
  "Abbiamo tutti più facce. Quale userai con noi stavolta?",
  "Il lattice aderisce perfettamente alla tua pelle, vero?",
  "Non provare a toglierla. Potresti farti male",
  "Chi stai cercando di ingannare oggi?",
  "Ti abbiamo trovato il match perfetto. Sa già dove abiti.",
  "Abbiamo aggiornato i termini di servizio: ora possediamo anche i tuoi respiri",
  "Speriamo che stavolta tu riesca a finire la conversazione... 😉",
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
  "Incolla una nuova faccia",
  "Taglia e cuci la tua identità",
  "Indossa un nuovo volto",
  "Scegli un'altra bugia",
  "Affila il tuo sorriso",
  "La maschera precedente è rotta",
  "Trucca il tuo vuoto",
  "Dimentica chi eri",
];

/**
 * Ottiene un messaggio random da un array
 */
export const getRandomMessage = (messages: string[]): string => {
  return messages[Math.floor(Math.random() * messages.length)];
};
