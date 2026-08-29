import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteRoom = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);


  // Get room details
  const getRoom = async () => {

    try {

      const response = await fetch(
        `http://localhost:5000/api/rooms/${id}`
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Room nahi mila");
        navigate("/dashboard/rooms");
        return;
      }

      setRoom(data);

    } catch (error) {

      console.log("Get Room Error:", error);
      alert("Server se connection nahi ho raha");

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    getRoom();
  }, [id]);


  // Delete Room
  const handleDelete = async () => {

    setDeleting(true);

    try {

      const response = await fetch(
        `http://localhost:5000/api/rooms/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (response.ok) {

        alert("Room Deleted Successfully");

        navigate("/dashboard/rooms");

      } else {

        alert(data.message || "Room delete nahi hua");

      }

    } catch (error) {

      console.log("Delete Room Error:", error);

      alert("Server se connection nahi ho raha");

    } finally {

      setDeleting(false);

    }
  };


  // Loading
  if (loading) {

    return (
      <div className="flex justify-center items-center h-full">
        <p className="font-semibold text-lg">
          Loading...
        </p>
      </div>
    );

  }


  if (!room) {
    return null;
  }


  return (

    <div className="w-full h-screen flex items-center justify-center bg-gray-50 p-5">

      <div className="w-120 h-120 bg-white rounded-xl shadow-[0_2px_15px_gray] p-7">

        {/* Warning Icon */}

        <div className="flex justify-center mb-4">

          <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">

            <span className="text-3xl">
              ⚠️
            </span>

          </div>

        </div>


        {/* Heading */}

        <h1 className="text-2xl font-bold text-center">
          Delete Room?
        </h1>


        <p className="text-gray-500 text-center mt-2">
          Are you sure you want to delete this room?
        </p>


        {/* Room Details */}

        <div className="bg-gray-50 rounded-lg p-4 mt-5">

          <div className="flex gap-4">

            {room.image && (
              <img
                src={room.image}
                alt={room.roomNumber}
                className="w-24 h-20 object-cover rounded-lg"
              />
            )}

            <div>

              <h2 className="font-bold text-lg">
                Room {room.roomNumber}
              </h2>

              <p className="text-gray-500">
                {room.roomType}
              </p>

              <p className="font-semibold mt-1">
                ₹{Number(room.price).toLocaleString("en-IN")} / night
              </p>

            </div>

          </div>

        </div>


        {/* Warning */}

        <p className="text-sm text-red-500 text-center mt-4">
          This action cannot be undone.
        </p>


        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          <button
            onClick={() => navigate("/dashboard/rooms")}
            disabled={deleting}
            className="w-1/2 border border-gray-300 rounded-lg py-3 hover:bg-gray-100"
          >
            Cancel
          </button>


          <button
            onClick={handleDelete}
            disabled={deleting}
            className="w-1/2 bg-red-500 hover:bg-red-600 text-white rounded-lg py-3 font-medium"
          >
            {deleting ? "Deleting..." : "Delete Room"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteRoom;