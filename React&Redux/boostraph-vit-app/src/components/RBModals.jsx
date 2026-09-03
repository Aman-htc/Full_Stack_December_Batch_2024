import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Breadcrumb, Card, CardBody, CardHeader } from 'react-bootstrap';
import { Envelope } from 'react-bootstrap-icons';


function RBModals() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Breadcrumb className="mb-5">


        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Interactive Components
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Modal</Breadcrumb.Item>
      </Breadcrumb>
      <hr />


      <Button variant="primary" className='mt-5' onClick={handleShow}>
        <Envelope className='me-2' />
        Subscribe
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Body>

          <Card>

            <Card.Header className="d-flex justify-content-between align-items-center">
              <h1>Don't miss out</h1>

              
              <Button
                variant="close"
                aria-label="Close"
                onClick={handleClose}
              ></Button>
            </Card.Header>

            <Card.Body>
              <Card.Title>Signup Newsletter to stay upto date!</Card.Title>

              <InputGroup className="mt-3">
                <Form.Control
                  type="text"
                  placeholder="Enter your email address"
                />
                <Button variant="outline-secondary">Subscribe</Button>
              </InputGroup>
            </Card.Body>

          </Card>

        </Modal.Body>

      </Modal>


     
    </div >
  );
}

export default RBModals;