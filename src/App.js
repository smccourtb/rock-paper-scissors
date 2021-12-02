import {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Choice from "./components/Choice";
import Result from "./components/Result";
import Rules from "./components/Rules";

function App() {
  const [playerChoice, setPlayerChoice] = useState("")
  const [score, setScore] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
 
  
    function showRules() {
        setIsOpen(!isOpen);
    }
    
  return (
    <div className="App">
      <Header score={score} isOpen={isOpen}/>
      {isOpen && <Rules showRules={showRules}/>}
      <main className={`${playerChoice ? "res" : "ch"} ${isOpen && "blur"}`}>
        {playerChoice 
        ? 
        <Result setScore={setScore} playerChoice={playerChoice} setPlayerChoice={setPlayerChoice}/> 
        : 
        <Choice setPlayerChoice={setPlayerChoice}/>}
      </main>
      <Footer showRules={showRules} isOpen={isOpen}/>
    </div>
  );
}

export default App;
