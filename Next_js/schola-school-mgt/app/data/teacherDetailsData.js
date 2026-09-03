export const teacherProfile = {
    id: 1,
    teacherId: "T-1003",
    name: "Cliff William",
    role: "Full-Time",
    subject: "English Language",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
};

export const teacherPersonalInfo = [
    {
        id: 1,
        label: "Gender",
        value: "Male",

    },
    {
        id: 2,
        label: "Date of Birth",
        value: "April 15, 1990",

    },
    {
        id: 3,
        label: "Email Address",
        value: "cliff.william@studixschool.org",

    },
    {
        id: 4,
        label: "Phone Number",
        value: "+62 811 5567 2345",
    },
    {
        id: 5,
        label: "Address",
        value: "221B Baker Street, London, United Kingdom"
    },
];

export const teacherDocuments = [
    {
        id: 1,
        title: "Employment_Contract_CliffWilliam",
        fileType: "PDF",
        size: "2.4 MB",
    },
    
    {
        id: 2,
        title: "Certification_EnglishTeaching_C...",
        fileType: "PDF",
        size: "1.8 MB",
    },
    {
        id: 3,
        title: "Certification_EnglishTeaching_C...",
        fileType: "PDF",
        size: "1.8 MB",
    },
    {
        id: 4,
        title: "Certification_EnglishTeaching_C...",
        fileType: "PDF",
        size: "1.8 MB",
    },
    {
        id: 5,
        title: "Certification_EnglishTeaching_C...",
        fileType: "PDF",
        size: "1.8 MB",
    },
    
    
    
];

export const workloadSummary = [
    {
        month: "Jul",
        totalClasses: 130,
        teachingHours: 28,
        extraDuties: 24,
    },
    {
        month: "Aug",
        totalClasses: 138,
        teachingHours: 34,
        extraDuties: 26,
    },
    {
        month: "Sep",
        totalClasses: 132,
        teachingHours: 25,
        extraDuties: 28,
    },
    {
        month: "Oct",
        totalClasses: 149,
        teachingHours: 34,
        extraDuties: 32,
    },
    {
        month: "Nov",
        totalClasses: 145,
        teachingHours: 32,
        extraDuties: 31,
    },
    {
        month: "Dec",
        totalClasses: 146,
        teachingHours: 35,
        extraDuties: 30,
    },
    {
        month: "Jan",
        totalClasses: 158,
        teachingHours: 38,
        extraDuties: 34,
    },
    {
        month: "Feb",
        totalClasses: 149,
        teachingHours: 36,
        extraDuties: 33,
    },
];

export const weeklySchedule = [
    {
        id: 1,
        day: "Mon",
        slots: [
            {
                id: 101,
                time: "09:00",
                className: "8C",
                subject: "English Language",
                type: "class",
            },
            {
                id: 102,
                time: "15:00",
                className: "9A",
                subject: "English Literature",
                type: "class",
            },
        ],
    },
    {
        id: 2,
        day: "Tue",
        slots: [
            {
                id: 103,
                time: "10:00",
                className: "8C",
                subject: "English Language",
                type: "class",
            },
        ],
    },
    {
        id: 3,
        day: "Wed",
        slots: [
            {
                id: 104,
                time: "09:00",
                className: "9A",
                subject: "English Literature",
                type: "class",
            },
            {
                id: 105,
                time: "11:00",
                className: "8C",
                subject: "English Language",
                type: "class",
            },
        ],
    },
    {
        id: 4,
        day: "Thu",
        slots: [
            {
                id: 106,
                time: "10:00",
                className: "9B",
                subject: "English Grammar",
                type: "class",
            },
            {
                id: 107,
                time: "14:00",
                className: "8C",
                subject: "English Language",
                type: "class",
            },
        ],
    },
    {
        id: 5,
        day: "Fri",
        slots: [
            {
                id: 108,
                time: "09:00",
                className: "8C",
                subject: "English Language",
                type: "class",
            },
            {
                id: 109,
                time: "13:00",
                className: "9B",
                subject: "English Grammar",
                type: "class",
            },
        ],
    },
];

export const scheduleTimeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
];

export const developmentTraining = [
    {
        id: 1,
        event: "Digital Learning Tools Training",
        category: "Training",
        date: "Apr 2, 2035",
        lastPlatform: "Zoom - International Education Network",
        status: "Upcoming",
    },
    {
        id: 2,
        event: "Classroom Management Certification",
        category: "Certification",
        date: "Feb 8, 2035",
        lastPlatform: "Cambridge University Online (UK)",
        status: "Completed",
    },
    {
        id: 3,
        event: "Advanced English Teaching Methods",
        category: "Workshop",
        date: "Jan 12, 2035",
        lastPlatform: "London, UK - British Council",
        status: "Completed",
    },
];

