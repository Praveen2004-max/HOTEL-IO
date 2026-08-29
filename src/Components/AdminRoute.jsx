import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {

  const user = JSON.parse(
    localStorage.getItem("loggedInUser")
  );

  // No Login 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // No Admin 
  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  // Admin
  return <Outlet />;
};

export default AdminRoute;