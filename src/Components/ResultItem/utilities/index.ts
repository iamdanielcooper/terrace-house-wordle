 import { BackgroundColors } from "../../GameSection/enums";
 
 export const getBackoundColor = (isClose: boolean|undefined, isCorrect: boolean) => {
    if (isCorrect) {
      return BackgroundColors.GREEN;
    } else if (isClose) {
      return BackgroundColors.YELLOW;
    } else {
      return BackgroundColors.GREY;
    }
  };