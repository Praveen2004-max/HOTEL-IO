import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <img className='w-full h-[100vh] object-cover blur-sm' src="./Images/HomeImage.jpg" alt="hero-image" />
      <Hero />
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/check" element={<Hero2 />}/>
      </Routes>
    </div>
  )
}

export default App