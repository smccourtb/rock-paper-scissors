var winMessage = `You Win! ${playerSelection} beats ${computerSelection}`
var loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`
var drawMessage = "It's a draw! Try again!"
// const computerSelection = computerPlay()
function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    // pick a random choice from options
    return options[Math.floor(Math.random() * options.length)].toLowerCase()
}

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


function game(numGames) {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i < numGames+1; i++) {
        let playerSelection = window.prompt('Choose rock, paper, or scissors', "rock").toLowerCase();
        let round = playRound(computerPlay(), playerSelection);
        if (round) {
            playerScore += 1;
            console.log(winMessage)
        }
        else if (!round) {
            computerScore += 1
            console.log(loseMessage)
        }
        else {
            console.log(drawMessage)
        }
        console.log(`Player: ${playerScore}
                     Computer: ${computerScore}`)
    }
    if (playerScore > computerScore) {
        console.log('Player Wins!')
    }
    else if (playerScore < computerScore) {
        console.log('Computer Wins')
    }
    else {
        console.log("It's a draw! Play Again")
    }
}


game(5)