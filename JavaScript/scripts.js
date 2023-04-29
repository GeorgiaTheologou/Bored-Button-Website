//-----------------------------------------------------------Toggle Button Menu--------------------------------------------------------------
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

//-----------------------------------------------------------Done Button at column 1--------------------------------------------------------------
const doneButton = document.getElementById("doneButton");
doneButton.addEventListener('click', () => {
  const selectElement = document.querySelector('.boredomLevel');
  const selectedValue = selectElement.value;
  alert(`${selectedValue}.`);
});

//-----------------------------------------------------------Red Button Function--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="TicTacToeGame.html"
 randomlinks[1]="MemoryGame.html"
 randomlinks[2]="GuessTheNumberGame.html"
 //randomlinks[3]=""
 
function randomlink() {
  window.location.href = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}

