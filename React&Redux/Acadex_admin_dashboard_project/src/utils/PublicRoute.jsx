// PublicRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = localStorage.getItem("login") === "true";

  if (isLoggedIn) {
    return <Navigate to="/" replace />; 
  }

  return <Outlet />;
};

export default PublicRoute;
