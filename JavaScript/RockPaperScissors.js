//-----------------------------------------------------------Red Button Function--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="TicTacToeGame.html"
 randomlinks[1]="GuessTheNumberGame.html"
 //randomlinks[2]=""
 //randomlinks[3]=""
 
function randomlink() {
  window.location.href = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}

//-----------------------------------------------------------Game Functions--------------------------------------------------------------

// Store the player and computer scores
let playerScore = 0;
let computerScore = 0;

// Get the buttons and result element
const buttons = document.querySelectorAll('.btn');
const resultDiv = document.querySelector('#result');

// Function to generate a computer choice
function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to play a round of the game
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'Tie!';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Function to update the result element with the current scores
function updateResult() {
  resultDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
}

// Function to restart the game
function restartGame() {
  playerScore = 0;
  computerScore = 0;
  updateResult();
}

// Add event listeners to the buttons
buttons.forEach((button) =>
  button.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = button.id;
    const result = playRound(playerSelection, computerSelection);
    resultDiv.textContent = result;
    updateResult();
  })
);

// Add event listener to the restart button
const restartBtn = document.querySelector('#restart');
restartBtn.addEventListener('click', () => {
  restartGame();
  buttons.forEach((button) => (button.disabled = false));
});

// Add event listener to the Results button
const resultsBtn = document.querySelector('#Results');
resultsBtn.addEventListener('click', () => {
  resultDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`;
});




