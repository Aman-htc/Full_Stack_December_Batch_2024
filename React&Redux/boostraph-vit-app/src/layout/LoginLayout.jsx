



import { Link, Outlet, } from 'react-router-dom'


function LoginLayout() {
  return (
    <>

      <div className="conatiner">

        <div className="row">
          <div className="clo-12">
            <Link to="/login">Login</Link>
          </div>


          <div className="col-12">
            <Outlet />

          </div>

        </div>

      </div>
    </>



  )
}

export default LoginLayout