export const teacherCalendar = {
    January: {
        present: 9,
        late: 3,
        onLeave: 2,

        dates: [
            { date: 2, status: "present" },
            { date: 3, status: "present" },
            { date: 4, status: "late" },
            { date: 5, status: "present" },
            { date: 6, status: "present" },
            { date: 7, status: "late" },
            { date: 8, status: "present" },
            { date: 9, status: "onLeave" },
            { date: 10, status: "present" },
            { date: 11, status: "late" },
            { date: 12, status: "present" },
            { date: 13, status: "onLeave" },
            { date: 14, status: "present" },
            { date: 15, status: "present" },
        ],
    },

    February: {
        present: 2,
        late: 2,
        onLeave: 1,

        dates: [
            { date: 1, status: "present" },
            { date: 5, status: "late" },
            { date: 8, status: "present" },
            { date: 14, status: "onLeave" },
            { date: 20, status: "late" },
        ],
    },

    March: {
        present: 11,
        late: 4,
        onLeave: 2,

        dates: [
            { date: 1, status: "present" },
            { date: 2, status: "selected" },
            { date: 5, status: "late" },
            { date: 6, status: "present" },
            { date: 7, status: "late" },
            { date: 8, status: "present" },
            { date: 9, status: "present" },
            { date: 12, status: "late" },
            { date: 13, status: "present" },
            { date: 14, status: "onLeave" },
            { date: 15, status: "present" },
            { date: 16, status: "present" },
            { date: 19, status: "present" },
            { date: 20, status: "present" },
            { date: 21, status: "present" },
            { date: 22, status: "late" },
            { date: 23, status: "present" },
            { date: 28, status: "onLeave" },
        ],
    },

    April: {
        present: 8,
        late: 5,
        onLeave: 3,

        dates: [
            { date: 1, status: "late" },
            { date: 4, status: "present" },
            { date: 5, status: "present" },
            { date: 7, status: "present" },
            { date: 9, status: "present" },
            { date: 10, status: "present" },
            { date: 13, status: "present" },
            { date: 15, status: "present" },
            { date: 16, status: "present" },
            { date: 20, status: "onLeave" },
            { date: 21, status: "onLeave" },
            { date: 25, status: "onLeave" },
            { date: 2, status: "late" },
            { date: 26, status: "late" },
            { date: 27, status: "late" },
            { date: 29, status: "late" },
            { date: 3, status: "late" },
        ],
    },

    May: {
        present: 14,
        late: 1,
        onLeave: 1,

        dates: [
            { date: 1, status: "present" },
            { date: 2, status: "present" },
            { date: 3, status: "present" },
            { date: 4, status: "present" },
            { date: 5, status: "present" },
            { date: 6, status: "present" },
            { date: 7, status: "present" },
            { date: 8, status: "present" },
            { date: 9, status: "present" },
            { date: 10, status: "late" },
            { date: 11, status: "present" },
            { date: 12, status: "present" },
            { date: 13, status: "present" },
            { date: 14, status: "present" },
            { date: 15, status: "present" },
            { date: 16, status: "present" },
            { date: 21, status: "onLeave" },
        ],
    },

    June: {
        present: 10,
        late: 3,
        onLeave: 4,

        dates: [
            { date: 1, status: "onLeave" },
            { date: 3, status: "present" },
            { date: 5, status: "late" },
            { date: 6, status: "present" },
            { date: 8, status: "present" },
            { date: 10, status: "late" },
            { date: 12, status: "present" },
            { date: 14, status: "onLeave" },
            { date: 15, status: "present" },
            { date: 17, status: "present" },
            { date: 18, status: "late" },
            { date: 20, status: "present" },
            { date: 22, status: "onLeave" },
            { date: 24, status: "present" },
            { date: 26, status: "present" },
            { date: 28, status: "onLeave" },
            { date: 30, status: "present" },
        ],
    },
};

export const leaveRequest = {
    id: 1,
    type: "Sick Leave",
    reason: "Fever and medical rest advised by doctor",
    requestedDate: "March 28, 2035",
    status: "Pending",
    actions: ["Approve", "Decline"],
};

export const teacherPerformance = [
    {
        id: 1,
        title: "Grading Timeliness",
        value: 95,
        target: 90,
        status: "Excellent",
    },
    {
        id: 2,
        title: "Student Avg. Grade",
        value: 85,
        target: 90,
        status: "Good",
    },
    {
        id: 3,
        title: "Student Attendance",
        value: 76,
        target: 90,
        status: "Needs Improvement",
    },
    {
        id: 4,
        title: "Parent Feedback",
        value: 65,
        target: 85,
        status: "Below Standard",
    },
];

export const teacherDetailsPageInfo = {
    title: "Teacher Details",
    breadcrumb: ["Dashboard", "Teachers", "Teacher Details"],
    selectedPeriod: "Last 8 months",
    scheduleView: "Weekly",
    trainingFilter: "This Semester",
    performanceFilter: "Last Month",
};

const teacherDetailsData = {
    teacherDetailsPageInfo,
    teacherProfile,
    teacherPersonalInfo,
    teacherDocuments,
    workloadSummary,
    weeklySchedule,
    scheduleTimeSlots,
    developmentTraining,
    teacherCalendar,
    leaveRequest,
    teacherPerformance,
};

export default teacherDetailsData;
