import React from "react";
import { GuessResult } from '../'
import { useAppSelector } from '../../hooks'
import { GameState } from "../../Data/interfaces";

function GameSection() {

  const gameState: GameState = useAppSelector((state) => state.gameState)

  return (
    <>
      {gameState.guesses.map(guess => <GuessResult guess={guess} />)}
    </>
  );
}

export default GameSection;
