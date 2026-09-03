"use client";

import { Suspense, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  Container,
  Form,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import { CognitoUser } from "amazon-cognito-identity-js";
import { toast } from "react-toastify";
import UserPool from "@/services/cognito";
import { FaLock, FaKey, FaShieldAlt } from "react-icons/fa";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleReset = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    user.confirmPassword(code, newPassword, {
      onSuccess: () => {
        toast.success("Password reset successful");
        router.push("/signin");
      },
      onFailure: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <Container
      fluid
      className="vh-100 bg-secondary d-flex justify-content-center align-items-center"
    >
      <Card
        className="shadow-lg border-0 rounded-4"
        style={{ maxWidth: "450px", width: "100%" }}
      >
        <Card.Body className="p-5">
          <div className="text-center mb-4">
            <div
              className="bg-success rounded-circle d-inline-flex justify-content-center align-items-center mb-3"
              style={{ width: 75, height: 75 }}
            >
              <FaShieldAlt color="white" size={30} />
            </div>

            <h2 className="fw-bold">Reset Password</h2>

            <p className="text-muted mb-1">
              Create a new password for your account.
            </p>

            <small className="text-primary fw-semibold">
              {email}
            </small>
          </div>

          <Form onSubmit={handleReset}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">
                OTP
              </Form.Label>

              <InputGroup>
                <InputGroup.Text>
                  <FaKey />
                </InputGroup.Text>

                <Form.Control
                  type="text"
                  placeholder="Enter OTP"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  size="lg"
                />
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">
                New Password
              </Form.Label>

              <InputGroup>
                <InputGroup.Text>
                  <FaLock />
                </InputGroup.Text>

                <Form.Control
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  size="lg"
                />
              </InputGroup>
            </Form.Group>

            <Button
              type="submit"
              variant="success"
              size="lg"
              className="w-100 fw-semibold rounded-3"
            >
              Reset Password
            </Button>

            <Button
              variant="link"
              className="w-100 mt-3 text-decoration-none fw-semibold"
              onClick={() => router.push("/signin")}
            >
              ← Back to Sign In
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="text-center mt-5">Loading...</div>}>
      <ResetPasswordContent />
    </Suspense>
  );
}