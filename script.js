const choice = ["Rock", "Paper", "Scissors"];

game()


function game() {

    let playerScore=0;
    let computerScore=0;

    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: Rock, Paper or Scissors").trim();
        let computerSelection = getComputerChoice();

        let output = singleRound(playerSelection, computerSelection);

        switch(output[0]) {
            case 1:
                playerScore++;
                break;
            case 0:
                computerScore++;
                break;

        }

        console.log(output[1]);
        console.log(`Score -> Player: ${playerScore} | Computer: ${computerScore}`);

    }
    if(playerScore == computerScore) {
        console.log("It's a draw!")
    } else {
        console.log(playerScore > computerScore ? "Congratulations! You Win the Game!" : "You Lose the Game!");
    }   
}




function singleRound (playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return [2, "Draw!"];
    } else if(playerSelection.toUpperCase()=="ROCK" && computerSelection.toUpperCase() == "SCISSORS" ||
                playerSelection.toUpperCase()=="PAPER" && computerSelection.toUpperCase() == "ROCK" ||
                playerSelection.toUpperCase()=="SCISSORS" && computerSelection.toUpperCase() == "PAPER") {
        return [1, `You Win! ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`]
    } else {
        return [0, `You Lose! ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`]
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