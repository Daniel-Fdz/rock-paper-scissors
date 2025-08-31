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

let humanScore = 0;
  let computerScore = 0;
  const resultsContainer = document.querySelector(".results-container");
  const para = document.createElement("p");
  const scoreBoard = document.querySelector(".score-container");
  resultsContainer.appendChild(scoreBoard);

  function playRound(humanChoice) {
      const computerSelection = getComputerChoice();
      if (humanChoice === "rock" && computerSelection === "rock" ||
          humanChoice === "paper" && computerSelection === "paper" ||
          humanChoice === "scissors" && computerSelection === "scissors") {
          para.textContent = "It's a tie!";
          resultsContainer.appendChild(para);
      } else if (humanChoice === "rock" && computerSelection === "scissors" ||
              humanChoice === "paper" && computerSelection === "rock" ||
              humanChoice === "scissors" && computerSelection === "paper") {
          humanScore++;
          para.textContent = `You win, ${humanChoice} beats ${computerSelection}!`;
          resultsContainer.appendChild(para);
      } else if (humanChoice === "rock" && computerSelection === "paper" ||
              humanChoice === "paper" && computerSelection === "scissors" ||
              humanChoice === "scissors" && computerSelection === "rock") {
          computerScore++;
          para.textContent = `You lose, ${computerSelection} beats ${humanChoice}!`;
          resultsContainer.appendChild(para);
      }
      
      scoreBoard.innerText = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`;

      if (humanScore === 5) {
          para.textContent = "Congratulations! You won the game!";
          resultsContainer.appendChild(para);
          resetGame();
      } else if (computerScore === 5) {
          para.textContent = "Sorry! You lost the game.";
          resultsContainer.appendChild(para);
          resetGame();
      }
  }

  const body = document.querySelector('body');
  body.addEventListener("click", e => {
    let target = e.target;
    playRound(target.id);
  });

  function resetGame() {
      humanScore = 0;
      computerScore = 0;
      scoreBoard.innerText = `Human Score: ${humanScore}\nComputer Score: ${computerScore}`;
  }

