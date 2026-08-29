import React from 'react'
import { Link } from 'react-router-dom'


const Sidebar = () => {
  return (
    <div className='fixed left-0 top-0 w-64 h-screen bg-slate-900 shadow-lg'>
        <div className='flex w-full justify-between items-center mt-4 px-3'>
            <h1 className='font-bold text-white text-2xl text-center'>HOTEL-<span className='text-cyan-400'>IO</span></h1>
            <Link to="/"><img className='w-7 h-7 cursor-pointer hover:scale-110' src="./Icons/exit.svg" alt="home" /></Link> 
        </div>
        <div className="p-4">

        <Link to="/dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/dashboard.svg" alt="dashboard" />
          <span className='font-medium text-lg text-zinc-300'>Dashboard</span>
        </Link>

        <Link to="/dashboard/hotels" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/hotel.svg" alt="hotel" />
          <span className='font-medium text-lg text-zinc-300'>Hotels</span>
        </Link>

        <Link to="/dashboard/rooms" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/room.svg" alt="room" />
          <span className='font-medium text-lg text-zinc-300'>Rooms</span>
        </Link>

        <Link to="/dashboard/bookings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/booking.svg" alt="booking" />
          <span className='font-medium text-lg text-zinc-300'>Bookings</span>
        </Link>

        <Link to="/dashboard/users" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/user.svg" alt="user" />
          <span className='font-medium text-lg text-zinc-300'>Users</span>
        </Link>

        <Link to="/dashboard/payments" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/payment.svg" alt="payment" />
          <span className='font-medium text-lg text-zinc-300'>Payments</span>
        </Link>

        <Link to="/dashboard/reports" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/report.svg" alt="report" />
          <span className='font-medium text-lg text-zinc-300'>Reports</span>
        </Link>

        <Link to="/dashboard/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-cyan-500 transition" >
          <img className='w-6 h-6' src="./Icons/setting.svg" alt="setting" />
          <span className='font-medium text-lg text-zinc-300'>Settings</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar