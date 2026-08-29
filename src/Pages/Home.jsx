import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import HotelsCards from '../Components/HotelsCards'
import Testimonials from '../Components/Testimonials'
import Footer from '../Components/Footer'

const home = () => {
  return (
    <div className='flex flex-col justify-between items-center h-auto'>
      <Navbar login="login"/>
      <Hero/>
      <HotelsCards/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default home