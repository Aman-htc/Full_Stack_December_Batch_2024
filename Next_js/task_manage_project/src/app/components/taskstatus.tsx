// function TaskStatus({
//   color,
//   label,
//   value,
//   percentage,
// }: {
//   color: string;
//   label: string;
//   value: string;
//   percentage: string;
// }) {
//   return (
//     <div className="flex items-center">

//       <span
//         className={`mr-3 h-2.5 w-2.5 rounded-full ${color}`}
//       />

//       <span className="flex-1 text-sm text-slate-600">
//         {label}
//       </span>

//       <span className="mr-2 text-sm font-semibold text-slate-800">
//         {value}
//       </span>

//       <span className="text-xs text-slate-400">
//         ({percentage})
//       </span>

//     </div>
//   );
// }
// export default TaskStatus


type TaskStatusProps = {
  color: string;
  label: string;
  value: string;
  percentage: string;
};

function TaskStatus({
  color,
  label,
  value,
  percentage,
}: TaskStatusProps) {
  return (
    <div className="group rounded-xl p-3 transition-all duration-200 hover:bg-slate-50">

      {/* Top Row */}
      <div className="flex items-center gap-3">

        {/* Status Dot */}
        <span
          className={`
            h-2.5 w-2.5 shrink-0
            rounded-full
            ${color}
            shadow-sm
          `}
        />

        {/* Label */}
        <span className="flex-1 text-sm font-medium text-slate-600">
          {label}
        </span>

        {/* Value */}
        <span className="text-sm font-bold text-slate-800">
          {value}
        </span>

        {/* Percentage */}
        <span
          className="
            min-w-[42px]
            rounded-md
            bg-slate-100
            px-2 py-1
            text-center
            text-[11px]
            font-semibold
            text-slate-500
          "
        >
          {percentage}
        </span>

      </div>


      {/* Progress Bar */}

      <div className="ml-5 mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100">

        <div
          className={`
            h-full rounded-full
            ${color}
            transition-all duration-500
          `}
          style={{
            width: percentage,
          }}
        />

      </div>

    </div>
  );
}

export default TaskStatus;