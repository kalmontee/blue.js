var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = '';
var computerChoice;

// Target the HTML DOM
var numOfWins = document.querySelector('#your-wins');
var numOfLosses = document.querySelector('#your-losses');
var guessesRemaining = document.querySelector('#guesses-left');
var userGuesses = document.querySelector('#user-guesses');

// startGame();

// initialize the game with a function
// function startGame() {

// set dococument.onkeyup function
document.onkeyup = function(event) {

    // reset();

    var userGuess = event.key;

    // set computerChoice variable as an array;
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // let the computer randomly selects a letter
    var randomChoice = letters[Math.floor(Math.random() * 26)];

    computerChoice = randomChoice;
    console.log("computer chose: " + computerChoice); // testing...... IT WORKS! Computer automatically thinks of a random word.

    if (userGuess === computerChoice) {
        console.log("You picked the right letter as the computer. Letter " + userGuess); // test

        // alert the user won
        alert("You Win!");

        // Add +1 to the win score
        wins++
        numOfWins.innerHTML = wins;

        // reset the game when user wins
        reset();
    }

    if (userGuess !== computerChoice) {
        console.log("You picked the wrong letter. " + userGuess); // test

        yourGuesses++;
        userGuesses.textContent = userGuess;

        // reduce the remaining userguess letters
        guessesLeft--;
        guessesRemaining.textContent = guessesLeft;

    }

    if (guessesLeft <= 0) {
        console.log("You Lost!");

        // user lost
        alert('YOU LOST. HA!');

        // add a win to losses
        losses++;
        numOfLosses.textContent = losses;

        // reset the game when user losses
        reset();
    }
}

function reset() {
    guessesLeft = 10;
    yourGuesses = '';
    guessesRemaining.textContent = '10';
    userGuesses.textContent = '';
}
// }