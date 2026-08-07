import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full px-2 py-2 font-Caveat z-50'>
        <nav className='navbar bg-white flex justify-between items-center rounded-xl px-1 py-2 shadow-md hover:shadow-xl transition duration-300'>
            <img src='./hotelLogo.svg' className='w-17 h-17'/>

            <div className='flex gap-5'>
                <div className='flex text-sm gap-2 px-2 py-2'>
                <a className='hover:text-mist-400' href="#">Home</a>
                <a className='hover:text-mist-400' href="#">Hotels</a>
                <a className='hover:text-mist-400' href="#">Experience</a>
                <a className='hover:text-mist-400' href="#">About</a>
                </div>

                <div className='text-sm text-mist-200 bg-amber-300 px-2 py-2 rounded-2xl cursor-pointer hover:scale-95 duration-500 ease-in-out'>Dashboard</div>
            </div>

            <div className='flex gap-4 text-sm px-2 py-2'>
                <div className='bg-cyan-300 text-mist-200 rounded-xl px-2 py-2 cursor-pointer hover:scale-95 duration-500 ease-in-out'>Login</div>
                <div className='bg-cyan-400 text-mist-200 rounded-xl px-2 py-2 cursor-pointer hover:scale-95 duration-500 ease-in-out'>Register</div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar