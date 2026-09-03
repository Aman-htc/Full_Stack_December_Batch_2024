"use client";

import React, { useEffect, useMemo, useState } from "react";

import {
  attendanceTabs,
  attendanceFilters,
  attendanceStaffs,
} from "@/app/data";

import { Check, X } from "lucide-react";

import DropdownBtn from "../dropdown";
import SmartPagination from "../smartpagination";
import { HiArrowsUpDown } from "react-icons/hi2";
import { gettypeAttendance } from "@/services/teacherService";
import { getAllClasses } from "@/services/studentService";

export default function AttendanceTable({ search }) {
  const [activeTab, setActiveTab] = useState("students");
  const [year, setYear] = useState("July 2026");
  const [selectedClass, setSelectedClass] = useState('');
  const [page, setPage] = useState(1);
  const studentsPerPage = 10;

  // States for API Data
  const [teacher, setTeacher] = useState([]);
  const [students, setStudents] = useState([]);
  // const [selectedClass, setSelectedClass] = useState("");
  const [classes, setClasses] = useState([]);

  // -----------------------------
  // API CALLS
  // -----------------------------
  const fetchClasses = async () => {
    try {
      const response = await getAllClasses();

      const classData = response.data || response || [];

      setClasses(classData);

      if (classData.length > 0) {
        setSelectedClass(String(classData[11].ClassID));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);









  const fetchAttendanceData = async () => {
    try {
      if (activeTab === "teachers") {
        const teacherRes = await gettypeAttendance("Teacher");

        const teacherRaw =
          teacherRes.data?.data || [];

        setTeacher(
          transformAttendance(teacherRaw, "teacher")
        );
      }

      if (activeTab === "students" && selectedClass) {
        const studentRes = await gettypeAttendance(
          "Student",
          selectedClass
        );

        const studentRaw =
          studentRes.data?.data || [];
        console.log('student', studentRaw)

        setStudents(
          transformAttendance(studentRaw, "student")
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (
      activeTab === "students" &&
      selectedClass
    ) {
      fetchAttendanceData();
    }

    if (activeTab === "teachers") {
      fetchAttendanceData();
    }
  }, [activeTab, selectedClass]);



  

  // -----------------------------
  // TRANSFORM FUNCTION FOR BOTH
  // -----------------------------
  const transformAttendance = (data, type) => {
    const map = {};

    data.forEach((item) => {
      const key = item.OwnerID;

      if (!map[key]) {

        const name = type === "teacher"
          ? (item.TeacherName || `Teacher ${key}`)
          : (item.StudentName || item.name || `Student ${key}`);


        map[key] = {
          id: key,
          name,
          classId: String(item.ClassID),
          className: item.ClassName,
          attendance: {},
        };
      }

      const dateKey = item.AttendanceDate;
      map[key].attendance[dateKey] = item.Status?.toLowerCase();
    });

    return Object.values(map);
  };

  // -----------------------------
  // DYNAMIC DATES GENERATOR (1 TO 30/31)
  // -----------------------------
  const dynamicDateColumns = useMemo(() => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

    const columns = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const monthsShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    for (let day = 1; day <= totalDays; day++) {
      const dateObj = new Date(currentYear, currentMonth, day);
      const dayName = daysOfWeek[dateObj.getDay()];
      const monthName = monthsShort[currentMonth];

      const monthStr = String(currentMonth + 1).padStart(2, "0");
      const dayStr = String(day).padStart(2, "0");
      const fullDateKey = `${currentYear}-${monthStr}-${dayStr}`;

      columns.push({
        id: day,
        label: `${dayName}, ${monthName} ${day}`,
        dateKey: fullDateKey,
      });
    }

    return columns;
  }, []);

  // -----------------------------
  // CURRENT DATA SELECTION
  // -----------------------------
  const currentData = useMemo(() => {
    if (activeTab === "teachers") {
      return Array.isArray(teacher) ? teacher : [];
    }
    if (activeTab === "staff") {
      return attendanceStaffs;
    }
    // Ab students tab par real API data return hoga
    return Array.isArray(students) ? students : [];
  }, [activeTab, teacher, students]);

  // -----------------------------
  // FILTER DATA
  // -----------------------------

  const filteredData = useMemo(() => {
    const searchValue = (search || "").toLowerCase().trim();

    return currentData.filter((item) => {
      // Student tab
      if (activeTab === "students") {
        const classMatch = item.classId === selectedClass;

        const searchMatch =
          !searchValue ||
          item.name?.toLowerCase().includes(searchValue) ||
          String(item.id).includes(searchValue) ||
          item.className?.toLowerCase().includes(searchValue);

        return classMatch && searchMatch;
      }

      // Teacher tab
      if (activeTab === "teachers") {
        return (
          !searchValue ||
          item.name?.toLowerCase().includes(searchValue) ||
          String(item.id).includes(searchValue)
        );
      }

      // Staff tab (Static)
      return true;
    });
  }, [currentData, selectedClass, activeTab, search]);

  // TOTAL PAGES
  const totalPages = Math.ceil(filteredData.length / studentsPerPage);

  // PAGINATION DATA
  const paginatedData = filteredData.slice(
    (page - 1) * studentsPerPage,
    page * studentsPerPage
  );

  return (
    <div className="card border-0 shadow-sm rounded-4 p-4 bg-light mt-4">
      {/* HEADER */}
      <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
        {/* TITLE */}
        <h5 className="mb-0 text-danger-subtle h6-alt">Attendance</h5>

        {/* RIGHT SIDE */}
        <div className="d-flex flex-wrap align-items-center gap-2">
          {/* TABS */}
          <div className="d-flex bg-dark-light p-1 rounded-3">
            {attendanceTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.value);
                  setPage(1);
                }}
                className={`btn btn-sm px-4 py-2 border-0 rounded-2 ${activeTab === tab.value
                  ? "bg-secondary shadow-sm text-danger-subtle"
                  : "text-danger body-xs-bold"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === "students" && (
            // <DropdownBtn
            //   value={selectedClass}
            //   setValue={(value) => {
            //     setSelectedClass(value);
            //     setPage(1);
            //   }}
            //   options1={attendanceFilters.classOptions}
            // />
            <DropdownBtn
              value={selectedClass}
              setValue={(value) => {
                setSelectedClass(value);
                setPage(1);
              }}
              options1={classes.map((item) => ({
                value: String(item.ClassID),
                label: item.ClassName,
              }))}
            />
          )}

          {/* MONTH FILTER */}
          <DropdownBtn
            text1={year}
            setValue={setYear}
            options1={attendanceFilters.monthOptions}
          />
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="d-flex align-items-center justify-content-center py-5">
          <h6 className="text-muted mb-0">No attendance data found</h6>
        </div>
      ) : (
        <>
          {/* TABLE */}
          <div className="table-responsive w-100 rounded-4">
            <table
              className="table table-hover align-middle mb-0 w-100"
              style={{
                borderCollapse: "separate",
                borderSpacing: 0,
              }}
            >
              {/* TABLE HEAD */}
              <thead className="bg-white sticky-top" style={{ top: 0, zIndex: 2 }}>
                <tr>
                  {/* NAME COLUMN */}
                  <th className="text-dark cap-md-med py-3 px-3 bg-white">
                    {activeTab === "students"
                      ? "Student"
                      : activeTab === "teachers"
                        ? "Teacher"
                        : "Staff"}
                    <span className="ms-1 small opacity-50">
                      <HiArrowsUpDown />
                    </span>
                  </th>

                  {/* DYNAMIC DATE COLUMNS */}
                  {dynamicDateColumns.map((col) => (
                    <th
                      key={col.id}
                      className="text-center py-3 px-2 bg-white"
                      style={{
                        minWidth: "70px",
                      }}
                    >

                      <div className="text-dark cap-md-med">
                        {col.label}
                      </div>

                    </th>
                  ))}
                </tr>
              </thead>

              {/* TABLE BODY */}
              <tbody>
                {paginatedData.map((item) => (
                  <tr key={item.id} className="border">
                    {/* USER INFO */}
                    <td className="py-3 px-3 bg-light" style={{ minWidth: "220px" }}>
                      <div className="d-flex">
                        <span className="text-danger cap-lg-med">
                          {item.studentId || item.id || item.staffId}
                          {" — "}
                        </span>
                        <span className="text-dark cap-lg-med">{item.name}</span>
                      </div>
                    </td>

                    {/* DYNAMIC ATTENDANCE CELLS */}
                    {dynamicDateColumns.map((col) => {
                      const status = item.attendance ? item.attendance[col.dateKey] : undefined;



                      return (
                        <td
                          key={col.id}
                          className="text-center bg-light py-3"
                          style={{ minWidth: "85px" }}
                        >

                          {/* PRESENT */}
                          {status === "present" && (
                            <div
                              className="text-light bg-warning-light rounded-circle d-flex align-items-center justify-content-center mx-auto"
                              style={{
                                width: "22px",
                                height: "22px",
                              }}
                            >
                              <Check size={12} strokeWidth={3} />
                            </div>
                          )}

                          {/* ABSENT */}
                          {status === "absent" && (
                            <div
                              className="text-light bg-success-light rounded-circle d-flex align-items-center justify-content-center mx-auto"
                              style={{ width: "22px", height: "22px" }}
                            >
                              <X size={12} strokeWidth={3} />
                            </div>
                          )}

                          {/* LATE */}
                          {status === "late" && (
                            <div
                              className="text-light bg-primary rounded-circle d-flex align-items-center justify-content-center mx-auto"
                              style={{
                                width: "22px",
                                height: "22px",
                              }}
                            >
                              <Check size={12} strokeWidth={3} />
                            </div>
                          )}

                          {(status === "holiday" || !status) && (
                            <span className="text-danger">—</span>
                          )}
                        </td>
                      );
                    })}


                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* PAGINATION */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mt-4 gap-3">

            <div className="text-muted small">

              Showing{" "}
              {(page - 1) * studentsPerPage + 1}

              {" - "}

              {Math.min(
                page * studentsPerPage,
                filteredData.length
              )}

              {" "}of {filteredData.length} results

            </div>

            <SmartPagination
              page={page}
              setPage={setPage}
              totalPages={totalPages}
            />

          </div>
        </>
      )}
    </div>
  );
}



