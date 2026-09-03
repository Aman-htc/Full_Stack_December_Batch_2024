"use client";

import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  MapPin,
  Plus,
  Search,
  Video,
} from "lucide-react";
import { useState } from "react";

import {events} from "@/app/data/calendar/events"

type EventType = "meeting" | "deadline" | "task" | "milestone";

// type CalendarEvent = {
//   id: number;
//   title: string;
//   date: number;
//   time: string;
//   type: EventType;
//   project: string;
// };

// const events = [
//   {
//     id: 1,
//     title: "Client Meeting",
//     date: 12,
//     time: "10:00 AM",
//     type: "meeting",
//     project: "Website Redesign",
//   },
//   {
//     id: 2,
//     title: "API Integration",
//     date: 14,
//     time: "05:00 PM",
//     type: "deadline",
//     project: "Mobile App",
//   },
//   {
//     id: 3,
//     title: "Project Review",
//     date: 18,
//     time: "02:00 PM",
//     type: "milestone",
//     project: "E-Commerce Platform",
//   },
//   {
//     id: 4,
//     title: "Testing",
//     date: 20,
//     time: "11:00 AM",
//     type: "task",
//     project: "CRM System",
//   },
//   {
//     id: 5,
//     title: "Final Presentation",
//     date: 25,
//     time: "03:00 PM",
//     type: "meeting",
//     project: "Website Redesign",
//   },
// ];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const calendarDays = [
  27,
  28,
  29,
  30,
  31,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  1,
  2,
  3,
  4,
  5,
  6,
];

const getEventStyle = (type: EventType) => {
  switch (type) {
    case "meeting":
      return "bg-blue-50 text-blue-700 border-blue-100";

    case "deadline":
      return "bg-red-50 text-red-700 border-red-100";

    case "milestone":
      return "bg-violet-50 text-violet-700 border-violet-100";

    case "task":
      return "bg-amber-50 text-amber-700 border-amber-100";
  }
};

