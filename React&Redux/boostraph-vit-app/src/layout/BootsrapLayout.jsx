import Accordion from 'react-bootstrap/Accordion';
import { Link, Outlet } from 'react-router-dom';
import { ArrowRight } from 'react-bootstrap-icons';
import { useContext } from 'react';
import { AddCardContext, UserContext, WishlistContext } from '../contexts/Context';
import { Badge, Button, Container, Navbar } from 'react-bootstrap';
import ScrollToTop from '../components/ScrollToTop';
function BootsrapLayout() {
  const { name } = useContext(UserContext)
   const { wishlistState, wishlistDispatch } = useContext(WishlistContext);
    const { cardsState, cardsDispatch } = useContext(AddCardContext);




  return (
    <div className="container-fluied   ">
      <h3 className='bg-primary p-3 text-white'> React Bootstrap Components </h3>


      <div className="row mb-2  height">


        <div className="col-3  p-2 height   rounded-3 border border-2"  >
          {/* <div className='btn btn-primary m-2'>Bootstrap Components</div> */}
          {/* <hr /> */}

          <Accordion defaultActiveKey="0" flush bsPrefix='' >
            <Accordion.Item eventKey="0"  >
              <Accordion.Header>Non Interactive Components</Accordion.Header>
              <Accordion.Body className='scroll' >

                <hr />
                <Link className='text' to="/"> <ArrowRight /> Badges</Link>

                <hr />
                <Link className='text' to="/button-bootsrap"> <ArrowRight /> Button</Link>

                <hr />
                <Link className='text' to="/breadcrumb-bootsrap"> <ArrowRight /> Breadcrumb</Link>

                <hr />
                <Link className='text' to="/buttongroup-bootsrap">  <ArrowRight /> Button Group</Link>

                <hr />
                <Link className='text' to="/cards-bootsrap">  <ArrowRight className='me-2' /> Cards</Link>
                <hr />


                <Link className='text' to="/images-bootsrap">  <ArrowRight className='me-2' />Images</Link>

                <hr />
                <Link className='text' to="/listgroup-bootsrap">   <ArrowRight className='me-2' /> ListGroup</Link>

                <hr />
                <Link className='text' to="/figure-bootsrap">   <ArrowRight className='me-2' /> Figure</Link>
                <hr />
                <Link className='text' to="/toasts-bootsrap">  <ArrowRight className='me-2' /> Toasts</Link>

                <hr />
                <Link className='text' to="/pagination-bootsrap">  <ArrowRight className='me-2' /> Pagination</Link>

                <hr />
                <Link className='text' to="/spinners-bootsrap"> <ArrowRight className='me-2' /> Spinners</Link>

                <hr />
                <Link className='text' to="/tables-bootsrap"> <ArrowRight className='me-2' /> Tables</Link>
                <hr />
                <Link className='text' to="/Progresbar-bootsrap"> <ArrowRight className='me-2' />Progresbar </Link>
                <hr />
              </Accordion.Body>
            </Accordion.Item>


            <Accordion.Item eventKey="1" >
              <Accordion.Header >Interactive Components</Accordion.Header>
              <Accordion.Body className='scroll' >

                <hr />
                <Link className='text' to="/bropdown-bootsrap"> <ArrowRight className='me-2' />Dropdowns</Link>
                <hr />
                <Link className='text' to="/modal-bootsrap"> <ArrowRight className='me-2' />Modal</Link>
                <hr />
                <Link className='text' to="/accordion-bootsrap">  <ArrowRight className='me-2' />Accordion</Link>

                <hr />
                <Link className='text' to="/carousel-bootsrap">  <ArrowRight className='me-2' />Carousal</Link>

                <hr />
                <Link className='text' to="/navbar-bootsrap">  <ArrowRight className='me-2' />NavBar</Link>
                <hr />
                <Link className='text' to="/overlay-bootsrap">  <ArrowRight className='me-2' />Overlay</Link>
                <hr />
                <Link className='text' to="/navtab-bootsrap">  <ArrowRight className='me-2' />NavTabs</Link>
                <hr />
                <Link className='text' to="/form-bootsrap">  <ArrowRight className='me-2' />Form</Link>

                <hr />
                <Link className='text' to="/form-bootsrap-basic-valid">  <ArrowRight className='me-2' />BasicFormValid</Link>
                <hr />
                <Link className='text' to="/form-bootsrap-formikvalid">  <ArrowRight className='me-2' />FromikVlaid</Link>
                <hr />
                <Link className='text' to="/react-hook-form">  <ArrowRight className='me-2' />React hook form</Link>
                <hr />
                <Link className='text' to="/react-hook-Yup-form">  <ArrowRight className='me-2' />React hook Yuo from</Link>
                <hr />
                {/* <Link className='text' to="/react-hook-exe">  <ArrowRight className='me-2' />exam</Link>
                <hr /> */}
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" >
              <Accordion.Header> Task project </Accordion.Header>
              <Accordion.Body className='scroll' >

                <Link className='text' to="/tod-list"> <ArrowRight className='me-2' />Todo list </Link>
                <hr />
                <Link className='text' to="/calculator"> <ArrowRight className='me-2' />Calculator </Link>
                <hr />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3" >
              <Accordion.Header>Context</Accordion.Header>
              <Accordion.Body className='scroll' >

                <Link className='text' to="/state-management"> <ArrowRight className='me-2' /> useContext</Link>
                <hr />

                <Link className='text' to="/Product-list"> <ArrowRight className='me-2' />Product list </Link>
                <hr />

                <Link className='text' to="/Product-Add-list"> <ArrowRight className='me-2' />  Add Wishlist </Link>
                <hr />
                <Link className='text' to="/Product-Add-cards"> <ArrowRight className='me-2' />Add Cart list </Link>
                <hr />

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4" >
              <Accordion.Header>Nested Routing</Accordion.Header>
              <Accordion.Body className='scroll' >

                <Link className='text' to="/blogs"> <ArrowRight className='me-2' />Blogs</Link>
                <hr />
                <Link className='text' to="/navigate"> <ArrowRight className='me-2' />Navigate</Link>
                <hr />

                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5" >
              <Accordion.Header>Hook</Accordion.Header>
              <Accordion.Body className='scroll' >

                <Link className='text' to="/ref"> <ArrowRight className='me-2' />Use Ref Hook</Link>
                <hr />
                <Link className='text' to="/effect"> <ArrowRight className='me-2' />Use Effect Hook</Link>
                <hr />
                <Link className='text' to="/memo"> <ArrowRight className='me-2' />Use Memo Hook</Link>
                <hr />
                <Link className='text' to="/callback"> <ArrowRight className='me-2' />Use callback Hook</Link>
                <hr />
                <Link className='text' to="/custom-hook"> <ArrowRight className='me-2' />Custom hook</Link>
                <hr />
                {/* <Link className='text' to="/navigate"> <ArrowRight className='me-2' />Navigate</Link>
                <hr /> */}

                
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6" >
              <Accordion.Header>Fetch api & axios</Accordion.Header>
              <Accordion.Body className='scroll' >
                <Link className='text' to="/fetch"> <ArrowRight className='me-2' />Fetch api</Link>
                <hr/>

                <Link className='text' to="/axios"> <ArrowRight className='me-2' />Axios</Link>
                
                
                
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>


        <div className="col-9 border rounded-4 shadow-lg  bg-light border-3   ">
          {/* <div className=' row  mt-3  border-bottom border-2 text-end   '>
            <Link to="/login-bootsrap" className=''>  {name}  login</Link>
          </div> */}
          <Navbar bg="primary" variant="dark" className="sticky-top shadow-sm z-3">
            <Container>
              <Navbar.Brand>Products List</Navbar.Brand>

              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <span className="me-3">
                    <strong>{name}</strong> watching...
                  </span>

                  <Link className="btn btn-outline-dark me-3" to="/Product-Add-list">

                    Wishlist <Badge bg="dark">{wishlistState.wishlistItems.length}</Badge>

                  </Link>

                  <Link className="btn btn-outline-dark me-3" to="/Product-Add-cards">

                    Cart <Badge bg="dark">{cardsState.cardsItems.length}</Badge>

                  </Link>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>



          <Outlet />
          <ScrollToTop/>
        </div>

      </div>
    </div>
  );
}

export default BootsrapLayout;
