import axios from "axios";

const token = localStorage.getItem("token");
export default axios.create({
  baseURL: "https://api.kassandah.gigmobility.com",
  headers: {
    "Content-Type": "multipart/form-data",
    "Content-type": "application/json",

    ...(token && { Authorization: `Bearer ${token}` }),
  },
});
