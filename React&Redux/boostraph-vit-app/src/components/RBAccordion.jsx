// import { useContext } from "react";
// import Accordion from "react-bootstrap/Accordion";
// import AccordionContext from "react-bootstrap/AccordionContext";
// import useAccordionButton from "react-bootstrap/useAccordionButton";
// import Card from "react-bootstrap/Card";

// const PINK = "rgba(255, 192, 203, 0.6)";
// const BLUE = "rgba(0, 0, 255, 0.6)";

// function ContextAwareToggle({ children, eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(eventKey, () =>
//     callback && callback(eventKey)
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;

//   return (
//     <button
//       type="button"
//       style={{
//         backgroundColor: isCurrentEventKey ? PINK : BLUE,
//         border: "none",
//         padding: "8px 15px",
//         color: "#fff",
//         cursor: "pointer",
//         borderRadius: "5px",
//       }}
//       onClick={decoratedOnClick}
//     >
//       {children}
//     </button>
//   );
// }

// export default function RBAccordion() {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Card>
//         <Card.Header>
//           <ContextAwareToggle eventKey="0">Toggle 1</ContextAwareToggle>
//           {/* <ContextAwareToggle eventKey="0">Toggle 2</ContextAwareToggle> */}
//         </Card.Header>

//         <Accordion.Collapse eventKey="0">
//           <Card.Body>Hello! I am the body</Card.Body>
//         </Accordion.Collapse>
//       </Card>

//       <Card>
//         <Card.Header>
//           <ContextAwareToggle eventKey="1">Toggle 3</ContextAwareToggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="1">
//           <Card.Body>Hello! I am another body</Card.Body>
//         </Accordion.Collapse>
//       </Card>
//     </Accordion>
//   );
// }


import { useContext } from 'react';
import { Accordion, Card, useAccordionButton, AccordionContext, Breadcrumb } from 'react-bootstrap';
import {  DashCircle, PlusCircle } from 'react-bootstrap-icons';
// import Accordion from 'react-bootstrap/Accordion';
// import AccordionContext from 'react-bootstrap/AccordionContext';
// import useAccordionButton from 'react-bootstrap/useAccordionButton';
// import Card from 'react-bootstrap/Card';

const BLUE = 'rgba(14, 14, 194, 0.918)';
const BLACK = 'rgba(0, 0, 0, 0.904)';

function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);

    const decoratedOnClick = useAccordionButton(eventKey);

    const isCurrentEventKey = activeEventKey === eventKey;

    return (
        <div onClick={decoratedOnClick} className='flued' style={{ color: isCurrentEventKey ? BLUE : BLACK }}>

            <div type='button' className='fs-4 bold-text' curser> {children}</div>
            <div>
                {isCurrentEventKey ? <DashCircle  /> : <PlusCircle />}

            </div>









        </div>
    );
}

function RBAccordion() {
    return (
        <div>


            <Breadcrumb className="mb-5">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item href="#">
                    Layout
                </Breadcrumb.Item>
                <Breadcrumb.Item > Non Interactive Components</Breadcrumb.Item>
                <Breadcrumb.Item active>Accordion</Breadcrumb.Item>
            </Breadcrumb>
            <hr />





            <Accordion defaultActiveKey="0"  className='border-none bs-dark' >
                <Card>
                    <Card.Header className='bg-light'>
                        <ContextAwareToggle eventKey="0" >What is the cost of an online course ?</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className='bg-light'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, tempore magni? Optio facilis, fugit facere assumenda cumque libero minima tenetur.
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className='bg-light'>
                        <ContextAwareToggle eventKey="1">DO I need to Visit any Physical location ?</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body  className='bg-light'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et in est quos, quibusdam officiis porro quisquam quis voluptatibus! Voluptates, dolor.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header className='bg-light'>
                        <ContextAwareToggle eventKey="2">What are the technology requirements ?</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body  className='bg-light'>Hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptates ullam optio distinctio reprehenderit iusto officia reiciendis unde laboriosam rem.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header  className='bg-light'>
                        <ContextAwareToggle eventKey="3">What are the technology requirements ?</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body  className='bg-light'>Hey Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit sed repellat quisquam, eaque ex corporis aliquid voluptate placeat! Architecto, distinctio.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header  className='bg-light'>
                        <ContextAwareToggle eventKey="4">How can task question or clear doubts ?</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body className='bg-light'>Hey Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quo illum incidunt quae beatae placeat deserunt officia nobis repudiandae reiciendis!</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>


        </div>
    )
}

export default RBAccordion
