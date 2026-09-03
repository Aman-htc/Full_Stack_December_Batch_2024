import React from "react";
import { Container, Row, Col, Button, Card, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      
       <Carousel className="mt-2">
      <Carousel.Item >
        <Image src="https://images.unsplash.com/photo-1607082352121-fa243f3dde32"
        style={{ width: "100%", height: "500px", objectFit: "cover",}}/>
        <Carousel.Caption>
         <h1>Welcome to My Shop</h1>
          <p>Best products at best prices</p>
          <Button variant="warning" as={Link} to='/product' >Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Image src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
        style={{ width: "100%", height: "500px", objectFit: "cover",}}/>
        <Carousel.Caption>
         <h1>Welcome to My Shop</h1>
          <p>Best products at best prices</p>
          <Button variant="warning" as={Link} to='/product' >Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Image src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        style={{ width: "100%", height: "500px", objectFit: "cover",}}/>
        <Carousel.Caption>
         <h1>Welcome to My Shop</h1>
          <p>Best products at best prices</p>
          <Button variant="warning" as={Link} to='/product' >Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Image src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
        style={{ width: "100%", height: "500px", objectFit: "cover",}}/>
        <Carousel.Caption>
         <h1>Welcome to My Shop</h1>
          <p>Best products at best prices</p>
          <Button variant="warning" as={Link} to='/product' >Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >
        <Image src="https://images.unsplash.com/photo-1607082352121-fa243f3dde32"
        style={{ width: "100%", height: "500px", objectFit: "cover",}}/>
        <Carousel.Caption>
         <h1>Welcome to My Shop</h1>
          <p>Best products at best prices</p>
          <Button variant="warning" as={Link} to='/product' >Shop Now</Button>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>

      {/* Products Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
              />
              <Card.Body className="text-center">
                <Card.Title>Shoes</Card.Title>
                <Card.Text>₹999</Card.Text>
                <Button as={Link} to='/product'  variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
              />
              <Card.Body className="text-center">
                <Card.Title>T-Shirt</Card.Title>
                <Card.Text>₹499</Card.Text>
                <Button as={Link} to='/product'  variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              />
              <Card.Body className="text-center">
                <Card.Title>Watch</Card.Title>
                <Card.Text>₹1999</Card.Text>
                <Button as={Link} to='/product' variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
