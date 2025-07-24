import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("green")

  function colorChanger(){
    setColor(prev =>(prev=="green"?"yellow":"green"))
  }

  return (
    <>
     <div style={{background:color, padding:"50px"}}>
        <button onClick={colorChanger}>Change color</button>
     </div>
    </>
  )
}

export default App
