console.log("Welcome to Rock, Paper, Scissors!")
console.log("")

function getComputerChoice() {
    let number = (Math.floor(Math.random() * 3 + 1));
      if (number == 1) {
      return "rock";
    } else if (number == 2) {
      return "paper";
    } else {
      return "scissors";    
    }
  }

//starting player and computer score
  
let playerScore = 0;
let computerScore = 0;

//function to prompt for player choice

function getPlayerChoice() {
return prompt("Choose 'Rock' 'Paper' or 'Scissors'", ).toLowerCase();
}

//function to play one round

function playRound (computerSelection, playerSelection) {
  if (playerSelection == computerSelection) {
  return "Tie Round!";
} else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper") {
  return "You won that round!";
} else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
  return "You lost that round!";
} else {
  return "Im not sure what you entered but it needs to be 'Rock' 'Paper' or 'Scissors'";
}
}

//function to play game multiple times

function playGame() {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice();
  console.log("Player Chose " + playerSelection);
  console.log("Computer Chose " + computerSelection);
  console.log(playRound(computerSelection,playerSelection));
  if (playRound(computerSelection,playerSelection) == "You won that round!") {
    ++playerScore;
} else if (playRound(computerSelection,playerSelection) == "You lost that round!") {
    ++computerScore;
}
  console.log("player score is " + playerScore + " computer score is " + computerScore);
  console.log(" ");
}

//play game 5 times

playGame();
playGame();
playGame();
playGame();
playGame();

//function to print winner

function winner() {
  if (playerScore > computerScore) {
    console.log("You have won!");
} else if (computerScore > playerScore) {
    console.log("Sorry the computer has won!");
} else {
    console.log("No winner.");
}
}

//print winner

winner();