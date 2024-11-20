function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomChoice == 0) computerChoice = "Paper 📃";
  else if (randomChoice == 1) computerChoice = "Rock 🪨";
  else computerChoice = "Scissors ✂️";

  return computerChoice;
}

function getHumanChoice() {
  let humanInput = prompt("What do you choose? ⁉️⁉️");

  if (
    humanInput == "S" ||
    humanInput == "s" ||
    humanInput == "Scissors" ||
    humanInput == "scissors"
  ) {
    humanInput = "Scissors ✂️";
  } else if (
    humanInput == "P" ||
    humanInput == "p" ||
    humanInput == "Paper" ||
    humanInput == "paper"
  ) {
    humanInput = "Paper 📃";
  } else if (
    humanInput == "R" ||
    humanInput == "r" ||
    humanInput == "Rock" ||
    humanInput == "rock"
  ) {
    humanInput = "Rock 🪨";
  }

  return humanInput;
}

let humanScore = 0,
  computerScore = 0,
  round = 1;

function playRound(humanChoice, computerChoice) {
  console.log(
    "Your choice: " + humanChoice + "\n" + "Computer Choice: " + computerChoice
  );

  if (humanChoice === computerChoice) {
    console.log("Conclusion: It's a draw!");
  } else if (
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper")
  ) {
    humanScore++;
    console.log("Conclusion: You won this round!");
  } else {
    computerScore++;
    console.log("Conclusion: You lost this round.");
  }

  console.log(
    "=====Round #" +
      round +
      " scores===== \n" +
      "human score: " +
      humanScore +
      "\n" +
      "computer score: " +
      computerScore
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

console.log(
  "=====Final scores=====\n" +
    "human score: " +
    humanScore +
    "\n" +
    "computer score: " +
    computerScore
);
