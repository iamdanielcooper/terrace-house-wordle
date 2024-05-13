import React from "react";
import { useAppSelector } from "../../hooks";
import { GameSection, GuessPicker } from "../../Components";
import { GameMessages } from "../../Enums";

function GamePage() {
  const gameState = useAppSelector((state) => state.gameState);

  const getGame = () => {
    return gameState.tries < 5 && !gameState.hasWon ? <GuessPicker /> : null;
  }

  return (
    <div>
      <header>
        <h1>Konbanwa</h1>
      </header>
      { getGame() }
      <GameSection />
    </div>
  );
}

export default GamePage;
