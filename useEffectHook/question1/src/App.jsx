import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBox from './compoment/ThemeBox'

function App() {
  const [theme,setTheme]=useState("light")

  const toggle=()=>{
    setTheme(prev=>(prev==='light'?'dark':'light'))
  }

  return (
    <>

      <button onClick={toggle} style={{background:theme==='light'?'#222':'#fff',color:theme==='light'?'#fff':'#222'}}>Click Here Change color</button>
     <ThemeBox theme={theme} text="box 1"/>
    </>
  )
}

export default App
