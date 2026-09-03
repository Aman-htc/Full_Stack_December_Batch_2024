import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import {SideBar} from '../components/main/index.js'

const AcadexLayout = () => {
    return (
        <Container fluid className='border-color' >
            <Row className='"min-vh-100'>
                <Col md={2} >
                    <SideBar />

                </Col>
                <Col  className='m-0'>

                    <Outlet />

                </Col>
            </Row>

        </Container>
    )
}

export default AcadexLayout
