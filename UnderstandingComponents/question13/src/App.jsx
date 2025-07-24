import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [plans] = useState([
    {
      title: 'Starter',
      price: 'Free',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      buttonStyle: 'gray',
    },
    {
      title: 'Lorem Plus',
      price: '$32.00',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      buttonStyle: 'purple',
    },
    {
      title: 'Lorem Pro',
      price: '$50.00',
      features: ['1 lorem ipsum', 'Lorem, ipsum dolor.', 'Monthly Updates'],
      buttonStyle: 'gray',
    },
  ]);

  return (
    <>
      <div className=''>

        {/* Haeding  */}
        <div className='flex py-5 m-5 text-2xl'>
          <div>
            <h1>The Right Plan for <span className='text-purple-600'>Your Business</span></h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At dignissimos debitis, eum explicabo consequuntur magnam saepe inventore iure,  aperiam maxime deleniti ipsum aspernatur eius eaque?</p>
          </div>
         </div>

          {plans.map((plan, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid #eee',
            padding: '1rem 0',
          }}
        >
          <div>
            <h3>{plan.title}</h3>
            <ul>
              {plan.features.map((feat, i) => (
                <li key={i} style={{ listStyle: 'none' }}>
                  ✅ {feat}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ textAlign: 'right' }}>
            <h2>{plan.price}</h2>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: plan.buttonStyle === 'purple' ? '#a78bfa' : '#e5e7eb',
                border: 'none',
                borderRadius: '8px',
                color: plan.buttonStyle === 'purple' ? 'white' : '#333',
                cursor: 'pointer',
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      ))}
        
        
      </div>
    </>
  )
}

export default App
