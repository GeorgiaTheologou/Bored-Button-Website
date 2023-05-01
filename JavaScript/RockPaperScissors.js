//-----------------------------------------------------------Red Button Function--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="TicTacToeGame.html"
 randomlinks[1]="GuessTheNumberGame.html"
 randomlinks[2]="MemoryGame.html"
 randomlinks[3]="GuessTheWord.html"
 
function randomlink() {
  window.location.href = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}

//-----------------------------------------------------------Game Functions--------------------------------------------------------------
// Define variables to keep track of the score
let userScore = 0;
let computerScore = 0;

// Define a function to generate a random choice for the computer
function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Define a function to play a single round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    userScore++;
    return "You win!";
  } else {
    computerScore++;
    return "You lose!";
  }
}

// Define a function to update the result message and the score
function updateResultMessage(message) {
  const resultDiv = document.getElementById("result");
  resultDiv.textContent = message;
  resultDiv.style.fontSize = "24px";
}

// Define a function to show the results
function showResults() {
  alert(`Your score: ${userScore} | Computer score: ${computerScore}`);
}

// Attach event listeners to the buttons
const rockBtn = document.getElementById("rock");
rockBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("rock", computerSelection);
  updateResultMessage("You chose rock, computer chose "+ computerSelection + " = " + result);
});

const paperBtn = document.getElementById("paper");
paperBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("paper", computerSelection);
  updateResultMessage("You chose paper, computer chose "+ computerSelection + " = " + result);
});

const scissorsBtn = document.getElementById("scissors");
scissorsBtn.addEventListener("click", () => {
  const computerSelection = computerPlay();
  const result = playRound("scissors", computerSelection);
  updateResultMessage("You chose scissors, computer chose "+ computerSelection + " = " + result);
});

// Define a function to reset the game
function resetGame() {
  userScore = 0;
  computerScore = 0;
  updateResultMessage("");
}

// Event Listener for the reset button
const restartBtn = document.getElementById("restart");
restartBtn.addEventListener("click", resetGame);

//Event Listener for the result button
const resultsBtn = document.getElementById("Results");
resultsBtn.addEventListener("click", showResults);
 




