import React, { CSSProperties } from "react";
import { Props } from "./interfaces";
import { getBackoundColor } from "./utilities";


function ResultItem(props: Props) {
  const style: CSSProperties = {
    background: getBackoundColor(props.isClose, props.isCorrect),
    flexGrow: 2,
    borderRadius: "10px",
  };

  const titleStyle: CSSProperties = {
    margin: "0",
    color: "white",
    padding: "2px 10px",
  }

  const resultStyle: CSSProperties = {
    margin: "5px",
    color: "white",
    padding: "2px",
    fontWeight: "bold",
    fontSize: "18px",
    textTransform: "capitalize",
  }

  const getArrow = (isHigher: boolean | undefined, isCorrect: boolean) => {
      if (isHigher === undefined || isCorrect) {
        return null
      } else if (isHigher) {
        return <span>▲</span>
      } else {
        return <span>▼</span>
      }
  }

  return (
    <div style={style}>
      <p style={titleStyle}>{props.title}</p>
      <p style={resultStyle}>{props.value} { getArrow(props.isHigher, props.isCorrect) }</p>
      
    </div>
  );
}

export default ResultItem;
