"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown } from "lucide-react";
import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/style.css";

export default function DateRangePicker() {
  const [range, setRange] = useState<DateRange | undefined>();
  const [open, setOpen] = useState(false);

  const formatDate = (date?: Date) => {
    if (!date) return "";

    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="relative">

      {/* Date Button */}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex items-center gap-2
          rounded-xl
          border border-slate-200
          bg-white
          px-4 py-2.5
          text-sm font-medium
          text-slate-700
          shadow-sm
          transition-all duration-200
          hover:border-violet-300
          hover:bg-violet-50/30
          focus:border-violet-400
          focus:outline-none
          focus:ring-2
          focus:ring-violet-100
        "
      >
        <CalendarDays
          size={17}
          className="text-violet-600"
        />

        <span className="whitespace-nowrap">
          {range?.from
            ? range.to
              ? `${formatDate(range.from)} - ${formatDate(range.to)}`
              : formatDate(range.from)
            : "Select date range"}
        </span>

        <ChevronDown
          size={16}
          className={`
            ml-1 text-slate-400
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>


      {/* Calendar Popup */}

      {open && (
        <div
          className="
            absolute right-0 top-14 z-50
            rounded-2xl
            border border-slate-200
            bg-white
            p-4
            shadow-2xl
          "
        >
          <DayPicker
            mode="range"
            selected={range}
            onSelect={setRange}
            numberOfMonths={2}
            captionLayout="dropdown"
          />

          {/* Footer */}

          <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">

            <button
              type="button"
              onClick={() => setRange(undefined)}
              className="
                rounded-lg
                px-3 py-2
                text-xs font-medium
                text-slate-500
                hover:bg-slate-100
              "
            >
              Clear
            </button>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="
                rounded-lg
                bg-violet-600
                px-4 py-2
                text-xs font-semibold
                text-white
                hover:bg-violet-700
              "
            >
              Apply
            </button>

          </div>
        </div>
      )}

    </div>
  );
}