import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, FormLabel, Row } from 'react-bootstrap'
import { set, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { fetchUser } from '../../api/Services'
// import { fetchUserdata } from '../../api/Services'
// import { endapi } from '../../api/Services'

function Sign() {
    const [error, setError] =useState()
    const { formState: { errors }, register, handleSubmit } = useForm()
    const Navigate = useNavigate()

    const getuserdata = async (data) => {
        const response = await fetchUser(data);

        console.log(response.data[0].email)
        console.log(data.email)
        if (response.data[0].email === data.email && response.data[0].password === data.password) {
            console.log(data)
            localStorage.setItem('login', true)
            localStorage.setItem('id',response.data[0].id)
            Navigate('/')
            setError('')

        }else{
            setError('invalid email and password!')
        }

    }

    const handleOnSubmit = (data) => {
       
        getuserdata(data)
    }


    return (
        <div>
            <Container>
                <Row className=" justify-content-center mt-5">
                    <Col md={6} >
                        <Card>
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Login</h4>
                            </div>
                            <div className="card-body">
                                <Form onSubmit={handleSubmit(handleOnSubmit)}>
                                    
                                    <div className="mb-3">
                                        <Form.Group className="mb-3" controlId="emailaddress">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control placeholder='enter your email' type="email"
                                                {...register("email",
                                                    {
                                                        required: "The email is required.",
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "Please enter a valid email address",
                                                        }
                                                    })
                                                } />
                                            <div className="text-danger">{errors?.email?.message}</div>
                                        </Form.Group>
                                    </div>
                                    <div className="mb-3">
                                        <Form.Group className="mb-3" controlId="emailaddress">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control placeholder='enter your password' type="password"
                                                {...register("password",
                                                    {
                                                        required: "The password is required.",
                                                        minLength: {
                                                            value: 6, message: "Password must be greater than 6"
                                                        },
                                                        maxLength: { value: 10, message: "You can use maximum 10 character for password" },
                                                        validate: (value) => {
                                                            return (!value.includes(" ") || "Password cannot contain spaces")
                                                        }

                                                    })
                                                } />
                                            <div className="text-danger">{errors?.password?.message}</div>
                                        </Form.Group>
                                    </div>
                                    {/* <button type="submit" className="btn btn-primary" onClick={handalsubmit}>Login</button> */}

                                    <Button type='submit'>Login</Button><br></br>
                                    {error}
                                </Form>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Sign
