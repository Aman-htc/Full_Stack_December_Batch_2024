










"use client";

import React, { useEffect, useState } from "react";

import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik, FormikProvider } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";

import {
  addAcademicInformation,
  addExperienceInformation,
  addTeacher,
  updateAcademicInformation,
  updateExperienceInformation,
  updateTeacher,
} from "../../../../services/teacherService";

import ContactInfo from "@/app/components/teachers/teacherform/contactinfofrom";
import WorkInfo from "@/app/components/teachers/teacherform/workinfofrom";
import AdditionalInfo from "@/app/components/teachers/teacherform/additionalinfofrom";
import PersonalInfo from "@/app/components/teachers/teacherform/personalinfofrom";
import ProfessionalInfo from "@/app/components/teachers/teacherform/professionalinfo";
import TeacherAcademicInformation from "@/app/components/teachers/teacherform/AcademicInformation";
import { Container } from "lucide-react";
import TeachingExperience from "@/app/components/teachers/teacherform/TeachingExperience";

const TeacherForm = ({ editData, onSuccess }) => {
  const handleStep1Next = async () => {
    const errors = await formik.validateForm();

    const step1Fields = [
      "fullName",
      "dob",
      "email",
      "phoneNumber",
      "department",
      "joiningDate",
      "classAssigned",
      "skills",
      "address",
    ];

    const hasErrors = step1Fields.some(
      (field) => errors[field]
    );

    if (hasErrors) {
      const touched = {};

      step1Fields.forEach((field) => {
        touched[field] = true;
      });

      formik.setTouched(touched);
      return;
    }

    setStep(2);
  };
  const [step, setStep] = useState(1);

  const [educationList, setEducationList] = useState([]);
  const [experienceList, setExperienceList] = useState([]);


  // VALIDATION
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .trim()
      .matches(
        /^[A-Za-z\s]+$/,
        "Name can contain only letters and spaces"
      )
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name cannot exceed 50 characters")
      .required("Please enter your name"),

    dob: Yup.string().required("Please select DOB"),

    email: Yup.string()
      .trim()
      .lowercase()
      .email("Please enter a valid email address")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Invalid email format"
      )
      .required("Please enter email"),

    phoneNumber: Yup.string()
      .required("Please enter phone number")
      .matches(
        /^[6-9]\d{9}$/,
        "Enter a valid 10-digit mobile number"
      ),

    department: Yup.string().required("Select department"),



    joiningDate: Yup.string().required(
      "Joining date required"
    ),

    classAssigned: Yup.string().required(
      "Class required"
    ),

    skills: Yup.string()
      .trim()
      .min(2, "Skills required")
      .max(200, "Skills cannot exceed 200 characters")
      .required("Skills required"),



    address: Yup.string()
      .trim()
      .min(10, "Address must be at least 10 characters")
      .max(300, "Address cannot exceed 300 characters")
      .required("Address required"),
  });


  useEffect(() => {
    if (editData) {
      setEducationList(
        (editData.academic_information || []).map(
          (item) => ({
            qualification: item.Qualification || "",
            university_institute:
              item.UniversityInstitute || "",
            passing_year: item.PassingYear || "",
            specialization:
              item.Specialization || "",
            percentage_grade:
              item.PercentageGrade || "",
            academic_id: item.AcademicID,
          })
        )
      );

      setExperienceList(
        (editData.experience_information || []).map(
          (item) => ({
            organization_name:
              item.OrganizationName || "",
            job_title:
              item.JobTitle || "",
            start_date:
              item.StartDate || "",
            end_date:
              item.EndDate || "",
            is_current:
              item.IsCurrent || false,
            description:
              item.Description || "",
            experience_id:
              item.ExperienceID,
          })
        )
      );
    }
  }, [editData]);

  const formik = useFormik({
    initialValues: {
      employeeId: editData?.EmployeeID || "",
      fullName: editData?.TeacherName || "",
      dob: editData?.DateOfBirth || "",
      gender: editData?.Gender || "",
      email: editData?.EmailAddress || "",
      phoneNumber: editData?.PhoneNumber || "",
      address: editData?.AddressLine || "",
      department: editData?.DepartmentID || "",
      qualification: editData?.Qualification || "",
      experience: editData?.Experience || "",
      joiningDate: editData?.JoiningDate || "",
      classAssigned: editData?.ClassAssigned || "",
      workType: editData?.WorkType || "Full-Time",
      skills: editData?.Skills || "",
      specialization: editData?.Specialization || "",
      university: editData?.UniversityInstitute || "",
      passingYear: editData?.PassingYear || "",
      profilePhoto: editData?.ProfilePhoto || "",
      extraDuties: editData?.ExtraDuties || 1,
    },

    enableReinitialize: true,
    validationSchema,

    onSubmit: async (values, { resetForm, setSubmitting }) => {
      console.log("FORM SUBMITTED", values);
      try {
        setSubmitting(true);

        const generatedEmployeeId = editData
          ? values.employeeId
          : `EMP-${Math.floor(100000 + Math.random() * 900000)}`;

        const teacherData = {
          employee_id: String(generatedEmployeeId),
          teacher_name: String(values.fullName || ""),
          profile_photo: values.profilePhoto || "",
          gender: String(values.gender || ""),
          date_of_birth: String(values.dob || ""),
          email_address: String(values.email || ""),
          joining_date: String(values.joiningDate || ""),

          passing_year: String(values.passingYear || ""),
          class_assigned: String(values.classAssigned || ""),
          skills: String(values.skills || ""),
          phone_number: String(values.phoneNumber || ""),
          address_line: String(values.address || ""),
          department_id: Number(values.department || 0),

          work_type: String(values.workType || "Full-Time"),
          extra_duties: Number(values.extraDuties || 0),
          academic_information: educationList,
          experience_information: experienceList,
          is_active: true,
        };



        if (editData?.TeacherID) {
          await updateTeacher(
            editData.TeacherID,
            teacherData
          );

          for (const academic of educationList) {

            if (academic.academic_id) {

              await updateAcademicInformation(
                academic.academic_id,
                {
                  qualification:
                    academic.qualification,
                  university_institute:
                    academic.university_institute,
                  passing_year:
                    academic.passing_year,
                  specialization:
                    academic.specialization,
                  percentage_grade:
                    academic.percentage_grade,
                }
              );


            } else {

              await addAcademicInformation(
                editData.TeacherID,
                academic
              );

            }
          }

          for (const experience of experienceList) {
            if (experience.experience_id) {
              await updateExperienceInformation(
                experience.experience_id,
                experience
              );
            } else {
              await addExperienceInformation(
                editData.TeacherID,
                experience
              );
            }
          }

          toast.success(
            "Teacher updated successfully"
          );
        }
        else {
          await addTeacher(teacherData);
          toast.success("Teacher added successfully");
          resetForm();
        }

        if (onSuccess) onSuccess();
      } catch (error) {
        console.log("FULL ERROR =>", error);


        toast.error(
          error.response?.data?.detail?.[0]?.msg ||
          "Something went wrong"
        );
      } finally {
        setSubmitting(false);
      }
    },
  });



  return (
    <FormikProvider value={formik}>
      <ToastContainer />
      <div className="bg-light p-4 rounded shadow-sm mb-4">
        <div className="d-flex align-items-center">

          {/* Step 1 */}
          <div className="d-flex align-items-center flex-grow-1">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${step >= 1 ? "bg-primary text-white" : "bg-secondary text-white"
                }`}
              style={{ width: "45px", height: "45px" }}
            >
              1
            </div>

            <span className="ms-2 fw-semibold">
              Basic Information
            </span>

            <div
              className={`flex-grow-1 mx-3 ${step > 1 ? "bg-primary" : "bg-secondary"
                }`}
              style={{ height: "2px" }}
            />
          </div>

          {/* Step 2 */}
          <div className="d-flex align-items-center flex-grow-1">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${step >= 2 ? "bg-primary text-white" : "bg-secondary text-white"
                }`}
              style={{ width: "45px", height: "45px" }}
            >
              2
            </div>

            <span className="ms-2 fw-semibold">
              Academic Information
            </span>

            <div
              className={`flex-grow-1 mx-3 ${step > 2 ? "bg-primary" : "bg-secondary"
                }`}
              style={{ height: "2px" }}
            />
          </div>

          {/* Step 3 */}
          <div className="d-flex align-items-center">
            <div
              className={`rounded-circle d-flex align-items-center justify-content-center fw-bold ${step >= 3 ? "bg-primary text-white" : "bg-secondary text-white"
                }`}
              style={{ width: "45px", height: "45px" }}
            >
              3
            </div>

            <span className="ms-2 fw-semibold">
              Teaching Experience
            </span>
          </div>

        </div>
      </div>

      <Form onSubmit={formik.handleSubmit}>
        {step === 1 && (
          <>
            {/* <Container> */}
            <Row className="g-5 mt-3">
              <Col xs={12} lg={6}>
                <PersonalInfo formik={formik} text='Teacher' />



                <AdditionalInfo formik={formik} />
              </Col>

              <Col xs={12} lg={6}>
                <div className="bg-light p-4 rounded-4 mb-4 shadow-sm">
                  <label>Employee ID</label>

                  <input
                    type="text"
                    value={
                      editData
                        ? editData.EmployeeID
                        : "AUTO GENERATED"
                    }
                    readOnly
                    className="form-control bg-dark-light text-danger border rounded-3 py-3 px-3"
                  />

                  <small className="text-danger">
                    Auto Generated
                  </small>
                </div>

                <WorkInfo formik={formik} />
                <ProfessionalInfo formik={formik} />
                <ContactInfo
                  formik={formik}
                  editData={editData}
                />

              </Col>
            </Row>

            <div className="d-flex justify-content-end mt-4">
             
              <Button
                type="button"
                onClick={handleStep1Next}
              >
                Next
              </Button>
            </div>
            {/* </Container>1 */}
          </>
        )}

        {step === 2 && (
          <>
            <Row className="justify-content-center mt-3">
              <Col xs={12} lg={8}>
                
                <TeacherAcademicInformation
                  educationList={educationList}
                  setEducationList={setEducationList}
                  editData={editData}
                />
              </Col>
            </Row>

            <div className="d-flex justify-content-between mt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setStep(1)}
              >
                Previous
              </Button>
              <div className="d-flex justify-content-end mt-4">
                
                <Button
                  type="button"
                  onClick={() => {
                    if (educationList.length === 0) {
                      toast.error(
                        "Please add at least one academic information record"
                      );
                      return;
                    }

                    setStep(3);
                  }}
                >
                  Next
                </Button>
              </div>


            </div>
          </>
        )}
        {step === 3 && (
          <>
            <Row className="justify-content-center mt-3">
              <Col xs={12} lg={8}>
                <TeachingExperience
                  experienceList={experienceList}
                  setExperienceList={setExperienceList}
                  editData={editData}
                />
              </Col>
            </Row>

            <div className="d-flex justify-content-between mt-4">
              <Button
                type="button"
                variant="secondary"
                onClick={() => setStep(2)}
              >
                Previous
              </Button>


              <Button
                type="submit"

                disabled={formik.isSubmitting}
              >
                {formik.isSubmitting
                  ? "Saving..."
                  : editData
                    ? "Update Teacher"
                    : "Save Teacher"}
              </Button>
            </div>
          </>
        )}
      </Form>
    </FormikProvider>
  );
};

export default TeacherForm;









