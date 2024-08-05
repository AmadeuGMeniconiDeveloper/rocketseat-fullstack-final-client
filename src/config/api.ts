import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketseat-fullstack-final-api.onrender.com",
});
