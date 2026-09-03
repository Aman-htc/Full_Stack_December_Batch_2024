export type InvoiceStatus = "Paid" | "Pending" | "Overdue" | "Draft";

export type Invoice = {
  id: string;
  client: string;
  project: string;
  amount: number;
  issueDate: string;
  dueDate: string;
  status: InvoiceStatus;
};

export const invoices: Invoice[] = [
  {
    id: "INV-001",
    client: "Acme Corporation",
    project: "Website Redesign",
    amount: 45000,
    issueDate: "05 Aug 2026",
    dueDate: "20 Aug 2026",
    status: "Paid",
  },
  {
    id: "INV-002",
    client: "TechNova Solutions",
    project: "Mobile Application",
    amount: 68000,
    issueDate: "08 Aug 2026",
    dueDate: "25 Aug 2026",
    status: "Pending",
  },
  {
    id: "INV-003",
    client: "GlobalSoft Ltd",
    project: "CRM Development",
    amount: 32000,
    issueDate: "01 Aug 2026",
    dueDate: "10 Aug 2026",
    status: "Overdue",
  },
  {
    id: "INV-004",
    client: "Bright Digital",
    project: "Dashboard Analytics",
    amount: 28500,
    issueDate: "10 Aug 2026",
    dueDate: "28 Aug 2026",
    status: "Pending",
  },
  {
    id: "INV-005",
    client: "PixelCraft Studio",
    project: "E-Commerce Platform",
    amount: 52000,
    issueDate: "12 Aug 2026",
    dueDate: "30 Aug 2026",
    status: "Draft",
  },
];