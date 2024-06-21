function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomChoice == 0) computerChoice = "Paper";
  else if (randomChoice == 1) computerChoice = "Rock";
  else computerChoice = "Scissors";

  return computerChoice;
}

function getHumanChoice() {
  let humanInput = prompt("What do you choose?");
  let humanChoice;

  if (
    humanInput == "S" ||
    humanInput == "s" ||
    humanInput == "Scissors" ||
    humanInput == "scissors"
  ) {
    humanChoice = "Scissors";
  } else if (
    humanInput == "P" ||
    humanInput == "p" ||
    humanInput == "Paper" ||
    humanInput == "paper"
  ) {
    humanChoice = "Paper";
  } else if (
    humanInput == "R" ||
    humanInput == "r" ||
    humanInput == "Rock" ||
    humanInput == "rock"
  ) {
    humanChoice = "Rock";
  }

  return humanChoice;
}

let humanScore = 0,
  computerScore = 0,
  round = 1;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == "Paper" && computerChoice == "Scissors") {
    computerScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    humanScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    computerScore++;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    humanScore++;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    computerScore++;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    humanScore++;
  } else if (
    (humanChoice == "Scissors" && computerChoice == "Scissors") ||
    (humanChoice == "Paper" && computerChoice == "Paper") ||
    (humanChoice == "Rock" && computerChoice == "Rock")
  ) {
    alert("It's a draw!");
  }
  if (computerScore < humanScore) alert("You won round " + round);
  else alert("You lost round " + round);

  console.log(
    "Your choice: " +
      humanChoice +
      " /n " +
      "Computer Choice: " +
      computerChoice
  );
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    let cChoice = getComputerChoice();
    let hChoice = getHumanChoice();
    playRound(hChoice, cChoice);
    round++;
  }
}

playGame();
