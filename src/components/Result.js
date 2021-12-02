import "../styles/Result.css"
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import React, {useState} from 'react'

function Result({playerChoice, setScore, setPlayerChoice}) {
    const modes = {'basic': ['rock', 'paper', 'scissors']}
    const winMessage = {"rock": "Rock smashes scissors!", "paper": "Paper covers rock!", "scissors": "Scissors cut paper!"}
    const winCondition = {"rock": ["scissors"], "paper":["rock"], "scissors":["paper"]}
    
    const [opponentChoice, setOpponentChoice] = React.useState("");
    const [count, setCount] = React.useState(3);
    const [win, setWin] = React.useState("");


    function opponentPick() {
        const choice = modes.basic[Math.floor(Math.random() * modes.basic.length)]
        console.log("OPPONENT: ",choice)
        setOpponentChoice(choice)
    }

    const icon = (choice) => {
        switch(choice) {
            case "rock": return rockIcon;
            case "paper": return paperIcon;
            case "scissors": return scissorsIcon
            default: return;
        }
    }

    function determineWinner(){
        console.log("PLAYER: ", playerChoice)
        if (playerChoice === opponentChoice) {
          setWin("draw")
        }
        else if (winCondition[playerChoice].includes(opponentChoice)){
          setWin("player")
        } else {
            setWin("opponent")
        }
      }

    function startCountdown(seconds) {
        let counter = seconds
        
        const interval = setInterval(() => {
            console.log(counter)
            counter--;
            setCount(counter)
            if (counter < 1 ) {
                clearInterval(interval);
                opponentPick()
        }
        }, 1000);
    }

    React.useEffect(() => {
        startCountdown(count)
    }, [])

    React.useEffect(() => {
        if(win === "player"){
        setScore(prevScore => prevScore + 1)
    }
    }, [win])

    React.useEffect(() => {
        if(opponentChoice){
        determineWinner()
        }
    }, [opponentChoice])

    function reset() {
        setPlayerChoice("")
        setWin("")
        setOpponentChoice("")
    }

    return(
    <div className="result-container">
        <div className="player">
            <p>YOU PICKED</p>
            <div className={`${playerChoice} chosen`}>
                <div className="choice-bg">
                    <img className="icon" src={icon(playerChoice)} alt={playerChoice}></img>
                </div>
            </div>
        </div>
        <div className={win ? "result-show": "result"}>{win &&<div>
            <p className="result-label">{win === "player" ? "YOU WIN" : win === "opponent" ? "YOU LOSE" : "DRAW"}</p>
            <button className="reset" onClick={reset}>PLAY AGAIN</button></div>}
        </div>
        <div className="opponent">
            <p>OPPONENT PICKED</p>
            {opponentChoice ?
            <div className={`${opponentChoice} chosen`}>
                <div className="choice-bg">
                    <img className="icon" src={icon(opponentChoice)} alt={playerChoice}></img>
                </div>
            </div>
            :
            <div className="shadow"><span>{count.toString()}</span></div>
            }
        </div>
    </div>
    )
};

export default Result;