import axios from "axios";

const token = localStorage.getItem('token')
export default axios.create({
  baseURL: "https://kassandah.gigmobility.com",
  headers: {
    "Content-type": "application/json",
    ...(token && {Authorization : `Bearer ${token}`})
  },
});

