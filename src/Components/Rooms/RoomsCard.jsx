import React from 'react'
import { useNavigate } from 'react-router-dom'

const RoomsCard = ({room}) => {

  const navigate = useNavigate();

  return (
    <div key={room._id} className='h-auto w-100 overflow-hidden shadow-md rounded-md'>
        <img className='object-cover w-100 h-52' src={room.image} alt={room.name} />
          <div className='p-3'>
            <div className='flex w-full justify-between'>
              <div className='px-1'>
                <h4 className='text-xl font-bold text-gray-800'>Room {room.roomNumber}</h4>
                <p className='text-sm font-bold text-gray-700'>{room.roomType}</p>
              </div>
              {/* <p className='px-7 py-3 rounded-lg bg-green-400 text-white'><i class="bi bi-bookmark-check"></i> Available</p> */}
              <span
                className={`px-3 py-1 rounded text-xs font-semibold
                ${
                  room.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : room.status === "Booked"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
                  }`}
                  >         
                {room.status}
              </span>
            </div>
            <div className='mt-3'>
              {/* <h1 className='flex gap-1 items-center'><img className='h-5 w-5' src="./Icons/hotel.svg" alt="Hotel-icon" /><span className='font-bold text-xl text-gray-900'>{room.hotelName || "Hotel"}</span></h1> */}
              <p className='flex gap-2 items-center'><img className='h-5 w-5' src="./Icons/user.svg" alt="user-icon" /><span className='font-md text-lg text-zinc-700'>{room.capacity} Guests</span></p>
              <p className='flex gap-2 items-center'><img className='h-5 w-5' src="./Icons/room.svg" alt="room-icon" /><span className='font-md text-lg text-zinc-700'>{room.bedType && (<span>{room.bedType}</span>)}</span></p>
              <p className='flex gap-2 items-center'><img className='h-5 w-5' src="./Icons/areagraph.svg" alt="room-icon" /><span className='font-md text-lg text-zinc-700'>{room.roomSize} sq.ft</span></p>
            </div>
            <div className='mt-3'>
              <p className='font-bold text-lg'>₹{room.price}<span className="text-sm text-gray-500">{" "}/ night</span></p>
              {room.rating && (
                <span className="flex gap-1 w-14 bg-green-200 text-green-700 px-2 py-1 rounded-md text-sm font-semibold">
                  <img className='h-4 w-4' src="./Icons/star.svg" alt="star-icon" /> {room.rating}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
            {room.amenities?.slice(0, 4).map((amenity) => (
              <span
                key={amenity}
                className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs"
              >
                {amenity}
              </span>
            ))}
            {room.amenities?.length > 4 && (
              <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs">+{room.amenities.length - 4} more
            </span>
            )}
            </div>

            <div className='flex gap-2 justify-between p-2'>
              <button onClick={()=>navigate(`/dashboard/rooms/edit/${room._id}`)} className='w-full text-sm rounded-md px-4 py-2 bg-blue-500 hover:bg-blue-600'>Edit</button>
              <button onClick={()=>navigate(`/dashboard/rooms/delete/${room._id}`)} className='w-full text-sm rounded-md px-4 py-2 bg-red-500 hover:bg-red-600'>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default RoomsCard