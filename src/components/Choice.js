import "../styles/Choice.css";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
import lizardIcon from "../images/icon-lizard.svg";
import spockIcon from "../images/icon-spock.svg";
function Choice({setPlayerChoice, mode}) {
    const choose = (e) => {
        const target = e.target.attributes.name.value
        setPlayerChoice(target)
    }

    return(
        <div className={mode ==="basic" ? "choice-basic" : "choice-advanced"}>
            {mode === "basic" 
            ?
            <><div className="choice__upper">
                    <div className="paper" name="paper" onClick={choose}>
                        <div className="choice-bg">
                            <img className="icon" src={paperIcon} alt="paper"></img>
                        </div>
                    </div>
                    <div className="scissors" name="scissors" onClick={choose}>
                        <div className="choice-bg">
                            <img className="icon" src={scissorsIcon} alt="scissors"></img>
                        </div>
                    </div>
                </div><div className="choice__lower">
                        <div className="rock" name="rock" onClick={choose}>
                            <div className="choice-bg">
                                <img className="icon" src={rockIcon} alt="rock"></img>
                            </div>
                        </div>
                    </div></>
            :
            <><div className="advanced__upper">
                    <div className="scissors" name="scissors" onClick={choose}>
                        <div className="choice-bg">
                            <img className="icon" src={scissorsIcon} alt="scissors"></img>
                        </div>
                    </div>
                    </div>
                <div className="advanced__middle">
                    <div className="spock" name="spock" onClick={choose}>
                        <div className="choice-bg">
                            <img className="icon" src={spockIcon} alt="spock"></img>
                        </div>
                    </div>
                    <div className="paper" name="paper" onClick={choose}>
                        <div className="choice-bg">
                            <img className="icon" src={paperIcon} alt="paper"></img>
                        </div>
                    </div>
                </div>
                <div className="advanced__lower">
                    <div className="lizard" name="lizard" onClick={choose}>
                        <div className="choice-bg">
                            <img className="icon" src={lizardIcon} alt="lizard"></img>
                        </div>
                    </div>
                    <div className="rock" name="rock" onClick={choose}>
                        <div className="choice-bg">
                            <img className="icon" src={rockIcon} alt="rock"></img>
                        </div>
                    </div>
            </div></>
            }
        </div>
    )
}

export default Choice