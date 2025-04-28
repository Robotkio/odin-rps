function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissors";
        default: return "ERROR";
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