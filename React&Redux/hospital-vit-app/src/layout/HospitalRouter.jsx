import { NavLink, Outlet } from 'react-router-dom';

function HospitalRouter() {
  return (
    <div className='row'>
      <div className="col-12">
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
          <div className="container">
            <a className="navbar-brand fw-bold text-primary" href="#">
              Sarvagnya<span className="text-dark">Hospital</span>
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <NavLink className="nav-link" to="/">Home</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">About</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/doctors">Doctors</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/services">Services</NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link btn btn-primary text-dark px-3" to="/contact">
                    Appointment
                  </NavLink>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>

      
      <div className="col-12 mt-5 pt-4">
        <Outlet />
      </div>
    </div>
  );
}

export default HospitalRouter;
