import React, { CSSProperties } from "react";
import { Props } from "./interfaces";
import { getBackoundColor } from "./utilities";


function ResultItem(props: Props) {
  const style: CSSProperties = {
    width: "100px",
    background: getBackoundColor(props.isClose, props.isCorrect),
  };

  const getArrow = (isHigher: boolean | undefined, isCorrect: boolean) => {
      if (isHigher === undefined || isCorrect) {
        return null
      } else if (isHigher) {
        return <p>▲</p>
      } else {
        return <p>▼</p>
      }
  }

  return (
    <div style={style}>
      <p>{props.title}</p>
      <p>{props.value}</p>
      { getArrow(props.isHigher, props.isCorrect) }
    </div>
  );
}

export default ResultItem;
