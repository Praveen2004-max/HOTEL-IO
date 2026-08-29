import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const amenitiesList = [
  "WiFi",
  "AC",
  "TV",
  "Parking",
  "Room Service",
  "Breakfast",
  "Swimming Pool",
  "Gym",
  "Mini Bar",
];

const EditRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roomNumber: "",
    hotelName:"",
    roomType: "",
    price: "",
    capacity: "",
    bedType: "",
    rating: "",
    roomSize: "",
    amenities: [],
    image: "",
    status: "Available",
  });

  const [loading, setLoading] = useState(true);

  // GET SINGLE ROOM
  const getRoom = async () => {
    try{
      const response = await fetch(
        `http://localhost:5000/api/rooms/${id}`
      );

      const data = await response.json();

      console.log("Room:", data);

      if (!response.ok) {
        alert(data.message || "Room not Found");
        return;
      }

      setFormData({
        roomNumber: data.roomNumber || "",
        hotelName: data.hotelName || "",
        roomType: data.roomType || "",
        price: data.price || "",
        capacity: data.capacity || "",
        bedType: data.bedType || "",
        roomSize: data.roomSize || "",
        rating: data.rating || "",
        amenities: data.amenities || [],
        image: data.image || "",
        status: data.status || "Available",
      });

    } catch (error) {
      console.log("Get Room Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRoom();
  }, [id]);

  // NORMAL INPUT

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // AMENITIES
  const handleAmenityChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      amenities: checked
        ? [...prev.amenities, value]
        : prev.amenities.filter(
            (amenity) => amenity !== value
          ),
    }));

  };

  // UPDATE ROOM
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(
        `http://localhost:5000/api/rooms/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            price: Number(formData.price),
            capacity: Number(formData.capacity),
            roomSize: Number(formData.roomSize),
            rating: Number(formData.rating),
          }),
        }
      );


      const data = await response.json();
      console.log("Update Response:", data);

      if (response.ok) {
        alert("Room Updated Successfully");
        navigate("/dashboard/rooms");
      } else {
        alert(data.message || "Room update nahi hua");
      }
    } catch (error) {
      console.log("Update Room Error:", error);
      alert("Server se connection nahi ho raha");
    }
  };

  // LOADING
  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <p className="text-lg font-semibold">
          Loading Room...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-auto bg-gray-50 p-5">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-7">
       {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Edit Room</h1>
            <p className="text-gray-500 mt-1">Update room information</p>
          </div>
          <i onClick={() => navigate("/dashboard/rooms")}
           className="bi bi-x-circle text-2xl text-zinc-700 hover:text-red-400 hover:scale-110 cursor-pointer"
          ></i>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Room Number */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              Room Number
            </label>
            <input
              type="text"
              name="roomNumber"
              value={formData.roomNumber}
              onChange={handleChange}
              required
              className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
            />
          </div>
          {/* Room Type */}
          <div>
            <label className="text-sm font-semibold block mb-1">Room Type</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              required
              className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
            >
              <option value="">
                Select Room Type
              </option>
              <option value="Standard">
                Standard
              </option>
              <option value="Deluxe">
                Deluxe
              </option>
              <option value="Suite">
                Suite
              </option>
              <option value="Family">
                Family
              </option>
            </select>
          </div>

          {/* Price + Capacity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold block mb-1">
                Price / Night
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                required
                className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-sm font-semibold block mb-1">
                Guest Capacity
              </label>
              <input
                type="number"
                name="capacity"
                value={formData.capacity}
                onChange={handleChange}
                min="1"
                required
                className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Bed + Size */}
          <div className="flex gap-2 w-full">
            <div className="mt-5 w-full">
              <label className="text-sm font-semibold block mb-1">Bed Type</label>
              <select
                name="bedType"
                value={formData.bedType}
                onChange={handleChange}
                className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
              >
                <option value="">
                  Select Bed
                </option>
                <option value="Single Bed">
                  Single Bed
                </option>
                <option value="Double Bed">
                  Double Bed
                </option>
                <option value="Queen Bed">
                  Queen Bed
                </option>
                <option value="King Bed">
                  King Bed
                </option>
              </select>
            </div>
            <div className="mt-5 w-full">
              <label className="text-sm font-semibold block mb-1">Rating</label>
              <input type="number" name="rating"                                                                                                  
                value={formData.rating}
                onChange={handleChange}
                className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500" />
            </div>
          </div>
            <div>
              <label className="text-sm font-semibold block mb-1">
                Room Size
              </label>
              <input
                type="number"
                name="roomSize"
                value={formData.roomSize}
                onChange={handleChange}
                min="0"
                className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
              />
            </div>

          {/* Amenities */}
          <div>
            <label className="text-sm font-semibold block mb-2">
              Amenities
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 border rounded-lg p-4">
              {amenitiesList.map((amenity) => (
               <label
                  key={amenity}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={amenity}
                    checked={formData.amenities.includes(amenity)}
                    onChange={handleAmenityChange}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">
                    {amenity}
                  </span>
                </label>
              ))}
            </div>
          </div>


          {/* Status */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
            >
              <option value="Available">
                Available
              </option>
              <option value="Booked">
                Booked
              </option>
              <option value="Maintenance">
                Maintenance
              </option>
            </select>
          </div>

          {/* Image */}
          <div>
            <label className="text-sm font-semibold block mb-1">
              Room Image URL
            </label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full h-11 border rounded-lg px-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => navigate("/dashboard/rooms")}
              className="w-1/2 border border-gray-300 rounded-lg py-3 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg py-3 font-medium"
            >
              Update Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRoom;