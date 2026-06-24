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
        computerChoice = "rock";
    } else if(randNum == 2) {
        computerChoice = "paper";
    } else if (randNum == 3) {
        computerChoice = "scissors";
    }
}

function getHumanChoice() {
    const input = prompt("Rock, Paper, or Scissors? ");
    const lowerdInput = input.toLowerCase();

    if (lowerdInput == "rock") {
        humanChoice = lowerdInput;
    } else if (lowerdInput == "paper") {
        humanChoice = lowerdInput;
    } else if (lowerdInput == "scissors") {
        humanChoice = lowerdInput;
    } 
}

function playRound() {
    
    if (humanChoice == "rock" && computerChoice == "rock") {
        roundAnnouncement = "TIE!"
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        roundAnnouncement = "You lose! Paper beats Rock!"
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        roundAnnouncement = "You win! Rock beats Scissors!"
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        roundAnnouncement = "TIE!"
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        roundAnnouncement = "You lose! Scissors beats Paper!"
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        roundAnnouncement = "You win! Paper beats Rock!"
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        roundAnnouncement = "TIE!"
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        roundAnnouncement = "You lose! Rock beats Scissors!"
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        roundAnnouncement = "You win! Scissors beats Paper!"
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

