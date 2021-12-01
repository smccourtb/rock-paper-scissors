import {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Choice from "./components/Choice";


function App() {
  const modes = {'basic': ['rock', 'paper', 'scissors']}
  const winMessage = {"rock": "Rock smashes scissors!", "paper": "Paper covers rock!", "scissors": "Scissors cut paper!"}
  const winCondition = {"rock": ["scissors"], "paper":["rock"], "scissors":["paper"]}

  const [playerChoice, setPlayerChoice] = useState("")
  const [score, setScore] = useState(0)


  // const [count, setCount] = useState(3)
  // const [gameState, setGameState] = useState(
  //   {
  //     mode: modes.basic,
  //     gamesPlayed:0,
  //     playerChoice: "",
  //     playerScore: 0,
  //     opponentChoice: "",
  //     opponentScore: 0,
  //     winner: null
  //   }
  // )
  // function reset() {
  //   console.log(gameState)
  //   setGameState(prevGameState =>({
  //     ...prevGameState,
  //     playerChoice: "",
  //     opponentChoice: "",
  //     winner: null
  //   }))
  //   setCount(3)
  // }

  
  

  // function opponentPick() {
  //   const choice = gameState.mode[Math.floor(Math.random() * gameState.mode.length)]
  //   setGameState(prevGameState => ({...prevGameState, opponentChoice: choice}))
    
  // }

  

  // function determineWinner(){
  //   const player = gameState.playerChoice;
  //   const opponent = gameState.opponentChoice;
  //   if (player === opponent) {
  //     setGameState((prevGameState => ({...prevGameState, winner: "Draw"})))
  //   }
  //   else if (winCondition[player].includes(opponent)){
  //     setGameState((prevGameState => ({...prevGameState, playerScore: prevGameState.playerScore+1, winner: "Player"})))
  //   } else {
  //     setGameState((prevGameState => ({...prevGameState, opponentScore: prevGameState.opponentScore+1, winner: "Opponent"})))
  //   }
  // }
  
  return (
    <div className="App">
      <Header score={score}/>
      <Choice setPlayerChoice={setPlayerChoice}/>
      {playerChoice && <h1>{playerChoice}</h1>}
    </div>
  );
}

export default App;
