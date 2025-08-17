import { useState } from 'react'
import Chai from './chai'

function App() {  
  return (
    /* <Chai/>
       <h1>chai and react</h1>
       <p>test para</p>
    */
    // we can only import one element
    // so to takle this problem we can take a div or <>
    // <> --> called fragment
    <div>
      <Chai/>
      <h1>chai and react</h1>
      <p>test para</p>
    </div>
  )
}

export default App
