"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  Form,
  Row,
  Col,
  Button,
  Card,
} from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SpecialProgramModal = ({
  show,
  onHide,
  editData,
  students = [],
  onSave,
}) => {
  const [formData, setFormData] = useState({
    studentID: "",
    programType: "",
    programName: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
      setFormData({
        // studentID: editData.studentID?.toString() || "",
        studentID: editData.StudentID?.toString(),
        programType: editData.
          ProgramType
          || "",
        programName: editData.ProgramName
          || "",
        description: editData.description || "",
      });
    } else {
      setFormData({
        studentID: "",
        programType: "",
        programName: "",
        description: "",
      });
    }

    setErrors({});
  }, [editData, show]);

  //  CHANGE HANDLER (safe)
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  //  SUBMIT (FIXED)
  const handleSubmit = () => {
    const newErrors = {};

    if (!formData.studentID) {
      newErrors.studentID = "Please select a student";
    }

    if (!formData.programType.trim()) {
      newErrors.programType = "Program Type is required";
    }

    if (!formData.programName.trim()) {
      newErrors.programName = "Program Name is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const payload = {
      student_id: Number(formData.studentID),
      program_type: formData.programType,
      program_name: formData.programName,
      description: formData.description || "",
    };

    onSave(payload);

  };

  return (
    <>
      <Modal show={show} onHide={onHide} centered size="lg" backdrop="static">
        {/* HEADER */}
        <Modal.Header className="border-0 px-4 pt-4 pb-2 bg-light">
          <div>
            <h4 className="fw-bold text-primary mb-0">
              {editData ? "Edit Special Program" : "Add Special Program"}
            </h4>
            <small className="text-muted">
              Student Program Information
            </small>
          </div>
        </Modal.Header>

        {/* BODY */}
        <Modal.Body className="px-4 py-3 bg-light">
          {/* STUDENT INFO */}
          <Card className="border-0 shadow-sm mb-3">
            <Card.Body className="p-4">
              <h6 className="fw-bold mb-3">Student Information</h6>

              <Form.Group>
                <Form.Label className="fw-semibold">
                  Student
                </Form.Label>

                <Form.Select
                  name="studentID"
                  value={formData.studentID}
                  onChange={handleChange}
                  isInvalid={!!errors.studentID}
                  //  disabled={!!editData}
                >
                  <option value="">Select Student</option>

                  {students?.map((student) => (
                    <option
                      key={student.StudentID}
                      value={student.StudentID}
                    >
                      {student.StudentName} - {student.RollNumber}
                    </option>
                  ))}
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.studentID}
                </Form.Control.Feedback>
              </Form.Group>
            </Card.Body>
          </Card>

          {/* PROGRAM DETAILS */}
          <Card className="border-0 shadow-sm">
            <Card.Body className="p-4">
              <h6 className="fw-bold mb-3">Program Details</h6>

              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">
                      Program Type
                    </Form.Label>

                    <Form.Control
                      type="text"
                      name="programType"
                      value={formData.programType}
                      onChange={handleChange}
                      isInvalid={!!errors.programType}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.programType}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">
                      Program Name
                    </Form.Label>

                    <Form.Control
                      type="text"
                      name="programName"
                      value={formData.programName}
                      onChange={handleChange}
                      isInvalid={!!errors.programName}
                    />

                    <Form.Control.Feedback type="invalid">
                      {errors.programName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                {/* <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Description
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    isInvalid={!!errors.description}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col> */}
              </Row>
            </Card.Body>
          </Card>
        </Modal.Body>

        {/* FOOTER */}
        <Modal.Footer className="border-0 px-4 py-3 bg-light">
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>

          <Button variant="primary" onClick={handleSubmit} >
            {editData ? "Update Program" : "Save Program"}
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
      />
    </>
  );
};

export default SpecialProgramModal;