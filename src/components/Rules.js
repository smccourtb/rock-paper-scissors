import '../styles/Rules.css'
import basicRules from "../images/image-rules.svg";
import closeIcon from "../images/icon-close.svg";

function Rules({showRules}) {
    return(
        <div className="rules">
            <header className='rules-header'>
                <h2>RULES</h2>
                <button onClick={showRules}><img src={closeIcon} alt="close"></img></button>
            </header>
            <img src={basicRules} alt="basic rules"></img>
        </div>
    )
}

export default Rules