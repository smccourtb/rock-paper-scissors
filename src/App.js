import React from 'react';
import './App.css';
import Header from "./components/Header";
import Choice from "./components/Choice";


function App() {
  const modes = {'basic': ['rock', 'paper', 'scissors']}
  const winMessage = {"rock": "Rock smashes scissors!", "paper": "Paper covers rock!", "scissors": "Scissors cut paper!"}
  const [count, setCount] = React.useState(3)
  const [gameState, setGameState] = React.useState(
    {
      mode: modes.basic,
      gamesPlayed:0,
      playerChoice: "",
      playerScore: 0,
      opponentChoice: "",
      opponentScore: 0,
      winner: null
    }
  )
  function reset() {
    console.log(gameState)
    setGameState(prevGameState =>({
      ...prevGameState,
      playerChoice: "",
      opponentChoice: "",
      winner: null
    }))
    setCount(3)
  }

  
  function choose() {
    setGameState(prevGameState => ({...prevGameState, playerChoice: this.type}))
    opponentPick()
    
  }

  function opponentPick() {
    const choice = gameState.mode[Math.floor(Math.random() * gameState.mode.length)]
    setGameState(prevGameState => ({...prevGameState, opponentChoice: choice}))
    
  }

  const playerChoices = modes.basic.map((options, idx) => <Choice key={`${idx}`} type={options} choose={choose} owner={true}/>)
  
  const opponentChoice = <Choice type={gameState.opponentChoice ? gameState.opponentChoice : opponentPick} owner={false}/>
  const winCondition = {"rock": ["scissors"], "paper":["rock"], "scissors":["paper"]}

  function determineWinner(){
    const player = gameState.playerChoice;
    const opponent = gameState.opponentChoice;
    if (player === opponent) {
      setGameState((prevGameState => ({...prevGameState, winner: "Draw"})))
    }
    else if (winCondition[player].includes(opponent)){
      setGameState((prevGameState => ({...prevGameState, playerScore: prevGameState.playerScore+1, winner: "Player"})))
    } else {
      setGameState((prevGameState => ({...prevGameState, opponentScore: prevGameState.opponentScore+1, winner: "Opponent"})))
    }
  }
  React.useEffect(() => {
    if(gameState.playerChoice && gameState.opponentChoice && !gameState.winner) {
      determineWinner()
    }
  }, [gameState.opponentChoice])
  
  return (
    <div className="App">
      <Header />
      <main className={'choices'}>
        {gameState.playerChoice 
        ? 
        <div className={"post-choices"}>
          <div className="player">
            <h2>{`You`}</h2>
            <Choice type={gameState.playerChoice}/> 
          </div>
          <div> { count > 0 ? <p>VS.</p> : <p>{gameState.winner !== "Draw" ? `${gameState.winner} Wins!` : "It's a draw!"}</p>}
          </div>
          <div className="opponent">
            <h2>{`Opponent`}</h2>
            <div>{count > 0 ? <Choice type={"base-choice"} count={count} setCount={setCount}/> : opponentChoice }</div>
          </div>
        </div>

        : 
          [playerChoices]  
        }
      </main>
      <h2>{count > 0 ? "CHOOSE YOUR WEAPON": gameState.winner === "Player" ? winMessage[gameState.playerChoice] : gameState.winner === "Opponent" ? winMessage[gameState.opponentChoice] : " "}</h2>
      {count < 1 ? <button onClick={reset}>RESET</button> : <p></p>}
    </div>
  );
}

export default App;
