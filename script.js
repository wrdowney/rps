let options = ["rock", "paper", "scissors"];
var userWins = 0;
var computerWins = 0;

function game() {
    for(i = 0; i <= 5; i++) {
        playRound();
    }
}

function playRound() {
    let userChoice = userPlay();
    let computerChoice = computerPlay();
    if(userChoice === "rock") {
        if(computerChoice === "paper") {
            computerWins++;
            console.log(`You lost, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
        if(computerChoice === "scissors") {
            userWins++;
            console.log(`You win, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
        if(computerChoice === "rock") {
            console.log(`You tied, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
    }

    if(userChoice === "paper") {
        if(computerChoice === "scissors") {
            computerWins++;
            console.log(`You lost, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
        if(computerChoice === "rock") {
            userWins++;
            console.log(`You win, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
        if(computerChoice === "paper") {
            console.log(`You tied, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
    }

    if(userChoice === "scissors") {
        if(computerChoice === "rock") {
            computerWins++;
            console.log(`You lost, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
        if(computerChoice === "paper") {
            userWins++;
            console.log(`You win, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
        if(computerChoice === "scissors") {
            console.log(`You tied, CPU wins: ${computerWins}, Your Wins: ${userWins}`);
        }
    }
}

function computerPlay () {
    return options[Math.floor(Math.random() * 4)];
}

function userPlay() {
    let choice = prompt("Enter rock, paper, or scissors:");
    choice = choice.toLowerCase();
    return choice;
}

game();