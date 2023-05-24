type Score = {
    firstTeam: string,
    secondTeam: string
}

const numbers: any = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
}

function parseScore (string: string): Score{
    return {
        firstTeam: string[0],
        secondTeam: string[2]
    }
}

function printScore (score: Score): void{
    let message = `The result is ${numbers[score.firstTeam]} to ${numbers[score.secondTeam]}`;
    console.log(message);
}

printScore(parseScore('2:5'))
