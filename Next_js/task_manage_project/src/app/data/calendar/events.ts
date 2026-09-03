export type EventType =
  | "meeting"
  | "deadline"
  | "task"
  | "milestone";

export type CalendarEvent = {
  id: number;
  title: string;
  date: number;
  time: string;
  type:EventType
  
  project: string;
};

export const events: CalendarEvent[] = [
  {
    id: 1,
    title: "Client Meeting",
    date: 12,
    time: "10:00 AM",
    type: "meeting",
    project: "Website Redesign",
  },
  {
    id: 2,
    title: "API Integration",
    date: 14,
    time: "05:00 PM",
    type: "deadline",
    project: "Mobile App",
  },
  {
    id: 3,
    title: "Project Review",
    date: 18,
    time: "02:00 PM",
    type: "milestone",
    project: "E-Commerce Platform",
  },
  {
    id: 4,
    title: "Testing",
    date: 20,
    time: "11:00 AM",
    type: "task",
    project: "CRM System",
  },
  {
    id: 5,
    title: "Final Presentation",
    date: 25,
    time: "03:00 PM",
    type: "meeting",
    project: "Website Redesign",
  },
];