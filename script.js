let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Choose between rock, paper and scissors:").toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock" ||
        humanChoice === "paper" && computerChoice === "paper" ||
        humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
               humanChoice === "paper" && computerChoice === "rock" ||
               humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
    } else if (humanChoice === "rock" && computerChoice === "paper" ||
               humanChoice === "paper" && computerChoice === "scissors" ||
               humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



