import basicLogo from "../images/logo.svg"
import "../styles/Header.css"

function Header({ score, isOpen }) {
    return(
        <header className={`main-header ${isOpen && "blur"}`}>
            <div className="header-container">
                <img className="header__logo" src={basicLogo} alt="logo"/>
                <div className="header__score-container">
                    <small>SCORE</small>
                    <p className="header__score">{score}</p>
                </div>
            </div>
        </header>
    )
}

export default Header