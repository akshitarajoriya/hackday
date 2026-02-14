import { useState } from 'react'
import Navbar from"./components/navbar.jsx"
import About from"./components/about.jsx"
import Services from"./components/services.jsx"
import Home from"./components/home.jsx"
// 

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <Navbar/>
   <Home/>
    </>
  )
}

export default App
