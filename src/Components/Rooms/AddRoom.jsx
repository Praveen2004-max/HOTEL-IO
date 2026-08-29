import React, { useEffect, useState } from "react";

const amenitiesList = [
  "WiFi",
  "AC",
  "TV",
  "Parking",
  "Room Service",
  "Breakfast",
  "Swimming Pool",
  "Gym",
];

const AddRoom = (props) => {

const [formData, setFormData] = useState({
    roomNumber: "",
    hotel: "",
    roomType: "",
    price: "",
    capacity: "",
    bedType: "",
    roomSize: "",
    amenities: [],
    rating: "",
    image: "",
    status: "Available",
  });

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
  };

  const handleAmenityChange = (e) => {
    const{value, checked} = e.target;
    setFormData((prev)=>({
        ...prev,

        amenities: checked ? [...prev.amenities, value] : prev.amenities.filter(
            (amenity)=>amenity !== value
        ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await fetch(
        "http://localhost:5000/api/rooms",
        {
          method: "POST",
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
      console.log("Room API Response:", data);

      if (response.ok) {
        alert("Room Added Successfully");
        // Form reset
        setFormData({
          roomNumber: "",
          roomType: "",
          hotel: "",
          price: "",
          capacity: "",
          bedType: "",
          roomSize: "",
          amenities: [],
          description: "",
          image: "",
          status: "Available",
        });
        // Modal close
        setAdd(false);
      } else {
        alert(data.message || "Room Not Added");
      }
    } catch (error) {
      console.log("Room Add Error:", error);
      alert("Server se connection nahi ho raha")
    }
  };

  const [hotels, setHotels] = useState([]);

  const getHotels = async () => {
    try {
      const response = await fetch(
      "http://localhost:5000/api/hotels"
      );

      const data = await response.json();

      setHotels(data);
    } catch (error) {
      console.log("Hotel Fetch Error:", error);
    }
  };

  useEffect(() => {
    getHotels();
  }, []);

  return (
    <div className={props.addRoom ? "fixed inset-0 flex h-screen justify-center items-center bg-black/40 backdrop-blur-sm z-50" : "hidden"}>
        <form onSubmit={handleSubmit} className='w-150 h-auto bg-white rounded-lg px-8 py-6 shadow-[0_2px_12px_gray]'>
            <div className='flex justify-between'>
                <h1 className='text-3xl font-bold'>Add New Room</h1>
                <i onClick={() => props.setAddRoom(false)}
                    className="bi bi-x-circle text-2xl text-zinc-700 hover:text-red-400 hover:scale-110 cursor-pointer"
                ></i>
            </div>
            <div className='flex gap-2 w-full'>
                <div className='mt-5 w-full'>
                    <label className='text-sm block font-semibold text-zinc-700'>Room No. </label>
                    <input type="number" name='roomNumber' value={formData.roomNumber} onChange={handleChange} placeholder='Enter Room number' className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500' required/>
                </div>
                <div className="mt-5 w-full">
                  <label className="text-sm block font-semibold text-zinc-700">
                    Select Hotel
                  </label>

                  <select
                    name="hotel"
                    value={formData.hotel}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-lg border outline-none px-3"
                  >
                  <option value="">
                    Select Hotel
                  </option>

                  {hotels.map((hotel) => (
                  <option key={hotel._id} value={hotel._id}>
                    {hotel.name}
                  </option>
                  ))}
                  </select>
            </div>
            </div>
            <div className='flex gap-2 w-full'>
                <div className='mt-5 w-full'>
                    <label className='text-sm block font-semibold text-zinc-700'>Image </label>
                    <input type="text" name='image' value={formData.image} onChange={handleChange} placeholder='Enter Image URL' className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500' required/>
                </div>
                <div className='mt-5 w-full'>
                    <label className='text-sm block font-semibold text-zinc-700'>Capacity </label>
                    <input type="number" name='capacity' value={formData.capacity} onChange={handleChange} placeholder='Enter Guests' className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500' required/>
                </div>
            </div>
            <div className='flex gap-2 w-full'>
                <div className="mt-5 w-full">
                  <label className="text-sm block font-semibold text-zinc-700">Bed Type</label>
                  <select
                    name="bedType"
                    value={formData.bedType}
                    onChange={handleChange}
                    className="w-full h-10 rounded-lg text-sm text-zinc-700 border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500"
                  >
                  <option value="">Select Bed</option>
                  <option value="Single Bed">Single Bed</option>
                  <option value="Double Bed">Double Bed</option>
                  <option value="Queen Bed">Queen Bed</option>
                  <option value="King Bed">King Bed</option>
                  </select>
                </div>
                <div className='mt-5 w-full'>
                    <label className='text-sm block font-semibold text-zinc-700'>Room Size </label>
                    <input type="number" name='roomSize' value={formData.roomSize} onChange={handleChange} placeholder='Enter Room size' className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500' required/>
                </div>
            </div>
            <div className='flex gap-2 w-full'>
                <div className='mt-5 w-full'>
                    <label className='text-sm block font-semibold text-zinc-700'>Price- /night </label>
                    <input type="number" name='price' value={formData.price} onChange={handleChange} placeholder='Enter Price' className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500' required/>
                </div>
                <div className='mt-5 w-full'>
                    <label className='text-sm block font-semibold text-zinc-700'>Rating </label>
                    <input type="number" name='rating' value={formData.rating} onChange={handleChange} placeholder='Enter Rating' className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500' required/>
                </div>
            </div>
            <div className='mt-5 w-full'>
                <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full h-11 text-[12px] rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200 focus:border-blue-500" required >
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
                    <option value="family">
                        Family
                    </option>
                </select>
            </div>
            <div className='mt-2'>
                <label className="text-sm block font-semibold text-zinc-700">
                    Amenities
                </label>

                <div className="grid grid-cols-2 gap-2 border rounded-lg p-4">
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
                  />
                  <span>
                    {amenity}
                  </span>
                </label>
              ))}
            </div>
          </div>
          <button type='submit' className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg mt-3" >
            Add Room
          </button>
        </form>
    </div>
  )
}

export default AddRoom