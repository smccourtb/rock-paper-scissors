
const playerSelection = window.prompt('Choose rock, paper, or scissors', "rock").toLowerCase()
// const computerSelection = computerPlay()
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    // pick a random choice from options
    return options[Math.floor(Math.random() * options.length)].toLowerCase()
}

function playRound(computerSelection, playerSelection) {
    let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`
    let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`
    let drawMessage = "It's a draw! Try again!"

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return winMessage
        }
        else if (computerSelection === 'paper') {
            return loseMessage
        }
        else {
            return drawMessage
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return winMessage
        }
        else if (computerSelection === 'rock') {
            return loseMessage
        }
        else {
            return drawMessage
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return winMessage
        }
        else if (computerSelection === 'scissors') {
            return loseMessage
        }
        else {
            return drawMessage
        }
    }
}

