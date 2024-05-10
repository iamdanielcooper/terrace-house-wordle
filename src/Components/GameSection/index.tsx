import React, { CSSProperties } from 'react'

interface Props {
  isClose: boolean,
  result: number|string,
  title: string,
  isCorrect: boolean
}

enum BackgroundColors {
  GREY = "grey",
  YELLOW = "yellow",
  GREEN = "green"
}

function GameSection(props: Props) {

  const getBackoundColor = (isClose: boolean, isCorrect: boolean) => {
      if (isCorrect) {
        return BackgroundColors.GREEN
      } else if (isClose) {
        return BackgroundColors.YELLOW
      } else {
        return BackgroundColors.GREY
      }
  }

  const style: CSSProperties= {
    width: "100px",
    background: getBackoundColor(props.isClose, props.isCorrect)
  }

  return (
    <div style={style}>
      <p>{props.title}</p>
      <p>{props.result}</p>
    </div>
  )
}

export default GameSection