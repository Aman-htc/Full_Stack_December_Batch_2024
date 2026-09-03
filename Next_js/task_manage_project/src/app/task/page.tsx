"use client";

import {
  CheckCircle2,
  Clock3,
  ListTodo,
  Plus,
  Search,
  X,
} from "lucide-react";

import TaskBoard from "../components/TaskBoard";
import { useState } from "react";

export default function TasksPage() {

  const [showTaskModal, setShowTaskModal] = useState(false);
  return (
    <div className="space-y-6">

      {/* ================= PAGE HEADER ================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="flex items-center gap-2">
            <ListTodo
              size={24}
              className="text-violet-600"
            />

            <h1 className="text-2xl font-bold text-slate-900">
              Tasks
            </h1>
          </div>

          <p className="mt-1 text-sm text-slate-500">
            Manage, organize and track your team's tasks.
          </p>
        </div>


        {/* New Task */}

        <button
          type="button"
          onClick={() => setShowTaskModal(true)}
          className="
    inline-flex cursor-pointer items-center justify-center gap-2
    rounded-xl bg-violet-600
    px-4 py-2.5
    text-sm font-semibold text-white
    shadow-sm transition
    hover:bg-violet-700 hover:shadow-md
  "
        >
          <Plus size={18} />
          New Task
        </button>

      </div>


      {/* ================= STATS ================= */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        {/* Total */}

        <TaskStat
          title="Total Tasks"
          value="24"
          icon={<ListTodo size={19} />}
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />


        {/* To Do */}

        <TaskStat
          title="To Do"
          value="8"
          icon={<Clock3 size={19} />}
          iconBg="bg-slate-100"
          iconColor="text-slate-600"
        />


        {/* In Progress */}

        <TaskStat
          title="In Progress"
          value="7"
          icon={<Clock3 size={19} />}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />


        {/* Completed */}

        <TaskStat
          title="Completed"
          value="9"
          icon={<CheckCircle2 size={19} />}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

      </div>


      {/* ================= TOOLBAR ================= */}

      <div
        className="
          flex flex-col gap-3
          rounded-2xl
          border border-slate-200
          bg-white
          p-4
          shadow-sm
          md:flex-row
          md:items-center
          md:justify-between
        "
      >

        {/* Search */}

        <div className="relative w-full md:max-w-sm">

          <Search
            size={17}
            className="
              absolute left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search tasks..."
            className="
              w-full
              rounded-xl
              border border-slate-200
              bg-slate-50
              py-2.5
              pl-10 pr-4
              text-sm
              text-slate-700
              outline-none
              transition
              focus:border-violet-400
              focus:bg-white
              focus:ring-2
              focus:ring-violet-100
            "
          />

        </div>


        {/* Filters */}

        <div className="flex flex-wrap gap-2">

          <select
            className="
              rounded-xl
              border border-slate-200
              bg-white
              px-3 py-2.5
              text-sm
              text-slate-600
              outline-none
              focus:border-violet-400
            "
          >
            <option>All Projects</option>
            <option>Website Redesign</option>
            <option>Mobile App</option>
            <option>E-Commerce</option>
          </select>


          <select
            className="
              rounded-xl
              border border-slate-200
              bg-white
              px-3 py-2.5
              text-sm
              text-slate-600
              outline-none
              focus:border-violet-400
            "
          >
            <option>All Assignees</option>
            <option>Aman Kumar</option>
            <option>Priya Sharma</option>
            <option>Rohit Verma</option>
          </select>

        </div>

      </div>


      {/* ================= KANBAN BOARD ================= */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Task Board
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Drag and drop tasks to update their status.
            </p>
          </div>

        </div>


        <TaskBoard />

        <div>
          {showTaskModal && (
            <NewTaskModal
              onClose={() => setShowTaskModal(false)}
            />
          )}

        </div>


      </div>

    </div>
  );
}


/* ================================================= */
/* TASK STAT */
/* ================================================= */

function TaskStat({
  title,
  value,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div
      className="
        rounded-2xl
        border border-slate-200
        bg-white
        p-5
        shadow-sm
        transition
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </p>

        </div>


        <div
          className={`
            flex h-10 w-10
            items-center justify-center
            rounded-xl
            ${iconBg}
            ${iconColor}
          `}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}

function NewTaskModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

      <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl">

        {/* ================= HEADER ================= */}

        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Create New Task
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Create and assign a new task to your team.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              cursor-pointer rounded-lg p-2
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
            "
          >
            <X size={20} />
          </button>

        </div>


        {/* ================= FORM ================= */}

        <form className="space-y-5 px-6 py-6">

          {/* Task Title */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Task Title
            </label>

            <input
              type="text"
              placeholder="e.g. Design homepage"
              className="
                w-full rounded-xl
                border border-slate-200
                bg-white
                px-4 py-3
                text-sm text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-100
              "
            />
          </div>


          {/* Description */}

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Describe the task..."
              className="
                w-full resize-none rounded-xl
                border border-slate-200
                bg-white
                px-4 py-3
                text-sm text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-100
              "
            />
          </div>


          {/* Project + Assignee */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {/* Project */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Project
              </label>

              <select
                className="
                  w-full cursor-pointer rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-700
                  outline-none
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                defaultValue=""
              >
                <option value="" disabled>
                  Select project
                </option>

                <option value="website">
                  Website Redesign
                </option>

                <option value="mobile">
                  Mobile App
                </option>

                <option value="ecommerce">
                  E-Commerce
                </option>
              </select>
            </div>


            {/* Assign To */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Assign To
              </label>

              <select
                className="
                  w-full cursor-pointer rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-700
                  outline-none
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                defaultValue=""
              >
                <option value="" disabled>
                  Select team member
                </option>

                <option value="aman">
                  Aman Kumar
                </option>

                <option value="priya">
                  Priya Sharma
                </option>

                <option value="rohit">
                  Rohit Verma
                </option>

                <option value="neha">
                  Neha Singh
                </option>
              </select>
            </div>

          </div>


          {/* Priority + Due Date + Status */}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

            {/* Priority */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Priority
              </label>

              <select
                className="
                  w-full cursor-pointer rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-700
                  outline-none
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                defaultValue="medium"
              >
                <option value="low">
                  Low
                </option>

                <option value="medium">
                  Medium
                </option>

                <option value="high">
                  High
                </option>

                <option value="urgent">
                  Urgent
                </option>
              </select>
            </div>


            {/* Due Date */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Due Date
              </label>

              <input
                type="date"
                className="
                  w-full cursor-pointer rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-700
                  outline-none
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
              />
            </div>


            {/* Status */}

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Status
              </label>

              <select
                className="
                  w-full cursor-pointer rounded-xl
                  border border-slate-200
                  bg-white
                  px-4 py-3
                  text-sm text-slate-700
                  outline-none
                  focus:border-violet-500
                  focus:ring-2
                  focus:ring-violet-100
                "
                defaultValue="todo"
              >
                <option value="todo">
                  To Do
                </option>

                <option value="in-progress">
                  In Progress
                </option>
              </select>
            </div>

          </div>


          {/* ================= FOOTER ================= */}

          <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-5">

            <button
              type="button"
              onClick={onClose}
              className="
                cursor-pointer rounded-xl
                border border-slate-200
                bg-white
                px-4 py-2.5
                text-sm font-semibold
                text-slate-600
                transition
                hover:bg-slate-50
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                cursor-pointer rounded-xl
                bg-violet-600
                px-5 py-2.5
                text-sm font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-violet-700
                hover:shadow-md
              "
            >
              Create Task
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}