import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Card from './card'
import "./home.css"

const home = ({image}) => {
  return (
    <div>
      <Navbar />
      <div id="card">
        <Card image={image}/>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <Footer />
    </div>
  )
}

export default home
