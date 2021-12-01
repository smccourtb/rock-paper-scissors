import React from "react"

function Choice(props) {
    // const [count, setCount] = React.useState(3)
    const icons = { "rock": "far fa-hand-rock",
                    "paper": "far fa-hand-paper",
                    "scissors": "far fa-hand-scissors"
                }

    function handleClick() {
       props.choose(props.type)
    }

    function startCountdown(seconds) {
        let counter = seconds
        const interval = setInterval(() => {
        counter--;
        props.setCount(counter)
        if (counter < 1 ) {
            clearInterval(interval);
        }
        }, 1000);
      }

    React.useEffect( () => {
        if (props.type === "base-choice" && props.count > 0){
            startCountdown(props.count)
        }
    })
    
    return(
        <div className={`${props.type}` } onClick={props.owner ? handleClick: undefined}>
            <div className="choice-bg">
                <i className={`${icons[props.type]} choice-icon`}> {props.type==="base-choice" ? props.count || " " : " "}</i>
            </div>
        </div>
    )
}

export default Choice