import React from "react";
import AttendanceDetaial from "@/app/components/attendance/AttendanceDetails";
import AttendanceOverview from "@/app/components/attendance/AttendanceOverview";
// import AttendanceTable from "@/app/components/attendance/AllDepartmeintAttandance";

import { Col, Container, Row } from "react-bootstrap";
import AttendanceTable from "@/app/components/attendance/AllDepartmentAttandance";
import Breadcrumb from "@/app/components/breadcrum";

const Attendance = ({search}) => {

   

  return (
    <Container fluid className="">
      <div className="mb-6">

        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Attendance", }
          ]}
        />
      </div>

      {/* TOP SECTION */}
      <Row className="g-4 ">

        {/* LEFT */}
        <Col xs={12} xl={8}>
          <div className="h-100">
            <AttendanceDetaial />
          </div>
        </Col>

        {/* RIGHT */}
        <Col xs={12} xl={4}>
          <div className="h-100">
            <AttendanceOverview />
          </div>
        </Col>
      </Row>

      {/* TABLE SECTION */}
      <Row className="mt-1 mt-lg-3">
        <Col xs={12}>
          <AttendanceTable search={search}  />
        </Col>
      </Row>

    </Container>
  );
};

export default Attendance;