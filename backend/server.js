const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const userRoutes = require("./routes/userRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const roomRoutes = require("./routes/roomRoutes");
const Hotel = require("./models/Hotel");

dotenv.config();

const app = express();


// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());

// ================= MONGODB LOCAL CONNECTION=============
mongoose
  .connect("mongodb://127.0.0.1:27017/HOTEL-IO")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

  //Hotel API
  app.use("/api/hotels", hotelRoutes);
  app.use("/api/rooms", roomRoutes);

  app.listen(5000, ()=>{
    console.log("Server running on port 5000");
  })

app.post("/api/rooms", async (req, res) => {
  try {
    const room = new Room(req.body);
    const savedRoom = await room.save();
    res.status(201).json(savedRoom);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: error.message
    });
  }
});

// Room Details API
app.get("/api/hotels/:id", async (req, res)=>{
  try{
    const hotel = await Hotel.findById(req.params.id);

    if(!hotel) {
      return res.status(404).json({
        message: "Hotel not found"
      });
    }
    res.json(hotel);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Available Rooms API
app.get("/api/rooms/hotel/:hotelId", async (req, res) => {
  try {

    const rooms = await Room.find({
      hotel: req.params.hotelId,
      status: "Available"
    });

    res.json(rooms);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// ================= STATIC UPLOADS =================

app.use("/uploads", express.static("uploads"));


// ================= ROUTES =================

app.use("/api/users", userRoutes);


// ================= PORT =================

const PORT = process.env.PORT || 5000;


// ================= MONGODB =================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {

    console.log("MongoDB Connected Successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  })
  .catch((error) => {

    console.log(
      "MongoDB connection error:",
      error.message
    );

  });