var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];
var computerChoice;

// set dococument.onkeyup function
document.onkeyup = function (event) {
  // event.key will determine what letter the user pressed.
  var user = event.key;

  // set computerChoice variable as an array;
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  // let the computer randomly selects a letter
  computerChoice = letters[Math.floor(Math.random() * 26)];

  if (user === computerChoice) {
    // alert the user won
    alert("Amazing....You Won!");

    // Add +1 to the win score
    wins++
    document.querySelector('#your-wins').textContent = wins;

    // reset the game when user wins
    reset();
  }

  // Prevent user from choosing a key that's not part of the alphabet.
  // a = unicode 65, z = unicode 90.
  if (event.keyCode < 65 || event.keyCode > 90) {
    // alert the user invalid entry
    alert("Invalid Entry. Please press a letter from A-Z");

  } else if (guessesSoFar.indexOf(user) >= 0) {
    alert('You already used that letter');

  } else if (user !== computerChoice) {
    // push() method to output user letters
    guessesSoFar.push(user);

    // Use join() method to seperate user guesses output. 
    document.querySelector('#user-guesses').textContent = guessesSoFar.join(' ');

    // reduce the remaining userguess letters
    guessesLeft--;
    document.querySelector('#guesses-left').textContent = guessesLeft;
  }

  if (guessesLeft <= 0) {
    // user lost
    alert('YOU LOST. HA!');

    // add a win to losses
    losses++;
    document.querySelector('#your-losses').textContent = losses;

    // reset the game when user lost
    reset();
  }
}

function reset() {
  // reset the score to 10
  guessesLeft = 10;

  // reset guesses remaining to 10
  document.querySelector('#guesses-left').textContent = '10';

  // reset user guesses letters to 0
  guessesSoFar = [];
  document.querySelector('#user-guesses').textContent = [];
}