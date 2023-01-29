/* getComputerChoice function randoms the computer choice between Rock, paper and scissors.
It does so by initializing the variable which will store the choice and initializing variable for random value. 
Randoming a value in range 1-3.
Depending on multiplied value it chooses either Rock, paper or scissors.*/

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

