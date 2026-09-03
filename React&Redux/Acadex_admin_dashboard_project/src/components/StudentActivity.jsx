import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { BiMedal } from "react-icons/bi";

import { iconMap } from "../data/js/iconMap";
import { TitleHead } from "./main/index";
import { studentData } from "../data/js/jsonPath";



function timeAgo(dateTimeString) {
  const eventDate = new Date(dateTimeString);
  const now = new Date();

  const diffMs = now - eventDate;
  const diffSec = Math.floor(diffMs / 1000);

  
  
  if (diffSec < 60) return "Just now";
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} minutes ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hours ago`;

  const days = Math.floor(diffSec / 86400);
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return `${years} years ago`;
}



const StudentActivity = () => {
  const activities = studentData.ActivityData.slice(0,4);

  return (
    <Card className="p-2 p-md-3 h-100  border-color bg-color rounded-4">

      {/* Header */}
      <TitleHead title="Student Activity" view="View All" />

      {/* Activity Items */}
      {activities.length > 0 ? (
        activities.map((item) => {
          const Icon = iconMap[item.icon];

          return (
            <Row key={item.id} className="mb-3  mt-2 align-items-start">

              {/* Icon */}
              <Col xs="auto" className="pe-2">
                <div className="bg-primary-subtle d-flex align-items-center justify-content-center rounded-3" style={{ width: 40, height: 40 }}>
                  <Icon className="text-primary" size={20} />
                </div>
              </Col>

             
              <Col className="ps-1 ps-md-2">
                {/* Title + Time */}
                <div className="d-flex justify-content-between align-items-start mb-1">
                  <div className="XSmall-Medium" >
                    {item.title}
                  </div>
                  <span className="gray-100 XSmall-Regular px-1 rounded-3  bg-gray-light ">
                   {timeAgo(item.date)}
                  </span>
                </div>

                {/* Badge */}
                <div className="text-primary  lh-1 d-flex align-items-center gap-1 mb-1" >
                  <BiMedal size={14} />
                  <span className="XSmall-Regular">{item.badge}</span>
                </div>

                {/* Description */}
                <div className="XSmall-Regular descripation gray-200" >
                  {item.description}
                </div>
              </Col>
            </Row>
          );
        })
      ) : (
        <p className="text-center text-muted small py-3 mb-0">
          No student activities available
        </p>
      )}
    </Card>
  );
};

export default StudentActivity;
