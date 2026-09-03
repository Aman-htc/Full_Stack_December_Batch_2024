"use client";

import dynamic from "next/dynamic";
import { useState, useMemo, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import {
    Container,
    Row,
    Col,
    Card,
    Button,
    Badge,
    Table,
    Dropdown,
    Toast,
} from "react-bootstrap";
import {
    FiDownload,
    FiFileText,
    FiUser,
    FiCalendar,
    FiPhone,
    FiMapPin,
    FiAward,
    FiSun,
    FiMoreHorizontal,
    FiEdit2,
    FiTrash2,
} from "react-icons/fi";

import { FaUserGraduate } from "react-icons/fa";
import { LuWaves, LuBot } from "react-icons/lu";
import SunIcon from "../../../../assets/icons/sun.svg";
import ScholarshipIcon from "../../../../assets/icons/first.svg";

// import { GiDancingMan } from "react-icons/gi";   // ← replaces dance.svg (no SVGR needed)

import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/breadcrum";
import {
    addBehaviorLog,
    addClub,
    addScholarship,
    deleteBehaviorLog,
    deleteClub,
    deleteScholarship,
    getBehaviorLogs,
    getScholarshipsByStudentId,
    updateBehaviorLog,
    updateClub,
    updateScholarship,
} from "@/services/studentService";


import {
    studentProfile,
    parentGuardianInfo,
    studentDocuments,
    studentCalendar,
    scholarships,
    healthMedicalInfo,
    academicPerformanceScore,
    academicPerformanceChart,
    extracurricularActivities,
    behaviorDisciplineLog,
} from "../../../data/studentDetailsData";

import {
    getScoreRadialOptions,
    getScoreRadialSeries,
    getStudentDetailsAcademicBarOptions,
    getStudentDetailsAcademicBarSeries,
} from "../../../utils/students/studentChartOptions";
import StudentsTable from "@/app/components/students/StudentsTable";

import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel,
} from "@tanstack/react-table";
import StudentClubModal from "@/app/components/students/ExtracurricularAdd";
import ScholarshipModal from "@/app/components/students/ScholarshipAdd";
import { getClubsByStudentId, getStudentById } from "@/services/studentService";
import { useParams } from "next/navigation";
import BehaviorLogModal from "@/app/components/students/AddBehavior";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import Documents from "@/app/components/teachers/teacherdocuments";
import { addDocument, createAttendance, deleteDocument, getTeacherDocumentById } from "@/services/teacherService";
import AttendanceModal from "@/app/components/attendance/AttendanceModal";
import { getAttendanceCalendar } from "@/services/attendanceService";



const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

/* ── month name → JS month index ───────────────────────── */
const monthMap = {
    January: 0, February: 1, March: 2, April: 3,
    May: 4, June: 5, July: 6, August: 7,
    September: 8, October: 9, November: 10, December: 11,
};

/* ── activity-icon helper ───────────────────────────────── */
const getActivityIcon = (icon = "") => {
    if (icon === "Swimming") return <LuWaves size={16} />;
    // if (icon === "Dance") return <GiDancingMan size={16} />;
    if (icon === "Robotics") return <LuBot size={16} />;
    return <FaUserGraduate size={16} />;
};
const getScholarshipIcon = (index) => {
    if (index === 0) {
        return (
            <img
                src={typeof ScholarshipIcon === "string" ? ScholarshipIcon : ScholarshipIcon.src}

                alt="Scholarship "
                width={22}
                height={22}
                className="scholarship-icon-img bg-"
            />
        );
    }

    if (index === 1) {
        return (
            <img
                src={typeof SunIcon === "string" ? SunIcon : SunIcon.src}
                alt="Scholarship"
                width={22}
                height={22}
                className="scholarship-icon-img "
            />
        );
    }

    return <FiAward size={22} />;
};


