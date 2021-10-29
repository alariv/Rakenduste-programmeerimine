import React from "react"
import { Button, DatePicker, version } from "antd";


function Fun({ magicNumber, setMagicNumber, amount = 1, show, setShow }){
  const [counter, setCounter] = React.useState(0)

  const addNumber = () => {
    setCounter(counter + 1)
  }

  const increaseMagicNumber = () => {
    setMagicNumber(magicNumber + amount)
  }
  
  return (
    <>
      <h1>Fun counter { counter }</h1>
      <Button style={{color:'#24a624',borderColor:'#24a624'}} onClick={addNumber}>Add 1</Button>
      <Button danger onClick={() => setCounter(counter - 1)}>Deduct 1</Button>
      <Button type={"primary"} onClick={increaseMagicNumber}>Add { amount } to magic number</Button>
      <Button type={"success"} onClick={() => setShow(!show)}>Toggle magic number</Button>
    </>
  )
}

export default Fun