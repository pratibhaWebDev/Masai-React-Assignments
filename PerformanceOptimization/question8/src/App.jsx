import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useToggleItems from "./useToggleItems";

function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1);

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Item: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
    </>
  )
}

export default App
