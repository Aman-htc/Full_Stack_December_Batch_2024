"use client";
import React from "react";
import { Form, Row, Col, Card, InputGroup } from "react-bootstrap";

const ContactInfo = ({ formik ,editData}) => {

  const errorClass = (fieldName) =>
    formik.errors[fieldName] &&
      formik.touched[fieldName]
      ? "border-success-light"
      : "";

  return (

    <Card className="p-4 shadow-sm border-0 bg-light rounded-4 mb-3">

      <h6 className="text-dark h6-alt mb-4">
        Contact Information
      </h6>

      {/* Email & Phone */}
      <Row className="mb-4">

        {/* Email */}
        <Col md={6}>

          <Form.Group>

            <Form.Label className="text-dark cap-lg-med">
              Email Address
            </Form.Label>

            <Form.Control
              type="email"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.email && !!formik.errors.email}
              className={`bg-light rounded-3 py-2 border ${errorClass("email")}`}
              disabled={!!editData}
            />

            <Form.Control.Feedback
              type="invalid"
              className="text-success-light custom-feedback"
            >
              {formik.errors.email}
            </Form.Control.Feedback>

          </Form.Group>

        </Col>

        {/* Phone */}
        <Col md={6}>

          <Form.Group>

            <Form.Label className="text-dark cap-lg-med">
              Phone Number
            </Form.Label>

            <InputGroup hasValidation>

              <Form.Select
                {...formik.getFieldProps("phoneCountry")}
                style={{ maxWidth: "90px" }}
                className={`bg-primary border-0 ${errorClass(
                  "phoneCountry"
                )}`}
              >
                <option value="+44">+44</option>
                <option value="+91">+91</option>
              </Form.Select>

              <Form.Control
                type="text"

                {...formik.getFieldProps("phoneNumber")}
                isInvalid={
                  !!formik.errors.phoneNumber &&
                  formik.touched.phoneNumber
                }
                className={`bg-light py-2 border ${errorClass(
                  "phoneNumber"
                )}`}
              />

              <Form.Control.Feedback
                type="invalid"
                className="text-success-light custom-feedback"
              >
                {formik.errors.phoneNumber}
              </Form.Control.Feedback>

            </InputGroup>

          </Form.Group>

        </Col>

      </Row>

      {/* Address */}
      <Row>

        <Col md={12}>

          <Form.Group>

            <Form.Label className="text-dark cap-lg-med">
              Address
            </Form.Label>

            <Form.Control
              as="textarea"
              rows={4}

              {...formik.getFieldProps("address")}
              isInvalid={
                !!formik.errors.address &&
                formik.touched.address
              }
              className={`bg-light rounded-3 py-2 border ${errorClass(
                "address"
              )}`}
            />

            <Form.Control.Feedback
              type="invalid"
              className="text-success-light custom-feedback"
            >
              {formik.errors.address}
            </Form.Control.Feedback>

          </Form.Group>

        </Col>

      </Row>

    </Card>
  );
};

export default ContactInfo;