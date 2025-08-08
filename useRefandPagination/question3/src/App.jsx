import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const inputRef= useRef(null)

  function handle(){
    inputRef.current.focus()
    inputRef.current.style.backgroundColor="red"
  }

  return (
    <>
     <input ref={inputRef} type="text" />
     <button onClick={handle}>useRef</button>
    </>
  )
}

export default App
