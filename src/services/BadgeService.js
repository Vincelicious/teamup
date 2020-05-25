import axios from "axios";

const apiClient = axios.create({
  baseURL: `http://86.95.88.160:3000`,
  withCredentials: false, // This is the default
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getRecordBadges() {
    return apiClient.get("/achievements");
  },
};
