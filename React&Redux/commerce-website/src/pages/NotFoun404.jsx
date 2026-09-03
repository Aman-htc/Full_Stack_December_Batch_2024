import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import { BagDash, ChatRight, Envelope, Facebook, Heart, TelephoneFill, Twitter, Youtube } from 'react-bootstrap-icons'
import { NavLink } from 'react-router-dom'

function NotFoun404() {
    return (
        <div>

            <Row className="align-items-center mb-5 mt-3">
                <Col>
                    <h2 className='logo'>
                        Indi<span className="logospan">Tronix</span>
                    </h2>
                </Col>

                <Col>
                    <Row className="justify-content-end">
                        <Col xs="auto" className="d-flex align-items-center gap-2">
                            <div>
                                <ChatRight size={30} />
                                <Badge bg="primary" pill>1</Badge>
                            </div>


                            <div>
                                <small className="text-muted">Compare</small><br />
                                <strong>Products</strong>
                            </div>

                        </Col>

                        <Col xs="auto" className="d-flex align-items-center gap-2 ms-4">
                            <div>
                                <Heart size={30} />
                                <Badge bg="primary" pill>1</Badge>
                            </div>

                            <div>
                                <small className="text-muted">Wish</small><br />
                                <strong>List</strong>
                            </div>

                        </Col>

                        <Col xs="auto" className="d-flex align-items-center gap-2 ms-4">
                            <div>
                                <BagDash size={30} />
                                <Badge bg="primary" pill>1</Badge>
                            </div>

                            <div>
                                <small className="text-muted">Shopping</small><br />
                                <strong>Basket</strong>
                            </div>

                        </Col>
                    </Row>
                </Col>
            </Row>

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
            <Row className='footer p-5'>
                <Col>
                    <h3 className='mt-4 text-white fs-1'>Indotronix</h3>

                </Col>
                <Col>
                    <h5 className='mb-5 text-light'>Company</h5>
                    <p className="text-light"><Envelope />   contact@Indotronix.com</p>
                    <p className="text-light"><TelephoneFill />     8102648831</p>
                    <p className="text-light">Headquter 8426 arna bazar ro thawe bihar india </p>
                    <h6 className="text-light">Get Direction</h6>

                </Col>
                <Col>
                    <h5 className='mb-3 text-light'>Company</h5>
                    <p className="text-light">About Us</p>
                    <p className="text-light">News & Media</p>
                    <p className="text-light">Store location </p>
                    <p className="text-light">Contact Us </p>

                </Col>
                <Col>
                    <h5 className='mb-3 text-light'>Top Categories</h5>
                    <p className="text-light">Electronics</p>
                    <p className="text-light">Leptops</p>
                    <p className="text-light">Computer </p>
                    <p className="text-light">Mobile </p>
                    <p className="text-light">Gaming </p>


                </Col>
                <Col>
                    <h5 className='mb-3 text-light'>Help</h5>
                    <p className="text-light">Knowledge</p>
                    <p className="text-light">Security resorces</p>
                    <p className="text-light">terms and condiation </p>
                    <p className="text-light">Shiping policy</p>

                </Col>


                <Row className='mt-5 border-secondary border-bottom p-2'>
                    <Col>
                        <span className="text-light me-2"> <Facebook />    Facebook</span>
                        <span className="text-light me-2"><Twitter />   Twitter</span>
                        <span className="text-light me-2"> <Youtube />  Youtube</span>
                    </Col>
                    <Col className='text-end'>
                        <span className="text-light me-2">Terms & conditions</span>
                        <span className='text-light me-2'>-</span>
                        <span className="text-light me-2">Privacy Policy</span>
                        <span className='text-light me-2'>-</span>
                        <span className="text-light me-2">Refound Policy</span>
                    </Col>

                </Row>
                <h4 className='text-center text-color'>@2025 Inditronix,All Right Resvered</h4>
            </Row>


        </div >
    )
}

export default NotFoun404
