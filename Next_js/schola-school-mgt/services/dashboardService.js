

import api from './api'



export const   getDashboardstats = async () => {
  const response = await api.get("/dashboard/stats");
  return response.data;

}
export const getStudentsByGender = async (className) => {
  const response = await api.get(
    `/dashboard/students-by-gender?class_name=${encodeURIComponent(className)}`
  );
  return response.data;
};
export const   getRecentActivities = async () => {
  const response = await api.get("/dashboard/recent-activities");
  return response.data;

}
export const  getTodoList = async () => {
  const response = await api.get("/dashboard/todo-list");
  return response.data;

}

export const getEarningsExpenses = async (period) => {
  const response = await api.get(
    `/dashboard/earnings-expenses?period_type=${period}`
  );

  return response.data;
};


export const getEventCalendar = async (month, year) => {
  const response = await api.get(
    `/dashboard/calendar-active-dates?month=${month}&year=${year}`
  );
  return response.data;
};


export const getdashboardnotic = async (data) => {
  const response = await api.get(
    `/dashboard/?sort_by=${data}`
  );
  return response.data;
};

