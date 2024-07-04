// Getting computer's choice
function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3);

  let computerSelect;
  switch(computerChoice) {
    case 0:
      computerSelect = 'rock';
      break;
    case 1:
      computerSelect = 'paper';
      break;
    case 2:
      computerSelect = 'scissors';
  }
  return `Computer chooses ${computerSelect}`;
}

// Getting the humans choice
function getHumanChoice(choice) {

  let playerChoice;

  switch(choice) {
    case 1:
      playerChoice = 'rock';
      break;
    case 2:
      playerChoice = 'paper';
      break;
    case 3:
      playerChoice = 'scissors';
      break;
  }
  return playerChoice;
}

// Ask the human for his choice
let userInput = prompt("Please enter a number: 1 = rock, 2 = paper, 3 = scissors" );

let humanSelection = parseInt(userInput);

console.log(getHumanChoice(humanSelection));

console.log(getComputerChoice());
