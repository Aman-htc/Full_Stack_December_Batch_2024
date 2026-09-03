import api from "./api";

export const getAttendanceSummary = async (period = "This Week") => {
  try {
    const response = await api.get(
      `/attendance/charts/summary?period=${encodeURIComponent(period)}`
    );

    return response.data;
  } catch (error) {
    console.error("Attendance Summary Error:", error);
    throw error;
  }
};

export const getAttendanceOverview = async (period = "This Month") => {
  try {
    const response = await api.get(
      `/attendance/charts/overview?period=${encodeURIComponent(period)}`
    );

    return response.data;
  } catch (error) {
    console.error("Attendance Overview Error:", error);
    throw error;
  }
};


export const getAttendanceCalendar = async (type,teacherId, year, month) => {
  try {
    const res = await api.get(
      `/attendance/${type}/${teacherId}/charts/attendance-calendar`,
      {
        params: {
          year,
          month,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("Attendance API Error:", error);
    throw error;
  }
};
