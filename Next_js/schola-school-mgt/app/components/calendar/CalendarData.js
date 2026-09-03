"use client";

import React, { useEffect, useMemo, useState } from "react";
import AddAgenda from "./AddAgenda";

import {
  createShedules,
  getShedules,
} from "@/services/calendarService";

import { toast } from "react-toastify";

import { calendarFilters } from "@/app/data";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const CalendarData = ({
  search,
  activeCategory,
  selectedDate,
  setSelectedDate,
 
}) => {
  const [activeFilter, setActiveFilter] = useState("month");
  const [showModal, setShowModal] = useState(false);

  const [schedules, setSchedules] = useState([]);
  const [selectedDetails, setSelectedDetails] = useState([]);

  // const [selectedDate, setSelectedDate] = useState(new Date());

  // ==========================
  // API DATA
  // ==========================

  const getdata = async () => {
    try {
      const res = await getShedules();

      const formattedData = (res.data || []).map((item) => ({
        schedule_id: item.ScheduleID,
        category: item.Category,
        title: item.Title,
        schedule_date: item.ScheduleDate,
        start_time: item.StartTime,
        end_time: item.EndTime,
        room_number: item.RoomNumber,
        notes: item.Notes,
      }));

      setSchedules(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  // ==========================
  // SAVE AGENDA
  // ==========================

  const saveAgenda = async (payload) => {
    try {
      await createShedules(payload);

      

      setShowModal(false);

      await getdata();
    } catch (error) {
      console.log("SAVE ERROR:", error);
      toast.error("Failed to add schedule");
    }
  };

  // ==========================
  // CALENDAR
  // ==========================

  const currentYear = selectedDate.getFullYear();
  const currentMonth = selectedDate.getMonth();

  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const daysInMonth = new Date(
    currentYear,
    currentMonth + 1,
    0
  ).getDate();

  const monthDays = [];

  for (let i = 0; i < firstDay; i++) {
    monthDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    monthDays.push(i);
  }

  while (monthDays.length % 7 !== 0) {
    monthDays.push(null);
  }

  const visibleDays = useMemo(() => {
    if (activeFilter === "month") {
      return monthDays;
    }

    if (activeFilter === "week") {
      const currentDay = selectedDate.getDate();
      const start = currentDay - selectedDate.getDay();

      return Array.from({ length: 7 }, (_, i) => start + i);
    }

    return [selectedDate.getDate()];
  }, [activeFilter, selectedDate]);

  // ==========================
  // DAY CLICK
  // ==========================

  const handleDayClick = (day) => {
    if (!day) return;

    const clickedDate = new Date(
      currentYear,
      currentMonth,
      day
    );

    setSelectedDate(clickedDate);

    const dateString = clickedDate.toISOString().split("T")[0];

    

    const events = schedules.filter((item) => {
      const categoryMatch =
        activeCategory === "all" ||
        item.category?.toLowerCase() === activeCategory?.toLowerCase();

      const searchValue = (search || "").toLowerCase().trim();

      const searchMatch =
        !searchValue ||
        item.title?.toLowerCase().includes(searchValue) ||
        item.category?.toLowerCase().includes(searchValue) ||
        item.room_number?.toLowerCase().includes(searchValue) ||
        item.notes?.toLowerCase().includes(searchValue);

      return (
        item.schedule_date === dateString &&
        categoryMatch &&
        searchMatch
      );
    });

    setSelectedDetails(
      events.length ? events : [{ notFound: true }]
    );
  };



  return (
    <div className="py-1">
      <div className="row g-4 align-items-start">

        {/* CALENDAR */}

        <div
          className={
            selectedDetails.length
              ? "col-12 col-lg-8 col-xl-9"
              : "col-12"
          }
        >
          <div className="bg-light p-1 px-2 rounded-4">

            {/* HEADER */}

            <div className="card-header d-flex justify-content-between align-items-center p-3 border-0 flex-wrap gap-3">

              <h5 className="text-danger-subtle h6-alt mb-0">
                {selectedDate.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}
              </h5>

              <div className="d-flex gap-2 flex-wrap">

                <div className="btn-group bg-dark-light p-1 rounded-3">
                  {calendarFilters.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveFilter(item.value);
                        setSelectedDetails([]);
                      }}
                      className={`btn rounded-2 btn-sm border-0 px-3 ${activeFilter === item.value
                        ? "shadow-sm bg-primary"
                        : ""
                        }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                <button
                  className="btn btn-sm text-danger-subtle px-3 border-0 bg-secondary"
                  onClick={() => setShowModal(true)}
                >
                  Add Agenda
                </button>
              </div>
            </div>

            {/* DAYS HEADER */}

            <div className="row g-0 text-center bg-dark-light fw-bold text-danger rounded-top-4 overflow-hidden">

              {(activeFilter === "day"
                ? [
                  ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                  selectedDate.getDay()
                  ],
                ]
                : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
              ).map((day) => (
                <div key={day} className="col py-3">
                  {day}
                </div>
              ))}
            </div>

            {/* CALENDAR BODY */}

            <div
              className="calendar-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  activeFilter === "day"
                    ? "1fr"
                    : "repeat(7, minmax(0, 1fr))",
                gap: "0",
              }}
            >

              {visibleDays.map((day, index) => {
                if (!day) {
                  return (
                    <div
                      key={index}
                      className="col border p-2 bg-dark-light"
                      style={{
                        minHeight: "120px",
                      }}
                    />
                  );
                }

                const dateString = new Date(
                  currentYear,
                  currentMonth,
                  day
                )
                  .toISOString()
                  .split("T")[0];

                const filteredEvents = schedules.filter(
                  (event) => {
                    const categoryMatch =
                      activeCategory === "all" ||
                      event.category?.toLowerCase() ===
                      activeCategory?.toLowerCase();

                    return (
                      event.schedule_date === dateString &&
                      categoryMatch
                    );
                  }
                );

                return (
                  <div
                    key={index}
                    onClick={() => handleDayClick(day)}
                    className="border p-2 bg-light"
                    style={{
                      cursor: "pointer",
                      minHeight: "120px",

                      flex:
                        activeFilter === "month"
                          ? "0 0 14.28%"
                          : activeFilter === "week"
                            ? "0 0 14.28%"
                            : "0 0 100%",
                    }}
                  >
                    <div className="mb-2 text-danger cap-md-reg">
                      {day}
                    </div>

                    <div className="d-flex flex-column gap-1 ">
                      {filteredEvents.map((event) => (
                        <div
                          key={event.schedule_id}
                          className={`py-2 px-2 rounded-2 ${event.category?.toLowerCase() ===
                            "academic"
                            ? "bg-secondary"
                            : event.category?.toLowerCase() ===
                              "events"
                              ? "bg-primary text-dark"
                              : event.category?.toLowerCase() ===
                                "administration"
                                ? "bg-success text-dark"
                                : "bg-warning text-light"
                            }`}
                        >
                          <div className="cap-sm-med p-2 text-truncate">
                            {event.title}
                          </div>

                          <div className="cap-xs-med">
                            <span className="ps-2  pe-2"> {event.start_time?.slice(0, 5)}</span>
                            <span> {event.end_time?.slice(0, 5)}</span>


                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* DETAILS */}

        {selectedDetails.length > 0 && (

          <div className="col-12 col-lg-4 col-xl-3  " >

            <div className="bg-light rounded-4 shadow-sm p-3 -3 vh-100 d-flex flex-column">

              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">

                <h5 className="mb-0 body-lg text-danger-subtle">
                  Schedule Details
                </h5>

                <button
                  className="btn btn-sm border-0"
                  onClick={() => {
                    setSelectedDetails([]);

                  }}
                >
                  ✕
                </button>

              </div>

              {/* Details */}
              <div className="d-flex flex-column gap-3 flex-grow-1 overflow-auto">

                {selectedDetails.map((selectedDetail, index) => (

                  selectedDetail.notFound ? (

                    <div
                      key={index}
                      className="text-center py-4 text-muted bg-light rounded-4"
                    >
                      No Detail Available
                    </div>

                  ) : (

                    <div
                      key={index}
                      className={`p-3 rounded-4 border-0 ${selectedDetail.category === 'Academic'
                        ? 'bg-secondary'
                        : selectedDetail.category === 'Events'
                          ? 'bg-primary'
                          : 'bg-primary'
                        }`}
                    >

                      {/* Category */}
                      <div className="mb-3">
                        <span className="badge bg-light text-dark border-0">
                          {selectedDetail.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h6 className="h6-alt mb-4">
                        {selectedDetail.title}
                      </h6>

                      {/* Date */}
                      {/* Date */}
                      <div className="d-flex align-items-center gap-2 mb-3 cap-lg-med text-dark">
                        <CalendarDays size={16} className="text-danger flex-shrink-0" />


                        <span>
                          {selectedDetail.schedule_date}
                        </span>
                      </div>

                      {/* Time */}
                      <div className="d-flex align-items-center gap-2 mb-3 cap-lg-med text-dark">
                        <Clock3 size={16} className="text-danger flex-shrink-0" />

                        <span>
                          {selectedDetail.start_time?.slice(0, 5)} - {selectedDetail.end_time?.slice(0, 5)}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="d-flex align-items-center gap-2 mb-4 cap-lg-med text-dark">
                        <MapPin size={16} className="text-danger flex-shrink-0" />

                        <span className="text-truncate">
                          {selectedDetail.room_number}
                        </span>
                      </div>
                      {/* Notes */}
                      <div className="bg-dark-light border-0 rounded-3 p-3 border">

                        <div className="cap-md-med text-danger mb-2">
                          Notes
                        </div>

                        <div className="text-dark cap-lg-med">
                          {selectedDetail.notes}
                        </div>

                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <AddAgenda
        show={showModal}
        handleClose={() => setShowModal(false)}
        onSubmit={saveAgenda}
      />
    </div>
  );
};

export default CalendarData;