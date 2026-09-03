export const feesCollectionPageInfo = {
    title: "Fees Collection",
    breadcrumb: ["Dashboard", "Finance", "Fees Collection"],
    selectedPeriod: "This Month",
    chartFilter: "Last 8 Months",
    selectedClass: "All Classes",
    selectedStatus: "All Status",
};

export const feesSummary = [
    {
        id: 1,
        title: "Fees Collected",
        value: "$92,500",
        amount: 92500,
        icon: "collected",
        bgType: "blue",
    },
    {
        id: 2,
        title: "Pending Fees",
        value: "$12,300",
        amount: 12300,
        icon: "pending",
        bgType: "cyan",
    },
    {
        id: 3,
        title: "Overdue Payments",
        value: "$4,750",
        amount: 4750,
        icon: "overdue",
        bgType: "pink",
    },
];

export const feesCollectionTrend = [
    {
        month: "Jan",
        amount: 65000,
    },
    {
        month: "Feb",
        amount: 58000,
    },
    {
        month: "Mar",
        amount: 67250,
    },
    {
        month: "Apr",
        amount: 54000,
    },
    {
        month: "May",
        amount: 76000,
    },
    {
        month: "Jun",
        amount: 69000,
    },
    {
        month: "Jul",
        amount: 61000,
    },
    {
        month: "Aug",
        amount: 82500,
    },
];

export const feesCollectionProgress = [
    {
        id: 1,
        title: "Tuition Fee",
        collected: 700000,
        total: 800000,
        percentage: 87.5,
    },
    {
        id: 2,
        title: "Books & Supplies",
        collected: 10500,
        total: 12000,
        percentage: 87.5,
    },
    {
        id: 3,
        title: "Activities",
        collected: 7200,
        total: 8000,
        percentage: 90,
    },
    {
        id: 4,
        title: "Miscellaneous",
        collected: 4800,
        total: 5550,
        percentage: 86.5,
    },
];

export const feesFilters = {
    classOptions: [
        {
            id: 1,
            label: "All Classes",
            value: "All",
            active: true,
        },
        {
            id: 2,
            label: "7A",
            value: "7A",
        },
        {
            id: 3,
            label: "7B",
            value: "7B",
        },
        {
            id: 4,
            label: "7C",
            value: "7C",
        },
        {
            id: 5,
            label: "8A",
            value: "8A",
        },
        {
            id: 6,
            label: "8B",
            value: "8B",
        },
    ],
    statusOptions: [
        {
            id: 1,
            label: "All Status",
            value: "All",
            active: true,
        },
        {
            id: 2,
            label: "Paid",
            value: "Paid",
        },
        {
            id: 3,
            label: "Pending",
            value: "Pending",
        },
        {
            id: 4,
            label: "Partially Paid",
            value: "Partially Paid",
        },
    ],
    monthOptions: [
        {
            id: 1,
            label: "All",
            value: "all",
            active: true,
        },
        {
            id: 2,
            label: "This Month",
            value: "this_month",
        },
        {
            id: 3,
            label: "Last Month",
            value: "last_month",
        },
        {
            id: 4,
            label: "Last 3 Months",
            value: "last_3_months",
        },
    ]
};

