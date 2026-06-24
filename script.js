let computerChoiceString = "";
let humanChoiceString = "";
let computerChoiceInt = 0;
let humanChoiceInt = 0;
let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const min = 1;
    const max = 3;
    let randNum = Math.floor(Math.random() * 3) + 1;
    computerChoiceInt = randNum;

    if (randNum == 1 ) {
        computerChoiceString = "Rock";
    } else if(randNum == 2) {
        computerChoiceString = "Paper";
    } else if (randNum == 3) {
        computerChoiceString = "Scissors";
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper, or Scissors? ");

    if (input == "Rock") {
        humanChoiceString = input;
        humanChoiceInt = 1;
    } else if (input == "Paper") {
        humanChoiceString = input;
        humanChoiceInt = 2;
    } else if (input == "Scissors") {
        humanChoiceString = input;
        humanChoiceInt = 3;
    } 
}

getComputerChoice();
getHumanChoice();

console.log(humanChoiceString);
console.log(humanChoiceInt);

console.log(computerChoiceString);
console.log(computerChoiceInt);