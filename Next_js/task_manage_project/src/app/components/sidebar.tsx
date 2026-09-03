// // import Link from "next/link";
// // import {
// //   CalendarDays,
// //   ChevronDown,
// //   FileText,
// //   FolderKanban,
// //   HelpCircle,
// //   Home,
// //   LayoutDashboard,
// //   ListTodo,
// //   MessageSquare,
// //   Settings,
// //   Users,
// // } from "lucide-react";

// // const mainMenu = [
// //   {
// //     label: "Dashboard",
// //     href: "/",
// //     icon: Home,
// //   },
// //   {
// //     label: "Projects",
// //     href: "/projects",
// //     icon: FolderKanban,
// //   },
// //   {
// //     label: "Tasks",
// //     href: "/tasks",
// //     icon: ListTodo,
// //   },
// //   {
// //     label: "Calendar",
// //     href: "/calendar",
// //     icon: CalendarDays,
// //   },
// //   {
// //     label: "Team",
// //     href: "/team",
// //     icon: Users,
// //   },
// //   {
// //     label: "Clients",
// //     href: "/clients",
// //     icon: MessageSquare,
// //   },
// // ];

// // const managementMenu = [
// //   {
// //     label: "Documents",
// //     href: "/documents",
// //     icon: FileText,
// //   },
// //   {
// //     label: "Invoices",
// //     href: "/invoices",
// //     icon: FileText,
// //   },
// //   {
// //     label: "Reports",
// //     href: "/reports",
// //     icon: FolderKanban,
// //   },
// // ];

// // const settingsMenu = [
// //   {
// //     label: "Settings",
// //     href: "/settings",
// //     icon: Settings,
// //   },
// //   {
// //     label: "Help & Support",
// //     href: "/help",
// //     icon: HelpCircle,
// //   },
// // ];

// // export default function Sidebar() {
// //   return (
// //     <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 bg-slate-950 text-white lg:block">

// //       {/* ================= LOGO ================= */}

// //       <div className="flex h-20 items-center border-b border-slate-800 px-6">
// //         <Link
// //           href="/"
// //           className="flex items-center gap-3"
// //         >
// //           <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
// //             <LayoutDashboard size={22} />
// //           </div>

// //           <span className="text-xl font-bold">
// //             ProferSal
// //           </span>
// //         </Link>
// //       </div>

// //       {/* ================= MENU ================= */}

// //       <div className="h-[calc(100vh-160px)] overflow-y-auto px-4 py-6">

// //         {/* MAIN */}

// //         <MenuSection
// //           title="Main"
// //           items={mainMenu}
// //         />

// //         {/* MANAGEMENT */}

// //         <MenuSection
// //           title="Management"
// //           items={managementMenu}
// //         />

// //         {/* SETTINGS */}

// //         <MenuSection
// //           title="Settings"
// //           items={settingsMenu}
// //         />

// //       </div>

// //       {/* ================= USER ================= */}

// //       <div className="absolute bottom-0 left-0 right-0 border-t border-slate-800 bg-slate-950 p-4">

// //         <div className="flex items-center gap-3">

// //           {/* Avatar */}
// //           <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-600 font-semibold">
// //             AK
// //           </div>

// //           {/* User Info */}
// //           <div className="min-w-0">

// //             <p className="truncate text-sm font-semibold">
// //               Aman Kushwaha
// //             </p>

// //             <p className="text-xs text-slate-500">
// //               Administrator
// //             </p>

// //           </div>

// //           <ChevronDown
// //             size={16}
// //             className="ml-auto text-slate-500"
// //           />

// //         </div>

// //       </div>

// //     </aside>
// //   );
// // }


// // /* ================= MENU SECTION ================= */

// // function MenuSection({
// //   title,
// //   items,
// // }: {
// //   title: string;
// //   items: {
// //     label: string;
// //     href: string;
// //     icon: React.ElementType;
// //   }[];
// // }) {
// //   return (
// //     <div className="mb-8">

// //       <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
// //         {title}
// //       </p>

// //       <nav className="space-y-1">

// //         {items.map((item) => (
// //           <SidebarItem
// //             key={item.href}
// //             label={item.label}
// //             href={item.href}
// //             icon={item.icon}
// //           />
// //         ))}

// //       </nav>

// //     </div>
// //   );
// // }


// // /* ================= SIDEBAR ITEM ================= */

// // function SidebarItem({
// //   label,
// //   href,
// //   icon: Icon,
// // }: {
// //   label: string;
// //   href: string;
// //   icon: React.ElementType;
// // }) {
// //   return (
// //     <Link
// //       href={href}
// //       className="group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-400 transition-all duration-200 hover:bg-violet-600 hover:text-white"
// //     >
// //       <Icon
// //         size={19}
// //         className="transition-transform duration-200 group-hover:scale-105"
// //       />

