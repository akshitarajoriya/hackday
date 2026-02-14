import React from 'react'
import "./navbar.css"

const navbar = () => {
  return (
    <div id="container">
      <span className='box1'>website name</span>
      <span className='box2'>
        <ul>
            <li>home</li>
            <li>about</li>
            <li>services</li>
            <li>contact</li>
        </ul>
      </span>
    </div>
  )
}

export default navbar
