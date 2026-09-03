// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import { Form, Row, Col, Container } from "react-bootstrap";


function RBFormBasicValid() {
    // const [validated, setValidated] = useState(false);

    // const handleSubmit = (event) => {
    //     const form = event.currentTarget;
    //     if (form.checkValidity() === false) {
    //         event.preventDefault();
    //         event.stopPropagation();
    //     }

    //     setValidated(true);
    // };

    // return (
    //     <Form noValidate validated={validated} onSubmit={handleSubmit} className=' p-4 bg-white shadow-lg rounded-5 mt-5'>
    //         <Row className="mb-3  "  >
    //             <Form.Group as={Col} md="4" controlId="validationCustom01">
    //                 <Form.Label>First name</Form.Label>
    //                 <Form.Control
    //                     required
    //                     type="text"
    //                     placeholder="First name"
    //                 // defaultValue="Mark"
    //                 />
    //                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //             </Form.Group>
    //             <Form.Group as={Col} md="4" controlId="validationCustom02">
    //                 <Form.Label>Last name</Form.Label>
    //                 <Form.Control
    //                     required
    //                     type="text"
    //                     placeholder="Last name"
    //                     defaultValue="Otto"
    //                 />
    //                 <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
    //             </Form.Group>
    //             <Form.Group as={Col} md="4" controlId="validationCustomUsername">
    //                 <Form.Label>Username</Form.Label>
    //                 <InputGroup hasValidation>
    //                     <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
    //                     <Form.Control
    //                         type="text"
    //                         placeholder="Username"
    //                         aria-describedby="inputGroupPrepend"
    //                         required
    //                     />
    //                     <Form.Control.Feedback type="invalid">
    //                         Please choose a username.
    //                     </Form.Control.Feedback>
    //                 </InputGroup>
    //             </Form.Group>
    //         </Row>
    //         <Row className="mb-3">
    //             <Form.Group as={Col} md="6" controlId="validationCustom03">
    //                 <Form.Label>City</Form.Label>
    //                 <Form.Control type="text" placeholder="City" required />
    //                 <Form.Control.Feedback type="invalid">
    //                     Please provide a valid city.
    //                 </Form.Control.Feedback>
    //             </Form.Group>
    //             <Form.Group as={Col} md="3" controlId="validationCustom04">
    //                 <Form.Label>State</Form.Label>
    //                 <Form.Control type="text" placeholder="State" required />
    //                 <Form.Control.Feedback type="invalid">
    //                     Please provide a valid state.
    //                 </Form.Control.Feedback>
    //             </Form.Group>
    //             <Form.Group as={Col} md="3" controlId="validationCustom05">
    //                 <Form.Label>Zip</Form.Label>
    //                 <Form.Control type="text" placeholder="Zip" required />
    //                 <Form.Control.Feedback type="invalid">
    //                     Please provide a valid zip.
    //                 </Form.Control.Feedback>
    //             </Form.Group>
    //         </Row>
    //         <Form.Group className="mb-3">
    //             <Form.Check
    //                 required
    //                 label="Agree to terms and conditions"
    //                 feedback="You must agree before submitting."
    //                 feedbackType="invalid"
    //             />
    //         </Form.Group>
    //         <Button type="submit">Submit form</Button>

    //     </Form>
    // );


    const questions = [
    "What is React?",
    "What is JSX?",
    "What is a Component?",
    "What is State?",
    "What is Props?",
    "What is Hook?",
    "What is useEffect?",
    "What is useState?",
    "What is Virtual DOM?",
    "What is Node.js?"
  ];

  return (
    <Container className="mt-4">
      {questions.map((q, i) => (
        <div key={i} className="p-3 mb-4 border rounded-4 shadow-sm">
          <h5>Q{i + 1}. {q}</h5>

          <Row>
            <Col sm={6}>
              <Form.Check
                type="radio"
                label="Option A"
                name={`q${i + 1}`}   // SAME NAME → only one can select
                value="A"
              />
              <Form.Check
                type="radio"
                label="Option B"
                name={`q${i + 1}`}
                value="B"
              />
            </Col>

            <Col sm={6}>
              <Form.Check
                type="radio"
                label="Option C"
                name={`q${i + 1}`}
                value="C"
              />
              <Form.Check
                type="radio"
                label="Option D"
                name={`q${i + 1}`}
                value="D"
              />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
}

export default RBFormBasicValid;