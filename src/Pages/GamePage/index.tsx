import React, { useState } from "react";
import { GameSection } from "../../Components";
import { GameCategories } from "../../Enums/GameCategories";
import useGameData from "../../Hooks/GameData";
import useGameState from "../../Hooks/GameState";
import testData from "./testData.json";

function GamePage() {
  const allData = useGameData();
  const { gameState, addGuess } = useGameState();

  const handleClick = () => addGuess(testData);

  return (
    <div>
      <h1>Konbanwa</h1>

      {gameState.guesses.length <= 5 ? (
        <>
          <select>
            {allData.map((i) => (
              <option>{i.name}</option>
            ))}
          </select>
          <button onClick={handleClick}>Guess</button>
        </>
      ) : (
        <p>Too Bad, try again next time</p>
      )}

      {gameState.hasWon ? (
        <p>Thanks for playing, play again tomorrow</p>
      ) : (
        gameState.guesses.map((guess) => (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "stretch",
            }}
          >
            <h1>
              {guess.name} {guess.nickname && <span>({guess.nickname})</span>}
            </h1>
            <GameSection
              title={GameCategories.GENDER}
              isCorrect={guess.gender.isCorrect}
              isClose={false}
              result={guess.gender.value}
            />
            <GameSection
              title={GameCategories.AGE}
              isCorrect={guess.age.isCorrect}
              isClose={guess.age.isClose}
              result={guess.age.value}
            />
            <GameSection
              title={GameCategories.APERANCES}
              isCorrect={guess.apearances.isCorrect}
              isClose={guess.apearances.isClose}
              result={guess.apearances.value}
            />
            <GameSection
              title={GameCategories.HOUSEMATES}
              isCorrect={guess.housematesLivedWith.isClose}
              isClose={guess.housematesLivedWith.isClose}
              result={guess.housematesLivedWith.value}
            />
            <GameSection
              title={GameCategories.SEASON}
              isCorrect={guess.season.isCorrect}
              isClose={false}
              result={guess.season.value}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default GamePage;
