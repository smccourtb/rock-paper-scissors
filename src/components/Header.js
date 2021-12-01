import basicLogo from "../images/logo.svg"
import "../styles/Header.css"
function Header(props) {
    return(
        <header>
            <img className="header__logo" src={basicLogo} alt="logo"/>
            <div className="header__score-container">
                <small>SCORE</small>
                <p className="header__score">{props.score}</p>
            </div>
        </header>
    )
}

export default Header