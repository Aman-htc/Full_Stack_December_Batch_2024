"use client";

import { useRouter } from "next/navigation";




import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    InputGroup,

} from "react-bootstrap";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { toast } from "react-toastify";
import UserPool from "@/services/cognito";
import { addadmin } from "@/services/adminServices";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export default function SignupPage() {

    const router = useRouter();

    const [validated, setValidated] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        // Full Name
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
        }

        // Email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        // Phone
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Phone number must be 10 digits";
        }

        // Password
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password =
                "Password must be at least 8 characters long";
        }

        // Confirm Password
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Confirm password is required";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword =
                "Password and Confirm Password do not match";
        }

        // Terms
        if (!formData.terms) {
            newErrors.terms =
                "Please accept Terms & Conditions";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };





    const [loading, setLoading] = useState()


    const handleSubmit = async (event) => {
        event.preventDefault();
        setValidated(true);

        if (!validateForm()) return;
        if (loading) return;

        setLoading(true);

        try {
            const email = formData.email.trim().toLowerCase();
            const password = formData.password;
            const attributeList = [
                new CognitoUserAttribute({
                    Name: "name",
                    Value: formData.fullName.trim(),
                }),

                new CognitoUserAttribute({
                    Name: "email",
                    Value: email,
                }),

                new CognitoUserAttribute({
                    Name: "phone_number",
                    Value: `+91${formData.phone}`,
                }),
            ];

            // await new Promise((resolve, reject) => {
            //     UserPool.signUp(email, password, [], null, (err, result) => {
            //         if (err) reject(err);
            //         else resolve(result);
            //     });
            // });
            await new Promise((resolve, reject) => {
                UserPool.signUp(
                    email,
                    password,
                    attributeList,
                    null,
                    (err, result) => {
                        if (err) reject(err);
                        else resolve(result);
                    }
                );
            });

            toast.success("OTP sent to email");

            // save temp data
            localStorage.setItem("signupData", JSON.stringify({
                full_name: formData.fullName.trim(),
                email_address: email,
                password: password,
                phone_number: formData.phone,
                role: "Admin"
            }));

            router.push(`/verify?email=${encodeURIComponent(email)}`);

        } catch (error) {
            console.error(error);
            toast.error(error.message || "Signup failed");
        } finally {
            setLoading(false);
        }
    };


    return (
        <Container fluid className="min-vh-100 p-0">

            <Row className="g-0 min-vh-100">
                {/* LEFT SIDE FORM */}
                <Col
                    xs={12}
                    lg={6}
                    className="order-2 order-lg-1 d-flex align-items-center justify-content-center py-5"
                >
                    <div
                        className="w-100 px-4 px-lg-5"
                        style={{ maxWidth: "480px" }}
                    >
                        <div className="text-center mb-5">
                            <Image
                                src="/image/scholalogo.svg"
                                alt="Schola Logo"
                                width={65}
                                height={65}
                                priority
                            />

                            <h2 className="fw-bold mt-4 mb-2">
                                Create Your Account
                            </h2>

                            <p className="text-danger mb-0 small">
                                Join Studix today and get started with smarter
                                school management
                            </p>
                        </div>

                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            {/* Full Name */}
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-semibold">
                                    Full Name
                                </Form.Label>

                                <Form.Control
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    placeholder="Enter your full name"
                                    className="rounded-3 py-3 shadow-none"
                                    onChange={handleChange}
                                    isInvalid={!!errors.fullName}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.fullName}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Email */}
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-semibold">
                                    Email Address
                                </Form.Label>

                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    placeholder="yourname@example.com"
                                    className="rounded-3 py-3 shadow-none"
                                    onChange={handleChange}
                                    isInvalid={!!errors.email}
                                />

                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            {/* Phone */}
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-semibold">
                                    Phone Number
                                </Form.Label>

                                <InputGroup>
                                    <Form.Select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        style={{ maxWidth: "100px" }}
                                        onChange={handleChange}
                                    >
                                        <option value="+91">+91</option>
                                        <option value="+44">+44</option>
                                        <option value="+1">+1</option>
                                    </Form.Select>

                                    <Form.Control
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        placeholder="9876543210"
                                        onChange={handleChange}
                                        isInvalid={!!errors.phone}
                                    />
                                </InputGroup>

                                {errors.phone && (
                                    <div className="text-danger small mt-1">
                                        {errors.phone}
                                    </div>
                                )}
                            </Form.Group>

                            {/* Password */}
                            <Form.Group className="mb-3">
                                <Form.Label className="small fw-semibold">
                                    Password
                                </Form.Label>

                                <InputGroup className="position-relative">
                                    <Form.Control
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        placeholder="Create a secure password"
                                        className="rounded-3 py-3 shadow-none pe-5"
                                        onChange={handleChange}
                                        isInvalid={!!errors.password}
                                    />

                                    <Button
                                        type="button"
                                        variant="light"
                                        className="position-absolute end-0 top-0 h-100 border-0 bg-transparent"
                                        style={{ zIndex: 10 }}
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                    >
                                        {showPassword ? (
                                            <FiEyeOff size={20} />
                                        ) : (
                                            <FiEye size={20} />
                                        )}
                                    </Button>
                                </InputGroup>

                                {errors.password && (
                                    <div className="text-danger small mt-1">
                                        {errors.password}
                                    </div>
                                )}
                            </Form.Group>

                            {/* Confirm Password */}
                            <Form.Group className="mb-4">
                                <Form.Label className="small fw-semibold">
                                    Confirm Password
                                </Form.Label>

                                <InputGroup className="position-relative">
                                    <Form.Control
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        placeholder="Re-enter your password"
                                        className="rounded-3 py-3 shadow-none pe-5"
                                        onChange={handleChange}
                                        isInvalid={!!errors.confirmPassword}
                                    />

                                    <Button
                                        type="button"
                                        variant="light"
                                        className="position-absolute end-0 top-0 h-100 border-0 bg-transparent"
                                        style={{ zIndex: 10 }}
                                        onClick={() =>
                                            setShowConfirmPassword(
                                                !showConfirmPassword
                                            )
                                        }
                                    >
                                        {showConfirmPassword ? (
                                            <FiEyeOff size={20} />
                                        ) : (
                                            <FiEye size={20} />
                                        )}
                                    </Button>
                                </InputGroup>

                                {errors.confirmPassword && (
                                    <div className="text-danger small mt-1">
                                        {errors.confirmPassword}
                                    </div>
                                )}
                            </Form.Group>

                            {/* Terms */}
                            <Form.Check
                                type="checkbox"
                                name="terms"
                                checked={formData.terms}
                                label="I agree to the Terms & Conditions"
                                className="small mb-2"
                                onChange={handleChange}
                            />

                            {errors.terms && (
                                <div className="text-danger small mb-3">
                                    {errors.terms}
                                </div>
                            )}

                            <Button
                                type="submit"
                                variant="primary"
                                className="w-100 rounded-3 py-3 fw-semibold"
                            >
                                Register
                            </Button>

                            <p className="small text-center text-danger mt-4">
                                Already have an account?{" "}
                                <Link
                                    href="/signin"
                                    className="text-warning fw-semibold text-decoration-none"
                                >
                                    Login Here
                                </Link>
                            </p>
                        </Form>
                    </div>
                </Col>

                {/* RIGHT SIDE IMAGE */}
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
                            objectPosition: "top",
                        }}
                    />
                </Col>
            </Row>

        </Container>
    );
}