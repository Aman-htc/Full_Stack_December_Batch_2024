"use client";

import { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    InputGroup,
} from "react-bootstrap";
import { FiUploadCloud, FiX } from "react-icons/fi";
import Flatpickr from "react-flatpickr";
import { ToastContainer, toast } from "react-toastify";
import Breadcrumb from "@/app/components/breadcrum";
import "flatpickr/dist/themes/material_blue.css";
import "react-toastify/dist/ReactToastify.css";

import Header from "@/app/components/Header";
import { addStudent, getAllClasses, getAllSections, updateStudent } from "@/services/studentService";


const countryCodes = ["+91", "+1", "+44"];
const genderOptions = ["Male", "Female"];
const gradeOptions = ["Grade 7", "Grade 8", "Grade 9"];
const sectionOptions = ["A", "B", "C"];
const relationOptions = ["Father", "Mother", "Brother", "Sister", "Uncle", "Aunt"];

const initialStudentForm = {
    studentId: "",
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    address: "",
    fatherName: "",
    fatherCountryCode: "+91",
    fatherPhone: "",
    motherName: "",
    motherCountryCode: "+91",
    motherPhone: "",
    guardianName: "",
    guardianRelation: "",
    guardianCountryCode: "+91",
    guardianPhone: "",
    admissionNumber: "",
    grade: "",
    section: "",
    enrollmentDate: "",
    previousSchool: "",
    hobbies: "",
    specialNeedsSupport: false,
    medicalConditionAlert: false,
    medicalNote: "",
};

