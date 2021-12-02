import "../styles/Result.css"
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import {useState, useEffect} from 'react'

function Result({playerChoice, setScore, setPlayerChoice}) {
    const modes = {'basic': ['rock', 'paper', 'scissors']}
    // const winMessage = {"rock": "Rock smashes scissors!", "paper": "Paper covers rock!", "scissors": "Scissors cut paper!"}
    const winCondition = {"rock": ["scissors"], "paper":["rock"], "scissors":["paper"]}
    
    const [opponentChoice, setOpponentChoice] = useState("");
    const [count, setCount] = useState(3);
    const [win, setWin] = useState("");


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

    useEffect(() => {
        startCountdown(count)
    }, [])

    useEffect(() => {
        if(win === "player"){
        setScore(prevScore => prevScore + 1)
    }
    }, [win])

    useEffect(() => {
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
        


        <div className={win ? "player": "player-before"}>
            <p className="picked-player">YOU PICKED</p>
            <div className={win === "player" ? "win-player" : "win"}>
                <div className="middle"></div>
                <div className="inner"></div>
            </div>
                <div className={`${playerChoice} chosen-player`}>
                    <div className="choice-bg">
                        <img className="icon" src={icon(playerChoice)} alt={playerChoice}></img>
                    </div>
                </div>
        </div>

        {win && <div className={win ? "result-show": "result"}>
            <p className="result-label">{win === "player" ? "YOU WIN" : win === "opponent" ? "YOU LOSE" : "DRAW"}</p>
            <button className="reset" onClick={reset}>PLAY AGAIN</button>
        </div>}

        <div className={win ? "opponent" : "opponent-before"}>
            <p className="picked-opponent">OPPONENT PICKED</p>
            <div className={win === "opponent" ? "win-opponent" : "win"}>
                <div className="middle"></div>
                <div className="inner"></div>
                </div>
            {opponentChoice ?
            <div className={`${opponentChoice} chosen-opponent`}>
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