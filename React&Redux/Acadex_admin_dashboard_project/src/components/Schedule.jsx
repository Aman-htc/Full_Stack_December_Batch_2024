import { Card, Container, Row, Col } from "react-bootstrap";
import { Plus } from "react-bootstrap-icons";
import { FaLaptop } from "react-icons/fa";
import { scheduleData } from "../data/js/jsonPath";
import MyCalendar from "./MyCalendar";
import TitleHead from "./TitleHead";
import { useContext, } from "react";
import { DateContext } from "../contexts/Context";

function Schedule() {
    const { date } = useContext(DateContext);

    const selectedDateString = date.toLocaleDateString("en-CA");

    const filteredSchedule = scheduleData.filter(
        (event) => event.date === selectedDateString
    );

    return (
        <div className="py-3 px-2">
            <Card className="p-1 border-0 bg-light rounded-4">


                <MyCalendar className="w-100" />


                <hr className="my-3 border-secondary" />

                {/* Header */}
                <TitleHead
                    title="Schedule"
                    view={<Plus size={24} className="gray-200" />}
                />

                {/* Selected Date */}
                <p className="gray-100 XSmall-Medium ms-1 mb-3">
                    {date.toLocaleDateString("en-GB", {
                        weekday: "long",
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                </p>

                <div className="text-center  text-lg-start">
                    {filteredSchedule.length > 0 ? (
                        filteredSchedule.map((event) => (
                            <Row key={event.id} className="align-items-center  mb-4 g-2">
                                <Col xs={12} sm={3} className="XSmall-Regular   gray-200  ">
                                    {event.time}
                                </Col>

                                <Col xs={12} sm={9}>
                                    <div className="border-start border-3 ps-2 ">
                                        <h6 className="XSmall-Medium text-dark mb-1  ">
                                            {event.title}
                                        </h6>

                                        <span
                                            className="mb-2 XSmall-Regular px-1 py-1 rounded-4 d-inline-block"
                                            style={{ background: event.color }}
                                        >
                                            {event.tag}
                                        </span>

                                        <p className="text-primary XSmall-Regular  mb-0">
                                            <FaLaptop size={12} /> {event.audience}
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        ))
                    ) : (
                        <p className="text-muted text-center">
                            There is no schedule for this date
                        </p>
                    )}
                </div>
            </Card>
        </div>
    );
}


export default Schedule;
