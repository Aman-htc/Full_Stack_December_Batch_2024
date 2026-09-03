import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
// import { Outlet } from 'react-bootstrap-icons'

function ProtectedRouters() {
  const login = localStorage.getItem('login')

  return login === 'true' ? <Outlet /> : <Navigate to="/login" />
}


export default ProtectedRouters
