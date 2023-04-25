//-----------------------------------------------------------Toggle Button Menu--------------------------------------------------------------
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const doneButton = document.getElementById("doneButton");
doneButton.addEventListener('click', () => {
  const selectElement = document.querySelector('.boredomLevel');
  const selectedValue = selectElement.value;
  alert(`${selectedValue}.`);
});

//-----------------------------------------------------------Rn Menu--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="TicTacToeGame.html"
 //randomlinks[1]=""
 //randomlinks[2]=""
 //randomlinks[3]=""
 

 function randomlink(){
  window.open(randomlinks[Math.floor(Math.random()*randomlinks.length)]);
}

