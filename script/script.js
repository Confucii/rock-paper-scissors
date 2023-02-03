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
The variable where the returned string will be stored is initialized.
Text permutations are determined by key-value pairs of words associated with specific choice
The inputs are compared to determine the winner.
The string is updated with respect to comparison results.
For Draw, the string is concatenated with Draw!
The string is updated with respect to the match up. */

function calcRoundResults(playerSelection, computerSelection) {
    let roundConclusion;
    let roundResult;

    const names = {
        "Laser" : ["Laser Gun", "is faster than"],
        "Field" : ["Force Field", "deflects"],
        "Grenade" : ["EMP Grenade", "shatters"]
    }

    if (playerSelection === computerSelection) {
        roundConclusion = `It's a tie! Both choose similar weapons.`;
        roundResult = 0;
    } else if ((playerSelection === "Laser" && computerSelection === "Grenade") || 
    (playerSelection === "Grenade" && computerSelection === "Field") || 
    (playerSelection === "Field" && computerSelection === "Laser")) {
        roundConclusion = `You win! ${names[playerSelection][0]} ${names[playerSelection][1]} ${names[computerSelection][0]}.`;
        roundResult = 1;
    } else {
        roundConclusion = `You lose! ${names[computerSelection][0]} ${names[computerSelection][1]} ${names[playerSelection][0]}.`;
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

function clickButton() {
    this.classList.remove('button-pushed');
    this.classList.add('button-pushed');
    calcRoundResults(this.dataset.move, getComputerChoice());
}

function removeClass(e) {
    if (e.propertyName !== 'box-shadow') return;
    this.classList.remove('button-pushed');
}

// call the game
const buttons = document.querySelectorAll('button');
buttons.forEach(button => { 
    button.addEventListener('click', clickButton);
    button.addEventListener('transitionend', removeClass)
});

//game()