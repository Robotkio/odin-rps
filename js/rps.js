const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return rock;
        case 1: return paper;
        case 2: return scissors;
        default: return "ERROR: getComputerChoice()";
    }
}

function getHumanChoice() {
    let choice = prompt(`Please input "${rock}", "${paper}", or ${scissors}: `, "rock");
    choice = choice.toLowerCase();
    if (choice === rock || choice === paper || choice === scissors) {
        return choice;
    }
    return "ERROR: getHumanChoice()";
}

function playRound(humanChoice, computerChoice) {
    // determine winner
    // winner -1: human
    // winner  0: tie
    // winner  1: computer
    let winner = 0;
    switch ([humanChoice, computerChoice]) {
        case [rock, rock]:
            winner = 0;
            break;
        case [rock, paper]:
            winner = 1;
            break;
        case [rock, scissors]:
            winner = -1;
            break;
        case [paper, paper]:
            winner = 0;
            break;
        case [paper, rock]:
            winner = -1;
            break;
        case [paper, scissors]:
            winner = 1;
            break;
        case [scissors, scissors]:
            winner = 0;
            break;
        case [scissors, rock]:
            winner = 1;
            break;
        case [scissors, paper]:
            winner = -1;
            break;
        default:
            winner = 0;
    }

    // print winning line and update score
    switch (winner) {
        case -1:
            console.log(`Human wins! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            break;
        case 0:
            console.log(`Tie! ${humanChoice} and ${computerChoice} are the same!`);
            break;
        case 1:
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            break;
        default:
            console.log("ERROR: playRound()");
    }
}

function playGame(numberOfRounds = 5) {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < numberOfRounds; i++) {
        playRound(humanChoice(), computerChoice());
    }

    // winning message
    if (humanScore > computerScore) {
        console.log(`Human wins! ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins! ${computerScore} to ${humanScore}`);
    } else {
        console.log(`A tie! ${humanScore} to ${computerScore}`);
    }
}

playGame();

module.exports = {
    getComputerChoice,
    getHumanChoice,
    playRound,
    playGame
}