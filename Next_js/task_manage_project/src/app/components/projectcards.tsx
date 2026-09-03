import Link from "next/link";

type ProjectCardProps = {
  id: string;
  name: string;
  type: string;
  progress: number;
  status: string;
  color: string;
};

export default function ProjectCard({
  id,
  name,
  type,
  progress,
  status,
  color,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${id}`}
      className="group block"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-lg">

        {/* Header */}
        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div
              className={`h-11 w-11 rounded-xl ${color}`}
            />

            <div>
              <h3 className="font-semibold text-slate-900">
                {name}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {type}
              </p>
            </div>

          </div>

          <span className="text-slate-400 transition group-hover:text-violet-600">
            →
          </span>

        </div>

        {/* Progress */}
        <div className="mt-6">

          <div className="mb-2 flex justify-between">

            <span className="text-xs font-medium text-slate-500">
              Progress
            </span>

            <span className="text-sm font-semibold text-slate-900">
              {progress}%
            </span>

          </div>

          <div className="h-2 overflow-hidden rounded-full bg-slate-100">

            <div
              className={`h-full rounded-full ${color}`}
              style={{ width: `${progress}%` }}
            />

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">

          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              status === "On Track"
                ? "bg-emerald-50 text-emerald-600"
                : status === "Delayed"
                  ? "bg-red-50 text-red-600"
                  : "bg-blue-50 text-blue-600"
            }`}
          >
            ● {status}
          </span>

          <span className="text-sm font-medium text-violet-600">
            View Project →
          </span>

        </div>

      </div>
    </Link>
  );
}