import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [second, setSecond ] = useState(0) 

  useEffect(()=>{
    const interval = setInterval(() => {
      setSecond(second+1)
    },1000)
    return () => clearInterval(interval)
  },[second])

  return (
    <>
     <h1>Counter App</h1>
     <h2>{second} sec</h2>
    </>
  )
}

export default App
