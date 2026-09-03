import { FileImage, FileSpreadsheet, FileText } from "lucide-react";

export  const documents = [
  {
    id: 1,
    name: "Website Requirements.pdf",
    type: "PDF",
    owner: "Aman Kumar",
    modified: "Today, 10:30 AM",
    size: "2.4 MB",
    icon: FileText,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: 2,
    name: "Project Timeline.xlsx",
    type: "Excel",
    owner: "Priya Sharma",
    modified: "Yesterday",
    size: "1.8 MB",
    icon: FileSpreadsheet,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    id: 3,
    name: "Homepage Design.png",
    type: "Image",
    owner: "Rohit Verma",
    modified: "10 Aug 2026",
    size: "4.6 MB",
    icon: FileImage,
    iconBg: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    id: 4,
    name: "Client Agreement.pdf",
    type: "PDF",
    owner: "Aman Kumar",
    modified: "08 Aug 2026",
    size: "890 KB",
    icon: FileText,
    iconBg: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: 5,
    name: "Project Notes.docx",
    type: "Document",
    owner: "Priya Sharma",
    modified: "06 Aug 2026",
    size: "620 KB",
    icon: FileText,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
];


export const folders = [
  {
    name: "Project Documents",
    files: 24,
    size: "1.8 GB",
  },
  {
    name: "Contracts",
    files: 12,
    size: "840 MB",
  },
  {
    name: "Reports",
    files: 18,
    size: "620 MB",
  },
  {
    name: "Designs",
    files: 31,
    size: "2.4 GB",
  },
];