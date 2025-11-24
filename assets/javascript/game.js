var wins = 0;
var losses = 0;
var remainingGuesses = 10;
var attemptedGuesses = [];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

document.onkeyup = function (event) {
  const keyCode = event.keyCode; // a = unicode 65, z = unicode 90.
  const eventKeyPressed = event.key;
  const isValidLetter = keyCode >= 65 && keyCode <= 90;
  const computerChoice = letters[Math.floor(Math.random() * 26)];
  const isAlreadyGuessed = attemptedGuesses.indexOf(eventKeyPressed) >= 0;

  if (!isValidLetter) {
    alert("Invalid Entry. Please enter a letter from A-Z");
    return;
  }
  
  if (isAlreadyGuessed) {
    alert('You already used that letter');
    return;
  }
  
  if (eventKeyPressed !== computerChoice) {
    attemptedGuesses.push(eventKeyPressed);
    updateDisplay('#user-guesses', attemptedGuesses.join(' '));

    remainingGuesses--;
    updateDisplay('#guesses-left', remainingGuesses);
  }

  if (eventKeyPressed === computerChoice) {
    alert("Amazing....You Won!");
    updateWinsDisplay();
    reset();
  }

  if (remainingGuesses <= 0) {
    alert('YOU LOST. Better luck next time 😉!');
    updateLossesCount();
    reset();
  }
}

function updateWinsDisplay() {
  wins++;
  updateDisplay('#your-wins', wins);
}

function updateLossesCount() {
  losses++;
  updateDisplay('#your-losses', losses);
}

function updateDisplay(selector, value) {
  document.querySelector(selector).textContent = value;
}

function reset() {
  remainingGuesses = 10;
  updateDisplay('#guesses-left', remainingGuesses);

  attemptedGuesses = [];
  updateDisplay('#user-guesses', attemptedGuesses);
}