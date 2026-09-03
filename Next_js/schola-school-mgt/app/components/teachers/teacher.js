



"use client";

import React, { useState, useEffect } from "react";

import {
  Card,
  Button,
  Row,
  Col,
  Container,
  Image,
  Modal,
} from "react-bootstrap";



import TeacherHeader from "./teacher_header";

import { useRouter } from "next/navigation";

import SmartPagination from "../smartpagination";

import { CookingPot, Delete, Mail, Phone } from "lucide-react";

import { CiInstagram, CiLinkedin } from "react-icons/ci";

import TeacherForm from "../../(dashboard)/teachers/teacherform/TeacherForm";

import Swal from "sweetalert2";
import { deleteTeacher, getTeacherAcademicInformation, getTeacherExperienceInformation, getTeachers } from '../../../services/teacherService';
import { students } from "@/app/data";
import { handleDelete } from "../Deletehandle";

const Teacher = ({ search, setSearch }) => {

  const router = useRouter();

  
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("latest");

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  const [showModal, setShowModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [teachers, setTeachers] = useState([]);


  const handleEdit = async (teacher) => {

    try {
      const academicData =
        await getTeacherAcademicInformation(
          teacher.TeacherID
        );

      const experienceData =
        await getTeacherExperienceInformation(
          teacher.TeacherID
        );

      setSelectedTeacher({
        ...teacher,
        academic_information:
          academicData?.data || [],
        experience_information:
          experienceData?.data || [],
      });

      setShowModal(true);
    } catch (error) {
      console.log("Edit Load Error:", error);
    }
  };


  const getdata = async () => {
    try {
      const response = await getTeachers();

      setTeachers(response.data);

    } catch (error) {
      console.log("ERROR =>", error);
    }
  };

  useEffect(() => {

    getdata();

  }, []);



  const searchValue = search.toLowerCase().trim();

  const filteredTeachers = teachers
    .filter((t) =>
      filter === "all"
        ? true
        : String(t.DepartmentID) === String(filter)
    )
    .filter((t) => {
      return (
        (t.TeacherName || "")
          .toLowerCase()
          .includes(searchValue) ||

        String(t.EmployeeID || "")
          .toLowerCase()
          .includes(searchValue) ||

        String(t.PhoneNumber || "")
          .toLowerCase()
          .includes(searchValue) ||

        (t.EmailAddress || "")
          .toLowerCase()
          .includes(searchValue)
      );
    })
    .sort((a, b) => {
      if (sort === "name-asc") {
        return (a.TeacherName || "").localeCompare(
          b.TeacherName || ""
        );
      }

      if (sort === "name-desc") {
        return (b.TeacherName || "").localeCompare(
          a.TeacherName || ""
        );
      }

      return 0;
    });

  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;

  const paginatedTeachers =
    filteredTeachers.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setPage(1);
  }, [search, filter, sort]);

  if (teachers.length === 0) {
    return (
      <div className="text-center py-5">
        <h4 className="fw-bold text-muted">No Teachers Found</h4>
        <p className="text-secondary">
          No teacher records are available at the moment.
        </p>
      </div>
    );
  }

  return (
    <>
      <Container fluid>

        {/* HEADER */}
        <TeacherHeader
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />


        {/* CARDS */}
        <Row className="g-4">

          {paginatedTeachers.map((teacher) => (

            <Col key={teacher.TeacherID} xs={12} sm={6} md={4} lg={3}>

              <Card
                onClick={() => router.push(`/teachers/${teacher.
                  TeacherID
                  }`)}
                className="p-3 border-0 bg-light shadow-sm rounded-4 h-100 d-flex flex-column"
                style={{ cursor: "pointer" }}
              >

                {/* TOP */}
                <div className="d-flex align-items-center gap-3 mb-3">

                  <div
                    className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center"
                    style={{ width: 42, height: 42 }}
                  >

                    <Image
                      src={
                        teacher?.ProfilePhoto ||
                        "https://www.shutterstock.com/image-photo/satisfied-success-profile-head-shot-260nw-2689295561.jpg"
                      }
                      alt="Profile Photo"
                      width={42}
                      height={42}
                      className="w-100 h-100 object-fit-cover"
                    />

                  </div>

                  <div className="overflow-hidden">

                    <div className="text-truncate text-danger-subtle h6-alt">
                      {teacher.TeacherName
                      }
                    </div>

                    <div className="text-danger text-truncate cap-lg-med">
                      {teacher.EmployeeID} · {teacher.DepartmentName}
                    </div>

                  </div>

                </div>

                {/* DETAILS */}
                <div className="bg-dark-light rounded-3 p-2 mb-3  flex-grow-1">

                  <div className="d-flex align-items-center gap-2 mb-2 cap-lg-med">
                    <Phone size={14} className="text-danger-light" />
                    <span>{teacher.PhoneNumber
                    }</span>
                  </div>

                  <div className="d-flex align-items-center gap-2 cap-lg-med">
                    <Mail size={14} className="text-danger-light" />
                    <span>{teacher.
                      EmailAddress}</span>
                  </div>

                </div>

                {/* FOOTER */}
                <div className="d-flex justify-content-between align-items-center mt-auto">

                  <div className="d-flex gap-2">
                    <div className="p-1 bg-white rounded-3">
                      <CiLinkedin size={14} />
                    </div>

                    <div className="p-1 bg-white rounded-3">
                      <CiInstagram />
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="d-flex align-items-center">

                    <Button
                      size="sm"
                      className="rounded-3 body-xs-bold bg-primary text-dark px-3"
                      onClick={(e) => {
                        e.stopPropagation();
                        // setSelectedTeacher(teacher);
                        setShowModal(true);
                        handleEdit(teacher);
                      }}
                    >
                      Edit
                    </Button>

                    <Button
                      size="sm"

                      className="rounded-3 body-xs-bold text-light border-0 px-3 bg-success-light ms-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete({
                          id: teacher.TeacherID,
                          deleteApi: deleteTeacher,
                          title: `You want to delete this teacher record?`,
                          successMessage: `${teacher.TeacherName} deleted successfully`,
                          onSuccess: getdata
                        });




                        // handleDelete(teacher.TeacherID, teacher.TeacherName)

                      }}
                    >
                      Delete
                    </Button>

                  </div>

                </div>

              </Card>

            </Col>

          ))}

        </Row>

        {/* COUNT */}
        <div className="mt-2">
          <p className="text-danger cap-lg-med">
            Show {paginatedTeachers.length}
          </p>
        </div>

        {/* PAGINATION */}
        <div className="d-flex justify-content-end">

          {totalPages > 1 && (
            <SmartPagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />
          )}

        </div>

      </Container>

      {/* MODAL */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="xl"
        centered
      >

        <Modal.Header className="bg-primary text-dark border-0 py-3">
          <Modal.Title className="w-100">

            <div className="d-flex justify-content-between p-2">

              <div className="d-flex flex-column">

                <h4 className="fw-bold mb-1">
                  Update Teacher
                </h4>

                <small className="text-dark">
                  Edit and update teacher details
                </small>

              </div>

              <Button
                variant="light"
                size="sm"
                className="rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: 32, height: 32, padding: 0 }}
                onClick={() => setShowModal(false)}
              >
                ✕
              </Button>

            </div>

          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="bg-light p-4">

          <div className="bg-white rounded shadow-sm p-4">

            <TeacherForm
              editData={selectedTeacher}
              onSuccess={async () => {
                await getdata();

                setShowModal(false);
              }}
            />

          </div>

        </Modal.Body>

      </Modal>

    </>
  );
};

export default Teacher;


