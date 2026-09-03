"use client";

import {
  Archive,
  ChevronDown,
  Download,
  File,
  FileImage,
  FileSpreadsheet,
  FileText,
  Folder,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  Upload,
} from "lucide-react";

import { documents } from "../data/documents";
import { folders } from "../data/documents"





export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-8">

      {/* ================= HEADER ================= */}

      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Documents
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage, organize and share your project documents.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700">
          <Upload size={17} />
          Upload Document
        </button>

      </div>

      {/* ================= STATS ================= */}

      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <Stat
          title="Total Documents"
          value="85"
          subtitle="+12 this month"
          icon={<FileText size={20} />}
          iconClass="bg-violet-50 text-violet-600"
        />

        <Stat
          title="Shared Files"
          value="32"
          subtitle="Across 8 projects"
          icon={<Share2 size={20} />}
          iconClass="bg-blue-50 text-blue-600"
        />

        <Stat
          title="Recent Files"
          value="18"
          subtitle="Updated this week"
          icon={<Archive size={20} />}
          iconClass="bg-emerald-50 text-emerald-600"
        />

        <Stat
          title="Storage Used"
          value="5.7 GB"
          subtitle="Of 20 GB available"
          icon={<Folder size={20} />}
          iconClass="bg-orange-50 text-orange-600"
        />

      </div>

      {/* ================= SEARCH ================= */}

      <div className="mb-7 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 lg:flex-row">

          <div className="relative flex-1">

            <Search
              size={18}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search documents..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
            />

          </div>

          <button className="flex items-center justify-between gap-8 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600">
            File Type
            <ChevronDown size={16} />
          </button>

          <button className="flex items-center justify-between gap-8 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600">
            Sort By
            <ChevronDown size={16} />
          </button>

        </div>

      </div>

      {/* ================= FOLDERS ================= */}

      <div className="mb-7">

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h2 className="font-semibold text-slate-900">
              Folders
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Organize your documents
            </p>
          </div>

          <button className="flex items-center gap-1 text-sm font-medium text-violet-600 hover:text-violet-700">
            <Plus size={16} />
            New Folder
          </button>

        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

          {folders.map((folder) => (
            <div
              key={folder.name}
              className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
            >

              <div className="flex items-center justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                  <Folder size={21} />
                </div>

                <MoreHorizontal
                  size={18}
                  className="text-slate-400"
                />

              </div>

              <h3 className="mt-4 text-sm font-semibold text-slate-800">
                {folder.name}
              </h3>

              <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                <span>{folder.files} files</span>
                <span>•</span>
                <span>{folder.size}</span>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ================= RECENT DOCUMENTS ================= */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-slate-200 p-5">

          <div>
            <h2 className="font-semibold text-slate-900">
              Recent Documents
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Recently uploaded and modified files
            </p>
          </div>

          <button className="text-sm font-medium text-violet-600 hover:text-violet-700">
            View All
          </button>

        </div>

        {/* Desktop Table */}

        <div className="hidden overflow-x-auto md:block">

          <table className="w-full">

            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/70 text-left">

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Document
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Owner
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Modified
                </th>

                <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Size
                </th>

                <th className="px-5 py-3 text-right text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {documents.map((document) => {
                const Icon = document.icon;

                return (
                  <tr
                    key={document.id}
                    className="border-b border-slate-100 last:border-0 hover:bg-slate-50/70"
                  >

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-3">

                        <div
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${document.iconBg} ${document.iconColor}`}
                        >
                          <Icon size={19} />
                        </div>

                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            {document.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400">
                            {document.type}
                          </p>
                        </div>

                      </div>

                    </td>

                    <td className="px-5 py-4">

                      <div className="flex items-center gap-2">

                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-[10px] font-bold text-violet-700">
                          {document.owner
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>

                        <span className="text-sm text-slate-600">
                          {document.owner}
                        </span>

                      </div>

                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {document.modified}
                    </td>

                    <td className="px-5 py-4 text-sm text-slate-500">
                      {document.size}
                    </td>

                    <td className="px-5 py-4">

                      <div className="flex justify-end gap-1">

                        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                          <Download size={17} />
                        </button>

                        <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                          <MoreHorizontal size={17} />
                        </button>

                      </div>

                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

        {/* Mobile */}

        <div className="divide-y divide-slate-100 md:hidden">

          {documents.map((document) => {
            const Icon = document.icon;

            return (
              <div
                key={document.id}
                className="flex items-center gap-3 p-4"
              >

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${document.iconBg} ${document.iconColor}`}
                >
                  <Icon size={19} />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm font-medium text-slate-800">
                    {document.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    {document.owner} • {document.size}
                  </p>

                </div>

                <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100">
                  <MoreHorizontal size={18} />
                </button>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}

/* ================= STAT ================= */

function Stat({
  title,
  value,
  subtitle,
  icon,
  iconClass,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}