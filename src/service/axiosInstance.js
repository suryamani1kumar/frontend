import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_HOSTNAME,
  withCredentials: true,
  headers: {
    "api-key": process.env.NEXT_PUBLIC_API_KEY,
  },
});