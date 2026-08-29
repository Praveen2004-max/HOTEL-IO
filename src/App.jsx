import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import Home from './Pages/Home';
import Hotels from './Pages/Hotels';
import Dashboard from './Pages/Dashboard';
import Bookings from './Components/SideBarComponents/BookingList';
import Users from './Components/SideBarComponents/Users';
import Payments from './Components/SideBarComponents/Payments';
import Reports from './Components/SideBarComponents/Reports';
import Settings from './Components/SideBarComponents/Settings';
import HotelList from './Components/Hotels/HotelList';
import AddHotel from './Components/Hotels/AddHotel';
import EditHotel from './Components/Hotels/EditHotel';
import DeleteHotel from './Components/Hotels/DeleteHotel';
import RoomList from './Components/Rooms/RoomList';
import AddRoom from './Components/Rooms/AddRoom';
import EditRoom from './Components/Rooms/EditRoom';
import DeleteRoom from './Components/Rooms/DeleteRoom';
import RoomDetails from './Components/RoomDetails';
import AdminRoute from './Components/AdminRoute';
import Booking from './Components/Booking';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<AdminRoute />}>
          <Route path="/dashboard" element={<Dashboard/>} >

          <Route path="hotels" element={<HotelList/>} />
          <Route path="hotels/add" element={<AddHotel/>} />
          <Route path="hotels/edit/:id" element={<EditHotel/>} />
          <Route path="hotels/delete/:id" element={<DeleteHotel/>} />

          <Route path="rooms" element={<RoomList/>} />
          <Route path="rooms/add" element={<AddRoom/>} />
          <Route path="rooms/edit/:id" element={<EditRoom/>} />
          <Route path="rooms/delete/:id" element={<DeleteRoom/>} />

          <Route path="roomlist" element={<RoomList/>} />
          <Route path="bookings" element={<Bookings/>} />
          <Route path="users" element={<Users/>} />
          <Route path="payments" element={<Payments/>} />
          <Route path="reports" element={<Reports/>} />
          <Route path="settings" element={<Settings/>} />
          </Route>
        </Route>
        <Route path="/hotels/:id" element={<RoomDetails/>} />
        <Route path="/book" element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App