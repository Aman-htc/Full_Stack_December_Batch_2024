"use client";

import {
  BookOpen,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  FileText,
  Mail,
  MessageCircle,
  Search,
  ShieldCheck,
  Ticket,
} from "lucide-react";

import { useState } from "react";

const faqs = [
  {
    question: "How do I create a new project?",
    answer:
      "Go to the Projects section and click the New Project button. Enter the project details and save it.",
  },
  {
    question: "How can I assign a task to a team member?",
    answer:
      "Open the required project, create a task, and select the team member from the assignee option.",
  },
  {
    question: "How can I track project progress?",
    answer:
      "You can track project progress from the Projects page using the progress bar and project status.",
  },
  {
    question: "How do I change my account settings?",
    answer:
      "Open Settings from the sidebar and update your profile, password, notifications, or preferences.",
  },
];

const supportOptions = [
  {
    title: "Help Center",
    description: "Browse guides and learn how to use ProferSal.",
    icon: BookOpen,
  },
  {
    title: "Contact Support",
    description: "Get help from our support team.",
    icon: MessageCircle,
  },
  {
    title: "Submit a Ticket",
    description: "Create a support ticket for technical issues.",
    icon: Ticket,
  },
];

export default function HelpPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 p-4 lg:p-8">

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-violet-600">
            <CircleHelp size={23} />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Help & Support
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Find answers, guides, and support for your account.
            </p>
          </div>
        </div>
      </div>

      {/* Search Hero */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 p-8 text-white shadow-sm">
        <div className="mx-auto max-w-2xl text-center">

          <h2 className="text-2xl font-bold">
            How can we help you?
          </h2>

          <p className="mt-2 text-sm text-violet-100">
            Search our help center or browse the options below.
          </p>

          <div className="relative mt-6">
            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search for help..."
              className="w-full rounded-xl border-0 bg-white py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none placeholder:text-slate-400"
            />
          </div>

        </div>
      </div>

      {/* Support Options */}
      <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-3">

        {supportOptions.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition group-hover:bg-violet-600 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <ChevronRight
                  size={18}
                  className="text-slate-300 transition group-hover:text-violet-600"
                />

              </div>

              <h3 className="mt-5 font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {item.description}
              </p>

            </button>
          );
        })}

      </div>

      {/* FAQ + Contact */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* FAQ */}
        <div className="rounded-2xl border border-slate-200 bg-white lg:col-span-2">

          <div className="border-b border-slate-200 p-6">
            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <FileText size={19} />
              </div>

              <div>
                <h2 className="font-semibold text-slate-900">
                  Frequently Asked Questions
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Quick answers to common questions
                </p>
              </div>

            </div>
          </div>

          <div className="divide-y divide-slate-100">

            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question}>

                  <button
                    onClick={() =>
                      setOpenFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-slate-50"
                  >
                    <span className="pr-4 text-sm font-medium text-slate-800">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-slate-400 transition ${
                        isOpen ? "rotate-180 text-violet-600" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-sm leading-6 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* Contact Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheck size={22} />
          </div>

          <h2 className="mt-5 text-lg font-semibold text-slate-900">
            Still need help?
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Our support team is ready to help you with any issue or question.
          </p>

          <div className="mt-6 space-y-3">

            <button className="flex w-full items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-left text-sm font-medium text-slate-700 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700">
              <Mail size={18} />
              Email Support
            </button>

            <button className="flex w-full items-center gap-3 rounded-xl bg-violet-600 px-4 py-3 text-left text-sm font-semibold text-white transition hover:bg-violet-700">
              <MessageCircle size={18} />
              Contact Support
            </button>

          </div>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-medium text-slate-500">
              Support Hours
            </p>

            <p className="mt-1 text-sm font-semibold text-slate-800">
              Monday – Friday
            </p>

            <p className="mt-1 text-xs text-slate-500">
              9:00 AM – 6:00 PM
            </p>
          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-xs text-slate-400 sm:flex-row">
        <p>© 2026 ProferSal. All rights reserved.</p>

        <div className="flex gap-5">
          <button className="hover:text-violet-600">
            Privacy Policy
          </button>

          <button className="hover:text-violet-600">
            Terms of Service
          </button>
        </div>
      </div>

    </div>
  );
}