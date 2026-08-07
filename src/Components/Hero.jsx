import React from 'react'
import Navbar from './Navbar'
import Hero2 from './Hero2'

const Hotels = [
    {
      image:'/Images/Hotel1.jpg',
    },
    {
      image:'/Images/Hotel2.jpg',
    },
    {
      image:'/Images/Hotel3.jpg',
    },
    {
      image:'/Images/Hotel4.jpg',
    },
    {
      image:'/Images/Hotel5.jpg',
    },
    {
      image:'/Images/Hotel6.jpg',
    },
    
]

const Hero = () => {
  return (
    <div className='relative h-[100VH]'>
      <Navbar />
      <img className='w-full h-full object-cover blur-sm' src="/Images/HomeImage.jpg" alt="hero-image" />

      <div className='flex w-screen px-8'>
        <div className='flex gap-10 justify-center items-center absolute inset-0 mt-30 p-25 w-full'>
          <div className='flex flex-col gap-2 mb-20'>
            <p className='bg-cyan-300 text-sm rounded-xl w-54 px-3 py-0.5'>The Ultimate Hotel Experience</p>
            <h2 className='text-5xl font-bold w-150 bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent'>Discover Your Perfect <br/> Gateway Destination</h2>
            <h6 className='text-sm text-gray-700'>Unparalleled luxury and comfort await at the world's most exclusive <br/> hotels and resorts. Start your journey today</h6>
          </div>

          <div className='w-100 h-100 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-110 transition duration-300 ease-in-out'>  
            <div className='flex animate-slider h-full'>
              {
              [...Hotels,...Hotels].map((item, index)=>(
                <img 
                  key={index} 
                  src={item.image} 
                  alt="Image"
                  className="w-full h-full flex-shrink-0" 
                  />
              ))
              }
            </div>
          </div> 
        </div>
      </div>
      <Hero2/>    
    </div>
  )
}

export default Hero