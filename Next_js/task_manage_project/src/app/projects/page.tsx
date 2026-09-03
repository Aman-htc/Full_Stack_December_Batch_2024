

"use client";

import { useState } from "react";
import StatCard from "../components/statcard";
import ProjectCard from "@/app/components/projectcards";
// import { projectdata as initialProjects } from "@/app/data/dashboards";

import {
  Activity,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Plus,
  Search,
  X,
} from "lucide-react";

// type ProjectStatus =
//   | "On Track"
//   | "In Progress"
//   | "Delayed"
//   | "Completed";

// type Project = {
//   id: string;
//   name: string;
//   type: string;
//   progress: number;
//   status: ProjectStatus;
//   color: string;
// };
import {
  projectdata as initialProjects,
  type Project,
  type ProjectStatus,
} from "@/app/data/dashboards";


export default function ProjectsPage() {
  const [projects, setProjects] =
    useState<Project[]>(initialProjects);

  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    type: "",
    status: "On Track" as ProjectStatus,
    progress: 0,
    color: "bg-violet-500",
  });

  function handleInputChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]:
        name === "progress"
          ? Number(value)
          : value,
    }));
  }

  function handleCreateProject(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (!formData.name.trim() || !formData.type.trim()) {
      return;
    }

    // const newProject: Project = {
    //   id: Date.now().toString(),
    //   name: formData.name,
    //   type: formData.type,
    //   progress: formData.progress,
    //   status: formData.status,
    //   color: formData.color,
    // };

    // setProjects((current) => [
    //   newProject,
    //   ...current,
    // ]);

    setFormData({
      name: "",
      type: "",
      status: "On Track",
      progress: 0,
      color: "bg-violet-500",
    });

    setShowModal(false);
  }

  return (
    <>
      <div className="space-y-6">

        {/* ================= PAGE HEADER ================= */}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Projects
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage and track all your projects in one place
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 hover:shadow-md "
          >
            <Plus size={17} />
            New Project
          </button>

        </div>



        {/* ================= SEARCH & FILTER ================= */}

        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row">

          <div className="relative w-full sm:max-w-md">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search projects..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-2 focus:ring-violet-100"
            />

          </div>


          <select
            defaultValue="all"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600 outline-none focus:border-violet-500"
          >
            <option value="all">All Status</option>
            <option value="on-track">On Track</option>
            <option value="in-progress">In Progress</option>
            <option value="delayed">Delayed</option>
            <option value="completed">Completed</option>
          </select>


          <select
            defaultValue="all"
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-600 outline-none focus:border-violet-500"
          >
            <option value="all">All Members</option>
            <option value="aman">Aman Kumar</option>
            <option value="priya">Priya Sharma</option>
            <option value="rohit">Rohit Verma</option>
          </select>

        </div>


        {/* ================= STATS ================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Total Projects"
            value={projects.length.toString()}
            change="8%"
            icon={<FolderKanban size={21} />}
            iconBg="bg-violet-50 text-violet-600"
          />

          <StatCard
            title="Active Projects"
            value={projects.filter(
              (p) =>
                p.status === "On Track" ||
                p.status === "In Progress"
            ).length.toString()}
            change="12%"
            icon={<Activity size={21} />}
            iconBg="bg-blue-50 text-blue-600"
          />

          <StatCard
            title="Completed"
            value={projects.filter(
              (p) => p.status === "Completed"
            ).length.toString()}
            change="5%"
            icon={<CheckCircle2 size={21} />}
            iconBg="bg-emerald-50 text-emerald-600"
          />

          <StatCard
            title="Delayed"
            value={projects.filter(
              (p) => p.status === "Delayed"
            ).length.toString()}
            change="2%"
            changeType="negative"
            icon={<Clock3 size={21} />}
            iconBg="bg-red-50 text-red-600"
          />

        </div>


        {/* ================= PROJECT LIST ================= */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">

          <div className="flex flex-col gap-2 border-b border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <h2 className="font-semibold text-slate-900">
                All Projects
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Track progress and manage your projects
              </p>
            </div>

            <span className="text-sm text-slate-400">
              {projects.length} Projects
            </span>

          </div>


          <div className="grid grid-cols-1 gap-5 p-5 xl:grid-cols-2">

            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                type={project.type}
                progress={project.progress}
                status={project.status}
                color={project.color}
              />
            ))}

          </div>

        </div>

      </div>


      {/* =====================================================
          NEW PROJECT MODAL
      ====================================================== */}

      {showModal && (

        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">

          <div className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">

            {/* Modal Header */}

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Create New Project
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Add a new project to your workspace
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={20} />
              </button>

            </div>


            {/* Form */}

            <form
              onSubmit={handleCreateProject}
              className="space-y-5 p-6"
            >

              {/* Project Name */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Project Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Website Redesign"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>


              {/* Project Type */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Project Type
                </label>

                <input
                  type="text"
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  placeholder="e.g. Web Development"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                />
              </div>


              {/* Status + Progress */}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Status
                  </label>

                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                  >
                    <option>On Track</option>
                    <option>In Progress</option>
                    <option>Delayed</option>
                    <option>Completed</option>
                  </select>
                </div>


                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Progress
                  </label>

                  <div className="relative">

                    <input
                      type="number"
                      name="progress"
                      min="0"
                      max="100"
                      value={formData.progress}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-700 outline-none focus:border-violet-500 focus:ring-4 focus:ring-violet-50"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-400">
                      %
                    </span>

                  </div>
                </div>

              </div>


              {/* Color */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Project Color
                </label>

                <div className="flex gap-3">

                  {[
                    "bg-violet-500",
                    "bg-blue-500",
                    "bg-emerald-500",
                    "bg-orange-500",
                    "bg-pink-500",
                  ].map((color) => (

                    <button
                      key={color}
                      type="button"
                      onClick={() =>
                        setFormData((current) => ({
                          ...current,
                          color,
                        }))
                      }
                      className={`h-9 w-9 rounded-full ${color} transition ${
                        formData.color === color
                          ? "ring-4 ring-violet-100 ring-offset-2"
                          : "hover:scale-110"
                      }`}
                    />

                  ))}

                </div>
              </div>


              {/* Actions */}

              <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl cursor-pointer bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700"
                >
                  Create Project
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </>
  );
}