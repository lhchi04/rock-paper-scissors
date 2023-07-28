let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random()*3)];
}

const computerChoice = getComputerChoice();
console.log(computerChoice);

function play(computerChoice, playerChoice) {  
  playerChoice = playerChoice.toLowerCase();
  if (computerChoice === 'rock') {
    if (playerChoice === 'rock') {
      return 'draw';
    }
    else {
      if (playerChoice === 'paper') {
        playerScore++;
        return 'you win';
      }
      else {
        computerScore++;
        return 'computer wins'; 
      }
    }
  }
  else if (computerChoice === 'paper') {
    if (playerChoice === 'paper') {
      return 'draw';
    }
    else {
      if (playerChoice === 'rock') {
        computerScore++;
        return 'computer wins';
      }
      else {
        playerScore++;
        return 'you win';
      }
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

const result = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', e => {
    result.textContent = `${play(computerChoice, e.target.textContent)}`;
  })
});
