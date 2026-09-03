




"use client";

import React, { useEffect, useState } from "react";
import { Card, Dropdown } from "react-bootstrap";
import { getDepartments, getWorkloadDistribution } from "@/services/teacherService";

const WorkloadChart = () => {
  const [departments, setDepartments] = useState([]);
  const [departmentId, setDepartmentId] = useState(1);
  const [viewType, setViewType] = useState("Monthly");
  const [workload, setWorkload] = useState([]);

  //  GET DEPARTMENTS
  const fetchDepartments = async () => {
    try {
      const res = await getDepartments();
      setDepartments(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //  GET WORKLOAD
  const fetchWorkload = async (deptId, type) => {
    try {
      const res = await getWorkloadDistribution(deptId, type);
      setWorkload(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  //  LOAD ONCE
  useEffect(() => {
    fetchDepartments();
  }, []);

  //  RELOAD ON CHANGE
  useEffect(() => {
    fetchWorkload(departmentId, viewType);
  }, [departmentId, viewType]);

  return (
    <Card className="p-4 border-0 shadow-sm h-100 rounded-4 bg-light">

      {/* HEADER */}
      <div className="d-flex justify-content-between mb-3">
        <h5 className="h6-alt text-danger-subtle">
          Workload Distribution
        </h5>

        <div className="d-flex gap-2">

          {/* ✅ DEPARTMENT DROPDOWN */}
          <Dropdown  className="p-0">
            <Dropdown.Toggle className="bg-primary border-0 btn-sm rounded-2">
              {departments.find(
                (d) => d.DepartmentID === departmentId
              )?.DepartmentName || "Select Department"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {departments.map((item) => (
                <Dropdown.Item
                  key={item.DepartmentID}
                  onClick={() => setDepartmentId(item.DepartmentID)}
                >
                  {item.DepartmentName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

         
          <Dropdown >
            <Dropdown.Toggle className="bg-primary border-0 btn-sm rounded-2">
              {viewType}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {["Weekly", "Monthly"].map((item) => (
                <Dropdown.Item
                  key={item}
                  onClick={() => setViewType(item)}
                >
                  {item}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </div>

      {/* LEGEND */}
      <div className="d-flex gap-4 mb-3 text-muted small flex-wrap">
        <div>
          <span className="me-2 rounded-circle d-inline-block bg-secondary wh-10" />
          Total Classes
        </div>

        <div>
          <span className="me-2 rounded-circle d-inline-block bg-primary wh-10" />
          Teaching Hours
        </div>

        <div>
          <span className="me-2 rounded-circle d-inline-block bg-warning wh-10" />
          Extra Duties
        </div>
      </div>

      {/* CHART */}
      <div className="d-flex">

        {/* Y AXIS */}
        <div
          className="me-3 d-flex flex-column justify-content-between text-muted small"
          style={{ height: 200 }}
        >
          {[40, 30, 20, 10, 0].map((v) => (
            <div key={v}>{v}h</div>
          ))}
        </div>

        {/* BARS */}
        <div className="flex-grow-1 scroll-wrapper">
          <div
            className="d-flex align-items-end gap-4 position-relative"
            style={{
              height: 240,
              backgroundImage:
                "linear-gradient(to top, rgba(0,0,0,0.1) 1px, transparent 1px)",
              backgroundSize: "100% 50px",
            }}
          >
            {workload.map((item, index) => {
              const total = item.totalClasses || 0;
              const teaching = item.teachingHours || 0;
              const extra = item.extraDuties || 0;

              return (
                <div key={index} className="text-center">

                  <div
                    className="d-flex flex-column-reverse align-items-center"
                    style={{ height: 250, width: 50 }}
                  >
                    <div
                      className="bg-secondary rounded-4 w-100 mb-1 mt-1"
                      style={{ height: `${total}%` }}
                    />

                    <div
                      className="bg-primary rounded-4 mt-1 w-100"
                      style={{ height: `${teaching}%` }}
                    />

                    <div
                      className="bg-warning rounded-4 w-100"
                      style={{ height: `${extra}%` }}
                    />
                  </div>

                  <div className="mt-2 cap-md-reg text-danger text-truncate">
                    {item.name}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WorkloadChart;