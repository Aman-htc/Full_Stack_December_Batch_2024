"use client";

import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Modal, Form } from "react-bootstrap";
import {
  FiCheckCircle,
  FiRefreshCcw,
  FiAlertCircle,
  FiMoreHorizontal,
  FiClock,
} from "react-icons/fi";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  feesCollectionPageInfo,
  feesSummary,
  feesCollectionTrend,
  feesCollectionProgress,
  feesCollectionTable,
  feesFilters,
} from "@/app/data/feesCollectionData";


import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/breadcrum";
import ChartCard from "@/app/components/students/chartcard";
import StudentsTable from "@/app/components/students/StudentsTable";

import {
  getFeesTrendChartOptions,
  getFeesTrendChartSeries,
} from "../../utils/finance/financeChartOptions";
import { getAllClasses, getAllSections, getStudents } from "@/services/studentService";
import { addFeeassign, createFeeStructure, fetchFeeStats, getFeeStructure, getfessprogress, getfessTrends, getStudentsfess, studentfeepage } from "@/services/feesCollection";
import { toast } from "react-toastify";
import { set } from "react-hook-form";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { useRouter } from "next/navigation";



const summaryIcons = {
  collected: FiCheckCircle,
  pending: FiRefreshCcw,
  overdue: FiAlertCircle,
};

const summaryIconStyles = {
  blue: {
    className: "text-light",
    style: { backgroundColor: "#15456F" },
  },
  cyan: {
    className: "text-warning",
    style: { backgroundColor: "#CEEAF1" },
  },
  pink: {
    className: "text-danger",
    style: { backgroundColor: "#FFCDFD" },
  },
};

const getSummaryIconStyle = (type) =>
  summaryIconStyles[type] || summaryIconStyles.cyan;

const getFeeStatusStyle = (status = "") => {
  const value = String(status).trim();

  if (value === "Paid") {
    return { backgroundColor: "#45C4A2", color: "#fff" };
  }

  if (value === "Pending") {
    return { backgroundColor: "#FFCDFD", color: "#15456F" };
  }

  if (value === "Partially Paid") {
    return { backgroundColor: "#CEEAF1", color: "#15456F" };
  }

  if (value === "Overdue") {
    return { backgroundColor: "#FF4D5E", color: "#fff" };
  }

  return { backgroundColor: "#6C757D", color: "#fff" };
};


