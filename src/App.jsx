import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)
    const [clicker, setClicker] = useState(0)

    const handleClickUp = () => {
        setClicker(clicker + 1)
        setCount(count + 1)
    }

    const handleClickDown = () => {
        setClicker(clicker + 1)
        setCount(count - 1)
    }

    return (
        <div>
            <Button handleClick={handleClickUp} value="+">+</Button>
            <h1>{count}</h1>
            <Button handleClick={handleClickDown} value="-">-</Button>
            {/* <button onClick={handleClickUp}>+</button>
            <button onClick={handleClickDown}>-</button> */}
            <h4>You have clicked {clicker} times</h4>
        </div>
    )
}

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.value}</button>
}

export default App