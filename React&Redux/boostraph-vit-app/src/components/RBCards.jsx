import { Breadcrumb, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RBCards() {
  return (
    <>

    <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item active> Cards</Breadcrumb.Item>
      </Breadcrumb>




      <h3 className='text-primary'>Card</h3>
      <hr />
      <Row className='bg-dark p-5 shadow-lg  rounded-5 '>
        <Col sm={4}>
          <Card className='p-2'>
            <Card.Title>Bluetooth Headphone</Card.Title>
            <Card.Img variant="top" style={{width:'200px'}} src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT6udDgy8dVre4qoyup5JY-Tja4JwvPiwDBJ9Qu5DIcCi3dtZDGLi76ykE7DbseVpogbywYCj2VnXNC838HloNKdpy4YxdSsVFmlrbU4B_p6ikhnT_fNa2thQ" />
            <Card.Body>

              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, corrupti amet inventore deserunt ..</p>
                <p className='bold-text'>1399  <span className='text-line text-secondary'>MRP:3999</span></p>
              </Card.Text>

            </Card.Body>
            <Card.Footer className='button'>


              <Button variant="outline-primary">Add to card</Button>
              <Button variant="primary">By now</Button>
            </Card.Footer>

          </Card>
        </Col>
        <Col sm={4}>
          <Card  className='p-2'>
            <Card.Title>Bluetooth Headphone</Card.Title>
            <Card.Img variant="top"  style={{width:'200px'}} src="https://m.media-amazon.com/images/I/61tD0bZGxXL.jpg" />
            <Card.Body>

              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, corrupti amet inventore deserunt ..</p>
                <p className='bold-text'>1399  <span className='text-line text-secondary'>MRP:3999</span></p>
              </Card.Text>

            </Card.Body>
            <Card.Footer className='button'>


              <Button variant="outline-primary">Add to card</Button>
              <Button variant="primary">By now</Button>
            </Card.Footer>

          </Card>
        </Col>
        <Col sm={4}>
          <Card  className='p-2'>
            <Card.Title>Bluetooth Headphone</Card.Title>
            <Card.Img variant="top"    style={{width:'150px'}} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQwWQvuyi5gqE1sSWBSFRy3JCKxKFwJvyQTnKvZQuINpA8TrVFhKr5K2rvWF2M5JNdi66j2xBmoR1YLodYYd7Xf1AJ74EFlRyWAEUAtoRE13pI8W8oxUfVE5A" />
            <Card.Body>

              <Card.Text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, corrupti amet inventore deserunt .</p>
                <p className='bold-text'>1399  <span className='text-line text-secondary'>MRP:3999</span></p>
              </Card.Text>

            </Card.Body>
            <Card.Footer className='button'>


              <Button variant="outline-primary">Add to card</Button>
              <Button variant="primary">By now</Button>
            </Card.Footer>

          </Card>
        </Col>
      </Row>
    </>
  );
}

export default RBCards;