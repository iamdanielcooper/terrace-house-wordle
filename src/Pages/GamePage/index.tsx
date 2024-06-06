import React, { CSSProperties } from "react";
import { useAppSelector } from "../../hooks";
import { GameSection, GuessPicker, Modal } from "../../Components";
import { GameMessages } from "../../Enums";

function GamePage() {
  const gameState = useAppSelector((state) => state.gameState);

  const getGame = () => {
    return gameState.tries < 5 && !gameState.hasWon ? <GuessPicker /> : null;
  };

  const headerStyle: CSSProperties = {
    color: "white",
    margin: "20px"
  };

  const footerTextStyle: CSSProperties = {
    fontSize: "12px"
  }

  return (
    <div>
      <header>
        <h1 style={headerStyle}>Konbanwa</h1>
        <Modal children={<h1 style={headerStyle}>Konbanwa</h1>} />
      </header>
      {getGame()}
      <GameSection />
      <footer style={headerStyle}>
        <p style={footerTextStyle}>
          Images taken from{" "}
          <a href="https://terracehousesocial.com/">terracehousesocial</a>{" "}
          Thanks for your great work
        </p>
        <p style={footerTextStyle}>All images and information copyright to their respective owners.</p>{" "}
      </footer>
    </div>
  );
}

export default GamePage;
