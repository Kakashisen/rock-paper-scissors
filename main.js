let humanScore = 0, computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if(num <= 0.33) {
        return "rock";
    } else if(num > 0.33 && num <= 0.66) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = String(prompt("Enter rock, paper or scissors"));
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats Scissor");
        humanScore++;
    } else if(humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissor beats Paper");
        humanScore++;
    } else if(humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if(humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if(humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if(humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } 
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore) {
        console.log("${humanScore} ${computerScore}, You win!");
    } else {
        console.log("${humanScore} ${computerScore}, You lose!");
    }
}

playGame();