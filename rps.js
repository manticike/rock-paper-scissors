let humanScore = 0;
let computerScore = 0;
const playerButton = document.querySelectorAll('.playerChoice');


playerButton.forEach(button => { button.addEventListener('click', getPlayerChoice) });

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
  return computerSelect;
}


// A function to play a single round of the rps game
function playRound(playerSelection, computerChoice) {
  if(((playerSelection === 'rock') && (computerChoice === 'scissors')) || ((playerSelection === 'paper') && (computerChoice === 'rock')) || ((playerSelection === 'scissors') && (computerChoice === 'paper'))){
    console.log(`You win! You chose ${playerSelection} and computer chose ${computerChoice}`);
    humanScore++;
  }
  
  else if (playerSelection === computerChoice) {
    console.log(`It's a tie! You chose ${playerSelection} and computer chose ${computerChoice}`);
  }
  
  else {
    console.log(`You lose! you chose ${playerSelection} and computer chose ${computerChoice}`);
    computerScore++;
  }
}

// A function to get the player's choice
function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  playRound(playerSelection, getComputerChoice());
}
