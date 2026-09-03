"use client";

import {
  BriefcaseBusiness,
  CheckCircle2,
  ChevronDown,
  Mail,
  MoreHorizontal,
  Plus,
  Search,
  Users,
  UserCheck,
  UserPlus,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

import {teamMembers} from "@/app/data/team"
import {TeamMember} from "@/app/data/team"





export default function TeamPage() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("All Roles");
  const [status, setStatus] = useState("All Status");
  const [showModal, setShowModal] = useState(false);

  const filteredMembers = useMemo(() => {
    return teamMembers.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.email.toLowerCase().includes(search.toLowerCase()) ||
        member.role.toLowerCase().includes(search.toLowerCase());

      const matchesRole =
        role === "All Roles" || member.role === role;

      const matchesStatus =
        status === "All Status" || member.status === status;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [search, role, status]);

  const activeMembers = teamMembers.filter(
    (member) => member.status === "Active"
  ).length;

  const totalProjects = teamMembers.reduce(
    (total, member) => total + member.projects,
    0
  );

  const completedTasks = teamMembers.reduce(
    (total, member) => total + member.completedTasks,
    0
  );

  return (
    <div className="space-y-6">

      {/* ================= PAGE HEADER ================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <Users size={22} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Team
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage your team members and their project responsibilities.
              </p>
            </div>

          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 hover:shadow-md"
        >
          <Plus size={18} />
          Add Member
        </button>

      </div>


      {/* ================= STATS ================= */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <TeamStat
          title="Total Members"
          value={teamMembers.length.toString()}
          description="People in your team"
          icon={<Users size={20} />}
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />

        <TeamStat
          title="Active Members"
          value={activeMembers.toString()}
          description="Currently active"
          icon={<UserCheck size={20} />}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

        <TeamStat
          title="Assigned Projects"
          value={totalProjects.toString()}
          description="Across all members"
          icon={<BriefcaseBusiness size={20} />}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <TeamStat
          title="Completed Tasks"
          value={completedTasks.toString()}
          description="Tasks completed"
          icon={<CheckCircle2 size={20} />}
          iconBg="bg-orange-50"
          iconColor="text-orange-600"
        />

      </div>


      {/* ================= FILTER BAR ================= */}

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}

          <div className="relative w-full lg:max-w-md">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search members..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
            />

          </div>


          {/* Filters */}

          <div className="flex flex-wrap gap-2">

            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-violet-400"
            >
              <option>All Roles</option>
              <option>UI/UX Designer</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>QA Engineer</option>
              <option>Project Manager</option>
              <option>Product Designer</option>
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-violet-400"
            >
              <option>All Status</option>
              <option>Active</option>
              <option>Away</option>
              <option>Offline</option>
            </select>

          </div>

        </div>

      </div>


      {/* ================= TEAM HEADER ================= */}

      <div className="flex items-center justify-between">

        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Team Members
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            {filteredMembers.length} members found
          </p>
        </div>

        <button
          type="button"
          className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 sm:flex"
        >
          Recently Active
          <ChevronDown size={14} />
        </button>

      </div>


      {/* ================= TEAM GRID ================= */}

      {filteredMembers.length > 0 ? (

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">

          {filteredMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}

        </div>

      ) : (

        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">

          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400">
            <Users size={22} />
          </div>

          <h3 className="mt-4 font-semibold text-slate-800">
            No members found
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Try changing your search or filters.
          </p>

        </div>

      )}


      {/* ================= ADD MEMBER MODAL ================= */}

      {showModal && (
        <AddMemberModal
          onClose={() => setShowModal(false)}
        />
      )}

    </div>
  );
}


/* ================================================= */
/* TEAM STAT */
/* ================================================= */

function TeamStat({
  title,
  value,
  description,
  icon,
  iconBg,
  iconColor,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-xs font-medium text-slate-500">
            {title}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </p>

          <p className="mt-1 text-[11px] text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconBg} ${iconColor}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}


/* ================================================= */
/* TEAM MEMBER CARD */
/* ================================================= */

function TeamMemberCard({
  member,
}: {
  member: TeamMember;
}) {
  const statusStyle = {
    Active: "bg-emerald-50 text-emerald-600",
    Away: "bg-amber-50 text-amber-600",
    Offline: "bg-slate-100 text-slate-500",
  };

  const statusDot = {
    Active: "bg-emerald-500",
    Away: "bg-amber-500",
    Offline: "bg-slate-400",
  };

  const totalTasks =
    member.completedTasks + member.pendingTasks;

  const completion =
    totalTasks === 0
      ? 0
      : Math.round(
          (member.completedTasks / totalTasks) * 100
        );

  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">

      {/* Header */}

      <div className="flex items-start justify-between">

        <div className="flex min-w-0 items-center gap-3">

          <div
            className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold ${member.avatarBg}`}
          >
            {member.initials}

            <span
              className={`absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-white ${statusDot[member.status]}`}
            />
          </div>

          <div className="min-w-0">

            <h3 className="truncate text-sm font-bold text-slate-900">
              {member.name}
            </h3>

            <p className="mt-0.5 truncate text-xs text-slate-500">
              {member.role}
            </p>

          </div>

        </div>


        <button
          type="button"
          className="rounded-lg p-1.5 text-slate-400 opacity-0 transition hover:bg-slate-100 hover:text-slate-600 group-hover:opacity-100"
        >
          <MoreHorizontal size={18} />
        </button>

      </div>


      {/* Email */}

      <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">

        <Mail size={14} />

        <span className="truncate">
          {member.email}
        </span>

      </div>


      {/* Status */}

      <div className="mt-4">

        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold ${statusStyle[member.status]}`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${statusDot[member.status]}`}
          />

          {member.status}
        </span>

      </div>


      {/* Stats */}

      <div className="mt-5 grid grid-cols-3 divide-x divide-slate-100 rounded-xl bg-slate-50 py-3">

        <MemberStat
          label="Projects"
          value={member.projects}
        />

        <MemberStat
          label="Completed"
          value={member.completedTasks}
        />

        <MemberStat
          label="Pending"
          value={member.pendingTasks}
        />

      </div>


      {/* Progress */}

      <div className="mt-5">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-xs font-medium text-slate-500">
            Task completion
          </span>

          <span className="text-xs font-bold text-slate-800">
            {completion}%
          </span>

        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">

          <div
            className="h-full rounded-full bg-violet-500 transition-all"
            style={{
              width: `${completion}%`,
            }}
          />

        </div>

      </div>


      {/* Footer */}

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

        <span className="text-xs text-slate-400">
          {member.department}
        </span>

        <button
          type="button"
          className="text-xs font-semibold text-violet-600 transition hover:text-violet-700"
        >
          View Profile →
        </button>

      </div>

    </div>
  );
}


/* ================================================= */
/* MEMBER STAT */
/* ================================================= */

function MemberStat({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="text-center">

      <p className="text-sm font-bold text-slate-800">
        {value}
      </p>

      <p className="mt-0.5 text-[9px] font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

    </div>
  );
}


/* ================================================= */
/* ADD MEMBER MODAL */
/* ================================================= */

function AddMemberModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-2xl bg-white shadow-2xl">

        {/* Modal Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-5">

          <div>

            <h2 className="text-lg font-bold text-slate-900">
              Add Team Member
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Add a new member to your project team.
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X size={18} />
          </button>

        </div>


        {/* Form */}

        <div className="space-y-4 p-5">

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <FormField
              label="Full Name"
              placeholder="Enter full name"
            />

            <FormField
              label="Email Address"
              placeholder="name@example.com"
            />

          </div>


          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                Role
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100">
                <option>Select role</option>
                <option>UI/UX Designer</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>QA Engineer</option>
                <option>Project Manager</option>
              </select>
            </div>


            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-600">
                Department
              </label>

              <select className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 outline-none focus:border-violet-400 focus:ring-2 focus:ring-violet-100">
                <option>Select department</option>
                <option>Design</option>
                <option>Development</option>
                <option>Management</option>
                <option>Quality Assurance</option>
              </select>
            </div>

          </div>


          {/* Actions */}

          <div className="flex justify-end gap-2 border-t border-slate-100 pt-5">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
            >
              <UserPlus size={17} />
              Add Member
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}


/* ================================================= */
/* FORM FIELD */
/* ================================================= */

function FormField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>

      <label className="mb-1.5 block text-xs font-semibold text-slate-600">
        {label}
      </label>

      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-2 focus:ring-violet-100"
      />

    </div>
  );
}