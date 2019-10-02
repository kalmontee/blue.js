var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = []; // rename this variable
var computerChoice; // rename this variable

// Target the HTML DOM

// var numOfWins = document.querySelector('#your-wins');
// var numOfLosses = document.querySelector('#your-losses');
// var userGuesses = document.querySelector('#user-guesses');
// var guessesRemaining = document.querySelector('#guesses-left'); // rename this variable

// set dococument.onkeyup function
document.onkeyup = function(event) {

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
        document.querySelector('#your-wins').textContent = wins;

        // reset the game when user wins
        reset();
    }

    // Prevent user from choosing a key that's not part of the alphabet.
    // a = unicode 65, z = unicode 90. (I learned something new!);
    if (event.keyCode < 65 || event.keyCode > 90) {

        // alert the user invalid entry
        alert("Invalid Entry");

    } else if (userGuess !== computerChoice) {
        console.log("You picked the wrong letter. " + userGuess); // test

        // use .push() to output userGuess when pressed a letter
        yourGuesses.push(userGuess + ' ');
        document.querySelector('#user-guesses').textContent = yourGuesses;

        // reduce the remaining userguess letters
        guessesLeft--;
        document.querySelector('#guesses-left').textContent = guessesLeft;
    }

    if (guessesLeft <= 0) {
        // user lost
        alert('YOU LOST. HA!');

        // add a win to losses
        losses++;

        // numOfLosses.textContent = losses;
        document.querySelector('#your-losses').textContent = losses;

        // reset the game when user losses
        reset();
    }
}

function reset() {
    // reset the score to 10
    guessesLeft = 10;

    // reset user guesses letter to nothing
    yourGuesses = [];

    // reset guesses remaining to 10
    document.querySelector('#guesses-left').textContent = '10';

    // reset your user guesses letter to nothing.
    document.querySelector('#user-guesses').textContent = '';
}