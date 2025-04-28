const {getComputerChoice, getHumanChoice, playRound, playGame} = require('./rps');

describe('getComputerChoice', () => {
    test('return rock, paper and scissors within 20 games', () => {
        let rock, paper, scissors = false;
        
        for (let i = 0; i < 20; i++) {
            switch (getComputerChoice()) {
                case "rock": rock = true; break;
                case "paper": paper = true; break;
                case "scissors": scissors = true; break;
                default: return "ERROR";
            }
            if (rock && paper && scissors) break;
        }

        expect(rock && paper && scissors);
    })
});

describe('getHumanChoice', () => {

});

describe('playRound', () => {

});

describe('playGame', () => {

});