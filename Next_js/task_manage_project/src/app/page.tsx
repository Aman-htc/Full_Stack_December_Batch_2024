// import Image from "next/image";

// export default function Home() {
  // return (
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert h-5 w-[100px]"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the{" "}
    //         <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
    //           page.tsx
    //         </code>{" "}
    //         file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert h-[14px] w-4"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={14}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>


    
    
    

  // );
// }

"use client";

import {
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileText,
  FolderKanban,
  HelpCircle,
  Home,
  LayoutDashboard,
  ListTodo,
  
  MoreHorizontal,
 
  Users,
} from "lucide-react";

import {projectdata, activities} from "@/app/data/dashboards";
import StatCard from "@/app/components/statcard"
import TaskStatus from "@/app/components/taskstatus"
import Deadline from "@/app/components/deadline"
import DateRangePicker from "./components/selectdata";



export default function Dashboard() {
  return (
    <div className="min-h-screen ">

     
      <main className="">
        {/* ================= CONTENT ================= */}
        <div className="p-4 lg:p-8">

          {/* Header */}
          <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">

            <div>
              <h1 className="text-2xl font-bold text-slate-900 lg:text-3xl">
                Dashboard
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Home / Dashboard
              </p>
            </div>

            {/* <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm">
              <CalendarDays size={17} />
              11 Aug 2026 - 11 Aug 2026
              <ChevronDown size={16} />
            </button> */}
            <DateRangePicker />

          </div>

          {/* ================= STAT CARDS ================= */}
          <div className="mb-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">

            <StatCard
              title="Total Projects"
              value="24"
              change="12%"
              icon={<FolderKanban size={22} className="text-violet-600" />}
              iconBg="bg-violet-100"
            />

            <StatCard
              title="Total Tasks"
              value="156"
              change="18%"
              icon={<ListTodo size={22} className="text-blue-600" />}
              iconBg="bg-blue-100"
            />

            <StatCard
              title="Completed Tasks"
              value="98"
              change="22%"
              icon={<CheckCircle2 size={22} className="text-emerald-600" />}
              iconBg="bg-emerald-100"
            />

            <StatCard
              title="In Progress"
              value="38"
              change="8%"
              icon={<Clock3 size={22} className="text-orange-600" />}
              iconBg="bg-orange-100"
            />

            <StatCard
              title="Team Members"
              value="12"
              change="0%"
              icon={<Users size={22} className="text-pink-600" />}
              iconBg="bg-pink-100"
            />

          </div>

          {/* ================= ROW ================= */}
          <div className="grid gap-6 xl:grid-cols-3">

            {/* PROJECT PROGRESS */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 xl:col-span-2">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Project Progress Overview
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Track your project completion
                  </p>
                </div>

                <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
                  View All
                </button>

              </div>

              <div className="p-6">

                {projectdata.map((project) => (

                  <div
                    key={project.name}
                    className="mb-6 last:mb-0"
                  >

                    <div className="mb-2 flex items-center justify-between gap-4">

                      <div className="min-w-0">

                        <div className="flex items-center gap-2">

                          <div className="rounded-lg bg-slate-100 p-2">
                            <FolderKanban
                              size={16}
                              className="text-slate-600"
                            />
                          </div>

                          <div>
                            <h3 className="text-sm font-semibold text-slate-800">
                              {project.name}
                            </h3>

                            <p className="text-xs text-slate-400">
                              {project.type}
                            </p>
                          </div>

                        </div>

                      </div>

                      <div className="flex items-center gap-3">

                        <span
                          className={`hidden rounded-full px-3 py-1 text-xs font-medium sm:block ${
                            project.status === "On Track"
                              ? "bg-emerald-50 text-emerald-600"
                              : project.status === "Delayed"
                              ? "bg-red-50 text-red-600"
                              : "bg-orange-50 text-orange-600"
                          }`}
                        >
                          {project.status}
                        </span>

                        <span className="text-sm font-bold text-slate-700">
                          {project.progress}%
                        </span>

                      </div>

                    </div>

                    {/* PROGRESS BAR */}
                    <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">

                      <div
                        className={`h-full rounded-full transition-all ${project.color}`}
                        style={{
                          width: `${project.progress}%`,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* TASK PROGRESS */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <h2 className="font-semibold text-slate-900">
                  Tasks Progress
                </h2>

                <button className="text-sm font-medium text-violet-600">
                  View All
                </button>

              </div>

              <div className="p-6">

                {/* Circle */}
                <div className="flex justify-center">

                  <div className="relative flex h-44 w-44 items-center justify-center rounded-full bg-[conic-gradient(#10b981_0deg_226deg,#3b82f6_226deg_314deg,#f59e0b_314deg_351deg,#ec4899_351deg_360deg)]">

                    <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white">

                      <span className="text-3xl font-bold text-slate-900">
                        156
                      </span>

                      <span className="text-xs text-slate-500">
                        Total Tasks
                      </span>

                    </div>

                  </div>

                </div>

                {/* Status */}
                <div className="mt-8 space-y-4">

                  <TaskStatus
                    color="bg-emerald-500"
                    label="Completed"
                    value="98"
                    percentage="62.8%"
                  />

                  <TaskStatus
                    color="bg-blue-500"
                    label="In Progress"
                    value="38"
                    percentage="24.4%"
                  />

                  <TaskStatus
                    color="bg-orange-500"
                    label="Pending"
                    value="16"
                    percentage="10.3%"
                  />

                  <TaskStatus
                    color="bg-pink-500"
                    label="On Hold"
                    value="4"
                    percentage="2.6%"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* ================= SECOND ROW ================= */}
          <div className="mt-6 grid gap-6 xl:grid-cols-3">

            {/* PERFORMANCE */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 xl:col-span-2">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <div>
                  <h2 className="font-semibold text-slate-900">
                    Project Performance
                  </h2>

                  <p className="mt-1 text-xs text-slate-500">
                    Task completion overview
                  </p>
                </div>

                <select className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Last 3 Months</option>
                </select>

              </div>

              <div className="p-6">

                <div className="grid grid-cols-3 gap-4 text-center">

                  <div>
                    <p className="text-2xl font-bold text-blue-600">
                      98
                    </p>

                    <p className="text-xs text-slate-500">
                      Completed
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-emerald-600">
                      156
                    </p>

                    <p className="text-xs text-slate-500">
                      Total Tasks
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-orange-500">
                      63%
                    </p>

                    <p className="text-xs text-slate-500">
                      Completion Rate
                    </p>
                  </div>

                </div>

                <div className="mt-8">

                  <div className="mb-2 flex justify-between text-xs text-slate-500">
                    <span>Overall Progress</span>
                    <span>63%</span>
                  </div>

                  <div className="flex h-4 overflow-hidden rounded-full bg-slate-100">

                    <div className="w-[63%] bg-emerald-500" />

                    <div className="w-[24%] bg-orange-400" />

                    <div className="w-[13%] bg-slate-300" />

                  </div>

                  <div className="mt-4 flex flex-wrap gap-5 text-xs">

                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Completed
                    </span>

                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-orange-400" />
                      In Progress
                    </span>

                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-slate-300" />
                      Pending
                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* DEADLINES */}
            <div className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">

              <div className="flex items-center justify-between border-b border-slate-100 p-6">

                <h2 className="font-semibold text-slate-900">
                  Upcoming Deadlines
                </h2>

                <button className="text-sm font-medium text-violet-600">
                  View All
                </button>

              </div>

              <div className="p-6">

                <Deadline
                  date="15"
                  month="AUG"
                  title="Website Redesign"
                  subtitle="UI Design"
                  days="Due in 4 days"
                  color="bg-red-50 text-red-600"
                  priority="High"
                />

                <Deadline
                  date="18"
                  month="AUG"
                  title="Mobile App"
                  subtitle="Login Screen"
                  days="Due in 7 days"
                  color="bg-orange-50 text-orange-600"
                  priority="Medium"
                />

                <Deadline
                  date="22"
                  month="AUG"
                  title="CRM System"
                  subtitle="API Integration"
                  days="Due in 11 days"
                  color="bg-emerald-50 text-emerald-600"
                  priority="Low"
                />

              </div>

            </div>

          </div>

          {/* ================= ACTIVITY ================= */}
          <div className="mt-6 rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">

            <div className="flex items-center justify-between border-b border-slate-100 p-6">

              <h2 className="font-semibold text-slate-900">
                Recent Team Activity
              </h2>

              <button className="text-sm font-medium text-violet-600">
                View All
              </button>

            </div>

            <div className="divide-y divide-slate-100">

              {activities.map((activity) => (

                <div
                  key={activity.name + activity.time}
                  className="flex items-center gap-4 p-5"
                >

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 font-semibold text-violet-700">
                    {activity.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>

                  <div className="min-w-0 flex-1">

                    <p className="text-sm text-slate-700">
                      <span className="font-semibold">
                        {activity.name}
                      </span>{" "}
                      {activity.action}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {activity.time}
                    </p>

                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      activity.status === "Completed"
                        ? "bg-emerald-50 text-emerald-600"
                        : activity.status === "Updated"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-violet-50 text-violet-600"
                    }`}
                  >
                    {activity.status}
                  </span>

                  <button className="hidden text-slate-400 hover:text-slate-700 sm:block">
                    <MoreHorizontal size={20} />
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}


