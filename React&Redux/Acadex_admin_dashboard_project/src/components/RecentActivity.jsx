
import React from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

import { iconMap } from "../data/js/iconMap";
import { studentData } from "../data/js/jsonPath";
import { TitleHead } from "./main/index";

// Function to calculate "time ago" (past)
function timeAgo(dateTimeString) {
  if (!dateTimeString) return "";

  const eventDate = new Date(dateTimeString);
  const now = new Date();
  const diffMs = now - eventDate;
  const diffSec = Math.floor(diffMs / 1000);

  if (diffSec >= 0) {
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

  return "";
}

const RecentActivity = () => {
  const activities = studentData.RecentActivity;

  // 1 month filter
  const now = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(now.getMonth() - 1);

  const recentActivities = activities
    .filter((item) => {
      const activityDate = new Date(item.date);
      return activityDate >= oneMonthAgo && activityDate <= now;
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <Container className="py-1">
      <Card className="p-2 p-md-3 border-0  bg-color rounded-4">

        {/* Header */}
        <TitleHead title="Recent Activity" view="View All" />

       
        {recentActivities.length >  0 ? (
          recentActivities.map((item) => {
            const Icon = iconMap[item.icon];

            return (
              <Row
                key={item.id}
                className="g-3 mb-3  align-items-start"
              >
                {/* Icon */}
                <Col xs="auto">
                  <div
                    className="border-radius d-flex align-items-center justify-content-center"
                    style={{
                      background: item.color,
                      width: 40,
                      height: 40,
                    }}
                  >
                    <Icon className="text-white" size={16} />
                  </div>
                </Col>

                {/* Text + Time */}
                <Col className="ps-1">
                  <div className="gray-100 descripation XSmall-Regular">
                    {item.text}
                  </div>

                  <div className="gray-200 XSmall-Regular mt-1">
                    {timeAgo(item.date)}
                  </div>
                </Col>
              </Row>
            );
          })
        ) : (
          <p className="text-center gray-200 XSmall-Regular py-3 mb-0">
            No recent activity available
          </p>
        )}

      </Card>
    </Container>
  );
};

export default RecentActivity;

