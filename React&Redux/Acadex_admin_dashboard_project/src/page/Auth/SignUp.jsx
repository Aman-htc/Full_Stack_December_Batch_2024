import React from "react";
import sideimage from '../../assets/image/youngbreadman.webp'
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
  firstname: yup.string().required("Please enter your first name"),
  email: yup.string().email("Invalid email address").required("Email is required"),

  password: yup.string()
    .required("Password is required")
    .min(6, "Minimum 6 characters")
    .max(10, "Maximum 10 characters")
    .matches(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]/, "Password must contain at least one special character")
    .matches(/^\S*$/, "Password cannot contain spaces"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required("Confirm Password is required"),
  termscheck: yup.boolean().oneOf([true], "Please accept terms & conditions")
});

function SignUp() {
  const navigate = useNavigate()
  const notify = () => toast.success('The form has been submitted successfully');

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const handleOnSubmit = (data) => {
    // console.log("Form Submitted", data);


    const userData = {
      firstname: data.firstname,
      email: data.email,
      password: data.password
    };
    localStorage.setItem("signupUser", JSON.stringify(userData))
    
    navigate('/sign-in')
    notify();
    reset();

    





  };

  return (
    <Container fluid>
      <Row>
        <Col lg={6} className="bg-color py-5 padding-x">
          {/* Logo and App Name */}
          <div className="d-flex align-items-center small-p">
            <Image src={mainlogo} style={{ width: "44px", height: '44px' }} />
            <h3 className="ms-2 mb-0 Dis-1 text-dark">Acadex</h3>
          </div>

          {/* Heading */}
          <p className="Dis-2 text-dark mb-4">
            If opportunity doesn’t knock, build a <span className="text-primary">door</span>.
          </p>

          {/* Subheading */}
          <p className="Title-4-Medium gray-500 mb-5 ">
            A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.
          </p>

          {/* Form */}
          <Form
            onSubmit={handleSubmit(handleOnSubmit)}

          >
            <ToastContainer />

            <Form.Group className="mb-4">
              <Form.Label className="form-input">First name</Form.Label>
              <Form.Control

                type="text"
                {...register("firstname")}
                className="  inpur-border  rounded-4"

              />
              <div className="text-danger">{errors?.firstname?.message}</div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-input">E-mail Address</Form.Label>
              <Form.Control
                type="email"
                {...register("email")}
                className=" inpur-border  rounded-4"

              />
              <div className="text-danger">{errors?.email?.message}</div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-input">Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password")}
                className=" inpur-border  rounded-4"

              />
              <div className="text-danger">{errors?.password?.message}</div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="form-input">Confirm Password</Form.Label>
              <Form.Control
                type="password"
                {...register("confirmPassword")}
                className=" inpur-border  rounded-4"

              />
              <div className="text-danger">{errors?.confirmPassword?.message}</div>
            </Form.Group>

            <Form.Group className="mb-4 ">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    I agree to all the Terms of{" "}
                    <a href="#" className=" Body-Bold text-decoration-none" >
                      conditions <span className="gray-100">&</span> Privacy Policy
                    </a>

                  </>
                }
                {...register("termscheck")}
                className="Title-4-Medium gray-500"
              />
              <div className="text-danger">{errors?.termscheck?.message}</div>
            </Form.Group>

            <Button type="submit" className="Body-Bold px-3 py-3 mb-5" >
              Create Account
            </Button>

            <p className=" Body-Bold" >
              Already have an account?
              <Link to='/sign-in' className="text-primary text-decoration-none"> Log In</Link>
            </p>
          </Form>
        </Col>

        <Col
          lg={6}
          className="bg-primary-subtle d-flex justify-content-center align-items-center "

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

export default SignUp;
