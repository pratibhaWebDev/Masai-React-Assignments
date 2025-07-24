import React from 'react'

const Card = ({title,children}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{children}</p>
    </div>
  )
}

export default Card