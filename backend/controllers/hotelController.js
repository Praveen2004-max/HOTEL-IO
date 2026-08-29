const Hotel = require("../models/Hotel");


// CREATE
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);

    res.status(201).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// READ
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getHotel = async (req, res) => {
  try{
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found",
      });
    }
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// UPDATE
const updateHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found",
      });
    }

    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// DELETE
const deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(
      req.params.id
    );

    if (!hotel) {
      return res.status(404).json({
        message: "Hotel not found",
      });
    }

    res.status(200).json({
      message: "Hotel deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


module.exports = {
  createHotel,
  getHotels,
  getHotel,
  updateHotel,
  deleteHotel,
};