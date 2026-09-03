import React from 'react'
import { Badge, Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Box, Heart, Star, Wallet } from 'react-bootstrap-icons'

const Order = () => {
  return (
    <div>
        <Container className="mt-5">
        <Row>
          <Col lg={3} className="text-center">
         
          <Image className="avterimage" src="https://thumbs.dreamstime.com/b/intelligent-boy-avatar-glasses-flat-style-isolated-white-background-black-hair-round-ideal-educational-apps-392811046.jpg"/>
          <p>Aman kushwaha</p>
          <Badge className="p-2 mb-4">Premium Member</Badge>
          <div className="d-flex justify-content-between mb-3">
            <h5>  <Box/>  My Orders</h5>
            <Badge className="d-flex align-items-center">3</Badge>
          </div>
          <div className="d-flex justify-content-between bg-primary p-2 rounded-3 mb-3">
            <h5>  <Heart/>  Wishlist</h5>
            <Badge className="d-flex align-items-center ms-3 bg-white text-primary">4</Badge>
          </div>
          <h5 className="mb-3 text-start">  <Wallet/> Payment Methods</h5>
          <h5 className="text-start"> <Star/>  Reviews</h5>
          </Col>
          <Col lg={9}>
          <div className="d-flex justify-content-between mb-4">
            <h3>My  Order list</h3>
            <Button variant="outline-success">All Order Cancel</Button>

          </div>
          
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
                      Order Cancel
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
                    Order Cancel
                    </Button>
                    
                  </Card.Footer>
                </Card>
              </Col>

              
            </Row>
          



          </Col>
          


        </Row>

      </Container>
      

      
    </div>
  )
}

export default Order
