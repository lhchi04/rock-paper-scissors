let playerScore = 0;
let computerScore = 0;
let computerChoice;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random()*3)];
}

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
const player = document.querySelector('.player');
player.textContent = `Your scores: ${playerScore}`;
const computer = document.querySelector('.computer');
computer.textContent = `Computer scores: ${computerScore}`;

buttons.forEach((button) => {
  button.addEventListener('click', e => {
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (playerScore < 5 && computerScore < 5) {
      result.textContent = `${play(computerChoice, e.target.textContent)}`;
      player.textContent = `Your scores: ${playerScore}`;
      computer.textContent = `Computer scores: ${computerScore}`;
    }
    else {
      if (playerScore === 5) {
        result.textContent = 'You win 5 rounds!';
      }
      else {
        result.textContent = 'You lose...'
      }
    }
  })
});

