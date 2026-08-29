import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddHotel = (props) => {

  const navigate = useNavigate();

  const[formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    rating: "",
    image: "",
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "http://localhost:5000/api/hotels",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", data);

    // Actual success check
    if (response.ok) {

      alert("Hotel Added Successfully");

      setFormData({
        name: "",
        location: "",
        description: "",
        price: "",
        rating: "",
        image: "",
      });

    } else {

      alert(data.message || "Hotel Not Added");

    }

  } catch (error) {

    console.log("Error:", error);
    alert("Server se connection nahi ho raha");

  }
};

  return (
    <div className={props.add ? "fixed inset-0 flex h-screen justify-center items-center bg-black/40 backdrop-blur-sm z-50" : "Hidden"}>
        <div className='w-150 h-170 bg-white rounded-lg px-8 py-6 shadow-[0_2px_12px_gray]'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>Add New Hotel</h1>
            <i onClick={() => props.setAdd(false)}
            className="bi bi-x-circle text-2xl text-zinc-700 hover:text-red-400 hover:scale-110 cursor-pointer"
            ></i>
          </div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-1 mt-3 px-10'>
            <div className='flex flex-col gap-1'>
              <span className='text-sm block font-semibold'>Hotel Name</span>
              <input className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200' type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Enter Hotel Name' required/>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm block font-semibold'>Location</span>
              <input className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200' type="text" name='location' value={formData.location} onChange={handleChange} placeholder='Enter Location' required/>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm block font-semibold'>Price per night</span>
              <input className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200' type="number" name='price' value={formData.price} onChange={handleChange} placeholder='Enter Price per night' required/>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm block font-semibold'>Rating</span>
              <input className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200' type="text" name='rating' value={formData.rating} onChange={handleChange} placeholder='Enter Rating' required/>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm block font-semibold'>Hotel image</span>
              <input className='w-full h-10 rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200' type="text" name='image' value={formData.image} onChange={handleChange} placeholder='Enter Image URL' required/>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-sm block font-semibold'>Description</span>
              <textarea 
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                className='w-full rounded-lg border outline-none bg-transparent px-3 py-3 hover:border-blue-500 hover:bg-slate-200' placeholder="Enter hotel description" />
            </div>
            <button onClick={()=> navigate("/dashboard/hotels")} type='submit' className='text-white w-full text-center rounded-lg px-3 py-2 bg-blue-400 mt-4 hover:bg-blue-500'>

              Submit
            </button>
          </form>
        </div>
    </div>
  )
}

export default AddHotel