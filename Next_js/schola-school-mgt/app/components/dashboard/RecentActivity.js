



"use client";

import React, { useEffect, useState } from "react";
import {
  UserPlus,
  ClipboardCheck,
  Wallet,
  PencilLine,
} from "lucide-react";
import { getRecentActivities } from "@/services/dashboardService";

const activityConfig = {
  student: { icon: UserPlus, bg: "#15456F", color: "#CEEAF1" },
  attendance: { icon: ClipboardCheck, bg: "#FFCDFD", color: "#15456F" },
  fee: { icon: Wallet, bg: "#15456F", color: "#CEEAF1" },
  notice: { icon: PencilLine, bg: "#FFCDFD", color: "#15456F" },
  teacher: { icon: UserPlus, bg: "#15456F", color: "#CEEAF1" },
};

const formatDate = (date) => {
  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const RecentActivity = ({ search }) => {
  const [activities, setActivities] = useState([]);

  const fetchActivities = async () => {
    try {
      const response = await getRecentActivities();

      if (response?.success) {
        setActivities(response.data || []);
      }
    } catch (error) {
      console.error("Recent Activities Error:", error);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);


  const filteredActivities = activities.filter((activity) => {
    const value = (search || "").toLowerCase().trim();

    if (!value) return true;

    return (
      activity.title?.toLowerCase().includes(value) ||
      activity.description?.toLowerCase().includes(value) ||
      activity.type?.toLowerCase().includes(value)
    );
  });

  return (
    <div className="bg-white p-4 mt-4 border-0">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="text-danger-subtle h6-alt mb-0">
          Recent Activity
        </h5>
        <span className="text-dark cursor-pointer">...</span>
      </div>

      {/* Timeline List */}
      <div className="position-relative">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity, index) => {
            const config =
              activityConfig[activity.type?.toLowerCase()] ||
              activityConfig.student;

            const Icon = config.icon;

            return (
              <div
                key={activity.id}
                className="d-flex mb-4 position-relative"
              >
                {index !== activities.length - 1 && (
                  <div
                    className="position-absolute border-start border-2 border-danger h-100"
                    style={{
                      left: "17px",
                      top: "35px",
                      zIndex: 0,
                    }}
                  />
                )}

                <div
                  className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "35px",
                    height: "35px",
                    backgroundColor: config.bg,
                    zIndex: 1,
                  }}
                >
                  <Icon size={16} color={config.color} />
                </div>

                <div className="ms-3">
                  <p className="mb-1 text-dark body-xs-med">
                    {activity.title}
                  </p>

                  <p
                    className="mb-1 text-muted"
                    style={{ fontSize: "12px" }}
                  >
                    {activity.description}
                  </p>

                  <small className="text-danger cap-md-med">
                    {formatDate(activity.time)}
                  </small>
                </div>
              </div>
            );
          })) : (
          <div className="text-center py-4 text-muted">
            No activity found
          </div>

        )}
      </div>
    </div>
  );
};

export default RecentActivity;