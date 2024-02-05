import axios from "axios";

const API_INSTANCE = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API_INSTANCE;