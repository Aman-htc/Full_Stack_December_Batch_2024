"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Row, Col, Card, Button, Badge, Dropdown } from "react-bootstrap";
import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/breadcrum";
import StudentsTable from "@/app/components/students/StudentsTable";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  getAcademicChartOptions,
  getAcademicChartSeries,
  getEnrollmentChartOptions,
  getEnrollmentChartSeries,
  getAttendanceChartOptions,
  getAttendanceChartSeries,
} from "@/app/utils/students/studentChartOptions";
import { FiEdit2, FiMoreHorizontal, FiTrash2 } from "react-icons/fi";
import {
  studentPageInfo,

  academicPerformance,
  enrollmentTrends,
  attendanceOverview,

} from "../../data/studentsData";

import studentsIcon from "../../../assets/icons/Student.svg";
import grade7Icon from "../../../assets/icons/NumberCircleSeven.svg";
import grade8Icon from "../../../assets/icons/NumberCircleEight.svg";
import grade9Icon from "../../../assets/icons/Vector.svg";
import ChartCard from "@/app/components/students/chartcard";
import { addSpecialProgram, deleteSpecialProgram, deleteStudent, getAcademicPerformance, getAllSpecialPrograms, getEnrollmentTrends, getStats, getStudentAttendanceOverview, getStudents, updateSpecialProgram } from "@/services/studentService";
import SpecialProgramModal from "@/app/components/students/SpecialProgramAdd";
import StudentEditModal from "@/app/components/students/EditStudent";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { handleDelete } from "@/app/components/Deletehandle";

// const ChartCard = dynamic(() => import("@/app/components/ChartCard"), {
//   ssr: false,
//   loading: () => <div className="chart-card-loader rounded-4 bg-white" />,
// });

const icons = {
  students: studentsIcon,
  grade7: grade7Icon,
  grade8: grade8Icon,
  grade9: grade9Icon,
};

const getIcon = (icon) => icons[icon]?.src || icons[icon] || studentsIcon?.src;

const getStatusStyle = (status = "") => {
  if (status === "Active") {
    return {
      backgroundColor: "#45c4a2",
      color: "#ffffff",
    };
  }

  if (status === "On Leave") {
    return {
      backgroundColor: "#15456F",
      color: "#ffffff",
    };
  }

  if (status === "Inactive") {
    return {
      backgroundColor: "#dc3545",
      color: "#ffffff",
    };
  }

  return {
    backgroundColor: "#6c757d",
    color: "#ffffff",
  };
};


const getPerformanceClass = (performance = "") => {
  if (performance === "Needs Support") return "performance-badge--support";
  if (performance === "At Risk") return "performance-badge--risk";
  return "performance-badge--good";
};

