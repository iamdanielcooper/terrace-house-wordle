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
        apearances: {
            isClose: guess.apearances > answer.apearances - 3 && guess.apearances < answer.apearances + 3,
            isCorrect: guess.apearances === answer.apearances,
            isHigher:guess.apearances < answer.apearances,
            value: guess.apearances
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