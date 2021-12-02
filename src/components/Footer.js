import "../styles/Footer.css";

function Footer({showRules, isOpen}) {
    
    return(
        <footer className={isOpen && "blur"}>
            <button className="rules-btn" onClick={showRules}>RULES</button>
        </footer>
    )
}

export default Footer