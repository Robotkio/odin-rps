const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

let statusPannel = document.getElementById("rps-status");
let resultPannel = document.getElementById("rps-results");

function setupGame() {
    let btnRock = document.getElementById("btn-rock");
    let btnPaper = document.getElementById("btn-paper");
    let btnScissors = document.getElementById("btn-scissors");

    btnRock.addEventListener("click", () => {playRound(rock, getComputerChoice())});
    btnPaper.addEventListener("click", () => {playRound(paper, getComputerChoice())});
    btnScissors.addEventListener("click", () => {playRound(scissors, getComputerChoice())});

    updateStatusPannel();
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return rock;
        case 1: return paper;
        case 2: return scissors;
        default: return "ERROR: getComputerChoice()";
    }
}

function playRound(humanChoice, computerChoice) {
    roundNumber++;

    const usr = 1;    // human
    const cpu = -1;   // computer
    const tie = 0;    // tie
    let winner = tie; // default state

    // determine winner
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
    let outputMessage = document.createElement("div");
    outputMessage.classList.add("output-msg");
    switch (winner) {
        case usr:
            outputMessage.innerText = `Human wins! ${humanChoice} beats ${computerChoice}!`;
            outputMessage.classList.add("win");
            humanScore++;
            break;
        case tie:
            outputMessage.innerText = `Tie! ${humanChoice} and ${computerChoice} are the same!`;
            outputMessage.classList.add("tie");
            break;
        case cpu:
            outputMessage.innerText = `Computer wins! ${computerChoice} beats ${humanChoice}!`;
            outputMessage.classList.add("lose");
            computerScore++;
            break;
        default:
            console.log("ERROR: playRound()");
    }
    resultPannel.appendChild(outputMessage);
    updateStatusPannel();
}

function updateStatusPannel() {
    statusPannel.innerText = `Round[${roundNumber}] Wins[User:${humanScore} Computer:${computerScore}]`;
}

setupGame();