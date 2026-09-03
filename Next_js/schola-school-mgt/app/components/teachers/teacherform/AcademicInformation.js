// import React from "react";
// import { Form, Row, Col } from "react-bootstrap";
// import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/flatpickr.css";

// const TeacherAcademicInformation = ({ formik }) => {

//     const errorClass = (fieldName) =>
//         formik.errors[fieldName] &&
//             formik.touched[fieldName]
//             ? "border-success-light"
//             : "";

//     return (

//         <div className="bg-light rounded-4 p-3 shadow-sm mb-5">

//             {/* Heading */}
//             <h5 className="h6-alt text-dark mb-4">
//                 Academic Information
//             </h5>

//             <Row className="g-3">

//                 {/* Specialization */}
//                 <Col md={6}>

//                     <Form.Group>

//                         <Form.Label className="cap-md-med mb-2">
//                             Specialization
//                         </Form.Label>

//                         <Form.Control
//                             type="text"

//                             {...formik.getFieldProps("specialization")}
//                             isInvalid={
//                                 !!formik.errors.specialization &&
//                                 formik.touched.specialization
//                             }
//                             className={`rounded-3 bg-light py-3 border ${errorClass(
//                                 "specialization"
//                             )}`}
//                         />

//                         <Form.Control.Feedback
//                             type="invalid"
//                             className="text-success-light custom-feedback"
//                         >
//                             {formik.errors.specialization}
//                         </Form.Control.Feedback>

//                     </Form.Group>

//                 </Col>

//                 {/* University */}
//                 <Col md={6}>

//                     <Form.Group>

//                         <Form.Label className="cap-lg-med text-dark mb-2">
//                             University / Institute
//                         </Form.Label>

//                         <Form.Control
//                             type="text"

//                             {...formik.getFieldProps("university")}
//                             isInvalid={
//                                 !!formik.errors.university &&
//                                 formik.touched.university
//                             }
//                             className={`rounded-3 bg-light py-3 border ${errorClass(
//                                 "university"
//                             )}`}
//                         />

//                         <Form.Control.Feedback
//                             type="invalid"
//                             className="text-success-light custom-feedback"
//                         >
//                             {formik.errors.university}
//                         </Form.Control.Feedback>

//                     </Form.Group>

//                 </Col>

//                 {/* Passing Year */}
//                 <Col md={12}>

//                     <Form.Group>

//                         <Form.Label className="cap-lg-med text-dark mb-2">
//                             Passing Year
//                         </Form.Label>

//                         <Flatpickr
//                             options={{
//                                 dateFormat: "Y",
//                                 maxDate: "today",

//                             }}
//                             value={formik.values.passingYear || ""}
//                             onChange={(date) => {
//                                 formik.setFieldValue(
//                                     "passingYear",
//                                     date[0] ? date[0].toISOString().split("T")[0] : ""
//                                 );
//                             }}
//                             onClose={() =>
//                                 formik.setFieldTouched(
//                                     "passingYear",
//                                     true
//                                 )
//                             }
//                             className={`form-control bg-light rounded-3 py-3 border  ${errorClass(
//                                 "passingYear"
//                             )}`}


//                             onReady={(selectedDates, dateStr, instance) => {

//                                 /* Main Calendar */
//                                 instance.calendarContainer.classList.add(
//                                     "rounded-4",
//                                     "shadow-lg",
//                                     "border-0",
//                                     "overflow-hidden",
//                                     "bg-success"
//                                 );

//                                 /* Header */
//                                 const header =
//                                     instance.calendarContainer.querySelector(
//                                         ".flatpickr-months"
//                                     );

//                                 header?.classList.add(
//                                     "bg-info",
//                                     "py-2",
//                                     "px-2"
//                                 );

//                                 /* Month + Year text */
//                                 header?.querySelectorAll(
//                                     ".flatpickr-current-month, .cur-year"
//                                 ).forEach((el) => {
//                                     el.classList.add(
//                                         "text-dark",
//                                         "h6-alt"
//                                     );
//                                 });



//                                 // Weekdays
//                                 instance.calendarContainer
//                                     .querySelectorAll(".flatpickr-weekday")
//                                     .forEach((el) => {
//                                         el.classList.add(
//                                             "text-bark",
//                                             "body-lg-med",

//                                         );
//                                     });

