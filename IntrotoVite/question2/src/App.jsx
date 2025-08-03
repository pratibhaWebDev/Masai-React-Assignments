import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggle, setToggle] = useState("ON")

  function toggleChange(){
    setToggle(prev=>prev=="ON"?"OFF":"ON")
  }

  return (
    <>
    <div style={{background:toggle==="ON"?"green":"yellow", padding:"30px"}}>
      <button onClick={toggleChange}  >{toggle}</button>
    </div>
    </>
  )
}

export default App
