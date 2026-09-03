"use client";

import { useState } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import { CognitoUser } from "amazon-cognito-identity-js";
import UserPool from "@/services/cognito";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSendCode = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    user.forgotPassword({
      onSuccess: () => {
        toast.success("OTP sent successfully.");
        router.push(`/resetpassword?email=${email}`);
      },
      onFailure: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <Container
      fluid
      className="vh-100 d-flex justify-content-center align-items-center bg-primary"
    >
      <Card
        className="border-0 shadow-lg rounded-4"
        style={{ width: "100%", maxWidth: "430px" }}
      >
        <Card.Body className="p-5">

          <div className="text-center mb-4">

            <div
              className="bg-primary rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
              style={{ width: "75px", height: "75px" }}
            >
              <FaLock color="white" size={30} />
            </div>

            <h2 className="fw-bold mb-2">
              Forgot Password
            </h2>

            <p className="text-secondary">
              Enter your registered email address to receive an OTP.
            </p>

          </div>

          <Form onSubmit={handleSendCode}>

            <Form.Group className="mb-4">

              <Form.Label className="fw-semibold">
                Email Address
              </Form.Label>

              <InputGroup>

                <InputGroup.Text>
                  <FaEnvelope />
                </InputGroup.Text>

                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  size="lg"
                />

              </InputGroup>

            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-100 fw-semibold rounded-3"
            >
              Send OTP
            </Button>

            <div className="text-center mt-4">

              <Button
                variant="link"
                className="text-decoration-none fw-semibold"
                onClick={() => router.push("/signin")}
              >
                ← Back to Login
              </Button>

            </div>

          </Form>

        </Card.Body>
      </Card>
    </Container>
  );
}