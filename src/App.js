import {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Choice from "./components/Choice";
import Result from "./components/Result";
import Rules from "./components/Rules";
import ModeSelect from "./components/ModeSelect";

function App() {
  const [playerChoice, setPlayerChoice] = useState("")
  const [score, setScore] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("")
 
  
    function showRules() {
        setIsOpen(!isOpen);
    }
    
  return (
    <div className="App">
      {!mode 
      ?
      <ModeSelect setMode={setMode} />
      :
      <>
        {isOpen ? <Rules showRules={showRules}/> : undefined}

        <Header score={score} isOpen={isOpen} mode={mode}/>
        <main className={`${playerChoice ? "res" : "ch"} ${isOpen ? "blur" : undefined}`}>
          {playerChoice
          ?
          <Result setScore={setScore} playerChoice={playerChoice} setPlayerChoice={setPlayerChoice}/>
          :
          <Choice setPlayerChoice={setPlayerChoice} mode={mode}/>}
        </main>
        <Footer showRules={showRules} isOpen={isOpen}/>
      </>
      }
    </div>
  );
}

export default App;
