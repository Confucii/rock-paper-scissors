/* getComputerChoice function randoms the computer choice between Rock, paper and scissors.
It does so by initializing the variable which will store the choice and initializing variable for random value. 
Randoming a value in range 1-3.
Depending on multiplied value it chooses either Rock, paper or scissors. */

function getComputerChoice() {
    let choice;
    let randomVal = Math.floor(Math.random() * 3);

    if (randomVal === 0) {
        choice = "Rock";
    } else if (randomVal === 1) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }

    return choice;
}

/* play is a function that simulates one round of rock paper scissors game.
play has two parameters playerSelection which is the choice of the player and computerSelection which is computerSelection.
First the function needs to take any combination of upper and lower case characters in user input and understand it.
The input needs to be transformed to uniform style with only first character capitalized.
The variable where the returned string will be stored is initialized.
The inputs are compared to determine the winner.
The string is updated with respect to comparison results.
For Draw, the string is concatenated with Draw! Rock  
The string is updated with respect to the match up. */

function calcRoundResults(playerSelection, computerSelection) {
    playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1);
    let gameConclusion;

    if (playerSelection === computerSelection) {
        gameConclusion = `Draw! ${playerSelection} equals ${computerSelection}`;
    } else if ((playerSelection === "Rock" && computerSelection === "Scissors") || 
    (playerSelection === "Scissors" && computerSelection === "Paper") || 
    (playerSelection === "Paper" && computerSelection === "Rock")) {
        gameConclusion = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        gameConclusion = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    
    return gameConclusion;
}

