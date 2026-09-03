
"use client";

import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Row, Col, Spinner, Card } from "react-bootstrap";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { toast } from "react-toastify";
import { uploadToCloudinary } from "../Cloudinary";

const initialState = {
  title: "",
  message: "",
  category: "",
  post_date: "",
  exp_date: "",
  audience: "All",
  created_by: "",
  status: "Active",
  attachment_url: "",
  image_url: "",
  attachment_name: "",
  attachment_type: "",
};

const NoticeModal = ({ show, onHide, editData, onSubmit }) => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // =========================
  // LOAD DATA
  // =========================
  useEffect(() => {
    if (editData) {
      setFormData({
        ...initialState,
        ...editData,
        post_date: editData.post_date || "",
        exp_date: editData.exp_date || "",
      });
    } else {
      setFormData(initialState);
    }
    setErrors({});
  }, [editData, show]);

  // =========================
  // INPUT
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setErrors((p) => ({ ...p, [name]: "" }));
  };

  // =========================
  // FILE HANDLER
  // =========================
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((p) => ({
      ...p,
      attachment_url: file,
      attachment_name: file.name,
      attachment_type: file.type,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setFormData((p) => ({
      ...p,
      image_url: file,
    }));
  };

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    let err = {};

    if (!formData.title) err.title = "Title required";
    if (!formData.message) err.message = "Message required";
    if (!formData.category) err.category = "Category required";
    if (!formData.created_by) err.created_by = "Creator required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = async () => {
    if (!validate()) return;

    try {
      setLoading(true);

      let attachmentUrl = "";
      let imageUrl = "";

      // upload attachment
      if (formData.attachment_url instanceof File) {
        attachmentUrl = await uploadToCloudinary(formData.attachment_url);
      }

      // upload image
      if (formData.image_url instanceof File) {
        imageUrl = await uploadToCloudinary(formData.image_url);
      }

      const payload = new FormData();

      payload.append("title", formData.title);
      payload.append("message", formData.message);
      payload.append("category", formData.category);

      payload.append("post_date", formData.post_date || "");
      payload.append("exp_date", formData.exp_date || "");

      payload.append("audience", formData.audience);
      payload.append("created_by", formData.created_by);
      payload.append("status", formData.status);

      
      payload.append("attachment_url", attachmentUrl || formData.attachment_url || "");
      payload.append("image_url", imageUrl || formData.image_url || "");

      
      payload.append("attachment_name", formData.attachment_name || "");
      payload.append("attachment_type", formData.attachment_type || "");

      await onSubmit(payload, editData?.notice_id);

      toast.success(editData ? "Notice Updated" : "Notice Created");
      onHide();
    } catch (err) {
      console.log(err);
      toast.error(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <Modal show={show} onHide={onHide} size="lg" centered backdrop="static">
      <Modal.Header closeButton className="bg-primary text-dark p-3">
        <Modal.Title>
          {editData ? "Update Notice" : "Create Notice"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="p-3">
        <Card className="p-3 border-0 shadow-sm">
          <Row className="g-3">

            {/* TITLE */}
            <Col md={6}>
              <Form.Label>Title *</Form.Label>
              <Form.Control
                name="title"
                value={formData.title}
                onChange={handleChange}
                isInvalid={!!errors.title}
              />
            </Col>

            {/* CATEGORY */}
            <Col md={6}>
              <Form.Label>Category *</Form.Label>
              <Form.Control
                name="category"
                value={formData.category}
                onChange={handleChange}
                isInvalid={!!errors.category}
              />
            </Col>

            {/* MESSAGE */}
            <Col md={12}>
              <Form.Label>Message *</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
            </Col>

            {/* POST DATE */}
            <Col md={6}>
              <Form.Label>Post Date</Form.Label>
              <Flatpickr
                className="form-control"
                value={formData.post_date}
                options={{ dateFormat: "Y-m-d" ,
                  disableMobile:true

                }}
                onChange={(date) =>
                  setFormData((p) => ({
                    ...p,
                    post_date: date[0].toISOString().split("T")[0],
                  }))
                }
              />
            </Col>

            {/* EXP DATE */}
            <Col md={6}>
              <Form.Label>Expiry Date</Form.Label>
              <Flatpickr
                className="form-control"
                value={formData.exp_date}
                options={{ dateFormat: "Y-m-d",
                  disableMobile:true

                 }
              }
                onChange={(date) =>
                  setFormData((p) => ({
                    ...p,
                    exp_date: date[0].toISOString().split("T")[0],
                  }))
                }
              />
            </Col>

            {/* CREATED BY */}
            <Col md={6}>
              <Form.Label>Created By *</Form.Label>
              <Form.Control
                name="created_by"
                value={formData.created_by}
                onChange={handleChange}
                isInvalid={!!errors.created_by}
              />
            </Col>

            <Col md={6}>
              <Form.Label>Audience</Form.Label>
              <Form.Select
                name="audience"
                value={formData.audience}
                onChange={handleChange}
              >
                <option value="All">All</option>
                <option value="Students">Students</option>
                <option value="Teachers">Teachers</option>
                <option value="Staff">Staff</option>
              </Form.Select>
            </Col>

            <Col md={6}>
              <Form.Label>Status</Form.Label>
              <Form.Select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Draft">Draft</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Expired">Expired</option>
              </Form.Select>
            </Col>

            {/* ATTACHMENT */}
            <Col md={6}>
              <Form.Label>Attachment</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />

             
              {formData.attachment_name && (
                <div className="mt-1 text-muted small">
                  📎 {formData.attachment_name} ({formData.attachment_type})
                </div>
              )}
            </Col>

            {/* IMAGE */}
            <Col md={12}>
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
            </Col>
            {/* AUDIENCE */}
            
          </Row>
        </Card>
      </Modal.Body>

      <Modal.Footer className="p-2">
        <Button variant="secondary" onClick={onHide} disabled={loading}>
          Cancel
        </Button>

        <Button variant="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? (
            <>
              <Spinner size="sm" className="me-2" />
              Saving...
            </>
          ) : editData ? (
            "Update Notice"
          ) : (
            "Create Notice"
          )}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NoticeModal;