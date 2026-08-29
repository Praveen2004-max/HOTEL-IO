import React from 'react'
import { useState } from "react"
import { PrefetchPageLinks } from 'react-router-dom';

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
  const [adult, setAdult] = useState("");
  const [child, setChild] = useState("");

  return (
  <div className="flex h-[100vh] w-screen px-8">
    <img className='w-full object-cover blur-sm' src="./Images/HomeImage.jpg" alt="hero-image" />
    <div className="flex md:flex-row gap-10 justify-center items-center absolute inset-0 mt-30 p-25 w-full">

      <div className="flex flex-col gap-2 mb-20">
        <p className="bg-cyan-300 text-sm rounded-xl w-54 px-3 py-0.5">
          The Ultimate Hotel Experience
        </p>

        <h2 className="hero text-5xl font-bold w-150 bg-clip-text text-transparent">
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

      <div className="w-100 h-100 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.3)] ">
        <div className="flex animate-slider h-full">
          {[...Hotels, ...Hotels].map((item, index) => (
            <img
              key={index}
              src={item.image}
              alt="Hotel"
              className="w-full h-full flex shrink-0 hover:scale-110 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>

    {/* Guests Avalibility form */}
    <div className={show ? "fixed inset-0 flex h-screen justify-center items-center backdrop-blur-2xl z-50 w-full " : "hidden"}>
      <div className='h-40 w-314 bg-gray-200 text-black rounded-xl shadow-2xl'>
        <div className='flex items-center gap-1 cursor-pointer mt-4'>
          <h5 className='px-6 py-3 text-xl font-bold'>Check Hotel Availability</h5>
          <i onClick={()=> setShow(false)} className="bi bi-x-circle text-zinc-500 hover:text-red-400 hover:scale-110"></i>
        </div>
        <form className=''>
          <div className='flex'>
            <div className='flex flex-col px-6 border-r-2'>
              <label className='block font-bold'>Check-In</label>
              <input type="date" className='shadow-none w-60 px-2 py-1 rounded border' required/>
            </div>
            <div className='flex flex-col px-6 border-r-2'>
              <label className='block font-bold'>Check-In-Out</label>
              <input type="date" className='shadow-none w-60 px-2 py-1 rounded border' required/>
            </div>

            <div className='flex flex-col px-6 border-r-2'>
              <label className="block font-bold">Adult</label>
              <select
                value={adult}
                onChange={(e) => setAdult(e.target.value)}
                className="w-60 shadow-none px-2 py-1 rounded border"
                required>
              <option value="">Select Adult</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='flex flex-col px-6'>
              <label className="block font-bold">Children</label>
              <select
                value={child}
                onChange={(e) => setChild(e.target.value)}
                className="w-60 shadow-none px-2 py-1 rounded border"
                required>
              <option value="">Select Child</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className='bg-teal-400 px-3 rounded-xl cursor-pointer hover:scale-95'>
              <button className='mt-3.5 font-semibold cursor-pointer' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  </div>
);
}

export default Hero