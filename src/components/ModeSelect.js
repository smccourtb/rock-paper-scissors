import "../styles/ModeSelect.css";

function ModeSelect({setMode}) {
    function handleClick(e){
        setMode(e.target.textContent.toLowerCase())
    }
    return (<div className="mode-container">
        <button className="mode" onClick={handleClick}>BASIC</button>
        <button className="mode" onClick={handleClick}>ADVANCED</button>

    </div>)
}

export default ModeSelect