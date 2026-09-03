import React from 'react'
import { Badge, Button, Col, Container, Form, Image, Row } from 'react-bootstrap'
import { Box, Heart, Star, Wallet } from 'react-bootstrap-icons'

const Changpassword = () => {
    return (
        <div>

            <Container className="mt-5">
                <Row>
                    <Col lg={3} className="text-center">


                        <Image className="avterimage" src="https://thumbs.dreamstime.com/b/intelligent-boy-avatar-glasses-flat-style-isolated-white-background-black-hair-round-ideal-educational-apps-392811046.jpg" />
                        <p>Aman kushwaha</p>
                        <Badge className="p-2 mb-4">Premium Member</Badge>
                        <div className="d-flex justify-content-between mb-3">
                            <h5>  <Box />  My Orders</h5>
                            <Badge className="d-flex align-items-center">3</Badge>
                        </div>
                        <div className="d-flex justify-content-between bg-primary p-2 rounded-3 mb-3">
                            <h5>  <Heart />  Wishlist</h5>
                            <Badge className="d-flex align-items-center ms-3 bg-white text-primary">4</Badge>
                        </div>
                        <h5 className="mb-3 text-start">  <Wallet /> Payment Methods</h5>
                        <h5 className="text-start"> <Star />  Reviews</h5>
                    </Col>

                    <Col>
                        <Row className='g-4 mt-5 border p-3'>
                            <Col lg={6} className='mb-5'>
                                <Form>


                                    <Form.Control
                                        type="text"
                                        placeholder="Enter you name"
                                        aria-label="Disabled input example"
                                       


                                        
                                    />
                                </Form>
                            </Col>
                            <Col lg={6}>
                                <Form>


                                    <Form.Control
                                        type="email"
                                        placeholder="Enter you email"
                                        aria-label="Disabled input example"
                                        


                                        
                                    />
                                </Form>
                            </Col>
                            <Col lg={6}>
                                <Form>


                                    <Form.Control
                                        type="password"
                                        placeholder="enter your password"
                                        aria-label="Disabled input example"
                                      


                                        
                                    />
                                </Form>
                            </Col>
                            <Col lg={6}>
                                <Form>


                                    <Form.Control
                                        type="password"
                                        placeholder="Conform password"
                                        aria-label="Disabled input example"
                                        


                                        
                                    />
                                </Form>
                            </Col>
                            <Button>Save change</Button>
                        </Row>



                    </Col>




           




                </Row>






        
        

    </Container >

        </div >
    )
}

export default Changpassword
