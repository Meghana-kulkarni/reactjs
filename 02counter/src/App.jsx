import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 15;
  const [counter, setCounter] = useState(15)
  const addValue = () =>{
    console.log("clicked", setCounter);
    setCounter(counter+1); 
  }
  const removeValue = () =>{
    setCounter(counter-1);
  }
  return (
    <>
     <h1>chai aur react</h1>
     <h2>count = {counter}</h2>
     <button type='submit'onClick={addValue}>addValue {counter}</button>
     <br/>
    <button type='submit' onClick={removeValue}>removeValue{counter}</button> 
    <p>footer:{counter}</p>
    </>
  )
}

export default App
