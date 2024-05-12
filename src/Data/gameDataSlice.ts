import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Answer, GameState, Guess } from "./interfaces/";
import allHousemates from "./data.json";

const getRandomHousemate = (allHousemates: Answer[]): Answer => {
  return allHousemates[Math.floor(Math.random() * allHousemates.length)];
};

const initialState: GameState = {
  tries: 0,
  hasWon: false,
  guesses: [],
  answer: getRandomHousemate(allHousemates),
};

const hasWon = (guess: Guess) => {
  return (
    guess.age.isCorrect &&
    guess.apearances.isCorrect &&
    guess.gender.isCorrect &&
    guess.housemates.isCorrect &&
    guess.season.isCorrect
  );
};

export const gameDataSlice = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    addGuess: (state, action: PayloadAction<Guess>) => {
      state.tries++;
      state.guesses.unshift(action.payload);
      state.hasWon = hasWon(action.payload);
    },
  },
});

export const { addGuess } = gameDataSlice.actions;

export default gameDataSlice.reducer;
