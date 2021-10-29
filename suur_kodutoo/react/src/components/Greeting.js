import React from "react"

const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Greeting { name }</h1>
      <p>Greeting text { age }</p>
    </>
  )
}

export default Greeting