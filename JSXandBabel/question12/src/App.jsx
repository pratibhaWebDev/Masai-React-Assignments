import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ul>
      <li>React</li>
      <li>JavaScript</li>
      <li>CSS</li>
     </ul>
    </>
  )
}

export default App
