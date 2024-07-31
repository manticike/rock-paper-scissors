let humanScore = 0;
let computerScore = 0;

const playerButton = document.querySelectorAll('.rps-btn');
const scores = document.querySelector('.scores');
const playerPoints = document.querySelector('#playerScores');
const computerPoints = document.querySelector('#computerScores');
const roundResults = document.querySelector('#roundWinner');
const restartGame = document.querySelector('#reset-game');
const currentYear = document.querySelector('#current-year');

currentYear.textContent = new Date().getFullYear();
playerButton.forEach(button => { button.addEventListener('click', getPlayerChoice) });

// A function to disable the buttons when a player reaches 5 point
function disableButtons() {
  playerButton.forEach(button => {
    button.disabled = true
  });
}

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
    roundWinner.textContent = `You Won!\n ${playerSelection} beats ${computerChoice}`;

    playerPoints.textContent = ++humanScore;
    if (humanScore == 5) {
      disableButtons();
      roundResults.textContent = 'You won! Would you like to play Again?';
    }
  }
  
  else if (playerSelection === computerChoice) {
    roundWinner.textContent = `It's a Tie\n You chose ${playerSelection} and computer chose ${computerChoice}`;
  }
  
  else {
    roundWinner.textContent = `You Lose!\n ${computerChoice} beats ${playerSelection}`;
    computerPoints.textContent = ++computerScore;

    if (computerScore == 5) {
      disableButtons();
      roundResults.textContent = 'Computer won! Would you like to play Again?';
    }
  }
}

// A function to get the player's choice
function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  playRound(playerSelection, getComputerChoice());
}

restartGame.addEventListener('click', function refreshGame() {
  window.location.reload();
});


