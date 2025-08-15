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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game, better luck next time.");
    } else {
        console.log("It's a tie!");
    }
}

playGame();



