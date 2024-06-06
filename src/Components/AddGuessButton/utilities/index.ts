import { Answer, Guess } from "../../../Data/interfaces";

export const calculateResult = (guess: Answer, answer: Answer): Guess => {
    return {
        name: guess.name,
        nickname: guess.nickname,
        img: guess.img,
        taglines: guess.taglines,
        season: {
            isCorrect: guess.season === answer.season,
            value: guess.season
        },
        age: {
            isClose: guess.age > answer.age - 2 && guess.age < answer.age + 2,
            isCorrect: guess.age === answer.age,
            isHigher:guess.age < answer.age,
            value: guess.age
        },
        Appearances: {
            isClose: guess.Appearances > answer.Appearances - 3 && guess.Appearances < answer.Appearances + 3,
            isCorrect: guess.Appearances === answer.Appearances,
            isHigher:guess.Appearances < answer.Appearances,
            value: guess.Appearances
        },
        gender: {
            isCorrect: guess.gender === answer.gender,
            value: guess.gender
        },
        housemates: {
            isClose: guess.housemates > answer.housemates - 3 && guess.housemates < answer.housemates + 3,
            isCorrect: guess.housemates === answer.housemates,
            isHigher:guess.housemates < answer.housemates,
            value: guess.housemates
        }
    }
}