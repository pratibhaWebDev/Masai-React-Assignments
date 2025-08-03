import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  async function userData(){
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data  = await response.json()
      console.log(data)
      setUser(data)
     
    } catch (error) {
      console.log(error)
    }
  }

  userData()

  return (
    <>
     {user.map((data)=>(
      <div key={data.id}>
        <h1>{data.name}</h1>
        <p>{data.email}</p>
        <p>{data.phone}</p>
        <p>Address : {data.address.city}</p>
       
      </div>
     ))}
    </>
  )
}

export default App
