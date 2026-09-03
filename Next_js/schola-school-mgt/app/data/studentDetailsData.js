export const studentProfile = {
    id: 1,
    studentId: "S-2106",
    name: "Isabella Rossi",
    className: "Class 8C",
    grade: "Grade 8",
    section: "C",
    rollNumber: "18",
    status: "Active",
    avatar: "",
    gender: "Female",
    dateOfBirth: "May 18, 2022",
    bloodGroup: "B+",
    email: "isabella.rossi@student.schoola.com",
    phoneNumber: "+39 812 9988 7766",
    address: "14 Via Milano, Rome, Italy",
    admissionDate: "Aug 12, 2029",
    academicYear: "2034 - 2035",
};

export const parentGuardianInfo = [
    {
        id: 1,
        relation: "Father",
        name: "Marco Rossi",
        phone: "+39 331 222 6666",
        email: "marco.rossi@gmail.com",
        occupation: "Architect",
        isPrimary: true,
    },
    {
        id: 2,
        relation: "Mother",
        name: "Elena Rossi",
        phone: "+39 351 444 7788",
        email: "elena.rossi@gmail.com",
        occupation: "Doctor",
        isPrimary: false,
    },
    {
        id: 3,
        relation: "Alternative Guardian",
        name: "Lucia Bianchi",
        phone: "+39 331 555 6677",
        email: "lucia.bianchi@gmail.com",
        occupation: "Teacher",
        isPrimary: false,
    },
];

export const studentDocuments = [
    {
        id: 1,
        title: "ReportCard_IsabellaRossi_Grade8",
        fileType: "PDF",
        size: "2.4 MB",
        uploadedDate: "Mar 12, 2035",
        icon: "pdf",
        url: "#",
    },
    {
        id: 2,
        title: "Certificate_ScienceFair_Winner",
        fileType: "PDF",
        size: "1.8 MB",
        uploadedDate: "Feb 22, 2035",
        icon: "pdf",
        url: "#",
    },
    {
        id: 3,
        title: "IDCard_Student_S2106_Isabella",
        fileType: "PDF",
        size: "1.9 MB",
        uploadedDate: "Jan 18, 2035",
        icon: "pdf",
        url: "#",
    },
    {
        id: 4,
        title: "Medical_Report_Isabella_Rossi",
        fileType: "PDF",
        size: "1.2 MB",
        uploadedDate: "Jan 08, 2035",
        icon: "pdf",
        url: "#",
    },
];

export const studentCalendar = {
    month: "March",
    year: 2035,
    selectedDate: 14,
    weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    summary: {
        present: 14,
        late: 3,
        sick: 2,
        absent: 1,
    },
    dates: [
        { date: 1, status: "present" },
        { date: 2, status: "selected" },
        { date: 3, status: "" },
        { date: 4, status: "" },
        { date: 5, status: "late" },
        { date: 6, status: "present" },
        { date: 7, status: "present" },
        { date: 8, status: "present" },
        { date: 9, status: "present" },
        { date: 10, status: "" },
        { date: 11, status: "late" },
        { date: 12, status: "sick" },
        { date: 13, status: "present" },
        { date: 14, status: "selected" },
        { date: 15, status: "present" },
        { date: 16, status: "present" },
        { date: 17, status: "" },
        { date: 18, status: "present" },
        { date: 19, status: "present" },
        { date: 20, status: "present" },
        { date: 21, status: "present" },
        { date: 22, status: "late" },
        { date: 23, status: "present" },
        { date: 24, status: "" },
        { date: 25, status: "" },
        { date: 26, status: "" },
        { date: 27, status: "" },
        { date: 28, status: "" },
        { date: 29, status: "" },
        { date: 30, status: "absent" },
        { date: 31, status: "" },
    ],
};

export const scholarships = [
    {
        id: 1,
        title: "Global Young Achievers Award",
        category: "Finance",
        type: "Award",
        amount: "$1,200",
        status: "Active",
    },
    {
        id: 2,
        title: "STEM for Girls Initiative",
        category: "Enrichment",
        type: "Program",
        amount: "Full Program Support",
        status: "Approved",
    },
];

