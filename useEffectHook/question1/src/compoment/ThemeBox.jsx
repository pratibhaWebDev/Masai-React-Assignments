import React, { useState } from 'react'

const ThemeBox = (prop) => {

    const [theme,setTheme]=useState("light")


  return (
    <div>
        <h1>{prop.theme}</h1>
        <h1 >{prop.text}</h1>
    </div>
  )
}

export default ThemeBox