# 🔮 The Psychic Game

This is a classic letter-guessing game where the user attempts to guess a letter randomly chosen by the computer. It was built using vanilla JavaScript.

![psychic-game](https://user-images.githubusercontent.com/52462582/69443517-8b90f600-0d1c-11ea-8adc-0fb159ebeda1.png)

---

## 💻 Technologies Used

The application was built using foundational web technologies:

* **HTML**
* **CSS**
* **JavaScript** (Vanilla)

---

## 🎮 How to Play

The objective of the game is to correctly guess the single letter the computer has randomly selected.

1.  **Guessing:** The user makes a guess by pressing a key on the keyboard.
2.  **Chances:** The user has **10 chances** per round to guess the correct letter.
3.  **Wins & Losses:**
    * If the user guesses correctly, the **Wins** score increases by one.
    * If the user runs out of chances (10 incorrect guesses), the **Losses** score increases by one.
4.  **Tracking:** All incorrect guesses made during the current round are displayed.
5.  **Restarting Rounds:** The game automatically restarts (without reloading the page) upon a win or loss.
6.  **Score Reset:** To reset the accumulated **Wins** and **Losses** scores, the user must manually refresh the browser page.

### Game Constraints

The game enforces the following rules to maintain fairness and function:

* Only **alphabetical keys (A-Z)** are accepted as valid guesses.
* The user is **prevented from repeating a guess** made earlier in the current round.
* Invalid or repeated guesses **do not** count against the user's 10 remaining chances.

---

## ⚠️ Future Reference

**Desktop Use Only:** This game is currently designed for and playable only on **desktop or laptop** browsers. Mobile use is not supported.

---

I hope you enjoy testing your psychic abilities!