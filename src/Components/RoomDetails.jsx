import React, { useEffect, useState } from 'react'
import RoomCards from './RoomCards'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {

  const {id} = useParams();
  const[hotel, setHotel] = useState(null);
  const[rooms, setRooms] = useState([]);
  const[loading, setLoading] = useState(true);

  // Hotel fetch
  const getHotel = async () => {
    try{
      const response = await fetch(
        `http://localhost:5000/api/hotels/${id}`
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Hotel not found");
      }

      setHotel(data);

      // Hotel ke available rooms
      getAvailableRooms(data._id);
    } catch(error) {
      console.log(error);
      setLoading(false);
    }
  };


  // Available rooms fetch
  const getAvailableRooms = async (hotelId) => {
  try{
    const response = await fetch(
      `http://localhost:5000/api/rooms/hotel/${hotelId}`
    );

    const data = await response.json();

    console.log("Hotel ID:", hotelId);
    console.log("Available Rooms:", data);

    if (!response.ok) {
      throw new Error(data.message || "Rooms not found");
    }

    setRooms(data);

  } catch (error) {
    console.log("Room Error:", error);
    setRooms([]);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    getHotel();
  }, [id]);


  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }


  if (!hotel) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">
          Hotel Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className='w-full h-auto bg-olive-100 p-6'>
      <h1 className='text-3xl font-serif font-extrabold'>HOTEL DETAILS</h1>
      <div className='flex w-full h-80 justify-between bg-white mt-4 rounded-lg shadow-md'>
        <img src={hotel.image} alt={hotel.name} className='h-70 w-120 rounded-lg ml-5 mt-5 hover:scale-105 transition duration-300' />
        <div className='p-6'>
          <p className='text-2xl font-bold text-gray-800'>{hotel.name}</p>
          <p className="text-gray-500 mt-1">{hotel.location}</p>
          <p className='text-gray-600 mt-3 line-clamp-2'>{hotel.description}</p>
        </div>
      </div>
      
      {/* Room Cards */}
      {rooms.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 mt-5 text-center">
          <h3 className="text-xl font-semibold text-gray-700">
            No Rooms Available
          </h3>
          <p className="text-gray-500 mt-2">
            Currently no rooms are available in this hotel.
          </p>
        </div>
      ) : (
        <RoomCards rooms={rooms}/>  
      )}
    </div>
  )
}

export default RoomDetails