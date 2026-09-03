import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import {
  Book,
  Building,
  CalendarEvent,
  Clock,
  Collection,
  Gear,
  Grid,
  People,
  Person,
  PersonBadge,
  QuestionCircle,
} from "react-bootstrap-icons";

const SideBarLink = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem("login");
    localStorage.removeItem("signupUser");
    navigate("/sign-in");
  };

  return (
    <Nav
      className="
        d-flex
        flex-row
        flex-nowrap
        flex-md-column
        overflow-auto
        gap-2
      "
    >
      <Nav.Link
        as={Link}
        to="/"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <Grid size={20} /> Dashboard
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/students"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <People size={20} /> Student
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/teachers"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <PersonBadge size={20} /> Teacher
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/departments"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <Building size={20} /> Department
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/class"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <Collection size={20} /> Class
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/events"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <CalendarEvent size={20} /> Event
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/timetable"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <Clock size={20} /> Time Table
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/library"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <Book size={20} /> Library
      </Nav.Link>

      

      <hr className="d-none d-md-block" />

      <Nav.Link
        as={Link}
        to="/accounts"
        className="mt-md-5 mt-0 mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <Person size={20} /> Account
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/helps"
        className="mb-md-3 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Small"
      >
        <QuestionCircle size={20} /> Help
      </Nav.Link>

      <Nav.Link
        as={Link}
        to="/settings"
        className="flex-shrink-0 mb-md-5  link-hover d-flex   align-items-center gap-2 gray-100 Button-Small"
      >
        <Gear size={20} /> Settings
      </Nav.Link>


      <Nav.Link
        onClick={handleLogout}
        className="mb-md-4 mb-0 flex-shrink-0 link-hover d-flex align-items-center gap-2 gray-100 Button-Medium"
      >
        <LogOut size={22} /> Logout
      </Nav.Link>
    </Nav>
  );
};

export default SideBarLink;
