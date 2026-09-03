import { useContext, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { Bell, ChatDots, Search } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function HeaderNavBar() {
    // const { date } = useContext(DateContext)
    const [date, setdate] = useState(new Date())
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-color px-3 mb-2">
            <Container className="d-flex justify-content-between align-items-center">

         
                <Navbar.Brand className="d-flex flex-column mb-0">
                    <h1 className='Display-4 mb-0'>Dashboard</h1>
                    <p className="mb-0 gray-200 XSmall-Medium">
                        {date.toLocaleDateString("en-GB", {
                            weekday: "long",
                            day: "2-digit",
                            month: "long",
                            year: "numeric",
                        })}</p>
                </Navbar.Brand>

               
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

             
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto  align-items-center gap-3">
                        <Nav.Link href="#search"><Search size={24} /></Nav.Link>
                        <Nav.Link href="#chat"><ChatDots size={24} /></Nav.Link>
                        <Nav.Link href="#notifications" className="bell-wrapper">
                            <Bell size={20} />
                            <span className="notification-dot"></span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default HeaderNavBar;
