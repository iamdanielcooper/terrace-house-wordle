import React, { CSSProperties } from "react";
import { Guess } from "../../Data/interfaces";
import { GuessImage, GuessName } from "./Components";
import GuessDataSection from "./Components/GuessDataSection";

interface Props {
  guess: Guess;
  hasWon: boolean;
  index: number;
}

function GuessResult(props: Props) {
  const containerStyle: CSSProperties = {
    margin: "30px",
  };

  const style: CSSProperties = {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  };

  const housemateIdentityStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    margin: "10px",
  };

  const shouldDisplayHousemateInfo = (): boolean => {
    return !(props.hasWon && props.index === 0);
  };

  return (
    <div style={containerStyle}>
      {shouldDisplayHousemateInfo() ? (
        <section style={housemateIdentityStyle}>
          <GuessImage url={props.guess.img} />
          <GuessName name={props.guess.name} nickname={props.guess.nickname} />
        </section>
      ) : null}

      <div style={style}>
        <GuessDataSection guess={props.guess} />
      </div>
    </div>
  );
}

export default GuessResult;
