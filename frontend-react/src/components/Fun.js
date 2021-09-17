import React from "react"

function Fun(){
    const [counter, setCounter] = React.useState(0)
    const addNumber = () => {
        setCounter(counter + 1)
    }
    const deductNumber = () => {
        setCounter(counter - 1)
    }
    return (
        <>
        <h3>fun-fun counter { counter }</h3>
        <button onClick={addNumber}>+1</button>
        <button onClick={deductNumber}>-1</button>
        </>
    )
}

export default Fun