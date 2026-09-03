// function Deadline({
//   date,
//   month,
//   title,
//   subtitle,
//   days,
//   color,
//   priority,
// }: {
//   date: string;
//   month: string;
//   title: string;
//   subtitle: string;
//   days: string;
//   color: string;
//   priority: string;
// }) {
//   return (
//     <div className="mb-5 flex items-center gap-3 last:mb-0">

//       <div
//         className={`flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl ${color}`}
//       >
//         <span className="text-[10px] font-bold">
//           {month}
//         </span>

//         <span className="text-lg font-bold">
//           {date}
//         </span>
//       </div>

//       <div className="min-w-0 flex-1">

//         <p className="truncate text-sm font-semibold text-slate-800">
//           {title}
//         </p>

//         <p className="text-xs text-slate-400">
//           {subtitle}
//         </p>

//         <p className="mt-1 text-xs text-slate-500">
//           {days}
//         </p>

//       </div>

//       <span
//         className={`hidden rounded-full px-2.5 py-1 text-[10px] font-semibold sm:block ${color}`}
//       >
//         {priority}
//       </span>

//     </div>
//   );
// }

// export default Deadline

type DeadlineProps = {
  date: string;
  month: string;
  title: string;
  subtitle: string;
  days: string;
  color: string;
  priority: string;
};

function Deadline({
  date,
  month,
  title,
  subtitle,
  days,
  color,
  priority,
}: DeadlineProps) {
  return (
    <div className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-3 transition-all m-2 duration-200 hover:-translate-y-0.5 hover:border-slate-200 hover:shadow-md">

      {/* Date */}
      <div
        className={`
          flex h-14 w-14 shrink-0 flex-col
          items-center justify-center
          rounded-xl
          ${color}
          shadow-sm
        `}
      >
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">
          {month}
        </span>

        <span className="text-xl font-bold leading-5">
          {date}
        </span>
      </div>


      {/* Content */}
      <div className="min-w-0 flex-1">

        <div className="flex items-center gap-2">

          <p className="truncate text-sm font-semibold text-slate-800">
            {title}
          </p>

        </div>

        <p className="mt-0.5 truncate text-xs text-slate-400">
          {subtitle}
        </p>

        <div className="mt-2 flex items-center gap-2">

          <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />

          <span className="text-xs font-medium text-slate-500">
            {days}
          </span>

        </div>

      </div>


      {/* Priority */}
      <span
        className={`
          hidden shrink-0 rounded-full
          px-2.5 py-1
          text-[10px] font-bold uppercase
          tracking-wide
          sm:block
          ${color}
        `}
      >
        {priority}
      </span>

    </div>
  );
}

export default Deadline;