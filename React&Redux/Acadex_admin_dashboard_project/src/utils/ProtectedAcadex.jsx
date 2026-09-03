// ProtectedAcadex.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAcadex = () => {
  const isLoggedIn = localStorage.getItem("login") === "true";

  // isLoggedIn ? <Outlet/> : <Navigate to="/sign-in"  />

  if (!isLoggedIn) {
    return <Navigate to="/sign-in"  />;
  }

  return <Outlet />; 
};

export default ProtectedAcadex;
