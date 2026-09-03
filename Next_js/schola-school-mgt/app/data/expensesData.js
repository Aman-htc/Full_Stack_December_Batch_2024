export const expensesPageInfo = {
    title: "Expenses",
    breadcrumb: ["Dashboard", "Finance", "Expenses"],
    selectedPeriod: "This Month",
    chartFilter: "Last 8 Months",
    reimbursementFilter: "This Week",
    selectedCategory: "All Categories",
};

export const expenseTrend = [
    {
        month: "Jan",
        amount: 65000,
    },
    {
        month: "Feb",
        amount: 82000,
    },
    {
        month: "Mar",
        amount: 78000,
    },
    {
        month: "Apr",
        amount: 73250,
    },
    {
        month: "May",
        amount: 95000,
    },
    {
        month: "Jun",
        amount: 88000,
    },
    {
        month: "Jul",
        amount: 76000,
    },
    {
        month: "Aug",
        amount: 82000,
    },
];

export const expenseBreakdown = {
    totalExpense: 125000,
    categories: [
        {
            id: 1,
            title: "Salaries",
            amount: 68750,
            percentage: 55,
            icon: "salary",
        },
        {
            id: 2,
            title: "Supplies",
            amount: 18750,
            percentage: 15,
            icon: "supplies",
        },
        {
            id: 3,
            title: "Maintenance",
            amount: 15000,
            percentage: 12,
            icon: "maintenance",
        },
        {
            id: 4,
            title: "Events",
            amount: 12500,
            percentage: 10,
            icon: "events",
        },
        {
            id: 5,
            title: "Others",
            amount: 10000,
            percentage: 8,
            icon: "others",
        },
    ],
};

export const reimbursementsTracking = [
    {
        id: 1,
        requestId: "RQ-3001",
        staffName: "Argen Maulie",
        department: "Mathematics",
        amount: 120,
        dateSubmitted: "Mar 2, 2035",
        proof: "View File",
        status: "Approved",
        Equipments: "Books Purchase"
    },
    {
        id: 2,
        requestId: "RQ-3002",
        staffName: "Bella Cruz",
        department: "Science",
        amount: 250,
        dateSubmitted: "Mar 3, 2035",
        proof: "View File",
        status: "Declined",
        Equipments: "Lab Equipment"
    },
    {
        id: 3,
        requestId: "RQ-3003",
        staffName: "Francesca Gill",
        department: "Physical Edu.",
        amount: 180,
        dateSubmitted: "Mar 5, 2035",
        proof: "View File",
        status: "Approved",
        Equipments: "Sports Supplies"
    },
    {
        id: 4,
        requestId: "RQ-3004",
        staffName: "Dariah Ahmed",
        department: "Social Studies",
        amount: 300,
        dateSubmitted: "Mar 6, 2035",
        proof: "View File",
        status: "Pending",
        actions: ["Approve", "Decline"],
        Equipments: "Seminar Travel"
    },
    {
        id: 5,
        requestId: "RQ-3005",
        staffName: "Esteban Parez",
        department: "Arts",
        amount: 990,
        dateSubmitted: "Mar 8, 2035",
        proof: "View File",
        status: "Pending",
        actions: ["Approve", "Decline"],
        Equipments: "Art Materials"
    },
];

export const expensesFilters = {
    categoryOptions: [
        {
            id: 1,
            label: "All Categories",
            value: "all",
            active: true,
        },
        {
            id: 2,
            label: "Salaries",
            value: "salaries",
        },
        {
            id: 3,
            label: "Supplies",
            value: "supplies",
        },
        {
            id: 4,
            label: "Maintenance",
            value: "maintenance",
        },
        {
            id: 5,
            label: "Events",
            value: "events",
        },
        {
            id: 6,
            label: "Others",
            value: "others",
        },
    ],
    monthOptions: [
        {
            id: 1,
            label: "This Month",
            value: "this-month",
            active: true,
        },
        {
            id: 2,
            label: "Last Month",
            value: "last-month",
        },
        {
            id: 3,
            label: "Last 8 Months",
            value: "last-8-months",
        },
    ],
};

export const expensesTable = [
    {
        id: 1,
        expenseId: "EX-5001",
        date: "Mar 1, 2035",
        department: "Mathematics",
        category: "Supplies",
        description: "Graphing calculators",
        quantity: 15,
        amount: 750,
    },
    {
        id: 2,
        expenseId: "EX-5002",
        date: "Mar 1, 2035",
        department: "Science",
        category: "Maintenance",
        description: "Lab equipment servicing",
        quantity: "-",
        amount: 1200,
    },
    {
        id: 3,
        expenseId: "EX-5003",
        date: "Mar 2, 2035",
        department: "Language",
        category: "Supplies",
        description: "English literature textbooks",
        quantity: 40,
        amount: 1000,
    },
    {
        id: 4,
        expenseId: "EX-5004",
        date: "Mar 3, 2035",
        department: "Social",
        category: "Events",
        description: "Field trip bus rental",
        quantity: "2 buses",
        amount: 900,
    },
    {
        id: 5,
        expenseId: "EX-5005",
        date: "Mar 3, 2035",
        department: "Arts",
        category: "Supplies",
        description: "Paint sets & brushes",
        quantity: "25 sets",
        amount: 600,
    },
    {
        id: 6,
        expenseId: "EX-5006",
        date: "Mar 4, 2035",
        department: "Physical Education",
        category: "Maintenance",
        description: "Gym floor repairs",
        quantity: "-",
        amount: 2500,
    },
    {
        id: 7,
        expenseId: "EX-5007",
        date: "Mar 5, 2035",
        department: "Mathematics",
        category: "Salaries",
        description: "Monthly teacher salary",
        quantity: "-",
        amount: 5000,
    },
    {
        id: 8,
        expenseId: "EX-5008",
        date: "Mar 6, 2035",
        department: "Science",
        category: "Salaries",
        description: "Monthly teacher salary",
        quantity: "-",
        amount: 5000,
    },
    {
        id: 9,
        expenseId: "EX-5009",
        date: "Mar 7, 2035",
        department: "Administration",
        category: "Others",
        description: "Office internet and software renewals",
        quantity: "-",
        amount: 850,
    },
    {
        id: 10,
        expenseId: "EX-5010",
        date: "Mar 8, 2035",
        department: "Library",
        category: "Supplies",
        description: "New library books",
        quantity: 60,
        amount: 1350,
    },
];

export const expenseCategoryStyles = {
    Salaries: {
        label: "Salaries",
        color: "green",
        icon: "money",
    },
    Supplies: {
        label: "Supplies",
        color: "blue",
        icon: "box",
    },
    Maintenance: {
        label: "Maintenance",
        color: "pink",
        icon: "tool",
    },
    Events: {
        label: "Events",
        color: "purple",
        icon: "calendar",
    },
    Others: {
        label: "Others",
        color: "gray",
        icon: "folder",
    },
};

export const reimbursementStatusStyles = {
    Approved: {
        label: "Approved",
        color: "green",
    },
    Declined: {
        label: "Declined",
        color: "red",
    },
    Pending: {
        label: "Pending",
        color: "blue",
    },
};

export const expensesPagination = {
    currentPage: 1,
    perPage: 8,
    totalResults: 40,
    totalPages: 5,
};

const expensesData = {
    expensesPageInfo,
    expenseTrend,
    expenseBreakdown,
    reimbursementsTracking,
    expensesFilters,
    expensesTable,
    expenseCategoryStyles,
    reimbursementStatusStyles,
    expensesPagination,
};

export default expensesData;