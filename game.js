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

const result = document.querySelector('.results');
const finalResult = document.querySelector('.play-section');
const buttons = document.querySelectorAll('button');
const playerChoices = document.querySelector('.player-choice');
const computerChoices = document.querySelector('.computer-choice');
const player = document.querySelector('.player');
player.textContent = `Your scores: ${playerScore}`;
const computer = document.querySelector('.computer');
computer.textContent = `Computer scores: ${computerScore}`;

buttons.forEach((button) => {
  button.addEventListener('click', e => {
    button.classList.add('playing');
    computerChoice = getComputerChoice();
    console.log(computerChoice);
    if (playerScore < 5 && computerScore < 5) {
      result.textContent = `${play(computerChoice, e.target.textContent)}`;
      playerChoices.textContent = `${e.target.textContent}`;
      computerChoices.textContent = `${computerChoice}`;
      player.textContent = `Your scores: ${playerScore}`;
      computer.textContent = `Computer scores: ${computerScore}`;

      if (playerScore === 5) {
        finalResult.textContent = 'Hmm you are lucky...';
        finalResult.style.cssText = "color: darkgreen; font-size: 40px; text-align: center;";
      }
      else if (computerScore === 5) {
        finalResult.textContent = 'Oops you lose...';
        finalResult.style.cssText = "color: #D22B2B; font-size: 40px; text-align: center;";
      }
    }
  })
});

function stopTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

buttons.forEach(button => button.addEventListener('transitionend',stopTransition));

