// ROCK PAPER SCISSORS

// array storing possible choices
const choices = ["rock", "paper", "scissors"];
// html references for the ui
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");

// initializing player + computer scores
let playerScore = 0;
let computerScore = 0;

// tracks the rounds and limits to 5 rounds
let roundCount = 0;
const totalRounds = 5;


function playGame(playerChoice) {
// once the game reaches 5 rounds, end the game
    if (roundCount >= totalRounds) {
        resultDisplay.textContent = "Game over, please refresh.";
        return; // closes the function
    }

    // computer randomizes rock, paper, or scissors
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = ""; // stores the result in a variable

    // determines the result between the player and the computer
    if (playerChoice === computerChoice) {
        result = "IT'S A TIE"; // game ties
    } else {
        // switch statement to check the win
        switch (playerChoice) {
            case "rock":
                result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE! 🫵";
                break;
            case "paper":
                result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE! 🫵";
                break;
            case "scissors":
                result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE! 🫵";
                break;
        }
    }

    // updating the ui with the choices
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // removing the color class with the new result
    resultDisplay.classList.remove("greenText", "redText");

    // updating the score and applying color based on the result
    switch (result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText"); // green for win
            playerScore++;
            playerScoreDisplay.textContent = playerScore; // update the ui
            break;
        case "YOU LOSE! 🫵":
            resultDisplay.classList.add("redText"); // red for loss
            computerScore++;
            computerScoreDisplay.textContent = computerScore; // update the ui
            break;
    }

// increment round count
roundCount++; // in order to track the rounds

// will show final winner after 5 rounds
if (roundCount === totalRounds) {
    setTimeout(() => { // to give a pause showing the final result
        if (playerScore > computerScore) {
            resultDisplay.textContent = "Don't be a sore winner!";
        } else if (playerScore < computerScore) {
            resultDisplay.textContent = "You lost, haha, you suck! 🫵";
        } else {
            resultDisplay.textContent = "Congrats, you both suck!";
        }
    }, 500); // delay to show the final display
}
}
