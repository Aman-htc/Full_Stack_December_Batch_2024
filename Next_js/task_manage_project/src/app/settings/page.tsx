"use client";

import { useState } from "react";

import {
  Bell,
  Check,
  ChevronRight,
  Globe,
  Lock,
  Palette,
  Save,
  ShieldCheck,
  User,
} from "lucide-react";

import { useEffect, } from "react";
import ThemeOption from "../components/themeoption";

type Theme = "light" | "dark" | "system";

type SettingsTab =
  | "profile"
  | "notifications"
  | "security"
  | "appearance"
  | "language";

const settingsMenu = [
  {
    id: "profile" as SettingsTab,
    label: "Profile",
    description: "Personal information",
    icon: User,
  },
  {
    id: "notifications" as SettingsTab,
    label: "Notifications",
    description: "Manage your alerts",
    icon: Bell,
  },
  {
    id: "security" as SettingsTab,
    label: "Security",
    description: "Password & security",
    icon: ShieldCheck,
  },
  {
    id: "appearance" as SettingsTab,
    label: "Appearance",
    description: "Theme & display",
    icon: Palette,
  },
  {
    id: "language" as SettingsTab,
    label: "Language & Region",
    description: "Language preferences",
    icon: Globe,
  },
];

export default function SettingsPage() {
 

  const [activeTab, setActiveTab] =
    useState<SettingsTab>("profile");

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-8">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your account, preferences and workspace settings.
        </p>
      </div>

      {/* =====================================================
          SETTINGS LAYOUT
      ===================================================== */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">

        {/* ===================================================
            SETTINGS SIDEBAR
        =================================================== */}

        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">

          {settingsMenu.map((item) => {
            const Icon = item.icon;
            const active = activeTab === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={`
                  group flex w-full items-center gap-3
                  rounded-xl px-3 py-3
                  text-left transition-all duration-200
                  ${active
                    ? "bg-violet-50 text-violet-700"
                    : "text-slate-600 hover:bg-slate-50"
                  }
                `}
              >

                {/* Icon */}

                <div
                  className={`
                    flex h-9 w-9 shrink-0 items-center
                    justify-center rounded-lg
                    ${active
                      ? "bg-violet-600 text-white"
                      : "bg-slate-100 text-slate-500"
                    }
                  `}
                >
                  <Icon size={17} />
                </div>

                {/* Text */}

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold">
                    {item.label}
                  </p>

                  <p
                    className={`
                      mt-0.5 truncate text-[11px]
                      ${active
                        ? "text-violet-500"
                        : "text-slate-400"
                      }
                    `}
                  >
                    {item.description}
                  </p>
                </div>

                {active && (
                  <ChevronRight
                    size={16}
                    className="text-violet-500"
                  />
                )}

              </button>
            );
          })}

        </div>

        {/* ===================================================
            SETTINGS CONTENT
        =================================================== */}

        <div className="min-w-0">

          {activeTab === "profile" && <ProfileSettings />}

          {activeTab === "notifications" && (
            <NotificationSettings />
          )}

          {activeTab === "security" && <SecuritySettings />}

          {activeTab === "appearance" && (
            <AppearanceSettings />
          )}

          {activeTab === "language" && (
            <LanguageSettings />
          )}

        </div>
      </div>
    </div>
  );
}


/* =========================================================
   PROFILE SETTINGS
========================================================= */

