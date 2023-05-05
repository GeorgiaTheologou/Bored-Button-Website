
//-----------------------------------------------------------Red Button Function--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="TicTacToeGame.html"
 randomlinks[1]="GuessTheNumberGame.html"
 randomlinks[2]="RockPaperScissors.html"
 randomlinks[3]="GuessTheWord.html"
 
function randomlink() {
  window.location.href = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}

//-----------------------------------------------------------Game Functions--------------------------------------------------------------
const cards = document.querySelectorAll(".card"),
timeTag = document.querySelector(".time b"),
flipsTag = document.querySelector(".flips b"),
refreshBtn = document.querySelector(".details button");

let maxTime = 35;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

/*updates the timer by reducing the timeLeft variable by 1 and displays the timeLeft in the HTML document. 
*If the timeLeft is less than or equal to zero, it clears the timer interval.*/
function initTimer() {
    if(timeLeft <= 0) {
        return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
}

/*Responsible for the logic of flipping cards on the game board
 * It checks if the game is still in play, if the clicked card is not the same as the previously clicked card,
 * if the deck is not disabled, and if time is still remaining. It flips the clicked card, increments the number of flips, 
 * and if this is the second card being clicked, it disables the deck and matches the two cards.*/
function flipCard({target: clickedCard}) {
    if(!isPlaying) {
        isPlaying = true;
        timer = setInterval(initTimer, 1000);
    }
    if(clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
        flips++;
        flipsTag.innerText = flips;
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}

/**compares the two card images for a match
 * If they match, it increments the number of matched cards. 
 * If all cards have been matched, it clears the timer. It removes the event listener from the two matched cards and enables the deck.
 * If the cards do not match, it shakes the cards, 
 * then flips them back after 1200 milliseconds, removes the shake class and re-enables the deck.
 */
function matchCards(img1, img2) {
    if(img1 === img2) {
        matchedCard++;
        if(matchedCard == 6 && timeLeft > 0) {
            return clearInterval(timer);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

/**resets the game to its initial state by setting the timeLeft, 
 * flips, and matchedCard variables to zero, clearing the timer interval, and re-enabling the deck. 
 *  It shuffles the cards by creating an array of numbers representing the card image and randomly sorting them. 
 * It then sets the card images based on their position in the array and adds a click event listener to each card.
 */
function shuffleCard() {
    timeLeft = maxTime;
    flips = matchedCard = 0;
    cardOne = cardTwo = "";
    clearInterval(timer);
    timeTag.innerText = timeLeft;
    flipsTag.innerText = flips;
    disableDeck = isPlaying = false;

    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        setTimeout(() => {
            imgTag.src = `Images/card${arr[index]}.png`;
        }, 500);
        card.addEventListener("click", flipCard);
    });
}

shuffleCard();

refreshBtn.addEventListener("click", shuffleCard);

cards.forEach(card => {
    card.addEventListener("click", flipCard);
});




