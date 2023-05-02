//-----------------------------------------------------------Red Button Function--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="TicTacToeGame.html"
 randomlinks[1]="GuessTheNumberGame.html"
 randomlinks[2]="MemoryGame.html"
 randomlinks[3]="RockPaperScissors.html"
 
function randomlink() {
  window.location.href = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}

//-----------------------------------------------------------Game Functions--------------------------------------------------------------
// Define an array of possible words
const words = ["guitar", "piano", "violin", "drums", "trumpet", "flute", "bugle"];

// Choose a random word from the array
let word = words[Math.floor(Math.random() * words.length)];

// Initialize an array of blank spaces to represent the letters in the word
let wordArray = Array(word.length).fill("_");

// Initialize a variable to keep track of the number of incorrect guesses
let wrongGuesses = 0;

// Display the initial state of the game
document.getElementById("word").textContent = wordArray.join(" ");

// Listen for a guess from the player
document.getElementById("guess").addEventListener("click", function() {
  let letter = document.getElementById("letter").value.toLowerCase();
  document.getElementById("letter").value = "";

  // Check if the guessed letter is in the word
  if (word.includes(letter)) {
    // If the letter is in the word, fill in all instances of the letter
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        wordArray[i] = letter;
      }
    }
    document.getElementById("word").textContent = wordArray.join(" ");
    // Check if the player has won the game
    if (!wordArray.includes("_")) {
      document.getElementById("message").textContent = "Congratulations, you win!";
      document.getElementById("guess").disabled = true;
      document.getElementById("new-word").disabled = false;
    }
  } else {
    // If the letter is not in the word, increment the number of wrong guesses
    wrongGuesses++;
    document.getElementById("message").textContent = "Incorrect guess. You have " + (10 - wrongGuesses) + " guesses left.";
    // Check if the player has lost the game
    if (wrongGuesses >= 10) {
      document.getElementById("message").textContent = "Sorry, you lose. The word was " + word + ".";
      document.getElementById("guess").disabled = true;
      document.getElementById("new-word").disabled = false;
    }
  }
});

// Listen for a new word button click
document.getElementById("new-word").addEventListener("click", function() {
  // Choose a new random word
  word = words[Math.floor(Math.random() * words.length)];
  // Reset game variables
  wordArray = Array(word.length).fill("_");
  wrongGuesses = 0;
  // Display the new game state
  document.getElementById("word").textContent = wordArray.join(" ");
  document.getElementById("message").textContent = "";
  document.getElementById("guess").disabled = false;
  document.getElementById("new-word").disabled = true;
});
