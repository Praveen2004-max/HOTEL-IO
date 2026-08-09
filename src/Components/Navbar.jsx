import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {

  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("hotelioUser"))
  );

  const [showMenu, setShowMenu] = useState(false);

  // Logout
  const logout = () => {
    localStorage.removeItem("hotelioUser");
    setUser(null);
    setShowMenu(false);
  };

  // Login open
  const openLogin = () => {
    setRegister(false);
    setLogin(true);
  };

  // Register open
  const openRegister = () => {
    setLogin(false);
    setRegister(true);
  };

  return (
    <div className="fixed z-50 w-full">
      {/* ================= NAVBAR ================= */}

      <nav className="w-full flex items-center justify-between px-8 py-3 bg-transparent shadow-2xs hover:shadow-xl">

        {/* Logo */}
        <div>
          <img className="h-13 w-13 rounded-full" src="./hotelLogo.svg" alt="Hotellogo" />
        </div>

        {/* Navigation */}
        <div className="flex gap-5 items-center">

          {/* Links */}
          <div className="flex text-sm gap-5 px-2 py-2">

            <a
              className="hover:text-emerald-400"
              href="#"
            >
              Home
            </a>

            <a
              className="hover:text-emerald-400"
              href="#"
            >
              Rooms
            </a>

            <a
              className="hover:text-emerald-400"
              href="#"
            >
              Experience
            </a>

            <a
              className="hover:text-emerald-400"
              href="#"
            >
              About
            </a>

          </div>

          {/* Dashboard */}
          <button
            className="text-sm text-black hover:text-zinc-800 
            bg-transparent hover:bg-emerald-600 
            border px-3 py-2 rounded-xl 
            cursor-pointer hover:scale-95 duration-500"
          >
            Dashboard
          </button>

          {/* ================= USER ================= */}

          {user ? (

            <div className="relative">

              {/* User Image */}
              <button
                type="button"
                onClick={() => setShowMenu(!showMenu)}
                className="w-11 h-11 rounded-full overflow-hidden 
                border-2 border-emerald-500 cursor-pointer"
              >

                <img
                  src={user.image}
                  alt="User"
                  className="w-full h-full object-cover"
                />

              </button>

              {/* Profile Menu */}
              {showMenu && (

                <div
                  className="absolute right-0 top-14 w-64 
                  bg-white shadow-xl rounded-xl p-4 z-[1000]"
                >

                  {/* User Information */}
                  <div className="flex items-center gap-3 border-b pb-3">

                    <img
                      src={user.image}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>

                      <h3 className="font-semibold">
                        {user.fullName}
                      </h3>

                      <p className="text-sm text-gray-500">
                        {user.email}
                      </p>

                    </div>

                  </div>

                  {/* Profile */}
                  <button
                    type="button"
                    className="block w-full text-left py-3 
                    hover:text-emerald-600"
                  >
                    👤 My Profile
                  </button>

                  {/* Bookings */}
                  <button
                    type="button"
                    className="block w-full text-left py-3 
                    hover:text-emerald-600"
                  >
                    📋 My Bookings
                  </button>

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={logout}
                    className="block w-full text-left py-3 
                    text-red-500 hover:text-red-700"
                  >
                    🚪 Logout
                  </button>

                </div>

              )}

            </div>

          ) : (

            /* ================= LOGIN / REGISTER ================= */

            <div className="flex gap-3">

              {/* Login */}
              <button
                type="button"
                onClick={openLogin}
                className="bg-transparent 
                hover:bg-cyan-600 hover:text-zinc-900 
                border text-black rounded-xl px-3 py-2 
                cursor-pointer hover:scale-95 duration-500"
              >
                Login
              </button>

              {/* Register */}
              <button
                type="button"
                onClick={openRegister}
                className="bg-transparent 
                hover:bg-cyan-600 hover:text-zinc-900 
                border text-black rounded-xl px-3 py-2 
                cursor-pointer hover:scale-95 duration-500"
              >
                Register
              </button>

            </div>

          )}

        </div>

      </nav>

      {/* ================= LOGIN POPUP ================= */}

      {login && (
        <Login
          login={login}
          setLogin={setLogin}
          setRegister={setRegister}
          setUser={setUser}
        />
      )}

      {/* ================= REGISTER POPUP ================= */}

      {register && (
        <Register
          register={register}
          setRegister={setRegister}
          setLogin={setLogin}
        />
      )}

    </div>
  );
};

export default Navbar;