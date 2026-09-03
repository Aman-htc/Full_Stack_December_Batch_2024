import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
    const Navigate =useNavigate()
    const handalsubmit =()=>{
        localStorage.setItem('login',true)
        Navigate('/')

    }
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Login</h4>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label for="email" className="form-label">Email address</label>
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label for="password" className="form-label">Password</label>
                                        <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                                    </div>
                                    <div className="mb-3 form-check">
                                        <input type="checkbox" className="form-check-input" id="rememberMe" />
                                        <label className="form-check-label" for="rememberMe">Remember me</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary" onClick={handalsubmit}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
