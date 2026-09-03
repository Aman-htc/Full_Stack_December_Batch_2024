import { Fragment } from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  FormControl,
  Button,
  Col,
  Row,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { Cart3, Heart, Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

import { Link, Outlet, useNavigate } from "react-router-dom";

const AmazonLayout = () => {

 
  const {wishlistItems} = useSelector((state)=>state.wishlist)
  const {cartItems} = useSelector((state)=>state.addcart)


  const navigate = useNavigate()


  const handallogout =()=>{
    localStorage.setItem('login', false)
      navigate('/')
    }

  return (
    <Fragment>
      

      <Navbar bg="dark" variant="dark" expand="lg" className="px-3 ">
        <Container fluid>

          <Navbar.Brand className="fw-bold text-warning fs-1">
            amazon 
          </Navbar.Brand>


          <Navbar.Toggle aria-controls="main-navbar" />

          <Navbar.Collapse id="main-navbar">
            <Nav className="">
                <Nav.Link as={Link} to="/" className="text-light fw-bold me-3">
                   Home
                </Nav.Link>
                <Nav.Link as={Link} to="/Product" className="text-light fw-bold me-3">
                   Product
                </Nav.Link>
              </Nav>
            <NavDropdown title="MY Account " className="text-light fw-bold" id="navbarScrollingDropdown">
              
              <NavDropdown.Item as={Link} to="/sign-in">
                Sign In
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/sign-up">
                Sign up
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/order">
                Order & list
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/profile">
                 My profile
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/changpassword">
                 Change Password
              </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item  onClick={handallogout} as={Link} to='/'>
                Logout
              </NavDropdown.Item>
            </NavDropdown>


            <Form className="d-flex flex-grow-1 mx-3  w-50">
              <FormControl
                type="search"
                placeholder="Search Amazon.in"
                className="me-0 rounded-0"
              />
              <Button variant="warning" className="rounded-0">
                <Search />
              </Button>
            </Form>


            <Nav className="align-items-center ms-auto">

              {/* <NavDropdown
                //  className=" "
                 
                id="account-dropdown"
                title={
                  <div className="text-start text-light">
                    
                    <strong> My Account</strong>
                  </div>
                }
              >
                


                <NavDropdown.Item as={Link} to="/a">
                  My Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile">
                  Chang password
                </NavDropdown.Item>



                <NavDropdown.Item as={Link} to="/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown> */}




              
              <Nav.Link as={Link} to="/cart" className="text-light fs-5">
                <Cart3 size={24} /> Cart
              </Nav.Link>
              <Badge className=" rounded-5 bg-warning">{cartItems.length}</Badge>

              <Nav.Link as={Link} to="/wishlist" className="text-light fs-5 ">
                <Heart size={24} /> Wishlist
              </Nav.Link>
              <Badge className=" rounded-5 bg-warning">{wishlistItems
                  .length}</Badge>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



      <Container fluid>
        <Outlet />
      </Container>




      <Container fluid className="bg-info p-3">
        <Container className="">
          <Row >
            <Col md={3} sm={6}>
              <h6>Get to Know Us</h6>
              <ul >
                <li>About Amazon</li>
                <li>Careers</li>
                <li>Press Releases</li>
                <li>Amazon Science</li>
              </ul>
            </Col>

            <Col md={3} sm={6}>
              <h6>Connect with Us</h6>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </Col>

            <Col md={3} sm={6}>
              <h6>Make Money with Us</h6>
              <ul>
                <li>Sell on Amazon</li>
                <li>Become an Affiliate</li>
                <li>Advertise Your Products</li>
              </ul>
            </Col>

            <Col md={3} sm={6}>
              <h6>Let Us Help You</h6>
              <ul>
                <li>Your Account</li>
                <li>Returns Centre</li>
                <li>Help</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default AmazonLayout;
