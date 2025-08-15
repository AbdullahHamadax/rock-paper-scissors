const choiceImages = document.querySelectorAll("img");
const resetBtn = document.querySelector("#reset-button");
const userScore = document.querySelector("#user-score");
const cpuScore = document.querySelector("#cpu-score");
const userResultContainer = document.querySelector("#user-result-container");
const cpuResultContainer = document.querySelector("#cpu-result-container");
const userWin = document.querySelector("#user-win");
const userLose = document.querySelector("#user-lose");
const cpuWin = document.querySelector("#cpu-win");
const cpuLose = document.querySelector("#cpu-lose");
const displayedUserChoice = document.querySelector("#displayed-user-choice");
const displayedCPUChoice = document.querySelector("#displayed-cpu-choice");

let humanScore = 0,
  computerScore = 0;
let gameOver = false;

// Get a random choice for CPU
function getCPUChoice() {
  const randomChoice = Math.floor(Math.random() * 3);
  if (randomChoice === 0) return "rock";
  if (randomChoice === 1) return "paper";
  return "scissors";
}

// Add click events to images
function getUserInput() {
  choiceImages.forEach((img) => {
    img.addEventListener("click", () => {
      if (gameOver) return; // Stop game if someone has won

      let userInput;

      if (img.id === "rock-image") userInput = "rock";
      else if (img.id === "paper-image") userInput = "paper";
      else userInput = "scissors";

      const computerChoice = getCPUChoice();
      gameLogic(userInput, computerChoice);
      determineFinalWinner();
    });
  });
}

// Initialize scores
function initialState() {
  humanScore = 0;
  computerScore = 0;
  userScore.textContent = 0;
  cpuScore.textContent = 0;
  displayedUserChoice.textContent = "You chose: nothing ";
  displayedCPUChoice.textContent = "CPU chose: nothing";
  gameOver = false;

  userWin.textContent = "";
  userLose.textContent = "";
  cpuWin.textContent = "";
  cpuLose.textContent = "";

  userResultContainer.classList.remove(
    "text-green-500",
    "text-red-500",
    "flex",
    "items-center",
    "gap-5"
  );
  cpuResultContainer.classList.remove(
    "text-green-500",
    "text-red-500",
    "flex",
    "items-center",
    "gap-5"
  );
}

// Game logic
function gameLogic(humanChoice, computerChoice) {
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    humanScore++;
  } else if (humanChoice !== computerChoice) {
    computerScore++;
  }

  userScore.textContent = humanScore;
  cpuScore.textContent = computerScore;

  displayedUserChoice.textContent = "You chose: " + humanChoice;
  displayedCPUChoice.textContent = "Cpu chose: " + computerChoice;
}

function determineFinalWinner() {
  if (humanScore === 5) {
    gameOver = true;
    userWin.textContent = "WON 🎉";
    userLose.textContent = "";
    cpuWin.textContent = "";
    cpuLose.textContent = "LOSE 😔";

    userResultContainer.classList.add(
      "text-green-500",
      "flex",
      "items-center",
      "gap-5"
    );
    cpuResultContainer.classList.add(
      "text-red-500",
      "flex",
      "items-center",
      "gap-5"
    );
  } else if (computerScore === 5) {
    gameOver = true;
    cpuWin.textContent = "WON 🤖";
    cpuLose.textContent = "";
    userWin.textContent = "";
    userLose.textContent = "LOSE 😔";

    cpuResultContainer.classList.add(
      "text-green-500",
      "flex",
      "items-center",
      "gap-5"
    );
    userResultContainer.classList.add(
      "text-red-500",
      "flex",
      "items-center",
      "gap-5"
    );
  }
}

// Reset game
function resetGame() {
  initialState();
}

// Start the game
function playGame() {
  initialState();
  getUserInput();
  resetBtn.addEventListener("click", resetGame);
}

playGame();
