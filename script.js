// Factory Function to setup players
const Player = (name, score, symbol) => {
    const getName = () => name;
    const getScore = () => score;
    const getSymbol = () => symbol;

    return {getName, getScore, getSymbol}
};

// Module for GameBoard
const gameBoard = (() => {
    const gameArray = 
                    ['', '', '',
                    '', '', '',
                    '', '', ''];

    return {
        gameArray,
    };
    
})();

// Module to control the game
const gameControllers = (() => {

    return {
        
    };

})();

// Init test
let playerOne = Player('Tom', 2, 'X');
let playerTwo = Player('Pauline', 0, 'O');

