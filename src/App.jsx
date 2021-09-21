import { useState } from "react"

const App = () => {
    const [persons, setPersons] = useState([{name: "leon"},{name: "jordan"}])
    
    const handleClick = (name) => {
        console.log("Hello " + name)
    }

    return (
        <div>
            <h1>CN Staff members</h1>
            <Person name={persons[0].name} click={handleClick} />
            <Person name={persons[1].name} click={handleClick} />
        </div>
    )
}

const Person = (props) => {
    return <h4 onClick={() => props.click(props.name)}>{props.name}</h4>
}

export default App