import React, { useEffect, useState } from 'react'
import HotelCard from './HotelCard';
import AddHotel from './AddHotel';

const HotelList = () => {

    const[add, setAdd] = useState(false);
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
        <div className='w-full h-auto'>

            {/* Header */}
            <div className='flex w-full shadow-[0_2px_12px_gray] justify-between rounded-lg px-2 py-5'>
                <h1 className='text-3xl font-bold ml-3'>
                    All Hotels
                </h1>
                <button onClick={()=>setAdd(true)}
                    className='font-medium text-sm hover:text-white rounded px-2 py-2 border mr-3 cursor-pointer bg-emerald-100 hover:bg-emerald-400 duration-500 transition'
                >
                    Add Hotel
                </button>
            </div>

            {/* Hotel Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {hotels.map((hotel) => (

                    <HotelCard
                        key={hotel._id}
                        hotel={hotel}
                    />

                ))}
            </div>

            {add && (<AddHotel add={add} setAdd={setAdd}/>)}

        </div>
    )
}

export default HotelList;