// export const projectdata = [
//   {
//     name: "Website Redesign",
//     type: "Web Development",
//     progress: 75,
//     status: "On Track",
//     color: "bg-violet-500",
//   },
//   {
//     name: "Mobile App Development",
//     type: "React Native",
//     progress: 60,
//     status: "In Progress",
//     color: "bg-blue-500",
//   },
//   {
//     name: "E-Commerce Platform",
//     type: "Backend Development",
//     progress: 90,
//     status: "On Track",
//     color: "bg-emerald-500",
//   },
//   {
//     name: "CRM System",
//     type: "Full Stack Development",
//     progress: 45,
//     status: "In Progress",
//     color: "bg-orange-500",
//   },
//   {
//     name: "Dashboard Analytics",
//     type: "Data Visualization",
//     progress: 30,
//     status: "Delayed",
//     color: "bg-pink-500",
//   },
// ];

// export const activities = [
//   {
//     name: "Priya Sharma",
//     action: 'completed task "Design Homepage"',
//     time: "2 hours ago",
//     status: "Completed",
//   },
//   {
//     name: "Rohit Verma",
//     action: 'updated project "Mobile App Development"',
//     time: "4 hours ago",
//     status: "Updated",
//   },
//   {
//     name: "Aman Kumar",
//     action: 'created task "API Integration"',
//     time: "6 hours ago",
//     status: "New Task",
//   },
// ];
export type ProjectStatus =
  | "On Track"
  | "In Progress"
  | "Delayed"
  | "Completed";

export type Project = {
  id: string;
  name: string;
  type: string;
  progress: number;
  status: ProjectStatus;
  color: string;
  description: string;
  startDate: string;
  dueDate: string;
  team: number;
};

export const projectdata: Project[] = [
  {
    id: "project-1",
    name: "Website Redesign",
    type: "Web Development",
    progress: 75,
    status: "On Track",
    color: "bg-violet-500",
    description:
      "Redesign and improve the company website with a modern, responsive and user-friendly interface.",
    startDate: "Aug 01, 2026",
    dueDate: "Aug 20, 2026",
    team: 4,
  },
  {
    id: "project-2",
    name: "Mobile App Development",
    type: "React Native",
    progress: 60,
    status: "In Progress",
    color: "bg-blue-500",
    description:
      "Develop a modern mobile application with a clean user experience and reliable API integration.",
    startDate: "Aug 05, 2026",
    dueDate: "Aug 28, 2026",
    team: 5,
  },
  {
    id: "project-3",
    name: "E-Commerce Platform",
    type: "Backend Development",
    progress: 90,
    status: "On Track",
    color: "bg-emerald-500",
    description:
      "Build a scalable e-commerce backend with product, order and payment management.",
    startDate: "Jul 10, 2026",
    dueDate: "Aug 18, 2026",
    team: 6,
  },
  {
    id: "project-4",
    name: "CRM System",
    type: "Full Stack Development",
    progress: 45,
    status: "In Progress",
    color: "bg-orange-500",
    description:
      "Develop a complete CRM system for managing customers, leads, sales and communication.",
    startDate: "Aug 03, 2026",
    dueDate: "Sep 05, 2026",
    team: 4,
  },
  {
    id: "project-5",
    name: "Dashboard Analytics",
    type: "Data Visualization",
    progress: 30,
    status: "Delayed",
    color: "bg-pink-500",
    description:
      "Create an analytics dashboard to visualize business performance and important metrics.",
    startDate: "Jul 25, 2026",
    dueDate: "Aug 30, 2026",
    team: 3,
  },
];

export const activities = [
  {
    name: "Priya Sharma",
    action: 'completed task "Design Homepage"',
    time: "2 hours ago",
    status: "Completed",
  },
  {
    name: "Rohit Verma",
    action: 'updated project "Mobile App Development"',
    time: "4 hours ago",
    status: "Updated",
  },
  {
    name: "Aman Kumar",
    action: 'created task "API Integration"',
    time: "6 hours ago",
    status: "New Task",
  },
];