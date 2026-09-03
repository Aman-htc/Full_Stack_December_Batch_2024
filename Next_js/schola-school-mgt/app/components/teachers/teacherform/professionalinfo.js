"use client";

import { getDepartments } from "@/services/teacherService";
import React, { useEffect, useState } from "react";
import { Form, Row, Col, Card } from "react-bootstrap";

const ProfessionalInfo = ({ formik }) => {
  const [departments, setDepartments] =
    useState([]);

  const fetchDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data.data);
    console.log('getDepartments', data)
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  
  const errorClass = (fieldName) =>
    formik.errors[fieldName] &&
      formik.touched[fieldName]
      ? "border-success-light"
      : "";

  return (

    <Card
      className="p-4 shadow-sm border-0 bg-light rounded-4 mb-3"
      style={{ borderRadius: "10px" }}
    >

      <h6 className="text-dark h6-alt mb-3">
        Professional Information
      </h6>

      <Row className="mb-3 g-3">

        {/* Department */}
        <Col >

          <Form.Group>

            <Form.Label className="text-dark cap-lg-med mb-2">
              Department
            </Form.Label>

            <Form.Select
              name="department"
              value={formik.values.department}
              onChange={(e) =>
                formik.setFieldValue(
                  "department",
                  Number(e.target.value)
                )
              }
              isInvalid={
                !!formik.errors.department &&
                formik.touched.department
              }
              className={`bg-light py-2 border ${errorClass(
                "department"
              )}`}
            >
              <option value="">
                Select Department
              </option>

              {departments?.map((dept) => (
                <option
                  key={dept.DepartmentID}
                  value={dept.DepartmentID}
                >
                  {dept.DepartmentName}
                </option>
              ))}
            </Form.Select>




            <Form.Control.Feedback
              type="invalid"
              className="text-success-light custom-feedback"
            >
              {formik.errors.department}
            </Form.Control.Feedback>

          </Form.Group>

        </Col>



      </Row>

    </Card>
  );
};

export default ProfessionalInfo;