// //       <span>{label}</span>
// //     </Link>
// //   );
// // }

// import Link from "next/link";
// import {
//   CalendarDays,
//   ChevronDown,
//   FileText,
//   FolderKanban,
//   HelpCircle,
//   Home,
//   LayoutDashboard,
//   ListTodo,
//   MessageSquare,
//   Settings,
//   Users,
// } from "lucide-react";

// const mainMenu = [
//   { label: "Dashboard", href: "/", icon: Home },
//   { label: "Projects", href: "/projects", icon: FolderKanban },
//   { label: "Tasks", href: "/task", icon: ListTodo },
//   { label: "Calendar", href: "/calendar", icon: CalendarDays },
//   { label: "Team", href: "/teams", icon: Users },
//   { label: "Clients", href: "/clients", icon: MessageSquare },
// ];

// const managementMenu = [
//   { label: "Documents", href: "/documents", icon: FileText },
//   { label: "Invoices", href: "/invoices", icon: FileText },
//   { label: "Reports", href: "/reports", icon: FolderKanban },
// ];

// const settingsMenu = [
//   { label: "Settings", href: "/settings", icon: Settings },
//   { label: "Help & Support", href: "/help", icon: HelpCircle },
// ];

// export default function Sidebar() {
//   return (
//     <aside
//       className="
//         fixed left-0 top-0 z-40
//         hidden h-screen w-65
//         overflow-y-auto
//         bg-slate-950
//         text-white
//         lg:block
//         scrollbar-thin
//         scrollbar-track-slate-950
//         scrollbar-thumb-slate-700
//         hover:scrollbar-thumb-slate-600
//       "
//     >

//       {/* ================= LOGO ================= */}

//       <div className="flex h-16 items-center border-b border-slate-800 px-5">

//         <Link
//           href="/"
//           className="flex items-center gap-3"
//         >
//           <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600">
//             <LayoutDashboard size={19} />
//           </div>

//           <span className="text-lg font-bold">
//             ProferSal
//           </span>
//         </Link>

//       </div>

//       {/* ================= MENU ================= */}

//       <div className="px-3 py-4">

//         {/* MAIN */}
//         <MenuSection
//           title="Main"
//           items={mainMenu}
//         />

//         {/* MANAGEMENT */}
//         <MenuSection
//           title="Management"
//           items={managementMenu}
//         />

//         {/* SETTINGS */}
//         <MenuSection
//           title="Settings"
//           items={settingsMenu}
//         />

//       </div>

//       {/* ================= USER ================= */}

//       <div className="border-t border-slate-800 bg-slate-950 p-3">

//         <div className="flex items-center gap-2.5">

//           {/* Avatar */}
//           <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-600 text-sm font-semibold">
//             AK
//           </div>

//           {/* User */}
//           <div className="min-w-0 flex-1">

//             <p className="truncate text-xs font-semibold text-white">
//               Aman Kushwaha
//             </p>

//             <p className="truncate text-[11px] text-slate-500">
//               Administrator
//             </p>

//           </div>

//           <ChevronDown
//             size={15}
//             className="shrink-0 text-slate-500"
//           />

//         </div>

//       </div>

//     </aside>
//   );
// }


// /* ================= MENU SECTION ================= */

// function MenuSection({
//   title,
//   items,
// }: {
//   title: string;
//   items: {
//     label: string;
//     href: string;
//     icon: React.ElementType;
//   }[];
// }) {
//   return (
//     <div className="mb-5">

//       <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
//         {title}
//       </p>

//       <nav className="space-y-0.5">

//         {items.map((item) => (
//           <SidebarItem
//             key={item.href}
//             label={item.label}
//             href={item.href}
//             icon={item.icon}
//           />
//         ))}

//       </nav>

//     </div>
//   );
// }


// /* ================= SIDEBAR ITEM ================= */

// function SidebarItem({
//   label,
//   href,
//   icon: Icon,
// }: {
//   label: string;
//   href: string;
//   icon: React.ElementType;
// }) {
//   return (
//     <Link
//       href={href}
//       className="
//         group flex w-full items-center gap-3
//         rounded-lg
//         px-3 py-2
//         text-[13px]
//         text-slate-400
//         transition-all duration-200
//         hover:bg-violet-600
//         hover:text-white
//       "
//     >

//       <Icon
//         size={17}
//         className="shrink-0 transition-transform duration-200 group-hover:scale-105"
//       />

//       <span>
//         {label}
//       </span>

//     </Link>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  CalendarDays,
  ChevronDown,
  FileText,
  FolderKanban,
  HelpCircle,
  Home,
  LayoutDashboard,
  ListTodo,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react";

/* =========================================================
   MENU DATA
========================================================= */

