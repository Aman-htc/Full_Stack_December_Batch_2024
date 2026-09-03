import type { InvoiceStatus } from "../data/invoice";

type Props = {
  status: InvoiceStatus;
};

export default function InvoiceStatusBadge({ status }: Props) {
  const styles: Record<InvoiceStatus, string> = {
    Paid: "bg-emerald-50 text-emerald-700 ring-emerald-600/10",
    Pending: "bg-amber-50 text-amber-700 ring-amber-600/10",
    Overdue: "bg-red-50 text-red-700 ring-red-600/10",
    Draft: "bg-slate-100 text-slate-600 ring-slate-500/10",
  };

  const dots: Record<InvoiceStatus, string> = {
    Paid: "bg-emerald-500",
    Pending: "bg-amber-500",
    Overdue: "bg-red-500",
    Draft: "bg-slate-400",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dots[status]}`} />
      {status}
    </span>
  );
}