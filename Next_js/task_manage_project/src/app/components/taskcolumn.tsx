// "use client";

// import { useDroppable } from "@dnd-kit/core";
// import TaskCard from "./taskcard";

// type TaskStatus = "todo" | "in-progress" | "completed";

// type Task = {
//   id: string;
//   title: string;
//   status: TaskStatus;
// };

// type TaskColumnProps = {
//   id: TaskStatus;
//   title: string;
//   tasks: Task[];
// };

// export default function TaskColumn({
//   id,
//   title,
//   tasks,
// }: TaskColumnProps) {

//   const { setNodeRef, isOver } = useDroppable({
//     id,
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       className={`min-h-[400px] rounded-2xl p-4 transition ${
//         isOver
//           ? "bg-violet-50 ring-2 ring-violet-300"
//           : "bg-slate-50"
//       }`}
//     >

//       {/* Header */}
//       <div className="mb-4 flex items-center justify-between">

//         <h3 className="font-semibold text-slate-800">
//           {title}
//         </h3>

//         <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-2 text-xs font-semibold text-slate-500">
//           {tasks.length}
//         </span>

//       </div>


//       {/* Tasks */}
//       <div className="min-h-[320px] space-y-3">

//         {tasks.map((task) => (
//           <TaskCard
//             key={task.id}
//             id={task.id}
//             title={task.title}
//           />
//         ))}

//         {tasks.length === 0 && (
//           <div className="flex min-h-[150px] items-center justify-center rounded-xl border-2 border-dashed border-slate-200 text-sm text-slate-400">
//             Drop task here
//           </div>
//         )}

//       </div>

//     </div>
//   );
// }


"use client";

import { useDroppable } from "@dnd-kit/core";
import {
  CheckCircle2,
  Circle,
  Clock3,
  Plus,
} from "lucide-react";

import TaskCard from "./taskcard";

type TaskStatus = "todo" | "in-progress" | "completed";

type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

type TaskColumnProps = {
  id: TaskStatus;
  title: string;
  tasks: Task[];
};

export default function TaskColumn({
  id,
  title,
  tasks,
}: TaskColumnProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  const columnConfig = {
    todo: {
      icon: <Circle size={16} />,
      iconBg: "bg-slate-100",
      iconColor: "text-slate-500",
      dot: "bg-slate-400",
    },

    "in-progress": {
      icon: <Clock3 size={16} />,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      dot: "bg-blue-500",
    },

    completed: {
      icon: <CheckCircle2 size={16} />,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      dot: "bg-emerald-500",
    },
  };

  const config = columnConfig[id];

  return (
    <div
      ref={setNodeRef}
      className={`
        flex min-h-[430px] flex-col
        rounded-2xl
        border
        p-4
        transition-all duration-200
        ${
          isOver
            ? "border-violet-300 bg-violet-50/70 shadow-sm ring-2 ring-violet-100"
            : "border-slate-200 bg-slate-50/70"
        }
      `}
    >
      {/* ================= HEADER ================= */}

      <div className="mb-4 flex items-center justify-between">

        <div className="flex items-center gap-2.5">

          {/* Status Icon */}

          <div
            className={`
              flex h-8 w-8 items-center justify-center
              rounded-lg
              ${config.iconBg}
              ${config.iconColor}
            `}
          >
            {config.icon}
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">
              {title}
            </h3>

            <p className="mt-0.5 text-[11px] text-slate-400">
              {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
            </p>
          </div>

        </div>

        {/* Count */}

        <span
          className="
            flex h-7 min-w-7 items-center justify-center
            rounded-lg
            border border-slate-200
            bg-white
            px-2
            text-xs font-bold
            text-slate-600
            shadow-sm
          "
        >
          {tasks.length}
        </span>

      </div>


      {/* Top Divider */}

      <div className="mb-4 h-px bg-slate-200/80" />


      {/* ================= TASKS ================= */}

      <div className="flex min-h-[320px] flex-1 flex-col gap-3">

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            title={task.title}
          />
        ))}


        {/* Empty State */}

        {tasks.length === 0 && (
          <div
            className={`
              flex min-h-[170px]
              flex-1 flex-col
              items-center justify-center
              rounded-xl
              border-2 border-dashed
              transition-all
              ${
                isOver
                  ? "border-violet-300 bg-violet-50 text-violet-500"
                  : "border-slate-200 bg-white/50 text-slate-400"
              }
            `}
          >

            <div
              className="
                mb-3 flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-white
                text-slate-300
                shadow-sm
              "
            >
              <Plus size={18} />
            </div>

            <p className="text-xs font-semibold">
              {isOver ? "Drop task here" : "No tasks yet"}
            </p>

            <p className="mt-1 text-[11px] text-slate-400">
              Drag a task into this column
            </p>

          </div>
        )}

      </div>


      {/* ================= FOOTER ================= */}

      <div className="mt-4 flex items-center gap-2 border-t border-slate-200/80 pt-3">

        <span
          className={`h-1.5 w-1.5 rounded-full ${config.dot}`}
        />

        <span className="text-[11px] font-medium text-slate-400">
          {id === "todo" && "Tasks waiting to start"}
          {id === "in-progress" && "Currently being worked on"}
          {id === "completed" && "Finished tasks"}
        </span>

      </div>
    </div>
  );
}