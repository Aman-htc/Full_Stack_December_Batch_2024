export const dashboardStats = [
  {
    id: 1,
    title: "Enrolled Students",
    value: "1,245",
 
    icon: "students",
  },
  {
    id: 2,
    title: "Active Teachers",
    value: "86",
    icon: "teachers",
  },
  {
    id: 3,
    title: "Support Staff",
    value: "34",
    change: "+2",
    icon: "staff",
  },
  {
    id: 4,
    title: "Total Awards",
    value: "152",
    change: "+8%",
    icon: "awards",
  },
];

export const studentPerformance = [
  {
    month: "Jul",
    grade7: 78,
    grade8: 88,
    grade9: 82,
  },
  {
    month: "Aug",
    grade7: 82,
    grade8: 92,
    grade9: 86,
  },
  {
    month: "Sep",
    grade7: 80,
    grade8: 90,
    grade9: 84,
  },
  {
    month: "Oct",
    grade7: 84,
    grade8: 94,
    grade9: 88,
  },
  {
    month: "Nov",
    grade7: 86,
    grade8: 91,
    grade9: 89,
  },
  {
    month: "Dec",
    grade7: 88,
    grade8: 95,
    grade9: 90,
  },
];

export const earningsReport = [
  {
    month: "Jan",
    earnings: 5200,
    expenses: 2800,
  },
  {
    month: "Feb",
    earnings: 4800,
    expenses: 2600,
  },
  {
    month: "Mar",
    earnings: 5100,
    expenses: 2900,
  },
  {
    month: "Apr",
    earnings: 5000,
    expenses: 2700,
  },
  {
    month: "May",
    earnings: 5600,
    expenses: 3000,
  },
  {
    month: "Jun",
    earnings: 5500,
    expenses: 3100,
  },
  {
    month: "Jul",
    earnings: 6100,
    expenses: 3500,
  },
  {
    month: "Aug",
    earnings: 5900,
    expenses: 4200,
  },
  {
    month: "Sep",
    earnings: 5700,
    expenses: 3300,
  },
  {
    month: "Oct",
    earnings: 5300,
    expenses: 3000,
  },
  {
    month: "Nov",
    earnings: 5000,
    expenses: 2900,
  },
  {
    month: "Dec",
    earnings: 5400,
    expenses: 3100,
  },
];

export const studentsByGender = {
  total: 1245,
  boys: 560,
  girls: 685,
};

export const studentAttendance = [
  {
    day: "Mon",
    students: 1144,
  },
  {
    day: "Tue",
    students: 1043,
  },
  {
    day: "Wed",
    students: 933,
  },
  {
    day: "Thu",
    students: 1089,
  },
  {
    day: "Fri",
    students: 1089,
  },
];

export const todoList = [
  {
    id: 1,
    title: "Review Teacher Attendance Records",
    date: "March 11, 2035",
    completed: true,
  },
  {
    id: 2,
    title: "Prepare Science Fair Guidelines",
    date: "March 13, 2035",
    completed: false,
  },
  {
    id: 3,
    title: "Update Library Book Inventory",
    date: "March 14, 2035",
    completed: false,
  },
];

export const noticeBoard = [
  {
    id: 1,
    title: "Science Fair Registration Opens",
    category: "Academic",
    tag: "Event",
    audience: "All Students",
    date: "March 8, 2035",
    createdBy: "Academic Coordinator",
  },
  {
    id: 2,
    title: "Teacher Development Workshop",
    category: "Training",
    tag: "Workshop",
    audience: "All Teachers",
    date: "March 10, 2035",
    createdBy: "Principal's Office",
  },
  {
    id: 3,
    title: "New Library Books Arrived",
    category: "Resource",
    tag: "Library",
    audience: "Students & Teachers",
    date: "March 12, 2035",
    createdBy: "Librarian",
  },
  {
    id: 4,
    title: "Field Trip Consent Forms Due",
    category: "Announcement",
    tag: "Notice",
    audience: "Grade 7 & 8 Students",
    date: "March 14, 2035",
    createdBy: "Class Advisor",
  },
];

export const events = [
  {
    id: 1,
    date: 2,
    month: "March",
    year: 2035,
    time: "09:00 AM - 12:00 PM",
    title: "Annual Sport Competition",
    className: "All Classes",
  },

  {
    id: 2,
    date: 5,
    month: "March",
    year: 2035,
    time: "02:00 PM - 04:00 PM",
    title: "Parent-Teacher Meeting",
    className: "7A, 7B",
  },

  {
    id: 3,
    date: 28,
    month: "March",
    year: 2035,
    time: "09:00 AM - 05:00 PM",
    title: "Annual Science Fair",
    className: "All Classes",
  },
];
export const recentActivities = [
  {
    id: 1,
    title: "New student Alicia Gomez (Class 8B) enrolled by Registrar.",
    time: "March 7, 2035 - 09:15 AM",
    type: "student",
  },
  {
    id: 2,
    title: "Attendance for Class 7A marked by Teacher John Smith.",
    time: "March 7, 2035 - 11:30 AM",
    type: "attendance",
  },
  {
    id: 3,
    title: "Monthly fee payments verified for Grade 9 students.",
    time: "March 8, 2035 - 02:45 PM",
    type: "finance",
  },
  {
    id: 4,
    title: "Exam timetable for Term 2 updated by Academic Coordinator.",
    time: "March 9, 2035 - 10:20 AM",
    type: "exam",
  },
];

export const dashboardUser = {
  id: 1,
  name: "Oscar Hansen",
  role: "Admin",
  avatar: "https://i.pravatar.cc/100?img=12",
};

export const calendarData = {
  month: "March",
  year: 2035,
  activeDates: [2, 5, 15, 28],
  selectedDate: 15,
};

const dashboardData = {
  dashboardStats,
  studentPerformance,
  earningsReport,
  studentsByGender,
  studentAttendance,
  todoList,
  noticeBoard,
  events,
  recentActivities,
  dashboardUser,
  calendarData,
};

export default dashboardData;