/* ═══════════════════════════════════════════════════════════ */
export default function StudentDetailsPage() {
    const { id } = useParams();

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [clubdata, setClubdata] = useState([])
    const [scholarship, setSchohiplars] = useState([])
    const [behavior, setBehavior] = useState([])
    const [documents, setDocuments] = useState([]);
    const [showAttendanceModal, setShowAttendanceModal] = useState(false);
    const [search, setSearch] = useState("");


    // const filteredBehavior = behavior.filter((item) =>
    //     item.LogType?.toLowerCase().includes(search.toLowerCase()) ||
    //     item.ReportedBy?.toLowerCase().includes(search.toLowerCase()) ||
    //     item.ActionTaken?.toLowerCase().includes(search.toLowerCase())



    // );
    // const filteredBehavior = behavior;
    const filteredBehavior = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        if (!keyword) return behavior;

        return behavior.filter((item) => {
            return (
                (item.LogType ?? "").toLowerCase().includes(keyword) ||
                (item.ReportedBy ?? "").toLowerCase().includes(keyword) ||
                (item.ActionTaken ?? "").toLowerCase().includes(keyword)
            );
        });
    }, [behavior, search]);
    
    const filteredClub = useMemo(() => {
        const keyword = search.trim().toLowerCase();

        if (!keyword) return clubdata ;

        return behavior.filter((item) => {
            return (
                (item.Achievements ?? "").toLowerCase().includes(keyword) ||
                (item.ClubName ?? "").toLowerCase().includes(keyword) ||
                (item.AdvisorName ?? "").toLowerCase().includes(keyword)
            );
        });
    }, [clubdata, search]);
    

    const today = new Date();

    const [selectedDate, setSelectedDate] = useState(today);

    const [activeStartDate, setActiveStartDate] = useState(
        new Date(today.getFullYear(), today.getMonth(), 1)
    );



    const fetchStudentInfo = async () => {
        try {
            const data = await getStudentById(id);
            setStudent(data);
        } catch (err) {
            console.log("Student API Error:", err);
        }
    };

    const fetchClubs = async () => {
        try {
            const clubData = await getClubsByStudentId(id);
            setClubdata(clubData.data || []);
        } catch (err) {
            console.log("Club API Error:", err);
            setClubdata([]);
        }
    };

    const fetchScholarships = async () => {
        try {
            const scholarshipData = await getScholarshipsByStudentId(id);
            setSchohiplars(scholarshipData.data || []);
        } catch (err) {
            console.log("Scholarship API Error:", err);
            setSchohiplars([]);
        }
    };

    const fetchBehaviorLogs = async () => {
        try {
            const behaviorData = await getBehaviorLogs(id);
            console.log('behavor', behaviorData)
            setBehavior(behaviorData.data || []);
        } catch (err) {
            console.log("Behavior API Error:", err);
            setBehavior([]);
        }
    };
    const fetchDocuments = async () => {
        try {
            const docs = await getTeacherDocumentById('Student', id);
            setDocuments(docs.data || []);
        } catch (err) {
            setDocuments([]);
        }
    };


    useEffect(() => {
        if (!id) return;

        const loadData = async () => {
            setLoading(true);

            await Promise.all([
                fetchDocuments(),
                fetchStudentInfo(),
                fetchClubs(),
                fetchScholarships(),
                fetchBehaviorLogs(),
            ]);

            setLoading(false);
        };

        loadData();
    }, [id]);


    const [showClubModal, setShowClubModal] = useState(false);
    const [selectedClub, setSelectedClub] = useState(null);
    const [showScholarshipModal,
        setShowScholarshipModal] =
        useState(false);

    const [selectedScholarship,
        setSelectedScholarship] =
        useState(null);


    /* ── calendar state ─────────────────────────────────── */
    // const initialDate = new Date(
    //     Number(studentCalendar.year),
    //     monthMap[studentCalendar.month],
    //     1
    // );
    // const [selectedDate, setSelectedDate] = useState(initialDate);
    // const [activeStartDate, setActiveStartDate] = useState(initialDate);

    /* ── chart config ───────────────────────────────────── */
    const scoreRadialOptions = getScoreRadialOptions(academicPerformanceScore);
    const scoreRadialSeries = getScoreRadialSeries(academicPerformanceScore);
    const academicBarOptions = getStudentDetailsAcademicBarOptions(academicPerformanceChart);
    const academicBarSeries = getStudentDetailsAcademicBarSeries(academicPerformanceChart);

    /* ── calendar heading (e.g. "March 2035") ──────────── */
    const calendarHeading = activeStartDate.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
    });


    /* ── month navigation ───────────────────────────────── */
    const handlePrevMonth = () =>
        setActiveStartDate((prev) => {
            const d = new Date(prev.getFullYear(), prev.getMonth() - 1, 1);
            setSelectedDate(d);
            return d;
        });

    const handleNextMonth = () =>
        setActiveStartDate((prev) => {
            const d = new Date(prev.getFullYear(), prev.getMonth() + 1, 1);
            setSelectedDate(d);
            return d;
        });



    const [calendar, seCalendar] = useState({});

    const getattendance = async (id, year, month) => {
        try {
            const response = await getAttendanceCalendar("Student",
                id,
                year,
                month
            );


            seCalendar(response.data)
        } catch (error) {
            console.log("Error:", error);
            console.log("errrdata", error.response.data)

        }
    };

    useEffect(() => {
        if (id) {
            getattendance(
                id,
                activeStartDate.getFullYear(),
                activeStartDate.getMonth() + 1
            );
        }
    }, [id, activeStartDate]);


    const getCalendarTileClass = ({ date, view }) => {
        if (view !== "month") return "";

        const isSameMonth =
            date.getMonth() === activeStartDate.getMonth() &&
            date.getFullYear() === activeStartDate.getFullYear();

        if (!isSameMonth) return "";

        const status =
            calendar?.dates?.find(
                (item) => item.date === date.getDate()
            )?.status ?? "";

        switch (status) {
            case "present":
                return "calendar-status-present";

            case "late":
                return "calendar-status-late";

            case "sick":
                return "calendar-status-sick";

            case "absent":
                return "calendar-status-absent";

            case "onLeave":
                return "calendar-status-onLeave";

            default:
                return "";
        }
    };


    const [behaviorGlobalFilter, setBehaviorGlobalFilter] = useState("");
    const [behaviorSorting, setBehaviorSorting] = useState([]);
    const [behaviorPage, setBehaviorPage] = useState(1);
    const [behaviorPageSize, setBehaviorPageSize] = useState(5);
    const [showBehaviorModal, setShowBehaviorModal] =
        useState(false);

    const [selectedBehaviorLog, setSelectedBehaviorLog] =
        useState(null);

    const handleEdit = (item) => {

        setSelectedBehaviorLog(item);
        setShowBehaviorModal(true);
    };


    const behaviorColumns = useMemo(
        () => [
            {
                accessorKey: "LogDate",
                header: "Date",
                cell: ({ getValue }) => (
                    <span className="body-xs-med text-dark">
                        {getValue()}
                    </span>
                ),
            },
            {
                accessorKey: "filteredBehavior",
                header: "Type & Details",
                cell: ({ row }) => {
                    const item = row.original;

                    return (
                        <div>
                            <strong className="body-xs-bold text-dark d-block">
                                {item.LogType}
                            </strong>

                            <span className="cap-md-reg text-secondary-dark">
                                {item.
                                    Description
                                }
                            </span>
                        </div>
                    );
                },
            },
            {
                accessorKey: "ReportedBy",

                header: "Reported By",
                cell: ({ getValue }) => (
                    <span className="body-xs-med text-dark">
                        {getValue()}
                    </span>
                ),
            },
            {
                accessorKey: "ActionTaken",

                header: "Status/Action",
                cell: ({ getValue }) => {
                    const value = getValue();

                    if (value === "Record Recognition" || value === "Issue Warning") {
                        return (
                            <select className="behavior-action-select">
                                <option>{value}</option>
                            </select>
                        );
                    }

                    return (
                        <Badge
                            bg="primary"
                            className="behavior-action-badge text-danger-subtle border-0 rounded-2"
                        >
                            {value}
                        </Badge>
                    );
                },
            },
            {
                id: "actions",
                header: "Action",
                cell: ({ row }) => (
                    <div className="d-flex">


                        <Button
                            size="sm"
                            variant=""
                            onClick={() => {

                                handleEdit(row.original);
                            }}
                        >
                            <FiEdit2 size="8px" />
                        </Button>
                        <Button
                            size="sm"
                            variant=""
                            onClick={() =>
                                handleDelete({

                                    id: row.original.LogID,

                                    deleteApi: deleteBehaviorLog,
                                    title: "Behavior Log will be deleted",
                                    successMessage: "Behavior Log deleted successfully",
                                })
                            }
                        >
                            <FiTrash2 />
                        </Button>
                    </div>

                ),
            }
        ],
        []
    );


    const behaviorTable = useReactTable({
        // data: behaviorDisciplineLog,
        data: filteredBehavior,
        columns: behaviorColumns,
        state: {
            globalFilter: behaviorGlobalFilter,
            sorting: behaviorSorting,
        },
        initialState: {
            pagination: {
                pageIndex: 0,
                pageSize: behaviorPageSize,
            },
        },
        onGlobalFilterChange: setBehaviorGlobalFilter,
        onSortingChange: setBehaviorSorting,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    useEffect(() => {
        behaviorTable.setPageIndex(behaviorPage - 1);
    }, [behaviorPage, behaviorTable]);

    useEffect(() => {
        behaviorTable.setPageSize(behaviorPageSize);
        behaviorTable.setPageIndex(0);
        setBehaviorPage(1);
    }, [behaviorPageSize, behaviorTable]);

    // ----------------
    // Club handal funcation 
    const handleSaveClub = async (data) => {
        try {
            if (selectedClub?.ClubID) {
                await updateClub(selectedClub.ClubID, data);

                toast.success('Updated successfully')
                fetchClubs()


            } else {
                await addClub(data);

                toast.success('Add successfully')
                fetchClubs()
            }

            setShowClubModal(false);
            setSelectedClub(null);

        } catch (error) {
            console.error(error);
            console.log(
                JSON.stringify(
                    error.response?.data,
                    null,
                    2
                )
            );
            console.log("Full Error =>", error);

        }
    };


    // Scholarship handal funcation 
    const handleSaveScholarship = async (
        data
    ) => {
        try {
            if (
                selectedScholarship?.ScholarshipID
            ) {
                await updateScholarship(
                    selectedScholarship
                        .ScholarshipID,
                    data
                );
                fetchScholarships()


                toast.success('Scholarship updated successfully')
            } else {
                await addScholarship(data);

                toast.success('Scholarship add successfully')
                fetchScholarships()
            }

            setShowScholarshipModal(false);
            setSelectedScholarship(null);

        } catch (error) {
            console.error(error);

            console.log(
                JSON.stringify(
                    error.response?.data,
                    null,
                    2
                )
            );
        }
    };

    // Behavior handal funcation 
    const handleSaveBehaviorLog = async (payload) => {
        console.log("Behavior Payload =>", payload);
        console.log("Selected =>", selectedBehaviorLog);

        try {



            if (selectedBehaviorLog?.LogID


            ) {
                console.log('id', selectedBehaviorLog.LogID

                )



                await updateBehaviorLog(
                    selectedBehaviorLog?.
                        LogID
                    ,
                    payload

                );
                fetchBehaviorLogs()

                // console.log("Behavior Updated");
                toast.success('Behavior updated successfully')

            } else {

                await addBehaviorLog(payload);
                toast.success('Behavior add successfully')
                fetchBehaviorLogs()

                console.log("Behavior Added");
            }

            setShowBehaviorModal(false);
            setSelectedBehaviorLog(null);

            // getBehaviorLogs();

        } catch (error) {
            console.error(error);
            console.log("Error Data:", error.response?.data);

            console.log(
                JSON.stringify(
                    error.response?.data,
                    null,
                    2
                )
            );
        }

    };

    const handleDelete = async ({
        id,
        deleteApi,
        title = "Delete Record",
        successMessage = "Deleted successfully",
    }) => {

        const result = await Swal.fire({
            title: "Are you sure?",
            text: title,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#6c757d",
            confirmButtonText: "Yes, delete it!",
        });

        if (!result.isConfirmed) return;

        try {
            await deleteApi(id);

            await Swal.fire({
                icon: "success",
                title: "Deleted!",
                text: successMessage,
                timer: 1500,
                showConfirmButton: false,
            });
            fetchClubs()
            fetchScholarships()
            fetchBehaviorLogs()



        } catch (error) {
            console.log(error);

            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Delete failed",
            });
        }
    };



    /* ══════════════════════════════════════════════════════ */
    return (
        <Container fluid className="student-details-page bg-body  px-0 pb-8 ">
            <AttendanceModal
                show={showAttendanceModal}
                onHide={() => setShowAttendanceModal(false)}
                entity={student}
                entityIdKey="StudentID"
                ownerType="Student"
                addAttendance={createAttendance}
            />
            {/* <Header text="Student Details" search={search}
                setSearch={setSearch} /> */}
            <Header text="Student Details" search={search}
                setSearch={setSearch} />


            <div className="d-flex align-items-center gap-3 mb-3">
                <Breadcrumb
                    items={[
                        { label: "Dashboard", path: "/dashboard" },
                        { label: "Students", path: "/students" },
                        { label: "Student Details" },
                    ]}
                />
            </div>

            <Row className="g-3 mx-0 align-items-stretch">

                {/* ══ LEFT COLUMN ══════════════════════════════════════ */}
                <Col xs={12} md={6} xl={3} className="order-1">
                    <div className="d-flex flex-column gap-3 h-100">

                        {/* Profile card */}
                        <Card className="shadow-sm bg-white">
                            <Card.Body>
                                <div className="text-center mb-4">
                                    <div className="student-detail-avatar bg-secondary mx-auto mb-3" />
                                    <h2 className="h5 text-dark mb-1">{student?.data?.StudentName}</h2>
                                    <div className="d-flex align-items-center justify-content-center gap-2 flex-wrap">
                                        <Badge bg="bg-danger" className="bg-danger opacity-25 text-dark">
                                            {/* {studentProfile.studentId} */}
                                            {student?.data?.StudentID}

                                        </Badge>
                                        <Badge bg="bg-danger" className="bg-danger opacity-25 text-dark">

                                            {student?.data?.ClassName}
                                            {student?.data?.SectionName}

                                        </Badge>
                                        <Badge

                                            className="status-badge bg-warning-light text-white"
                                        >

                                            {student?.data?.Status}
                                        </Badge>
                                    </div>

                                    <Button
                                        className="btn-sm mt-2 bg-warning-light"
                                        onClick={() => setShowAttendanceModal(true)}
                                    >
                                        Attendance
                                    </Button>
                                </div>

                                <div className="d-flex flex-column  bg-danger bg-opacity-10  rounded-2 px-2">
                                    {[
                                        { icon: <FiUser size={14} />, label: "Gender", value: student?.data?.Gender },
                                        { icon: <FiCalendar size={14} />, label: "Date of Birth", value: student?.data?.DateOfBirth },
                                        { icon: <FiPhone size={14} />, label: "Phone Number", value: student?.data?.PhoneNumber },
                                        { icon: <FiMapPin size={14} />, label: "Address", value: student?.data?.AddressLine },
                                    ].map(({ icon, label, value }) => (
                                        <div
                                            key={label}
                                            className="detail-info-item d-flex align-items-start justify-content-between gap-3"
                                        >
                                            <span className="body-xs-reg text-secondary-dark d-inline-flex align-items-center gap-2">
                                                {icon} {label}
                                            </span>
                                            <strong className="body-xs-bold text-dark text-end">
                                                {value}
                                            </strong>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Parent / Guardian */}
                        <Card className="bg-light-gray bg-opacity-75  ">
                            <Card.Body className=" ">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h2 className="card-heading mb-0">Parent/Guardian Info</h2>
                                    <FiMoreHorizontal />
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    {[
                                        {
                                            relation: "Father",
                                            name: student?.data?.FatherName,
                                            phone: student?.data?.FatherPhone,
                                        },
                                        {
                                            relation: "Mother",
                                            name: student?.data?.MotherName,
                                            phone: student?.data?.MotherPhone,
                                        },
                                        {
                                            relation: "Alternative Guardian",
                                            name: student?.data?.GuardianName,
                                            phone: student?.data?.GuardianPhone,
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-danger bg-opacity-10 rounded-3 p-3 d-flex justify-content-between gap-3"
                                        >
                                            <span className="cap-md-reg text-secondary-dark">
                                                {item.relation}
                                            </span>

                                            <div className="text-end">
                                                <strong className="body-xs-bold text-dark d-block">
                                                    {item.name || "N/A"}
                                                </strong>

                                                <span className="cap-md-reg text-secondary-dark">
                                                    {item.phone || "N/A"}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>


                        <Documents
                            title="Documents"
                            entity={student}
                            entityIdKey="StudentID"
                            documents={documents}
                            refreshDocuments={fetchDocuments}
                            addDocument={addDocument}
                            deleteDocument={deleteDocument}
                            ownerType="Student"
                        />

                    </div>
                </Col>

                {/* ══ CENTRE COLUMN ════════════════════════════════════ */}
                <Col xs={12} xl={6} className="order-3 order-xl-2">
                    <div className="d-flex flex-column gap-3 h-100">

                        {/* Academic Performance */}
                        <Card className="shadow-sm bg-white">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                                    <h2 className="card-heading mb-0">Academic Performance</h2>
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        className="rounded-3 px-4 academic-filter-btn"
                                    >
                                        Last 6 Months
                                    </Button>
                                </div>
                                <Row className="g-4 align-items-center">
                                    <Col xs={12} md={5}>
                                        <div className="academic-score-box">
                                            <Chart
                                                options={scoreRadialOptions}
                                                series={scoreRadialSeries}
                                                type="radialBar"
                                                height={220}
                                            />
                                            <div className="bg-dark-light rounded-3 opcity-100 mt-3 pt-3">
                                                <p className=" cap-lg-reg   text-secondary-dark mb-0">
                                                    {academicPerformanceScore.comment}
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} md={7}>
                                        <Chart
                                            options={academicBarOptions}
                                            series={academicBarSeries}
                                            type="bar"
                                            height={285}
                                        />
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>

                        {/* Extracurricular */}
                        <Card className="shadow-sm bg-white">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h2 className="card-heading mb-0">Extracurricular</h2>
                                    {/* <FiMoreHorizontal /> */}
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
                                                    setSelectedClub(null);
                                                    setShowClubModal(true);
                                                }}
                                                className="small px-3 py-2"
                                            >
                                                Add
                                            </Dropdown.Item>
                                        </Dropdown.Menu>

                                    </Dropdown>
                                </div>
                                <div className="table-responsive">
                                    <Table className="details-table align-middle mb-0">
                                        <thead className="bg-body">
                                            <tr>
                                                <th>Club</th>
                                                <th>Achievements</th>
                                                <th>Duration</th>
                                                <th>Advisor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredClub.length > 0 ? (
                                                filteredClub.map((item) => (
                                                    <tr key={item.ClubID}>
                                                        <td>
                                                            <div className="d-flex align-items-center gap-2">
                                                                <span className="detail-circle-icon bg-primary">
                                                                    {getActivityIcon(item.icon)}
                                                                </span>
                                                                <div>
                                                                    <strong className="body-xs-bold text-dark d-block">
                                                                        {item.ClubName}
                                                                    </strong>
                                                                    <span className="cap-md-reg text-secondary-dark">
                                                                        {item.RoleOrPosition
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>{item.Achievements
                                                        }</td>
                                                        <td>{item.Duration
                                                        }</td>
                                                        <td>{item.AdvisorName
                                                        }</td>
                                                        <td>
                                                            <Button
                                                                variant=""
                                                                size="sm"
                                                                className="border-0"
                                                                onClick={() => {
                                                                    setSelectedClub(item);
                                                                    setShowClubModal(true);

                                                                }}>

                                                                <FiEdit2 />
                                                            </Button>
                                                        </td>
                                                        <td>
                                                            <Button
                                                                variant=""
                                                                onClick={() =>
                                                                    handleDelete({
                                                                        id: item.ClubID,
                                                                        deleteApi: deleteClub,
                                                                        title: `${item.ClubName} will be deleted`,
                                                                        successMessage: "Club deleted successfully",
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
                                                        No  Extracurricular
                                                        Details Available
                                                    </td>
                                                </tr>
                                            )}


                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <StudentClubModal
                                show={showClubModal}
                                onHide={() => setShowClubModal(false)}
                                editData={selectedClub}
                                student={student}
                                onSave={handleSaveClub}

                            />
                        </Card>

                        {/* Behavior & Discipline Log */}
                        <Card className="shadow-sm bg-white behavior-log-card">
                            <Button
                                onClick={() => {
                                    setSelectedBehaviorLog(null);
                                    setShowBehaviorModal(true);
                                }}
                            >
                                Add Behavior Log
                            </Button>
                            <Card.Body>
                                {behavior?.length > 0 ? (
                                    <StudentsTable
                                        title="Behavior & Discipline Log"
                                        table={behaviorTable}
                                        columns={behaviorColumns}
                                        page={behaviorPage}
                                        setPage={setBehaviorPage}
                                        pageSize={behaviorPageSize}
                                        setPageSize={setBehaviorPageSize}
                                        pageCount={1}
                                        filteredData={behaviorDisciplineLog}
                                        globalFilter={behaviorGlobalFilter}
                                        setGlobalFilter={setBehaviorGlobalFilter}
                                        showSearch={false}
                                        showPagination={false}
                                        showHeaderDots={true}
                                        emptyMessage="No behavior record found"
                                        onRowClick={() => { }}
                                    />

                                ) : (
                                    <div className="text-center py-4 text-muted">
                                        No Behavior Data Available
                                    </div>
                                )}


                            </Card.Body>
                            <BehaviorLogModal
                                show={showBehaviorModal}
                                onHide={() => {
                                    setShowBehaviorModal(false);
                                    setSelectedBehaviorLog(null);
                                }}
                                onSave={handleSaveBehaviorLog}
                                student={student}
                                editData={selectedBehaviorLog}

                            />
                        </Card>


                    </div>
                </Col>

                {/* ══ RIGHT COLUMN ═════════════════════════════════════ */}
                <Col xs={12} md={6} xl={3} className="order-2 order-xl-3">
                    <div className="d-flex flex-column gap-3 h-100">

                        {/* Attendance Calendar */}
                        <Card className="shadow-sm bg-white border-0 rounded-4">
                            <Card.Body className="p-3">
                                {/* Custom header with arrows */}
                                <div className="calendar-custom-header d-flex align-items-center justify-content-between mb-4">
                                    <h2 className="card-heading mb-0">{calendarHeading}</h2>
                                    <div className="d-flex align-items-center gap-3">
                                        <Button
                                            type="button"
                                            variant="link"
                                            onClick={handlePrevMonth}
                                            className="calendar-nav-btn p-0 border-0 shadow-none text-dark text-decoration-none"
                                            aria-label="Previous month"
                                        >
                                            ‹
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="link"
                                            onClick={handleNextMonth}
                                            className="calendar-nav-btn p-0 border-0 shadow-none text-dark text-decoration-none"
                                            aria-label="Next month"
                                        >
                                            ›
                                        </Button>
                                    </div>
                                </div>

                                <Calendar
                                    value={selectedDate}
                                    onChange={setSelectedDate}
                                    activeStartDate={activeStartDate}
                                    onActiveStartDateChange={({ activeStartDate: d }) => {
                                        setActiveStartDate(d);
                                        setSelectedDate(d);
                                    }}
                                    tileClassName={getCalendarTileClass}
                                    showNavigation={false}
                                    locale="en-US"
                                    calendarType="gregory"
                                    minDetail="month"
                                    maxDetail="month"
                                    formatShortWeekday={(_locale, date) =>
                                        ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
                                    }
                                    formatDay={(_locale, date) => String(date.getDate())}
                                    className="student-calendar"
                                />

                                {/* Summary row */}
                                {/* Summary row */}
                                <Row className="g-2 mt-3">
                                    {[
                                        {
                                            label: "Present",
                                            value: calendar?.summary?.present ?? 0,
                                            bg: "bg-primary",
                                            textCls: "text-danger-subtle",
                                        },
                                        {
                                            label: "Late",
                                            value: calendar?.summary?.late ?? 0,
                                            bg: "bg-secondary",
                                            textCls: "text-danger-subtle",
                                        },
                                        {
                                            label: "Sick",
                                            value: calendar?.summary?.sick ?? 0,
                                            bg: "bg-danger-subtle",
                                            textCls: "text-white",
                                        },
                                        {
                                            label: "Absent",
                                            value: calendar?.summary?.absent ?? 0,
                                            bg: "bg-info",
                                            textCls: "text-danger-subtle",
                                        },
                                    ].map(({ label, value, bg, textCls }) => (
                                        <Col xs={3} key={label}>
                                            <div
                                                className={`calendar-summary-box ${bg} rounded-3 p-2 p-md-3 h-100`}
                                            >
                                                <span
                                                    className={`cap-md-reg d-block ${label === "Sick"
                                                        ? "text-white"
                                                        : "text-secondary-dark"
                                                        }`}
                                                >
                                                    {label}
                                                </span>

                                                <strong className={`h5 mb-0 ${textCls}`}>
                                                    {value}
                                                </strong>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </Card.Body>
                        </Card>
                        <div className="scholarships-section p-3">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <h2 className="card-heading mb-0">Scholarships</h2>
                                {/* <FiMoreHorizontal /> */}

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
                                                setSelectedScholarship(null);
                                                setShowScholarshipModal(true);
                                            }}
                                            className="small px-3 py-2"
                                        >
                                            Add
                                        </Dropdown.Item>
                                    </Dropdown.Menu>

                                </Dropdown>
                            </div>

                            <div className="d-flex flex-column gap-3">
                                {scholarship.length > 0 ? (
                                    scholarship.map((item, index) => (
                                        <div
                                            key={item.ScholarshipID}
                                            className="scholarship-item bg-white rounded-4 p-3 d-flex align-items-center gap-3"
                                        >
                                            <span className="scholarship-icon-box bg-secondary rounded-pill p-3">
                                                {getScholarshipIcon(index)}
                                            </span>

                                            <div>
                                                <strong className="body-xs-bold text-dark d-block">
                                                    {item.ScholarshipName
                                                    }
                                                </strong>

                                                <span className="cap-md-reg text-secondary-dark">
                                                    {item.ScholarshipType
                                                    }
                                                </span>
                                                <Button
                                                    variant=""
                                                    size="sm"
                                                    className="border-0"
                                                    onClick={() => {
                                                        setSelectedScholarship(item);
                                                        setShowScholarshipModal(true);
                                                    }}
                                                >
                                                    <FiEdit2 />
                                                </Button>

                                                <Button
                                                    variant=""
                                                    onClick={() =>
                                                        handleDelete({
                                                            id: item.ScholarshipID,
                                                            deleteApi: deleteScholarship,
                                                            title: `${item.ScholarshipName} will be deleted`,
                                                            successMessage: "Scholarship deleted successfully",
                                                        })
                                                    }
                                                >
                                                    <FiTrash2 />
                                                </Button>
                                            </div>
                                        </div>
                                    ))) : (
                                    <p>No  scholarship
                                        Details Available</p>

                                )}



                            </div>
                            <ScholarshipModal
                                show={showScholarshipModal}
                                onHide={() =>
                                    setShowScholarshipModal(false)
                                }
                                editData={selectedScholarship}
                                student={student}
                                onSave={handleSaveScholarship}
                            />
                        </div>


                        <Card className="shadow-sm ">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <h2 className="card-heading mb-0">Health &amp; Medical Info</h2>
                                    <FiMoreHorizontal />
                                </div>
                                <div className="d-flex flex-column gap-3  ">
                                    {healthMedicalInfo.map((item) => (
                                        <div key={item.id} className="bg-body bg-opcitiy-25 rounded-4 p-3" >
                                            <Badge
                                                bg="primary"
                                                className="text-danger-subtle mb-2"
                                            >
                                                {item.title}
                                            </Badge>
                                            <p className="body-xs-reg text-danger-subtle mb-0">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                </Col>

            </Row>
        </Container>
    );
}
