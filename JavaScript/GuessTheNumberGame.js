//-----------------------------------------------------------Red Button Function--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="TicTacToeGame.html"
 randomlinks[1]="MemoryGame.html"
 //randomlinks[2]=""
 //randomlinks[3]=""
 
function randomlink() {
  window.location.href = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}

//-----------------------------------------------------------Game Functions--------------------------------------------------------------
var secretNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

function checkGuess() {
  var guess = parseInt(document.getElementById("guess").value);
  if (isNaN(guess)) {
    document.getElementById("result").innerHTML = "Please enter a valid number.";
  } else if (guess === secretNumber) {
    document.getElementById("result").innerHTML = "You guessed it! The secret number was " + secretNumber + ".";
  } else if (guess < secretNumber) {
    document.getElementById("result").innerHTML = "Higher!";
    tries++;
  } else {
    document.getElementById("result").innerHTML = "Lower!";
    tries++;
  }
  document.getElementById("tries").innerHTML = "Number of tries: " + tries;
}



