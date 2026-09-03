// function StatCard({
//   title,
//   value,
//   change,
//   icon,
//   iconBg,
// }: {
//   title: string;
//   value: string;
//   change: string;
//   icon: React.ReactNode;
//   iconBg: string;
// }) {
//   return (
//     <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
//       <div className="flex items-start justify-between">
//         <div>
//           <p className="text-sm text-slate-500">{title}</p>

//           <h2 className="mt-2 text-3xl font-bold text-slate-900">
//             {value}
//           </h2>

//           <p className="mt-2 text-xs text-emerald-600">
//             ↑ {change} from last month
//           </p>
//         </div>

//         <div className={`rounded-xl p-3 ${iconBg}`}>
//           {icon}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default StatCard

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  iconBg?: string;
  bgColor?: string;
  changeType?: "positive" | "negative" | "neutral";
};

function StatCard({
  title,
  value,
  change,
  icon,
  iconBg = "bg-violet-50 text-violet-600",
  bgColor = "bg-white",
  changeType = "positive",
}: StatCardProps) {
  const changeStyles = {
    positive: "text-emerald-600 bg-emerald-50",
    negative: "text-red-600 bg-red-50",
    neutral: "text-slate-600 bg-slate-100",
  };

  return (
    <div
      className={`
        group relative overflow-hidden rounded-2xl
        border border-slate-200/80
        ${bgColor}
        p-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      `}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-violet-500/5 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative flex items-start justify-between">

        {/* Content */}
        <div className="min-w-0">

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          {/* Change */}
          <div className="mt-3 flex items-center gap-2">

            <span
              className={`
                inline-flex items-center rounded-md
                px-2 py-1 text-xs font-semibold
                ${changeStyles[changeType]}
              `}
            >
              {changeType === "positive" && "↑"}
              {changeType === "negative" && "↓"}
              {changeType === "neutral" && "→"}

              <span className="ml-1">
                {change}
              </span>
            </span>

            <span className="text-xs text-slate-400">
              vs last month
            </span>

          </div>

        </div>

        {/* Icon */}
        <div
          className={`
            flex h-12 w-12 shrink-0
            items-center justify-center
            rounded-xl
            ${iconBg}
            transition-transform duration-300
            group-hover:scale-105
          `}
        >
          {icon}
        </div>

      </div>
    </div>
  );
}

export default StatCard;