const getEventDot = (type: EventType) => {
  switch (type) {
    case "meeting":
      return "bg-blue-500";

    case "deadline":
      return "bg-red-500";

    case "milestone":
      return "bg-violet-500";

    case "task":
      return "bg-amber-500";
  }
};

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState(12);
  const [search, setSearch] = useState("");

  const filteredEvents = events.filter((event) =>
    `${event.title} ${event.project}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const selectedEvents = filteredEvents.filter(
    (event) => event.date === selectedDate
  );

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="flex items-center gap-2">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
              <CalendarDays size={21} />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                Calendar
              </h1>

              <p className="mt-0.5 text-sm text-slate-500">
                Manage deadlines, meetings and project events.
              </p>
            </div>

          </div>
        </div>


        {/* Create Event */}

        <button
          type="button"
          className="
            inline-flex items-center justify-center gap-2
            rounded-xl bg-violet-600
            px-4 py-2.5
            text-sm font-semibold text-white
            shadow-sm
            transition
            hover:bg-violet-700
            hover:shadow-md
          "
        >
          <Plus size={18} />
          Create Event
        </button>

      </div>


      {/* ================= STATS ================= */}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <CalendarStat
          title="Today's Events"
          value="3"
          description="Scheduled today"
          icon={<CalendarDays size={19} />}
          iconBg="bg-violet-50"
          iconColor="text-violet-600"
        />

        <CalendarStat
          title="This Week"
          value="12"
          description="Upcoming events"
          icon={<Clock3 size={19} />}
          iconBg="bg-blue-50"
          iconColor="text-blue-600"
        />

        <CalendarStat
          title="Deadlines"
          value="5"
          description="Due this month"
          icon={<Clock3 size={19} />}
          iconBg="bg-red-50"
          iconColor="text-red-600"
        />

        <CalendarStat
          title="Meetings"
          value="8"
          description="This month"
          icon={<Video size={19} />}
          iconBg="bg-emerald-50"
          iconColor="text-emerald-600"
        />

      </div>


      {/* ================= TOOLBAR ================= */}

      <div
        className="
          flex flex-col gap-3
          rounded-2xl border border-slate-200
          bg-white p-4 shadow-sm
          md:flex-row md:items-center md:justify-between
        "
      >

        {/* Search */}

        <div className="relative w-full md:max-w-sm">

          <Search
            size={17}
            className="
              absolute left-3 top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search events..."
            className="
              w-full rounded-xl
              border border-slate-200
              bg-slate-50
              py-2.5 pl-10 pr-4
              text-sm text-slate-700
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
              rounded-xl border border-slate-200
              bg-white px-3 py-2.5
              text-sm text-slate-600
              outline-none
              focus:border-violet-400
            "
          >
            <option>All Projects</option>
            <option>Website Redesign</option>
            <option>Mobile App</option>
            <option>E-Commerce</option>
            <option>CRM System</option>
          </select>


          <select
            className="
              rounded-xl border border-slate-200
              bg-white px-3 py-2.5
              text-sm text-slate-600
              outline-none
              focus:border-violet-400
            "
          >
            <option>All Events</option>
            <option>Meetings</option>
            <option>Deadlines</option>
            <option>Tasks</option>
            <option>Milestones</option>
          </select>

        </div>

      </div>


      {/* ================= CALENDAR + UPCOMING ================= */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">

        {/* Calendar */}

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

          {/* Calendar Header */}

          <div className="flex items-center justify-between border-b border-slate-200 p-5">

            <div>

              <h2 className="text-lg font-bold text-slate-900">
                August 2026
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Project schedule and deadlines
              </p>

            </div>


            <div className="flex items-center gap-2">

              <button
                type="button"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-slate-200
                  text-slate-500
                  hover:bg-slate-50
                "
              >
                <ChevronLeft size={17} />
              </button>

              <button
                type="button"
                className="
                  rounded-lg border border-slate-200
                  px-3 py-2
                  text-xs font-semibold
                  text-slate-600
                  hover:bg-slate-50
                "
              >
                Today
              </button>

              <button
                type="button"
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-lg border border-slate-200
                  text-slate-500
                  hover:bg-slate-50
                "
              >
                <ChevronRight size={17} />
              </button>

            </div>

          </div>


          {/* Week Days */}

          <div className="grid grid-cols-7 border-b border-slate-200">

            {days.map((day) => (
              <div
                key={day}
                className="
                  border-r border-slate-100
                  px-2 py-3
                  text-center
                  text-[11px] font-bold
                  uppercase tracking-wide
                  text-slate-400
                  last:border-r-0
                "
              >
                {day}
              </div>
            ))}

          </div>


          {/* Calendar Grid */}

          <div className="grid grid-cols-7">

            {calendarDays.map((day, index) => {

              const isCurrentMonth =
                index >= 5 && index <= 35;

              const dayEvents = filteredEvents.filter(
                (event) => event.date === day
              );

              const isSelected = selectedDate === day;

              return (
                <button
                  key={`${day}-${index}`}
                  type="button"
                  onClick={() =>
                    isCurrentMonth && setSelectedDate(day)
                  }
                  className={`
                    relative
                    min-h-[105px]
                    border-r border-b
                    border-slate-100
                    p-2
                    text-left
                    transition
                    hover:bg-slate-50
                    ${
                      !isCurrentMonth
                        ? "bg-slate-50/50"
                        : "bg-white"
                    }
                    ${
                      isSelected
                        ? "bg-violet-50/50"
                        : ""
                    }
                  `}
                >

                  {/* Date */}

                  <span
                    className={`
                      flex h-7 w-7
                      items-center justify-center
                      rounded-full
                      text-xs font-semibold
                      ${
                        !isCurrentMonth
                          ? "text-slate-300"
                          : isSelected
                            ? "bg-violet-600 text-white"
                            : "text-slate-600"
                      }
                    `}
                  >
                    {day}
                  </span>


                  {/* Events */}

                  <div className="mt-2 space-y-1">

                    {dayEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        className={`
                          truncate rounded-md
                          border px-1.5 py-1
                          text-[9px] font-semibold
                          ${getEventStyle(event.type)}
                        `}
                      >
                        <span
                          className={`
                            mr-1 inline-block
                            h-1.5 w-1.5
                            rounded-full
                            ${getEventDot(event.type)}
                          `}
                        />

                        {event.title}
                      </div>
                    ))}

                    {dayEvents.length > 2 && (
                      <span className="px-1 text-[9px] font-medium text-slate-400">
                        +{dayEvents.length - 2} more
                      </span>
                    )}

                  </div>

                </button>
              );
            })}

          </div>


          {/* Legend */}

          <div className="flex flex-wrap gap-4 border-t border-slate-200 px-5 py-4">

            <Legend
              color="bg-blue-500"
              label="Meeting"
            />

            <Legend
              color="bg-red-500"
              label="Deadline"
            />

            <Legend
              color="bg-violet-500"
              label="Milestone"
            />

            <Legend
              color="bg-amber-500"
              label="Task"
            />

          </div>

        </div>


        {/* ================= UPCOMING ================= */}

        <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

          <div className="border-b border-slate-200 p-5">

            <h2 className="font-bold text-slate-900">
              Upcoming Events
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              Your next scheduled activities
            </p>

          </div>


          <div className="p-5">

            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="
                  group mb-4
                  rounded-xl
                  border border-slate-100
                  p-3
                  transition
                  last:mb-0
                  hover:border-violet-100
                  hover:bg-violet-50/30
                "
              >

                <div className="flex gap-3">

                  {/* Date */}

                  <div
                    className={`
                      flex h-11 w-11 shrink-0
                      flex-col items-center justify-center
                      rounded-xl
                      ${getEventStyle(event.type)}
                    `}
                  >
                    <span className="text-[9px] font-bold uppercase">
                      Aug
                    </span>

                    <span className="text-sm font-bold">
                      {event.date}
                    </span>
                  </div>


                  {/* Details */}

                  <div className="min-w-0 flex-1">

                    <p className="truncate text-sm font-semibold text-slate-800">
                      {event.title}
                    </p>

                    <p className="mt-1 truncate text-xs text-slate-500">
                      {event.project}
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-[11px] text-slate-400">
                      <Clock3 size={12} />
                      {event.time}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>


          {/* Selected Date */}

          <div className="border-t border-slate-200 p-5">

            <h3 className="text-sm font-bold text-slate-800">
              Selected Date
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              August {selectedDate}, 2026
            </p>


            <div className="mt-4">

              {selectedEvents.length > 0 ? (
                selectedEvents.map((event) => (
                  <div
                    key={event.id}
                    className="
                      flex items-center gap-2
                      rounded-lg
                      bg-slate-50
                      px-3 py-2
                    "
                  >
                    <span
                      className={`
                        h-2 w-2 rounded-full
                        ${getEventDot(event.type)}
                      `}
                    />

                    <span className="truncate text-xs font-medium text-slate-600">
                      {event.title}
                    </span>
                  </div>
                ))
              ) : (
                <div className="rounded-xl border border-dashed border-slate-200 p-4 text-center">

                  <MapPin
                    size={18}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-2 text-xs text-slate-400">
                    No events scheduled
                  </p>

                </div>
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}


/* ================================================= */
/* STAT CARD */
/* ================================================= */

function CalendarStat({
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


/* ================================================= */
/* LEGEND */
/* ================================================= */

function Legend({
  color,
  label,
}: {
  color: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">

      <span
        className={`h-2 w-2 rounded-full ${color}`}
      />

      <span className="text-[11px] font-medium text-slate-500">
        {label}
      </span>

    </div>
  );
}