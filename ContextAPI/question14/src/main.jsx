import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthContextProvider } from './context/AuthContext'
import Navbar from './component/Navbar'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
    <ThemeProvider>
    <App />
    </ThemeProvider>
    </AuthContextProvider>
  </StrictMode>,
)
