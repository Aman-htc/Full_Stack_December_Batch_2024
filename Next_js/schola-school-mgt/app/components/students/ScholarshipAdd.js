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
  scholarshipName: "",
  scholarshipType: "",
};

export default function ScholarshipModal({
  show,
  onHide,
  onSave,
  student,
  editData = null,
}) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (editData) {
    
      setFormData({

        scholarshipName: editData.
          ScholarshipName
          || "",
        scholarshipType: editData.ScholarshipType || "",
      });
    } else {

      setFormData(initialState);
    }

    setErrors({});
  }, [editData, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //  VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.scholarshipName) {
      newErrors.scholarshipName = "Scholarship Name is required";
    }

    if (!formData.scholarshipType) {
      newErrors.scholarshipType = "Scholarship Type is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const payload = {
      student_id: student?.data?.StudentID,
      scholarship_name: formData.scholarshipName,
      scholarship_type: formData.scholarshipType,
    };

    if (editData?.ScholarshipID
    ) {
      payload.scholarship_id =
        editData.ScholarshipID
        ;
    }

   

    onSave(payload);
  };

  return (
    <Modal show={show} onHide={onHide} centered size="md">

      {/* HEADER */}
      <Modal.Header className="bg-primary p-2 border-0 ">
        <Modal.Title className="text-dark">
          {editData ? "Edit Scholarship" : "Add Scholarship"}
        </Modal.Title>
      </Modal.Header>

      {/* BODY */}
      <Modal.Body className="p-4">

        <Row className="g-3">

          {/* NAME */}
          <Col md={12}>
            <Form.Group>
              <Form.Label>Scholarship Name</Form.Label>

              <Form.Control
                type="text"
                name="scholarshipName"
                value={formData.scholarshipName}
                onChange={handleChange}
                placeholder="Merit Scholarship"
                isInvalid={!!errors.scholarshipName}
              />

              <Form.Control.Feedback type="invalid">
                {errors.scholarshipName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

          {/* TYPE */}
          <Col md={12}>
            <Form.Group>
              <Form.Label>Scholarship Type</Form.Label>

              <Form.Select
                name="scholarshipType"
                value={formData.scholarshipType}
                onChange={handleChange}
                isInvalid={!!errors.scholarshipType}
              >
                <option value="">Select Type</option>
                <option value="Merit">Merit Based</option>
                <option value="Sports">Sports</option>
                <option value="Need">Need Based</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors.scholarshipType}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>

        </Row>

      </Modal.Body>

      {/* FOOTER */}
      <Modal.Footer className="border-0">

        <Button variant="light" onClick={onHide}>
          Cancel
        </Button>

        <Button variant="primary" onClick={handleSubmit}>
          {editData ? "Update Scholarship" : "Save Scholarship"}
        </Button>

      </Modal.Footer>

    </Modal>
  );
}