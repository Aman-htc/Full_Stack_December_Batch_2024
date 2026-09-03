import api from "./api";


export const addadmin = async (admin) => {
    try {
        console.log("Sending:", admin);

        const response = await api.post("/admin/signup", admin);

        console.log("Response:", response);
        return response.data;

    } catch (error) {
       
        console.log("FULL ERROR:", error);
        console.log("STATUS:", error.response?.status);
        console.log("DATA:", error.response?.data);

        throw error;
    }
};



export const loginAdmin = async (idToken) => {
    const response = await api.post("/admin/login", {
        id_token: idToken,
    });

    return response.data;
};



export const getMe = async () => {
  const idToken = localStorage.getItem("idToken");

  const response = await api.get("/admin/me", {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  });

  return response.data;
};