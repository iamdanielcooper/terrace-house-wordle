export interface GameState {
  tries: number;
  hasWon: boolean;
  guesses: Guess[];
  answer: Answer;
}

export interface Guess {
  name: string;
  nickname?: string;
  season: GuessDetails;
  gender: GuessDetails;
  apearances: GuessDetailsNumber;
  age: GuessDetailsNumber;
  housemates: GuessDetailsNumber;
  img: string;
  taglines: string[];
}

export interface GuessDetails {
  value: string | number;
  isCorrect: boolean;
}

export interface GuessDetailsNumber extends GuessDetails {
  isClose: boolean;
  isHigher: boolean;
}

export interface Answer {
  name: string;
  nickname?: string;
  season: string;
  gender: string;
  apearances: number;
  age: number;
  housemates: number;
  img: string;
  taglines: string[];
}