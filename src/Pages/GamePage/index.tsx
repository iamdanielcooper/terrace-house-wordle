import React from "react";
import { useAppSelector } from "../../hooks";
import { GameSection, GuessPicker } from "../../Components";
import { GameMessages } from "../../Enums";

function GamePage() {
  const gameState = useAppSelector((state) => state.gameState);

  const getGame = () => {
    if (gameState.tries < 5 && !gameState.hasWon) {
      return <GuessPicker />
    } else if (gameState.hasWon) {
      return <p>{GameMessages.PASSED}</p>
    } else {
      return <p>{GameMessages.FAILED}</p>
    }
  }

  return (
    <div>
      <h1>Konbanwa</h1>
      { getGame() }
      <GameSection />
    </div>
  );
}

export default GamePage;
