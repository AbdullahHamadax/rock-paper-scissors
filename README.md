# Rock Paper Scissors Game

This project implements a simple game of Rock Paper Scissors that is played entirely through the console. It includes JavaScript logic to generate computer choices, accept user inputs, play rounds, and declare a winner after 5 rounds.

## Project Structure

- **index.html**: HTML file with a script tag linking to the JavaScript file.
- **script.js**: External JavaScript file containing the game logic.

## Setup

To run the game:

1. Clone this repository to your local machine.
2. Open `index.html` in your web browser.
3. Open the browser console to view game messages and results.

## How to Play

1. The game is played against the computer for 5 rounds.
2. For each round, you will be prompted to enter your choice: rock, paper, or scissors.
3. The computer randomly selects its choice.
4. The winner of each round is determined based on the classic rules:
   - Rock beats Scissors
   - Scissors beats Paper
   - Paper beats Rock
5. The scores are displayed after each round, and the overall winner is declared at the end of 5 rounds.

## Project Implementation Details

- **getComputerChoice**: Generates a random choice for the computer.
- **getHumanChoice**: Prompts the user for their choice and validates it.
- **playRound**: Compares the choices and determines the winner for each round.
- **playGame**: Controls the flow of the game by calling `playRound` for 5 rounds and updating scores.
- **resetGame**: Resets the scores after the 5 rounds.
- **determineFinalWinner**: determine the overall winner after the 5 rounds are over.

## Technologies Used

- JavaScript

## Acknowledgments

This project was created as part of [The Odin Project](https://www.theodinproject.com/dashboard) to practice JavaScript programming fundamentals.
