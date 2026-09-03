"use client";

import { Check } from "lucide-react";

type ThemeOptionProps = {
  title: string;
  active: boolean;
  preview: string;
  onClick: () => void;
};

export default function ThemeOption({
  title,
  active,
  preview,
  onClick,
}: ThemeOptionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full rounded-xl border-2 p-2 text-left
        transition-all duration-200
        ${
          active
            ? "border-violet-500 bg-violet-50 shadow-sm"
            : "border-slate-200 bg-white hover:border-violet-300 hover:shadow-sm"
        }
      `}
    >
      {/* Theme Preview */}
      <div
        className={`
          h-24 w-full rounded-lg
          border border-slate-200
          ${preview}
        `}
      />

      {/* Bottom */}
      <div className="mt-3 flex items-center justify-between px-1">
        <span className="text-sm font-semibold text-slate-700">
          {title}
        </span>

        {active && (
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-white">
            <Check size={12} />
          </span>
        )}
      </div>
    </button>
  );
}