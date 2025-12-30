export type CardCategory = 'drink' | 'truth' | 'dare' | 'challenge' | 'wild';

export interface Card {
  id: number;
  content: string;
  category: CardCategory;
  instruction?: string; // Additional short instruction like "Both players"
}

export type GameState = 'intro' | 'playing' | 'finished';