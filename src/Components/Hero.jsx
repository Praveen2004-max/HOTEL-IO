import React from 'react'
import { useState } from "react"

const Hotels = [
    {
      image:'./Images/Hotel1.jpg',
    },
    {
      image:'./Images/Hotel2.jpg',
    },
    {
      image:'./Images/Hotel3.jpg',
    },
    {
      image:'./Images/Hotel4.jpg',
    },
    {
      image:'./Images/Hotel5.jpg',
    },
    {
      image:'./Images/Hotel6.jpg',
    },
    
]

const Hero = () => {

  const [show, setShow] = useState(false);

  return (
  <div className="flex w-screen px-8">
    <div className="flex gap-10 justify-center items-center absolute inset-0 mt-30 p-25 w-full">

      <div className="flex flex-col gap-2 mb-20">
        <p className="bg-cyan-300 text-sm rounded-xl w-54 px-3 py-0.5">
          The Ultimate Hotel Experience
        </p>

        <h2 className="text-5xl font-bold w-150 bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent">
          Discover Your Perfect <br />
          Gateway Destination
        </h2>

        <h6 className="text-sm text-gray-700">
          Unparalleled luxury and comfort await at the world's most exclusive
          <br />
          hotels and resorts. Start your journey today
        </h6>

        <div
          onClick={() => setShow(!show)}
          
          className="font-bold bg-cyan-200 text-cyan-600 rounded-xl p-2 w-60 hover:scale-105 transition shadow-xl cursor-pointer"
        >
          <i className="bi bi-clipboard2-check"></i> Check Booking Availability
        </div>
      </div>

      <div className="w-100 h-100 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-110 transition duration-300">
        <div className="flex animate-slider h-full">
          {[...Hotels, ...Hotels].map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="Hotel"
              className="w-full h-full flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </div>

    <div className={show ? "flex w-full h-screen justify-center items-center" : "hidden"}>
      <div className='h-50 w-250 bg-gray-300 text-black rounded-xl shadow-2xl'>
        <div>
          <h4 className='px-6 py-3 text-xl font-bold'>Check Hotel Availability</h4>
        </div>
        <form action="">
          <div className='flex'>
            <div className='flex flex-col px-6'>
              <label className='font-bold'>Check-In: </label>
              <input type="date" className='shadow-none w-60 px-2 py-1 rounded border'/>
            </div>
            <div className='flex flex-col px-6'>
              <label className='font-bold'>Check-In-Out: </label>
              <input type="date" className='shadow-none w-60 px-2 py-1 rounded border'/>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}

export default Hero