import React from 'react'
import { NavLink } from 'react-router-dom'
// import { NavLink } from 'react-bootstrap'

const NotFoundPage = () => {
  return (
    <div>
        <div className="text-dark">
                <div className="d-flex align-items-center justify-content-center  px-2 mb-5">
                    <div className="text-center">
                        <h1 className="display-1 fw-bold">404</h1>
                        <p className="fs-2 fw-medium mt-4">Oops! Page not found</p>
                        <p className="mt-4 mb-5">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                        <NavLink to="/" className="btn btn-light fw-semibold rounded-pill px-4 py-2 custom-btn">
                            Go Home
                        </NavLink>
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default NotFoundPage
