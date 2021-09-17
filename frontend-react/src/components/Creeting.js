import React from "react"

const Greeting = ({greeting, msg}) => {

    return (
    <>
        <h2>{greeting}</h2>
        <p>{msg}</p>
    </>
        
    
    )
}

export default Greeting