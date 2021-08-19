

function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    // pick a random choice from options
    return options[Math.floor(Math.random() * options.length)].toLowerCase()
}

function playRound(computerSelection, playerSelection) {
    let player = playerSelection.toLowerCase();
    if (player === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You Win!'
        }
        else if (computerSelection === 'paper') {
            return 'You Lose'
        }
        else {
            return 'Draw'
        }
    }
    
}

const playerSelection = "rock"
// const computerSelection = computerPlay()