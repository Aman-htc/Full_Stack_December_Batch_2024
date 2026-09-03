import { Link } from "react-router-dom"

function Login() {
  return (


    <div className="">
      <div className="row  p-4 shadow rounded bg-white align-items-center g-4">
        <div className="col-12  ">
          <h2 className="fw-bold text-primary mb-4"> user Login</h2>

          
            <div className="">
              <label className="form-label" htmlFor="name">User Name</label>
              <input type="text" className="form-control" id="name" name="fullName" placeholder="Enter your name" />
              
            </div>
          
        </div>


        <div className="  col-12 ">
          <label className="form-label" htmlFor="email">Email Address</label>
          <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" />

        </div>

        <div className=" col-12">
          <label className="form-label" htmlFor="number">Phone Number</label>
          <input type="text" className="form-control" id="number" name="phoneNumber" placeholder="Enter your phone" />

        </div>
        <div className="col-12">

          {/* <Link to="/" className='btn btn-primary'>Login</Link> */}
        </div>

      </div>
    </div>




  )
}

export default Login
