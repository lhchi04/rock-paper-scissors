let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random()*3)];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);
let playerChoice = prompt('Enter your choice:');
playerChoice = playerChoice.toLowerCase();
function play(computerChoice, playerChoice) {
  if (computerChoice === 'rock') {
    if (playerChoice === 'rock') {
      return 'draw';
    }
    else {
      computerScore++;
      return 'computer wins'; 
    }
  }
  else if (computerChoice === 'paper') {
    if (playerChoice === 'paper') {
      return 'draw';
    }
    else {
      playerScore++;
      return 'you win';
    }
  }
  else {
    if (playerChoice === 'scissors') {
      return 'draw';
    }
    else if (playerChoice === 'rock') {
      playerScore++;
      return 'you win';
    }
    else {
      computerScore++;
      return 'computer wins';
    }
  }
}
console.log(play(computerChoice,playerChoice));


for (let i = 0; i < 5; i++) {
  let computerSelection = getComputerChoice();
  let playerSelection = prompt('Enter your choice:');
  playerSelection = playerSelection.toLowerCase();
  console.log(play(computerSelection, playerSelection));
}

console.log(playerScore);
