const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

function setupGame() {
    let btnRock = document.getElementById("btn-rock");
    let btnPaper = document.getElementById("btn-paper");
    let btnScissors = document.getElementById("btn-scissors");

    btnRock.addEventListener("click", () => {playRound(rock, getComputerChoice())});
    btnPaper.addEventListener("click", () => {playRound(paper, getComputerChoice())});
    btnScissors.addEventListener("click", () => {playRound(scissors, getComputerChoice())});
}

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
    const usr = 1;    // human
    const cpu = -1;   // computer
    const tie = 0;    // tie
    let winner = tie; // default state

    switch (humanChoice) {
        case rock:
            switch (computerChoice) {
                case rock:     winner = tie; break;
                case paper:    winner = cpu; break;
                case scissors: winner = usr; break;
            }
            break;
        case paper:
            switch (computerChoice) {
                case rock:     winner = usr; break;
                case paper:    winner = tie; break;
                case scissors: winner = cpu; break;
            }
            break;
        case scissors:
            switch (computerChoice) {
                case rock:     winner = cpu; break;
                case paper:    winner = usr; break;
                case scissors: winner = tie; break;
            }
            break;
    }

    // print winning line and update score
    switch (winner) {
        case usr:
            console.log(`Human wins! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            break;
        case tie:
            console.log(`Tie! ${humanChoice} and ${computerChoice} are the same!`);
            break;
        case cpu:
            console.log(`Computer wins! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            break;
        default:
            console.log("ERROR: playRound()");
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    // winning message
    if (humanScore > computerScore) {
        console.log(`Human wins! ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins! ${computerScore} to ${humanScore}`);
    } else {
        console.log(`A tie! ${humanScore} to ${computerScore}`);
    }
}

setupGame();

// module.exports = {
//     getComputerChoice,
//     getHumanChoice,
//     playRound,
//     playGame
// }