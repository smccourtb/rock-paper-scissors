let result, playerScore, computerScore, gameOver;
playerScore = 0;
computerScore = 0;

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    // pick a random choice from options
    return options[Math.floor(Math.random() * options.length)].toLowerCase()
};

function playRound(computerSelection, playerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return true
        }
        else if (computerSelection === 'paper') {
            return false
        }
        else {
            return null
        };
    };
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return true;
        }
        else if (computerSelection === 'rock') {
            return false;
        }
        else {
            return null;
        };
    };
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return true;
        }
        else if (computerSelection === 'scissors') {
            return false;
        }
        else {
            return null;
        };
    };
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    
    result = playRound(computerPlay(), playerSelection);
    displayResults(result);
    checkForWin();

  });
});

const resultWindow = document.getElementById("results");
const player = document.getElementById('player')
const computer = document.getElementById('computer')

function displayResults(results) { 
    

    if(results) {
         
        playerScore++;
        
    }
    else if(!results && results !== null) {
       
        computerScore++;
    }
    player.textContent = `Player Score : ${playerScore}`
    computer.textContent = `Computer Score : ${computerScore}`
    };

function checkForWin() {
    let winMessage = `You Win!`
    let loseMessage = `You Lose!`
    if(playerScore ==5 || computerScore == 5){
        if(playerScore > computerScore) {
            resultWindow.textContent = winMessage;
        }
        else {
            resultWindow.textContent = loseMessage;
        }
    };
};