import React from 'react'
import { ChevronDown } from 'react-bootstrap-icons'
import logo from '../assets/icons/symbol.svg'
import adminimage from '../assets/image/avtarimage.webp'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideBarHeader = () => {
    const signupUserStr = localStorage.getItem("signupUser");
    const signupUser = signupUserStr ? JSON.parse(signupUserStr) : null;
    const Admin = signupUser ? signupUser.firstname : "Guest";
    return (
        <div className='pt-2'>
            <div className="d-flex align-items-center mb-4" >
                <Image src={logo} alt="logo" className="me-2" />  <strong className="Display-4 text-dark">Acadex</strong>
            </div>

            {/* User */}
            <div className="mb-4 px-2 py-2 d-flex bg-gray-light rounded-3 align-items-center justify-content-evenly">


                <Link to='/accounts' className='text-decoration-none'>
                    <div className="d-flex align-items-center gap-2">
                        <Image
                            src={adminimage}
                            roundedCircle
                            style={{ width: '30px', height: '30px' }}
                        />

                        <div className="d-flex flex-column rounded-3 ">
                            <span className="XSmall-simiBold text-dark lh-2">
                                {Admin}  </span>
                            <small className="XSmall-Regular gray-100 lh-1">Admin</small>
                        </div>
                    </div>
                </Link>


                <ChevronDown color="#000" size={16} />
            </div>

        </div>
    )
}

export default SideBarHeader
