const choice = ["Rock", "Paper", "Scissors"];

let playerScore=0;
let computerScore=0;

let body = document.querySelector("body");
let buttonPanel = document.querySelector("#button-panel");

let scoreDiv = document.createElement("div");
scoreDiv.textContent = "Score: You - " + playerScore +" | " + "Computer - " + computerScore;
body.insertBefore(scoreDiv, buttonPanel);

let resultDiv = document.createElement("div")

let gameOngoing = true;



game()


function game() {


    let rockButton = document.querySelector("#Rock")
    rockButton.addEventListener("click", () => playRound("Rock"));

    let paperButton = document.querySelector("#Paper")
    paperButton.addEventListener("click",() =>  playRound("Paper"));

    let scissorButton = document.querySelector("#Scissors") 
    scissorButton.addEventListener("click", () => playRound("Scissors"));
}

function playRound(playerSelection) {

    if(gameOngoing) {
    let output = checkWinner(playerSelection);

        
    switch(output[0]) {
        case 1:
            playerScore++;
            break;
        case 0:
            computerScore++;
            break;

    }


    if(playerScore >= 5 || computerScore >=5) {
        scoreDiv.textContent = "Score: You - " + playerScore +" | " + "Computer - " + computerScore;
        body.insertBefore(scoreDiv, buttonPanel);
        let winner = playerScore > computerScore ? "You" : "the Computer";
        resultDiv.textContent = "The winner of the match is " + winner + "!"
        body.appendChild(resultDiv);
        gameOngoing = false;


    } else {


        scoreDiv.textContent = "Score: You - " + playerScore +" | " + "Computer - " + computerScore;
        body.insertBefore(scoreDiv, buttonPanel);
        resultDiv.textContent = output[1];
        body.appendChild(resultDiv);
    }
} else {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
    return;
}





}


function checkWinner (playerSelection) {
    let computerSelection = getComputerChoice();
    if(playerSelection == computerSelection) {
        return [2, "Draw!"];
    } else if(playerSelection.toUpperCase()=="ROCK" && computerSelection.toUpperCase() == "SCISSORS" ||
                playerSelection.toUpperCase()=="PAPER" && computerSelection.toUpperCase() == "ROCK" ||
                playerSelection.toUpperCase()=="SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
        return [1, `You Get a Point! ${playerSelection}(You) beats ${computerSelection}(Computer)`]
    } else {
        return [0, `Your Opponent Gets a Point! ${computerSelection}(Computer) beats ${playerSelection}(You)`]
    }
}


function getComputerChoice() {
    return choice[getRandomIntInclusive(0, 2)];
}



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }