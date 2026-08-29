const express = require("express");

const router = express.Router();

const {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
} = require("../controllers/hotelController");


// CREATE
router.post("/", createHotel);

// READ
router.get("/", getHotels);

router.get("/:id", getHotel);

// UPDATE
router.put("/:id", updateHotel);

// DELETE
router.delete("/:id", deleteHotel);


module.exports = router;