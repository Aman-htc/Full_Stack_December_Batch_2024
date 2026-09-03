


import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
  
});
console.log("API BASE URL:", process.env.NEXT_PUBLIC_API_URL);


//  token runtime pe add karo
api.interceptors.request.use((config) => {
 
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("idToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});

export default api;