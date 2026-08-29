import React, { useState } from "react";

const Register = (props) => {

  const [gender, setGender] = useState("");

  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [image, setImage] = useState(null);

  const handleRegister = async (e) => {

    e.preventDefault();

    // Check fields
    if (
      !fullName ||
      !userName ||
      !email ||
      !phone ||
      !password ||
      !confirmPass ||
      !image ||
      !gender
    ) {
      alert("Please fill all details");
      return;
    }

    // Password check
    if (password !== confirmPass) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {

      const formData = new FormData();

      formData.append("fullName", fullName);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);
      formData.append("gender", gender);
      formData.append("image", image);

      const response = await fetch(
        "http://localhost:5000/api/users/register",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("Registration successful!");

      // Register close
      props.setRegister(false);

      // Login open
      props.setLogin(true);

    } catch (error) {

      console.log("Register Error:", error);

      alert("Not connected to Backend Server");

    }
  };

  return (

    <div
      className={
        props.register
          ? "fixed inset-0 flex h-screen justify-center items-center bg-black/40 backdrop-blur-sm z-50"
          : "hidden"
      }
    >

      <div className="bg-white rounded-xl shadow-xl p-6 w-[700px] max-h-[90vh] overflow-y-auto">

        {/* Heading */}
        <div className="flex justify-between items-center mb-5">

          <h1 className="text-3xl font-bold">
            Registration
          </h1>

          <i
            onClick={() => props.setRegister(false)}
            className="bi bi-x-circle text-2xl text-zinc-700 hover:text-red-400 hover:scale-110 cursor-pointer"
          ></i>

        </div>

        <form onSubmit={handleRegister}>

          {/* Full Name + Username */}
          <div className="flex justify-between gap-5">

            <div className="flex flex-col w-full">

              <span className="text-zinc-500 text-xl mx-1 mb-1">
                <i className="bi bi-person"></i> Full Name
              </span>

              <input
                type="text"
                placeholder="Enter Your Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
                required
              />

            </div>

            <div className="flex flex-col w-full">

              <span className="text-zinc-500 text-xl mx-1 mb-1">
                <i className="bi bi-person-badge"></i> Username
              </span>

              <input
                type="text"
                placeholder="Enter Your Username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
                required
              />

            </div>

          </div>

          {/* Email + Phone */}
          <div className="flex justify-between gap-5 mt-4">

            <div className="flex flex-col w-full">

              <span className="text-zinc-500 text-xl mx-1 mb-1">
                <i className="bi bi-envelope"></i> Email
              </span>

              <input
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
                required
              />

            </div>

            <div className="flex flex-col w-full">

              <span className="text-zinc-500 text-xl mx-1 mb-1">
                <i className="bi bi-telephone"></i> Phone Number
              </span>

              <input
                type="text"
                placeholder="Enter Your Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
                required
              />

            </div>

          </div>

          {/* Password */}
          <div className="flex justify-between gap-5 mt-4">

            <div className="flex flex-col w-full">

              <span className="text-zinc-500 text-xl mx-1 mb-1">
                <i className="bi bi-unlock2"></i> Password
              </span>

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
                required
              />

            </div>

            <div className="flex flex-col w-full">

              <span className="text-zinc-500 text-xl mx-1 mb-1">
                <i className="bi bi-unlock2-fill"></i> Confirm Password
              </span>

              <input
                type="password"
                placeholder="Confirm Your Password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
                required
              />

            </div>

          </div>

          {/* Image */}
          <div className="mt-4">

            <h2 className="text-zinc-500 text-xl mb-2">
              <i className="bi bi-image"></i> Profile Image
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full"
              required
            />

          </div>

          {/* Gender */}
          <div className="mt-5">

            <h2 className="text-zinc-500 text-xl mb-2">
              <i className="bi bi-gender-ambiguous"></i>
              Select Gender
            </h2>

            <div className="flex gap-5">

              <label className="flex gap-2 text-zinc-500 text-lg">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>

              <label className="flex gap-2 text-zinc-500 text-lg">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>

              <label className="flex gap-2 text-zinc-500 text-lg">
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Other
              </label>

            </div>

          </div>

          {/* Register */}
          <button
            type="submit"
            className="w-full font-semibold text-zinc-700 px-3 py-2 rounded bg-transparent border hover:bg-emerald-400 mt-5 cursor-pointer"
          >
            Register
          </button>

        </form>

        {/* Login */}
        <div className="flex gap-1 w-full justify-center mt-3">

          <p className="text-blue-700">
            Already have an account?
          </p>

          <button
            onClick={() => {
              props.setRegister(false);
              props.setLogin(true);
            }}
            className="hover:text-red-600 cursor-pointer"
          >
            Login
          </button>

        </div>

      </div>

    </div>
  );
};

export default Register;