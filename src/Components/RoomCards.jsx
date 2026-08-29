import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoomCards = ({rooms}) => {

   const navigate = useNavigate();

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 px-3'>
      {rooms.map((room)=>(
        <div key={room._id} className='w-full rounded-xl shadow-md overflow-hidden bg-white'>

        <img src={room.image} alt={`Room ${room.roomNumber}`} className='w-full h-50 object-cover hover:scale-105 duration-500 transition' />

        <div className='flex justify-between px-3 mt-3'>
          <div>
            <h4 className='text-xl font-bold text-gray-800'>Room {room.roomNumber}</h4>
            <p className='text-sm font-bold text-gray-700'>{room.roomType}</p>
          </div>
          <div className="px-3 py-1 rounded text-lg font-semibold bg-green-200 text-gray-800 items-center" >         
            Available
          </div>
        </div>

        <div className='px-4 mt-2'>
          <p className='flex gap-2 items-center'><img className='h-5 w-5' src="./Icons/user.svg" alt="user-icon" /><span className='font-md text-lg text-zinc-700'>{room.capacity} Guests</span></p>
          <p className='flex gap-2 items-center'><img className='h-5 w-5' src="./Icons/room.svg" alt="room-icon" /><span className='font-md text-lg text-zinc-700'>{room.bedType}</span></p>
          <p className='flex gap-2 items-center'><img className='h-5 w-5' src="./Icons/areagraph.svg" alt="room-icon" /><span className='font-md text-lg text-zinc-700'>{room.roomSize} sq.ft</span></p>
        </div>

        <div className='px-4 mt-2'>
          <p className='font-bold text-lg'>₹{room.price}<span className="text-sm text-gray-500">{" "}/ night</span></p>
          <p className='flex gap-1 w-14 bg-green-200 text-green-700 px-2 py-1 rounded-md text-sm font-semibold'><img className='h-4 w-4' src="./Icons/star.svg" alt="star-icon" />{room.rating}</p>
        </div>

         <div className="flex flex-wrap gap-2 p-4 mt-2">
            {room.amenities?.slice(0, 4).map((amenity) => (
              <span
                key={amenity}
                className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs"
              >
              {amenity}
              </span>
            ))}
            
            {room.amenities?.length > 4 && (
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs">
                +{room.amenities.length - 4} more
              </span>
            )}

          </div>

        <div className='px-4 mb-4'>
          <button onClick={() => navigate("/book")} className='w-full rounded-lg px-2 py-3 bg-blue-500 hover:bg-blue-600'>Book Now</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default RoomCards