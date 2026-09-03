import { use, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { Check } from "react-bootstrap-icons"
import { flushSync } from "react-dom"


function RBForms() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  const [habbies, setHabbies] = useState([
    { id: 1, name: 'music', label: 'Music', checked: true },
    { id: 2, name: 'dancing', label: 'Dancing', checked: false },
    { id: 3, name: 'singing', label: 'Singing', checked: false }
  ]);

  const handalcheckbox = (e) => {
    const { name, checked } = e.target;

    setHabbies((prev) =>
      prev.map((hobby) =>
        hobby.name === name ? { ...hobby, checked: checked } : hobby
      )
    );
  };


  const HandalForm = (e) => {
    e.preventDefault()

  }
  return (
    <div>

      
      <Container>

        <Form className="p-4 bg-white rounded-4  shadow-lg" noValidate validated={validated} onSubmit={handleSubmit}>

          <Row>

            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="fastname">Fast name</Form.Label>
                <Form.Control required
                  type="text"
                  placeholder="First name"
                  id="fastname"
                  name="fastname" />
                   <Form.Control.Feedback type="invalid"> Please  valid  your name</Form.Control.Feedback>
              </Form.Group>
              
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="lastname">Last name</Form.Label>
                <Form.Control type="text"  required placeholder="last name" name="lastname" id="lastname " />
                <Form.Control.Feedback type="invalid"> Please  valid  your last name</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="phone">Phome number</Form.Label>
                <Form.Control type="number" id="phone" placeholder="" name="phone" />
                <Form.Control.Feedback type="invalid"> Please  valid  your phone number</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="email">Email addrress</Form.Label>
                <Form.Control type="Email" id="email" placeholder="enter email "  required name="email" />
                <Form.Control.Feedback type="invalid"> Please  valid  your email address</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="select">Select Country</Form.Label>
                <Form.Select aria-label="Default select example" id="select"   required name="select">
                  <option>Seclect Country</option>
                  <option value="1">india</option>
                  <option value="2">pakistan</option>
                  <option value="3">bangladesh</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid"> Please  select youer country</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="state">Select State</Form.Label>
                <Form.Select aria-label="Default select example" required name="state">
                  <option>Seclect State</option>
                  <option value="1">Bihar</option>
                  <option value="2">jharkhand</option>
                  <option value="3">uter pardesh</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid"> Please  select youer state</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="city">Select City</Form.Label>
                <Form.Select aria-label="Default select example"  name="city">
                  <option>Seclect City</option>
                  <option value="1">Gopalganj</option>
                  <option value="2">siwan</option>
                  <option value="3">chapra</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid"> Please  select youer city</Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="pin">Pin code</Form.Label>
                <Form.Control type="number" placeholder="" id="id" name="pin" />
              </Form.Group>
            </Col>
            <Col sm={12}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="address">Address</Form.Label>
                <Form.Control as={'textarea'} placeholder="" id="address" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="radio" className="d-flex">Sex</Form.Label>
                <Form.Check id="radio" inline label="Male" type="radio" aria-label="radio 1" name="group1" />
                <Form.Check id="radio" inline label="female" type="radio" aria-label="radio 2" name="group1" />
              </Form.Group>
            </Col>
            <Col sm={6}>
              <Form.Group className="mb-3"    required controlId="exampleForm.ControlInput1">
                <Form.Label htmlFor="check" className="d-flex">Hobbies</Form.Label>
                {habbies.map((hobby) => {
                  return (

                    <Form.Check
                  
                      key={hobby.id}
                      type="checkbox"
                      label={hobby.label}
                      name={hobby.name}
                      checked={hobby.checked}
                      onChange={handalcheckbox}
                      inline
                    />
                  )
                })}
                <br />

                select Hobbies are :{habbies.filter(h => h.checked).map(h => h.label).join(',') || 'None'}
                <Form.Control.Feedback type="invalid"> Please  select youer any Hobbies </Form.Control.Feedback>

              </Form.Group>
              {/* 
               */}

            </Col>
            <Col sm={12}>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label htmlFor="resume">Resume</Form.Label>
                <Form.Control id="resume" required type="file" name="resume" />
                <Form.Control.Feedback type="invalid"> Please  select youer any documents </Form.Control.Feedback>
              </Form.Group>
              
            </Col>
            <Col sm={12} className="mb-4">
              <Form.Check required inline label='Agree to terms nad condiations' aria-label="option 1" />
            </Col>
            <Col sm={12} >
              <Button type='Submit'>
                Submit button
              </Button>
            </Col>

          </Row>
        </Form>

      </Container>


    </div>
  )
}

export default RBForms