export const healthMedicalInfo = [
    {
        id: 1,
        title: "Medical Record",
        description: "Routine health check completed Feb 2035 - Fit for activities",
        type: "record",
        severity: "Normal",
    },
    {
        id: 2,
        title: "Pollen Allergy",
        description: "Mild pollen allergy - medication prescribed.",
        type: "allergy",
        severity: "Mild",
    },
    {
        id: 3,
        title: "Peanut Allergy",
        description: "Severe reaction - strictly avoid exposure; EpiPen required.",
        type: "allergy",
        severity: "High",
    },
];

export const academicPerformanceScore = {
    averageScore: 3.9,
    totalScore: 4.0,
    percentage: 96,
    grade: "A+",
    comment:
        "Isabella shows consistent excellence in her studies and leadership in group projects. Keep aiming high!",
};

export const academicPerformanceChart = [
    { month: "Jan", score: 90 },
    { month: "Feb", score: 88 },
    { month: "Mar", score: 85 },
    { month: "Apr", score: 92 },
    { month: "May", score: 95 },
    { month: "Jun", score: 96 },
];

export const academicSubjects = [
    {
        id: 1,
        subject: "Mathematics",
        teacher: "Mr. Daniel Kim",
        score: 96,
        grade: "A+",
        status: "Excellent",
    },
    {
        id: 2,
        subject: "Science",
        teacher: "Ms. Laura Smith",
        score: 94,
        grade: "A",
        status: "Excellent",
    },
    {
        id: 3,
        subject: "English",
        teacher: "Mrs. Emma Watson",
        score: 91,
        grade: "A",
        status: "Good",
    },
    {
        id: 4,
        subject: "History",
        teacher: "Mr. Robert Brown",
        score: 88,
        grade: "B+",
        status: "Good",
    },
];

export const extracurricularActivities = [
    {
        id: 1,
        club: "Swimming",
        role: "Team Member",
        achievements: "Won 2 Silver Medals (City Meet)",
        duration: "2029 – Present",
        advisor: "Coach Andrea V.",
        icon: "Swimming",
    },
    {
        id: 2,
        club: "Dance",
        role: "Lead Performer",
        achievements: "Performed at National Festival",
        duration: "2030 – Present",
        advisor: "Ms. Clara F.",
        icon: "Dance",
    },
    {
        id: 3,
        club: "Robotics",
        role: "Programmer",
        achievements: "1st Place in School Robotics Fair",
        duration: "2033 -Present",
        advisor: "Mr. Daniel K.",
        icon: "Robotics",
    },
];


export const behaviorDisciplineLog = [
    {
        id: 1,
        date: "Jan 10, 2035",
        type: "Positive Note",
        details: "Helped classmates during group project",
        reportedBy: "Ms. Lee Record",
        statusAction: "Recognition Recorded",
    },
    {
        id: 2,
        date: "Feb 02, 2035",
        type: "Positive Note",
        details: "Volunteered in school event organization",
        reportedBy: "Admin Office",
        statusAction: "Recognition Recorded",
    },
    {
        id: 3,
        date: "Feb 18, 2035",
        type: "Minor Issue",
        details: "Late submission of homework",
        reportedBy: "Mr. Maulie",
        statusAction: "Warning Issued",
    },
    {
        id: 4,
        date: "Mar 05, 2035",
        type: "Minor Issue",
        details: "Absent without prior notice",
        reportedBy: "Homeroom Teacher",
        statusAction: "Parent Notified",
    },
];

export const feeSummary = {
    totalFee: "$4,200",
    paidAmount: "$3,500",
    pendingAmount: "$700",
    dueDate: "Apr 15, 2035",
    status: "Partially Paid",
};

export const recentPayments = [
    {
        id: 1,
        invoiceNo: "INV-2035-001",
        title: "Tuition Fee",
        amount: "$1,500",
        paidDate: "Jan 12, 2035",
        status: "Paid",
    },
    {
        id: 2,
        invoiceNo: "INV-2035-002",
        title: "Library Fee",
        amount: "$200",
        paidDate: "Feb 10, 2035",
        status: "Paid",
    },
    {
        id: 3,
        invoiceNo: "INV-2035-003",
        title: "Activity Fee",
        amount: "$700",
        paidDate: "",
        status: "Pending",
    },
];

export const studentDetailsData = {
    studentProfile,
    parentGuardianInfo,
    studentDocuments,
    studentCalendar,
    scholarships,
    healthMedicalInfo,
    academicPerformanceScore,
    academicPerformanceChart,
    academicSubjects,
    extracurricularActivities,
    behaviorDisciplineLog,
    feeSummary,
    recentPayments,

};

export default studentDetailsData;
