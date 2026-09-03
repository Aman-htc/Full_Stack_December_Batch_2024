import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { Outlet } from 'react-bootstrap-icons'

function ProtectedRoutes() {
  const login = localStorage.getItem('login')

  return login === 'true' ? <Outlet /> : <Navigate to="/sign-in" />
}


export default ProtectedRoutes
