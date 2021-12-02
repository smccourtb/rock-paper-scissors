import {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Choice from "./components/Choice";
import Result from "./components/Result";


function App() {
  const [playerChoice, setPlayerChoice] = useState("")
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      <Header score={score}/>
      <main>
        {playerChoice 
        ? 
        <Result setScore={setScore} playerChoice={playerChoice} setPlayerChoice={setPlayerChoice}/> 
        : 
        <Choice setPlayerChoice={setPlayerChoice}/>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
