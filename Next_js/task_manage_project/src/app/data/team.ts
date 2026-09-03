type TeamStatus = "Active" | "Away" | "Offline";

export type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: TeamStatus;
  projects: number;
  completedTasks: number;
  pendingTasks: number;
  initials: string;
  avatarBg: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Priya Sharma",
    email: "priya@profersal.com",
    role: "UI/UX Designer",
    department: "Design",
    status: "Active",
    projects: 4,
    completedTasks: 28,
    pendingTasks: 6,
    initials: "PS",
    avatarBg: "bg-violet-100 text-violet-700",
  },
  {
    id: 2,
    name: "Rohit Verma",
    email: "rohit@profersal.com",
    role: "Frontend Developer",
    department: "Development",
    status: "Active",
    projects: 5,
    completedTasks: 35,
    pendingTasks: 8,
    initials: "RV",
    avatarBg: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Aman Kumar",
    email: "aman@profersal.com",
    role: "Backend Developer",
    department: "Development",
    status: "Active",
    projects: 3,
    completedTasks: 24,
    pendingTasks: 5,
    initials: "AK",
    avatarBg: "bg-emerald-100 text-emerald-700",
  },
  {
    id: 4,
    name: "Neha Singh",
    email: "neha@profersal.com",
    role: "QA Engineer",
    department: "Quality Assurance",
    status: "Away",
    projects: 3,
    completedTasks: 21,
    pendingTasks: 9,
    initials: "NS",
    avatarBg: "bg-orange-100 text-orange-700",
  },
  {
    id: 5,
    name: "Vikash Kumar",
    email: "vikash@profersal.com",
    role: "Project Manager",
    department: "Management",
    status: "Active",
    projects: 6,
    completedTasks: 42,
    pendingTasks: 4,
    initials: "VK",
    avatarBg: "bg-pink-100 text-pink-700",
  },
  {
    id: 6,
    name: "Anjali Gupta",
    email: "anjali@profersal.com",
    role: "Product Designer",
    department: "Design",
    status: "Offline",
    projects: 2,
    completedTasks: 17,
    pendingTasks: 3,
    initials: "AG",
    avatarBg: "bg-cyan-100 text-cyan-700",
  },
];