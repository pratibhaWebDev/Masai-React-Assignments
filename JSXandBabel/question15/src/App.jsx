import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [nav, setNav] = useState("home")

  const renderPage = ()=>{
    switch (nav) {
      case "home":
        return <div style={{ background: "black", padding: "20px" }}><h2>Welcome to Home</h2></div>
        break;
      case "about":
        return <div style={{ background: "black", padding: "20px" }}><h2>Welcome to about</h2></div>
          break;
      case "contact":
        return <div style={{ background: "black", padding: "20px" }}><h2>Welcome to contact</h2></div>
            break;
    
      default:
        break;
    }
  }

  const navStyle = {
    marginRight: "15px",
    cursor: "pointer",
    fontWeight: "bold",
    color: "#1976d2"
  }

  return (
    <>
      <div>
      <nav style={{ borderBottom: "1px solid #black", padding: "10px" }}>
        <span style={navStyle} onClick={() => setNav("home")}>Home</span>
        <span style={navStyle} onClick={() => setNav("about")}>About</span>
        <span style={navStyle} onClick={() => setNav("contact")}>Contact</span>
      </nav>
      <main style={{ marginTop: "20px" }}>
        {renderPage()}
      </main>
    </div>
    </>
  )
}

export default App
