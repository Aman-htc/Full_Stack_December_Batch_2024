import { Breadcrumb } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function RBImages() {
  return (

    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">
          Layout
        </Breadcrumb.Item>
        <Breadcrumb.Item active> Image</Breadcrumb.Item>
      </Breadcrumb>


      <Container>
        <Row className='bg-white p-5 rounded-5 shadow-lg'>

          <h2>Avatar With Name</h2>

          <Col >

            <Image src="https://img.freepik.com/free-vector/woman-with-braided-hair-illustration_1308-174675.jpg" style={{ width: '100px', marginRight: '20px' }} roundedCircle />
            <span className='fs-5'>Radhika parmar</span>
          </Col>
          <Col>

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '100px', marginRight: '20px' }} roundedCircle />
            <span className='fs-5'>Aman kushwaha</span>
          </Col>


          <h2>Avatar Size</h2>
          <Col>

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '50px', marginRight: '20px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '70px', marginRight: '20px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '90px', marginRight: '20px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '110px', marginRight: '20px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '130px', marginRight: '20px' }} roundedCircle />

          </Col>
          <h2>Avatar Group</h2>
          <Col>

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '100px', marginRight: '-50px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '100px', marginRight: '-50px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '100px', marginRight: '-50px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '100px', marginRight: '-50px' }} roundedCircle />

            <Image src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg" style={{ width: '100px', marginRight: '-50px' }} roundedCircle />

          </Col>


        </Row>
      </Container>
    </>
  );
}

export default RBImages;