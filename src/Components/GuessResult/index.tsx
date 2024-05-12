import React, { CSSProperties } from "react";
import { ResultItem } from "../";
import { Guess } from "../../Data/interfaces";
import { GameCategories } from "../../Enums";

interface Props {
  guess: Guess;
}

function GuessResult(props: Props) {
  const style: CSSProperties = {
    display: "flex",
    justifyContent: "center",
  };

  const containerStyle: CSSProperties = {
    background: "pink",
  };

  return (
    <div style={containerStyle}>
      <div>
        <p>{props.guess.nickname ? props.guess.nickname : props.guess.name}</p>
      </div>
      <div style={style}>
        <ResultItem
          title={GameCategories.AGE}
          value={props.guess.age.value}
          isCorrect={props.guess.age.isCorrect}
          isHigher={props.guess.age.isHigher}
          isClose={props.guess.age.isClose}
        />
        <ResultItem
          title={GameCategories.APERANCES}
          value={props.guess.apearances.value}
          isCorrect={props.guess.apearances.isCorrect}
          isHigher={props.guess.apearances.isHigher}
          isClose={props.guess.apearances.isClose}
        />
        <ResultItem
          title={GameCategories.GENDER}
          value={props.guess.gender.value}
          isCorrect={props.guess.gender.isCorrect}
        />
        <ResultItem
          title={GameCategories.HOUSEMATES}
          value={props.guess.housemates.value}
          isCorrect={props.guess.housemates.isCorrect}
          isHigher={props.guess.housemates.isHigher}
          isClose={props.guess.housemates.isClose}
        />
        <ResultItem
          title={GameCategories.SEASON}
          value={props.guess.season.value}
          isCorrect={props.guess.season.isCorrect}
        />
      </div>
    </div>
  );
}

export default GuessResult;
