export interface GameState {
  tries: number;
  hasWon: boolean;
  guesses: Guess[];
}

export interface Guess {
  name: string;
  nickname?: string;
  season: GuessDetails;
  gender: GuessDetails;
  apearances: GuessDetailsNumber;
  age: GuessDetailsNumber;
  housematesLivedWith: GuessDetailsNumber;
}

export interface GuessDetails {
  value: string | number;
  isCorrect: boolean;
}

export interface GuessDetailsNumber extends GuessDetails {
  isClose: boolean;
  isHigher: boolean;
}
