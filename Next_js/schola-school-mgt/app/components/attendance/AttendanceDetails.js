

"use client";

import { attendanceStaff } from "@/app/data";
import React, { useEffect, useState } from "react";
import DropdownBtn from "../dropdown";
import { Image } from "react-bootstrap";
import { TrendingUp } from "lucide-react";
import { getAttendanceSummary } from "@/services/attendanceService";

const AttendanceDetails = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Today");

  const [attendanceSummary, setAttendanceSummary] = useState([]);
  const [loading, setLoading] = useState(false);



  const loadAttendanceSummary = async (period = selectedPeriod) => {
    try {
      setLoading(true);

      const response = await getAttendanceSummary(period);

      console.log("Attendance Summary:", response);

      setAttendanceSummary(response?.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAttendanceSummary(selectedPeriod);
  }, [selectedPeriod]);


  const formattedData = attendanceSummary.map((item, index) => ({
    id: index,
    title: item.OwnerType,
    total: item.TotalPresent,
    change: `${item.OnTimePercentage}%`,
    subtitle: `${item.OwnerType} Present`,
    bgType:
      item.OwnerType === "Student"
        ? "pink"
        : item.OwnerType === "Teacher"
          ? "cyan"
          : "blue",

    details: [
      {
        label: "On Time",
        value: item.OnTime,
        percentage: `${item.OnTimePercentage}%`,
      },
      {
        label: "Late",
        value: item.Late,
        percentage: `${item.LatePercentage}%`,
      },
      {
        label: "Absent",
        value: item.Absent,
        percentage: `${item.AbsentPercentage}%`,
      },
    ],
  }));


  const cardData = [...formattedData, ...attendanceStaff];










  return (

    <div className="container-fluid">

      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-4 px-3">

        <h4 className="h6-alt text-danger-subtle mb-0">
          Attendance Summary
        </h4>
        
        <DropdownBtn
          text1={selectedPeriod}
          value={selectedPeriod}
          setValue={setSelectedPeriod}
          options1={[
            { label: "Today", value: "Today" },
            { label: "This Week", value: "This Week" },
            { label: "This Month", value: "This Month" },
          ]}
        />

      </div>

      {/* CARDS */}
      <div className="row g-4 px-2">

        {cardData.map((data) => (

          <div
            className="col-12 col-md-4"
            key={data.id}
          >

            <div className="card border-0 shadow-sm rounded-5 bg-light overflow-hidden h-100">

              {/* MOBILE UI */}
              <div className="d-flex d-md-none ">

                {/* LEFT SIDE */}
                <div
                  className={`w-75 p-5 rounded-5 position-relative
                  ${data.bgType === "pink"
                      ? "bg-secondary"
                      : data.bgType === "cyan"
                        ? "bg-primary"
                        : data.bgType === "blue"
                          ? "bg-warning"
                          : ""
                    }`}
                >

                  {/* IMAGE */}
                  <div className="position-absolute top-0 end-0 opacity-50">

                    <Image
                      src="/image/attencecardimage.svg"
                      width={90}
                      height={90}
                      alt="icon"
                    />

                  </div>

                  {/* TITLE */}
                  <h6
                    className={`h6-alt mb-4 position-relative z-1 ${data.title === "Staff"
                      ? "text-light"
                      : "text-danger-subtle"
                      }`}
                  >
                    {data.title}
                  </h6>

                  {/* TOTAL */}
                  <div
                    className={`d-flex align-items-center gap-2 position-relative z-1 ${data.title === "Staff"
                      ? "text-light"
                      : "text-danger-subtle"
                      }`}
                  >

                    <h2 className="mb-0 fw-bold">
                      {data.total}
                    </h2>

                    <span
                      className=" rounded-pill bg-warning-light px-2 py-1 d-flex align-items-center gap-1 cap-md-bold  text-light   "

                    >

                      <TrendingUp size={12} />

                      {data.change}

                    </span>

                  </div>

                  {/* SUBTITLE */}
                  <p
                    className={`mb-0 mt-2 cap-lg-med ${data.title === "Staff"
                      ? "text-light"
                      : "text-danger"
                      }`}
                  >
                    {data.subtitle}
                  </p>

                </div>

                {/* RIGHT SIDE */}
                <div className="w-50 p-4 d-flex flex-column justify-content-center gap-4 bg-light">

                  {data.details.map((detail, idx) => (

                    <div
                      key={idx}
                      className="d-flex justify-content-between align-items-center gap-2"
                    >

                      <p className="mb-0 text-danger cap-lg-med">
                        {detail.label}
                      </p>

                      <div className="d-flex align-items-center gap-2">

                        <h6 className="mb-0 text-danger-subtle h6-alt">
                          {detail.value}
                        </h6>

                        <span className="bg-dark-light rounded-pill px-1 py-1 cap-md-med">

                          {detail.percentage}

                        </span>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* DESKTOP UI */}
              <div className="d-none d-md-block">

                {/* TOP SECTION */}
                <div
                  className={`p-5 rounded-5 position-relative ${data.bgType === "pink"
                    ? "bg-secondary"
                    : data.bgType === "cyan"
                      ? "bg-primary"
                      : data.bgType === "blue"
                        ? "bg-warning"
                        : ""
                    }`}
                >

                  {/* IMAGE */}
                  <div className="position-absolute top-0 end-0">

                    <Image
                      src="/image/attencecardimage.svg"
                      width={100}
                      height={100}
                      alt="icon"
                    />

                  </div>

                  {/* TITLE */}
                  <h6
                    className={`text-danger-subtle h6-alt ${data.title === "Staff"
                      ? "text-light"
                      : ""
                      }`}
                  >
                    {data.title}
                  </h6>

                  {/* TOTAL */}
                  <div
                    className={`d-flex align-items-center gap-2 mt-3 ${data.title === "Staff"
                      ? "text-light"
                      : "text-danger-subtle"
                      }`}
                  >

                    <h2 className="h2 mb-0">
                      {data.total}
                    </h2>

                    <span
                      className=" rounded-pill bg-warning-light bg-opacity-75 px-2 py-1 d-flex align-items-center gap-1  cap-md-bold  text-light"

                    >

                      <TrendingUp size={12} />

                      {data.change}

                    </span>

                  </div>

                  {/* SUBTITLE */}
                  <p
                    className={`mb-0 mt-1 cap-lg-med ${data.title === "Staff"
                      ? "text-light"
                      : "text-danger"
                      }`}
                  >
                    {data.subtitle}
                  </p>

                </div>

                {/* DETAILS */}
                <div className="card-body py-4">

                  <div className="row text-center">

                    {data.details.map((detail, idx) => (

                      <div
                        className="col-4"
                        key={idx}
                      >

                        <p className="mb-1 text-danger cap-lg-med">
                          {detail.label}
                        </p>

                        <h6 className="mb-1 text-danger-subtle h6-alt">
                          {detail.value}
                        </h6>

                        <p className="mb-0 text-dark bg-dark-light px-1 cap-md-med rounded-5 p-1">

                          {detail.percentage}

                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default AttendanceDetails;