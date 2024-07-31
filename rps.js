let humanScore = 0;
let computerScore = 0;

const playerButton = document.querySelectorAll('.rps-btn');
const scores = document.querySelector('.scores');
const playerPoints = document.querySelector('#playerScores');
const computerPoints = document.querySelector('#computerScores');
const roundResults = document.querySelector('#roundWinner');

const restartGame = document.querySelector('#reset-game');

// Update the footer with the current year
const currentYear = document.querySelector('#current-year');

currentYear.textContent = new Date().getFullYear();

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
    roundWinner.textContent = `You Won!\n ${playerSelection} beats ${computerChoice}`;

    playerPoints.textContent = ++humanScore;
  }
  
  else if (playerSelection === computerChoice) {
    roundWinner.textContent = `It's a Tie\n You chose ${playerSelection} and computer chose ${computerChoice}`;
  }
  
  else {
    roundWinner.textContent = `You Lose!\n ${computerChoice} beats ${playerSelection}`;
    computerPoints.textContent = ++computerScore;
  }
}

// A function to get the player's choice
function getPlayerChoice(e) {
  let playerSelection = (e.target.id);
  playRound(playerSelection, getComputerChoice());
}


function playGame() {
  for(let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    let humanSelection = getPlayerChoice(e);
    // Calling the function playRound to play the game 5 times
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Your Score is: ${humanScore} and computer score is ${computerScore}`);
  } 
}

// A button to reset the game
restartGame.addEventListener('click', function refreshGame() {
  window.location.reload();
});


