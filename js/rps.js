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
    let choice = prompt(`Please input "${rock}", "${paper}", or "${scissors}": `, getComputerChoice());
    choice = choice.toLowerCase();
    if (choice === rock || choice === paper || choice === scissors) {
        return choice;
    }
    return "ERROR: getHumanChoice()";
}

function playRound(humanChoice, computerChoice) {
    // determine winner
    // winner  1: human
    // winner  0: tie
    // winner -1: computer
    let winner = 0;

    switch (humanChoice) {
        case rock:
            switch (computerChoice) {
                case rock:     winner = 0;  break;
                case paper:    winner = -1; break;
                case scissors: winner = 1;  break;
            }
            break;
        case paper:
            switch (computerChoice) {
                case rock:     winner = 1;  break;
                case paper:    winner = 0;  break;
                case scissors: winner = -1; break;
            }
            break;
        case scissors:
            switch (computerChoice) {
                case rock:     winner = -1; break;
                case paper:    winner = 1;  break;
                case scissors: winner = 0;  break;
            }
            break;
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
        playRound(getHumanChoice(), getComputerChoice());
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

// module.exports = {
//     getComputerChoice,
//     getHumanChoice,
//     playRound,
//     playGame
// }