import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // User save
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify(data.user)
      );

      if(data.user.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }

      // Token save
      if (data.token) {
        localStorage.setItem(
          "token",
          data.token
        );
      }

      // Navbar user update
      props.setUser(data.user);

      alert("Login successful!");

      // Login close
      props.setLogin(false);

    } catch (error) {

      console.log("Login Error:", error);

      alert("Backend server se connection nahi ho raha");

    }
  };

  return (

    <div
      className={
        props.login
          ? "fixed inset-0 flex h-screen justify-center items-center bg-black/40 backdrop-blur-sm z-50"
          : "hidden"
      }
    >

      <div className="bg-white rounded-xl shadow-xl p-6 w-[400px]">

        {/* Heading */}
        <div className="flex justify-between items-center mb-6">

          <h1 className="text-3xl font-bold">
            Login
          </h1>

          <i
            onClick={() => props.setLogin(false)}
            className="bi bi-x-circle text-2xl text-zinc-700 hover:text-red-400 hover:scale-110 cursor-pointer"
          ></i>

        </div>

        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="mb-4">

            <label className="block text-zinc-500 text-lg mb-1">
              <i className="bi bi-envelope"></i> E-mail
            </label>

            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
              required
            />

          </div>

          {/* Password */}
          <div className="mb-5">

            <label className="block text-zinc-500 text-lg mb-1">
              <i className="bi bi-lock"></i> Password
            </label>

            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-3 py-2 w-full rounded border hover:bg-zinc-200"
              required
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full font-semibold text-zinc-700 px-3 py-2 rounded bg-transparent border hover:bg-emerald-400 cursor-pointer"
          >
            Submit
          </button>

        </form>

        {/* Register */}
        <div className="flex gap-1 w-full justify-center mt-4">

          <p className="text-blue-700">
            Don't have an account?
          </p>

          <button
            onClick={() => {
              props.setLogin(false);
              props.setRegister(true);
            }}
            className="hover:text-red-600 cursor-pointer"
          >
            Register
          </button>

        </div>

      </div>

    </div>
  );
};

export default Login;