export default function FeesCollectionPage() {
  const router = useRouter();



  useEffect(() => {
    const token = localStorage.getItem("idToken");

    if (!token) {
      router.push("/signin");
    }
  }, []);

  const [search, setSearch] = useState("");
  const [showFeeStructureModal, setShowFeeStructureModal] = useState(false);
  const [showAssignFeeModal, setShowAssignFeeModal] = useState(false);
  const [sections, setSections] = useState([]);
  const [students, setStudents] = useState([]);
  const [feeStructures, setFeeStructures] = useState([]);
  const [feestudent, setFeeStudent] = useState([]);

  const [globalFilter, setGlobalFilter] = useState("");
  const [sorting, setSorting] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [classFilter, setClassFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [monthFilter, setMonthFilter] = useState("all");
  const [hoveredFeesPoint, setHoveredFeesPoint] = useState(null);

  











  const sortedFees = useMemo(() => {
    return [...feestudent].sort((a, b) => {
      if (a.StudentID !== b.StudentID) {
        return a.StudentID - b.StudentID;
      }
      return new Date(a.DueDate) - new Date(b.DueDate);
    });

    
  }, [feestudent]);

  const filteredFees = useMemo(() => {
      const value = search.toLowerCase().trim();

      if (!value) return sortedFees;

      return sortedFees.filter((item) =>
        item.StudentName?.toLowerCase().includes(value) ||
        item.RollNumber?.toString().includes(value) ||
        item.ClassName?.toLowerCase().includes(value) ||
        item.FeeCategory?.toLowerCase().includes(value)
      );
    }, [sortedFees, search]);

  const paginatedFees = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return filteredFees.slice(start, end);
  }, [filteredFees, page, pageSize]);

  const pageCount = Math.ceil(filteredFees.length / pageSize);

 





  const feesColumns = useMemo(() => {
    return [
      {
        accessorKey: "StudentName",
        header: "Student",
        cell: ({ row }) => {
          const current = row.original;


          const previous = row.index > 0 ? paginatedFees[row.index - 1] : null;


          const showStudent = !previous || previous.StudentID !== current.StudentID;

          if (!showStudent) {
            return null;
          }

          return (
            <div className="d-flex align-items-center gap-2">
              <Badge
                className="border-0"
                style={{ backgroundColor: "#CEEAF1", color: "#15456F" }}
              >
                {current.RollNumber}
              </Badge>
              <span>{current.StudentName}</span>
            </div>
          );
        }
      },

      {
        accessorKey: "ClassName",
        header: "Class",
        cell: ({ row }) => {
          const current = row.original;
          const previous = row.index > 0 ? paginatedFees[row.index - 1] : null;

          const showClass = !previous || previous.StudentID !== current.StudentID;

          return showClass ? current.ClassName : "";
        },
      },

      {
        accessorKey: "FeeCategory",
        header: "Fee Category",
      },

      {
        accessorKey: "TotalAmount",
        header: "Total Amount",
        cell: ({ getValue }) =>
          `₹${Number(getValue()).toLocaleString("en-IN")}`,
      },

      {
        accessorKey: "DueDate",
        header: "Due Date",
      },

      {
        accessorKey: "PaymentStatus",
        header: "Status",
        cell: ({ getValue }) => (
          <Badge
            className="rounded-pill px-3 py-2 border-0"
            style={getFeeStatusStyle(getValue())}
          >
            {getValue()}
          </Badge>
        ),
      },

      {
        id: "actions",
        header: "Action",
        cell: ({ row }) => {
          const isPaid = row.original.PaymentStatus === "Paid";

          return (
            <Button
              size="sm"
              variant={isPaid ? "secondary" : "success"}
              className="rounded-pill px-3"
              disabled={isPaid}
              onClick={() => {
                setPaymentForm((prev) => ({
                  ...prev,
                  student_fee_id: row.original.StudentFeeID,
                  amount_paid: row.original.RemainingAmount,
                  payment_date: new Date().toISOString().split("T")[0],
                }));

                setShowPaymentModal(true);
              }}
            >
              {isPaid ? "Paid" : "Collect Fee"}
            </Button>
          );
        },
      },
    ];
  }, [paginatedFees]);

  const feesTable = useReactTable({
    data: paginatedFees,
    columns: feesColumns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  useEffect(() => {
    feesTable.setPageIndex(page - 1);
  }, [page, feesTable]);

  useEffect(() => {
    feesTable.setPageSize(pageSize);
    feesTable.setPageIndex(0);
    setPage(1);
  }, [pageSize, feesTable]);
  const [submitted, setSubmitted] = useState(false);



  const [feeStructureForm, setFeeStructureForm] = useState({
    class_id: "",
    fee_category: "",
    total_amount: "",
  });
  const [loading, setLoading] = useState(false);

  const [classes, setClasses] = useState([]);

  const handleCreateFeeStructureChange = (e) => {
    const { name, value } = e.target;

    setFeeStructureForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };



  const handleFeeStructureSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    if (
      !feeStructureForm.class_id ||
      !feeStructureForm.fee_category ||
      Number(feeStructureForm.total_amount) <= 0
    ) {
      return;
    }

    try {
      setLoading(true);

      const payload = {
        class_id: Number(feeStructureForm.class_id),
        fee_category: feeStructureForm.fee_category,
        total_amount: Number(feeStructureForm.total_amount),
      };



      await createFeeStructure(payload);

      setShowFeeStructureModal(false);
      toast.success('Fees Structure add successfully ')

      setFeeStructureForm({
        class_id: "",
        fee_category: "",
        total_amount: "",
      });

      setSubmitted(false);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };







  

  const fetchData = async () => {
    try {
      const [
        studentdatafee,
        response,
        sectionData,
        studentdata,
        fessdata,
      ] = await Promise.all([
        getStudentsfess({
          class_section: classFilter,
          period_type: monthFilter,
          status: statusFilter,
        }),
        getAllClasses(),
        getAllSections(),
        getStudents(),
        getFeeStructure(),
      ]);
      
      setFeeStudent(studentdatafee.data || []);
      setClasses(response.data || []);
      setSections(sectionData.data || []);
      setStudents(studentdata.data || []);
      setFeeStructures(fessdata.data || []);
    } catch (error) {
      console.error("Fetch Error =>", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [classFilter, statusFilter, monthFilter]);
  

  const feeCategories = [
    "Tuition Fee",
    "Books & Supplies",
    "Activities",
    "Miscellaneous",
  ];


  // assign fess


  const [assignLoading, setAssignLoading] = useState(false);
  const [assignSubmitted, setAssignSubmitted] = useState(false);



  const [assignFeeForm, setAssignFeeForm] = useState({
    student_id: "",
    class_id: "",
    section_id: "",
    fee_structure_id: "",
    total_amount: "",
    due_date: "",
  });

  const handleAssignFeeChange = (e) => {
    const { name, value } = e.target;

    setAssignFeeForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStudentChange = (e) => {
    const studentId = Number(e.target.value);

    const selectedStudent = students.find(
      (item) => item.StudentID === studentId
    );

   

    setAssignFeeForm((prev) => ({
      ...prev,
      student_id: studentId,
      class_id: selectedStudent?.ClassID || "",
      section_id: selectedStudent?.SectionID || "",
      fee_structure_id: "",
      total_amount: "",
    }));
  };

  const handleFeeStructureChange = (e) => {
    const feeId = Number(e.target.value);

    const selectedFee = feeStructures.find(
      (item) => item.FeeStructureID === feeId
    );

    setAssignFeeForm((prev) => ({
      ...prev,
      fee_structure_id: feeId,
      total_amount: selectedFee?.TotalAmount || "",
    }));
  };
  const handleAssignFeeSubmit = async (e) => {
    e.preventDefault();

    setAssignSubmitted(true);

    if (
      !assignFeeForm.student_id ||
      !assignFeeForm.class_id ||
      !assignFeeForm.section_id ||
      !assignFeeForm.fee_structure_id ||
      !assignFeeForm.total_amount ||
      !assignFeeForm.due_date
    ) {
      return;
    }

    try {
      setAssignLoading(true);

      const payload = {
        student_id: Number(assignFeeForm.student_id),
        class_id: Number(assignFeeForm.class_id),
        section_id: Number(assignFeeForm.section_id),
        fee_structure_id: Number(assignFeeForm.fee_structure_id),
        total_amount: Number(assignFeeForm.total_amount),
        due_date: assignFeeForm.due_date,
      };

      console.log(payload);

      await addFeeassign(payload);

      setShowAssignFeeModal(false);

      setAssignFeeForm({
        student_id: "",
        class_id: "",
        section_id: "",
        fee_structure_id: "",
        total_amount: "",
        due_date: "",
      });

      setAssignSubmitted(false);
    } catch (error) {
      console.error(error);
    } finally {
      setAssignLoading(false);
    }
  };

  const filteredFeeStructures = feeStructures.filter(
    (item) => item.ClassID === Number(assignFeeForm.class_id)
  );




  //  fess pay

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const [paymentForm, setPaymentForm] = useState({
    student_fee_id: "",
    amount_paid: "",
    payment_date: new Date().toISOString().split("T")[0],
    payment_mode: "",

    remarks: "",
  });


  const handlePaymentChange = (e) => {
    const { name, value } = e.target;

    setPaymentForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateReceiptNumber = () => {
    const timestamp = Date.now();
    const random = Math.floor(1000 + Math.random() * 9000);

    return `RCPT-${timestamp}-${random}`;
  };
  const handlePaymentSubmit = async (e) => {
    e.preventDefault();

    setPaymentSubmitted(true);

    if (
      !paymentForm.student_fee_id ||
      !paymentForm.amount_paid ||
      !paymentForm.payment_date ||
      !paymentForm.payment_mode
    ) {
      return;
    }

    try {
      setPaymentLoading(true);

      const payload = {
        student_fee_id: Number(paymentForm.student_fee_id),
        amount_paid: Number(paymentForm.amount_paid),
        payment_date: paymentForm.payment_date,
        payment_mode: paymentForm.payment_mode,
        receipt_number: generateReceiptNumber(),
        remarks: paymentForm.remarks,
      };



      await studentfeepage(payload);

      toast.success("Fee collected successfully");
      fetchData()

      setShowPaymentModal(false);

      setPaymentForm({
        student_fee_id: "",
        amount_paid: "",
        payment_date: new Date().toISOString().split("T")[0],
        payment_mode: "",
        receipt_number: "",
        remarks: "",
      });

      setPaymentSubmitted(false);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response?.data?.detail || "Payment failed"
      );
    } finally {
      setPaymentLoading(false);
    }
  };


  const [apiData, setApiData] = useState(null);
  


  const fetchSummar = async () => {
   
    try {
      const res = await fetchFeeStats();

     

      setApiData(res.data || null);
    } catch (err) {
      console.error(err);
      setApiData(null);
    }
  };



  useEffect(() => {
    fetchSummar();
  }, []);


  const fees = useMemo(() => {

    const d = apiData;

    if (!d) return [];

    return [
      {
        id: 1,
        title: "Fees Collected",
        value: d.FeesCollected ?? 0,
        icon: "collected",
        bgType: "success",
      },
      {
        id: 2,
        title: "Pending Fees",
        value: d.PendingFees ?? 0,
        icon: "pending",
        bgType: "warning",
      },
      {
        id: 3,
        title: "Overdue Fees",
        value: d.OverdueFees ?? 0,
        icon: "overdue",
        bgType: "danger",
      },
    ];
  }, [apiData]);


  const summaryIcons = {
    collected: FiCheckCircle,
    pending: FiClock,
    overdue: FiAlertCircle,

  };
  const getSummaryIconStyle = (type) => {
    switch (type) {
      case "success":
        return { className: "bg-success-subtle text-success" };
      case "warning":
        return { className: "bg-warning-subtle text-warning" };
      case "danger":
        return { className: "bg-danger-subtle text-danger" };
      default:
        return { className: "bg-light text-dark" };
    }
  };



  const [selectedPeriod, setSelectedPeriod] = useState("Last 6 Months");
  const [trendData, setTrendData] = useState([]);



  const loadTrendData = async (period) => {
    try {
      const res = await getfessTrends(period);

      setTrendData(res?.data || []);
    } catch (error) {
      console.error(error);
      setTrendData([]);

    }
  };

  useEffect(() => {

    loadTrendData(selectedPeriod);
  }, [selectedPeriod]);


  const [fessprogress, setFeeprogress] = useState([]);

  const Fessprogressdata = async () => {
    try {
      const res = await getfessprogress();



      setFeeprogress(res?.data || []);
    } catch (error) {
      console.error(error);
      setTrendData([]);
    }
  };



  useEffect(() => {

    Fessprogressdata()
  }, []);









  return (
    <Container fluid className="bg-body px-0 pb-4">

      <Header
        text={feesCollectionPageInfo.title}
        search={search}
        setSearch={setSearch}
      />

      <div className="px-3 px-lg-4">
        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Fees Collection" },
          ]}
        />


        <div className="d-flex justify-content-end gap-2 my-3">
          <Button
            variant="primary"
            onClick={() => setShowFeeStructureModal(true)}
          >
            Add Fee Structure
          </Button>
          <Button
            variant="secondary"
            onClick={() => setShowAssignFeeModal(true)}
          >
            Assign Fee to Student
          </Button>
        </div>

        <Row className="g-3 mt-2 align-items-stretch">

          <Col xs={12} xl={3} className="d-flex">
            <Row className="g-3 flex-fill">
              {fees.map((item, index) => {
                const Icon = summaryIcons[item.icon] || FiCheckCircle;
                const iconStyle = getSummaryIconStyle(item.bgType);

                return (
                  <Col xs={12} md={4} xl={12} key={index} className="d-flex">
                    <Card className="border-0 rounded-4 shadow-sm bg-white flex-fill">
                      <Card.Body className="d-flex align-items-center gap-3">

                        <span
                          className={`rounded-3 d-inline-flex align-items-center justify-content-center p-3 ${iconStyle.className}`}
                        >
                          <Icon size={20} />
                        </span>

                        <div className="py-3 px-2">
                          <h6 className="fw-bold text-dark mb-2">
                            {item.value}
                          </h6>
                          <p className="small text-muted mb-0">
                            {item.title}
                          </p>
                        </div>

                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>

          <Col xs={12} xl={5} className="d-flex">
            <div className="flex-fill">


              <ChartCard
                title="Fees Collection Trend"
                dropdownOptions={[
                  "Last 8 Months",
                  "Last 6 Months",
                  "Last 3 Months",
                  "This Month",
                ]}

                defaultDropdownValue={selectedPeriod}
                onDropdownChange={setSelectedPeriod}
                options={getFeesTrendChartOptions(
                  trendData,
                  hoveredFeesPoint,
                  setHoveredFeesPoint
                )}
                series={getFeesTrendChartSeries(trendData)}
                type="area"
                height={240}
                chartClassName="fees-trend-chart"
              />


            </div>
          </Col>
          <Col xs={12} xl={4} className="d-flex">
            <div className="fees-progress-wrapper flex-fill h-100 rounded-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h6 className="fw-bold text-danger-subtle mb-0 ms-2 mt-4 pt-3">
                  Fees Collection Progress
                </h6>

                <FiMoreHorizontal size={18} />
              </div>

              <Row className="align-items-stretcp-ch  g-3 ">
                {fessprogress.map((item, index) => (
                  <Col xs={12} md={6} key={index} className="d-flex pt-5 ">
                    <div className="progress-card py-2 px-1 bg-light rounded-4 h-100 w-100  d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex align-items-center justify-content-between mb-3">
                          <span className="small fw-semibold text-dark">
                            {item.
                              FeeCategory

                            }
                          </span>

                          <span className="small fw-bold text-danger-subtle">
                            {item.
                              CollectionPercentage
                            }%
                          </span>
                        </div>

                        <div className="d-flex align-items-center gap-2 mb-3">
                          <div
                            className="flex-grow-1 rounded-pill overflow-hidden"
                            style={{ height: "12px", backgroundColor: "#E9ECEF" }}
                          >
                            <div
                              className="h-100 rounded-pill"
                              style={{
                                width: `${item.CollectionPercentage}%`,
                                backgroundColor: "#15456F",
                              }}
                            />
                          </div>

                          <div
                            className="rounded-pill flex-shrink-0"
                            style={{
                              width: "28px",
                              height: "12px",
                              backgroundColor: "#FFCDFD",
                            }}
                          />
                        </div>
                      </div>

                      <p className="small">
                        <span className="fw-bold text-danger-subtle">
                          ${Number(item.CollectedAmount
                          ).toLocaleString("en-US")}
                        </span>

                        <span className="text-danger subtle small">
                          /${Number(item.TotalAmount
                          ).toLocaleString("en-US")} collected
                        </span>
                      </p>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>





        </Row>

        <Card className="border-0 rounded-4 shadow-sm bg-white mt-3">
          <Card.Body className="d-flex flex-column">
            <StudentsTable
              title="Fees Collection"
              table={feesTable}
              columns={feesColumns}
              page={page}
              setPage={setPage}
              pageSize={pageSize}
              setPageSize={setPageSize}

              pageCount={pageCount}
              filteredData={filteredFees}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
              showSearch={false}
              emptyMessage="No fees record found"

              filters={[
                {
                  value: classFilter,
                  onChange: setClassFilter,
                  options: feesFilters.classOptions,
                },
                {
                  value: statusFilter,
                  onChange: setStatusFilter,
                  options: feesFilters.statusOptions,
                },
                {
                  value: monthFilter,
                  onChange: setMonthFilter,
                  options: feesFilters.monthOptions,
                },
              ]}
              onRowClick={() => { }}
            />


          </Card.Body>
        </Card>
      </div>


      {/* fees Structure modal */}
      <Modal
        show={showFeeStructureModal}
        onHide={() => setShowFeeStructureModal(false)}
        centered
        backdrop="static"
        size="md"
      >
        <Form id="feeStructureForm" onSubmit={handleFeeStructureSubmit}>
          <Modal.Header closeButton className="p-2">
            <Modal.Title className="fw-bold">
              Create Fee Structure
            </Modal.Title>
          </Modal.Header>

          <Modal.Body className="px-4 py-3">
            <Row className="g-3">

              {/* Class */}
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Class <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Select
                    name="class_id"
                    value={feeStructureForm.class_id}
                    onChange={handleCreateFeeStructureChange}
                    isInvalid={submitted && !feeStructureForm.class_id}
                  >
                    <option value="">Select Class</option>

                    {classes.map((item) => (
                      <option key={item.ClassID} value={item.ClassID}>
                        {item.ClassName}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please select a class.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Fee Category */}
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Fee Category <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Select
                    name="fee_category"
                    value={feeStructureForm.fee_category}
                    onChange={handleCreateFeeStructureChange}
                    isInvalid={submitted && !feeStructureForm.fee_category}
                  >
                    <option value="">Select Fee Category</option>

                    {feeCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please select a fee category.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Amount */}
              <Col xs={12}>
                <Form.Group>
                  <Form.Label className="fw-semibold">
                    Total Amount <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="number"
                    min="1"
                    step="0.01"
                    name="total_amount"
                    value={feeStructureForm.total_amount}
                    onChange={handleCreateFeeStructureChange}
                    placeholder="Enter total amount"
                    isInvalid={
                      submitted &&
                      (!feeStructureForm.total_amount ||
                        Number(feeStructureForm.total_amount) <= 0)
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    Enter a valid amount greater than 0.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>

          <Modal.Footer className="border-0 px-4 pb-4">
            <Button
              variant="secondary"
              onClick={() => setShowFeeStructureModal(false)}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              type="submit"
              form="feeStructureForm"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Fee Structure"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>


      {/* assign form modal */}
      <Modal
        show={showAssignFeeModal}
        onHide={() => setShowAssignFeeModal(false)}
        centered
        size="lg"
        backdrop="static"
      >
        <Form id="assignFeeForm" onSubmit={handleAssignFeeSubmit}>
          <Modal.Header closeButton className="p-3">
            <Modal.Title>Assign Fee to Student</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="g-3 p-3">

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Student <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Select
                    name="student_id"
                    value={assignFeeForm.student_id}
                    onChange={handleStudentChange}
                    isInvalid={assignSubmitted && !assignFeeForm.student_id}
                  >
                    <option value="">Select Student</option>

                    {students.map((item) => (
                      <option key={item.StudentID} value={item.StudentID}>
                        {item.StudentName}-{item.RollNumber}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please select a student.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Class <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Select
                    name="class_id"
                    value={assignFeeForm.class_id}
                    onChange={handleAssignFeeChange}
                    isInvalid={assignSubmitted && !assignFeeForm.class_id}
                  >
                    <option value="">Select Class</option>

                    {classes.map((item) => (
                      <option key={item.ClassID} value={item.ClassID}>
                        {item.ClassName}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please select a class.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Section <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Select
                    name="section_id"
                    value={assignFeeForm.section_id}
                    onChange={handleAssignFeeChange}
                    isInvalid={assignSubmitted && !assignFeeForm.section_id}
                  >
                    <option value="">Select Section</option>

                    {sections.map((item) => (
                      <option key={item.SectionID} value={item.SectionID}>
                        {item.SectionName}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please select a section.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Fee Structure <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Select
                    name="fee_structure_id"
                    value={assignFeeForm.fee_structure_id}
                    onChange={handleFeeStructureChange}
                    isInvalid={assignSubmitted && !assignFeeForm.fee_structure_id}
                  >
                    <option value="">Select Fee Structure</option>

                    {filteredFeeStructures.map((item) => (
                      <option
                        key={item.FeeStructureID}
                        value={item.FeeStructureID}
                      >
                        {item.FeeCategory}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    Please select a fee structure.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Total Amount <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="number"
                    min="1"
                    name="total_amount"
                    value={assignFeeForm.total_amount}
                    onChange={handleAssignFeeChange}
                    placeholder="Enter amount"
                    isInvalid={
                      assignSubmitted &&
                      Number(assignFeeForm.total_amount) <= 0
                    }
                  />

                  <Form.Control.Feedback type="invalid">
                    Enter a valid amount.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Due Date <span className="text-danger">*</span>
                  </Form.Label>



                  <Flatpickr
                    value={assignFeeForm.due_date}
                    options={{
                      dateFormat: "Y-m-d",
                      minDate: "today",
                      disableMobile: true

                    }}
                    onChange={(selectedDates, dateStr) =>
                      handleAssignFeeChange({
                        target: {
                          name: "due_date",
                          value: dateStr,

                        },
                      })
                    }
                    className={`form-control ${assignSubmitted && !assignFeeForm.due_date
                      ? "is-invalid"
                      : ""
                      }`}
                  />

                  {assignSubmitted && !assignFeeForm.due_date && (
                    <div className="invalid-feedback d-block">
                      Please select a due date.
                    </div>
                  )}
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>

          <Modal.Footer className="p-2">
            <Button
              variant="secondary"
              onClick={() => setShowAssignFeeModal(false)}
              disabled={assignLoading}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              type="submit"
              form="assignFeeForm"
              disabled={assignLoading}
            >
              {assignLoading ? "Assigning..." : "Assign Fee"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>



      {/* fees pay modal */}

      <Modal
        show={showPaymentModal}
        onHide={() => setShowPaymentModal(false)}
        centered
        size="lg"
        backdrop="static"
      >
        <Form onSubmit={handlePaymentSubmit}>
          <Modal.Header closeButton className="p-3">
            <Modal.Title>Collect Fee Payment</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="g-3 p-3">

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Amount Paid <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Control
                    type="number"
                    name="amount_paid"
                    value={paymentForm.amount_paid}
                    onChange={handlePaymentChange}
                    isInvalid={
                      paymentSubmitted &&
                      Number(paymentForm.amount_paid) <= 0
                    }
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Payment Date <span className="text-danger">*</span>
                  </Form.Label>


                  <Flatpickr
                    value={paymentForm.payment_date}
                    options={{
                      dateFormat: "Y-m-d",
                      disableMobile: true
                    }}
                    onChange={(selectedDates, dateStr) =>
                      setPaymentForm((prev) => ({
                        ...prev,
                        payment_date: dateStr,
                      }))
                    }
                    className="form-control"
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label>
                    Payment Mode <span className="text-danger">*</span>
                  </Form.Label>

                  <Form.Select
                    name="payment_mode"
                    value={paymentForm.payment_mode}
                    onChange={handlePaymentChange}
                    isInvalid={
                      paymentSubmitted &&
                      !paymentForm.payment_mode
                    }
                  >
                    <option value="">Select Payment Mode</option>
                    <option value="Cash">Cash</option>
                    <option value="UPI">UPI</option>
                    <option value="Card">Card</option>
                    <option value="Bank Transfer">Bank Transfer</option>
                  </Form.Select>
                </Form.Group>
              </Col>



              <Col md={12}>
                <Form.Group>
                  <Form.Label>Remarks</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="remarks"
                    value={paymentForm.remarks}
                    onChange={handlePaymentChange}
                    placeholder="Enter remarks"
                  />
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>

          <Modal.Footer className="p-2">
            <Button
              variant="secondary"
              onClick={() => setShowPaymentModal(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="success"
              disabled={paymentLoading}
            >
              {paymentLoading ? "Processing..." : "Collect Payment"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}


