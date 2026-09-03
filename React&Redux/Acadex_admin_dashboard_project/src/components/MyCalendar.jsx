import React, { useContext, useState } from "react";
import Calendar from "react-calendar";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import "react-calendar/dist/Calendar.css";
import Schedule from "./Schedule";
import { DateContext } from "../contexts/Context";

function MyCalendar() {
    
    const {date , setDate}= useContext(DateContext)

    return (
        <>
        <div className="text-center">
        <Calendar

            onChange={setDate}
            value={date}

            className="border-0 XSmall-Medium w-100 text-center  custom-calendar p-0 "


            navigationLabel={({ date }) => (
                <span className="calendar-title">
                    {date.toLocaleString("default", {
                        month: "long",
                        year: "numeric",
                    })}
                </span>
            )}

            prevLabel={<ChevronLeft size={18} />}
            nextLabel={<ChevronRight size={18} />}
            prev2Label={null}
            next2Label={null}

        />
        </div>
     
        </>
        
    );
}

export default MyCalendar;
