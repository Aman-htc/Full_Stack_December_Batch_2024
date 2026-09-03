"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MoreHorizontal,
} from "lucide-react";

import type { Invoice } from "@/app/data/invoice";
import InvoiceStatusBadge from "./InvoiceStatusBadge";

type Props = {
  invoices: Invoice[];
};

export default function InvoiceTable({ invoices }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[850px] text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50/70">
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Invoice
            </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Client
            </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Project
            </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Amount
            </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Due Date
            </th>

            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Status
            </th>

            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-slate-500">
              Action
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-100">
          {invoices.map((invoice) => (
            <tr
              key={invoice.id}
              className="group transition-colors hover:bg-slate-50/70"
            >
              <td className="px-6 py-4">
                <Link
                  href={`/invoices/${invoice.id}`}
                  className="font-semibold text-violet-600 hover:text-violet-700"
                >
                  {invoice.id}
                </Link>

                <p className="mt-1 text-xs text-slate-400">
                  Issued {invoice.issueDate}
                </p>
              </td>

              <td className="px-6 py-4">
                <p className="text-sm font-semibold text-slate-800">
                  {invoice.client}
                </p>
              </td>

              <td className="px-6 py-4">
                <p className="text-sm text-slate-600">
                  {invoice.project}
                </p>
              </td>

              <td className="px-6 py-4">
                <p className="text-sm font-bold text-slate-900">
                  ₹{invoice.amount.toLocaleString("en-IN")}
                </p>
              </td>

              <td className="px-6 py-4">
                <p className="text-sm text-slate-600">
                  {invoice.dueDate}
                </p>
              </td>

              <td className="px-6 py-4">
                <InvoiceStatusBadge status={invoice.status} />
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-end gap-1">
                  <Link
                    href={`/invoices/${invoice.id}`}
                    className="rounded-lg p-2 text-slate-400 hover:bg-violet-50 hover:text-violet-600"
                  >
                    <ArrowUpRight size={17} />
                  </Link>

                  <button className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}