"use client";

import React from "react";
import { Form, Row, Col, Card } from "react-bootstrap";
import Flatpickr from "react-flatpickr";

import "flatpickr/dist/flatpickr.css";

const PersonalInfo = ({ formik ,text}) => {

  const uploadImage = async (file) => {
    const formData = new FormData();


    formData.append("file", file);

    formData.append("upload_preset", "profile_images");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyqtrk0rd/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );


    const data = await res.json();
    

    if (!data.secure_url) {
      throw new Error("Image upload failed");
    }

    return data.secure_url;
  };

  const errorClass = (fieldName,) =>
    formik.errors[fieldName] &&
      formik.touched[fieldName]
      ? "border-success-light"
      : "";

  return (

    <Card className="p-4 shadow-sm border-0 mb-3 rounded-4 bg-light">

      <h6 className="text-dark h6-alt mb-4">
        Personal Information
      </h6>

      <Row className="mb-4 g-3">

        {/* Teacher ID */}
        <Col md={4}>

          <Form.Group>

            <Form.Label className="text-dark cap-lg-med">
              {text} ID
            </Form.Label>

            <Form.Control
              type="text"
              name="studentId"
              value={'ATW-123'}
              disabled
              className="bg-dark-light border-danger-light rounded-3 py-2"
            />

            <Form.Label className="text-danger cap-lg-med mt-1">
              auto generated ID
            </Form.Label>

          </Form.Group>

        </Col>

        {/* Full Name */}
        <Col md={4}>

          <Form.Group>

            <Form.Label className="text-dark cap-lg-med">
              Full Name
            </Form.Label>

            <Form.Control
              type="text"
              name="fullName"

              {...formik.getFieldProps("fullName")}
              isInvalid={
                !!formik.errors.fullName &&
                formik.touched.fullName
              }
              className={`bg-light rounded-3 py-2 border ${errorClass(
                "fullName"
              )}`}
            />

            <Form.Control.Feedback
              type="invalid"
              className="text-success-light custom-feedback"
            >
              {formik.errors.fullName}
            </Form.Control.Feedback>

          </Form.Group>

        </Col>

        {/* DOB */}
        <Col md={4}>

          <Form.Group>

            <Form.Label className="text-dark cap-lg-med">
              Date of Birth
            </Form.Label>



            
            <Flatpickr
              options={{
                dateFormat: "Y-m-d",
                maxDate: "today",
                disableMobile: true,
              }}
              value={formik.values.dob || ""}
              onChange={(selectedDates, dateStr) => {
                formik.setFieldValue("dob", dateStr);
              }}
              onClose={() => formik.setFieldTouched("dob", true)}
              className={`form-control bg-light rounded-3 py-3 border ${errorClass("dob")}`}
            />

            {formik.errors.dob &&
              formik.touched.dob && (
                <div className="text-success-light  custom-feedback">
                  {formik.errors.dob}
                </div>
              )}

          </Form.Group>

        </Col>

      </Row>

      {/* Gender */}
      <Form.Group className="mb-4">

        <Form.Label className="text-dark cap-lg-med">
          Gender
        </Form.Label>

        <div className="d-flex gap-3">

          {["Male", "Female"].map((option) => (

            <div
              key={option}
              onClick={() =>
                formik.setFieldValue("gender", option)
              }
              className={`p-2 px-4 rounded-3 flex-grow-1 text-center transition-all ${formik.values.gender === option
                ? "border border-primary border-2 bg-info"
                : formik.errors.gender &&
                  formik.touched.gender
                  ? "border border-success-light"
                  : "border border-danger-light"
                }`}
              style={{
                cursor: "pointer",
                transition: "0.3s ease",
              }}
            >

              <Form.Check
                type="radio"
                label={option}
                name="gender"
                checked={formik.values.gender === option}
                readOnly
                className="pointer-events-none"
              />

            </div>

          ))}

        </div>

        {formik.errors.gender &&
          formik.touched.gender && (
            <div className="text-success-light custom-feedback mt-2">
              {formik.errors.gender}
            </div>
          )}

      </Form.Group>

      {/* Profile Upload */}
      <Form.Group>

        <Form.Label className="text-dark cap-lg-med">
          Profile Photo
        </Form.Label>

        <div
          className={`bg-dark-light border-1 rounded-3 p-4 text-center ${formik.errors.profilePhoto &&
            formik.touched.profilePhoto
            ? "border-success-light"
            : "border-primary"
            }`}
          style={{
            borderStyle: "dashed",
          }}
        >

          <input
            type="file"
            id="photoUpload"
            hidden
            accept="image/png, image/jpeg"

            onChange={async (event) => {
              try {
                const file = event.currentTarget.files?.[0];

                if (!file) return;

                const imageUrl = await uploadImage(file);

                formik.setFieldValue(
                  "profilePhoto",
                  imageUrl
                );

                formik.setFieldTouched(
                  "profilePhoto",
                  true
                );
              } catch (error) {
                console.error(error);
                alert("Image upload failed");
              }
            }}
          />
          <label
            htmlFor="photoUpload"
            style={{ cursor: "pointer" }}
            className="w-100 mb-0 p-3"
          >

            <div className="text-warning mb-1 body-lg-med">
              Click or drag to upload
            </div>

            <div className="text-danger cap-lg-reg">
              Upload a recent passport size photo
              (Max 2MB, JPG/PNG)
            </div>

          </label>

        </div>

       
        {formik.values.profilePhoto && (
          <div className="mt-3 text-center">
            <img
              src={formik.values.profilePhoto}
              alt="Profile"
              width="120"
              height="120"
              className="rounded-circle border"
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

      </Form.Group>

    </Card>
  );
};

export default PersonalInfo;