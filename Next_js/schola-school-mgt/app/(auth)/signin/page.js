"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Row, Col, Form, Button, InputGroup, } from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";


import { useRouter } from "next/navigation";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "@/services/cognito";
import { toast } from "react-toastify";
import { loginAdmin } from "@/services/adminServices";


export default function SigninPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;

        const user = new CognitoUser({
            Username: email,
            Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password,
        });

        user.authenticateUser(authDetails, {
            
            onSuccess: async (result) => {

                const accessToken = result.getAccessToken().getJwtToken();
                const idToken = result.getIdToken().getJwtToken();
                const refreshToken = result.getRefreshToken().getToken();

                localStorage.setItem("accessToken", accessToken);
                localStorage.setItem("idToken", idToken);
                localStorage.setItem("refreshToken", refreshToken);

                try {

                    const response = await loginAdmin(idToken);

                    console.log("Backend Login:", response);

                    toast.success("Login Successfully");

                    router.push("/dashboard");

                } catch (err) {

                    console.log(err.response?.data);

                    toast.error(
                        err.response?.data?.detail || "Backend login failed"
                    );
                }
            },

            onFailure: (err) => {
                console.log("Login Failed:", err.message);
                toast.error(err.message);
            },
        });
    };

    return (
        <Container fluid className="min-vh-100 p-0">

            <Row className="g-0 min-vh-100">

                {/* ==================== LEFT SIDE - LOGIN FORM ==================== */}
                <Col
                    xs={12}
                    lg={6}
                    className="order-2 order-lg-1 d-flex align-items-center justify-content-center py-5"
                >
                    <div className="w-100 px-4 px-lg-5" style={{ maxWidth: "460px" }}>
                        <div className="text-center mb-5">
                            <Image
                                src="/image/scholalogo.svg"
                                alt="Schola Logo"
                                width={65}
                                height={65}
                                priority
                            />
                            <h2 className="fw-bold mt-4 mb-2">Login to Your Account</h2>
                            <p className="text-danger">
                                Access your dashboard and continue where you left off
                            </p>
                        </div>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-semibold">Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="yourname@example.com"
                                    className="rounded-3 py-3 shadow-none"
                                />
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className="small fw-semibold">Password</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="rounded-3 py-3 shadow-none pe-5"
                                    />
                                    <Button
                                        type="button"
                                        variant="light"
                                        className="position-absolute end-0 top-0 h-100 border-0 bg-transparent "
                                        style={{ zIndex: 10, padding: "0 16px" }}
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                                    </Button>
                                </InputGroup>
                            </Form.Group>

                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <Form.Check
                                    type="checkbox"
                                    label="Remember Me"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="small"
                                />
                                <Link href="/forgotpassword" className="small text-warning text-decoration-none">
                                    Forgot Password?
                                </Link>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-100 rounded-3 py-3 fw-semibold mb-3"
                            >
                                Login
                            </Button>

                            <p className="text-center small mt-3">
                                New to Schola?{" "}
                                <Link href="/signup" className="text-warning fw-semibold text-decoration-none">
                                    Create account
                                </Link>
                            </p>
                        </Form>
                    </div>
                </Col>

                {/* ==================== RIGHT SIDE - WELCOME==================== */}

                <Col
                    xs={12}
                    lg={6}
                    className="order-1 order-lg-2 position-relative overflow-hidden"
                    style={{ minHeight: "100vh" }}
                >
                    <Image
                        src="/image/login.jpg"
                        alt="Schola Register Background"
                        fill
                        priority
                        style={{
                            objectFit: "cover",
                            objectPosition: "top"        
                        }}
                    />
                </Col>


            </Row>

        </Container>
    );
}