export default function StudentsPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("idToken");

    if (!token) {
      router.push("/signin");
    }
  }, []);



  const [showProgramModal, setShowProgramModal] = useState(false);
  const [editData, setEditData] = useState(null);



  const [globalFilter, setGlobalFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sorting, setSorting] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [students, setStudent] = useState([])
  // edit from 
  const [showEditModal, setShowEditModal] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [programdata, setProgramdata] = useState([])
  const [stats, setStats] = useState([])
  const [enrollment, setEnrollment] = useState([]);
  const [period, setPeriod] = useState("Last 5 Years");
  const [studentStatsData, setStudentStatsData] = useState([
    {
      id: 1,
      title: "Total Students",
      key: "TotalStudents",
      icon: "students",
      iconBgColor: "#FFCDFD",
    },
    {
      id: 2,
      title: "Grade 7 Students",
      key: "Class7Students",
      icon: "grade7",
      iconBgColor: "#CEEAF1",
    },
    {
      id: 3,
      title: "Grade 8 Students",
      key: "Class8Students",
      icon: "grade8",
      iconBgColor: "#15456F",
    },
    {
      id: 4,
      title: "Grade 9 Students",
      key: "Class9Students",
      icon: "grade9",
      iconBgColor: "#FFCDFD",
    }
  ]);




  const handleEdit = (student) => {
   
    setEditStudent(student);
    setShowEditModal(true);
  };



  const fetchStudents = async () => {
    try {

      const response = await getStudents();


      setStudent(response.data);
    } catch (error) {
      console.log("FULL ERROR =>", error);

    }
  };

  const fetchPrograms = async () => {
    try {
      const programdata = await getAllSpecialPrograms();



      setProgramdata(programdata.data || []);
    } catch (error) {
      console.error("Program API failed", error);
      setProgramdata([]);
    }
  };


  const fetchStats = async () => {
    try {
      const statsdata = await getStats();

      setStats(statsdata.data || {});
    } catch (error) {
      console.error(error);
      setStats({});
    }
  };

  const fetchEnrolmentCharts = async (selectedPeriod) => {
    try {
      const res = await getEnrollmentTrends(selectedPeriod);
      setEnrollment(res.data || []);
    } catch (error) {
      console.log(error);
      setEnrollment([]);
    }
  };
  useEffect(() => {

    fetchPrograms();
    fetchStudents();
    fetchStats()
  }, []);


  useEffect(() => {
    fetchEnrolmentCharts(period);
  }, [period]);


  useEffect(() => {
    if (!stats) return;

    const updated = studentStatsData.map((item) => ({
      ...item,
      value: stats?.[item.key] ?? 0,
    }));

    setStudentStatsData(updated);
  }, [stats]);



  const handleSaveProgram = async (payload) => {
    try {
      if (editData) {
        await updateSpecialProgram(
          editData.ProgramID,
          payload
        );

        toast.success("Program updated successfully");
        fetchPrograms()
        setShowProgramModal(false);
      } else {
        await addSpecialProgram(payload);

        toast.success("Program added successfully");
        setShowProgramModal(false);
        fetchPrograms()
      }
    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail ||
        "Failed to save program"
      );
    }
  };


  // ----------------------------

  const filteredStudents = useMemo(() => {
    if (statusFilter === "All Status") return students;
    return students.filter((student) => student.status === statusFilter);
  }, [statusFilter, students]);


  
  const globalSearchFilter = (row, columnId, filterValue) => {
    const search = String(filterValue || "").toLowerCase().trim();
    const student = row.original;

    return (
      String(student.StudentName || "").toLowerCase().includes(search) ||
      String(student.StudentID || "").toLowerCase().includes(search) ||
      String(student.ClassName || "").toLowerCase().includes(search) ||
      String(student.Status || "").toLowerCase().includes(search) ||
      String(student.Performance || "").toLowerCase().includes(search) ||
      String(student.GPA || "").toLowerCase().includes(search)
    );
  };

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Student",
        cell: ({ row }) => {
          const student = row.original;

          return (
            <div className="d-flex align-items-center gap-2">
              <span className="student-avatar bg-secondary" />

              <div>
                <h4 className="body-xs-bold mb-0 text-danger-subtle">
                  {student.StudentName}
                </h4>
                <p className="cap-md-reg mb-0 text-secondary-dark">
                  {student.StudentID}

                </p>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "ClassName",
        header: "Class",
      },
      {
        accessorKey: "GPA",
        header: "GPA",
        cell: ({ getValue }) => (
          <span className="fw-bold text-warning">{getValue()}</span>
        ),
      },
      {
        accessorKey: "Performance",
        header: "Performance",
        cell: ({ getValue }) => {
          const performance = getValue();

          return (
            <span
              className={`performance-badge ${getPerformanceClass(
                performance
              )}`}
            >
              <span className="performance-badge__dot" />
              {performance}
            </span>
          );
        },
      },
      {
        accessorKey: "AttendancePercentage",
        header: "Attendance",
        cell: ({ getValue }) => (
          <div className="attendance-cell d-flex align-items-center gap-2">
            <span className="attendance-ring" />
            <span>{getValue()}%</span>
          </div>
        ),
      },
      {
        accessorKey: "Status",
        header: "Status",
        cell: ({ getValue }) => (
          <Badge
            bg=""
            className="rounded-pill px-4 py-2 border-0"
            style={getStatusStyle(getValue())}
          >
            {getValue()}
          </Badge>
        ),
      },
      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => (
          <div className="d-flex">


            <Button
              size="sm"
              variant=""
              onClick={(e) => {
                e.stopPropagation();
                handleEdit(row.original);
              }}
            >
              <FiEdit2 size="8px" />
            </Button>
            <Button
              size="sm"
              variant=""


              onClick={(e) => {
                e.stopPropagation();
                handleDelete({
                  id: row.original.StudentID,
                  deleteApi: deleteStudent,
                  title: `${row.original.StudentName} will be deleted permanently!`,
                  successMessage: "Student deleted successfully",
                  onSuccess: fetchStudents
                });
              }}

            >
              <FiTrash2 />
            </Button>
          </div>

        ),
      }


    ],
    []
  );

  const table = useReactTable({
    data: filteredStudents,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    globalFilterFn: globalSearchFilter,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const pageCount = table.getPageCount();

  useEffect(() => {
    table.setPageIndex(page - 1);
  }, [page, table]);

  useEffect(() => {
    table.setPageSize(pageSize);
    table.setPageIndex(0);
    setPage(1);
  }, [pageSize, table]);



  const enrollmentChartOptions = useMemo(
    () => getEnrollmentChartOptions(enrollment),
    [enrollment]
  );

  const enrollmentChartSeries = useMemo(
    () => getEnrollmentChartSeries(enrollment),
    [enrollment]
  );




  const [selectedPeriod, setSelectedPeriod] = useState("This Semester");
  const [academicData, setAcademicData] = useState([]);


  const loadAcademicData = async (period) => {
    try {
      const res = await getAcademicPerformance(period);

     

      setAcademicData(res?.data || []);
    } catch (error) {
      console.error(error);
      setAcademicData([]);
    }
  };

  useEffect(() => {
    loadAcademicData(selectedPeriod);
  }, [selectedPeriod]);


  const academicChartOptions = useMemo(
    () => getAcademicChartOptions(academicData),
    [academicData]
  );

  const academicChartSeries = useMemo(
    () => getAcademicChartSeries(academicData),
    [academicData]
  );



  const [overview, setAttendanceOverview] = useState([])
  const [peoverview, setPreoverview] = useState('This Week')


  const fetchAttendanceOverview = async (period) => {
    try {
      const res = await getStudentAttendanceOverview(period);

      

      setAttendanceOverview(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAttendanceOverview(peoverview);
  }, [peoverview]);


  const attendanceChartOptions = useMemo(
    () => getAttendanceChartOptions(overview),
    [overview]
  );

  const attendanceChartSeries = useMemo(
    () => getAttendanceChartSeries(overview),
    [overview]
  );


  return (
    <Container fluid className="students-page px-0 bg-body">
      <Header text="Students" search={globalFilter}
        setSearch={setGlobalFilter} />


      <div className="d-flex align-items-center gap-3 mb-3">
        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Student " },
          ]}
        />
      </div>

      <Row className="g-3 mx-0 students-first-row align-items-stretch py-3">
        <Col xs={12} md={12} xl={4}>
          <Row className="g-3 h-100">
            {studentStatsData.map((item) => (
              <Col xs={6} md={3} xl={6} key={item.id}>
                <Card
                  className={`student-stat student-stat--${item.icon} border-0 rounded-4 shadow-sm h-100`}
                >
                  <Card.Body className="student-stat__body">
                    <div className="d-flex justify-content-end">
                      <span className={`student-stat__icon icon-bg--${item.icon} 
                      rounded-5  d-flex align-items-center justify-content-center `} style={{ backgroundColor: item.iconBgColor }}
                      >
                        <img src={getIcon(item.icon)} alt={item.title} />
                      </span>
                    </div>
                    <div className="student-stat__content">
                      <h3 className="h2 mb-1 text-danger-subtle">
                        {item.value}
                      </h3>
                      <p className="body-xs-reg mb-0 text-secondary-dark">
                        {item.title}
                      </p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={12} md={8} xl={5}>
          {/* <ChartCard
            title="Academic Performance"
            dropdownOptions={["Last Semester", "This Semester", "Last Month", "This Month"]}
            defaultDropdownValue="Last Semester"
            options={academicChartOptions}
            series={academicChartSeries}
            type="bar"
            height={245}
            chartClassName="academic-chart"
          /> */}
          <ChartCard
            title="Academic Performance"
            dropdownOptions={[

              "This Semester",
              "Last Semester",
              "Last Month",
              "This Month",
            ]}
            defaultDropdownValue={selectedPeriod}
            onDropdownChange={setSelectedPeriod}
            options={academicChartOptions}
            series={academicChartSeries}
            type="bar"
            height={245}
            chartClassName="academic-chart"
          />


        </Col>

        <Col xs={12} md={4} xl={3}>

          <ChartCard
            title="Enrollment Trends"
            dropdownOptions={[
              "Last 5 Years",
              "Last 3 Years",
              "This Year"
            ]}
            defaultDropdownValue={period}
            onDropdownChange={(value) => setPeriod(value)}
            options={enrollmentChartOptions}
            series={enrollmentChartSeries}
            type="area"
            height={230}
          />

        </Col>
      </Row>

      <Row className="g-3 mx-0 mt-1 students-second-row align-items-stretch">
        <Col xs={12} md={12} xl={8} className="order-2 order-xl-1">
          <Card className="border-0 rounded-4 shadow-sm bg-white h-100">
            <Card.Body className="d-flex flex-column">

              <StudentsTable
                title="Students"
                table={table}
                columns={columns}
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                pageCount={pageCount}
                filteredData={filteredStudents}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                filters={[
                  {
                    value: statusFilter,
                    onChange: setStatusFilter,
                    options: ["All Status", "Active", "On Leave", "Inactive"],
                  },
                ]}
                searchPlaceholder="Search for a student"
                addButtonText={studentPageInfo.addButtonText}
                addButtonHref="/students/add"
                emptyMessage="No students found"
                onRowClick={(id) => router.push(`/students/${id}`)}

              />

              <StudentEditModal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
                student={editStudent}
                onSuccess={() => {
                  setShowEditModal(false);
                  fetchStudents();
                }}
              />


            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={12} xl={4} className="order-1 order-xl-2">
          <Row className="g-3 h-100">
            <Col xs={12} md={6} xl={12}>
              <ChartCard
                title="Attendance Overview"

                dropdownOptions={["This Month", "This Week", "Last Month"]}
                defaultDropdownValue={peoverview}
                onDropdownChange={setPreoverview}
                options={attendanceChartOptions}
                series={attendanceChartSeries}
                type="bar"
                height={260}
              />
            </Col>

            <Col xs={12} md={6} xl={12}>
              <Card className="border-0 rounded-4 shadow-sm bg-white h-100">
                <Card.Body>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h2 className="card-heading mb-0">Special Programs</h2>





                    {/* </Button> */}
                    <Dropdown align="end" className="action-dropdown">

                      <Dropdown.Toggle
                        variant=""
                        bsPrefix="p-0"
                        className="action-toggle  d-flex align-items-center justify-content-center"
                        id="dropdown-icon"
                      >
                        <FiMoreHorizontal className="text-muted" size={18} />
                      </Dropdown.Toggle>

                      <Dropdown.Menu
                        className="shadow border-0 rounded-3 py-1 action-menu"
                      >
                        <Dropdown.Item
                          onClick={() => {
                            setEditData(null);
                            setShowProgramModal(true);
                          }}
                          className="small px-3 py-2"
                        >
                          Add
                        </Dropdown.Item>
                      </Dropdown.Menu>

                    </Dropdown>
                  </div>

                  <div className="d-flex flex-column gap-3">
                    {programdata.map((program) => (
                      <div
                        className="program-item d-flex align-items-center gap-3"
                        key={program.
                          ProgramID
                        }
                      >
                        <span className="program-avatar bg-secondary" />

                        <div className="flex-grow-1">
                          <h4 className="body-xs-bold mb-0 text-danger-subtle">
                            {program.StudentName}
                          </h4>
                          <p className="cap-md-reg mb-0 text-secondary-dark">
                            {program.SectionName
                            } • {program.ClassName
                            }
                          </p>
                        </div>

                        <div className="text-end program-right">
                          <strong className="cap-md-bold text-warning">
                            {program.ProgramType}
                          </strong>

                          <p className="cap-lg-med mb-0 text-dark">
                            {program.ProgramName}
                          </p>
                        </div>
                        <div className="d-flex gap-0 p-0">
                          <Button variant="" className="p-0" onClick={() => {
                            setEditData(program);
                            setShowProgramModal(true);
                          }}  >
                            <FiEdit2 size={8} />


                          </Button>

                          <Button
                            variant=""
                            className="p-0 ms-2"
                            // onClick={() => handleDeleteProgram(program)}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete({
                                id: program.ProgramID,
                                deleteApi: deleteSpecialProgram,
                                title: `${program.ProgramName} will be deleted permanently!`,
                                successMessage: "program deleted successfully",
                                onSuccess: fetchPrograms
                              });
                            }}
                          >
                            <FiTrash2 size={8} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>

              <SpecialProgramModal
                show={showProgramModal}
                onHide={() => setShowProgramModal(false)}
                editData={editData}
                students={students}
                onSave={handleSaveProgram}
              />

            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
