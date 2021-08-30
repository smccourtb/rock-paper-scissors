let result, playerScore, computerScore, gameOver;
playerScore = 0
computerScore = 0
gameOver = false

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    // pick a random choice from options
    return options[Math.floor(Math.random() * options.length)].toLowerCase()
}

function playRound(computerSelection, playerSelection) {
    console.log(`PLAYER SELECTION: ${playerSelection}`)
    console.log(`COMPUTER SELECTION: ${computerSelection}`)
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return true
        }
        else if (computerSelection === 'paper') {
            return false
        }
        else {
            return null
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return true
        }
        else if (computerSelection === 'rock') {
            return false
        }
        else {
            return null
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return true
        }
        else if (computerSelection === 'scissors') {
            return false
        }
        else {
            return null
        }
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    
    result = playRound(computerPlay(), playerSelection);
    displayResults(result);
  });
});


function displayResults(results) { 
    let winMessage = `You Win!`
    let loseMessage = `You Lose!`
    let drawMessage = "It's a draw! Try again!"

    if(results) {
        console.log(winMessage);
        playerScore++;
    }
    else if(!results && results !== null) {
        console.log(loseMessage);
        computerScore++;
    }
    else {
        console.log(drawMessage);
    };

    console.log(playerScore)
};

// while(!gameOver) {
//     if(playerScore ==5 || computerScore == 5){
//         if(playerScore > computerScore) {
//             console.log('YOU WIN THE GAME');
//         }
//         else {
//             console.log("YOU LOST THE GAME");
//         }
//         gameOver = true;
//     };
// };