const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
    {
        roomNumber: {
            type: Number,
            required: true,
        },
        hotel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hotel",
            required: true
        },
        // hotelName: {
        //     type: String,
        //     required: true,
        // },
        roomType: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        capacity: {
            type: Number,
            required: true,
        },
        bedType: {
            type: String,
            required: true,
        },
        roomSize: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
        },
        amenities: {
            type: [String],
            default: [],
        },
        image: {
            type: String,
        },
        status: {
            type: String,
            enum: ["Available", "Booked", "Maintenance"],
            default: "Available"
        }

    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Room", roomSchema);