import Header from '@/app/components/Header'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Staffform from './staffform'

const page = () => {
    return (
        <div>

            <Container>
                 <Header text={'Add new Staff'} />

                <Row className='mt-5'>

                    
                       

                    
                    <Col>

                        <Staffform />


                    </Col>

                </Row>



            </Container>




        </div>
    )
}

export default page
