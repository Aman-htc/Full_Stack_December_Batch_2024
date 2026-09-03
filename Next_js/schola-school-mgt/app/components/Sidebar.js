

"use client";

import { Nav } from "react-bootstrap";
import {
  LayoutDashboard,
  Inbox,
  CalendarDays,
  GraduationCap,

  CreditCard,
  Receipt,
  LogOut,
  FileText,

} from "lucide-react";


import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Updatebutton from "./Updatebuttom";
import Image from "next/image";

import { AiOutlineDollarCircle } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { BiLaptop } from "react-icons/bi";
import { PiChalkboardTeacher } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuUsers } from "react-icons/lu";
import { useRouter } from "next/navigation";
import UserPool from "@/services/cognito";
import { toast } from "react-toastify";
import { BsPeopleFill } from "react-icons/bs";



export default function Sidebar() {


  const router = useRouter();

  const handleLogout = () => {
    const user = UserPool.getCurrentUser();

    if (user) {
      user.signOut();
    }

    toast.success('Logout')


    localStorage.clear();
    sessionStorage.clear();

    router.push("/signin");
  };



  const pathname = usePathname();

  const [financeOpen, setFinanceOpen] = useState(false);
  const isExpenses = pathname.startsWith("/finance/expenses");

  const isActive = (path) => pathname === path;
  const isStarts = (path) => pathname.startsWith(path);

  return (
    <div className="d-none d-md-flex">
      <aside className="h-100 d-flex flex-column bg-light p-3">

        {/* LOGO */}
        <div className="d-flex align-items-center gap-2 px-4 mb-4">
          <Image src="/image/scholalogo.svg" alt="logo" width={30} height={30} />
          <h5 className=" d-none d-lg-inline mt-2 text-danger-subtle  h3 ">Schola</h5>
        </div>

        {/* MENU */}
        <Nav className="flex-column gap-2 mt-5">

          {/* Dashboard */}
          <Nav.Link href="/dashboard" className="p-0 ">
            <div className={`d-flex align-items-center  btn-lg  justify-content-lg-start justify-content-center gap-3 py-4 px-4  border-rounded
              ${isActive("/dashboard") ? "bg-secondary text-danger-subtle py-2" : "text-danger"}`}>
              <LayoutDashboard className="icon-size" />
              <span className="d-none d-lg-inline">Dashboard</span>
            </div>
          </Nav.Link>

          {/* Inbox */}
          <Nav.Link href="/inbox" className="p-0">
            <div className={`d-flex align-items-center  btn-lg  justify-content-lg-start justify-content-center gap-3  py-4 px-4  border-rounded
              ${isActive("/inbox") ? "bg-secondary text-danger-subtle" : "text-danger"}`}>
              <HiOutlineMailOpen className="icon-size" />


              <span className="d-none d-lg-inline">Inbox</span>
            </div>
          </Nav.Link>

          {/* Calendar */}
          <Nav.Link href="/calendar" className="p-0">
            <div className={`d-flex align-items-center  btn-lg  justify-content-lg-start justify-content-center gap-3  py-4  px-4  border-rounded
              ${isActive("/calendar") ? "bg-secondary text-danger-subtle" : "text-danger"}`}>
              <CalendarDays className="icon-size" />
              <span className="d-none d-lg-inline">Calendar</span>
            </div>
          </Nav.Link>

          {/* Teachers */}
          <Nav.Link href="/teachers" className="p-0">
            <div className={`d-flex align-items-center  btn-lg  justify-content-lg-start justify-content-center gap-3  py-4  px-4  border-rounded
              ${isStarts("/teachers") ? "bg-secondary text-danger-subtle" : "text-danger"}`}>
              <PiChalkboardTeacher className="icon-size" />
              <span className="d-none d-lg-inline">Teachers</span>
            </div>
          </Nav.Link>

          {/* Students */}
          <Nav.Link href="/students" className="p-0">
            <div className={`d-flex align-items-center  btn-lg  justify-content-lg-start justify-content-center gap-3  py-4  px-4  border-rounded
              ${isActive("/students") ? "bg-secondary text-danger-subtle" : "text-danger"}`}>
              < GraduationCap className="icon-size" />
              <span className="d-none d-lg-inline">Students</span>
            </div>
          </Nav.Link>

          {/* Attendance */}
          <Nav.Link href="/attendance" className="p-0">
            <div className={`d-flex align-items-center  btn-lg  justify-content-lg-start justify-content-center gap-3  py-4  px-4  border-rounded
              ${isActive("/attendance") ? "bg-secondary text-danger-subtle" : "text-danger"}`}>
              <FiUserCheck className="icon-size" />
              <span className="d-none d-lg-inline">Attendance</span>
            </div>
          </Nav.Link>

          {/* FINANCE (Collapse) */}
          <div>

            {/* Toggle */}
            <div
              onClick={() => setFinanceOpen(!financeOpen)}
              className={`d-flex align-items-center btn-lg justify-content-lg-start justify-content-center gap-3 py-3  px-4  border-rounded
    ${isExpenses ? "bg-secondary text-danger-subtle" : "text-danger"}`}
              style={{ cursor: "pointer" }}
            >
              <AiOutlineDollarCircle className="icon-size" />
              <span className="d-none d-lg-inline">Finance</span>
            </div>

            {/* Collapse */}
            <div className={`collapse ${financeOpen || isExpenses ? "show" : ""}`}>

              <div className="d-flex mt-2">

                {/* Left line */}
                <div className="border-start ms-3 me-3"></div>

                <div className="flex-grow-1">

                  {/* Fees */}
                  <Link
                    href="/finance"
                    className={`d-flex align-items-center justify-content-lg-start justify-content-center gap-2 text-decoration-none py-2 px-2 rounded-3
          ${pathname === "/finance" ? "bg-secondary text-danger-subtle" : "text-danger"}`}
                  >
                    <Receipt size={18} />
                    <span className="d-none d-lg-inline">
                      Fees Collection
                    </span>
                  </Link>

                  {/* Expenses */}
                  <Link
                    href="/finance/expenses"
                    className={`d-flex align-items-center justify-content-lg-start justify-content-center gap-2 text-decoration-none py-2 px-2 mt-2 rounded-3
          ${isExpenses ? "bg-secondary text-danger-subtle" : "text-danger"}`}
                  >
                    <CreditCard size={18} />
                    <span className="d-none d-lg-inline">
                      Expenses
                    </span>
                  </Link>

                </div>
              </div>

            </div>

          </div>

          {/* Notice */}
          <Nav.Link href="/noticeboard" className="p-0 mt-3  mb-5 ">
            <div className={`d-flex align-items-center justify-content-lg-start btn-lg justify-content-center gap-3  py-4  px-4  border-rounded
              ${isActive("/noticeboard") ? "bg-secondary text-danger-subtle" : "text-danger"}`}>
              <FileText className="icon-size" />
              <span className="d-none d-lg-inline">Notice Board</span>
            </div>
          </Nav.Link>

          {/* <Nav.Link href="/staff" className="p-0 mt-3 mb-5 ">
            <div className={`d-flex align-items-center justify-content-lg-start btn-lg justify-content-center gap-3  py-4  px-4  border-rounded
              ${isActive("/staff") ? "bg-secondary text-danger-subtle" : "text-danger"}`}>
              <FileText className="icon-size" />
              <BsPeopleFill className="icon-size" />
              <span className="d-none d-lg-inline">Staff</span>
            </div>
          </Nav.Link> */}



        </Nav>

        <div className="mt-auto d-none d-lg-block  d-flex flex-column mt-5 ">

          <Updatebutton />




        </div>
        <div
          className="menu-item ms-5 mt-5 d-flex align-items-center gap-3 pb-2 w-75 text-danger"
          onClick={handleLogout}
          style={{ cursor: "pointer" }}
        >
          <LogOut className="icon-size" />
          <span className="body-lg d-none d-lg-inline">Logout</span>
        </div>
      </aside>
    </div>
  );
}

