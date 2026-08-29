import React, { useEffect, useState } from 'react'
import RoomsCard from './RoomsCard'
import AddRoom from './AddRoom';

const RoomList = () => {

  const[addRoom, setAddRoom] = useState(false);
  const[rooms, setRooms] = useState([]);

  const getRooms = async () => {
    const response = await fetch(
        "http://localhost:5000/api/rooms"
    );
    const data = await response.json();
    console.log("Rooms from API:", data);
    setRooms(data);
  }

  useEffect(()=>{
    getRooms();
  }, []);

  return (
    <div className='w-full h-auto'>
      <div className='flex shadow-[0_2px_12px_gray] justify-between rounded px-2 py-5'>
        <h1 className='text-3xl font-bold ml-3'>All Rooms</h1>
        <button onClick={()=>setAddRoom(true)} className='font-medium text-sm hover:text-white rounded px-2 py-2 border mr-3 cursor-pointer bg-emerald-100 hover:bg-emerald-400'>Add Rooms</button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {rooms.map((room)=>(
          <RoomsCard 
            key={room._id}
            room={room}
          />
        ))}
      </div>
      {addRoom && (<AddRoom addRoom={addRoom} setAddRoom={setAddRoom}/>)}
    </div>
  )
}

export default RoomList