//                                 /* Days */
//                                 instance.calendarContainer
//                                     .querySelectorAll(".flatpickr-day")
//                                     .forEach((el) => {
//                                         el.classList.add(
//                                             "rounded-circle"
//                                         );
//                                     });

//                             }}
//                         />
//                         {formik.errors.passingYear &&
//                             formik.touched.passingYear && (
//                                 <div className="text-success-light custom-feedback">
//                                     {formik.errors.passingYear}
//                                 </div>
//                             )}

//                     </Form.Group>

//                 </Col>

//                 {/* Experience */}
//                 <Col md={12}>

//                     <Form.Group>

//                         <Form.Label className="cap-lg-med text-dark mb-2">
//                             Teaching Experience
//                         </Form.Label>

//                         <Form.Control
//                             type="text"

//                             {...formik.getFieldProps("experience")}
//                             isInvalid={
//                                 !!formik.errors.experience &&
//                                 formik.touched.experience
//                             }
//                             className={`bg-light rounded-3 py-3 border ${errorClass(
//                                 "experience"
//                             )}`}
//                         />

//                         <Form.Control.Feedback
//                             type="invalid"
//                             className="text-success-light custom-feedback"
//                         >
//                             {formik.errors.experience}
//                         </Form.Control.Feedback>

//                     </Form.Group>

//                 </Col>

//             </Row>

//         </div>
//     );
// };

// export default TeacherAcademicInformation;



"use client";

import { deleteAcademicInformation } from "@/services/teacherService";
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
import Swal from "sweetalert2";



