import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToggleVisibility from './components/ToggleVisibility'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ToggleVisibility/>
    </>
  )
}

export default App
