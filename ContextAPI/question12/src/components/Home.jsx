import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {
    const {isLoggedIn,toggleLogin}=useContext(AuthContext);
  return (
    <div>
        {isLoggedIn?"You are login ":"You are logout"}
    </div>
  )
}

export default Home