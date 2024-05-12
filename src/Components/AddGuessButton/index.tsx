import React from "react";
import testData from "../../Pages/GamePage/testData.json";
import allHousemates from '../../Data/data.json';

import { calculateResult } from "./utilities";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addGuess } from "../../Data/gameDataSlice";
import { GameState } from "../../Data/interfaces";

interface Props {
  housemateGuessed: string;
}

function AddGuessButton(props: Props) {
  const dispatch = useAppDispatch();
  const gameState: GameState = useAppSelector((state) => state.gameState)


  const handleClick = () => {
    //TODO: Get data from Redux store

    const guessedHousemate = allHousemates.filter(housemate => housemate.name === props.housemateGuessed)

    //TODO: Calculate Formatted guess
    const result = calculateResult(guessedHousemate[0], gameState.answer)

    //TODO: Dispatch formattedc guess


    dispatch(addGuess(result))
  };



  return <button 
    disabled={props.housemateGuessed === ""} 
    onClick={handleClick}>
      {"Lock it in"}
    </button>;
}

export default AddGuessButton;
