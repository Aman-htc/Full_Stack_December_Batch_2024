
"use client";

import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Header from "@/app/components/Header";
import AttendanceChart from "@/app/components/teachers/attendance_chart";
import WorkloadChart from "@/app/components/teachers/workload_chart";
import TeacherStats from "@/app/components/teachers/teacherstats";
import DepartmentChart from "@/app/components/teachers/department_chart";
import TeacherList from "@/app/components/teachers/teacher";
import Breadcrumb from "@/app/components/breadcrum";


const Teacher = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Container fluid className="p-3 d-none d-lg-block">

        {/* <Header text="Teachers" background={"bg-primary"} />
         */}
        <Header
          text="Teachers"
          background="bg-primary"
          search={search}
          setSearch={setSearch}
        />

        <Breadcrumb
          items={[
            { label: "Dashboard", path: "/dashboard" },
            { label: "Teachers", path: "/teachers" }
          ]}
        />

        <Row className="g-3 mt-3">

          {/* LEFT SIDE */}
          <Col xs={12} lg={9}>

            <TeacherStats />


            <Row className="g-3 mt-2">

              <Col xs={12} lg={5}>
                <AttendanceChart />
              </Col>

              <Col xs={12} lg={7}>
                <WorkloadChart />
              </Col>

            </Row>

          </Col>

          {/* RIGHT SIDEBAR */}
          <Col xs={12} lg={3}>
            <DepartmentChart />
          </Col>

        </Row>

        {/* TABLE */}
        <Row className="mt-3">
          <Col>
            {/* <TeacherList /> */}
            <TeacherList search={search} setSearch={setSearch}/>
          </Col>
        </Row>

      </Container>
      <Container fluid className="p-3 d-lg-none">

        <Header text="Teachers" background={"bg-primary"} />

        <div className="mt-3">
          <Breadcrumb
            items={[
              { label: "Dashboard", path: "/dashboard" },
              { label: "Teachers", path: "/teachers" }
            ]}
          />
        </div>

        <Row className="g-3 mt-1">

          <Col xs={12} md={8} className="d-flex flex-column gap-3">
            <TeacherStats />
            <AttendanceChart />
          </Col>

          <Col xs={12} md={4} className="d-flex flex-column gap-3">
            <DepartmentChart />
          </Col>

          <Col xs={12} className="mt-1">
            <WorkloadChart />
          </Col>

          <Col xs={12} className="mt-1">
            {/* <TeacherList /> */}
             <TeacherList search={search} setSearch={setSearch}/>
          </Col>

        </Row>

      </Container>
    </>
  );
};

export default Teacher;