import React from 'react'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../context/ThemeContext'

const MyComponent = () => {

    const {theme,toggleTheme}=useContext(ThemeContext);

  return (
    <div style={{background:theme==='light'?'white':'black',color:theme==='light'?'black':'white'}}>
        
        <p>Current : {theme}</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default MyComponent