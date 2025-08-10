import { useState,useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const initialState = {
  theme: "light"
};


function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light"
      };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);

 
  const appStyles = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: state.theme === "light" ? "#ffffff" : "#1e1e1e",
    color: state.theme === "light" ? "#000000" : "#ffffff",
    transition: "all 0.3s ease"
  };
  return (
    <>
      <div style={appStyles}>
      <h1>Current Theme: {state.theme}</h1>
      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: state.theme === "light" ? "#000" : "#fff",
          color: state.theme === "light" ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Toggle Theme
      </button>
    </div>
    </>
  )
}

export default App
