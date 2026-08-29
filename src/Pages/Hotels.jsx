import React from 'react'
import Navbar from '../Components/Navbar'
import HotelDetails from '../Components/HotelDetails'
import Footer from '../Components/Footer'

const Hotels = () => {
  return (
    <div className='w-full h-full'>
        <Navbar login="login"/>
        <HotelDetails/>
        <Footer/>
    </div>
  )
}

export default Hotels