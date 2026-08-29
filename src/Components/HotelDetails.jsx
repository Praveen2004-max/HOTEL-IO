import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HotelDetails = () => {
    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);
    const getHotels = async () => {
        try{
            const response = await fetch(
                "http://localhost:5000/api/hotels"
            );
            const data = await response.json();
            console.log("Hotels from API:", data);
            setHotels(data);
            } catch (error) {
                console.log(error);
            }
        };
    
        useEffect(() => {
            getHotels();
        }, []);

  return (
    <div className='h-auto w-full bg-white'>
        <div className='flex flex-col h-full w-full py-25 justify-center items-center'>
            {/* Filter box */}
            <div className='w-[90vw] h-45 bg-white rounded-xl p-4 shadow-[0px_2px_20px_gray]'>
                Features
            </div>

            {/* Hotel Cards */}
            <div className='flex flex-col h-full w-[90vw] mt-10 rounded-lg bg-white shadow-[0px_2px_20px_gray] px-5'>
                {/* search box */}
                <form className="flex w-[82vw] gap-1 py-3 mt-2">
                    <input className="border rounded h-10 w-60 hover:bg-zinc-200 px-2 font-medium text-lg outline-none hover:border-blue-400" type="search" placeholder="Search for Hotels"/>
                    <button className="btn btn-outline-success font-medium text-lg h-10 w-20 border rounded hover:bg-emerald-500 hover:scale-95" type="submit">Search</button>
                </form>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {hotels.map((hotel)=>(

                    <div key={hotel._id} className='h-auto w-110 mt-2 mb-4 rounded-xl overflow-hidden shadow-md'>
                        <img src={hotel.image} alt={hotel.name}  className='w-120 h-65 object-cover hover:scale-105 duration-300 transition' />
                        <div className='p-3'>
                            <h1 className='text-2xl font-bold mt-1 text-gray-700'>{hotel.name}</h1>
                            <p className='text-sm text-gray-600'>{hotel.location}</p>
                            <p className='text-sm text-gray-800'>{hotel.description}</p>
                            <div className='flex justify-between mt-1'>
                                <p className='bg-green-500 text-white px-2 py-1 rounded-md'>{hotel.rating}</p>
                                <p className='font-bold text-lg'>₹{hotel.price}<span className="text-sm text-gray-500">{" "}/ night</span></p>
                            </div>
                        </div>
                        <div className='w-full p-2'>
                            <button onClick={() => navigate(`/hotels/${hotel._id}`)} className='w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600'>View Details</button>
                        </div>
                    </div>
                ))}   
                </div>
            </div>
        </div>
    </div>
  )
}

export default HotelDetails