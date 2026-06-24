let computerChoice = "";
let humanChoice = "";
let computerScore = 0;
let humanScore = 0;
let roundAnnouncement = "";

function getComputerChoice() {
    const min = 1;
    const max = 3;
    let randNum = Math.floor(Math.random() * 3) + 1;

    if (randNum == 1 ) {
        computerChoice = "Rock";
    } else if(randNum == 2) {
        computerChoice = "Paper";
    } else if (randNum == 3) {
        computerChoice = "Scissors";
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper, or Scissors? ");

    if (input == "Rock") {
        humanChoice = input;
    } else if (input == "Paper") {
        humanChoice = input;
    } else if (input == "Scissors") {
        humanChoice = input;
    } 
}

function playRound() {

    if (humanChoice == "Rock" && computerChoice == "Rock") {
        roundAnnouncement = "TIE!"
    } else if (humanChoice = "Rock" && computerChoice == "Paper") {
        roundAnnouncement = "You lose! Paper beats Rock!"
        computerScore++;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        roundAnnouncement = "You win! Rock beats Scissors!"
        humanScore++;
    }
}

getHumanChoice();
getComputerChoice();
playRound();

console.log(humanChoice);
console.log(computerChoice);
console.log(roundAnnouncement);
console.log(humanScore + ", " + computerScore);

