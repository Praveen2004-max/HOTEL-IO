import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Components/Sidebar'

const Dashboard = () => {

  return (
    <div>

      {/* Sidebar */}
      <Sidebar />

      {/* Right Side Content */}
      <main className="ml-64 min-h-screen bg-gray-100 p-4">
        <Outlet/>
      </main>

    </div>
  );
};

export default Dashboard