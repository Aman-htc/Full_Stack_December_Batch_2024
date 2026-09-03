


import EarningsChart from "@/app/components/dashboard/EarningsCharts";
import StudentPerformanceChart from "../../components/dashboard/StudentPerformanceChart";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import StudentsByGender from "@/app/components/dashboard/StudentsGenderCharts";
import StudentAttendanceChart from "@/app/components/dashboard/StudentsAttendance";
import TodoList from "@/app/components/dashboard/TodoList";
import Header from "@/app/components/Header";
import NoticeBoard from "@/app/components/dashboard/NoticeBoard";
import DashboardStats from "@/app/components/dashboard/DashboardStats";
import RecentActivity from "@/app/components/dashboard/RecentActivity";
import DashboardClendar from '../../components/dashboard/DashboardCalendar'

const Dashboard = () => {

  const [search, setSearch] = useState("");
  return (
    <>

      {/* DESKTOP LAYOUT */}


      <Container
        fluid
        className="d-none d-lg-block px-3 px-xl-4 py-3"
      >
        <Header
          text="Dashboard"
          search={search}
          setSearch={setSearch}
        />

        <Row className="g-4">


          <Col lg={9}>

            <DashboardStats />


            <Row className="g-3 mt-1">

              <Col lg={5}>
                <StudentPerformanceChart />
              </Col>

              <Col lg={7}>
                <EarningsChart />
              </Col>
            </Row>


            <Row className="g-4 mt-1">

              <Col lg={4}>
                <StudentsByGender />
              </Col>

              <Col lg={4}>
                <StudentAttendanceChart />
              </Col>

              <Col lg={4}>
                <TodoList  search={search}/>
              </Col>
            </Row>


            <Row className="mt-1">
              <Col>
                <NoticeBoard search={search} />
              </Col>
            </Row>
          </Col>


          <Col lg={3}>

            <DashboardClendar />

            <RecentActivity search={search} />
          </Col>
        </Row>
      </Container>


      {/* MOBILE / TABLET LAYOUT */}


      <Container
        fluid
        className="d-block d-lg-none px-2 px-md-3 py-3"
      >
        <Header text="Dashboard" />

        <Row className="g-3">
          <Col xs={12}>
            <DashboardStats />
          </Col>
        </Row>

        <Row className="g-3 mt-1">

          <Col xs={12} md={7}>
            <StudentPerformanceChart />
          </Col>

          <Col xs={12} md={5}>
            <StudentsByGender />
          </Col>

          <Col xs={12} md={7}>
            <EarningsChart />
          </Col>

          <Col xs={12} md={5}>
            <StudentAttendanceChart />
          </Col>

        </Row>
        <Row>
          <Col xs={12}>
            <DashboardClendar />


          </Col>

        </Row>

        {/* NOTICE BOARD FULL WIDTH */}
        <Row className="mt-1">
          <Col xs={12}>
            <NoticeBoard search={search} />
          </Col>
        </Row>

        {/* BOTTOM SECTION */}
        <Row className="g-3 mt-1">

          <Col xs={12} md={6}>
            <TodoList search={search} />
          </Col>

          <Col xs={12} md={6}>
            <RecentActivity search={search} />
          </Col>

        </Row>
      </Container>
    </>
  );
};

export default Dashboard;