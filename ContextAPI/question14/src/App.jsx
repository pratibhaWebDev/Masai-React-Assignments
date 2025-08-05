import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthContextProvider } from './context/AuthContext'
import Navbar from './component/Navbar'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import MainContent from './component/MainContent'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)
  const { theme } = useContext(ThemeContext)

  return (
    <>
      
          <div
            className={`min-h-screen ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'
              }`}
          >
            <Navbar />
            <MainContent/>
            <Footer/>
          </div>
        
    </>
  )
}

export default App
