import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
 
  return (
    <div id="container">
      <span className='box1'>website name</span>
      <span className='box2'>
        <ul>
            {/* <Link to="/home"><li>home</li></Link> */}
            <Link to="/about"><li>about</li></Link>
            <Link to="/services"><li>services</li></Link>
            <Link to="/contact"><li>contact</li></Link>
        </ul>
      </span>
    </div>
  )
}

export default Navbar