import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteHotel = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [deleting, setDeleting] = useState(false);


  const handleDelete = async () => {

    setDeleting(true);

    try {

      const response = await fetch(
        `http://localhost:5000/api/hotels/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Hotel deleted successfully!");

        navigate("/admin/hotels");

      } else {

        alert(data.message || "Failed to delete hotel");

      }

    } catch (error) {

      console.log(error);

      alert("Server error");

    } finally {

      setDeleting(false);

    }
  };


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md text-center">

        <div className="w-full flex text-5xl mb-4 justify-center">
          <img className="h-25 w-25" src="./Icons/cautionSign.svg" alt="Icon" />
        </div>

        <h1 className="text-2xl font-bold mb-3">
          Delete Hotel?
        </h1>

        <p className="text-gray-500 mb-6">
          Are you sure you want to delete this hotel?
          This action cannot be undone.
        </p>


        <div className="flex gap-4">

          <button
            onClick={() => navigate("/dashboard/hotels")}
            className="flex-1 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>


          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold"
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteHotel;