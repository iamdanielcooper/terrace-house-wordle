import React from "react";
import { GuessResult, AnswerDisplay } from "../";
import { useAppSelector } from "../../hooks";
import { GameState } from "../../Data/interfaces";

function GameSection() {
  const gameState: GameState = useAppSelector((state) => state.gameState);

  const getGameResultElement = () => {
    if (gameState.hasWon) {
      return <AnswerDisplay name={gameState.guesses[0].name} />
    } else if (gameState.tries >= 5) {
      return <AnswerDisplay name={gameState.answer.name} />
    }
  }

  return (
    <>
      {getGameResultElement()}
      {gameState.guesses.map((guess, index) => (
        <GuessResult guess={guess} index={index} hasWon={gameState.hasWon} />
      ))}
    </>
  );
}

export default GameSection;
