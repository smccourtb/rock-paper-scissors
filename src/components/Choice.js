import "../styles/Choice.css"

function Choice({setPlayerChoice}) {

    const choose = (e) => {
        const target = e.target.attributes.name.value
        setPlayerChoice(target)
    }
    
    return(
        <div className="choice">
            <div className="icon" name="paper" onClick={choose}></div>
            <div className="icon" name="scissors" onClick={choose}></div>
            <div className="icon" name="rock" onClick={choose}></div>
        </div>
    )
}

export default Choice