export default function AddStudentPage({
    initialData = null,
    isEdit = false,
    onSuccess
}) {
    const [form, setForm] = useState(initialStudentForm);
    const [preview, setPreview] = useState("");
    const [selectedImage, setSelectedImage] = useState(null);
    const [errors, setErrors] = useState({});
    // const [Loading]


    useEffect(() => {
        if (!initialData) return;

        const phone = initialData.PhoneNumber || "";

        setForm({
            studentId: initialData.StudentID || "",
            fullName: initialData.StudentName || "",
            dateOfBirth: initialData.DateOfBirth || "",
            gender: initialData.Gender || "",
            email: initialData.EmailAddress || "",

            countryCode: "+91",
            phoneNumber: phone.replace("+91", ""),

            address: initialData.AddressLine || "",

            fatherName: initialData.FatherName || "",
            fatherPhone: initialData.FatherPhone || "",

            motherName: initialData.MotherName || "",
            motherPhone: initialData.MotherPhone || "",

            guardianName: initialData.GuardianName || "",
            guardianRelation: initialData.GuardianRelation || "",
            guardianPhone: initialData.GuardianPhone || "",

            admissionNumber: initialData.AdmissionNumber || "",

            grade: initialData.ClassID || "",
            section: initialData.SectionID || "",

            enrollmentDate: initialData.EnrollmentDate || "",
            previousSchool: initialData.PreviousSchool || "",

            hobbies: initialData.Hobbies || "",

            specialNeedsSupport: initialData.IsSpecialNeeds || false,
            medicalConditionAlert: initialData.HasMedicalCondition || false,
            medicalNote: initialData.MedicalNotes || "",
        });

        setPreview(initialData.ProfilePhoto || "");
    }, [initialData]);




    const updateField = (event) => {
        const { name, value, type, checked } = event.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const updateDate = (name, date) => {
        const value = date?.[0] ? date[0].toISOString().split("T")[0] : "";

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const uploadImage = (event) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
            setErrors((prev) => ({
                ...prev,
                profilePhoto: "Only JPG and PNG images are allowed",
            }));
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            setErrors((prev) => ({
                ...prev,
                profilePhoto: "Image size must be less than 2MB",
            }));
            return;
        }

        setSelectedImage(file);
        setPreview(URL.createObjectURL(file));
        setErrors((prev) => ({
            ...prev,
            profilePhoto: "",
        }));
    };

    const removeImage = () => {
        setSelectedImage(null);
        setPreview("");
        setErrors((prev) => ({
            ...prev,
            profilePhoto: "",
        }));
    };

    const validate = () => {
        const nextErrors = {};


        if (!form.fullName.trim()) nextErrors.fullName = "Full name is required";
        if (!form.dateOfBirth) nextErrors.dateOfBirth = "Date of birth is required";
        if (!form.gender) nextErrors.gender = "Gender is required";

        if (!form.email.trim()) {
            nextErrors.email = "Email address is required";
        } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
            nextErrors.email = "Enter a valid email address";
        }
        if (!isEdit && !selectedImage) {
            nextErrors.profilePhoto =
                "Profile photo is required";
        }
        if (!form.phoneNumber.trim()) {
            nextErrors.phoneNumber = "Phone number is required";
        } else if (!/^[0-9]{10}$/.test(form.phoneNumber)) {
            nextErrors.phoneNumber = "Enter valid 10 digit phone number";
        }

        if (!form.address.trim()) nextErrors.address = "Address is required";
        if (!form.grade) nextErrors.grade = "Grade is required";
        if (!form.section) nextErrors.section = "Section is required";
        if (!form.enrollmentDate) nextErrors.enrollmentDate = "Enrollment date is required";
        if (!form.previousSchool.trim()) nextErrors.previousSchool = "Previous school is required";

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };


    // -------------------------
    // AUTO GENERATORS
    // -------------------------
    const generateAdmissionNumber = () => {
        return "ADM-" + Date.now();
    };
    const generateRollNumber = () => {
        return `S-${Math.floor(1000 + Math.random() * 9000)}`;
    };
    const uploadToCloudinary = async (file) => {
        const formData = new FormData();

        formData.append("file", file);
        formData.append("upload_preset", "profile_images");

        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dyqtrk0rd/image/upload",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await res.json();

        if (!data.secure_url) {
            throw new Error("Cloudinary upload failed");
        }

        return data.secure_url;
    };




    const submitForm = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {

            let imageString = initialData?.ProfilePhoto || null;

            if (selectedImage) {
                imageString = await uploadToCloudinary(selectedImage);
            }

            // ADD
            if (!isEdit) {
                const payload = {
                    parent: {
                        father_name: form.fatherName || "",
                        father_phone: form.fatherPhone || "",
                        mother_name: form.motherName || "",
                        mother_phone: form.motherPhone || "",
                        guardian_name: form.guardianName || "",
                        guardian_relation: form.guardianRelation || "",
                        guardian_phone: form.guardianPhone || "",
                    },

                    student: {
                        admission_number: generateAdmissionNumber(),
                        roll_number: generateRollNumber(),

                        student_name: form.fullName,
                        profile_photo: imageString,

                        gender: form.gender,
                        date_of_birth: form.dateOfBirth,
                        email_address: form.email,

                        phone_number:
                            `${form.countryCode || "+91"}${form.phoneNumber}`,

                        address_line: form.address,
                        class_id: Number(form.grade),
                        section_id: Number(form.section),

                        enrollment_date: form.enrollmentDate,
                        previous_school: form.previousSchool || "",

                        hobbies: form.hobbies || "",

                        is_special_needs: form.specialNeedsSupport,
                        has_medical_condition: form.medicalConditionAlert,
                        medical_notes: form.medicalNote || null,

                        status: "Active",
                    },
                };

                await addStudent(payload);
                toast.success("Student Added Successfully");

                setForm(initialStudentForm);
                setSelectedImage(null);
                setPreview("");
            }

            // UPDATE
            else {
                const payload = {
                    parent_id: initialData.ParentID,

                    parent: {
                        father_name: form.fatherName || "",
                        father_phone: form.fatherPhone || "",
                        mother_name: form.motherName || "",
                        mother_phone: form.motherPhone || "",
                        guardian_name: form.guardianName || "",
                        guardian_relation: form.guardianRelation || "",
                        guardian_phone: form.guardianPhone || "",
                    },

                    student: {
                        admission_number: initialData.AdmissionNumber,
                        roll_number: initialData.RollNumber,

                        student_name: form.fullName,
                        profile_photo: imageString,

                        gender: form.gender,
                        date_of_birth: form.dateOfBirth,
                        email_address: form.email,

                        phone_number:
                            `${form.countryCode || "+91"}${form.phoneNumber}`,

                        address_line: form.address,
                        class_id: Number(form.grade),
                        section_id: Number(form.section),

                        enrollment_date: form.enrollmentDate,
                        previous_school: form.previousSchool || "",

                        hobbies: form.hobbies || "",

                        is_special_needs: form.specialNeedsSupport,
                        has_medical_condition: form.medicalConditionAlert,
                        medical_notes: form.medicalNote || null,

                        status: "Active",
                    },
                };

                await updateStudent(initialData.StudentID, payload);
                toast.success("Student Updated Successfully");

                onSuccess && onSuccess();
            }

        } catch (err) {
            console.log("API ERROR =>", err?.response?.data);
            toast.error(err?.response?.data?.message || "Something went wrong");
        } finally {

        }
    };



    const [classes, setClasses] = useState([]);
    const [sections, setSections] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAllClasses();
                const sectionData = await getAllSections();

                setClasses(response.data || []);
                setSections(sectionData.data || []);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);




    const CountrySelect = ({ name, value }) => (
        <Form.Select
            name={name}
            value={value}
            onChange={updateField}
            className="country-select"
        >
            {countryCodes.map((code) => (
                <option key={code} value={code}>
                    {code}
                </option>
            ))}
        </Form.Select>
    );

    return (
        <Container fluid className="add-student-page bg-body px-0 pb-8">
            <ToastContainer position="top-right" autoClose={2500} />
            <Header text={isEdit ? "Edit Student" : "Add New Student"} />
            <div className="d-flex align-items-center gap-3 mb-3">
                <Breadcrumb
                    items={[
                        { label: "Dashboard", path: "/dashboard" },
                        { label: "Students", path: "/students" },
                        { label: "Add Student" },
                    ]}
                />
            </div>

            <Form onSubmit={submitForm}>
                <Row className="g-3 mx-0 add-student-layout align-items-start">
                    <Col xs={12} xl={8}>
                        <Card className="border-0 rounded-4 shadow-sm bg-white mb-3">
                            <Card.Body>
                                <h2 className="card-heading mb-3">Personal Information</h2>

                                <Row className="g-3">
                                    <Col xs={12} md={4}>
                                        <Form.Group>
                                            <Form.Label>Student ID</Form.Label>
                                            <Form.Control
                                                name="studentId"
                                                value={form.studentId}
                                                placeholder="Auto-generated"
                                                disabled
                                            />
                                            <small className="cap-md-reg text-secondary-dark">
                                                Auto-Generated
                                            </small>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={4}>
                                        <Form.Group>
                                            <Form.Label>Full Name</Form.Label>
                                            <Form.Control
                                                name="fullName"
                                                value={form.fullName}
                                                isInvalid={!!errors.fullName}
                                                placeholder="Enter full name"
                                                onChange={updateField}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.fullName}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={4}>
                                        <Form.Group>
                                            <Form.Label>Date of Birth</Form.Label>
                                            <Flatpickr
                                                value={form.dateOfBirth}
                                                onChange={(date) => updateDate("dateOfBirth", date)}
                                                options={{ dateFormat: "Y-m-d", maxDate: "today",
                                                    disableMobile:true
                                                 }}
                                                className={`form-control ${errors.dateOfBirth ? "is-invalid" : ""}`}
                                                placeholder="Select date of birth"
                                            />
                                            {errors.dateOfBirth && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.dateOfBirth}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.Label>Gender</Form.Label>

                                            <div className="gender-box d-flex align-items-center gap-2">
                                                {genderOptions.map((gender) => (
                                                    <label
                                                        key={gender}
                                                        className={`gender-option ${form.gender === gender ? "active" : ""}`}
                                                    >
                                                        <Form.Check.Input
                                                            type="radio"
                                                            name="gender"
                                                            value={gender}
                                                            checked={form.gender === gender}
                                                            onChange={updateField}
                                                        />
                                                        <span>{gender}</span>
                                                    </label>
                                                ))}
                                            </div>

                                            {errors.gender && (
                                                <small className="text-danger cap-md-reg">
                                                    {errors.gender}
                                                </small>
                                            )}
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.Label>Profile Photo</Form.Label>

                                            <div className="position-relative">
                                                <label className="student-upload-box w-100">
                                                    {preview ? (
                                                        <img src={preview} alt="Student preview" />
                                                    ) : (
                                                        <div className="text-center">
                                                            <FiUploadCloud size={28} className="text-warning mb-2" />
                                                            <p className="body-xs-bold text-warning mb-1">
                                                                Click or drag to upload
                                                            </p>
                                                            <p className="cap-md-reg text-secondary-dark mb-0">
                                                                Upload a recent passport-size photo. Max 2MB, JPG/PNG
                                                            </p>
                                                        </div>
                                                    )}

                                                    <input
                                                        type="file"
                                                        accept="image/png,image/jpeg,image/jpg"
                                                        onChange={uploadImage}
                                                    />
                                                </label>

                                                {preview && (
                                                    <Button
                                                        type="button"
                                                        variant="danger"
                                                        size="sm"
                                                        className="image-remove-btn rounded-circle"
                                                        onClick={removeImage}
                                                    >
                                                        <FiX size={16} />
                                                    </Button>
                                                )}
                                            </div>

                                            {errors.profilePhoto && (
                                                <small className="text-danger cap-md-reg">
                                                    {errors.profilePhoto}
                                                </small>
                                            )}
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="border-0 rounded-4 shadow-sm bg-white mb-3">
                            <Card.Body>
                                <h2 className="card-heading mb-3">Contact Information</h2>

                                <Row className="g-3">
                                    <Col xs={12} md={6}>
                                        <Form.Group>
                                            <Form.Label>Email Address</Form.Label>
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                isInvalid={!!errors.email}
                                                placeholder="Enter email address"
                                                onChange={updateField}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <Form.Group>
                                            <Form.Label>Phone Number</Form.Label>
                                            <InputGroup className="phone-input-group">
                                                <CountrySelect name="countryCode" value={form.countryCode} />

                                                <Form.Control
                                                    name="phoneNumber"
                                                    value={form.phoneNumber}
                                                    isInvalid={!!errors.phoneNumber}
                                                    placeholder="Enter phone number"
                                                    onChange={updateField}
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.phoneNumber}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control
                                                name="address"
                                                value={form.address}
                                                isInvalid={!!errors.address}
                                                placeholder="Enter address"
                                                onChange={updateField}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.address}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="border-0 rounded-4 shadow-sm bg-white">
                            <Card.Body>
                                <h2 className="card-heading mb-3">Parent/Guardian Info</h2>

                                <Row className="g-3">
                                    <Col xs={12} md={6}>
                                        <div className="guardian-box bg-body rounded-3 p-3">
                                            <h3 className="body-xs-bold text-dark mb-3">Father</h3>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    name="fatherName"
                                                    value={form.fatherName}
                                                    placeholder="Enter father name"
                                                    onChange={updateField}
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Phone Number</Form.Label>
                                                <InputGroup className="phone-input-group">
                                                    <CountrySelect
                                                        name="fatherCountryCode"
                                                        value={form.fatherCountryCode}
                                                    />
                                                    <Form.Control
                                                        name="fatherPhone"
                                                        value={form.fatherPhone}
                                                        placeholder="Enter father phone"
                                                        onChange={updateField}
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                    </Col>

                                    <Col xs={12} md={6}>
                                        <div className="guardian-box bg-body rounded-3 p-3">
                                            <h3 className="body-xs-bold text-dark mb-3">Mother</h3>

                                            <Form.Group className="mb-3">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    name="motherName"
                                                    value={form.motherName}
                                                    placeholder="Enter mother name"
                                                    onChange={updateField}
                                                />
                                            </Form.Group>

                                            <Form.Group>
                                                <Form.Label>Phone Number</Form.Label>
                                                <InputGroup className="phone-input-group">
                                                    <CountrySelect
                                                        name="motherCountryCode"
                                                        value={form.motherCountryCode}
                                                    />
                                                    <Form.Control
                                                        name="motherPhone"
                                                        value={form.motherPhone}
                                                        placeholder="Enter mother phone"
                                                        onChange={updateField}
                                                    />
                                                </InputGroup>
                                            </Form.Group>
                                        </div>
                                    </Col>

                                    <Col xs={12}>
                                        <div className="guardian-box bg-body rounded-3 p-3">
                                            <h3 className="body-xs-bold text-dark mb-3">
                                                Alternative Guardian{" "}
                                                <span className="cap-md-reg text-secondary-dark">
                                                    (If Any)
                                                </span>
                                            </h3>

                                            <Row className="g-3">
                                                <Col xs={12} md={4}>
                                                    <Form.Group>
                                                        <Form.Label>Name</Form.Label>
                                                        <Form.Control
                                                            name="guardianName"
                                                            value={form.guardianName}
                                                            placeholder="Enter guardian name"
                                                            onChange={updateField}
                                                        />
                                                    </Form.Group>
                                                </Col>

                                                <Col xs={12} md={4}>
                                                    <Form.Group>
                                                        <Form.Label>Relation</Form.Label>
                                                        <Form.Select
                                                            name="guardianRelation"
                                                            value={form.guardianRelation}
                                                            onChange={updateField}
                                                        >
                                                            <option value="">Select relation</option>
                                                            {relationOptions.map((item) => (
                                                                <option key={item} value={item}>
                                                                    {item}
                                                                </option>
                                                            ))}
                                                        </Form.Select>
                                                    </Form.Group>
                                                </Col>

                                                <Col xs={12} md={4}>
                                                    <Form.Group>
                                                        <Form.Label>Phone Number</Form.Label>
                                                        <InputGroup className="phone-input-group">
                                                            <CountrySelect
                                                                name="guardianCountryCode"
                                                                value={form.guardianCountryCode}
                                                            />
                                                            <Form.Control
                                                                name="guardianPhone"
                                                                value={form.guardianPhone}
                                                                placeholder="Enter guardian phone"
                                                                onChange={updateField}
                                                            />
                                                        </InputGroup>
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} xl={4}>
                        <Card className="border-0 rounded-4 shadow-sm bg-white mb-3">
                            <Card.Body>
                                <h2 className="card-heading mb-3">Administration</h2>

                                <Form.Group>
                                    <Form.Label>Admission Number</Form.Label>
                                    <Form.Control
                                        name="admissionNumber"
                                        value={form.admissionNumber}
                                        placeholder="Auto-generated"
                                        disabled
                                    />
                                    <small className="cap-md-reg text-secondary-dark">
                                        Auto-Generated
                                    </small>
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        <Card className="border-0 rounded-4 shadow-sm bg-white mb-3">
                            <Card.Body>
                                <h2 className="card-heading mb-3">Academic Information</h2>

                                <Row className="g-3">
                                    <Col xs={12} md={6}>
                                        <Form.Group>
                                            <Form.Label>Grade</Form.Label>

                                            <Form.Select
                                                name="grade"
                                                value={form.grade}
                                                isInvalid={!!errors.grade}
                                                onChange={updateField}
                                            >
                                                <option value="">Select Grade</option>

                                                {classes.map((item) => (
                                                    <option key={item.ClassID} value={item.ClassID}>
                                                        {item.ClassName}
                                                    </option>
                                                ))}
                                            </Form.Select>

                                            <Form.Control.Feedback type="invalid">
                                                {errors.grade}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    

                                    <Col xs={12} md={6}>
                                        <Form.Group>
                                            <Form.Label>Section</Form.Label>

                                            <Form.Select
                                                name="section"
                                                value={form.section}
                                                isInvalid={!!errors.section}
                                                onChange={updateField}
                                                disabled={!form.grade}
                                            >
                                                <option value="">Select Section</option>

                                                {sections.map((item) => (
                                                    <option key={item.SectionID} value={item.SectionID}>
                                                        {item.SectionName}
                                                    </option>
                                                ))}
                                            </Form.Select>

                                            <Form.Control.Feedback type="invalid">
                                                {errors.section}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>

                                   

                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.Label>Enrollment Date</Form.Label>
                                            <Flatpickr
                                                value={form.enrollmentDate}
                                                onChange={(date) => updateDate("enrollmentDate", date)}
                                                options={{ dateFormat: "Y-m-d", maxDate: "today",
                                                    disableMobile:true

                                                 }}
                                                className={`form-control ${errors.enrollmentDate ? "is-invalid" : ""}`}
                                                placeholder="Select enrollment date"
                                            />
                                            {errors.enrollmentDate && (
                                                <div className="invalid-feedback d-block">
                                                    {errors.enrollmentDate}
                                                </div>
                                            )}
                                        </Form.Group>
                                    </Col>

                                    <Col xs={12}>
                                        <Form.Group>
                                            <Form.Label>Previous School</Form.Label>
                                            <Form.Control
                                                name="previousSchool"
                                                value={form.previousSchool}
                                                isInvalid={!!errors.previousSchool}
                                                placeholder="e.g. Greenfield Junior High"
                                                onChange={updateField}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.previousSchool}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        <Card className="border-0 rounded-4 shadow-sm bg-white">
                            <Card.Body>
                                <h2 className="card-heading mb-3">Additional Information</h2>

                                <Form.Group className="mb-3">
                                    <Form.Label>Hobbies / Interests</Form.Label>
                                    <Form.Control
                                        name="hobbies"
                                        value={form.hobbies}
                                        placeholder="Enter hobbies or interests"
                                        onChange={updateField}
                                    />
                                </Form.Group>

                                <Form.Check
                                    type="switch"
                                    name="specialNeedsSupport"
                                    label="Special Needs Support"
                                    checked={form.specialNeedsSupport}
                                    onChange={updateField}
                                    className="mb-2 body-xs-med"
                                />

                                <Form.Check
                                    type="switch"
                                    name="medicalConditionAlert"
                                    label="Medical Condition Alert"
                                    checked={form.medicalConditionAlert}
                                    onChange={updateField}
                                    className="mb-3 body-xs-med"
                                />

                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    name="medicalNote"
                                    value={form.medicalNote}
                                    placeholder="Write medical note"
                                    onChange={updateField}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <div className="add-student-footer d-flex align-items-center justify-content-between flex-wrap gap-3 mt-3">
                    <Button type="button" variant="link" className="text-warning px-0">
                        Save as Draft
                    </Button>

                    <div className="d-flex align-items-center gap-2">
                        <Button type="button" variant="light" className="rounded-3">
                            Cancel
                        </Button>

                        <Button type="submit" variant="secondary" className="rounded-3">
                            {isEdit ? "Update Student" : "Save & Add Student"}
                        </Button>
                    </div>
                </div>
            </Form>
        </Container>
    );
}
