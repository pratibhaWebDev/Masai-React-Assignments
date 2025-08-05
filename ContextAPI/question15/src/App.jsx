import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child1 from './component/Child1'

function App() {
  const [count, setCount] = useState("pratibha")


  return (
    <>
     <Child1 value={count}/>
    </>
  )
}

export default App
