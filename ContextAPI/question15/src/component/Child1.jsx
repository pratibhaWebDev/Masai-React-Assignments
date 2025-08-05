import React from 'react'
import Child2 from './Child2'

const Child1 = (prop) => {
  return (
    <Child2 value={prop}/>
  )
}

export default Child1