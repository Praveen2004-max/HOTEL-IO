const express = require("express");
const router = express.Router();

const {
  createRoom,
  getRooms,
  getRoom,
  updateRoom,
  deleteRoom,
} = require("../controllers/RoomController");


// CREATE
router.post("/", createRoom);

// READ
router.get("/", getRooms);

// GET AVAILABLE ROOMS OF A HOTEL
router.get("/hotel/:hotelId", async (req, res) => {
  try {
    const Room = require("../models/Room");

    const rooms = await Room.find({
      hotel: req.params.hotelId,
      status: "Available",
    });

    res.json(rooms);

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
});

router.get("/:id", getRoom);

// UPDATE
router.put("/:id", updateRoom);

// DELETE
router.delete("/:id", deleteRoom);

module.exports = router;