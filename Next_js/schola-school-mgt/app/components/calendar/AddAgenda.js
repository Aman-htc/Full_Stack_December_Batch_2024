



"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
} from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import { toast } from "react-toastify";

import {
  CalendarDays,
  Clock3,
  MapPin,
  FileText,
  Tag,
} from "lucide-react";

import "flatpickr/dist/themes/material_blue.css";

const initialState = {
  title: "",
  category: "",
  schedule_date: "",
  start_time: "",
  end_time: "",
  room_number: "",
  notes: "",
};

const AddAgenda = ({
  show,
  handleClose,
  onSubmit,
  editData,
}) => {
  const [agendaData, setAgendaData] = useState(initialState);
  const [errors, setErrors] = useState({});

  // =========================
  // LOAD EDIT DATA
  // =========================
  useEffect(() => {
    if (editData) {
      setAgendaData({
        title: editData.title || "",
        category: editData.category || "",
        schedule_date: editData.schedule_date || "",
        start_time: editData.start_time
          ? editData.start_time.replace(".000Z", "")
          : "",
        end_time: editData.end_time
          ? editData.end_time.replace(".000Z", "")
          : "",
        room_number: editData.room_number || "",
        notes: editData.notes || "",
      });
    } else {
      setAgendaData(initialState);
    }

    setErrors({});
  }, [editData, show]);

  // =========================
  // INPUT HANDLER
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setAgendaData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =========================
  // DATE HANDLER
  // =========================
  // const handleDateChange = (selectedDates) => {
  //   if (!selectedDates.length) return;

  //   setAgendaData((prev) => ({
  //     ...prev,
  //     schedule_date: selectedDates[0]
  //       .toISOString()
  //       .split("T")[0],
  //   }));

  //   setErrors((prev) => ({
  //     ...prev,
  //     schedule_date: "",
  //   }));
  // };

  const handleDateChange = (selectedDates) => {
  if (!selectedDates.length) return;

  const date = selectedDates[0];

  const formattedDate = [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");

  setAgendaData((prev) => ({
    ...prev,
    schedule_date: formattedDate,
  }));

  setErrors((prev) => ({
    ...prev,
    schedule_date: "",
  }));
};

  // =========================
  // START TIME HANDLER
  // =========================
  const handleStartTime = (selectedDates) => {
    if (!selectedDates.length) return;

    const time = selectedDates[0]
      .toTimeString()
      .split(" ")[0];

    setAgendaData((prev) => ({
      ...prev,
      start_time: time,
    }));

    setErrors((prev) => ({
      ...prev,
      start_time: "",
    }));
  };

  // =========================
  // END TIME HANDLER
  // =========================
  const handleEndTime = (selectedDates) => {
    if (!selectedDates.length) return;

    const time = selectedDates[0]
      .toTimeString()
      .split(" ")[0];

    setAgendaData((prev) => ({
      ...prev,
      end_time: time,
    }));

    setErrors((prev) => ({
      ...prev,
      end_time: "",
    }));
  };

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    const newErrors = {};

    if (!agendaData.title.trim()) {
      newErrors.title = "Event title is required";
    }

    if (!agendaData.category) {
      newErrors.category = "Category is required";
    }

    if (!agendaData.schedule_date) {
      newErrors.schedule_date = "Date is required";
    }

    if (!agendaData.start_time) {
      newErrors.start_time = "Start time is required";
    }

    if (!agendaData.end_time) {
      newErrors.end_time = "End time is required";
    }

    if (!agendaData.room_number.trim()) {
      newErrors.room_number = "Room number is required";
    }

    if (!agendaData.notes.trim()) {
      newErrors.notes = "Notes are required";
    }

    if (
      agendaData.start_time &&
      agendaData.end_time &&
      agendaData.start_time >= agendaData.end_time
    ) {
      newErrors.end_time =
        "End time must be after start time";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = async () => {
    if (!validate()) return;

    const payload = {
      title: agendaData.title.trim(),
      category: agendaData.category,
      schedule_date: agendaData.schedule_date,
      start_time: `${agendaData.start_time}.000Z`,
      end_time: `${agendaData.end_time}.000Z`,
      room_number: agendaData.room_number.trim(),
      notes: agendaData.notes.trim(),
    };

    try {
      await onSubmit(payload, editData?.id);

      toast.success(
        editData
          ? "Agenda updated successfully"
          : "Agenda created successfully"
      );

      setAgendaData(initialState);
      setErrors({});
      handleClose();
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to save agenda"
      );
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      size="lg"
      backdrop="static"
    >
      {/* HEADER */}
      <Modal.Header
        closeButton
        className="border-0 px-4 pt-4 pb-0"
      >
        <div className="d-flex align-items-center gap-2">
          <div
            className="d-flex align-items-center justify-content-center rounded-circle bg-dark text-light"
            style={{
              width: 42,
              height: 42,
            }}
          >
            <CalendarDays size={20} />
          </div>

          <div>
            <Modal.Title className="fw-bold fs-4 mb-0">
              {editData
                ? "Update Agenda"
                : "Add New Agenda"}
            </Modal.Title>

            <p className="text-muted small mb-0">
              Schedule your meeting or event
            </p>
          </div>
        </div>
      </Modal.Header>

      {/* BODY */}
      <Modal.Body className="px-4 py-4">
        <Row className="g-4">
          {/* TITLE */}
          <Col md={12}>
            <Form.Label>Event Title *</Form.Label>

            <InputGroup>
              <InputGroup.Text>
                <FileText size={18} />
              </InputGroup.Text>

              <Form.Control
                name="title"
                value={agendaData.title}
                onChange={handleChange}
                placeholder="Enter event title"
                isInvalid={!!errors.title}
              />

              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>

          {/* CATEGORY */}
          <Col md={6}>
            <Form.Label>Category *</Form.Label>

            <InputGroup>
              <InputGroup.Text>
                <Tag size={18} />
              </InputGroup.Text>

              <Form.Select
                name="category"
                value={agendaData.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              >
                <option value="">Select Category</option>

                <option value="Academic">
                  Academic
                </option>

                <option value="Events">
                  Events
                </option>

                <option value="Finance">
                  Finance
                </option>

                <option value="Administration">
                  Administration
                </option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>

          {/* DATE */}
          <Col md={6}>
            <Form.Label>Date *</Form.Label>

            <InputGroup>
              <InputGroup.Text>
                <CalendarDays size={18} />
              </InputGroup.Text>

              <Flatpickr
                className="form-control"
                value={agendaData.schedule_date}
                onChange={handleDateChange}
                options={{
                  dateFormat: "Y-m-d",
                  disableMobile: true,
                }}
                placeholder="Select date"
              />
            </InputGroup>

            {errors.schedule_date && (
              <div className="text-danger small mt-1">
                {errors.schedule_date}
              </div>
            )}
          </Col>

          {/* START TIME */}
          <Col md={6}>
            <Form.Label>Start Time *</Form.Label>

            <InputGroup>
              <InputGroup.Text>
                <Clock3 size={18} />
              </InputGroup.Text>

              <Flatpickr
                value={agendaData.start_time}
                onChange={handleStartTime}
                className="form-control"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  time_24hr: true,
                  disableMobile: true,
                }}
                placeholder="Select start time"
              />
            </InputGroup>

            {errors.start_time && (
              <div className="text-danger small mt-1">
                {errors.start_time}
              </div>
            )}
          </Col>

          {/* END TIME */}
          <Col md={6}>
            <Form.Label>End Time *</Form.Label>

            <InputGroup>
              <InputGroup.Text>
                <Clock3 size={18} />
              </InputGroup.Text>

              <Flatpickr
                value={agendaData.end_time}
                onChange={handleEndTime}
                className="form-control"
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: "H:i",
                  time_24hr: true,
                  disableMobile: true,
                }}
                placeholder="Select end time"
              />
            </InputGroup>

            {errors.end_time && (
              <div className="text-danger small mt-1">
                {errors.end_time}
              </div>
            )}
          </Col>

          {/* ROOM NUMBER */}
          <Col md={12}>
            <Form.Label>Location *</Form.Label>

            <InputGroup>
              <InputGroup.Text>
                <MapPin size={18} />
              </InputGroup.Text>

              <Form.Control
                name="room_number"
                value={agendaData.room_number}
                onChange={handleChange}
                placeholder="Example: Room A-101 or 12 Senior Room"
                isInvalid={!!errors.room_number}
              />

              <Form.Control.Feedback type="invalid">
                {errors.room_number}
              </Form.Control.Feedback>
            </InputGroup>
          </Col>

          {/* NOTES */}
          <Col md={12}>
            <Form.Label>Notes *</Form.Label>

            <Form.Control
              as="textarea"
              rows={4}
              name="notes"
              value={agendaData.notes}
              onChange={handleChange}
              placeholder="Write notes..."
              isInvalid={!!errors.notes}
            />

            <Form.Control.Feedback type="invalid">
              {errors.notes}
            </Form.Control.Feedback>
          </Col>
        </Row>
      </Modal.Body>

      {/* FOOTER */}
      <Modal.Footer className="border-0 px-4 pb-4">
        <Button
          variant="light"
          onClick={handleClose}
        >
          Cancel
        </Button>

        <Button
          variant="primary"
          onClick={handleSubmit}
          type="submit"
        >
          {editData
            ? "Update Agenda"
            : "Save Agenda"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddAgenda;