export const noticeBoardPageInfo = {
    title: "Notice Board",
    breadcrumb: ["Dashboard", "Notice Board"],
    selectedCategory: "All Categories",
    sortBy: "Latest",
    totalResults: 25,
};

export const noticeBoardFilters = {
    categoryOptions: [
        {
            id: 1,
            label: "All Categories",
            value: "all",
            active: true,
        },
        {
            id: 2,
            label: "Academic",
            value: "academic",
        },
        {
            id: 3,
            label: "Events",
            value: "events",
        },
        {
            id: 4,
            label: "Maintenance",
            value: "maintenance",
        },
        {
            id: 5,
            label: "Arts",
            value: "arts",
        },
        {
            id: 6,
            label: "Finance",
            value: "finance",
        },
        {
            id: 7,
            label: "Notice",
            value: "notice",
        },
        {
            id: 8,
            label: "Training",
            value: "training",
        },
        {
            id: 9,
            label: "Announcement",
            value: "announcement",
        },
    ],
    sortOptions: [
        {
            id: 1,
            label: "Latest",
            value: "Latest",
            active: true,
        },
        {
            id: 2,
            label: "Oldest",
            value: "Oldest",
        },
        {
            id: 3,
            label: "Active",
            value: "Active",
        },
        {
            id: 4,
            label: "Scheduled",
            value: "Scheduled",
        },
        {
            id: 5,
            label: "Draft",
            value: "Draft",
        },
        {
            id: 6,
            label: "Expired",
            value: "Expired",
        },
    ],
};

export const noticeList = [
    {
        id: 1,
        category: "Academic",
        title: "Midterm Exam Timetable Released",
        audience: "Students (Grade 7-9)",
        postDate: "Mar 5, 2035",
        expDate: "Mar 8, 2035",
        createdBy: "Academic Office",
        status: "Active",
        views: 542,
        image: "",
        content:
            "The official midterm exam timetable for Grades 7, 8 and 9 has been released. Students are advised to check their class schedules and prepare accordingly. Exams will begin on March 20, 2035 and continue until March 28, 2035. Detailed subject-wise schedules are available in the attachments below.",
        attachment: {
            fileName: "Midterm_Timetable_2035.pdf",
            fileType: "PDF",
            size: "2.4 MB",
            url: "#",
        },
    },
    {
        id: 2,
        category: "Events",
        title: "Parent-Teacher Meeting Invitation",
        audience: "Parents & Teachers",
        postDate: "Mar 6, 2035",
        expDate: "Mar 12, 2035",
        createdBy: "Principal's Office",
        status: "Active",
        views: 438,
        image: "",
        content:
            "Parents are invited to attend the Parent-Teacher Meeting for academic progress discussion. Teachers will share student performance reports, attendance records, and improvement suggestions.",
        attachment: {
            fileName: "PTM_Invitation_March_2035.pdf",
            fileType: "PDF",
            size: "1.5 MB",
            url: "#",
        },
    },
    {
        id: 3,
        category: "Maintenance",
        title: "Science Lab Maintenance Notice",
        audience: "Students & Teachers (Science Dept.)",
        postDate: "Mar 3, 2035",
        expDate: "Mar 10, 2035",
        createdBy: "Science Department",
        status: "Scheduled",
        views: 216,
        image: "",
        content:
            "The science laboratory will remain unavailable during the scheduled maintenance period. Practical classes will be shifted to the demonstration room as per the revised timetable.",
        attachment: {
            fileName: "Science_Lab_Maintenance.pdf",
            fileType: "PDF",
            size: "960 KB",
            url: "#",
        },
    },
    {
        id: 4,
        category: "Arts",
        secondCategory: "Events",
        title: "School Choir Rehearsal Postponed",
        audience: "Choir Members",
        postDate: "Mar 8, 2035",
        expDate: "Mar 25, 2035",
        createdBy: "Music Department",
        status: "Draft",
        views: 128,
        image: "",
        content:
            "The school choir rehearsal has been postponed due to auditorium maintenance. New rehearsal dates will be shared soon by the Music Department.",
        attachment: null,
    },
    {
        id: 5,
        category: "Finance",
        title: "Fee Payment Reminder (Grade 9)",
        audience: "Grade 9 Students & Parents",
        postDate: "Mar 4, 2035",
        expDate: "Mar 8, 2035",
        createdBy: "Finance Office",
        status: "Active",
        views: 612,
        image: "",
        content:
            "This is a reminder for Grade 9 students and parents to complete pending fee payments before the due date. Late payment may attract additional charges.",
        attachment: {
            fileName: "Grade9_Fee_Reminder.pdf",
            fileType: "PDF",
            size: "720 KB",
            url: "#",
        },
    },
    {
        id: 6,
        category: "Notice",
        title: "National Holiday – School Closed",
        audience: "Entire School",
        postDate: "Mar 25, 2035",
        expDate: "Apr 8, 2035",
        createdBy: "Admin Office",
        status: "Scheduled",
        views: 354,
        image: "",
        content:
            "The school will remain closed on the national holiday. Regular classes and office operations will resume from the next working day.",
        attachment: null,
    },
    {
        id: 7,
        category: "Training",
        title: "Teacher Development Workshop",
        audience: "Teachers",
        postDate: "Feb 20, 2035",
        expDate: "Mar 6, 2035",
        createdBy: "HR Department",
        status: "Expired",
        views: 286,
        image: "",
        content:
            "A teacher development workshop was organized to enhance classroom management, digital teaching methods, and student engagement techniques.",
        attachment: {
            fileName: "Teacher_Workshop_Guide.pdf",
            fileType: "PDF",
            size: "1.2 MB",
            url: "#",
        },
    },
    {
        id: 8,
        category: "Events",
        title: "Annual Sports Competition",
        audience: "Students & Teachers",
        postDate: "Mar 12, 2035",
        expDate: "Mar 18, 2035",
        createdBy: "Sports Department",
        status: "Active",
        views: 497,
        image: "",
        content:
            "Annual Sports Competition registration is now open. Students can participate in athletics, football, basketball, badminton and other sports events.",
        attachment: {
            fileName: "Sports_Competition_Schedule.pdf",
            fileType: "PDF",
            size: "2.1 MB",
            url: "#",
        },
    },
    {
        id: 9,
        category: "Announcement",
        title: "Field Trip Consent Forms Due",
        audience: "Grade 7 & 8 Students",
        postDate: "Mar 14, 2035",
        expDate: "Mar 22, 2035",
        createdBy: "Class Advisor",
        status: "Active",
        views: 321,
        image: "",
        content:
            "Students of Grade 7 and 8 must submit signed field trip consent forms to their class advisor before the due date.",
        attachment: {
            fileName: "Field_Trip_Consent_Form.pdf",
            fileType: "PDF",
            size: "850 KB",
            url: "#",
        },
    },
];

