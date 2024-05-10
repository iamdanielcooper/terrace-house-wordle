import React, { useState } from "react";
import { GameState, Guess }  from "./interfaces";

function useGameState() {
  const [gameState, setGameState] = useState<GameState>({
    tries: 0,
    hasWon: false,
    guesses: [],
  });

  const calculateWin = () => {
    // TODO: Calculate if the new guess is a winning guess
    return false
  }

  const addGuess = (newGuess: Guess) => {
    setGameState((previousState) => {
      return {
        tries: previousState.tries++,
        hasWon: calculateWin() ? true : false,
        guesses: [newGuess, ...previousState.guesses],
      };
    });
  };

  return {gameState, addGuess};
}

export default useGameState;