function ProfileSettings() {
  return (
    <SettingsCard
      title="Profile Settings"
      description="Update your personal information and profile details."
    >
      {/* Profile Header */}

      <div className="mb-8 flex flex-col gap-4 border-b border-slate-100 pb-7 sm:flex-row sm:items-center">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-xl font-bold text-white shadow-lg shadow-violet-600/20">
          AK
        </div>

        <div className="flex-1">
          <h3 className="font-semibold text-slate-900">
            Aman Kushwaha
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Administrator
          </p>

          <button
            type="button"
            className="mt-2 text-xs font-semibold text-violet-600 hover:text-violet-700"
          >
            Change profile photo
          </button>
        </div>
      </div>

      {/* Form */}

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <InputField
          label="Full Name"
          value="Aman Kushwaha"
        />

        <InputField
          label="Email Address"
          value="aman@example.com"
          type="email"
        />

        <InputField
          label="Phone Number"
          value="+91 XXXXX XXXXX"
        />

        <InputField
          label="Job Title"
          value="Administrator"
        />

      </div>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Bio
        </label>

        <textarea
          rows={4}
          defaultValue="Administrator and project manager."
          className="
            w-full resize-none rounded-xl
            border border-slate-200
            bg-slate-50 px-4 py-3
            text-sm text-slate-700
            outline-none transition
            focus:border-violet-500
            focus:bg-white
            focus:ring-4
            focus:ring-violet-500/10
          "
        />
      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   NOTIFICATION SETTINGS
========================================================= */

function NotificationSettings() {
  const notifications = [
    {
      title: "Email Notifications",
      description: "Receive important account updates via email.",
    },
    {
      title: "Task Updates",
      description: "Get notified when tasks are created or updated.",
    },
    {
      title: "Project Updates",
      description: "Receive activity notifications for your projects.",
    },
    {
      title: "Deadline Reminders",
      description: "Get reminders about upcoming deadlines.",
    },
    {
      title: "Team Activity",
      description: "Stay updated about important team activities.",
    },
  ];

  return (
    <SettingsCard
      title="Notifications"
      description="Choose which notifications you want to receive."
    >
      <div className="divide-y divide-slate-100">

        {notifications.map((item, index) => (
          <ToggleRow
            key={item.title}
            title={item.title}
            description={item.description}
            defaultChecked={index !== 4}
          />
        ))}

      </div>

      <SaveButton />

    </SettingsCard>
  );
}

/* =========================================================
   SECURITY SETTINGS
========================================================= */

function SecuritySettings() {
  return (
    <SettingsCard
      title="Security"
      description="Manage your password and account security."
    >

      {/* Password */}

      <div className="rounded-xl border border-slate-200 p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
            <Lock size={18} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800">
              Password
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Last changed 30 days ago
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Change
          </button>

        </div>
      </div>

      {/* Two Factor */}

      <div className="mt-4 rounded-xl border border-slate-200 p-4">

        <ToggleRow
          title="Two-Factor Authentication"
          description="Add an extra layer of security to your account."
          defaultChecked={false}
        />

      </div>

      {/* Sessions */}

      <div className="mt-4 rounded-xl border border-slate-200 p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <ShieldCheck size={18} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-slate-800">
              Active Sessions
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Manage devices currently signed in.
            </p>
          </div>

          <button
            type="button"
            className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            Manage
          </button>

        </div>

      </div>

    </SettingsCard>
  );
}

/* =========================================================
   APPEARANCE SETTINGS
========================================================= */

function AppearanceSettings() {
   const [theme, setTheme] = useState<Theme>();

function applyTheme(selectedTheme: Theme) {
  const body = document.body;

  if (selectedTheme === "dark") {
    body.style.backgroundColor = "#020617";
    body.style.color = "#ffffff";
  } 
  else if (selectedTheme === "light") {
    body.style.backgroundColor = "#f8fafc";
    body.style.color = "#0f172a";
  } 
  else {
    const isDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    body.style.backgroundColor = isDark
      ? "#020617"
      : "#f8fafc";

    body.style.color = isDark
      ? "#ffffff"
      : "#0f172a";
  }
}
   

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

//  

  function handleThemeChange(selectedTheme: Theme) {
    setTheme(selectedTheme);

    localStorage.setItem("theme", selectedTheme);

    applyTheme(selectedTheme);
  }
  return (
    <SettingsCard
      title="Appearance"
      description="Customize how ProferSal looks on your device."
    >

      <div>
        <p className="text-sm font-semibold text-slate-800">
          Theme
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Select your preferred application theme.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <ThemeOption
          title="Light"
          active={theme === "light"}
          preview="bg-white"
          onClick={() => handleThemeChange("light")}
        />

        <ThemeOption
          title="Dark"
          active={theme === "dark"}
          preview="bg-slate-900"
          onClick={() => handleThemeChange("dark")}
        />

        <ThemeOption
          title="System"
          active={theme === "system"}
          preview="bg-gradient-to-r from-white to-slate-900"
          onClick={() => handleThemeChange("system")}
        />

      </div>

      <div className="mt-8 divide-y divide-slate-100 rounded-xl border border-slate-200 p-3">

        <ToggleRow
          title="Compact Sidebar"
          description="Use a smaller navigation sidebar."
          defaultChecked={false}
        />

        <ToggleRow
          title="Animations"
          description="Enable interface animations and transitions."
          defaultChecked
        />

      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   LANGUAGE SETTINGS
========================================================= */

function LanguageSettings() {
  return (
    <SettingsCard
      title="Language & Region"
      description="Choose your language, timezone and regional preferences."
    >

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

        <SelectField
          label="Language"
          value="English"
          options={[
            "English",
            "Hindi",
            "Spanish",
            "French",
          ]}
        />

        <SelectField
          label="Timezone"
          value="Asia/Kolkata"
          options={[
            "Asia/Kolkata",
            "Asia/Dubai",
            "Europe/London",
            "America/New_York",
          ]}
        />

        <SelectField
          label="Date Format"
          value="DD/MM/YYYY"
          options={[
            "DD/MM/YYYY",
            "MM/DD/YYYY",
            "YYYY-MM-DD",
          ]}
        />

        <SelectField
          label="Time Format"
          value="12 Hour"
          options={[
            "12 Hour",
            "24 Hour",
          ]}
        />

      </div>

      <SaveButton />
    </SettingsCard>
  );
}

/* =========================================================
   REUSABLE SETTINGS CARD
========================================================= */

function SettingsCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 px-5 py-5 sm:px-7">

        <h2 className="text-lg font-bold text-slate-900">
          {title}
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          {description}
        </p>

      </div>

      {/* Content */}

      <div className="p-5 sm:p-7">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   INPUT
========================================================= */

function InputField({
  label,
  value,
  type = "text",
}: {
  label: string;
  value: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        type={type}
        defaultValue={value}
        className="
          w-full rounded-xl
          border border-slate-200
          bg-slate-50 px-4 py-2.5
          text-sm text-slate-700
          outline-none transition
          focus:border-violet-500
          focus:bg-white
          focus:ring-4
          focus:ring-violet-500/10
        "
      />
    </div>
  );
}

/* =========================================================
   SELECT
========================================================= */

function SelectField({
  label,
  value,
  options,
}: {
  label: string;
  value: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <select
        defaultValue={value}
        className="
          w-full rounded-xl
          border border-slate-200
          bg-slate-50 px-4 py-2.5
          text-sm text-slate-700
          outline-none transition
          focus:border-violet-500
          focus:bg-white
          focus:ring-4
          focus:ring-violet-500/10
        "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

/* =========================================================
   TOGGLE
========================================================= */

function ToggleRow({
  title,
  description,
  defaultChecked = false,
}: {
  title: string;
  description: string;
  defaultChecked?: boolean;
}) {
  const [enabled, setEnabled] =
    useState(defaultChecked);

  return (
    <div className="flex items-center gap-4 py-4">

      <div className="min-w-0 flex-1">

        <p className="text-sm font-semibold text-slate-800">
          {title}
        </p>

        <p className="mt-1 text-xs leading-5 text-slate-500">
          {description}
        </p>

      </div>

      <button
        type="button"
        onClick={() => setEnabled(!enabled)}
        className={`
          relative h-6 w-11 shrink-0
          rounded-full transition
          ${enabled
            ? "bg-violet-600"
            : "bg-slate-200"
          }
        `}
      >

        <span
          className={`
            absolute top-1
            h-4 w-4 rounded-full
            bg-white shadow-sm
            transition-all
            ${enabled
              ? "left-6"
              : "left-1"
            }
          `}
        />

      </button>

    </div>
  );
}

/* =========================================================
   THEME OPTION
========================================================= */

// function ThemeOption({
//   title,
//   active = false,
//   preview,
// }: {
//   title: string;
//   active?: boolean;
//   preview: string;
// }) {
//   return (
//     <button
//       type="button"
//       className={`
//         rounded-xl border-2 p-2 text-left transition
//         ${
//           active
//             ? "border-violet-500 bg-violet-50"
//             : "border-slate-200 hover:border-slate-300"
//         }
//       `}
//     >

//       <div
//         className={`
//           h-24 rounded-lg border
//           border-slate-200
//           ${preview}
//         `}
//       />

//       <div className="mt-3 flex items-center justify-between px-1">

//         <span className="text-sm font-semibold text-slate-700">
//           {title}
//         </span>

//         {active && (
//           <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-white">
//             <Check size={12} />
//           </span>
//         )}

//       </div>

//     </button>
//   );
// }

/* =========================================================
   SAVE BUTTON
========================================================= */

function SaveButton() {
  return (
    <div className="mt-8 flex justify-end border-t border-slate-100 pt-6">

      <button
        type="button"
        className="
          flex items-center gap-2
          rounded-xl
          bg-violet-600
          px-5 py-2.5
          text-sm font-semibold
          text-white
          shadow-sm
          shadow-violet-600/20
          transition
          hover:bg-violet-700
          active:scale-[0.98]
        "
      >
        <Save size={16} />

        Save Changes
      </button>

    </div>
  );
}