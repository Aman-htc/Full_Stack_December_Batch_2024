"use client";

import { getAttendanceCalendar } from "@/services/attendanceService";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const CustomCalendar = ({

  teacher
  
 
}) => {
  const teacherid= teacher?.data.TeacherID
 
 
  
   const today = new Date();
    const [value, setValue] = useState(today);

  const [activeStartDate, setActiveStartDate] =useState(
      new Date(today.getFullYear(), today.getMonth(), 1)


    );
const [calendar, seCalendar] = useState({});
    
const getattendance = async (teacherId, year, month) => {
  try {
    const response = await getAttendanceCalendar("Teacher",
      teacherId,
      year,
      month
    );

    console.log("API Response:", response.data);
    seCalendar(response.data)
  } catch (error) {
    console.log("Error:", error);
    console.log("errrdata",error.response.data)
    
  }
};

useEffect(() => {
  if (teacherid) {
    getattendance(
      teacherid,
      activeStartDate.getFullYear(),
      activeStartDate.getMonth() + 1
    );
  }
}, [teacherid, activeStartDate]);
  

  // current month
  // const currentMonthName =
    // monthNames[activeStartDate.getMonth()];

  // current month data
  // const currentMonthData = calendar[currentMonthName];
  const currentMonthData = calendar;

  // get status
 const getStatus = (date) => {
  return currentMonthData?.dates?.find(
    (item) => item.date === date.getDate()
  )?.status;
};

  // tile classes
  const tileClassName = ({ date, view }) => {
    if (view !== "month") return "";

    const visibleMonth =
      activeStartDate.getMonth();

    // previous / next month
    if (date.getMonth() !== visibleMonth) {
      return `
        opacity-25
        text-danger
        bg-transparent
        border-0
        body-xs-reg
        rounded-3
      `;
    }

    const status = getStatus(date);

    switch (status) {

      case "present":
        return `
          bg-primary
          text-danger-subtle
          border-0
          body-lg-med
          
          rounded-1
        `;
      case "late":
        return `
          bg-secondary
          text-danger-subtle
          border-0
          body-lg-med
          rounded-1
        `;

      case "selected":
      case "onLeave":
        return `
          bg-warning
          text-white
          border-0
          body-lg-med
          rounded-1
        `;

      default:
        return `
          bg-transparent
          text-danger
          border-0
          body-xs-reg
          rounded-1
        `;
    }
  };





  return (
    <div className="bg-light rounded-5 p-4">

      {/* Calendar */}
      <Calendar
        onChange={setValue}
        value={value}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }

        calendarType="gregory"

        prevLabel={
          <FiChevronLeft className="fs-6 text-dark" />
        }

        nextLabel={
          <FiChevronRight className="fs-6 text-dark" />
        }

        prev2Label={null}
        next2Label={null}

        tileClassName={tileClassName}

        className="border-0 w-100"

        navigationLabel={({ label }) => (
          <span className="h6-alt text-danger-subtle">
            {label}
          </span>
        )}

        formatShortWeekday={(locale, date) => {
          const days = ["S", "M", "T", "W", "T", "F", "S"];
          return days[date.getDay()];
        }}

        tileContent={() => (
          <div className="py-0"></div>
        )}
      />

      {/* Bottom Status */}
      <div className="mt-4 pt-2">

        <Row className="g-3">

          {/* Present */}
          <Col xs={4}>
            <div
              className="bg-primary rounded-pill mb-2"
              style={{ height: "6px" }}
            ></div>

            <div className="d-flex justify-content-between align-items-center">

              <span
                className="text-danger cap-lg-med"
                
              >
                Present
              </span>

              <span className="text-danger-subtle h6-alt mb-0">
              {currentMonthData?.summary?.present || 0}
              </span>

            </div>
          </Col>

          {/* Late */}
          <Col xs={4}>
            <div
              className="bg-secondary rounded-pill mb-2"
              style={{ height: "6px" }}
            ></div>

            <div className="d-flex justify-content-between align-items-center">

              <span
                className="text-danger cap-lg-med"
              
              >
                Late
              </span>

              <span className="text-danger-subtle h6-alt mb-0">
                {currentMonthData?.summary?.late || 0}
              </span>

            </div>
          </Col>

          {/* Leave */}
          <Col xs={4}>
            <div
              className="bg-warning rounded-pill mb-2"
              style={{ height: "6px" }}
            ></div>

            <div className="d-flex justify-content-between align-items-center">

              <span
                className="text-danger cap-lg-med"
               
              >
                On Leave
              </span>

              <span className="text-danger-subtle h6-alt mb-0">
                {currentMonthData?.summary?.onLeave || 0}
              </span>

            </div>
          </Col>

        </Row>

      </div>
    </div>
  );
};

export default CustomCalendar;