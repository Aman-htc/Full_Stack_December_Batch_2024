import React, { Fragment } from 'react'
import { Breadcrumb, Button, Card, Col, Container, ListGroup, Row, TabContainer } from 'react-bootstrap'
import { HouseAddFill } from 'react-bootstrap-icons'
import { Link, Outlet } from 'react-router-dom'

function Electronics() {
  // localStorage.setItem('login',true)




  return (
    <Fragment>


      {/* <Container>
      <Row className='mt-5'>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Link to="electronics-cctv" className='text-decoration-none text-dark fs-5'>
                CCTV Camera
              </Link>
            </ListGroup.Item>

            <ListGroup.Item>
              <Link to="electronics-television" className='text-decoration-none text-dark fs-5'>
                LED Television
              </Link>
            </ListGroup.Item>

            <ListGroup.Item>
              <Link to="electronics-mobile" className='text-decoration-none text-dark fs-5'>
                Mobile
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="electronics-tablets" className='text-decoration-none text-dark fs-5'>
               Tablets
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="electronics-bluetooth" className='text-decoration-none text-dark fs-5'>
               Bluetooth Speaker
              </Link>
            </ListGroup.Item>
            <ListGroup.Item>
              <Link to="electronics-Protable" className='text-decoration-none text-dark fs-5'>
              Protable Sepaker
              </Link>
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={9}>
         
          <Outlet />
        </Col>
      </Row>
      </Container>*/}
      <Container>
        <Row className="mt-5">

          {/* ===== LEFT SIDEBAR ===== */}
          <Col lg={3}>
            <ListGroup>
              {[
                
                "Bluetooth Speaker",
                "LED Television",
                "Mobile",
                "Tablets",
                "CCTV Camera",
                "Portable Speaker"
              ].map((item, index) => (
                <ListGroup.Item key={index}>
                  <Link className="text-decoration-none text-dark fs-6">
                    {item}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          
          <Col lg={9}>
            <Row className="g-4">

            
              <Col lg='6' >
                <Card className="p-2 h-100">
                  <Card.Title>Bluetooth Headphone</Card.Title>

                  <Card.Img
                    variant="top"
                    className="mx-auto"
                    style={{ width: "200px" }}
                    src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6udDgy8dVre4qoyup5JY-Tja4JwvPiwDBJ9Qu5DIcCi3dtZDGLi76ykE7DbseVpogbywYCj2VnXNC838HloNKdpy4YxdSsVFmlrbU4B_p6ikhnT_fNa2thQ"
                  />

                  <Card.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium, corrupti amet inventore deserunt.
                    </p>

                    <p className="fw-bold">
                      ₹1399{" "}
                      <span className="text-decoration-line-through text-secondary">
                        MRP: ₹3999
                      </span>
                    </p>
                  </Card.Body>

                  <Card.Footer className="d-flex gap-2">
                    <Button variant="outline-primary" className='w-100'>
                      Add to cart
                    </Button>
                    <Button variant="primary" className='w-100' >
                       add to wishlist
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>

              <Col lg={6}>
                <Card className="p-2 h-100">
                  <Card.Title>Bluetooth Headphone</Card.Title>

                  <Card.Img
                    variant="top"
                    className="mx-auto"
                    style={{ width: "200px" }}
                    src="https://m.media-amazon.com/images/I/61tD0bZGxXL.jpg"
                  />

                  <Card.Body>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium, corrupti amet inventore deserunt.
                    </p>

                    <p className="fw-bold">
                      ₹1399{" "}
                      <span className="text-decoration-line-through text-secondary">
                        MRP: ₹3999
                      </span>
                    </p>
                  </Card.Body>

                  <Card.Footer className="d-flex gap-2">
                    <Button variant="outline-primary" className="w-100">
                      Add to cart
                    </Button>
                    <Button variant="primary" className="w-100">
                     add to wishlist
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>

              
            </Row>
          </Col>

        </Row>
      </Container>


    </Fragment>
  )
}

export default Electronics