export const feesCollectionTable = [
    {
        id: 1,
        studentId: "S-2101",
        studentName: "Michael Chen",
        className: "7A",
        feeCategory: "Tuition Fee",
        totalAmount: 1200,
        dueDate: "Mar 15, 2035",
        status: "Paid",
    },
    {
        id: 2,
        studentId: "S-2101",
        studentName: "Michael Chen",
        className: "7A",
        feeCategory: "Books & Supplies",
        totalAmount: 250,
        dueDate: "Mar 20, 2035",
        status: "Pending",
    },
    {
        id: 3,
        studentId: "S-2101",
        studentName: "Michael Chen",
        className: "7A",
        feeCategory: "Activities",
        totalAmount: 300,
        dueDate: "Mar 25, 2035",
        status: "Paid",
    },
    {
        id: 4,
        studentId: "S-2101",
        studentName: "Michael Chen",
        className: "7A",
        feeCategory: "Miscellaneous",
        totalAmount: 150,
        dueDate: "Mar 30, 2035",
        status: "Partially Paid",
    },
    {
        id: 5,
        studentId: "S-2102",
        studentName: "Emma Williams",
        className: "7B",
        feeCategory: "Tuition Fee",
        totalAmount: 1200,
        dueDate: "Mar 12, 2035",
        status: "Partially Paid",
    },
    {
        id: 6,
        studentId: "S-2102",
        studentName: "Emma Williams",
        className: "7B",
        feeCategory: "Books & Supplies",
        totalAmount: 200,
        dueDate: "Mar 18, 2035",
        status: "Paid",
    },
    {
        id: 7,
        studentId: "S-2102",
        studentName: "Emma Williams",
        className: "7B",
        feeCategory: "Activities",
        totalAmount: 250,
        dueDate: "Mar 20, 2035",
        status: "Pending",
    },
    {
        id: 8,
        studentId: "S-2102",
        studentName: "Emma Williams",
        className: "7B",
        feeCategory: "Miscellaneous",
        totalAmount: 100,
        dueDate: "Mar 28, 2035",
        status: "Paid",
    },
    {
        id: 9,
        studentId: "S-2103",
        studentName: "Rajesh Kumar",
        className: "7C",
        feeCategory: "Tuition Fee",
        totalAmount: 1200,
        dueDate: "Mar 10, 2035",
        status: "Overdue",
    },
    {
        id: 10,
        studentId: "S-2103",
        studentName: "Rajesh Kumar",
        className: "7C",
        feeCategory: "Books & Supplies",
        totalAmount: 220,
        dueDate: "Mar 15, 2035",
        status: "Pending",
    },
    {
        id: 11,
        studentId: "S-2103",
        studentName: "Rajesh Kumar",
        className: "7C",
        feeCategory: "Activities",
        totalAmount: 300,
        dueDate: "Mar 22, 2035",
        status: "Paid",
    },
    {
        id: 12,
        studentId: "S-2103",
        studentName: "Rajesh Kumar",
        className: "7C",
        feeCategory: "Miscellaneous",
        totalAmount: 150,
        dueDate: "Mar 29, 2035",
        status: "Partially Paid",
    },
    {
        id: 13,
        studentId: "S-2104",
        studentName: "Hannah Lee",
        className: "8A",
        feeCategory: "Tuition Fee",
        totalAmount: 1200,
        dueDate: "Mar 14, 2035",
        status: "Paid",
    },
    {
        id: 14,
        studentId: "S-2104",
        studentName: "Hannah Lee",
        className: "8A",
        feeCategory: "Books & Supplies",
        totalAmount: 250,
        dueDate: "Mar 19, 2035",
        status: "Overdue",
    },
    {
        id: 15,
        studentId: "S-2104",
        studentName: "Hannah Lee",
        className: "8A",
        feeCategory: "Activities",
        totalAmount: 280,
        dueDate: "Mar 24, 2035",
        status: "Paid",
    },
    {
        id: 16,
        studentId: "S-2104",
        studentName: "Hannah Lee",
        className: "8A",
        feeCategory: "Miscellaneous",
        totalAmount: 120,
        dueDate: "Mar 27, 2035",
        status: "Pending",
    },
    {
        id: 17,
        studentId: "S-2105",
        studentName: "Thomas Green",
        className: "8B",
        feeCategory: "Tuition Fee",
        totalAmount: 1200,
        dueDate: "Mar 18, 2035",
        status: "Paid",
    },
    {
        id: 18,
        studentId: "S-2105",
        studentName: "Thomas Green",
        className: "8B",
        feeCategory: "Books & Supplies",
        totalAmount: 230,
        dueDate: "Mar 20, 2035",
        status: "Partially Paid",
    },
    {
        id: 19,
        studentId: "S-2105",
        studentName: "Thomas Green",
        className: "8B",
        feeCategory: "Activities",
        totalAmount: 270,
        dueDate: "Mar 25, 2035",
        status: "Pending",
    },
    {
        id: 20,
        studentId: "S-2105",
        studentName: "Thomas Green",
        className: "8B",
        feeCategory: "Miscellaneous",
        totalAmount: 150,
        dueDate: "Mar 30, 2035",
        status: "Paid",
    },
];

export const feesStatusStyles = {
    Paid: {
        label: "Paid",
        color: "green",
    },
    Pending: {
        label: "Pending",
        color: "pink",
    },
    "Partially Paid": {
        label: "Partially Paid",
        color: "cyan",
    },
    Overdue: {
        label: "Overdue",
        color: "red",
    },
};

export const feesCollectionPagination = {
    currentPage: 1,
    perPage: 5,
    totalResults: 25,
    totalPages: 5,
};

const feesCollectionData = {
    feesCollectionPageInfo,
    feesSummary,
    feesCollectionTrend,
    feesCollectionProgress,
    feesFilters,
    feesCollectionTable,
    feesStatusStyles,
    feesCollectionPagination,
};

export default feesCollectionData;