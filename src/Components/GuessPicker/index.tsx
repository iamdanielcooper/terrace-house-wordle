import React, { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../hooks";
import data from "../../Data/data.json";
import AddGuessButton from "../AddGuessButton";

function GuessPicker() {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const gameState = useAppSelector((state) => state.gameState);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSelectedValue(selectedOption);
    console.log(selectedOption);
  };

  const hasBeenSelected = (housemate: string) => {
    return gameState.guesses
      .map(currentHousemate => currentHousemate.name)
      .includes(housemate)
  }

  return (
    <>
      <select onChange={handleChange}>
        <option disabled={true} selected={true}>Select a housemate</option>
        {data.map((i) => (
          <option key={i.name} disabled={hasBeenSelected(i.name)}>{i.name}</option>
        ))}
      </select>
      <AddGuessButton enabled={!hasBeenSelected(selectedValue)} housemateGuessed={selectedValue} />
    </>
  );
}

export default GuessPicker;
