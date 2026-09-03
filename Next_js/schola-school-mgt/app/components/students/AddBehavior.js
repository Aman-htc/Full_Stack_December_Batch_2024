"use client";

import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

import {
  Modal,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";

const initialState = {
  logDate: "",
  logType: "",
  description: "",
  reportedBy: "",
  actionTaken: "",
};

export default function BehaviorLogModal({
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
    if (editData) {
      setFormData({
        logDate:
          editData.LogDate?.split("T")[0] || "",
        logType:
          editData.LogType || "",
        description:
          editData.Description || "",
        reportedBy:
          editData.ReportedBy || "",
        actionTaken:
          editData.ActionTaken || "",
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

  const validate = () => {
    let newErrors = {};

    if (!formData.logDate) {
      newErrors.logDate =
        "Log Date is required";
    }

    if (!formData.logType) {
      newErrors.logType =
        "Log Type is required";
    }

    if (!formData.description) {
      newErrors.description =
        "Description is required";
    }

    setErrors(newErrors);

    return (
      Object.keys(newErrors).length === 0
    );
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const payload = {
      student_id: Number(student?.data?.StudentID),

      log_date:
        formData.logDate,

      log_type:
        formData.logType,

      description:
        formData.description,

      reported_by:
        formData.reportedBy,

      action_taken:
        formData.actionTaken,
    };

    // if (editData?.LogID) {
    //   payload.behavior_log_id =
    //     editData.LogID;
    // }

    onSave(payload);
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
    >
      <Modal.Header closeButton className="border-0 p-3">
        <div>
          <h4 className="fw-bold mb-1">
            {editData
              ? "Update Behavior Log"
              : "Add Behavior Log"}
          </h4>

          <p className="text-muted mb-0">
            Student behavior record management
          </p>
        </div>
      </Modal.Header>

      <Modal.Body>

        <div className="bg-light rounded-4 p-3 mb-3">

          <Row className="g-3">

            {/* Date */}

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Log Date
                </Form.Label>

                <Flatpickr
                  className={`form-control form-control-lg ${errors.logDate
                      ? "is-invalid"
                      : ""
                    }`}
                  options={{
                    dateFormat: "Y-m-d",
                    maxDate: "today",
                    disableMobile:true
                  }}
                  value={formData.logDate}
                  onChange={(dates, dateStr) =>
                    setFormData((prev) => ({
                      ...prev,
                      logDate: dateStr,
                    }))
                  }
                />

                {errors.logDate && (
                  <div className="invalid-feedback d-block">
                    {errors.logDate}
                  </div>
                )}
              </Form.Group>
            </Col>

            {/* Type */}

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Log Type
                </Form.Label>

                <Form.Select
                  size="lg"
                  name="logType"
                  value={formData.logType}
                  onChange={handleChange}
                  isInvalid={!!errors.logType}
                >
                  <option value="">
                    Select Type
                  </option>

                  <option value="Discipline">
                    Discipline
                  </option>

                  <option value="Positive">
                    Positive
                  </option>

                  <option value="Attendance">
                    Attendance
                  </option>

                  <option value="Academic">
                    Academic
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Description */}

            <Col md={12}>
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
                  placeholder="Enter detailed behavior notes..."
                  isInvalid={!!errors.description}
                />
              </Form.Group>
            </Col>

            {/* Reported By */}

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Reported By
                </Form.Label>

                <Form.Control
                  size="lg"
                  type="text"
                  name="reportedBy"
                  value={formData.reportedBy}
                  onChange={handleChange}
                  placeholder="Teacher Name"
                />
              </Form.Group>
            </Col>

            {/* Action */}

            <Col md={6}>
              <Form.Group>
                <Form.Label className="fw-semibold">
                  Action Taken
                </Form.Label>

                <Form.Select
                  size="lg"
                  name="actionTaken"
                  value={formData.actionTaken}
                  onChange={handleChange}
                >
                  <option value="">
                    Select Action
                  </option>

                  <option value="Warning">
                    Warning
                  </option>

                  <option value="Counselling">
                    Counselling
                  </option>

                  <option value="Parent Meeting">
                    Parent Meeting
                  </option>

                  <option value="Recognition">
                    Recognition
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>

          </Row>

        </div>

      </Modal.Body>

      <Modal.Footer className="border-0">

        <Button
          variant="light"
          size="lg"
          onClick={onHide}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          size="lg"
          onClick={handleSubmit}
        >
          {editData
            ? "Update Log"
            : "Save Log"}
        </Button>

      </Modal.Footer>
    </Modal>
  );
}