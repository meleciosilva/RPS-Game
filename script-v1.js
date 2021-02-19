// randomly returns rock, paper, or scissors
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const result = (Math.floor(Math.random() * choices.length));
    return choices[result];
}

// global variables
let computerScore = 0;
let playerScore = 0;
computerSelection = computerPlay();

// plays one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        console.log( `You win! Rock beats scissors. | Player: ${playerScore} Computer: ${computerScore}` );
        }
    else if (playerChoice === 'rock' && computerSelection === 'paper') {
        computerScore++;
        console.log( `You Lose! Paper beats rock. | Player: ${playerScore} Computer: ${computerScore}`);
        }  
    else if  (playerChoice === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        console.log( `You Win! Scissors beats paper. | Player: ${playerScore} Computer: ${computerScore}`);
        }
    else if  (playerChoice === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        console.log( `You Lose! Rock beats Scissors. | Player: ${playerScore} Computer: ${computerScore}`);
        }
    else if  (playerChoice === 'paper' && computerSelection === 'rock') {
        playerScore++;
        console.log( `You Win! Paper beats rock. | Player: ${playerScore} Computer: ${computerScore}`);
        }
    else if  (playerChoice === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        console.log( `You Lose! Scissors beats paper. | Player: ${playerScore} Computer: ${computerScore}`);
        }
    else if (playerChoice === computerSelection) {
        console.log( `Tie! | Player: ${playerScore} Computer: ${computerScore}`);
    } else {
        computerScore++;
        console.log( `You Lose! | Player: ${playerScore} Computer: ${computerScore}`);
    }
}

// plays rock, paper, scissors until player or computer achieves a score of 5
function game() {
    for (let i = 1; playerScore < 5 && computerScore < 5; i++) {
        let playerChoice = prompt('Rock, Paper, or Scissors?');
        computerSelection = computerPlay();
        playRound(playerChoice, computerSelection);
    }
    if (playerScore === 5) {
        console.log( `Nice job, You won! | Final Score: ${playerScore} - ${computerScore}` );
    } else {
        console.log( `GAME OVER! Try Again. | Final Score: ${playerScore} - ${computerScore}`);
    }
}