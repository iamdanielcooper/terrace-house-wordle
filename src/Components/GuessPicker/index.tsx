import React, { ChangeEvent, FormEvent, useState } from "react";
import data from "../../Data/data.json";
import AddGuessButton from "../AddGuessButton";

function GuessPicker() {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    setSelectedValue(selectedOption);
    console.log(selectedOption);
  };

  return (
    <>
      <select onChange={handleChange}>
        <option disabled={true} selected={true}>Select a housemate</option>
        {data.map((i) => (
          <option key={i.name}>{i.name}</option>
        ))}
      </select>
      <AddGuessButton housemateGuessed={selectedValue} />
    </>
  );
}

export default GuessPicker;
