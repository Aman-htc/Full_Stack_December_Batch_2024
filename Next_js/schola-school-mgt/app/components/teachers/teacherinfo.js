"use client";

import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import {
  BsGenderMale,
  BsEnvelope,
  BsTelephone,
  BsHouse,
  BsThreeDots,
  BsCalendar3,
} from "react-icons/bs";

const Personainfo = ({ teacher }) => {


  if (!teacher) {
    return (
      <Card className="border-0 shadow-sm p-3 rounded-4 bg-light">
        <Card.Body>
          <h6>No Teacher Data Found</h6>
        </Card.Body>
      </Card>
    );
  }

  const info = [
    {
      label: "Gender",
      value: teacher.data.Gender,
      icon: <BsGenderMale />,
    },
    {
      label: "Date of Birth",
      value: teacher.data.DateOfBirth,
      icon: <BsCalendar3 />,
    },
    {
      label: "Email Address",
      value: teacher.data.EmailAddress,
      icon: <BsEnvelope />,
    },
    {
      label: "Phone Number",
      value: teacher.data.PhoneNumber,
      icon: <BsTelephone />,
    },
    {
      label: "Address",
      value: teacher.data.AddressLine,
      icon: <BsHouse />,
    },
  ];

  return (
    <Card className="border-0 shadow-sm p-3 rounded-4 bg-light h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="mb-0 text-danger-subtle h6-alt">
            Personal Info
          </h6>

          <BsThreeDots
            className="text-danger"
            style={{ cursor: "pointer" }}
          />
        </div>

        <div className="d-flex flex-column gap-3">
          {info.map((item, index) => (
            <Row key={index} className="align-items-start gx-2">
              <Col xs="auto">
                <div
                  className="bg-primary d-flex align-items-center justify-content-center"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                >
                  {item.icon}
                </div>
              </Col>

              <Col>
                <div className="text-danger cap-md-reg ">
                  {item.label}
                </div>

                <div
                  className="text-dark body-xs-med text-truncate"
                  style={{ maxWidth: "180px" }}
                  title={item.value}
                >
                  {item.value || "N/A"}
                </div>
              </Col>
            </Row>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Personainfo;