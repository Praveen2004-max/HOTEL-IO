import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-3 w-full justify-between items-center h-auto mt-30'>
      <div className=''>
        <div className='flex gap-3'>
        <div className='w-100 h-80 ml-20 p-5'>
        <div className='flex gap-1'>
          <img className='w-6 h-6 rounded-full' src="./favicon.svg" alt="logo" />
          <h1 className='font-bold text-xl text-zinc-800'>HOTEL-IO</h1>
        </div>
        <p className='text-slate-700 text-sm mt-4'>Exposure to online reviews, whether positive or negative, increases consumer awareness and consideration of a hotel.</p>
        <div className='flex gap-2 mt-3'>
          <i className="bi bi-twitter text-slate-700"></i>
          <i className="bi bi-linkedin text-slate-700"></i>
          <i className="bi bi-instagram text-slate-700"></i>
        </div>
        <div className='flex gap-2 mt-20 items-center py-3'>
          <i className="bi bi-check-circle-fill w-4 h-5 rounded-full text-green-700 shadow-[0px_10px_10px_green]"></i>
          <p className='h-4 text-sm text-slate-700 text-center'>All Sevices are Available</p>
        </div>
        <p className='text-slate-700'>© 2026 HOTEL-IO.</p>
      </div>

      <div className='flex w-60 h-80 justify-center p-3'>
        <div className='flex flex-col gap-4 py-3'>
          <p className='text-xs font-bold text-slate-500'>CUSTOMS</p>
          <p className='text-slate-800 text-sm'>Experiences</p>
        </div>
      </div>

      <div className='flex w-60 h-80 justify-center p-3'>
        <div className='flex flex-col gap-4 py-3'>
          <p className='text-xs font-bold text-slate-500'>COMPANY</p>
          <p className='text-slate-800 text-sm'>About</p>
          <p className='text-slate-800 text-sm'>Contact</p>
          <p className='text-slate-800 text-sm'>Blog</p>
        </div>
      </div>

      <div className='flex w-60 h-80 mr-20 justify-center p-3'>
        <div className='flex flex-col gap-4 py-3'>
          <p className='text-xs font-bold text-slate-500'>LEGAL</p>
          <p className='text-slate-800 text-sm'>Privacy</p>
          <p className='text-slate-800 text-sm'>Terms-of service</p>
        </div>
      </div>
      </div>

      <div className="relative w-full h-96 overflow-hidden">
        <img
          src="./Ground.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white via-white/70 to-transparent"></div>
      </div>
      </div>
    </div>
  )
}

export default Footer