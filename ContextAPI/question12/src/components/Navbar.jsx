import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

    const {isLoggedIn,toggleLogin}=useContext(AuthContext);
  return (
    <div>
        <button onClick={toggleLogin}>{isLoggedIn?"Logout":"Login"}</button>
    </div>
  )
}

export default Navbar