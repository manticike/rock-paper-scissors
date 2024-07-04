
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

console.log(getComputerChoice());