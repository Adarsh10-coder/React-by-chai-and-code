import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 5
  let [counter, setCounter] = useState(15)
  // this(hooks) help to change counter variable in whole web-page where counter is displaying

  const addValue = () =>{
    //counter = counter+1;
    setCounter(counter+1)
  }
  const removevalue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <br /><br />
     <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
