"use client";

import React, { useEffect, useState } from "react";

import Calendar from "react-calendar";

import {
  ChevronLeft,
  ChevronRight,
  Users,
  MoreHorizontal,
  User,
} from "lucide-react";

import {
  Badge,
  Card,
  Container,
} from "react-bootstrap";

import "react-calendar/dist/Calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { calendarData, events } from "@/app/data";
import { PiChalkboardTeacher } from "react-icons/pi";
import { getEventCalendar } from "@/services/dashboardService";

export default function DashboardCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  const [eventsData, setEventsData] = useState([]);

  // ================= API CALL =================
  useEffect(() => {
    fetchCalendarEvents();
  }, [activeDate]);

  

  
 const fetchCalendarEvents = async () => {
  try {
    const month = activeDate.getMonth() + 1;
    const year = activeDate.getFullYear();

    const response = await getEventCalendar(month, year);

    setEventsData(response.data || []);
  } catch (error) {
    if (error.response?.status === 404) {
      // No events for this month
      setEventsData([]);
    } else {
      console.error(error);
    }
  }
};
useEffect(() => {
  
}, [eventsData]);

  // ================= TIME FORMAT =================
  const formatTime = (time) => {
    if (!time) return "";
    return time.slice(0, 5);
  };

  // ================= CALENDAR HIGHLIGHT =================



  const tileClassName = ({ date, view }) => {
  if (view !== "month") return "";

  const matched = eventsData.some((event) => {
    const eventDate = new Date(event.fullDate);

    return (
      eventDate.getFullYear() === date.getFullYear() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getDate() === date.getDate()
    );
  });

  return matched ? "calendar-highlight" : "";
};
  return (

    <Container fluid className="py-3 px-2">

      {/* Calendar */}

      <div className="bg-light rounded-4 w-100 pb-3  d-flex flex-column flex-md-row flex-lg-column"   >

        <div className="rounded-4 p-3 bg-primary mb-5">

          <Calendar

            value={selectedDate}

            onChange={setSelectedDate}

            calendarType="gregory"

            onActiveStartDateChange={({ activeStartDate }) =>
              setActiveDate(activeStartDate)
            }

            formatShortWeekday={(locale, date) =>
              ["S", "M", "T", "W", "T", "F", "S"][date.getDay()]
            }

            tileClassName={tileClassName}

            className="border-0 bg-primary w-100"

            prev2Label={null}

            next2Label={null}

            prevLabel={
              <div
                className="bg-light rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "34px",
                  height: "34px",
                }}
              >
                <ChevronLeft
                  size={16}
                  className="text-danger-subtle"
                />
              </div>
            }

            nextLabel={
              <div
                className="bg-light rounded-3 d-flex align-items-center justify-content-center"
                style={{
                  width: "34px",
                  height: "34px",
                }}
              >
                <ChevronRight
                  size={16}
                  className="text-danger-subtle"
                />
              </div>
            }

            navigationLabel={({ date }) => (

              <span className="text-danger-subtle h6-alt">

                {date.toLocaleString("default", {
                  month: "long",
                  year: "numeric",
                })}

              </span>
            )}
          />
        </div>

        {/* Events */}

        <div className="mt-4 px-3 " >

          <div className="d-flex justify-content-between align-items-center mb-3 " >

            <h6
              className="h6-alt text-danger-subtle mb-0"
            >
              Events
            </h6>

            <MoreHorizontal
              size={16}
              className="text-dark"
            />

          </div>

          <div className="d-flex  flex-column gap-3  overflow-auto ">

            {eventsData.length > 0 ? (

              eventsData.map((event, index) => (

                <Card
                  key={index}
                  className="border-0 bg-dark-light mb-3 rounded-4"
                >

                  <Card.Body className="p-3  ">


                    {/* Top */}
                    <div className="d-lg-block  d-sm-block d-xs-block d-md-none">

                      <div className="d-flex align-items-center  gap-2 mb-2">


                        <Badge
                          className="border-0 bg-secondary text-dark cap-lg-med"
                        >

                           {event.date}

                        </Badge>

                        <small
                          className="text-danger  body-xs-med "
                        >

                          {event.fullDate}


                        </small>

                      </div>

                      {/* Title */}

                      <h6
                        className="body-lg text-danger-subtle mb-2"

                      >

                        {event.title}

                      </h6>

                      {/* Footer */}

                      <div
                        className="d-flex align-items-center gap-1 text-danger body-xs-reg"

                      >

                        <PiChalkboardTeacher size={13} />

                        <span>
                          Event
                        </span>

                      </div>
                    </div>


                    <div className="d-none d-md-flex d-lg-none   align-items-center  gap-3 "  >

                      {/* Date Badge */}
                      <Badge className="border-0 bg-secondary text-dark d-flex flex-column align-items-center justify-content-center p-2">
                        <span className="cap-lg-med">{event.
                          fullDate
                        }</span>
                        <span className="small">{event.month}</span>
                      </Badge>


                      <div className="d-flex flex-column flex-grow-1">


                        <h6 className="body-lg text-danger-subtle mb-1">
                          {event.title}
                        </h6>


                        <div className="d-flex align-items-center gap-3 flex-nowrap">

                          <small className="text-danger body-xs-med">
                            {/* {formatTime(event.
                              startTime
                            )} - {formatTime(event.endTime)} */}
                            0
                          </small>
                          <span className="d-flex align-items-center gap-1 text-danger body-xs-reg text-nowrap">
                            <PiChalkboardTeacher size={13} />
                            {event.className}
                          </span>

                        </div>

                      </div>
                    </div>

                  </Card.Body>

                </Card>
              ))

            ) : (

              <p className="text-center text-dark small mb-0">
                No events available
              </p>

            )}

          </div>
        </div>
      </div>

    </Container>
  );
}



