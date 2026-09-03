"use client";

import React, { useRef, useState } from "react";
import {
  Card,
  Row,
  Col,
  Modal,
  Button,
  Form,
  Dropdown,
} from "react-bootstrap";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { FiDownload, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";


import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { handleDelete } from "../Deletehandle";


const Documents = ({
  entity,
  entityIdKey,
  documents = [],
  refreshDocuments,
  addDocument,
  ownerType,
  deleteDocument,
  title = "Documents & Compliance",
}) => {



  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef(null);


  const [errors, setErrors] = useState({
    document_type: "",
    document_title: "",
    file: "",
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.document_type) {
      newErrors.document_type = "Document type is required";
    }

    if (!formData.document_title.trim()) {
      newErrors.document_title = "Document title is required";
    }

    if (!formData.file) {
      newErrors.file = "Please select a file";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const [formData, setFormData] = useState({
    document_type: "AcademicCertificate",
    document_title: "",
    file: null,
  });


  const uploadDocument = async (file) => {
    const cloudinaryFormData = new FormData();

    cloudinaryFormData.append("file", file);
    cloudinaryFormData.append(
      "upload_preset",
      "profile_images"
    );

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dyqtrk0rd/auto/upload",
      {
        method: "POST",
        body: cloudinaryFormData,
      }
    );

    const data = await response.json();

    if (!data.secure_url) {
      throw new Error("Document upload failed");
    }

    return data.secure_url;
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


  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) return;

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowedTypes.includes(selectedFile.type)) {
      toast.error(
        "Only PDF, JPG, PNG, DOC and DOCX files are allowed"
      );
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      toast.error("File size must be less than 5 MB");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      file: selectedFile,
    }));

    setErrors((prev) => ({
      ...prev,
      file: "",
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const entityId =
        entity?.[entityIdKey] ||
        entity?.data?.[entityIdKey];

      if (!entityId) {
        throw new Error("ID not found");
      }

      const documentUrl = await uploadDocument(
        formData.file
      );

      const payload = {
        owner_type: ownerType,
        owner_id: entityId,
        document_type: formData.document_type,
        document_title: formData.document_title,
        document_url: documentUrl,
        is_verified: true,
      };

      await addDocument(payload);

      await refreshDocuments();

      setFormData({
        document_type: "AcademicCertificate",
        document_title: "",
        file: null,
      });

      setErrors({
        document_type: "",
        document_title: "",
        file: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }

      setShowModal(false);

      toast.success(
        "Document uploaded successfully"
      );
    } catch (error) {
      toast.error(
        error.response?.data?.detail ||
        "Failed to upload document"
      );
    } finally {
      setLoading(false);
    }
  };






  const handleDownload = (url) => {
    const downloadUrl = url.replace(
      "/upload/",
      "/upload/fl_attachment/"
    );

    window.open(downloadUrl, "_blank");
  };









  return (
    <>
      <Card className="border-0 bg-light shadow-sm p-3 rounded-4 h-100">
        <Card.Body>
          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h6 className="h6-alt text-danger-subtle mb-0">
              {title}
            </h6>

            <Dropdown align="end">
              <Dropdown.Toggle
                variant="light"
                bsPrefix="p-0"
                className="rounded-circle d-flex align-items-center justify-content-center"
              >
                <FiMoreHorizontal
                  size={18}
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() =>
                    setShowModal(true)
                  }
                >
                  Add New Document
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          {/* Document List */}
          <div className="d-flex flex-column gap-3">
            {documents?.data?.length > 0 ? (
              documents?.data?.map((doc) => (


                <Row
                  key={doc.DocumentID}
                  className="align-items-center gx-2"
                >
                  <Col xs="auto">
                    <div
                      className="text-dark bg-secondary rounded-3 d-flex justify-content-center align-items-center"
                      style={{
                        width: 32,
                        height: 32,
                      }}
                    >
                      <BsFileEarmarkPdf size={16} />
                    </div>
                  </Col>

                  <Col>
                    <div className="body-xs-med">
                      {doc.DocumentType

                      }
                    </div>
                  </Col>

                  <Col xs="auto ">

                    <Button
                      size="sm"
                      variant=""

                      onClick={() => handleDownload(doc.DocumentUrl)}
                    >
                      <FiDownload size={'15px'} />
                    </Button>
                  </Col>

                  <Col xs="auto">
                    <Button
                      size="sm"
                      variant=""
                      onClick={() =>
                        handleDelete({
                          id: doc.DocumentID,
                          deleteApi: deleteDocument,
                          title: 'This document will be permanently removed',
                          successMessage: "Document deleted successfully.",
                          onSuccess: refreshDocuments,

                        })
                      }
                    >
                      <FiTrash2 />
                    </Button>
                  </Col>
                </Row>
              ))
            ) : (
              <div className="text-center text-muted py-3">
                No document details available
              </div>
            )}
          </div>
        </Card.Body>
      </Card>

      {/* Add Document Modal */}
      <Modal
        show={showModal}
        onHide={() =>
          setShowModal(false)
        }
        centered
        size="md"
        contentClassName="border-0 rounded-4 shadow-lg"
      >
        <Modal.Header
          closeButton
          className="border-0 p-4"
        >
          <Modal.Title>
            Add New Document
          </Modal.Title>
        </Modal.Header>

        <Form
          onSubmit={handleSubmit}
        >
          <Modal.Body className="p-4">
            <Form.Group className="mb-3">
              <Form.Label>
                Document Type
              </Form.Label>

              <Form.Select
                name="document_type"
                value={formData.document_type}
                onChange={handleChange}
                isInvalid={!!errors.document_type}
              >
                <option value="AcademicCertificate">
                  Academic Certificate
                </option>

                <option value="ExperienceLetter">
                  Experience Letter
                </option>

                <option value="IdentityProof">
                  Identity Proof
                </option>

                <option value="AddressProof">
                  Address Proof
                </option>

                <option value="Resume">
                  Resume
                </option>

                <option value="Other">
                  Other
                </option>
              </Form.Select>

              <Form.Control.Feedback type="invalid">
                {errors.document_type}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                Document Title
              </Form.Label>

              <Form.Control
                type="text"
                name="document_title"
                value={formData.document_title || ""}
                onChange={handleChange}
                placeholder="Enter document title"
                isInvalid={!!errors.document_title}
              />

              <Form.Control.Feedback type="invalid">
                {errors.document_title}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Upload File
              </Form.Label>

              <div
                className="border border-2 border-dashed rounded-4 p-4 text-center bg-light"
                style={{
                  cursor: "pointer",
                }}
                onClick={() =>
                  fileInputRef.current?.click()
                }
              >
                <div className="mb-2">

                </div>

                <div className="fw-semibold">
                  Click to upload
                </div>

                <small className="text-muted">
                  PDF, JPG, PNG,
                  DOC, DOCX
                </small>

                {formData.file && (
                  <div className="mt-2 text-success">
                    ✔{" "}
                    {
                      formData.file
                        .name
                    }
                  </div>
                )}
              </div>

              <Form.Control
                ref={fileInputRef}
                type="file"
                hidden
                accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                onChange={
                  handleFileChange
                }
              />
              {errors.file && (
                <div className="text-danger small mt-2">
                  {errors.file}
                </div>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer className="border-0 ">
            <Button
              variant="light"
              onClick={() =>
                setShowModal(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Uploading..."
                : "Add Document"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>


    </>
  );
};

export default Documents;