import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditHotel = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const[formData, setFormData] = useState({
    name: "",
    location: "",
    description: "",
    price: "",
    rating: "",
    image: "",
  });

  const[loading, setLoading] = useState(true);

  //Get single Hotel
  const getHotel = async()=>{
    try{
      const response = await fetch(
        `http://localhost:5000/api/hotels/${id}`
      );

      const data = await response.json();

      if(!response.ok){
        alert(data.message || "Hotel not found");
        return;
      }

      setFormData({
        name: data.name || "",
        location: data.location || "",
        description: data.description || "",
        price: data.price || "",
        rating: data.rating || "",
        image: data.image || "",
      })
    } catch(error) {
      console.log(error);
      alert("server error")
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    getHotel();
  }, [id]);

  // Input change
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  // Update hotel
  const handleUpdate = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch(
        `http://localhost:5000/api/hotels/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("Hotel updated successfully!");
        navigate("/dashboard/hotels");
      } else {
        alert(data.message || "Failed to update hotel");
      }

    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };


  if (loading) {
    return (
      <div className="p-8 text-xl">
        Loading hotel...
      </div>
    );
  }

  return (
    <div className="w-full h-auto bg-gray-100 p-8">

      <div className="w-3xl mx-auto bg-white p-8 rounded-xl shadow">

        <h1 className="text-3xl font-bold mb-6">
          Edit Hotel
        </h1>


        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-5"
        >


          {/* Hotel Name */}
          <div>

            <label className="block mb-2 font-semibold">
              Hotel Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-cyan-500"
              required
            />

          </div>


          {/* Location */}
          <div>

            <label className="block mb-2 font-semibold">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-cyan-500"
              required
            />

          </div>


          {/* Price */}
          <div>

            <label className="block mb-2 font-semibold">
              Price Per Night
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-cyan-500"
              required
            />

          </div>


          {/* Rating */}
          <div>

            <label className="block mb-2 font-semibold">
              Rating
            </label>

            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="0"
              max="5"
              step="0.1"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

          </div>


          {/* Image */}
          <div>

            <label className="block mb-2 font-semibold">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-cyan-500"
            />

          </div>


          {/* Description */}
          <div>

            <label className="block mb-2 font-semibold">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-cyan-500"
              required
            />

          </div>


          {/* Buttons */}
          <div className="flex gap-3">

            <button
              type="submit"
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg"
            >
              Update Hotel
            </button>


            <button
              type="button"
              onClick={() => navigate("/dashboard/hotels")}
              className="flex-1 bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3 rounded-lg"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default EditHotel