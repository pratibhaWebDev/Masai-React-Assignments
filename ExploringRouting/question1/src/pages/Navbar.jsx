import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/" className={({isActive})=>isActive?"active-link":""}>Home</Link>
        <Link to="/about" className={({isActive})=>isActive?"active-link":""}>About</Link>
        <Link to="/post/:id" className={({isActive})=>isActive?"active-link":""}>Post</Link>
    </div>
  )
}

export default Navbar