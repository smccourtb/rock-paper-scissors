import basicLogo from "../images/logo.svg"
import "../styles/Header.css"

function Header({ score }) {
    return(
        <header>
            <img className="header__logo" src={basicLogo} alt="logo"/>
            <div className="header__score-container">
                <small>SCORE</small>
                <p className="header__score">{score}</p>
            </div>
        </header>
    )
}

export default Header