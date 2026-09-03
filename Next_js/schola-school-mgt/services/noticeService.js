


import api from "./api";

export const addNotice = async (data) => {
  const response = await api.post("/notices/", data);
  return response.data;
};


// export const getNotice = async () => {
//   const response = await api.get("/notices/");
//   return response.data;
// };
export const getNotice = async (sortBy) => {
  const response = await api.get("/notices/", {
    params: {
      sort_by: sortBy,
    },
  });

  return response.data;
};

export const updateNotice = async (notice_id, data) => {
  const response = await api.put(`/notices/${notice_id}`, data);
  return response.data;
};


export const getidNotice = async (notice_id) => {
  const response = await api.get(`/notices/${notice_id}`);
  return response.data;
};


export const deleteidNotice = async (notice_id) => {
  const response = await api.delete(`/notices/${notice_id}`);
  return response.data;
};

export const Views = async (notice_id) => {
  try {
    const response = await api.patch(
      `/notices/${notice_id}/views`
    );
    return response.data;
  } catch (error) {
    console.log("VIEW API ERROR:", error?.response || error.message);
    throw error;
  }
};