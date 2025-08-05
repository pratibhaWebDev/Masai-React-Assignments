import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Post from './pages/Post'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import Navbar from './pages/Navbar'

function App() {
  const [count, setCount] = useState(0)

  const router = createBrowserRouter([
    {
      path: '/',

      element: <div>
       
        <Navbar />
        <Home />
      </div>


    },
    {
      path: '/about',
      element: <div>
        <Navbar />
        <About />
      </div>


    },
    {
      path: '/post/:id',
      element: <div>
        <Navbar />
        <Post />
      </div>

    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
