export const calendarStats = [
  {
    id: 1,
    title: "All Schedules",
    value: 12,
    category: 'all',
  },

  {
    id: 2,
    title: "Academic",
    value: 4,
    category: 'academic',
  },

  {
    id: 3,
    title: "Events",
    value: 3,
    category: 'events',
  },

  {
    id: 4,
    title: "Finance",
    value: 2,
    category: 'finance',
  },

  {
    id: 5,
    title: "Administration",
    value: 3,
    category: 'administration',
  },
];
export const calendarFilters = [
  {
    id: 1,
    label: "Day",
    value: "day",
  },
  {
    id: 2,
    label: "Week",
    value: "week",
  },
  {
    id: 3,
    label: "Month",
    value: "month",
    active: true,
  },
];

export const calendarMonth = {
  month: "March",
  year: 2035,
  selectedView: "month",
  currentDate: "2035-03-12",
  totalDays: 31,
  startDay: "Saturday",
};

export const calendarDays = [
  { id: 1, date: 25, monthType: "prev", day: "Sun", fullDate: "2035-02-25", events: [] },
  { id: 2, date: 26, monthType: "prev", day: "Mon", fullDate: "2035-02-26", events: [] },
  { id: 3, date: 27, monthType: "prev", day: "Tue", fullDate: "2035-02-27", events: [] },
  { id: 4, date: 28, monthType: "prev", day: "Wed", fullDate: "2035-02-28", events: [] },
  {
    id: 5,
    date: 1,
    monthType: "current",
    day: "Thu",
    fullDate: "2035-03-01",
    events: [
      {
        id: 101,
        title: "Science Project Submission Deadline",
        time: "10:00 AM",
        category: "academic",
      },
      {
        id: 102,
        title: "Monthly Expense Review",
        time: "02:00 PM - 04:00 PM",
        category: "finance",
      },
    ],
  },
  { id: 6, date: 2, monthType: "current", day: "Fri", fullDate: "2035-03-02", events: [] },
  { id: 7, date: 3, monthType: "current", day: "Sat", fullDate: "2035-03-03", events: [] },

  { id: 8, date: 4, monthType: "current", day: "Sun", fullDate: "2035-03-04", events: [] },
  { id: 9, date: 5, monthType: "current", day: "Mon", fullDate: "2035-03-05", events: [] },
  {
    id: 10,
    date: 6,
    monthType: "current",
    day: "Tue",
    fullDate: "2035-03-06",
    events: [
      {
        id: 103,
        title: "Sports Competition (Preliminary Round)",
        time: "09:50 AM - 12:00 PM",
        category: "events",
      },
    ],
  },
  {
    id: 11,
    date: 7,
    monthType: "current",
    day: "Wed",
    fullDate: "2035-03-07",
    events: [
      {
        id: 104,
        title: "Midterm Exam - Mathematics",
        time: "09:00 AM - 11:00 AM",
        category: "academic",
      },
      {
        id: 105,
        title: "Staff Meeting",
        time: "02:00 PM - 03:30 PM",
        category: "administration",
      },
    ],
  },
  { id: 12, date: 8, monthType: "current", day: "Thu", fullDate: "2035-03-08", events: [] },
  {
    id: 13,
    date: 9,
    monthType: "current",
    day: "Fri",
    fullDate: "2035-03-09",
    events: [
      {
        id: 106,
        title: "Teacher Development Workshop",
        time: "01:00 PM - 05:00 PM",
        category: "administration",
      },
    ],
  },
  { id: 14, date: 10, monthType: "current", day: "Sat", fullDate: "2035-03-10", events: [] },

  { id: 15, date: 11, monthType: "current", day: "Sun", fullDate: "2035-03-11", events: [] },
  {
    id: 16,
    date: 12,
    monthType: "current",
    day: "Mon",
    fullDate: "2035-03-12",
    selected: true,
    events: [
      {
        id: 107,
        title: "English Literature Exam",
        time: "09:00 AM - 11:00 AM",
        category: "academic",
      },
      {
        id: 108,
        title: "Parent-Teacher Meeting (Grade 7 & 8)",
        time: "02:00 PM - 04:00 PM",
        category: "events",
      },
    ],
  },
  { id: 17, date: 13, monthType: "current", day: "Tue", fullDate: "2035-03-13", events: [] },
  {
    id: 18,
    date: 14,
    monthType: "current",
    day: "Wed",
    fullDate: "2035-03-14",
    events: [
      {
        id: 109,
        title: "History Exam",
        time: "09:00 AM - 11:00 AM",
        category: "academic",
      },
    ],
  },
  {
    id: 19,
    date: 15,
    monthType: "current",
    day: "Thu",
    fullDate: "2035-03-15",
    events: [
      {
        id: 110,
        title: "School Choir Rehearsal",
        time: "10:00 AM - 12:00 PM",
        category: "events",
      },
    ],
  },
  { id: 20, date: 16, monthType: "current", day: "Fri", fullDate: "2035-03-16", events: [] },
  { id: 21, date: 17, monthType: "current", day: "Sat", fullDate: "2035-03-17", events: [] },

  { id: 22, date: 18, monthType: "current", day: "Sun", fullDate: "2035-03-18", events: [] },
  { id: 23, date: 19, monthType: "current", day: "Mon", fullDate: "2035-03-19", events: [] },
  {
    id: 24,
    date: 20,
    monthType: "current",
    day: "Tue",
    fullDate: "2035-03-20",
    events: [
      {
        id: 111,
        title: "Monthly Staff Appraisal",
        time: "02:00 PM - 04:00 PM",
        category: "administration",
      },
    ],
  },
  { id: 25, date: 21, monthType: "current", day: "Wed", fullDate: "2035-03-21", events: [] },
  { id: 26, date: 22, monthType: "current", day: "Thu", fullDate: "2035-03-22", events: [] },
  {
    id: 27,
    date: 23,
    monthType: "current",
    day: "Fri",
    fullDate: "2035-03-23",
    events: [
      {
        id: 112,
        title: "Grade 9 Fee Payment Deadline",
        time: "All Day",
        category: "finance",
      },
    ],
  },
  { id: 28, date: 24, monthType: "current", day: "Sat", fullDate: "2035-03-24", events: [] },

  { id: 29, date: 25, monthType: "current", day: "Sun", fullDate: "2035-03-25", events: [] },
  {
    id: 30,
    date: 26,
    monthType: "current",
    day: "Mon",
    fullDate: "2035-03-26",
    events: [
      {
        id: 113,
        title: "Annual Science Fair",
        time: "09:00 AM - 05:00 PM",
        category: "events",
      },
    ],
  },
  { id: 31, date: 27, monthType: "current", day: "Tue", fullDate: "2035-03-27", events: [] },
  {
    id: 32,
    date: 28,
    monthType: "current",
    day: "Wed",
    fullDate: "2035-03-28",
    events: [
      {
        id: 114,
        title: "Quarterly Performance Review Meeting",
        time: "01:00 PM - 03:00 PM",
        category: "administration",
      },
    ],
  },
  {
    id: 33,
    date: 29,
    monthType: "current",
    day: "Thu",
    fullDate: "2035-03-29",
    events: [
      {
        id: 115,
        title: "Final Exam - Chemistry",
        time: "08:30 AM - 10:30 AM",
        category: "academic",
      },
    ],
  },
  { id: 34, date: 30, monthType: "current", day: "Fri", fullDate: "2035-03-30", events: [] },
  { id: 35, date: 31, monthType: "current", day: "Sat", fullDate: "2035-03-31", events: [] },
];

