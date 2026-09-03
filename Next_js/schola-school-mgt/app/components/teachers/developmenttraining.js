



"use client";

import React, { useState } from "react";
import { Card, Table, Badge, Button, Modal, Form, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { developmentTraining as initialData } from "@/app/data";
import DropdownBtn from "../dropdown";
import { BiExpandVertical } from "react-icons/bi";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { addTraining, deleteTraining, updateTraining } from "@/services/teacherService";
import { toast } from "react-toastify";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { handleDelete } from "../Deletehandle";


const DevelopmentTrainingTable = ({ periodType, setPeriodType, teacher, trainings = [], refreshTrainings }) => {
    
    
    const [sortOrder, setSortOrder] = useState("asc");
    const [showModal, setShowModal] = useState(false);


    const [editData, setEditData] = useState(null)

    const [errors, setErrors] = useState({
        event: "",
        category: "",
        date: "",
        lastPlatform: "",
        status: "",
    });


    const validateForm = () => {
        const newErrors = {};

        if (!formData.event.trim()) {
            newErrors.event = "Event name is required";
        }

        if (!formData.category) {
            newErrors.category = "Category is required";
        }

        if (!formData.date) {
            newErrors.date = "Training date is required";
        }

        if (!formData.lastPlatform.trim()) {
            newErrors.lastPlatform =
                "Platform / Location is required";
        }

        if (!formData.status) {
            newErrors.status = "Status is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // Form State (Controlled State)
    const [formData, setFormData] = useState({
        event: "",
        category: "",
        date: "",
        lastPlatform: "",
        status: "Upcoming",
    });


    // ---------------- SORT ----------------
    const sortedData = [...trainings].sort((a, b) => {
        const dateA = new Date(a.TrainingDate);
        const dateB = new Date(b.TrainingDate);
        return sortOrder === "asc"
            ? dateA - dateB
            : dateB - dateA;
    });
    console.log('sortedDataapi', sortedData)

    // ---------------- FORM CHANGE ----------------
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

    // Modal Close and Reset Handler
    const handleCloseModal = () => {
        setShowModal(false);

        setEditData(null);

        setFormData({
            event: "",
            category: "",
            date: "",
            lastPlatform: "",
            status: "Upcoming",
        });

        setErrors({
            event: "",
            category: "",
            date: "",
            lastPlatform: "",
            status: "",
        });
    };

    const handleEdit = (item) => {

        setEditData(item);

        setFormData({
            event: item.EventName,
            category: item.Category,
            date: item.TrainingDate
            ,
            lastPlatform: item.PlatformLocation
            ,
            status: item.Status,
        });

        setShowModal(true);
    };

    // ---------------- SAVE & CLOSE ----------------
    const handleSave = async (e) => {

        e.preventDefault();

        if (!validateForm()) {
            toast.error("Please fix validation errors");
            return;
        }

        try {
            const payload = {
                teacher_id: Number(teacher?.TeacherID || teacher?.data?.TeacherID),
                event_name: formData.event,
                category: formData.category,
                training_date: formData.date,
                platform_location: formData.lastPlatform,
                status: formData.status,
            };
            

            if (editData) {
                await updateTraining(
                    editData.TrainingID,
                    payload
                );

                refreshTrainings()

               

                toast.success("Updated successfully");
            } else {
                await addTraining(payload);
                refreshTrainings()

                toast.success("Added successfully");
            }


            handleCloseModal()
            setShowModal(false);
        } catch (error) {
            console.log(error);


            toast.error("Something went wrong");
        }
    };








    return (
        <div className="mt-5">

            {/* ---------------- ADD BUTTON ---------------- */}


            <Card className="shadow-sm h-100 bg-light border-0 rounded-4 p-2">
                <Card.Body>

                    {/* Header Section */}
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h4 className="h6-alt text-danger-subtle">
                            Development & Training
                        </h4>


                       
                        <DropdownBtn

                            text1={periodType}
                            value={periodType}
                            setValue={setPeriodType}
                            options1={[
                                { label: "This Semester", value: "this_semester" },
                                { label: "Last Semester", value: "last_semester" },
                                { label: "All ", value: "all" },

                            ]}
                        />



                        <Button
                            variant="primary"
                            onClick={() => {
                                setEditData(null);

                                setFormData({
                                    event: "",
                                    category: "",
                                    date: "",
                                    lastPlatform: "",
                                    status: "Upcoming",
                                });

                                setErrors({});

                                setShowModal(true);
                            }}
                        >
                            +
                        </Button>


                    </div>


                    <Table responsive hover className="table-borderless align-middle bg-transparent">

                        <thead>
                            <tr className="border-bottom bg-white ">

                                <th className="bg-transparent border-0 px-3 rounded-start-4 text-dark cap-md-med">

                                    <div
                                        className="d-flex align-items-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                        }
                                    >
                                        Event
                                        <BiExpandVertical className="ms-1 text-muted" />
                                    </div>

                                </th>

                                <th className="bg-transparent border-0 text-dark cap-md-med">

                                    <div
                                        className="d-flex align-items-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                        }
                                    >
                                        Date
                                        <BiExpandVertical className="ms-1 text-muted" />
                                    </div>

                                </th>

                                <th className="bg-transparent border-0 text-dark cap-md-med">

                                    <div
                                        className="d-flex align-items-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                        }
                                    >
                                        Loc/Platform
                                        <BiExpandVertical className="ms-1 text-muted" />
                                    </div>

                                </th>

                                <th className="bg-transparent border-0 text-center text-dark cap-md-med">

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                        }
                                    >
                                        Status
                                        <BiExpandVertical className="ms-1 text-muted" />
                                    </div>

                                </th>
                                <th className="bg-transparent border-0 text-center text-dark rounded-end-4 cap-md-med">

                                    <div
                                        className="d-flex align-items-center justify-content-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() =>
                                            setSortOrder(sortOrder === "asc" ? "desc" : "asc")
                                        }
                                    >
                                        Action
                                        <BiExpandVertical className="ms-1 text-muted" />
                                    </div>

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.length > 0 ? (
                                sortedData.map((item) => (
                                    <tr
                                        key={item.TrainingID}
                                        className="border-bottom border-light-subtle"
                                    >
                                        <td className="py-3 bg-transparent border-0 px-3">
                                            <div className="cap-lg-med text-dark mb-0">
                                                {item.EventName}
                                            </div>

                                            <div className="cap-lg-med text-danger">
                                                {item.Category}
                                            </div>
                                        </td>

                                        <td className="bg-transparent border-0 cap-lg-med text-warning">
                                            {item.TrainingDate}
                                        </td>

                                        <td className="bg-transparent border-0 text-dark cap-lg-med">
                                            {item.PlatformLocation}
                                        </td>

                                        <td className="bg-transparent border-0 text-center">
                                            <Badge
                                                pill
                                                className={`px-3 py-2 cap-lg-med ${item.Status === "Upcoming"
                                                    ? "text-warning bg-secondary"
                                                    : "text-warning bg-primary"
                                                    }`}
                                            >
                                                {item.Status}
                                            </Badge>
                                        </td>

                                        <td className=" bg-transparent border-0 text-center">
                                            <Button
                                                size="sm"
                                                variant=""
                                                className="p-0 me-2"
                                                onClick={() => handleEdit(item)}
                                            >
                                                <FiEdit2 size="8px" />
                                            </Button>


                                            <Button
                                                size="sm"
                                                variant=""
                                                className="p-0 "
                                                onClick={() =>
                                                    handleDelete({
                                                        id: item.TrainingID,
                                                        deleteApi: deleteTraining,

                                                        title: 'Training details  will be deleted permanently!',
                                                        successMessage: "Training has been deleted successfully",
                                                        onSuccess: refreshTrainings

                                                    })
                                                }



                                            >
                                                <FiTrash2 />
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="text-center py-4 text-muted">
                                        No Development Training Details Available
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </Table>

                </Card.Body>
            </Card>

            {/* ---------------- MODAL ---------------- */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                centered
                backdrop="static"
                size="lg"
            >
                <Modal.Body className="p-0 rounded-4 overflow-hidden bg-white">

                    {/* HEADER */}
                    <div className="bg-primary text-dark p-4">

                        <div className="d-flex justify-content-between align-items-start">
                            <div>
                                <h4 className="fw-bold mb-1">
                                    Add Training
                                </h4>

                                <p className="mb-0 small text-dark">
                                    Create a new development & training record
                                </p>
                            </div>

                            <Button
                                variant="light"
                                size="sm"
                                className="rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "32px", height: "32px" }}
                                onClick={() => setShowModal(false)}
                            >
                                ✕
                            </Button>
                        </div>

                    </div>

                    {/* FORM */}
                    <Form onSubmit={handleSave}>

                        <div className="p-4">

                            <Row className="g-3">

                                {/* EVENT */}
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold text-dark">
                                            Event Name
                                        </Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="event"
                                            value={formData.event || ""}
                                            onChange={handleChange}
                                            placeholder="Enter event name"
                                            className={`rounded-3 py-2 shadow-sm border-0 bg-light ${errors.event ? "is-invalid" : ""
                                                }`}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.event}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                {/* CATEGORY */}
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold text-dark">
                                            Category
                                        </Form.Label>

                                        <Form.Select
                                            name="category"
                                            value={formData.category || ""}
                                            onChange={handleChange}
                                            className={`rounded-3 py-2 shadow-sm border-0 bg-light ${errors.category ? "is-invalid" : ""
                                                }`}
                                        >
                                            <option value="">Select category</option>
                                            <option value="Workshop">Workshop</option>
                                            <option value="Seminar">Seminar</option>
                                            <option value="Training">Training</option>
                                            <option value="Conference">Conference</option>
                                        </Form.Select>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.category}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                {/* DATE */}
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold text-dark">
                                            Training Date
                                        </Form.Label>

                                        {/* <Flatpickr
                                            value={formData.date}
                                            onChange={(date) => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    date: date[0]
                                                        ? date[0].toISOString().split("T")[0]
                                                        : "",
                                                }));

                                                setErrors((prev) => ({
                                                    ...prev,
                                                    date: "",
                                                }));
                                            }}
                                            options={{
                                                dateFormat: "Y-m-d",
                                                disableMobile: true
                                            }}
                                            className={`form-control rounded-3 py-2 shadow-sm border-0 bg-light ${errors.date ? "is-invalid" : ""
                                                }`}
                                        /> */}
                                        <Flatpickr
                                            value={formData.date}
                                            onChange={(selectedDates, dateStr) => {
                                                setFormData((prev) => ({
                                                    ...prev,
                                                    date: dateStr,
                                                }));

                                                setErrors((prev) => ({
                                                    ...prev,
                                                    date: "",
                                                }));
                                            }}
                                            options={{
                                                dateFormat: "Y-m-d",
                                                disableMobile: true,
                                            }}
                                            className={`form-control rounded-3 py-2 shadow-sm border-0 bg-light ${errors.date ? "is-invalid" : ""
                                                }`}
                                        />

                                        {errors.date && (
                                            <div className="invalid-feedback d-block">
                                                {errors.date}
                                            </div>
                                        )}                                    </Form.Group>
                                </Col>

                                {/* PLATFORM */}
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold text-dark">
                                            Platform / Location
                                        </Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="lastPlatform"
                                            value={formData.lastPlatform || ""}
                                            onChange={handleChange}
                                            placeholder="Zoom / School / Offline"
                                            className={`rounded-3 py-2 shadow-sm border-0 bg-light ${errors.lastPlatform ? "is-invalid" : ""
                                                }`}
                                        />

                                        <Form.Control.Feedback type="invalid">
                                            {errors.lastPlatform}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>

                                {/* STATUS */}
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold text-dark">
                                            Status
                                        </Form.Label>

                                        <div className="d-flex gap-3 mt-2">

                                            <Form.Check
                                                type="radio"
                                                label="Upcoming"
                                                name="status"
                                                value="Upcoming"
                                                checked={formData.status === "Upcoming"}
                                                onChange={handleChange}
                                            />


                                            <Form.Check
                                                type="radio"
                                                label="Completed"
                                                name="status"
                                                value="Completed"
                                                checked={formData.status === "Completed"}
                                                onChange={handleChange}
                                            />


                                        </div>
                                    </Form.Group>
                                </Col>

                            </Row>

                        </div>

                        {/* FOOTER */}
                        <div className="border-top bg-light px-4 py-3 d-flex justify-content-end gap-2">

                            <Button
                                variant="outline-secondary"
                                className="rounded-3 px-4 text-dark"
                                onClick={() => setShowModal(false)}
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                variant="primary"
                                className="rounded-3 px-4 shadow-sm"
                            >
                                Save Training
                            </Button>

                        </div>

                    </Form>

                </Modal.Body>
            </Modal>

        </div>
    );
};

export default DevelopmentTrainingTable;


