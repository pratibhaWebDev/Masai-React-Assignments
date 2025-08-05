import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Footer = () => {
    const {isLoggedIn,toggleLogin}=useContext(AuthContext);
  return (
    <footer style={{ marginTop: '2rem' }}>
      <p>{isLoggedIn ? 'Welcome, User' : 'Please log in'}</p>
    </footer>
  )
}

export default Footer