"use client";

import {
  Bell,
  ChevronDown,
  Mail,
  Menu,
  Search,
} from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center border-b border-slate-200 bg-white px-4 lg:px-8">

      <button
        type="button"
        className="mr-4 rounded-lg p-2 text-slate-600 hover:bg-slate-100 lg:hidden"
      >
        <Menu size={22} />
      </button>

      <div className="relative hidden w-80 md:block">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-violet-500 focus:bg-white"
        />
      </div>

      <div className="ml-auto flex items-center gap-2">

        <button
          type="button"
          className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100"
        >
          <Bell size={20} />

          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
            5
          </span>
        </button>

        <button
          type="button"
          className="relative rounded-xl p-2.5 text-slate-500 hover:bg-slate-100"
        >
          <Mail size={20} />

          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white">
            3
          </span>
        </button>

        <div className="ml-2 flex items-center gap-2 border-l border-slate-200 pl-4">

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-violet-100 text-sm font-semibold text-violet-700">
            AK
          </div>

          <div className="hidden md:block">
            <p className="text-sm font-semibold text-slate-800">
              Aman
            </p>

            <p className="text-xs text-slate-500">
              Admin
            </p>
          </div>

          <ChevronDown
            size={16}
            className="text-slate-500"
          />

        </div>

      </div>

    </header>
  );
}