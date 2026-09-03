// "use client";

// import { useDraggable } from "@dnd-kit/core";
// import { GripVertical } from "lucide-react";

// type TaskCardProps = {
//   id: string;
//   title: string;
// };

// export default function TaskCard({
//   id,
//   title,
// }: TaskCardProps) {

//   const {
//     attributes,
//     listeners,
//     setNodeRef,
//     transform,
//   } = useDraggable({
//     id,
//   });

//   const style = transform
//     ? {
//         transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
//       }
//     : undefined;

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...listeners}
//       {...attributes}
//       className="cursor-grab rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md active:cursor-grabbing"
//     >

//       <div className="flex items-start gap-3">

//         <GripVertical
//           size={18}
//           className="mt-0.5 shrink-0 text-slate-300"
//         />

//         <div>
//           <p className="text-sm font-medium text-slate-800">
//             {title}
//           </p>

//           <p className="mt-2 text-xs text-slate-400">
//             Drag to move task
//           </p>
//         </div>

//       </div>

//     </div>
//   );
// }


"use client";

import { useDraggable } from "@dnd-kit/core";
import {
  ArrowUpRight,
  GripVertical,
  MoreHorizontal,
} from "lucide-react";

type TaskCardProps = {
  id: string;
  title: string;
};

export default function TaskCard({
  id,
  title,
}: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
  } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="
        group relative
        cursor-grab
        rounded-2xl
        border border-slate-200
        bg-white
        p-4
        shadow-sm
        transition-all duration-200
        hover:-translate-y-0.5
        hover:border-violet-200
        hover:shadow-md
        active:cursor-grabbing
        active:shadow-lg
      "
    >
      {/* Top accent */}
      <div className="absolute left-0 top-4 h-8 w-1 rounded-r-full bg-violet-500 opacity-0 transition-opacity group-hover:opacity-100" />

      {/* Header */}
      <div className="flex items-start gap-3">

        {/* Drag Handle */}
        <div
          className="
            mt-0.5 flex h-8 w-8 shrink-0
            items-center justify-center
            rounded-lg
            bg-slate-50
            text-slate-300
            transition-colors
            group-hover:bg-violet-50
            group-hover:text-violet-400
          "
        >
          <GripVertical size={17} />
        </div>

        {/* Task Content */}
        <div className="min-w-0 flex-1">

          <div className="flex items-start justify-between gap-2">

            <p
              className="
                text-sm font-semibold
                leading-5 text-slate-800
                transition-colors
                group-hover:text-violet-700
              "
            >
              {title}
            </p>

            <button
              type="button"
              className="
                shrink-0 rounded-lg p-1
                text-slate-300
                opacity-0
                transition-all
                hover:bg-slate-100
                hover:text-slate-600
                group-hover:opacity-100
              "
              onClick={(e) => e.stopPropagation()}
            >
              <MoreHorizontal size={17} />
            </button>

          </div>

          {/* Task Meta */}

          <div className="mt-3 flex items-center justify-between">

            <span
              className="
                inline-flex items-center gap-1.5
                rounded-full
                bg-slate-50
                px-2.5 py-1
                text-[10px] font-semibold
                text-slate-500
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
              Task
            </span>

            <ArrowUpRight
              size={14}
              className="
                text-slate-300
                transition-all
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
                group-hover:text-violet-500
              "
            />

          </div>

        </div>

      </div>
    </div>
  );
}