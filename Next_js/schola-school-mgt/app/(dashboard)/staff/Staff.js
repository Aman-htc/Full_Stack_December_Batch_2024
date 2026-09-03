"use client"


import Header from '@/app/components/Header'
import TeacherStats from '@/app/components/teachers/teacherstats'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Staff = () => {
    return (
        <div>
            <Container fluid>

                <Header text='Staff' background='bg-primary' />
                <Row className='mt-5'>

                    <Col>
                      <TeacherStats/>

                    </Col>

                </Row>

              

                <div className='mt-3'>

                    <Link href="/staff/add" className="text-decoration-none">
                        <Button className="bg-secondary border-0 btn-sm p-2 text-danger-subtle d-flex align-items-center gap-2">
                    
                            <span className="d-none d-lg-block ">Add Staff</span>
                        </Button>
                    </Link>

                </div>


            </Container>


        </div>
    )
}

export default Staff
