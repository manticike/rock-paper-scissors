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

// A function to play a single round of the rps game
function playRound(humanChoice, computerChoice) {
  if(((humanChoice === 'rock') && (computerChoice === 'scissors')) || ((humanChoice === 'paper') && (computerChoice === 'rock')) || ((humanChoice === 'scissors') && (computerChoice === 'paper'))){
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

// A function to play the game 5 times
function playGame() {
  for(let i = 0; i < 5; i++){
    const computerSelection = getComputerChoice();
    let humanSelection = getHumanChoice();
    // Calling the function playRound to play the game 5 times
    console.log(playRound(humanSelection, computerSelection));
    console.log(`Your Score is: ${humanScore} and computer score is ${computerScore}`);
  } 
}

// calling the function for it to run
playGame();