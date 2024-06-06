import React, { CSSProperties } from "react";
import { GameCategories } from "../../../../Enums";
import ResultItem from "../../../ResultItem";
import { Guess } from "../../../../Data/interfaces";


interface Props {
    guess: Guess;
  }

function GuessDataSection(props: Props) {
  const topRowContainterStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  };

  const bottomRowContainterStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  };

  const dataContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  return (
    <section style={dataContainerStyle}>
      <section style={topRowContainterStyle}>
        <ResultItem
          title={GameCategories.SEASON}
          value={props.guess.season.value}
          isCorrect={props.guess.season.isCorrect}
        />
        <ResultItem
          title={GameCategories.AGE}
          value={props.guess.age.value}
          isCorrect={props.guess.age.isCorrect}
          isHigher={props.guess.age.isHigher}
          isClose={props.guess.age.isClose}
        />
      </section>
      <section style={bottomRowContainterStyle}>
        <ResultItem
          title={GameCategories.Appearances}
          value={props.guess.Appearances.value}
          isCorrect={props.guess.Appearances.isCorrect}
          isHigher={props.guess.Appearances.isHigher}
          isClose={props.guess.Appearances.isClose}
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
      </section>
    </section>
  );
}

export default GuessDataSection;
