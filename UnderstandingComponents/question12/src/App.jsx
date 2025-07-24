import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card title="Card One">
      <p>Card One Content</p>
     </Card>

     <Card title="Card Two">
      <p>Card Two Content</p>
     </Card>


     <Card title="Card Three">
      <p>Card Three Content</p>
     </Card>
    </>
  )
}

export default App
