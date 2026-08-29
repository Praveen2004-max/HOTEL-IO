import React from 'react'
import { useNavigate } from 'react-router-dom'

const HotelCard = ({hotel}) => {

  const navigate = useNavigate();

  return (
    <div key={hotel._id} className="w-100 h-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 mt-5">

      {/* Hotel Image */}
      <div className="w-full h-52 overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Hotel Details */}
      <div className="p-5">

        <h2 className="text-xl font-bold text-gray-800">
          {hotel.name}
        </h2>

        <p className="text-gray-500 mt-1">
          {hotel.location}
        </p>

        <p className="text-gray-600 mt-3 line-clamp-2">
          {hotel.description}
        </p>

        {/* Rating + Price */}
        <div className="flex justify-between items-center mt-4">

          <span className="bg-green-500 text-white px-3 py-1 rounded-md">
            {hotel.rating}
          </span>

          <p className="font-bold text-lg">
            ₹{hotel.price}
            <span className="text-sm text-gray-500">
              {" "}/ night
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">

          <button
            onClick={() => navigate(`/dashboard/hotels/edit/${hotel._id}`)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            Edit
          </button>

          <button
            onClick={() => navigate(`/dashboard/hotels/delete/${hotel._id}`)}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Delete
          </button>

        </div>
      </div>
    </div>
  )
}

export default HotelCard