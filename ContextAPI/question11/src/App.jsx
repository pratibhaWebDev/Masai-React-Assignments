import { useContext, useState } from 'react'
import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import './App.css'
import MyComponent from './component/MyComponent'

function App() {


  return (
    <>
      <ThemeProvider>
        <MyComponent />
      </ThemeProvider>
    </>
  )
}

export default App
