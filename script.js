function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomChoice == 0) computerChoice = "Paper";
  else if (randomChoice == 1) computerChoice = "Rock";
  else computerChoice = "Scissors";

  return computerChoice;
}

function getHumanChoice() {
  const humanInput = prompt("What do you choose?").toLowerCase().trim();
  let humanChoice;

  if (humanInput == "s" || humanInput == "scissors") {
    humanChoice = "Scissors";
  } else if (humanInput == "p" || humanInput == "paper") {
    humanChoice = "Paper";
  } else if (humanInput == "r" || humanInput == "rock") {
    humanChoice = "Rock";
  } else {
    alert("Invalid choice. Please choose Rock, Paper, or Scissors.");
    return getHumanChoice();
  }

  return humanChoice;
}

let humanScore = 0,
  computerScore = 0,
  round = 1;

function playRound(humanChoice, computerChoice) {
  let result;

  if (
    (humanChoice == "Paper" && computerChoice == "Rock") ||
    (humanChoice == "Scissors" && computerChoice == "Paper") ||
    (humanChoice == "Rock" && computerChoice == "Scissors")
  ) {
    humanScore++;
    result = "win";
  } else if (humanChoice === computerChoice) {
    result = "draw";
  } else {
    computerScore++;
    result = "lose";
  }

  if (result === "win") {
    console.log("You won round " + round);
  } else if (result === "lose") {
    console.log("You lost round " + round);
  } else {
    console.log("It's a draw in round " + round);
  }

  console.log(
    "Your choice: " + humanChoice + "  " + "Computer choice: " + computerChoice
  );
  console.log(
    "Your score: " + humanScore + "  " + "Computer score: " + computerScore
  );
}

function determineFinalWinner() {
  if (computerScore < humanScore) {
    console.log("You have higher overall score! You won the game! 🎉");
  } else if (computerScore > humanScore) {
    console.log("Computer has higher overall score! You lost the game! 😞");
  } else {
    console.log("Both of you have the same overall score! It's a tie! 🤝");
  }
}

function resetGame() {
  (humanScore = 0), (computerScore = 0), (round = 1);
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let cChoice = getComputerChoice();
    let hChoice = getHumanChoice();
    playRound(hChoice, cChoice);
    round++;
  }
  determineFinalWinner();
  resetGame();
}

playGame();
