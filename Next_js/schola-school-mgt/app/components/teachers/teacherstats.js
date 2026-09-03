import { useEffect, useState } from "react";
import {
  Users,
  Clock,
  UserCheck,
  UserX,
} from "lucide-react";

import Stats from "../Stats";
import { getSummary } from "@/services/teacherService";

export default function TeacherStats() {
  const [summary, setSummary] = useState(null);

  const iconMap = {
    teachers: Users,
    clock: Clock,
    time: UserCheck,
    substitute: UserX,
  };

  const iconStyles = {
    teachers: {
      color: "#fff",
      bg: "#15456F",
    },
    clock: {
      color: "#15456F",
      bg: "#FFCDFD",
    },
    time: {
      color: "#15456F",
      bg: "#CEEAF1",
    },
    substitute: {
      color: "#15456F",
      bg: "#FCEBFC",
    },
  };

  const getsummarydata = async () => {
    try {
      const response = await getSummary();
      setSummary(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsummarydata();
  }, []);

  const teacherStatsData = [
    {
      id: 1,
      title: "Total Teachers",
      value: summary?.total_teachers || 0,
      icon: "teachers",
    },
    {
      id: 2,
      title: "Full Time Teachers",
      value: summary?.full_time_teachers || 0,
      icon: "clock",
    },
    {
      id: 3,
      title: "Part Time Teachers",
      value: summary?.part_time_teachers || 0,
      icon: "time",
    },
    {
      id: 4,
      title: "Substitute Teachers",
      value: summary?.substitute_teachers || 0,
      icon: "substitute",
    },
  ];

  return (
    <div>
      <Stats
        data={teacherStatsData}
        iconMap={iconMap}
        iconStyles={iconStyles}
      />
    </div>
  );
}