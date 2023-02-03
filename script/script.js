/* getComputerChoice function randoms the computer choice between Laser, Field and Grenade.
It does so by initializing the variable which will store the choice and initializing variable for random value. 
Randoming a value in range 1-3.
Depending on multiplied value it chooses either Laser, Field or Grenade. */

function getComputerChoice() {
    let choice;
    let randomVal = Math.floor(Math.random() * 3);

    if (randomVal === 0) {
        choice = "Laser";
    } else if (randomVal === 1) {
        choice = "Field";
    } else {
        choice = "Grenade";
    }

    return choice;
}

/* play is a function that simulates one round of Laser Field Grenade game.
play has two parameters playerSelection which is the choice of the player and computerSelection which is computerSelection.
First the function needs to take any combination of upper and lower case characters in user input and understand it.
The input needs to be transformed to uniform style with only first character capitalized.
The variable where the returned string will be stored is initialized.
The inputs are compared to determine the winner.
The string is updated with respect to comparison results.
For Draw, the string is concatenated with Draw! Laser  
The string is updated with respect to the match up. */

function calcRoundResults(playerSelection, computerSelection) {
    let roundConclusion;
    let roundResult;

    if (playerSelection === computerSelection) {
        roundConclusion = `Draw! ${playerSelection} equals ${computerSelection}`;
        roundResult = 0;
    } else if ((playerSelection === "Laser" && computerSelection === "Grenade") || 
    (playerSelection === "Grenade" && computerSelection === "Field") || 
    (playerSelection === "Field" && computerSelection === "Laser")) {
        roundConclusion = `You win! ${playerSelection} beats ${computerSelection}`;
        roundResult = 1;
    } else {
        roundConclusion = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult = -1;
    }
    
    console.log(roundConclusion);
    return roundResult;
}

/* This function initiates a game and loops through the number of rounds.
The function prompts user for input until it is valid utilizing while loop.
The round results are calculated by previously created function. 
Return values from the function are used to calculate sum of rounds.
If the sum of rounds is negative, it means that the player, lost.
For 0 its a draw.
For positive it is a win.*/

function game() {
    let keepGoing;
    let playerChoice;
    let gameResult = 0;

    /*for (let i = 0; i < 5; i++) {
        keepGoing = true;
        while (keepGoing) {
            playerChoice = prompt("Choose Laser, Field or Grenade.").toLowerCase();
            if (playerChoice === "Laser" || playerChoice === "Field" || playerChoice === "Grenade") {
                keepGoing = false;
            }
        }
        gameResult += calcRoundResults(playerChoice, getComputerChoice());
    }*/

    if (gameResult > 0) {
        console.log("You won!");
    } else if (gameResult < 0) {
        console.log("You lose!");
    } else {
        console.log("Its a draw!");
    }
}

// call the game
const buttons = document.querySelectorAll('button');
buttons.forEach(button => { 
    button.addEventListener('click', () => calcRoundResults(button.dataset.move, getComputerChoice()))
});
//game()