import React from "react";
import { GuessResult, AnswerDisplay } from "../";
import { useAppSelector } from "../../hooks";
import { GameState } from "../../Data/interfaces";

function GameSection() {
  const gameState: GameState = useAppSelector((state) => state.gameState);

  const getFirstName = (fullName: string): string => {
    return fullName.split(" ")[0];
  };

  const getGameResultElement = () => {
    if (gameState.hasWon) {
      return (
        <AnswerDisplay
          name={getFirstName(gameState.guesses[0].name)}
          img={gameState.guesses[0].img}
          taglines={gameState.guesses[0].taglines}
          season={gameState.guesses[0].season.value}
        />
      );
    } else if (gameState.tries >= 5) {
      return (
        <AnswerDisplay
          name={getFirstName(gameState.answer.name)}
          img={gameState.answer.img}
          taglines={gameState.answer.taglines}
          season={gameState.answer.season}
        />
      );
    }
  };

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
