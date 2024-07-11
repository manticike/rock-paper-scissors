// Variables to keep track of the scores
let humanScore = 0;
let computerScore = 0;

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

// A function to get the human's choice
function getHumanChoice(){
  let playerInput = prompt("Enter one of these: rock, paper, scissors ");

  // Convert the user input into a lowercase
  let humanChoice = playerInput.toLowerCase();
  return humanChoice;
}

const playerSelection = document.querySelector('#playerChoice');

// Event listener to handle when a player clicks any button of his choice

playerSelection.addEventListener('click', (event) => {
  let target = event.target;

  switch(target.id) {
    case 'rock':
      console.log('Human clicked the rock button');
      break;
    case 'paper':
      console.log('Human clicked the paper button');
      break;
    case 'scissors':
      console.log('Human clicked the scissors button');
      break;
  }
});

// A function to play a single round of the rps game
function playRound(humanChoice, computerChoice) {
  if(((humanChoice === rockBtn) && (computerChoice === 'scissors')) || ((humanChoice === paperBtn) && (computerChoice === 'rock')) || ((humanChoice === scissorsBtn) && (computerChoice === 'paper'))){
    console.log(`You win! You chose ${humanChoice} and computer chose ${computerChoice}`);
    humanScore++;
  }
  
  else if (humanChoice === computerChoice) {
    console.log(`It's a tie! You chose ${humanChoice} and computer chose ${computerChoice}`);
  }
  
  else {
    console.log(`You lose! you chose ${humanChoice} and computer chose ${computerChoice}`);
    computerScore++;
  }
}

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

// rockBtn.addEventListener('click', function rockButton() {
//   playRound()
// });

// I've commented this logic that plays the game 5 times. I'll come back later
// A function to play the game 5 times
// function playGame() {
//   for(let i = 0; i < 5; i++){
//     const computerSelection = getComputerChoice();
//     let humanSelection = getHumanChoice();
//     // Calling the function playRound to play the game 5 times
//     console.log(playRound(humanSelection, computerSelection));
//     console.log(`Your Score is: ${humanScore} and computer score is ${computerScore}`);
//   } 
// }

playRound()
// calling the function for it to run
playGame();