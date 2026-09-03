
export const teacherStats = [
  {
    id: 1,
    title: "Total Teachers",
    value: 86,
    icon: "teachers",
  },
  {
    id: 2,
    title: "Full-Time Teacher",
    value: 62,
    icon: "clock",
  },
  {
    id: 3,
    title: "Part-Time Teacher",
    value: 18,
    icon: "time",
  },
  {
    id: 4,
    title: "Substitute Teacher",
    value: 6,
    icon: "substitute",
  },
];

export const teacherAttendanceOverview = [
    {
      day: "Mon",
      present: 70,
      absent: 8,
      attendance: 91,
    },
  {
    day: "Tue",
    present: 62,
    absent: 14,
    attendance: 84,
  },
  {
    day: "Wed",
    present: 76,
    absent: 10,
    attendance: 88,
  },
  {
    day: "Thu",
    present: 81,
    absent: 5,
    attendance: 94,
  },
  {
    day: "Fri",
    present: 79,
    absent: 7,
    attendance: 92,
  },
];

export const teacherWorkloadDistribution = [
  {
    id: 1,
    name: "Rayan Yasmine",
    totalClasses: 32,
    teachingHours: 28,
    extraDuties: 6,
  },
  {
    id: 2,
    name: "Ariyah Summer",
    totalClasses: 30,
    teachingHours: 26,
    extraDuties: 5,
  },
  {
    id: 3,
    name: "Kelsey Trisha",
    totalClasses: 34,
    teachingHours: 29,
    extraDuties: 6,
  },
  {
    id: 4,
    name: "Zackary Smith",
    totalClasses: 28,
    teachingHours: 25,
    extraDuties: 4,
  },
  {
    id: 5,
    name: "Javier Quintero",
    totalClasses: 36,
    teachingHours: 31,
    extraDuties: 7,
  },
  {
    id: 6,
    name: "Giana Gomez",
    totalClasses: 35,
    teachingHours: 30,
    extraDuties: 6,
  },
  {
    id: 7,
    name: "Miley Adams",
    totalClasses: 31,
    teachingHours: 27,
    extraDuties: 5,
  },
  {
    id: 8,
    name: "Kally Jayson",
    totalClasses: 33,
    teachingHours: 28,
    extraDuties: 6,
  },
];

export const departmentDistribution = [
  {
    id: 1,
    department: "Science",
    teachers: 19,
    percentage: 22,
  },
  {
    id: 2,
    department: "Mathematics",
    teachers: 17,
    percentage: 20,
  },
  {
    id: 3,
    department: "Language",
    teachers: 15,
    percentage: 18,
  },
  {
    id: 4,
    department: "Social",
    teachers: 13,
    percentage: 15,
  },
  {
    id: 5,
    department: "Arts",
    teachers: 11,
    percentage: 13,
  },
  {
    id: 6,
    department: "Physical Education",
    teachers: 11,
    percentage: 12,
  },
];

export const teacherFilters = {
  searchPlaceholder: "Search teacher",
  filterOptions: [
    {
      id: 1,
      label: "All Departments",
      value: "all",
    },
    {
      id: 2,
      label: "Mathematics",
      value: "mathematics",
    },
    {
      id: 3,
      label: "Science",
      value: "science",
    },
    {
      id: 4,
      label: "Social Studies",
      value: "social-studies",
    },
    {
      id: 5,
      label: "Language",
      value: "language",
    },
    {
      id: 6,
      label: "Arts",
      value: "arts",
    },
    {
      id: 7,
      label: "Physical Education",
      value: "physical-education",
    },
  ],
  sortOptions: [
    {
      id: 1,
      label: "Latest",
      value: "latest",
    },
    {
      id: 2,
      label: "Oldest",
      value: "oldest",
    },
    {
      id: 3,
      label: "Name A-Z",
      value: "name-asc",
    },
    {
      id: 4,
      label: "Name Z-A",
      value: "name-desc",
    },
  ],
};

export const teachers = [
  {
    id: 1,
    teacherId: "T-1001",
    name: "Argen Maulie",
    department: "Mathematics",
    subject: "Mathematics",
    employmentType: "Full-Time",
    phone: "+62 812 3456 7890",
    email: "argen.maulie@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 2,
    teacherId: "T-1002",
    name: "Bella Cruz",
    department: "Social Studies",
    subject: "Civics",
    employmentType: "Full-Time",
    phone: "+62 813 2234 5567",
    email: "bella.cruz@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 3,
    teacherId: "T-1003",
    name: "Cliff William",
    department: "English",
    subject: "Language",
    employmentType: "Part-Time",
    phone: "+62 811 5567 2345",
    email: "cliff.william@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",

    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 4,
    teacherId: "T-1004",
    name: "Dariah Ahmed",
    department: "Social Studies",
    subject: "History",
    employmentType: "Full-Time",
    phone: "+62 815 9876 5432",
    email: "dariah.ahmed@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 5,
    teacherId: "T-1005",
    name: "Esteban Parez",
    department: "Arts",
    subject: "Visual Arts",
    employmentType: "Part-Time",
    phone: "+62 819 6543 2109",
    email: "esteban.parez@studixschool.org",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 6,
    teacherId: "T-1006",
    name: "Francesca Gill",
    department: "Physical Education",
    subject: "Physical Education",
    employmentType: "Full-Time",
    phone: "+62 817 2233 4455",
    email: "francesca.gill@studixschool.org",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 7,
    teacherId: "T-1007",
    name: "George Abraham",
    department: "Mathematics",
    subject: "Algebra",
    employmentType: "Full-Time",
    phone: "+62 816 7788 9900",
    email: "george.abraham@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 8,
    teacherId: "T-1008",
    name: "Hellen Martinez",
    department: "Science",
    subject: "Biology",
    employmentType: "Full-Time",
    phone: "+62 814 6677 8899",
    email: "hellen.martinez@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 9,
    teacherId: "T-1009",
    name: "John Smith",
    department: "Science",
    subject: "Physics",
    employmentType: "Full-Time",
    phone: "+62 812 8899 1122",
    email: "john.smith@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
    socialLinks: {
      linkedin: "#",
      x: "#",
      instagram: "#",
    },
    status: "Active",
  },
  {
    id: 10,
    teacherId: "T-1010",
    name: "Alicia Gomez",
    department: "Language",
    subject: "English Literature",
    employmentType: "Part-Time",
    phone: "+62 813 6655 4433",
    email: "alicia.gomez@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",

    status: "Active",
  },
  {
    id: 11,
    teacherId: "T-1011",
    name: "Robert King",
    department: "Administration",
    subject: "Exam Coordinator",
    employmentType: "Substitute",
    phone: "+62 811 3344 7788",
    email: "robert.king@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
  },
  {
    id: 12,
    teacherId: "T-1012",
    name: "Maria Wilson",
    department: "Science",
    subject: "Chemistry",
    employmentType: "Full-Time",
    phone: "+62 815 2233 7788",
    email: "maria.wilson@studixschool.org",
    classTeacherOf: "8C - 9A - 9B",
    avatar: "",
    
  },
  
];

export const teacherPagination = {
  currentPage: 1,
  perPage: 8,
  totalResults: 82,
  totalPages: 11,
};

export const teacherPageInfo = {
  title: "Teachers",
  breadcrumb: ["Dashboard", "Teachers"],
  addButtonText: "Add Teacher",
};

const teachersData = {
  teacherPageInfo,
  teacherStats,
  teacherAttendanceOverview,
  teacherWorkloadDistribution,
  departmentDistribution,
  teacherFilters,
  teachers,
  teacherPagination,
};

export default teachersData;