

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "@/app/components/sidebar";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProferSal Dashboard",
  description: "Professional Project Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">

        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="min-h-screen lg:ml-60">

          {/* Header */}
          <Header />

          {/* Page Content */}
          <main className="p-4 lg:p-8">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}