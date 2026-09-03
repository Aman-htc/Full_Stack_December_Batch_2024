

"use client";

import { Suspense, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Card, Container, Form, Button, Alert } from "react-bootstrap";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { ShieldCheck, ArrowClockwise } from "react-bootstrap-icons";
import UserPool from "@/services/cognito";
import { addadmin } from "@/services/adminServices";
import { toast } from "react-toastify";

function VerifyContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const emailFromUrl = searchParams.get("email");

  const [email, setEmail] = useState(emailFromUrl || "");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setEmail(emailFromUrl || "");
  }, [emailFromUrl]);

  const verifyUser = async () => {
    setMessage("");
    setError("");

    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    if (!otp.trim()) {
      setError("Please enter OTP");
      return;
    }

    setLoading(true);

    try {
      const user = new CognitoUser({
        Username: email,
        Pool: UserPool,
      });

      await new Promise((resolve, reject) => {
        user.confirmRegistration(otp.trim(), true, (err, result) => {
          if (err) reject(err);
          else resolve(result);
        });
      });

      const payload = JSON.parse(localStorage.getItem("signupData"));

      if (!payload) {
        throw new Error("Signup data not found");
      }

      const session = await new Promise((resolve, reject) => {
        const cognitoUser = new CognitoUser({
          Username: payload.email_address,
          Pool: UserPool,
        });

        const authDetails = new AuthenticationDetails({
          Username: payload.email_address,
          Password: payload.password,
        });

        cognitoUser.authenticateUser(authDetails, {
          onSuccess: (session) => resolve(session),
          onFailure: (err) => reject(err),
        });
      });

      const accessToken = session.getAccessToken().getJwtToken();
      const idToken = session.getIdToken().getJwtToken();
      const refreshToken = session.getRefreshToken().getToken();

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("idToken", idToken);
      localStorage.setItem("refreshToken", refreshToken);

      const response = await addadmin(payload);

      console.log(response);

      localStorage.removeItem("signupData");

      toast.success("Account created successfully");

      router.push("/dashboard");
    } catch (err) {
      console.error("VERIFY ERROR:", err);

      if (err?.response) {
        console.log(
          "DATA:",
          JSON.stringify(err.response?.data, null, 2)
        );

        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);

        setError(
          err.response.data?.detail ||
            err.response.data?.message ||
            "Backend error"
        );
      } else {
        setError(err.message || "Verification failed");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    setMessage("");
    setError("");

    if (!email) {
      setError("Email not found. Please register again.");
      return;
    }

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    user.resendConfirmationCode((err) => {
      if (err) {
        setError(err.message || "Failed to resend OTP");
        return;
      }

      setMessage("OTP resent successfully");
    });
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex justify-content-center align-items-center bg-primary"
    >
      <Card
        className="shadow border-0 p-4"
        style={{
          width: "420px",
          borderRadius: "16px",
        }}
      >
        <div className="text-center mb-4">
          <div
            className="mx-auto mb-3 d-flex justify-content-center align-items-center bg-warning-light text-white"
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
            }}
          >
            <ShieldCheck size={30} />
          </div>

          <h4 className="fw-bold">Verify Account</h4>

          {email && (
            <p className="text-muted mb-0">
              OTP sent to <span className="fw-semibold">{email}</span>
            </p>
          )}
        </div>

        {message && (
          <Alert variant="success" className="py-2 text-center">
            {message}
          </Alert>
        )}

        {error && (
          <Alert variant="danger" className="py-2 text-center">
            {error}
          </Alert>
        )}

        <Form.Group className="mb-3">
          <Form.Control
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit OTP"
            maxLength={6}
            className="text-center fw-bold fs-5 py-3"
            style={{ letterSpacing: "6px", borderRadius: "10px" }}
          />
        </Form.Group>

        <Button
          className="w-100 mb-2 py-2 fw-semibold"
          onClick={verifyUser}
          disabled={loading}
          style={{ borderRadius: "10px" }}
        >
          {loading ? "Verifying..." : "Verify Account"}
        </Button>

        <Button
          variant="warning-light"
          className="w-100 py-2 fw-semibold"
          onClick={handleResendOtp}
          style={{ borderRadius: "10px" }}
        >
          <ArrowClockwise className="me-2" />
          Resend OTP
        </Button>
      </Card>
    </Container>
  );
}

export default function Verify() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyContent />
    </Suspense>
  );
}