
import api from "./api";

export const createShedules = async (data) => {
  const response = await api.post("/calendar/", data);
  return response.data;

}


export const getShedules = async (data) => {
  const response = await api.get("/calendar/", data);
  return response.data;

}


