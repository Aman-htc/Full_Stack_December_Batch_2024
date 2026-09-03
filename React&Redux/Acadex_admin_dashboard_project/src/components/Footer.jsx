import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "react-bootstrap-icons";

function Footer() {
    return (
        <footer className=" py-3  ">
            <Container className=" ">
                <Row className="text-center text-md-end">
                
                    <Col className="text-center text-lg-end XSmall-Medium gray-100 mb-2 mb-md-0">
                        <div >
                            Copyright © 2024 Acadex
                        </div>
                    </Col>
                </Row>

                
                <Row>
                    <Col className="text-center text-lg-end mt-3" >
                       <span className="ms-3 gray-200 XSmall-Regular">Privacy Policy</span>
                       <span className="ms-3 gray-200 XSmall-Regular">Term and conditions</span>
                       <span className="ms-3 gray-200 XSmall-Regular ">Contact</span>
                    </Col>
                    </Row>
                    <Row>

                    {/* Right: Social Icons */}
                    <Col className="text-center text-lg-end mt-3 ">
                        
                        <span className="px-2"><Facebook size={20} /></span>
                        <span className="px-2"><Twitter size={20} /></span>
                        <span className="px-2"><Instagram size={20} /></span>
                        <span className="px-2"><Youtube size={20} /></span>
                        <span className="px-2"><Linkedin size={20} /></span>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
