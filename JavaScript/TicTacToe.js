//-----------------------------------------------------------Red Button Function--------------------------------------------------------------
var randomlinks = [];

 randomlinks[0]="MemoryGame.html"
 randomlinks[1]="GuessTheNumberGame.html"
 randomlinks[2]="RockPaperScissors.html"
 randomlinks[3]="GuessTheWord.html"
 
function randomlink() {
  window.location.href = randomlinks[Math.floor(Math.random() * randomlinks.length)];
}

//-----------------------------------------------------------Game Functions--------------------------------------------------------------

const selectBox = document.querySelector(".select-box"),
selectBtnX = selectBox.querySelector(".options .playerX"),
selectBtnO = selectBox.querySelector(".options .playerO"),
playBoard = document.querySelector(".play-board"),
players = document.querySelector(".players"),
allBox = document.querySelectorAll("section span"),
resultBox = document.querySelector(".result-box"),
wonText = resultBox.querySelector(".won-text"),
replayBtn = resultBox.querySelector("button");

//To attach a click event to each box on the game board. When a box is clicked, the clickedBox() function is called.
window.onload = ()=>{
    for (let i = 0; i < allBox.length; i++) {
       allBox[i].setAttribute("onclick", "clickedBox(this)");
    }
}

// Function to handle the click event for selectBtnX
selectBtnX.onclick = ()=>{
    // Add the 'hide' class to selectBox and the 'show' class to playBoard
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}

// Function to handle the click event for selectBtnO
selectBtnO.onclick = ()=>{ 
    // Add the 'hide' class to selectBox and the 'show' class to playBoard
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
    // Set the 'class' attribute of players to 'players active player'
    players.setAttribute("class", "players active player");
}


let playerXIcon = "fas fa-times",
playerOIcon = "far fa-circle",
playerSign = "X",
runBot = true;

/** Handles the click event on a box element.
* Depending on the active player, it sets the innerHTML of the clicked box to the corresponding 
* player icon,
* Removes the active class from the current player, and adds it to the other player.
* Sets the ID of the clicked box to the player's sign (X or O),
* and calls the selectWinner function to check if there is a winner or a draw.
* It disables pointer events on the clicked box and the play board, and triggers the bot function * after a random delay.t
*/
function clickedBox(element){
    if(players.classList.contains("player")){
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        element.setAttribute("id", playerSign);
    }else{
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        element.setAttribute("id", playerSign);
        players.classList.add("active");
    }
    selectWinner();
    element.style.pointerEvents = "none";
    playBoard.style.pointerEvents = "none";
    let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(()=>{
        bot(runBot);
    }, randomTimeDelay);
}

/** Represents the behavior of the bot's move in the game.
* It creates an array of all empty boxes on the board and randomly selects one to make a move.
* It checks which player is currently active and assigns the appropriate sign to the bot's move.
* After making a move, it disables pointer events on the selected box and enables them on the 
* play board.
*/
function bot(){
    let array = [];
    if(runBot){
        playerSign = "O";
        for (let i = 0; i < allBox.length; i++) {
            if(allBox[i].childElementCount == 0){
                array.push(i);
            }
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if(array.length > 0){
            if(players.classList.contains("player")){ 
                playerSign = "X";
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                allBox[randomBox].setAttribute("id", playerSign);
                players.classList.add("active");
            }else{
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto";
        playerSign = "X";
    }
}

/** Takes a classname as a parameter and returns the ID value of the first element
* that matches the selector ".box" + classname.
*/
function getIdVal(classname){
    return document.querySelector(".box" + classname).id;
}

//Checks if the IDs of three specified elements contain a specific player sign.
function checkIdSign(val1, val2, val3, sign){ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}

/** Checks the player sign in each cell of the tic-tac-toe grid and determines if there is a 
* winner or if the match has ended in a draw.
* If there is a winner, it displays the result box and announces the winning player.
*/
function selectWinner(){
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        runBot = false;
        bot(runBot);
        setTimeout(()=>{
            resultBox.classList.add("show");
            playBoard.classList.remove("show");
        }, 700);
        wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
    }else{
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            runBot = false;
            bot(runBot);
            setTimeout(()=>{
                resultBox.classList.add("show");
                playBoard.classList.remove("show");
            }, 700);
            wonText.textContent = "Match has been drawn!";
        }
    }
}

replayBtn.onclick = ()=>{
    window.location.reload();
} 



