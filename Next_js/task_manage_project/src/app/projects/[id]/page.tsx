

import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Edit3,
  FileText,
  MoreHorizontal,
  Users,
} from "lucide-react";

import { projectdata } from "@/app/data/dashboards";
import TaskBoard from "@/app/components/TaskBoard";

type ProjectDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProjectDetailsPage({
  params,
}: ProjectDetailsPageProps) {
  const { id } = await params;

  const project = projectdata.find(
    (item) => item.id === id
  );
  

  // ================= PROJECT NOT FOUND =================

  if (!project) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
            <FileText size={28} />
          </div>

          <h1 className="mt-5 text-2xl font-bold text-slate-900">
            Project Not Found
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            The project you are looking for does not exist.
          </p>

          <Link
            href="/projects"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">

      {/* =====================================================
          BACK TO PROJECTS
      ====================================================== */}

      <div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-violet-600"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>


      {/* =====================================================
          PROJECT HEADER
      ====================================================== */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Project information */}

          <div className="flex items-start gap-4">

            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${project.color}`}
            >
              <FileText
                size={24}
                className="text-white"
              />
            </div>

            <div>

              <div className="flex flex-wrap items-center gap-3">

                <h1 className="text-2xl font-bold text-slate-900">
                  {project.name}
                </h1>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "On Track"
                      ? "bg-emerald-50 text-emerald-600"
                      : project.status === "Delayed"
                        ? "bg-red-50 text-red-600"
                        : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {project.status}
                </span>

              </div>

              <p className="mt-1 text-sm text-slate-500">
                {project.type}
              </p>

            </div>

          </div>


          {/* Actions */}

          <div className="flex items-center gap-2">

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              <Edit3 size={16} />
              Edit
            </button>

            <button
              type="button"
              className="rounded-xl border border-slate-200 p-2.5 text-slate-500 transition hover:bg-slate-50"
            >
              <MoreHorizontal size={19} />
            </button>

          </div>

        </div>


        {/* =====================================================
            PROJECT PROGRESS
        ====================================================== */}

        <div className="mt-7">

          <div className="mb-2 flex items-center justify-between">

            <span className="text-sm font-medium text-slate-600">
              Project Progress
            </span>

            <span className="text-sm font-bold text-slate-900">
              {project.progress}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-100">

            <div
              className={`h-full rounded-full ${project.color}`}
              style={{
                width: `${project.progress}%`,
              }}
            />

          </div>

        </div>

      </div>


      {/* =====================================================
          QUICK STATS
      ====================================================== */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <InfoCard
          icon={<CalendarDays size={19} />}
          title="Start Date"
          value={project.startDate}
        />

        <InfoCard
          icon={<Clock3 size={19} />}
          title="Due Date"
          value={project.dueDate}
        />

        <InfoCard
          icon={<Users size={19} />}
          title="Team Members"
          value={`${project.team} Members`}
        />

        <InfoCard
          icon={<CheckCircle2 size={19} />}
          title="Completion"
          value={`${project.progress}%`}
        />

      </div>


      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* ===================================================
            LEFT / MAIN CONTENT
        ==================================================== */}

        <div className="space-y-6 xl:col-span-2">


          {/* =================================================
              PROJECT OVERVIEW
          ================================================== */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <h2 className="text-lg font-semibold text-slate-900">
              Project Overview
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {project.description}
            </p>

          </div>


          {/* =================================================
              PROJECT TASKS
          ================================================== */}

          <div className="rounded-2xl border border-slate-200 bg-white">

            {/* Header */}

            <div className="flex flex-col gap-4 border-b border-slate-200 p-6 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <h2 className="text-lg font-semibold text-slate-900">
                  Project Tasks
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Drag and drop tasks to update their status
                </p>

              </div>

              <button
                type="button"
                className="w-fit rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
              >
                + Add Task
              </button>

            </div>


            {/* Drag & Drop Board */}

            <div className="p-6">

              <TaskBoard />

            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT SIDEBAR
        ==================================================== */}

        <div className="space-y-6">


          {/* =================================================
              TEAM MEMBERS
          ================================================== */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center justify-between">

              <h2 className="font-semibold text-slate-900">
                Team Members
              </h2>

              <button
                type="button"
                className="text-sm font-medium text-violet-600 hover:text-violet-700"
              >
                + Add
              </button>

            </div>


            <div className="mt-5 space-y-4">

              <TeamMember
                initials="AK"
                name="Aman Kumar"
                role="Project Manager"
              />

              <TeamMember
                initials="PS"
                name="Priya Sharma"
                role="UI Designer"
              />

              <TeamMember
                initials="RV"
                name="Rohit Verma"
                role="Frontend Developer"
              />

              <TeamMember
                initials="AS"
                name="Ankit Singh"
                role="Backend Developer"
              />

            </div>

          </div>


          {/* =================================================
              RECENT FILES
          ================================================== */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6">

            <div className="flex items-center justify-between">

              <h2 className="font-semibold text-slate-900">
                Recent Files
              </h2>

              <button
                type="button"
                className="text-sm font-medium text-violet-600 hover:text-violet-700"
              >
                View All
              </button>

            </div>


            <div className="mt-5 space-y-3">

              <FileItem name="Project-Brief.pdf" />

              <FileItem name="Design.fig" />

              <FileItem name="API-Documentation.pdf" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* ============================================================
   INFO CARD
============================================================ */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">

      <div className="flex items-center gap-3">

        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
          {icon}
        </div>

        <span className="text-sm text-slate-500">
          {title}
        </span>

      </div>

      <p className="mt-4 text-lg font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}


/* ============================================================
   TEAM MEMBER
============================================================ */

function TeamMember({
  initials,
  name,
  role,
}: {
  initials: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
        {initials}
      </div>

      <div className="min-w-0">

        <p className="truncate text-sm font-medium text-slate-800">
          {name}
        </p>

        <p className="truncate text-xs text-slate-500">
          {role}
        </p>

      </div>

    </div>
  );
}


/* ============================================================
   FILE ITEM
============================================================ */

function FileItem({
  name,
}: {
  name: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">

      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-violet-600">
        <FileText size={17} />
      </div>

      <span className="truncate text-sm font-medium text-slate-700">
        {name}
      </span>

    </div>
  );
}