export const selectedNotice = noticeList[0];

export const noticeStatusStyles = {
    Active: {
        label: "Active",
        color: "green",
    },
    Scheduled: {
        label: "Scheduled",
        color: "blue",
    },
    Draft: {
        label: "Draft",
        color: "gray",
    },
    Expired: {
        label: "Expired",
        color: "red",
    },
};

export const noticeCategoryStyles = {
    Academic: {
        label: "Academic",
        color: "pink",
    },
    Events: {
        label: "Events",
        color: "blue",
    },
    Maintenance: {
        label: "Maintenance",
        color: "cyan",
    },
    Arts: {
        label: "Arts",
        color: "purple",
    },
    Finance: {
        label: "Finance",
        color: "green",
    },
    Notice: {
        label: "Notice",
        color: "dark-blue",
    },
    Training: {
        label: "Training",
        color: "orange",
    },
    Announcement: {
        label: "Announcement",
        color: "pink",
    },
};

export const noticeActions = [
    {
        id: 1,
        label: "Edit",
        value: "edit",
        type: "primary",
    },
    {
        id: 2,
        label: "Delete",
        value: "delete",
        type: "secondary",
    },
    {
        id: 3,
        label: "Share",
        value: "share",
        type: "secondary",
    },
    {
        id: 4,
        label: "Archive",
        value: "archive",
        type: "secondary",
    },
];

export const noticePagination = {
    currentPage: 1,
    perPage: 9,
    totalResults: 25,
    totalPages: 3,
};

const noticeBoardData = {
    noticeBoardPageInfo,
    noticeBoardFilters,
    noticeList,
    selectedNotice,
    noticeStatusStyles,
    noticeCategoryStyles,
    noticeActions,
    noticePagination,
};

export default noticeBoardData;