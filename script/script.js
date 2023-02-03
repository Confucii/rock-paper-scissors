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

/* calcRoundResults is a function that simulates one round of Laser Field Grenade game.
calcRoundResults has two parameters playerSelection which is the choice of the player and computerSelection which is computerSelection.
The variable where the returned string will be stored is initialized.
Text permutations are determined by key-value pairs of words associated with specific choice
The inputs are compared to determine the winner.
The string is updated with respect to comparison results. */

function calcRoundResults(playerSelection, computerSelection, roundResult, score) {
    const names = {
        "Laser" : ["Laser Gun", "is faster than"],
        "Field" : ["Force Field", "deflects"],
        "Grenade" : ["EMP Grenade", "shatters"]
    };

    if (playerSelection === computerSelection) {
        roundResult.textContent = "It's a tie!";
    } else if ((playerSelection === "Laser" && computerSelection === "Grenade") || 
    (playerSelection === "Grenade" && computerSelection === "Field") || 
    (playerSelection === "Field" && computerSelection === "Laser")) {
        roundResult.textContent = `You win! ${names[playerSelection][0]} ${names[playerSelection][1]} enemy ${names[computerSelection][0]}.`;
        score[0] += 1
    } else {
        roundResult.textContent = `You lose! ${names[computerSelection][0]} ${names[computerSelection][1]} your ${names[playerSelection][0]}.`;
        score[1] += 1
    }
    return score;
}

//this function controls the game flow, restarting the game and outputing the results with respect to game flow.
function game(score, scoreDiv, buttons) {
    if (score[0] < 5 && score[1] < 5) {
        scoreDiv.textContent = `${score[0]}-${score[1]}`;
    } else if (score[0] === 5) {
        scoreDiv.textContent = `Congrats! You have managed to survive with score: ${score[0]}-${score[1]}.`;
        restartDiv.setAttribute("style", "background-color: orange");
        restartDiv.textContent = `The game will restart in 5 seconds.`;
        gameEnd(score, buttons);
        setTimeout(gameStart, 5000, buttons);
    } else {
        scoreDiv.textContent = `Damn! You expired with score: ${score[0]}-${score[1]}.`;
        restartDiv.setAttribute("style", "background-color: orange");
        restartDiv.textContent = `The game will restart in 5 seconds.`;
        gameEnd(score, buttons);
        setTimeout(gameStart, 5000, buttons);
    }
}

//when the button is clicked, change its style and calculate the round results
function clickButton() {
    this.classList.remove('button-pushed');
    this.classList.add('button-pushed');
    game(calcRoundResults(this.dataset.move, getComputerChoice(), roundResult, score), scoreDiv, buttons);
}

//transition back
function removeClass(e) {
    if (e.propertyName !== 'box-shadow') return;
    this.classList.remove('button-pushed');
}

//restart the game state, reinstate interactive parts
function gameStart(buttons) {
    restartDiv.textContent = "";
    scoreDiv.textContent = "0-0"
    restartDiv.setAttribute("style", "background-color: none");
    roundResult.textContent = "Another battle is nigh!"
    buttons.forEach(button => { 
        button.addEventListener('click', clickButton);
    });
}

//remove the interactivity, nullify scores
function gameEnd(score, buttons) {
    score[0] = 0;
    score[1] = 0;
    buttons.forEach(button => { 
        button.removeEventListener('click', clickButton);
    });
}

//initialize needed variables
const buttons = document.querySelectorAll('button');
const roundResult = document.querySelector('#round-res');
const scoreDiv = document.querySelector('#score');
const restartDiv = document.querySelector('#restart');
const score = [0, 0];

//Initialize event listeners for buttons
buttons.forEach(button => { 
    button.addEventListener('click', clickButton);
    button.addEventListener('transitionend', removeClass);
});