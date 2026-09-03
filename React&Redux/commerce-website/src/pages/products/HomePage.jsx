import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
const image = 'src/assets/3d-rendering-cartoon-shopping-cart.jpg'

function HomePage() {
  return (
    // <Container fluid className='p-0 m-0 container-fluid '>
    <Row>
      <Col md={12}>
        <Image src='https://static.vecteezy.com/system/resources/thumbnails/023/309/702/small/ai-generative-e-commerce-concept-shopping-cart-with-boxes-on-a-wooden-table-photo.jpg' className='w-100' />

      </Col>
    </Row>

    // </Container>
  )
}

export default HomePage
