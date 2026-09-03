"use client";

import { Navbar, Container, Form, Nav, NavbarBrand, NavbarToggle, NavbarCollapse, InputGroup } from "react-bootstrap";
import { Bell, Settings, SlidersHorizontal } from "lucide-react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SearchBox from "./searchbox";
import { getMe } from "@/services/adminServices";
import { useEffect, useState } from "react";

function Header({ text, background = 'bg-light', search,
  setSearch }) {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchUser = async () => {
      try {

        const res = await getMe();



        setUser(res);

      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();

  }, []);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Inbox", path: "/inbox" },
    { name: "Calendar", path: "/calendar" },
    { name: "Teachers", path: "/teachers" },
    { name: "Students", path: "/students" },
    { name: "Attendance", path: "/attendance" },
    { name: "Fees Collection", path: "/finance" },
    { name: 'Expenses', path: '/finance/expenses' },
    { name: "Notice Board", path: "/noticeboard" },
  ];

  const pathname = usePathname();

  return (
    <Navbar bg="white" expand="md" className="px-3 pt-3">

      <Container fluid>

        <div className="d-block d-md-none align-items-center">
          <Image
            src="/image/scholalogo.svg"
            alt="School Logo"
            width={30}
            height={30}
          />
        </div>
        <NavbarBrand className="  text-danger-subtle">
          <span className="h2">{text}</span>

        </NavbarBrand>

        <NavbarToggle aria-controls="header-navbar" />

        <NavbarCollapse id="header-navbar">

          <Nav
            className=" d-block d-md-none flex-column w-100 mb-3 overflow-auto"
            style={{ maxHeight: "250px" }}
          >
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`d-block w-100 py-2 px-2 text-decoration-none rounded ${pathname === item.path ? "bg-light btn-md  " : "text-dark"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </Nav>

          <div className="ms-auto d-flex align-items-center gap-3 flex-wrap">
            <div className="d-none d-md-block ">
              {/* <SearchBox value={search}
                onChange={(e) => setSearch(e.target.value)} rightIcon={<SlidersHorizontal size={16} className="" />} /> */}
              {setSearch && (
                <SearchBox
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  rightIcon={<SlidersHorizontal size={16} />}
                />
              )}
            </div>


            <div className={`icon-box ${background}`}>
              <Settings size={20} />
            </div>

            <div className={`icon-box  position-relative ${background}`} >
              <Bell size={20} />
              <span className="notification-dot bg-secondary"></span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <div className="profile-circle bg-secondary"></div>

              <div className="d-none d-lg-block">
                <div className="h5 text-dark">{user?.admin?.name}</div>
                <small className="body-xs-med text-danger">Admin</small>
              </div>
            </div>

          </div>

        </NavbarCollapse>

      </Container>
    </Navbar>
  );
}

export default Header;