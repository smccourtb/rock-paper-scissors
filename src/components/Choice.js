import "../styles/Choice.css";
import paperIcon from "../images/icon-paper.svg";
import scissorsIcon from "../images/icon-scissors.svg";
import rockIcon from "../images/icon-rock.svg";
function Choice({setPlayerChoice}) {

    const choose = (e) => {
        const target = e.target.attributes.name.value
        setPlayerChoice(target)
    }

    return(
        <div className="choice">
            <div className="paper" name="paper" onClick={choose}>
                <div className="choice-bg">
                    <img className="icon" src={paperIcon} alt="scissors"></img>
                </div>
            </div>
            <div className="scissors" name="scissors" onClick={choose}>
                <div className="choice-bg">
                    <img className="icon" src={scissorsIcon} alt="scissors"></img>
                </div>
            </div>
            <div className="rock" name="rock" onClick={choose}>
                <div className="choice-bg">
                    <img className="icon" src={rockIcon} alt="scissors"></img>
                </div>
            </div>
        </div>
    )
}

export default Choice