const TeacherAcademicInformation = ({

    educationList,
    setEducationList,
    editData,
}) => {
    const [show, setShow] = useState(false);


    const [educationForm, setEducationForm] = useState({
        qualification: "",
        university_institute: "",
        passing_year: "",
        specialization: "",
        percentage_grade: "",
    });

    const [errors, setErrors] = useState({});

    const [editIndex, setEditIndex] = useState(null);
    const handleEdit = (index) => {
        setEducationForm(educationList[index]);
        setEditIndex(index);
        setShow(true);
    };


    const validateForm = () => {
        const newErrors = {};

        if (!educationForm.qualification.trim()) {
            newErrors.qualification =
                "Qualification is required";
        }

        if (
            !educationForm.university_institute.trim()
        ) {
            newErrors.university_institute =
                "University / Institute is required";
        }

        if (!educationForm.passing_year) {
            newErrors.passing_year =
                "Passing Year is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    // const handleAddEducation = () => {
    //     if (!validateForm()) return;

    //     setEducationList((prev) => [
    //         ...prev,
    //         educationForm,
    //     ]);

    //     setEducationForm({
    //         qualification: "",
    //         university_institute: "",
    //         passing_year: "",
    //         specialization: "",
    //         percentage_grade: "",
    //     });

    //     setErrors({});
    //     setShow(false);
    // };

    const handleAddEducation = () => {
        if (!validateForm()) return;

        if (editIndex !== null) {
            // Update existing row
            const updatedList = [...educationList];

            updatedList[editIndex] = {
                ...updatedList[editIndex],
                ...educationForm,
            };

            setEducationList(updatedList);
            setEditIndex(null);
        } else {
            // Add new row
            setEducationList((prev) => [
                ...prev,
                educationForm,
            ]);
        }

        setEducationForm({
            qualification: "",
            university_institute: "",
            passing_year: "",
            specialization: "",
            percentage_grade: "",
        });

        setErrors({});
        setShow(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setEducationForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };


    const handleDelete = async (index) => {
        const item = educationList[index];

        const result = await Swal.fire({
            title: "Delete Record?",
            text: "This academic record will be permanently removed.",
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
            if (item.academic_id) {
                await deleteAcademicInformation(
                    item.academic_id
                );
            }

            setEducationList((prev) =>
                prev.filter((_, i) => i !== index)
            );

            Swal.fire({
                title: "Deleted!",
                text: "Academic record deleted successfully.",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
            });

            toast.success("Deleted Successfully");
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: "Failed to delete record.",
                icon: "error",
            });

            toast.error("Delete Failed");
        }
    };
    return (
        <>
            <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h5 className="mb-0">
                            Academic Information
                        </h5>

                        <Button
                            variant="primary"
                            onClick={() => setShow(true)}
                        >
                             Add Education Details
                        </Button>
                    </div>

                    {educationList.length === 0 ? (
                        <div className="text-center py-5 text-muted">
                            No education details added yet.
                        </div>
                    ) : (
                        <div className="table-responsive">
                            <Table
                                bordered
                                hover
                                striped
                                className="align-middle text-nowrap mb-0"
                            >
                                <thead className="table-light">
                                    <tr>
                                        <th>Qualification</th>
                                        <th>University / Institute</th>
                                        <th>Passing Year</th>
                                        <th>Specialization</th>
                                        <th>Grade (%)</th>
                                        {editData && (
                                            <th className="text-center">
                                                Actions
                                            </th>
                                        )}
                                    </tr>
                                </thead>

                                <tbody>
                                    {educationList?.length > 0 ? (
                                        educationList.map((item, index) => (
                                            <tr key={index}>
                                                <td>
                                                    <span className="fw-semibold">
                                                        {item.qualification || "-"}
                                                    </span>
                                                </td>

                                                <td>
                                                    {item.university_institute || "-"}
                                                </td>

                                                <td>
                                                    {item.passing_year || "-"}
                                                </td>

                                                <td>
                                                    {item.specialization || "-"}
                                                </td>

                                                <td>
                                                    {item.percentage_grade || "-"}
                                                </td>

                                                {editData && (
                                                    <td className="text-center">
                                                        <Button
                                                            size="sm"
                                                            variant=""
                                                            className="me-2"
                                                            onClick={() => handleEdit(index)}
                                                        >
                                                            <FiEdit2 size={20} />
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
                                                colSpan={editData ? 6 : 5}
                                                className="text-center text-muted py-4"
                                            >
                                                No academic records found
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
                    className="border-0 bg-light py-4 p-4"
                >
                    <div className="w-100">
                        <h4 className="fw-bold mb-1 text-dark">
                            Academic Information
                        </h4>

                        <p className="text-muted mb-0 small">
                            Add qualification and educational details
                        </p>
                    </div>
                </Modal.Header>

                <Modal.Body className="px-4 pb-4">

                    <div className="bg-light rounded-4 p-4">

                        <Row className="g-4">

                            {/* Qualification */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        Qualification
                                        <span className="text-danger ms-1">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="qualification"
                                        placeholder="e.g. B.Tech, M.Sc, PhD"
                                        value={educationForm.qualification}
                                        onChange={handleChange}
                                        isInvalid={!!errors.qualification}
                                        className="rounded-3 py-2"
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.qualification}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            {/* University */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        University / Institute
                                        <span className="text-danger ms-1">*</span>
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="university_institute"
                                        placeholder="Enter university name"
                                        value={educationForm.university_institute}
                                        onChange={handleChange}
                                        isInvalid={!!errors.university_institute}
                                        className="rounded-3 py-2"
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.university_institute}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            {/* Passing Year */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        Passing Year
                                        <span className="text-danger ms-1">*</span>
                                    </Form.Label>

                                    <Form.Select
                                        name="passing_year"
                                        value={educationForm.passing_year}
                                        onChange={handleChange}
                                        isInvalid={!!errors.passing_year}
                                        className="rounded-3 py-2"
                                    >
                                        <option value="">Select Year</option>

                                        {Array.from(
                                            { length: 60 },
                                            (_, index) =>
                                                new Date().getFullYear() - index
                                        ).map((year) => (
                                            <option
                                                key={year}
                                                value={year}
                                            >
                                                {year}
                                            </option>
                                        ))}
                                    </Form.Select>

                                    <Form.Control.Feedback type="invalid">
                                        {errors.passing_year}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>

                            {/* Specialization */}
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        Specialization
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="specialization"
                                        placeholder="e.g. Mathematics"
                                        value={educationForm.specialization}
                                        onChange={handleChange}
                                        className="rounded-3 py-2"
                                    />
                                </Form.Group>
                            </Col>

                            {/* Percentage */}
                            <Col xs={12}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">
                                        Percentage / Grade
                                    </Form.Label>

                                    <Form.Control
                                        type="text"
                                        name="percentage_grade"
                                        placeholder="e.g. 85% or A+"
                                        value={educationForm.percentage_grade}
                                        onChange={handleChange}
                                        className="rounded-3 py-2"
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
                        onClick={handleAddEducation}
                    >
                        Save Education
                    </Button>

                </Modal.Footer>
            </Modal>


        </>
    );
};

export default TeacherAcademicInformation;


