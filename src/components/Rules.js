import '../styles/Rules.css'
import basicRules from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";

function Rules({showRules}) {
    return(
        <div className="rules">
            <h2>RULES</h2>
            <img src={basicRules} alt="basic rules"></img>
            <button className="rules__close-button" onClick={showRules}><img src={closeIcon} alt="close"></img></button>
        </div>
    )
}

export default Rules