import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';


function Navbars() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mt-4 border border-secondary-light">
      <Container>
        <Navbar.Brand href="#home" className='bg-dark p-2 text-white bold-text'>RB</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
            <NavDropdown title="Company" id="collapsible-nav-dropdown">

              <NavDropdown.Item href="#action/3.2">
                About us
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Infrastrucation
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"> <Button >Login</Button></Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <Button variant='outline-primary'>Sign up</Button>

            </Nav.Link>
            <Nav.Link href="#memes">
              <Button variant="outline-dark" className='bg-dark text-white' onClick={handleShow}>
                Contact
              </Button>

              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Contact us</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                 <h4>We are here to help you!</h4>
                 <hr />
                 <h6 className='mb-4'>Indixpert</h6>
                 <div>
                  <h4 className='text-secondary'>Our office</h4>

                  <h6>1: Hyderabad Telangana, India</h6>
                  
                  <h6>1: Gurugarm Hariyana, India</h6>
                 
                 </div>
                 <div>
                  <h4 className='text-secondary'>Email</h4>
                  <h6>Amanku@gmail.com</h6>
                  
                 </div>
                 <div>
                  <h4 className='text-secondary'>Phone</h4>
                  <h6>8102648831</h6>
                  
                 </div>
                 
                </Offcanvas.Body>
                aman
              </Offcanvas>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;