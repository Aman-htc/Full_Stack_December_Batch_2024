"use client";

import { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const initialState = {
  clubName: "",
  roleOrPosition: "",
  achievements: "",
  duration: "",
  advisorName: "",
};

export default function StudentClubModal({
  show,
  onHide,
  onSave,
  student,
  editData = null,
}) {
  const [formData, setFormData] =
    useState(initialState);

  const [errors, setErrors] =
    useState({});

  useEffect(() => {
    if (show) {
      if (editData) {
        setFormData({
          clubName:
            editData.ClubName || "",
          roleOrPosition:
            editData.RoleOrPosition || "",
          achievements:
            editData.Achievements || "",
          duration:
            editData.Duration || "",
          advisorName:
            editData.AdvisorName
 || "",
        });
      } else {
        setFormData(initialState);
      }

      setErrors({});
    }
  }, [show, editData]);

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.clubName.trim()) {
      newErrors.clubName =
        "Club Name is required";
    }

    if (
      !formData.roleOrPosition.trim()
    ) {
      newErrors.roleOrPosition =
        "Role is required";
    }

    if (
      !formData.achievements.trim()
    ) {
      newErrors.achievements =
        "Achievements are required";
    }

    if (!formData.duration.trim()) {
      newErrors.duration =
        "Duration is required";
    }

    if (
      !formData.advisorName.trim()
    ) {
      newErrors.advisorName =
        "Advisor Name is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length ===
      0
    );
  };

  const handleSubmit = () => {

    if (!validate()) return;
    

    const payload = {
      student_id: student?.data?.StudentID,

      club_name: formData.clubName,

      role_or_position:
        formData.roleOrPosition,

      achievements:
        formData.achievements,

      duration:
        formData.duration,

      advisor_name:
        formData.advisorName,
    };

    if (editData) {
      payload.ClubID =
        editData.ClubID;
    }

    console.log(
      "Club Payload =>",
      payload
    );

    onSave(payload);
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      backdrop="static"
    >
      {/* Header */}
      <Modal.Header
        closeButton
        className="bg-primary text-white border-0 p-4"
      >
        <Modal.Title className="fw-bold  text-dark fs-4">
          {editData
            ? "Edit Club Activity"
            : "Add Club Activity"}
        </Modal.Title>
      </Modal.Header>

      {/* Body */}
      <Modal.Body className="bg-light p-4">

        <div className="bg-white rounded-4 shadow-sm p-4">

          <div className="mb-4">
            <h6 className="fw-bold text-primary mb-1">
              Club Information
            </h6>

            <small className="text-muted">
              Fill all required club activity details
            </small>
          </div>

          <Row className="g-4">

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Club Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="clubName"
                  value={formData.clubName}
                  onChange={handleChange}
                  isInvalid={!!errors.clubName}
                  placeholder="Science Club"
                  className="rounded-3"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.clubName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Role / Position
                </Form.Label>

                <Form.Control
                  type="text"
                  name="roleOrPosition"
                  value={formData.roleOrPosition}
                  onChange={handleChange}
                  isInvalid={!!errors.roleOrPosition}
                  placeholder="President"
                  className="rounded-3"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.roleOrPosition}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Achievements
                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={4}
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleChange}
                  isInvalid={!!errors.achievements}
                  placeholder="Enter achievements..."
                  className="rounded-3"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.achievements}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Duration
                </Form.Label>

                <Form.Control
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  isInvalid={!!errors.duration}
                  placeholder="2024 - Present"
                  className="rounded-3"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.duration}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Advisor Name
                </Form.Label>

                <Form.Control
                  type="text"
                  name="advisorName"
                  value={formData.advisorName}
                  onChange={handleChange}
                  isInvalid={!!errors.advisorName}
                  placeholder="Mr. Sharma"
                  className="rounded-3"
                />

                <Form.Control.Feedback type="invalid">
                  {errors.advisorName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

          </Row>

        </div>

      </Modal.Body>

      {/* Footer */}
      <Modal.Footer className="bg-light border-0 px-4 pb-4">

        <Button
          variant="outline-secondary"
          onClick={onHide}
          className="rounded-3 px-4"
        >
          Cancel
        </Button>

        <Button
          variant={editData ? "warning" : "primary"}
          onClick={handleSubmit}
          className="rounded-3 px-4"
        >
          {editData
            ? "Update Activity"
            : "Save Activity"}
        </Button>

      </Modal.Footer>
    </Modal>
  );
}