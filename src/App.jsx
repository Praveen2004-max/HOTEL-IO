import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';

const App = () => {
  return (
    <div>
      <Navbar/>
      <img className='w-full h-[100vh] object-cover blur-sm' src="./Images/HomeImage.jpg" alt="hero-image" />
      <Hero />
      <Testimonials/>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/check" element={<Hero2 />}/>
      </Routes>
    </div>
  )
}

export default App