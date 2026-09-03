

"use client";

import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Card, Button, Badge, Modal, Form } from "react-bootstrap";
import {
  FiFileText,
  FiBriefcase,
  FiTool,
  FiCalendar,
  FiFolder,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { CiDollar } from "react-icons/ci";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

import Header from "@/app/components/Header";
import Breadcrumb from "@/app/components/breadcrum";
import ChartCard from "@/app/components/students/chartcard";
import StudentsTable from "@/app/components/students/StudentsTable";

import {
  expensesPageInfo,
  expenseTrend,
  expenseBreakdown,
  reimbursementsTracking,
  expensesTable,
  expensesFilters,
  expensesPagination,
  expenseCategoryStyles,
} from "@/app/data/expensesData";

import {
  getExpenseTrendChartOptions,
  getExpenseTrendChartSeries,
  getExpenseBreakdownOptions,
  getExpenseBreakdownSeries,
} from "@/app/utils/finance/financeChartOptions";

import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_blue.css";
import { toast } from "react-toastify";
import { getDepartments } from "@/services/teacherService";
import { addExpenses, addreimbursements, deleteExpense, deletereimbursement, getExpensecategory, getExpenses, getExpenseTrendChart, getreimbursements, updateExpense, updateReimbursement } from "@/services/feesCollection";
import { handleDelete } from "@/app/components/Deletehandle";

//  import { useState, useEffect } from "react";
// import { getExpenseTrendChart } from "../api/expenseApi";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const formatAmount = (value) => Number(value || 0).toLocaleString("en-US");

const categoryIconMap = {
  money: FiBriefcase,
  box: BsBoxSeam,
  tool: FiTool,
  calendar: FiCalendar,
  folder: FiFolder,
};
const categoryClassChart = {
  green: "category-badge-danger",
  blue: "category-badge-warning",
  pink: "category-badge-secondary",
  purple: "category-badge-primary",
  gray: "category-badge-gray",
};

const categoryClassMap = {
  green: "bg-secondary-subtle text-warning",
  blue: "bg-info text-warning",
  pink: "bg-success text-success-light",
  purple: "bg-primary text-danger-subtle",
  gray: "bg-dark-light text-secondary-dark",
};

const getCategoryClassName = (category = "") => {
  const categoryStyle = expenseCategoryStyles[category];
  return categoryClassMap[categoryStyle?.color] || categoryClassMap.gray;
};

const getCategoryChartClassName = (category = "") => {
  const categoryStyle = expenseCategoryStyles[category];
  return categoryClassChart[categoryStyle?.color] || categoryClassChart.gray;
};


const getCategoryIcon = (category = "") => {
  const categoryStyle = expenseCategoryStyles[category];
  return categoryIconMap[categoryStyle?.icon] || FiFolder;
};

const getReimbursementStatus = (status = "") => {
  const value = String(status).trim();

  if (value === "Approved") {
    return {
      className: "text-light",
      style: { backgroundColor: "#45C4A2" },
    };
  }

  if (value === "Declined") {
    return {
      className: "text-light",
      style: { backgroundColor: "#FB5858" },
    };
  }

  return {
    className: "text-danger-subtle",
    style: { backgroundColor: "#CEEAF1" },
  };
};

export default function ExpensesPage() {
  const [reimbursementErrors, setReimbursementErrors] = useState({});

  const [showExpenseModal, setShowExpenseModal] = useState(false);
  const [expenseLoading, setExpenseLoading] = useState(false);
  const [departments, setDepartments] =
    useState([]);
  const [expenseErrors, setExpenseErrors] = useState({});
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingExpenseId, setEditingExpenseId] = useState(null);
  const [isReimbursementEdit, setIsReimbursementEdit] = useState(false);
  const [editingReimbursementId, setEditingReimbursementId] = useState(null);

   const [globalFilter, setGlobalFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [monthFilter, setMonthFilter] = useState("this_month");
  const [sorting, setSorting] = useState([]);
  const [page, setPage] = useState(expensesPagination.currentPage);
  const [pageSize, setPageSize] = useState(expensesPagination.perPage);

  const handleReimbursementEdit = (item) => {
    setIsReimbursementEdit(true);
    setEditingReimbursementId(item.ReimbursementID);

    setReimbursementForm({
      request_code: item.RequestCode,
      staff_name: item.StaffName,
      department_or_subject: item.DepartmentOrSubject,
      amount: item.Amount,
      date_submitted: new Date(item.DateSubmitted),
      receipt_file: item.ReceiptFile,
      status: item.Status,
    });

    setShowReimbursementModal(true);
  };


  const handleEdit = (expense) => {
    setIsEditMode(true);
    setEditingExpenseId(expense.ExpenseID);

    setExpenseForm({
      expense_date: new Date(expense.ExpenseDate),
      department_id: String(expense.DepartmentID || ""),
      category: expense.Category || "",
      description: expense.Description || "",
      quantity: expense.Quantity || "",
      amount: expense.Amount || "",
    });

    setShowExpenseModal(true);
  };


  const validateExpenseForm = () => {
    const errors = {};

    if (!expenseForm.expense_date) {
      errors.expense_date = "Expense date is required";
    }

    if (!expenseForm.department_id) {
      errors.department_id = "Please select a department";
    }

    if (!expenseForm.category.trim()) {
      errors.category = "Category is required";
    }

    if (!expenseForm.description.trim()) {
      errors.description = "Description is required";
    }



    if (!expenseForm.amount || Number(expenseForm.amount) <= 0) {
      errors.amount = "Amount must be greater than 0";
    }

    setExpenseErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleExpenseChange = (e) => {
    const { name, value } = e.target;

    setExpenseForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setExpenseErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };




  const [expenseForm, setExpenseForm] = useState({
    expense_date: null,
    department_id: "",
    category: "",
    description: "",
    quantity: "1",
    amount: "",
  });


  const fetchDepartments = async () => {
    

    const data = await getDepartments();
    setDepartments(data.data);

  };

  const [expense, setExpense] = useState([]);

  const fetchExpenses = async () => {
    
    try {
      const response = await getExpenses(monthFilter);

     

      const expenses = response?.data || [];
      





      setExpense(expenses);

    } catch (error) {
      console.error(error);
      setExpense([]);
    }
  };

  useEffect(() => {


    fetchExpenses()
    
  }, [monthFilter]);


  useEffect(() => {


   
    fetchDepartments();
  }, []);








  const resetExpenseForm = () => {
    setExpenseForm({
      expense_date: null,
      department_id: "",
      category: "",
      description: "",
      quantity: "1",
      amount: "",
    });
  };

  const handleExpenseSubmit = async (e) => {
    e.preventDefault();

    if (!validateExpenseForm()) return;

    try {
      setExpenseLoading(true);

      const payload = {
        expense_date: expenseForm.expense_date
          ?.toISOString()
          .split("T")[0],

        department_id: Number(expenseForm.department_id),

        category: expenseForm.category,

        description: expenseForm.description,

        quantity: String(expenseForm.quantity),

        amount: Number(expenseForm.amount),
      };

      if (isEditMode) {
        await updateExpense(editingExpenseId, payload);

        toast.success("Expense updated successfully");
      } else {
        await addExpenses(payload);

        toast.success("Expense added successfully");
      }

      fetchExpenses();

      setShowExpenseModal(false);
      resetExpenseForm();
      setExpenseErrors({});
      setIsEditMode(false);
      setEditingExpenseId(null);

    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.detail ||
        "Failed to save expense"
      );
    } finally {
      setExpenseLoading(false);
    }
  };

 

  const [reimbursementGlobalFilter, setReimbursementGlobalFilter] = useState("");
  const [reimbursementSorting, setReimbursementSorting] = useState([]);
  const [reimbursementPage, setReimbursementPage] = useState(1);
  const [reimbursementPageSize, setReimbursementPageSize] = useState(20);
  const [reimbursementFilter, setReimbursementFilter] = useState('this_month');

  const filteredExpenses = useMemo(() => {
    return expense.filter((item) => {
      const search = globalFilter.toLowerCase().trim();

      const matchCategory =
        categoryFilter === "all" ||
        (item.Category || "").toLowerCase().replaceAll(" ", "-") === categoryFilter;

      const matchSearch =
        !search ||
        item.ExpenseID?.toString().includes(search) ||
        item.DepartmentName?.toLowerCase().includes(search) ||
        item.Category?.toLowerCase().includes(search) ||
        item.Description?.toLowerCase().includes(search) ||
        item.Amount?.toString().includes(search) ||
        item.ExpenseDate?.toLowerCase().includes(search);

      return matchCategory && matchSearch;
    });
  }, [expense, categoryFilter, globalFilter]);






  const expenseColumns = useMemo(
    () => [
      {
        accessorKey: "ExpenseID",
        header: "Expense ID",
        cell: ({ getValue }) => (
          <span className="fw-semibold text-warning">{getValue()}</span>
        ),
      },
      {
        accessorKey: "ExpenseDate",
        header: "Date",
      },
      {
        accessorKey: "DepartmentName",
        header: "Department",
      },
      {
        accessorKey: "Category",
        header: "Category",
        cell: ({ getValue }) => {
          const category = getValue();
          const Icon = getCategoryIcon(category);

          return (
            <Badge
              bg=""
              className={`rounded-2 px-3 py-2 border-0 d-inline-flex align-items-center gap-2 ${getCategoryClassName(
                category
              )}`}
            >
              <Icon size={15} />
              {category}
            </Badge>
          );
        },
      },
      {
        accessorKey: "Description",
        header: "Description",
      },
      {
        accessorKey: "Quantity",
        header: "Quantity",
      },
      {
        accessorKey: "Amount",
        header: "Amount",
        cell: ({ getValue }) => (
          <span className="fw-bold text-success-light">
            ${formatAmount(getValue())}
          </span>
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
                  id: row.original.ExpenseID,
                  deleteApi: deleteExpense,
                  title: "You want to delete this expense record?",
                  successMessage: "Expense deleted successfully",
                  onSuccess: fetchExpenses
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

  const reimbursementColumns = useMemo(
    () => [
      {
        accessorKey: "RequestCode",
        header: "Request ID",
        cell: ({ getValue }) => (
          <span className="small fw-bold text-warning">{getValue()}</span>
        ),
      },
      {
        accessorKey: "reimbursement",
        header: "Staff Name",
        cell: ({ row }) => {
          const item = row.original;

          return (
            <div>
              <p className="small fw-semibold mb-0 text-dark">
                {item.StaffName
                }
              </p>
              <p className="small text-secondary-dark mb-0">
                {item.DepartmentOrSubject}
              </p>
            </div>
          );
        },
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row }) => {
          const item = row.original;

          return (
            <div className="d-flex align-items-start gap-1">
              <CiDollar size={16} className="text-danger" />

              <div>
                <span className="small fw-bold text-warning">
                  ${formatAmount(item.Amount)}
                </span>

                <p className="small text-secondary-dark mb-0">
                  {item.Equipments}
                </p>
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: "DateSubmitted",
        header: "Date Submitted",
        cell: ({ getValue }) => (
          <span className="small text-dark">{getValue()}</span>
        ),
      },
      {
        accessorKey: "ReceiptFile",
        header: "Proof",
        cell: ({ getValue }) => {
          const fileUrl = getValue();

          if (!fileUrl) {
            return <span className="text-muted">No file</span>;
          }

          return (
            <Button
              as="a"
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="rounded-3 d-inline-flex align-items-center gap-1"
            >
              <FiFileText size={14} />
              View
            </Button>
          );
        },
      },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => {
          const item = row.original;
          const statusData = getReimbursementStatus(item.Status);

          if (item.Status === "Pending") {
            return (
              <div className="d-flex align-items-center gap-2">
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 text-warning text-decoration-none"
                >
                  Approve
                </Button>

                <Button
                  variant="link"
                  size="sm"
                  className="p-0 text-success-light text-decoration-none"
                >
                  Decline
                </Button>
              </div>
            );
          }

          return (
            <Badge
              bg=""
              className={`rounded-pill px-3 py-2 border-0 ${statusData.className}`}
              style={statusData.style}
            >
              {item.Status}
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
              onClick={(e) => {
                e.stopPropagation();
                handleReimbursementEdit(row.original);
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
                  id: row.original.ReimbursementID,
                  deleteApi: deletereimbursement,
                  title: "You want to delete this Reimbursement record?",
                  successMessage: "Reimbursement deleted successfully",
                  onSuccess: getdatareimbursements
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

  const expensesTableInstance = useReactTable({
    data: filteredExpenses,
    columns: expenseColumns,
    state: {
      globalFilter,
      sorting,
    },
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: expensesPagination.perPage,
      },
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });







  const [expenseTrenddata, setExpenseTrend] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState(" Last 8 month");
  const [expensegetcategory, setExpensecategory] = useState([]);
  const [reimbursements, setReimbursements] = useState()


  const fetchTrendData = async (Period) => {
    try {

      const data = await getExpenseTrendChart(Period);


      setExpenseTrend(data.data)

    } catch (error) {
      console.error("Chart data fetch karne me error aayi:", error);
    }
  };

  useEffect(() => {

    fetchTrendData(selectedPeriod);

  }, [selectedPeriod])





  const Trendcategory = async () => {
    try {
      const data = await getExpensecategory();

      setExpensecategory(data.data)

    } catch (error) {
      console.error("Chart data fetch karne me error aayi:", error);
    }
  };



  const getdatareimbursements = async () => {
    try {
      const data = await getreimbursements(reimbursementFilter);
      

      setReimbursements(data.data)

    } catch (error) {
      console.error("Chart data fetch karne me error aayi:", error);
    }
  };


  useEffect(() => {


    Trendcategory()

  }, []);
  useEffect(() => {
    getdatareimbursements()



  }, [reimbursementFilter]);




  const uploadToCloudinary = async (file) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "profile_images");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dyqtrk0rd/auto/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await res.json();

    if (!data.secure_url) {
      throw new Error(
        data?.error?.message || "Cloudinary upload failed"
      );
    }

    return data.secure_url;
  };
  const validateReimbursement = () => {
    const errors = {};

    if (!reimbursementForm.staff_name?.trim()) {
      errors.staff_name = "Staff Name is required";
    }

    if (!reimbursementForm.department_or_subject) {
      errors.department_or_subject = "Department is required";
    }

    if (!reimbursementForm.amount) {
      errors.amount = "Amount is required";
    } else if (Number(reimbursementForm.amount) <= 0) {
      errors.amount = "Amount must be greater than 0";
    }

    if (!reimbursementForm.date_submitted) {
      errors.date_submitted = "Date Submitted is required";
    }

    if (!reimbursementForm.receipt_file) {
      errors.receipt_file = "Receipt File is required";
    }

    setReimbursementErrors(errors);

    return Object.keys(errors).length === 0;
  };


  const [showReimbursementModal, setShowReimbursementModal] = useState(false);
  const [reimbursementLoading, setReimbursementLoading] = useState(false);

  const [reimbursementForm, setReimbursementForm] = useState({
    request_code: "",
    staff_name: "",
    department_or_subject: "",
    amount: "",
    date_submitted: null,
    receipt_file: "",
    status: "Pending",
  });



  const handleReimbursementChange = (e) => {
    const { name, value } = e.target;

    setReimbursementForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateRequestCode = () => {
    const nextNumber = reimbursementsTracking.length + 1;

    return `REQ-${String(nextNumber).padStart(3, "0")}`;
  };


  const handleReimbursementSubmit = async (e) => {
    e.preventDefault();

    if (!validateReimbursement()) {
      toast.error("Please fix the validation errors");
      return;
    }

    try {
      setReimbursementLoading(true);

      const payload = {
        request_code: isReimbursementEdit
          ? reimbursementForm.request_code
          : generateRequestCode(),

        staff_name: reimbursementForm.staff_name,
        department_or_subject: reimbursementForm.department_or_subject,
        amount: Number(reimbursementForm.amount),
        date_submitted: reimbursementForm.date_submitted
          ?.toISOString()
          .split("T")[0],
        receipt_file: reimbursementForm.receipt_file,
        status: reimbursementForm.status,
      };

      // console.log(payload);
      if (isReimbursementEdit) {
        await updateReimbursement(editingReimbursementId, payload);
        toast.success("Reimbursement updated successfully");
      } else {
        await addreimbursements(payload);
        toast.success("Reimbursement added successfully");
      }

      // await addreimbursements(payload);



      setShowReimbursementModal(false);

      setReimbursementForm({
        request_code: "",
        staff_name: "",
        department_or_subject: "",
        amount: "",
        date_submitted: null,
        receipt_file: "",
        status: "Pending",
      });
    } catch (error) {
      console.error("API Error:", error.response?.data);
      console.error("Status:", error.response?.status);

      toast.error(
        error.response?.data?.detail || "Failed to add reimbursement"
      );

    } finally {
      setReimbursementLoading(false);
    }
  };


  const reimbursementTable = useReactTable({
    
    data: reimbursements || [],

    columns: reimbursementColumns,
    state: {
      globalFilter: reimbursementGlobalFilter,
      sorting: reimbursementSorting,
    },
    onGlobalFilterChange: setReimbursementGlobalFilter,
    onSortingChange: setReimbursementSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  useEffect(() => {
    expensesTableInstance.setPageIndex(page - 1);
  }, [page, expensesTableInstance]);

  useEffect(() => {
    expensesTableInstance.setPageSize(pageSize);
    expensesTableInstance.setPageIndex(0);
    setPage(1);
  }, [pageSize, expensesTableInstance]);






  return (
    <Container fluid className="bg-body px-0 pb-4">

      <Header
        text={expensesPageInfo.title}
        search={globalFilter}
        setSearch={setGlobalFilter}
      />

      <div className="px-3 px-lg-4">
        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Finance", path: "/finance" },
            { label: expensesPageInfo.title },
          ]}
        />

        <Row className="g-3 mt-2">
          <Col xs={12} lg={7} xl={5}>
            <Row className="g-3">
              <Col xs={12} md={7} lg={12}>
                <ChartCard
                  title="Expense Trend"
                  defaultDropdownValue={selectedPeriod}
                  onDropdownChange={setSelectedPeriod}
                  dropdownOptions={[
                    "Last 8 Months",
                    "Last 6 Months",
                    "Last 3 Months",
                    "this Month",
                  ]}
                  buttonText={expensesPageInfo.chartFilter}
                  options={getExpenseTrendChartOptions(expenseTrenddata)}
                  series={getExpenseTrendChartSeries(expenseTrenddata)}
                  type="bar"
                  height={280}
                  chartClassName="expense-trend-chart"

                />
              </Col>

              <Col xs={12} md={5} lg={12}>
                <Card className="border-0 rounded-4 shadow-sm bg-white h-100">
                  <Card.Body>
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <h2 className="card-heading mb-0">Expense Breakdown</h2>

                      <Button
                        variant="light"
                        size="sm"
                        className="rounded-3 border-0"
                      >
                        ...
                      </Button>
                    </div>

                    <Row className="g-3 align-items-center">
                      <Col xs={12} xl={5}>
                        <div className="d-flex justify-content-center">
                          <Chart
                            options={getExpenseBreakdownOptions(expenseBreakdown)}
                            series={getExpenseBreakdownSeries(expenseBreakdown)}
                            type="donut"
                            height={220}
                          />
                        </div>
                      </Col>

                      <Col xs={12} xl={7}>
                        <Row className="g-2">
                          {expensegetcategory.map((item, index) => (
                            <Col xs={6} xl={6} key={index}>
                              <div className="bg-dark-light rounded-3 p-2 h-100 d-flex gap-2">
                                <span
                                  className={`rounded-pill flex-shrink-0 ${getCategoryChartClassName(
                                    item.
                                      Category

                                  )}`}
                                  style={{ width: "7px" }}
                                />


                                <div className="flex-grow-1">
                                  <div className="d-flex align-items-center justify-content-between gap-2">
                                    <span className="small fw-semibold text-dark">
                                      {item.
                                        Category
                                      }
                                    </span>

                                    <span className="small fw-bold text-danger-subtle">
                                      {item.percentage}%
                                    </span>
                                  </div>

                                  <p className="small text-secondary-dark mb-0">
                                    ${formatAmount(item.TotalAmount
                                    )}
                                  </p>
                                </div>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          <Col xs={12} lg={5} xl={7}>
            <Card className="border-0 expense-right-card rounded-4 shadow-sm bg-white h-100 reimbursements-table-card">
              <Card.Body>
                <StudentsTable
                  title="Reimbursements Tracking"
                  table={reimbursementTable}
                  columns={reimbursementColumns}
                  page={reimbursementPage}
                  setPage={setReimbursementPage}
                  pageSize={reimbursementPageSize}
                  setPageSize={setReimbursementPageSize}
                  pageCount={1}
                  filteredData={reimbursements}
                  globalFilter={reimbursementGlobalFilter}
                  setGlobalFilter={setReimbursementGlobalFilter}
                  showSearch={false}
                  showPagination={false}
                  emptyMessage="No reimbursement record found"

                  headerAction={
                    <Button
                      size="sm"
                      onClick={() => setShowReimbursementModal(true)}
                    >
                      Add
                    </Button>
                  }
                  filters={[
                    {
                      value: reimbursementFilter,
                      onChange: setReimbursementFilter,

                      options: [
                        { label: "This Month", value: "this_month" },
                        { label: "Last Month", value: "last_month" },
                        { label: "Last 3 Month", value: "last_3_months" },
                        { label: "All", value: "all" },
                      ],
                    },
                  ]}
                  onRowClick={() => { }}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Card className="border-0 rounded-4 shadow-sm bg-white mt-3">
            <Card.Body className="d-flex flex-column">
              <StudentsTable
                title="Expenses"
                table={expensesTableInstance}
                columns={expenseColumns}
                page={page}
                setPage={setPage}
                pageSize={pageSize}
                setPageSize={setPageSize}
                pageCount={expensesTableInstance.getPageCount()}
                filteredData={filteredExpenses}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                showSearch={false}
                searchPlaceholder="Search expense"
                emptyMessage="No expenses found"
                headerAction={
                  <Button
                    size="sm"
                    onClick={() => setShowExpenseModal(true)}
                  >
                    Add Expense
                  </Button>
                }
                filters={[
                  {
                    value: categoryFilter,
                    onChange: setCategoryFilter,
                    options: expensesFilters.categoryOptions,
                  },
                  {
                    value: monthFilter,
                    onChange: setMonthFilter,
                    options: [
                      { label: "This Month", value: "this_month" },
                      { label: "Last Month", value: "last_month" },
                      { label: "Last 3 Month", value: "last_3_months" },
                      { label: "All", value: "all" },
                    ],
                  },
                ]}
                onRowClick={() => { }}
              />
            </Card.Body>
          </Card>
        </Row>
      </div>


      <Modal
        show={showExpenseModal}
        onHide={() => {
          setShowExpenseModal(false);
          resetExpenseForm();
          setExpenseErrors({});
        }}
        centered
        size="lg"
      >
        <Form onSubmit={handleExpenseSubmit}>
          <Modal.Header closeButton className="p-3">
            <Modal.Title>
              {isEditMode ? "Update Expense" : "Add Expense"}
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="g-3 p-3">

              {/* Expense Date */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Expense Date</Form.Label>

                  <Flatpickr
                    value={expenseForm.expense_date || null}
                    onChange={(date) => {
                      setExpenseForm((prev) => ({
                        ...prev,
                        expense_date: date?.[0] || null,
                      }));

                      setExpenseErrors((prev) => ({
                        ...prev,
                        expense_date: "",
                      }));
                    }}
                    className={`form-control ${expenseErrors.expense_date ? "is-invalid" : ""
                      }`}
                    options={{
                      dateFormat: "Y-m-d",
                      disableMobile: true,
                    }}
                  />

                  {expenseErrors.expense_date && (
                    <div className="invalid-feedback d-block">
                      {expenseErrors.expense_date}
                    </div>
                  )}
                </Form.Group>
              </Col>

              {/* Department */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Department</Form.Label>

                  <Form.Select
                    name="department_id"
                    value={expenseForm.department_id}
                    onChange={handleExpenseChange}
                    isInvalid={!!expenseErrors.department_id}
                  >
                    <option value="">
                      Select Department
                    </option>

                    {departments.map((department) => (
                      <option
                        key={department.DepartmentID}
                        value={department.DepartmentID || ""}
                      >
                        {department.DepartmentName}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {expenseErrors.department_id}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Category */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Category</Form.Label>

                  <Form.Control
                    type="text"
                    name="category"
                    value={expenseForm.category || ""}
                    onChange={handleExpenseChange}
                  />

                  <Form.Control.Feedback type="invalid">
                    {expenseErrors.category}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Quantity */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Quantity</Form.Label>

                  <Form.Control
                    type="text"
                    name="quantity"
                    value={expenseForm.quantity || ""}
                    onChange={handleExpenseChange}
                    placeholder="e.g. 2 Boxes, 5 Kg"
                    isInvalid={!!expenseErrors.quantity}
                  />

                  <Form.Control.Feedback type="invalid">
                    {expenseErrors.quantity}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Amount */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Amount</Form.Label>

                  <Form.Control
                    type="number"
                    min="0"
                    step="0.01"
                    name="amount"
                    value={expenseForm.amount || ""}
                    onChange={handleExpenseChange}
                    placeholder="Enter Amount"
                    isInvalid={!!expenseErrors.amount}
                  />

                  <Form.Control.Feedback type="invalid">
                    {expenseErrors.amount}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Description */}
              <Col md={12}>
                <Form.Group>
                  <Form.Label>Description</Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="description"
                    value={expenseForm.description || ""}
                    onChange={handleExpenseChange}
                    placeholder="Describe the expense..."
                    isInvalid={!!expenseErrors.description}
                  />

                  <Form.Control.Feedback type="invalid">
                    {expenseErrors.description}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>

          <Modal.Footer className="p-2">
            <Button
              variant="secondary"
              onClick={() => {
                setShowExpenseModal(false);
                resetExpenseForm();
                setExpenseErrors({});
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={expenseLoading}
            >
              {expenseLoading
                ? "Saving..."
                : isEditMode
                  ? "Update Expense"
                  : "Add Expense"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>


      <Modal
        show={showReimbursementModal}
        onHide={() => setShowReimbursementModal(false)}
        centered
        size="lg"
      >
        <Form onSubmit={handleReimbursementSubmit}>
          <Modal.Header closeButton className="p-3">
            <Modal.Title>Add Reimbursement</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="g-3 p-3">

              {/* Staff Name */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Staff Name</Form.Label>

                  <Form.Control
                    type="text"
                    name="staff_name"
                    value={reimbursementForm.staff_name || ""}
                    onChange={handleReimbursementChange}
                    isInvalid={!!reimbursementErrors.staff_name}
                  />

                  <Form.Control.Feedback type="invalid">
                    {reimbursementErrors.staff_name}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Department */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Department / Subject</Form.Label>

                  <Form.Select
                    name="department_or_subject"
                    value={
                      reimbursementForm.department_or_subject || ""
                    }
                    onChange={handleReimbursementChange}
                    isInvalid={
                      !!reimbursementErrors.department_or_subject
                    }
                  >
                    <option value="">
                      Select Department
                    </option>

                    {departments.map((department) => (
                      <option
                        key={department.DepartmentID}
                        value={department.DepartmentName}
                      >
                        {department.DepartmentName}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Control.Feedback type="invalid">
                    {
                      reimbursementErrors.department_or_subject
                    }
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Amount */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Amount</Form.Label>

                  <Form.Control
                    type="number"
                    name="amount"
                    min="1"
                    value={reimbursementForm.amount || ""}
                    onChange={handleReimbursementChange}
                    isInvalid={!!reimbursementErrors.amount}
                  />

                  <Form.Control.Feedback type="invalid">
                    {reimbursementErrors.amount}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>

              {/* Date */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Date Submitted</Form.Label>

                  <Flatpickr
                    value={
                      reimbursementForm.date_submitted || null
                    }
                    onChange={(date) => {
                      setReimbursementForm((prev) => ({
                        ...prev,
                        date_submitted: date?.[0] || null,
                      }));

                      setReimbursementErrors((prev) => ({
                        ...prev,
                        date_submitted: "",
                      }));
                    }}
                    className={`form-control ${reimbursementErrors.date_submitted
                      ? "is-invalid"
                      : ""
                      }`}
                    options={{
                      dateFormat: "Y-m-d",
                      disableMobile: true,
                    }}
                  />

                  {reimbursementErrors.date_submitted && (
                    <div className="invalid-feedback d-block">
                      {reimbursementErrors.date_submitted}
                    </div>
                  )}
                </Form.Group>
              </Col>

              {/* Receipt File */}
              <Col md={6}>
                <Form.Group>
                  <Form.Label>Receipt File</Form.Label>

                  <Form.Control
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    className={
                      reimbursementErrors.receipt_file
                        ? "is-invalid"
                        : ""
                    }
                    onChange={async (e) => {
                      const file = e.target.files?.[0];

                      if (!file) return;

                      try {
                        const fileUrl =
                          await uploadToCloudinary(file);

                        setReimbursementForm((prev) => ({
                          ...prev,
                          receipt_file: fileUrl,
                        }));

                        setReimbursementErrors((prev) => ({
                          ...prev,
                          receipt_file: "",
                        }));
                      } catch (error) {
                        toast.error(
                          "File upload failed"
                        );
                      }
                    }}
                  />

                  {reimbursementErrors.receipt_file && (
                    <div className="invalid-feedback d-block">
                      {reimbursementErrors.receipt_file}
                    </div>
                  )}
                </Form.Group>
              </Col>

            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() =>
                setShowReimbursementModal(false)
              }
            >
              Cancel
            </Button>

            <Button
              type="submit"
              disabled={reimbursementLoading}
            >
              {reimbursementLoading
                ? "Saving..."
                : "Add Reimbursement"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}
