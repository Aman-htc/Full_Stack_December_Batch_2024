


"use client";

import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { toast } from "react-toastify";

const AttendanceModal = ({
  show,
  onHide,
  entity,
  entityIdKey,
  addAttendance,
  ownerType,
}) => {
  const [loading, setLoading] = useState(false);

  const initialState = {
    attendance_date: null,
    status: "",
    remarks: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  const formatDate = (date) => {
    if (!date) return "";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.attendance_date) {
      newErrors.attendance_date = "Attendance date is required";
    }

    if (!formData.status) {
      newErrors.status = "Please select attendance status";
    }

    if (formData.remarks?.length > 250) {
      newErrors.remarks =
        "Remarks cannot exceed 250 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the form errors");
      return false;
    }

    return true;
  };

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

  const handleClose = () => {
    setFormData(initialState);
    setErrors({});
    setLoading(false);
    onHide();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      const entityId =
        entity?.[entityIdKey] ??
        entity?.data?.[entityIdKey];

      if (!entityId) {
        toast.error("Entity ID not found");
        return;
      }


      const payload = {
        owner_type: ownerType,
        owner_id: Number(entityId),

        class_id:
          entity?.ClassID ??
          entity?.data?.ClassID ??
          null,

        section_id:
          entity?.SectionID ??
          entity?.data?.SectionID ??
          null,

        attendance_date: formatDate(formData.attendance_date),

        status: formData.status,

        remarks: formData.remarks?.trim() || "",
      };

      await addAttendance(payload);

      toast.success(
        "Attendance added successfully"
      );

      handleClose();
    } catch (error) {
      console.error(error);

      const status = error?.response?.status;
      const message =
        error?.response?.data?.detail;

      if (status === 409) {
        toast.warning(
          message ||
          "Attendance already marked for this date"
        );
        return;
      }

      toast.error(
        message || "Failed to add attendance"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      backdrop="static"
      keyboard={!loading}
    >
      <Form onSubmit={handleSubmit} noValidate>
        <Modal.Header closeButton className="p-3">
          <Modal.Title>
            Add Attendance
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="g-3 p-3">

            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  Date
                  <span className="text-danger">
                    {" "}*
                  </span>
                </Form.Label>

                <Flatpickr
                  value={
                    formData.attendance_date || ""
                  }
                  onChange={(dates) => {
                    setFormData((prev) => ({
                      ...prev,
                      attendance_date:
                        dates?.[0] || null,
                    }));

                    setErrors((prev) => ({
                      ...prev,
                      attendance_date: "",
                    }));
                  }}
                  className={`form-control ${errors.attendance_date
                    ? "is-invalid"
                    : ""
                    }`}
                  options={{
                    dateFormat: "Y-m-d",
                   minDate: new Date().fp_incr(-4),
                    maxDate: "today",
                    disableMobile: true
                  }}
                />

                {errors.attendance_date && (
                  <div className="invalid-feedback d-block">
                    {errors.attendance_date}
                  </div>
                )}
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group>
                <Form.Label>
                  Status
                  <span className="text-danger">
                    {" "}*
                  </span>
                </Form.Label>

                <Form.Select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  isInvalid={!!errors.status}
                >
                  <option value="">
                    Select Status
                  </option>

                  <option value="Present">
                    Present
                  </option>

                  <option value="Absent">
                    Absent
                  </option>

                  <option value="Late">
                    Late
                  </option>

                  <option value="Half Day">
                    Half Day
                  </option>
                </Form.Select>

                <Form.Control.Feedback type="invalid">
                  {errors.status}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group>
                <Form.Label>
                  Remarks
                </Form.Label>

                <Form.Control
                  as="textarea"
                  rows={3}
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  placeholder="Enter remarks (optional)"
                  maxLength={250}
                  isInvalid={!!errors.remarks}
                />

                <div className="d-flex justify-content-between mt-1">
                  <Form.Control.Feedback type="invalid">
                    {errors.remarks}
                  </Form.Control.Feedback>

                  <small className="text-muted ms-auto">
                    {formData.remarks.length}/250
                  </small>
                </div>
              </Form.Group>
            </Col>

          </Row>
        </Modal.Body>

        <Modal.Footer className="p-1">
          <Button
            variant="secondary"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Saving..."
              : "Save Attendance"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AttendanceModal;