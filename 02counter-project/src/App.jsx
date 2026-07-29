import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  const addValue = () => {
    setCounter(counter + 1)
  }
  const subtractValue = () => {
    setCounter(counter - 1)
  }
  

  return (
    <>
      
      <h1>Counter App</h1>
      <h2>Count: {counter}</h2>
      <button onClick={addValue}
      >add value{counter}</button>
      <br></br>
      <button onClick={subtractValue}>subtract value{counter}</button>
      <p>footer-{counter}</p>
      <p>This is a counter app that allows you to increase or decrease the count by clicking the respective buttons. The current count is displayed above the buttons, and the footer also reflects the current count value.</p>
    </>
  )
}

export default App
