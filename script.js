// randomly returns rock, paper, or scissors
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const result = (Math.floor(Math.random() * choices.length));
    return choices[result];
}

//refreshes page
function reset() {
    document.location.href = '';
}

// replays the game when clicking "Play Again"
function replay() {
    const playAgain = document.querySelector('#play-again');
    playAgain.addEventListener('click', (event) => {
        reset();
    });
}

function gameOver() {
    if (playerTally === 5) {
        result.innerHTML = 'Nice Job, You Win!';
        btnContainer.innerHTML = `<button id='play-again'>Play Again</button>`;
        replay();
    } else if (computerTally === 5) {
        result.innerHTML = 'Game Over. Try Again.';
        btnContainer.innerHTML = `<button id='play-again'>Play Again</button>`;
        replay();
    }    
}

// global variables
let playerTally = 0;
let computerTally = 0;
const playerScore = document.getElementById('player-score');
const computerScore = document.getElementById('computer-score');
const result = document.querySelector('.result h3');
const btnContainer = document.querySelector('.btn-container');

// plays one round of rock, paper, scissors
function playRound(playerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerSelection = computerPlay();
    
    if (playerTally < 5 && computerTally < 5) {
        if (playerChoice === 'rock' && computerSelection === 'scissors') {
            playerTally++;
            playerScore.innerHTML = playerTally;
            result.innerHTML = `You win! Rock beats scissors.`;
            }
        else if (playerChoice === 'rock' && computerSelection === 'paper') {
            computerTally++;
            computerScore.innerHTML = computerTally;
            result.innerHTML = `You Lose! Paper beats rock`;
            }  
        else if  (playerChoice === 'scissors' && computerSelection === 'paper') {
            playerTally++;
            playerScore.innerHTML = playerTally;
            result.innerHTML = `You Win! Scissors beats paper.`;
            }
        else if  (playerChoice === 'scissors' && computerSelection === 'rock') {
            computerTally++;
            computerScore.innerHTML = computerTally;
            result.innerHTML = `You Lose! Rock beats Scissors.`;
            }
        else if  (playerChoice === 'paper' && computerSelection === 'rock') {
            playerTally++;
            playerScore.innerHTML = playerTally;
            result.innerHTML = `You Win! Paper beats rock.`;
            }
        else if  (playerChoice === 'paper' && computerSelection === 'scissors') {
            computerTally++;
            computerScore.innerHTML = computerTally;
            result.innerHTML = `You Lose! Scissors beats paper.`;
            }
        else if (playerChoice === computerSelection) {
            result.innerHTML = `Tie!`;
        } else {
            computerTally++;
            computerScore.innerHTML = computerTally;
            result.innerHTML = ` You Lose!`;
        }
    } 
    if (playerTally === 5 || computerTally === 5) {
        gameOver();
    }        
}

const options = document.querySelectorAll('button');

function playSelection() {
    options.forEach(button => {
        button.addEventListener('click', (event) => {
            const selection = event.target.innerText;
            playRound(selection);
        })  
    })
}


window.addEventListener('DOMContentLoaded', (event) => {
    playSelection();
});