const mainMenu = [
  {
    label: "Dashboard",
    href: "/",
    icon: Home,
  },
  {
    label: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    label: "Tasks",
    href: "/task",
    icon: ListTodo,
  },
  {
    label: "Calendar",
    href: "/calendar",
    icon: CalendarDays,
  },
  {
    label: "Team",
    href: "/teams",
    icon: Users,
  },
  {
    label: "Clients",
    href: "/clients",
    icon: MessageSquare,
  },
];

const managementMenu = [
  {
    label: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    label: "Invoices",
    href: "/invoices",
    icon: FileText,
  },
  {
    label: "Reports",
    href: "/reports",
    icon: FolderKanban,
  },
];

const settingsMenu = [
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Help & Support",
    href: "/help",
    icon: HelpCircle,
  },
];

/* =========================================================
   SIDEBAR
========================================================= */

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        fixed left-0 top-0 z-40
        hidden h-screen w-65
        overflow-y-auto
        bg-slate-950
        text-white
        lg:block
        scrollbar-thin
        scrollbar-track-slate-950
        scrollbar-thumb-slate-700
        hover:scrollbar-thumb-slate-600
      "
    >
      {/* =====================================================
          LOGO
      ===================================================== */}

      <div className="flex h-16 items-center border-b border-slate-800 px-5">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          {/* Logo Icon */}
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 shadow-lg shadow-violet-600/20">
            <LayoutDashboard size={19} />
          </div>

          {/* Logo Name */}
          <span className="text-lg font-bold tracking-tight">
            ProferSal
          </span>
        </Link>
      </div>

      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <div className="px-3 py-5">

        {/* Main */}
        <MenuSection
          title="Main"
          items={mainMenu}
          pathname={pathname}
        />

        {/* Management */}
        <MenuSection
          title="Management"
          items={managementMenu}
          pathname={pathname}
        />

        {/* Settings */}
        <MenuSection
          title="Settings"
          items={settingsMenu}
          pathname={pathname}
        />

      </div>

      {/* =====================================================
          USER PROFILE
      ===================================================== */}

      <div className="border-t border-slate-800 bg-slate-950 p-3">
        <div className="flex items-center gap-2.5">

          {/* Avatar */}
          <div
            className="
              flex h-9 w-9 shrink-0
              items-center justify-center
              rounded-full
              bg-violet-600
              text-sm font-semibold
              shadow-lg shadow-violet-600/20
            "
          >
            AK
          </div>

          {/* User Info */}
          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-white">
              Aman Kushwaha
            </p>

            <p className="truncate text-[11px] text-slate-500">
              Administrator
            </p>
          </div>

          {/* Dropdown Icon */}
          <button
            type="button"
            className="
              rounded-md p-1
              text-slate-500
              transition
              hover:bg-slate-800
              hover:text-white
            "
          >
            <ChevronDown size={15} />
          </button>

        </div>
      </div>
    </aside>
  );
}

/* =========================================================
   MENU SECTION
========================================================= */

type MenuItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
  pathname: string;
};

function MenuSection({
  title,
  items,
  pathname,
}: MenuSectionProps) {
  return (
    <div className="mb-6">

      {/* Section Title */}
      <p
        className="
          mb-2 px-3
          text-[15px]
          font-semibold
          uppercase
          tracking-wider
          text-slate-500
        "
      >
        {title}
      </p>

      {/* Menu */}
      <nav className="space-y-1">
        {items.map((item) => {

          /*
            Dashboard:
            Only "/" should be active.

            Other pages:
            "/projects/123" should also make
            "/projects" active.
          */

          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <SidebarItem
              key={item.href}
              label={item.label}
              href={item.href}
              icon={item.icon}
              active={isActive}
            />
          );
        })}
      </nav>
    </div>
  );
}

/* =========================================================
   SIDEBAR ITEM
========================================================= */

type SidebarItemProps = {
  label: string;
  href: string;
  icon: React.ElementType;
  active: boolean;
};

function SidebarItem({
  label,
  href,
  icon: Icon,
  active,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`
        group
        flex w-full
        items-center gap-3
        rounded-lg
        px-3 py-2.5
        text-[15px]
        font-medium
        transition-all
        duration-200

        ${
          active
            ? `
              bg-violet-600
              text-white
              shadow-md
              shadow-violet-600/20
            `
            : `
              text-slate-400
              hover:bg-slate-800
              hover:text-white
            `
        }
      `}
    >
      {/* Icon */}
      <Icon
        size={17}
        className={`
          shrink-0
          transition-transform
          duration-200
          ${
            active
              ? "text-white"
              : "text-slate-400 group-hover:scale-105 group-hover:text-white"
          }
        `}
      />

      {/* Label */}
      <span className="truncate">
        {label}
      </span>

      {/* Active Indicator */}
      {active && (
        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-white" />
      )}
    </Link>
  );
}