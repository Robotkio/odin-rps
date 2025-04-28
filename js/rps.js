const rock = "rock";
const paper = "paper";
const scissors = "scissors";

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return rock;
        case 1: return paper;
        case 2: return scissors;
        default: return "ERROR: getComputerChoice()";
    }
}

function getHumanChoice() {

}

function playRound() {

}

function playGame() {

}

module.exports = {
    getComputerChoice,
    getHumanChoice,
    playRound,
    playGame
}