import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AuthProvider>
      <div>
        <Navbar/>
        <Home/>
        <Footer/>
      </div>
     </AuthProvider>
    </>
  )
}

export default App
