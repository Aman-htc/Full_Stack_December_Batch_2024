import { Breadcrumb, Card, Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Facebook, Instagram, Linkedin, Twitter, TwitterX, X, Youtube } from 'react-bootstrap-icons';

function RBListGroups() {
  return (
    <>

      <Breadcrumb>
        <Breadcrumb.Item to="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item to="#" t>
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item active>ListGroup</Breadcrumb.Item>
      </Breadcrumb>
      <h3 className='text-primary'>List Group</h3>

      <Card style={{ width: '400px' }} className='bg-white shadow-lg rounded-4'>
        <Card.Body>



          <ListGroup variant='flush '>
            <h3>Social Media Traffic</h3>

            <ListGroup.Item>
              <Row className='g-5'>
                <Col sm={6}>

                  <span className='bold- fs-5'><Facebook color='blue' className='me-2' /> Facebook</span>
                </Col>

                <Col sm={6}>
                  <span className='bold- fs-5 text-right'>20%</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className='g-5'>
                <Col sm={6}>
                  <span className='bold- fs-5'> <Instagram color='blue' className='me-2' />  Instrgram</span>
                </Col>

                <Col sm={6}>
                  <span className='bold- fs-5  text-right'>20%</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className='g-5'>
                <Col sm={6}>
                  
                  <span className='bold- fs-5'><Youtube color='blue' className='me-2'/> Youtube</span>
                </Col>

                <Col sm={6}>
                  <span className='bold- fs-5 text-right'>20%</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className='g-5'>
                <Col sm={6}>
                 
                  <span className='bold- fs-5'><TwitterX color='blue' className='me-2'/> Twitter </span>

                </Col>

                <Col sm={6}>
                  <span className='bold- fs-5 text-right'>20%</span>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className='g-5'>
                <Col sm={6}>
                 
                  <span className='bold- fs-5'> <Linkedin color='blue' className='me-2'/>Linkedin</span>
                </Col>

                <Col sm={6}>
                  <span className='bold- fs-5 text-right'>20%</span>
                </Col>
              </Row>
            </ListGroup.Item>

          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
}

export default RBListGroups;
