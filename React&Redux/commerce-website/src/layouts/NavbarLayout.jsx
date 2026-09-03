import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Col, Container, Row, Badge, Navbar, Nav, Image, Dropdown, } from 'react-bootstrap'
import { BagDash, ChatRight, EmojiSmile, Envelope, Facebook, Heart, Moon, Sun, TelephoneFill, Twitter, Youtube } from 'react-bootstrap-icons'
import { Link, Outlet, useNavigate, } from 'react-router-dom'
const image = 'src/assets/3d-rendering-cartoon-shopping-cart.jpg'
import { AddCardContext, WishlistContext } from '../contexts/Context'

function NavbarLayout() {
  const Navigate = useNavigate()
  const hadallogout = () => {
    localStorage.setItem('login', false)
    Navigate('/')

  }
  const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' ? "dark" : "light");
  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode);
    localStorage.setItem('theme', darkMode)
  }, [darkMode]);


  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);
  const { cardsState, cardsDispatch } = useContext(AddCardContext);
  return (
    <Fragment>
      <Container>


        <Row className="align-items-center justify-content-between mb-5 mt-3">
          <Col>
            <h2 className='logo'>
              Indi<span className="text-info fs-1 ">Tronix</span>
            </h2>
          </Col>

          <Col>
            <Row className="">
              {/* <Col xs="auto" className="d-flex align-items-center gap-2">
                <div>
                  <ChatRight size={30} />
                  <Badge bg="primary" pill>1</Badge>
                </div>


                <div>
                  <small className="text-muted">Compare</small><br />
                  <strong>Products</strong>
                </div>

              </Col> */}
              

              <Col xs="auto" className="ms-4">
                <Link
                  to="/wishlist"
                  className="d-flex align-items-center gap-2 text-decoration-none text-dark"
                >
                  <div>
                    <Heart size={30} />
                    <Badge bg="primary" pill>
                      {wishlistState.wishlistItems.length}
                    </Badge>
                  </div>

                  <div>
                    <small className="text-muted">Wish</small><br />
                    <strong>List</strong>
                  </div>
                </Link>
              </Col>


              <Col xs="auto" className="ms-4">
                <Link
                  to="/add-cart"
                  className="d-flex align-items-center gap-2 text-decoration-none text-dark"
                >
                  <div>
                    <Heart size={30} />
                    <Badge bg="primary" pill>
                      {cardsState.cardsItems.length}
                    </Badge>
                  </div>

                  <div>
                    <small className="text-muted">Cart</small><br />
                    <strong>List</strong>
                  </div>

                </Link>
              </Col>

              <Col  xs="auto" className="ms-4">
                <div className=''>
                  <Badge onClick={() => setDarkMode((prev) => prev === 'light' ? 'dark' : 'light')} className="me-2 rounded-5 p-2 mt-2"
                    bg={darkMode === 'dark' ? "light" : "dark"} role="button">
                    {darkMode === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                  </Badge>
                </div>
              </Col>
              <Col>
                <Dropdown>
                        <Dropdown.Toggle className='border-0 p-0' bsPrefix=' ' id="dropdown-basic">
                            <Image src='https://thumbs.dreamstime.com/b/intelligent-boy-avatar-glasses-flat-style-isolated-white-background-black-hair-round-ideal-educational-apps-392811046.jpg' style={{ width: '50px' }}></Image>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item as={Link}  to='/order'> Order</Dropdown.Item>
                          <Dropdown.Item as={Link}  to='/profile'> My profile</Dropdown.Item>
                          <Dropdown.Item as={Link}  to='/change-password'> Chang password</Dropdown.Item>
                          <Dropdown.Item as={Link}  to='/'>Logout</Dropdown.Item>
                             
                        </Dropdown.Menu>
                    </Dropdown>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container fluid>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} className='me-3' to="home">Home</Nav.Link>
                <Nav.Link as={Link} className='me-3' to="electronics">Electronics</Nav.Link>
                <Nav.Link  className='me-4' to="/computers">Computers</Nav.Link>
                <Nav.Link  className='me-4' to="/laptop">Laptops</Nav.Link>
                <Nav.Link  className='me-4' to="/printer">Printers</Nav.Link>
                <Nav.Link  className='me-4' to="/storage">Storage</Nav.Link>
                <Nav.Link  className='me-4' to="/offer-zone">Offer Zone</Nav.Link>
                <Nav.Link  className='me-4' to="/gaming">Gaming</Nav.Link>
              </Nav>

              <Nav.Link  className='bg-white p-3  me-5' to="/login"><EmojiSmile />  LOG IN</Nav.Link>
              <Nav.Link  className='bg-white p-3  me-5' to="/login" onClick={hadallogout}><EmojiSmile /> LOGOUT</Nav.Link>

            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Container className=''>
          <Row>
            <Col>  <Outlet /> </Col>

          </Row>
        </Container>




        <Row className='bg-info p-5 mt-4'>
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
          <h4 className='text-center text-secondary'>@2025 Inditronix,All Right Resvered</h4>
        </Row>

      </Container>



    </Fragment>


    // </</Containerfuied>>


  )
}

export default NavbarLayout
