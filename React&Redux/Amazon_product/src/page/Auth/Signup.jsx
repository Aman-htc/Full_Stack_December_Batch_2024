import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { fetchUser, registerUser } from '../../api/Services'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const Navigate=useNavigate()
    const { formState: { errors }, register, handleSubmit } = useForm()


    const addnewUser = async (addnew) => {
        try {
            const response = await registerUser(addnew)
            localStorage.setItem('login', true)
            
            Navigate('/')

            console.log('register sucssfully complete', response)
        } catch (error) {
            console.log(error)
        }


    }


    const handleOnSubmit = (data) => {
        const new_user = {
            name: data.firstname,   
            email: data.email,
            password: data.password,
        };

        addnewUser(new_user);
        
    };

    return (
        <div>
            <Container>
                <Row className="justify-content-center mt-5">
                    <Col md={6} >
                        <Card>
                            <div className="card-header bg-primary text-white">
                                <h4 className="mb-0">Sign-up</h4>
                            </div>
                            <div className="card-body">
                                <Form onSubmit={handleSubmit(handleOnSubmit)}>
                                    <Form.Group placeholder="enter your name" className="mb-3" controlId="firstname">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control type="text" {...register("firstname", {
                                            required: "Please enter your fast name",
                                            minLength: {
                                                value: 3, message: "you can use minimam 3 character"
                                            },

                                            validate: (value) => {
                                                return (!value.includes(" ") || " cannot contain spaces")
                                            }

                                        })} />
                                        <div className="text-danger">{errors?.firstname?.message}</div>
                                    </Form.Group>
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

                                    <Button type='submit' >Submit</Button>

                                </Form>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}

export default Signup
