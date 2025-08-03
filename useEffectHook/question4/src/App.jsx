import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'
import { useEffect } from 'react'

function App() {
  const [second, setSecond] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSecond(prev => prev + 1)
      }, 1000)
    }

    // return () => clearInterval(intervalRef.current)
  }, [isRunning])

  useEffect(() => {
    if (second === 10) {
      console.log("🎉 Time's up! 10 seconds reached.")
    }
    setIsRunning(false)
    clearInterval(intervalRef.current)
  }, [])


  function handleStart(){
    if (!isRunning) {
      setIsRunning(true)
    }
  }
  function handleStop(){
    setIsRunning(false)
    clearInterval(intervalRef.current)
  }

  return (
    <>
      <h1>⏱️ Stopwatch</h1>
      <h2>{second} sec</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  )
}

export default App
