import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:3001" : "https://rocketseat-fullstack-final-api.onrender.com",
  withCredentials: true,
});

// https://rocketseat-fullstack-final-api.onrender.com
