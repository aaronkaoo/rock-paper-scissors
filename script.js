const results = document.querySelector("#results")
let score = document.createElement("p")
score.classList.add("score")
score.textContent = ""
results.appendChild(score)

function getComputerChoice() {
    let computerChoice = Math.random()
    if (computerChoice < (1/3)) {
        computerChoice = "rock"
    }
    else if ((computerChoice >= (1/3)) && (computerChoice < (2/3))) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice
}

let humanScore = 0
let computerScore = 0
let rounds = 0
const maxRounds = 5

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === computerChoice)) {
        score.textContent = "Draw! Let's try again."
        playRound(getHumanChoice(), getComputerChoice())
        return
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1
        score.textContent = "You win! Rock beats scissors."
        rounds++
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1
        score.textContent = "You lose! Paper beats rock."
        rounds++
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1
        score.textContent = "You win! Paper beats rock."
        rounds++
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1
        score.textContent = "You lose! Paper beats scissors."
        rounds++
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1
        score.textContent = "You lose! Rock beats scissors."
        rounds++
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        score.textContent = "You win! Scissors beats paper."
        rounds++
    }
    console.log("Your score: " + humanScore)
    console.log("My score: " + computerScore)

    if(rounds === maxRounds)
if (humanScore > computerScore) {
    score.textContent = "Congratulations, you won! Well played."
}
else if (humanScore < computerScore) {
    score.textContent = "I won! Get rekt nerd"
}
else if (humanScore === computerScore) {
    score.textContent = "We tied. Bruh"
}
}

document.addEventListener("DOMContentLoaded", () => {
      const rockButton = document.querySelector("#rockButton");
      rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
      });

      const paperButton = document.querySelector("#paperButton");
      paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
      });

      const scissorsButton = document.querySelector("#scissorsButton");
      scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
      });
    });