import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])
  const [current,setCurrent]=useState(null)

  async function data(){
    const response = await fetch('https://dummyjson.com/quotes')

    const data=await response.json()
    setQuotes(data.quotes)
    setCurrent(data.quotes[0])
    console.log(data)
  }

  useEffect (()=>{
    data()
  })
  useEffect(() => {
    
    const interval = setInterval(() => {
      if (quotes.length === 0) return
      const randomIndex=Math.floor(Math.random()*quotes.length)
      setCurrent(quotes[randomIndex])
    }, 1000)

    return () => clearInterval(interval) 
   
  
  }, [quotes])
  

  return (
    <>
      <h1>Quote Machine ⏱</h1>
      {current ? (
        <>
        <blockquote>
        "{current.quote}" <br />
        — <strong>{current.author}</strong>
      </blockquote>
      <button onClick={showQuote}>Show Another</button>
       </>
      ):(
        <p>Loading...</p>
      )}
    </>
  )
}

export default App
