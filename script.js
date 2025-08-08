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

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?")
    if (humanChoice === "Rock"|| humanChoice === "rock" || humanChoice === "R" || humanChoice === "r") {
        humanChoice = "rock"
}
    else if (humanChoice === "Paper" || humanChoice === "paper" || humanChoice === "P" || humanChoice === "p") {
        humanChoice = "paper"
    }
    else if (humanChoice === "Scissors" || humanChoice === "scissors" || humanChoice === "S" || humanChoice === "s") {
        humanChoice = "scissors"
}
    else {
        console.log("Invalid choice. Try again.")
        return getHumanChoice()
    }
    return humanChoice
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === computerChoice)) {
        console.log("Draw! Let's try again.")
        playRound(getHumanChoice(), getComputerChoice())
        return
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore += 1
        console.log("You win! Rock beats scissors.")
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore += 1
        console.log("You lose! Paper beats rock.")
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore += 1
        console.log("You win! Paper beats rock.")
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore += 1
        console.log("You lose! Paper beats scissors.")
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore += 1
        console.log("You lose! Rock beats scissors.")
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore += 1
        console.log("You win! Scissors beats paper.")
    }
    console.log("Your score: " + humanScore)
    console.log("My score: " + computerScore)
}

function playGame() {
let humanSelection = getHumanChoice()
let computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

humanSelection = getHumanChoice()
computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

humanSelection = getHumanChoice()
computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

humanSelection = getHumanChoice()
computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

humanSelection = getHumanChoice()
computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

if (humanScore > computerScore) {
    console.log("Congratulations, you won! Well played.")
}
else if (humanScore < computerScore) {
    console.log("I won! Get rekt nerd")
}
else if (humanScore = computerScore) {
    console.log("We tied. Bruh")
}
}

playGame()