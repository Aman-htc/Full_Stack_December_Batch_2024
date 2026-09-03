import {
  AlertCircle,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Plus,
  Search,
  SlidersHorizontal,
  Download,
} from "lucide-react";

import InvoiceStatCard from "../components/InvoiceStatCard";
import InvoiceTable from "../components/invoicetable";
import { invoices } from "../data/invoice";

export default function InvoicesPage() {
  const totalAmount = invoices.reduce(
    (total, invoice) => total + invoice.amount,
    0
  );

  const paidAmount = invoices
    .filter((invoice) => invoice.status === "Paid")
    .reduce((total, invoice) => total + invoice.amount, 0);

  const pendingAmount = invoices
    .filter((invoice) => invoice.status === "Pending")
    .reduce((total, invoice) => total + invoice.amount, 0);

  const overdueAmount = invoices
    .filter((invoice) => invoice.status === "Overdue")
    .reduce((total, invoice) => total + invoice.amount, 0);

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
              <FileText size={20} />
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Invoices
            </h1>
          </div>

          <p className="mt-2 text-sm text-slate-500">
            Create, manage and track all your invoices and payments.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50">
            <Download size={17} />
            Export
          </button>

          <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700">
            <Plus size={18} />
            Create Invoice
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <InvoiceStatCard
          title="Total Invoices"
          value={`₹${totalAmount.toLocaleString("en-IN")}`}
          subtitle={`${invoices.length} invoices generated`}
          icon={<CircleDollarSign size={21} />}
          iconBg="bg-violet-50 text-violet-600"
        />

        <InvoiceStatCard
          title="Paid"
          value={`₹${paidAmount.toLocaleString("en-IN")}`}
          subtitle="Successfully collected"
          icon={<CheckCircle2 size={21} />}
          iconBg="bg-emerald-50 text-emerald-600"
        />

        <InvoiceStatCard
          title="Pending"
          value={`₹${pendingAmount.toLocaleString("en-IN")}`}
          subtitle="Awaiting payment"
          icon={<FileText size={21} />}
          iconBg="bg-amber-50 text-amber-600"
        />

        <InvoiceStatCard
          title="Overdue"
          value={`₹${overdueAmount.toLocaleString("en-IN")}`}
          subtitle="Requires attention"
          icon={<AlertCircle size={21} />}
          iconBg="bg-red-50 text-red-600"
        />

      </div>

      {/* Invoice List */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Toolbar */}
        <div className="border-b border-slate-200 p-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <h2 className="text-lg font-bold text-slate-900">
                All Invoices
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                View and manage your recent invoices.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">

              {/* Search */}
              <div className="relative">
                <Search
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  placeholder="Search invoices..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm outline-none transition focus:border-violet-500 focus:bg-white sm:w-64"
                />
              </div>

              {/* Status */}
              <button className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">
                <SlidersHorizontal size={16} />
                All Status
              </button>

            </div>
          </div>
        </div>

        {/* Table */}
        <InvoiceTable invoices={invoices} />

        {/* Footer */}
        <div className="flex flex-col gap-3 border-t border-slate-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {invoices.length}
            </span>{" "}
            invoices
          </p>

          <div className="flex items-center gap-1">
            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-400">
              Previous
            </button>

            <button className="rounded-lg bg-violet-600 px-3 py-1.5 text-sm font-semibold text-white">
              1
            </button>

            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50">
              2
            </button>

            <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm text-slate-600 hover:bg-slate-50">
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}