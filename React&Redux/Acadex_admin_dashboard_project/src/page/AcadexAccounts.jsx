import React from 'react'
import { Badge, Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { Envelope } from 'react-bootstrap-icons'
import profileimage from '../assets/image/avtarimage.webp'
import { Link } from 'react-router-dom';

const AcadexAccounts = () => {

  const signupUserStr = localStorage.getItem("signupUser");
    const signupdata = signupUserStr ? JSON.parse(signupUserStr) : null;
    const Admin =signupdata.firstname 
    const Email = signupdata.email
  return (
    <div>
      <Container >
        <Row className='d-flex justify-content-center'>
                <Col  className="text-center">
                

                    <Image className="w-25" src={ profileimage} />
                    <h6>{Admin}</h6>
                    <Badge className="p-2 mb-4">8102648831</Badge>
                    <div className="mb-4">

                      <h5>Email: <Envelope /> {Email}</h5>
                       
                    </div>
                    
                    <h5 className="mb-4 ">Gopalganj</h5>
                    <h5 className="mb-5"> 841440</h5>


                    <Button as={Link} to='/sign-up'>creat new accout</Button>
                  
                </Col>
            </Row>

        
        

    </Container>
      
    </div>
  )
}

export default AcadexAccounts