export const scheduleDetails = [
  {
    id: 1,
    category: "Academic",
    title: "English Literature Exam",
    date: "March 12, 2035",
    time: "09:00 AM - 11:00 AM",
    location: "Room 204",
    notes: "Bring your own stationery, no electronic devices allowed.",
    status: "upcoming",
  },
  {
    id: 2,
    category: "Events",
    title: "Parent-Teacher Meeting (Grade 7 & 8)",
    date: "March 12, 2035",
    time: "02:00 PM - 04:00 PM",
    location: "School Auditorium",
    notes: "Parents are requested to arrive 15 minutes early for registration.",
    status: "upcoming",
  },
];

export const allSchedules = [
  {
    id: 1,
    title: "Science Project Submission Deadline",
    category: "Academic",
    date: "March 1, 2035",
    time: "10:00 AM",
    location: "Class Teacher Desk",
  },
  {
    id: 2,
    title: "Monthly Expense Review",
    category: "Finance",
    date: "March 1, 2035",
    time: "02:00 PM - 04:00 PM",
    location: "Accounts Office",
  },
  {
    id: 3,
    title: "Sports Competition (Preliminary Round)",
    category: "Events",
    date: "March 6, 2035",
    time: "09:50 AM - 12:00 PM",
    location: "Sports Ground",
  },
  {
    id: 4,
    title: "Midterm Exam - Mathematics",
    category: "Academic",
    date: "March 7, 2035",
    time: "09:00 AM - 11:00 AM",
    location: "Room 201",
  },
  {
    id: 5,
    title: "Staff Meeting",
    category: "Administration",
    date: "March 7, 2035",
    time: "02:00 PM - 03:30 PM",
    location: "Conference Room",
  },
  {
    id: 6,
    title: "Teacher Development Workshop",
    category: "Administration",
    date: "March 9, 2035",
    time: "01:00 PM - 05:00 PM",
    location: "Training Hall",
  },
  {
    id: 7,
    title: "English Literature Exam",
    category: "Academic",
    date: "March 12, 2035",
    time: "09:00 AM - 11:00 AM",
    location: "Room 204",
  },
  {
    id: 8,
    title: "Parent-Teacher Meeting (Grade 7 & 8)",
    category: "Events",
    date: "March 12, 2035",
    time: "02:00 PM - 04:00 PM",
    location: "School Auditorium",
  },
  {
    id: 9,
    title: "History Exam",
    category: "Academic",
    date: "March 14, 2035",
    time: "09:00 AM - 11:00 AM",
    location: "Room 205",
  },
  {
    id: 10,
    title: "School Choir Rehearsal",
    category: "Events",
    date: "March 15, 2035",
    time: "10:00 AM - 12:00 PM",
    location: "Music Room",
  },
  {
    id: 11,
    title: "Grade 9 Fee Payment Deadline",
    category: "Finance",
    date: "March 23, 2035",
    time: "All Day",
    location: "Accounts Office",
  },
  {
    id: 12,
    title: "Annual Science Fair",
    category: "Events",
    date: "March 26, 2035",
    time: "09:00 AM - 05:00 PM",
    location: "Main Hall",
  },
];

export const categoryColors = {
  academic: "pink",
  events: "blue",
  finance: "dark-blue",
  administration: "purple",
};

const calendarData = {
  calendarStats,
  calendarFilters,
  calendarMonth,
  calendarDays,
  scheduleDetails,
  allSchedules,
  categoryColors,
};

export default calendarData;