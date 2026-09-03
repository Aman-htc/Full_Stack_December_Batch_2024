"use client";

import React, { useState } from "react";
import {
    Card,
    Badge,
    Button,
    Dropdown,
    Modal,
    Form,
    Row,
    Col,
} from "react-bootstrap";
import { FiMoreHorizontal, FiCalendar, FiFileText, FiLayers, FiCheckCircle } from "react-icons/fi";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";

import CustomCalendar from "../calendar";
import { teacherCalendar, leaveRequest } from "@/app/data";
import { addTeacherLeave, createAttendance } from "@/services/teacherService";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import AttendanceModal from "../attendance/AttendanceModal";

const LeaveRequest = ({ teacher, leavedata, refreshLeaves }) => {
    const [showModal, setShowModal] = useState(false);
    const [showAttendanceModal, setShowAttendanceModal] = useState(false);
    

    // Form State
    const [formData, setFormData] = useState({
        leaveType: "",
        status: "Pending",
        startDate: null,
        endDate: null,
        leaveReason: "",
    });

    // Input Change Handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

  

    // Date Change Handler
    const handleDateChange = (fieldName, date) => {
        setFormData((prev) => ({
            ...prev,
            [fieldName]: date && date.length > 0 ? date : null,
        }));
    };

    // Modal Close and Reset Handler
    const handleCloseModal = () => {
        setShowModal(false);
        setFormData({
            leaveType: "",
            status: "Pending",
            startDate: null,
            endDate: null,
            leaveReason: "",
        });
    };

    // Form Submit Handler
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                teacher_id: Number(teacher?.TeacherID || teacher?.data?.TeacherID),
                leave_type: formData.leaveType,
                status: formData.status,
                start_date: formData.startDate?.[0]
                    ?.toISOString()
                    .split("T")[0],
                end_date: formData.endDate?.[0]
                    ?.toISOString()
                    .split("T")[0],
                leave_reason: formData.leaveReason,
            };

           

            const response = await addTeacherLeave(payload);

            refreshLeaves()



            toast.success("Leave Request Added Successfully");

            handleCloseModal();



        } catch (error) {
            console.error(
                "Error Adding Leave:",
                error?.response?.data || error
            );

            toast.error(
                error?.response?.data?.message ||
                "Failed to Add Leave Request"
            );
        }
    };

    return (
        <div className="mt-4">
            <AttendanceModal
                show={showAttendanceModal}
                onHide={() => setShowAttendanceModal(false)}
                entity={teacher}
                entityIdKey="TeacherID"
                ownerType="Teacher"
                addAttendance={createAttendance}
            />

            {/* CARD */}
            <Card className="border-0 shadow-sm rounded-4 p-3 bg-light">
                <Card.Body className="p-0">
                    {/* CALENDAR */}
                    <CustomCalendar
                        calendarData={teacherCalendar}
                        defaultMonth={2}
                        defaultYear={2035}
                        defaultSelectedDate={2}
                        teacher={teacher}
                    />

                    <Button
                        className="btn-sm"
                        onClick={() =>
                            setShowAttendanceModal(true)
                        }
                    >
                        Add Attendance
                    </Button>

                    {/* HEADER */}
                    <div className="mt-4">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h6 className="mb-0 text-danger-subtle h6-alt" >Leave Request</h6>

                            <Dropdown align="end" className="action-dropdown">

                                <Dropdown.Toggle
                                    variant="light"
                                    bsPrefix="p-0"
                                    className="action-toggle shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                                    id="dropdown-icon"
                                >
                                    <FiMoreHorizontal className="text-muted" size={18} />
                                </Dropdown.Toggle>

                                <Dropdown.Menu
                                    className="shadow border-0 rounded-3 py-1 action-menu"
                                >
                                    <Dropdown.Item
                                        onClick={() => setShowModal(true)}
                                        className="small px-3 py-2"
                                    >
                                        Add Leave Request
                                    </Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </div>

                        <Card className="border-0 p-3 rounded-4 bg-dark-light">
                            {leavedata?.map((item) => (
                                <div key={item.LeaveID} className="mb-3">
                                    <Badge
                                        className="mb-2 bg-secondary text-dark px-3 py-2 border-0 text-danger-subtle"
                                    >
                                        {item.LeaveType}
                                    </Badge>

                                    <p className="mb-3 text-danger-subtle body-xs-med">
                                        {item.LeaveReason}
                                    </p>

                                    <div className="d-flex gap-2">
                                        <Button
                                            variant="white"
                                            className="w-100 shadow-sm btn-sm border-0 rounded-3 py-2 bg-light"
                                        >
                                            {item.
                                                Status}
                                        </Button>

                                        <Button
                                            variant="link"
                                            className="w-100 text-dark text-decoration-none btn-sm"
                                        >
                                            Decline
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </Card>
                    </div>

                </Card.Body>
            </Card>



            {/* MODAL WITH PREMIUM UI */}
            <Modal
                show={showModal}
                onHide={handleCloseModal}
                centered
                size="lg"
                contentClassName="border-0 shadow-lg rounded-4 overflow-hidden"
            >
                <Modal.Header closeButton className="bg-light border-bottom px-4 py-3">
                    <Modal.Title className="fs-5 fw-bold text-dark d-flex align-items-center gap-2">
                        <FiFileText className="text-primary" /> Create Leave Request
                    </Modal.Title>
                </Modal.Header>

                {/* FORM */}
                <Form onSubmit={handleSubmit}>
                    <Modal.Body className="p-4 bg-white">
                        <Row className="g-4">
                            {/* LEAVE TYPE */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium text-dark mb-2 d-flex align-items-center gap-2">
                                        <FiLayers className="text-muted" size={16} /> Leave Type
                                    </Form.Label>
                                    <Form.Select
                                        name="leaveType"
                                        value={formData.leaveType}
                                        onChange={handleChange}
                                        className="py-2.5 px-3 border-secondary-subtle rounded-3 shadow-sm bg-light-subtle"
                                        style={{ transition: "all 0.2s" }}
                                        required
                                    >
                                        <option value="">Select Type</option>
                                        <option value="Sick Leave">Sick Leave</option>
                                        <option value="Casual Leave">Casual Leave</option>
                                        <option value="Emergency Leave">Emergency Leave</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            {/* STATUS */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium text-dark mb-2 d-flex align-items-center gap-2">
                                        <FiCheckCircle className="text-muted" size={16} /> Status
                                    </Form.Label>
                                    <Form.Select
                                        name="status"
                                        value={formData.status}
                                        onChange={handleChange}
                                        className="py-2.5 px-3 border-secondary-subtle rounded-3 shadow-sm bg-light-subtle"
                                        required
                                    >
                                        <option value="Pending">Pending</option>
                                        <option value="Approved">Approved</option>
                                        <option value="Rejected">Rejected</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            {/* START DATE */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium text-dark mb-2 d-flex align-items-center gap-2">
                                        <FiCalendar className="text-muted" size={16} /> Start Date
                                    </Form.Label>
                                    <div className="position-relative">
                                        <Flatpickr
                                            value={formData.startDate || ""}
                                            onChange={(date) => handleDateChange("startDate", date)}
                                            className="form-control py-2.5 px-3 border-secondary-subtle rounded-3 shadow-sm bg-light-subtle"
                                            placeholder="Select Start Date"
                                            options={{ required: true ,
                                                disableMobile:true
                                            }}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>

                            {/* END DATE */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-medium text-dark mb-2 d-flex align-items-center gap-2">
                                        <FiCalendar className="text-muted" size={16} /> End Date
                                    </Form.Label>
                                    <div className="position-relative">
                                        <Flatpickr
                                            value={formData.endDate || ""}
                                            onChange={(date) => handleDateChange("endDate", date)}
                                            className="form-control py-2.5 px-3 border-secondary-subtle rounded-3 shadow-sm bg-light-subtle"
                                            placeholder="Select End Date"
                                            options={{
                                                minDate: formData.startDate || undefined,
                                                required: true,
                                                disableMobile:true
                                            }}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>

                            {/* REASON */}
                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label className="fw-medium text-dark mb-2 d-flex align-items-center gap-2">
                                        <FiFileText className="text-muted" size={16} /> Reason for Leave
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={4}
                                        name="leaveReason"
                                        value={formData.leaveReason}
                                        onChange={handleChange}
                                        className="py-2.5 px-3 border-secondary-subtle rounded-3 shadow-sm bg-light-subtle"
                                        placeholder="Describe your reason here..."
                                        style={{ resize: "none" }}
                                        minLength={5}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Modal.Body>

                    {/* FOOTER */}
                    <Modal.Footer className="bg-light border-top px-4 py-3 d-flex justify-content-end gap-2">
                        <Button
                            variant="outline-secondary"
                            onClick={handleCloseModal}
                            className="px-4 py-2 fw-medium rounded-3 btn-sm text-dark"
                        >
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            variant="primary"
                            className="px-4 py-2 fw-medium shadow rounded-3 btn-sm"
                        >
                            Submit Request
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>


            {/* Attendance modal */}
            {/* <Modal
                show={showAttendanceModal}
                onHide={() =>
                    setShowAttendanceModal(false)
                }
                centered
                size="lg"
                contentClassName="border-0 shadow-lg p-3 rounded-4 overflow-hidden"
            >
                <Modal.Header
                    closeButton
                    className="bg-light border-bottom"
                >
                    <Modal.Title className="fw-bold">
                        Add Attendance
                    </Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleAttendanceSubmit}>
                    <Modal.Body className="p-4">
                        <Row className="g-4">

                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Attendance Date
                                    </Form.Label>

                                    <Flatpickr
                                        value={attendanceData?.attendanceDate ?? ""}
                                        onChange={(date) => {
                                            setAttendanceData((prev) => ({
                                                ...prev,
                                                attendanceDate: date?.[0] || null,
                                            }));

                                            setErrors((prev) => ({
                                                ...prev,
                                                attendanceDate: "",
                                            }));
                                        }}
                                        className="form-control"
                                        options={{
                                            dateFormat: "Y-m-d",
                                            maxDate: "today",
                                        }}
                                    />

                                    {errors.attendanceDate && (
                                        <div className="text-danger mt-1 small">
                                            {errors.attendanceDate}
                                        </div>
                                    )}
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Status
                                    </Form.Label>

                                   
                                    <Form.Select
                                        name="status"
                                        value={attendanceData.status}
                                        onChange={(e) => {
                                            handleAttendanceChange(e);

                                            setErrors((prev) => ({
                                                ...prev,
                                                status: "",
                                            }));
                                        }}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="Present">Present</option>
                                        <option value="Absent">Absent</option>
                                        <option value="Late">Late</option>
                                        <option value="Half Day">Half Day</option>
                                    </Form.Select>

                                    {errors.status && (
                                        <div className="text-danger mt-1 small">
                                            {errors.status}
                                        </div>
                                    )}
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>
                                        Remarks
                                    </Form.Label>

                                    <Form.Control
                                        as="textarea"
                                        name="remarks"
                                        value={attendanceData?.remarks || ""}
                                        onChange={handleAttendanceChange}
                                    />
                                </Form.Group>
                            </Col>

                        </Row>
                    </Modal.Body>

                    <Modal.Footer className="bg-light">
                        <Button
                            variant="outline-secondary"
                            onClick={() =>
                                setShowAttendanceModal(false)
                            }
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            variant="primary"
                        >
                            Save Attendance
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal> */}
        </div >
    );
};

export default LeaveRequest;

