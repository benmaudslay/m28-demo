import { useState } from "react"

const App = () => {
    const [count, setCount] = useState(0)

    const handleClickUp = () => {
        setCount(count + 1)
    }

    const handleClickDown = () => {
        setCount(count - 1)
    }

    return (
        <div>
            <Button handleClick={handleClickUp} value="+">+</Button>
            <h1>{count}</h1>
            <Button handleClick={handleClickDown} value="-">-</Button>
            {/* <button onClick={handleClickUp}>+</button>
            <button onClick={handleClickDown}>-</button> */}
        </div>
    )
}

const Button = (props) => {
    return <button onClick={props.handleClick}>{props.value}</button>
}

export default App