import React from 'react'
import { Routes, Route } from "react-router-dom";
import Hero from './Components/Hero'
import Hero2 from './Components/Hero2'
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import Login from './Components/Login';
import Register from './Components/Register';

const App = () => {
  return (
    <div>
      <Navbar login="login"/>
      <img className='w-full h-[100vh] object-cover blur-sm' src="./Images/HomeImage.jpg" alt="hero-image" />
      <Hero />
      <Testimonials/>
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/check" element={<Hero2 />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App