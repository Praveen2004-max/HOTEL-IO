const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const User = require("../models/User");

const router = express.Router();


// ================= IMAGE UPLOAD =================

const storage = multer.diskStorage({

  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {

    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },

});


const upload = multer({

  storage: storage,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

  fileFilter: function (req, file, cb) {

    const allowedTypes =
      /jpeg|jpg|png|webp/;

    const extension =
      allowedTypes.test(
        path.extname(file.originalname).toLowerCase()
      );

    const mimeType =
      allowedTypes.test(file.mimetype);

    if (extension && mimeType) {

      cb(null, true);

    } else {

      cb(
        new Error(
          "Only JPG, JPEG, PNG and WEBP images are allowed"
        )
      );

    }

  },

});


// ================= REGISTER =================

router.post(
  "/register",
  upload.single("image"),

  async (req, res) => {

    try {

      const {
        fullName,
        userName,
        email,
        phone,
        password,
        gender,
      } = req.body;


      // Check fields

      if (
        !fullName ||
        !userName ||
        !email ||
        !phone ||
        !password ||
        !gender ||
        !req.file
      ) {

        return res.status(400).json({
          message: "Please fill all details",
        });

      }


      // Check email

      const existingEmail =
        await User.findOne({ email });

      if (existingEmail) {

        return res.status(400).json({
          message: "Email already registered",
        });

      }


      // Check username

      const existingUsername =
        await User.findOne({ userName });

      if (existingUsername) {

        return res.status(400).json({
          message: "Username already exists",
        });

      }


      // Password hash

      const hashedPassword =
        await bcrypt.hash(password, 10);


      // Image path

      const imageURL =
        `/uploads/${req.file.filename}`;


      // Create user

      const user = new User({

        fullName,

        userName,

        email,

        phone,

        password: hashedPassword,

        gender,

        image: imageURL,

      });


      await user.save();


      res.status(201).json({

        message:
          "Registration successful",

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Server error",

      });

    }

  }
);


// ================= LOGIN =================

router.post(
  "/login",

  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;


      // Find user

      const user =
        await User.findOne({ email });


      if (!user) {

        return res.status(404).json({

          message:
            "User not found",

        });

      }


      // Password check

      const passwordMatch =
        await bcrypt.compare(
          password,
          user.password
        );


      if (!passwordMatch) {

        return res.status(401).json({

          message:
            "Invalid email or password",

        });

      }


      // JWT token

      const token =
        jwt.sign(

          {
            userId: user._id,
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "1d",
          }

        );


      // Send user data

      res.json({

        message:
          "Login successful",

        token,

        user: {

          id: user._id,

          fullName:
            user.fullName,

          userName:
            user.userName,

          email:
            user.email,

          phone:
            user.phone,

          gender:
            user.gender,

          image:
            user.image,

          role:
            user.role,  

        },

      });

    } catch (error) {

      console.log(error);

      res.status(500).json({

        message:
          "Server error",

      });

    }

  }
);


module.exports = router;