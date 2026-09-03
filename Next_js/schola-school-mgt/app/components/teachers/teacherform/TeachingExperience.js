"use client";

import React, { useState } from "react";
import {
  Button,
  Card,
  Form,

  Row,
  Col,
  Table,
  Modal,
} from "react-bootstrap";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import Swal from "sweetalert2";

const TeachingExperience = ({
  experienceList,
  setExperienceList,
  editData
}) => {
  const [show, setShow] = useState(false);

  const [experienceForm, setExperienceForm] = useState({
    organization_name: "",
    job_title: "",
    start_date: "",
    end_date: "",
    is_current: false,
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setExperienceForm(experienceList[index]);
    setEditIndex(index);
    setShow(true);
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setExperienceForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };
  const validateForm = () => {
    let newErrors = {};

    if (!experienceForm.organization_name.trim()) {
      newErrors.organization_name =
        "Organization Name is required";
    }

    if (!experienceForm.job_title.trim()) {
      newErrors.job_title =
        "Job Title is required";
    }

    if (!experienceForm.start_date) {
      newErrors.start_date =
        "Start Date is required";
    }

    if (
      !experienceForm.is_current &&
      !experienceForm.end_date
    ) {
      newErrors.end_date =
        "End Date is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };
  const handleAddExperience = () => {
    if (!validateForm()) return;

    if (editIndex !== null) {
      const updatedList = [...experienceList];

      updatedList[editIndex] = {
        ...updatedList[editIndex],
        ...experienceForm,
      };

      setExperienceList(updatedList);
      setEditIndex(null);
    } else {
      setExperienceList((prev) => [
        ...prev,
        experienceForm,
      ]);
    }

    setExperienceForm({
      organization_name: "",
      job_title: "",
      start_date: "",
      end_date: "",
      is_current: false,
      description: "",
    });

    setErrors({});
    setShow(false);
  };

  const handleDelete = async (index) => {
    const item = experienceList[index];

    const result = await Swal.fire({
      title: "Delete Experience?",
      text: "This experience record will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      if (item.experience_id) {
        await deleteExperienceInformation(
          item.experience_id
        );
      }

      setExperienceList((prev) =>
        prev.filter((_, i) => i !== index)
      );

      Swal.fire({
        title: "Deleted!",
        text: "Experience deleted successfully.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });

      toast.success(
        "Experience deleted successfully"
      );
    } catch (error) {
      console.error(error);

      Swal.fire({
        title: "Error!",
        text: "Failed to delete experience.",
        icon: "error",
      });

      toast.error("Delete failed");
    }
  };

  return (
    <>
      <Card className="shadow-sm border-0 rounded-4">
        <Card.Body className="p-4">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h4 className="fw-bold mb-1">
                Teaching Experience
              </h4>

            </div>

            <Button
              variant="primary"
              className="px-3"
              onClick={() => setShow(true)}
            >
               Add Experience
            </Button>
          </div>

          {/* Empty State */}
          {experienceList.length === 0 ? (
            <div className="text-center py-5">
              <h6 className="text-muted mb-2">
                No Experience Added
              </h6>

              <p className="text-muted mb-0">
                Click "Add Experience" to create your first record.
              </p>
            </div>
          ) : (
            <div className="table-responsive">
              <Table
                hover
                bordered
                className="align-middle text-nowrap mb-0"
              >
                <thead className="table-light">
                  <tr>
                    <th>Institution</th>
                    <th>Job Title</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Status</th>
                    <th style={{ minWidth: "250px" }}>
                      Description
                    </th>
                    {editData && (
                      <th className="text-center" width="120">
                        Action
                      </th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {experienceList?.length > 0 ? (
                    experienceList.map((item, index) => (
                      <tr key={index}>
                        <td>{item.organization_name || "-"}</td>

                        <td>{item.job_title || "-"}</td>

                        <td>{item.start_date || "-"}</td>

                        <td>
                          {item.is_current
                            ? "Present"
                            : item.end_date || "-"}
                        </td>

                        <td>
                          <span
                            className={`badge ${item.is_current
                              ? "bg-success"
                              : "bg-secondary"
                              }`}
                          >
                            {item.is_current
                              ? "Currently Working"
                              : "Completed"}
                          </span>
                        </td>

                        <td
                          style={{
                            maxWidth: "300px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          title={item.description}
                        >
                          {item.description || "-"}
                        </td>

                        {editData && (
                          <td className="text-center">
                            <Button
                              size="sm"
                              variant=""
                              className="me-2"
                              onClick={() => handleEdit(index)}
                            >
                              <FiEdit2 size={16} />
                            </Button>

                            <Button
                              size="sm"
                              variant=""
                              onClick={() => handleDelete(index)}
                            >
                              <FiTrash2 size={20} />
                            </Button>
                          </td>
                        )}
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={editData ? 7 : 6}
                        className="text-center text-muted py-4"
                      >
                        No experience added yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
            </div>
          )}
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        backdrop="static"
      >
        <Modal.Header
          closeButton
          className="border-0 bg-light py-4"
        >
          <div className="w-100">
            <h4 className="fw-bold mb-1 text-dark">
              Teaching Experience
            </h4>

            <p className="text-muted mb-0 small">
              Add previous teaching and professional experience
            </p>
          </div>
        </Modal.Header>

        <Modal.Body className="px-4 pb-4">
          <div className="bg-light rounded-4 p-4">
            <Row className="g-4">

              {/* Organization */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    School / Institution
                    <span className="text-danger ms-1">*</span>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="organization_name"
                    placeholder="Enter institution name"
                    value={experienceForm.organization_name}
                    onChange={handleChange}
                    isInvalid={!!errors.organization_name}
                    className="rounded-3 py-2"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.organization_name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Job Title */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Job Title
                    <span className="text-danger ms-1">*</span>
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="job_title"
                    placeholder="e.g. Senior Mathematics Teacher"
                    value={experienceForm.job_title}
                    onChange={handleChange}
                    isInvalid={!!errors.job_title}
                    className="rounded-3 py-2"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.job_title}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Start Date */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Start Date
                    <span className="text-danger ms-1">*</span>
                  </Form.Label>

                  {/* <Form.Control
                    type="date"
                    name="start_date"
                    value={experienceForm.start_date}
                    onChange={handleChange}
                    isInvalid={!!errors.start_date}
                    className="rounded-3 py-2"
                  /> */}
                  <Flatpickr
                    value={experienceForm.start_date}
                    options={{
                      dateFormat: "Y-m-d",
                      maxDate: "today", // aaj ke baad date select nahi hogi
                    }}
                    onChange={(selectedDates, dateStr) => {
                      setExperienceForm({
                        ...experienceForm,
                        start_date: dateStr,
                      });
                    }}
                    className={`form-control rounded-3 py-2 ${errors.start_date ? "is-invalid" : ""
                      }`}
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.start_date}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* End Date */}
              {/* <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    End Date
                  </Form.Label>

                  <Form.Control
                    type="date"
                    name="end_date"
                    value={experienceForm.end_date}
                    onChange={handleChange}
                    disabled={experienceForm.is_current}
                    isInvalid={!!errors.end_date}
                    className="rounded-3 py-2"
                  />

                  <Form.Control.Feedback type="invalid">
                    {errors.end_date}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col> */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    End Date
                  </Form.Label>

                  <Flatpickr
                    value={experienceForm.end_date}
                    options={{
                      dateFormat: "Y-m-d",
                      minDate: experienceForm.start_date || null,
                      maxDate: "today",
                    }}
                    disabled={experienceForm.is_current}
                    onChange={(selectedDates, dateStr) => {
                      setExperienceForm({
                        ...experienceForm,
                        end_date: dateStr,
                      });
                    }}
                    className={`form-control rounded-3 py-2 ${errors.end_date ? "is-invalid" : ""
                      }`}
                  />

                  {errors.end_date && (
                    <div className="invalid-feedback d-block">
                      {errors.end_date}
                    </div>
                  )}
                </Form.Group>
              </Col>

              {/* Current Working */}
              <Col xs={12}>
                <div className="bg-white border rounded-3 p-3">
                  <Form.Check
                    type="checkbox"
                    name="is_current"
                    label="Currently Working Here"
                    checked={experienceForm.is_current}
                    onChange={handleChange}
                    className="fw-semibold"
                  />
                </div>
              </Col>

              {/* Description */}
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Description
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={experienceForm.description}
                    onChange={handleChange}
                    placeholder="Describe your responsibilities, achievements and teaching experience..."
                    className="rounded-3"
                  />
                </Form.Group>
              </Col>

            </Row>
          </div>
        </Modal.Body>

        <Modal.Footer className="border-0 px-4 pb-4">
          <Button
            variant="light"
            className="px-4 rounded-3"
            onClick={() => setShow(false)}
          >
            Cancel
          </Button>

          <Button
            variant="primary"
            className="px-4 rounded-3 fw-semibold"
            onClick={handleAddExperience}
          >
            {editIndex !== null
              ? "Update Experience"
              : "Save Experience"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TeachingExperience;