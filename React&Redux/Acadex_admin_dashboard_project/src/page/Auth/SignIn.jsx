



import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import mainlogo from '../../assets/image/Acadex-logo.svg';
import { Link, useNavigate } from "react-router-dom";
console.log((localStorage))

// Yup validation schema
const schema = yup.object().shape({

    email: yup.string().email("Invalid email address").required("Email is required"),

    password: yup.string()
        .required("Password is required"),

    termscheck: yup.boolean().oneOf([true], "Please accept terms & conditions")
});

function SignIn() {
    const navigate = useNavigate()
    const [error, setError] = useState()
    const notify = () => toast.success('login successfully');

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const handleOnSubmit = (data) => {
        


        const getdata = JSON.parse(localStorage.getItem('signupUser'))

        if (!getdata) {
            setError("No user found, please sign up")
            return;
        }
        const matchdata = getdata.email === data.email && getdata.password === data.password

        if (matchdata) {
           
            document.cookie = "login=true; max-age=7200; path=/"
            localStorage.setItem("user", JSON.stringify(getdata));
            localStorage.setItem("login", "true")
            navigate('/')
            notify();
            setError('')

            
        } else {
            setError('Invalid email or password')
        }

        reset();




    };

    return (
        <Container fluid className="p-4">

            <Row className="">
                <Col lg={6} className="bg-color  small-py  padding-x">
                    {/* Logo and App Name */}
                    <div className="d-flex padding-b align-items-center">
                        <Image src={mainlogo} style={{ width: "44px", height: '44px' }} />
                        <h3 className="ms-2 mb-0 Dis-1 text-dark">Acadex</h3>
                    </div>

                    {/* Heading */}
                    <p className="Dis-2 mb-5 text-dark">
                        Logout the past, Login to the <span className="text-primary"> new!</span>.
                    </p>




                    {/* Form */}
                    <Form
                        onSubmit={handleSubmit(handleOnSubmit)}

                    >
                        <ToastContainer />



                        <Form.Group className="mb-3">
                            <Form.Label className="form-input">E-mail Address</Form.Label>
                            <Form.Control
                                type="email"
                                {...register("email")}
                                className=" inpur-border  rounded-4"

                            />
                            <div className="text-danger">{errors?.email?.message}</div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <div className='d-flex justify-content-between'>
                                <Form.Label className="form-input">Password</Form.Label>
                                <Form.Label className="form-input text-primary ">Forgot Password</Form.Label>
                            </div>
                            <Form.Control
                                type="password"
                                {...register("password")}
                                className=" inpur-border  rounded-4"

                            />
                            <div className="text-danger">{errors?.password?.message}</div>
                        </Form.Group>


                        <Form.Group className="mb-5">
                            <Form.Check
                                type="checkbox"
                                label={
                                    <>
                                        Remember my password{" "}


                                    </>
                                }
                                {...register("termscheck")}
                                className="Title-4-Medium gray-500"
                            />
                            <div className="text-danger">{errors?.termscheck?.message}</div>
                        </Form.Group>

                        <Button type="submit" className="Body-Bold px-5 py-3 mt-2 mb-5" >
                            Login
                        </Button>

                        <p className=" Body-Bold pb-2" >
                            Don't have an account?
                            <Link to='/sign-up' className="text-primary text-decoration-none"> Sign Up</Link>
                        </p>
                        <p className=" text-danger Body-Bold pb-2 " >
                            {error}

                        </p>
                    </Form>
                </Col>

                <Col
                    lg={6}
                    className="bg-primary-subtle d-flex justify-content-center align-items-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="text-center">

                        <Image
                            src="https://png.pngtree.com/png-clipart/20250123/original/pngtree-a-cheerful-young-student-with-long-png-image_20325474.png"
                            className="w-75 mb-4"
                        />

                        <h1 className="Dis-1 lh-base">
                            Where <span className="border-bottom border-warning">remote</span> teams <br />
                            get work done
                        </h1>

                        <p className="mt-3 w-75 mx-auto text-center Title-4-Medium">
                            The online collaborative whiteboard platform to bring teams together,
                            anytime, anywhere.
                        </p>

                    </div>
                </Col>


            </Row>
        </Container>
    );
}

export default SignIn;
