import axios from "axios";
import authHeader from "./auth-header";

export default axios.create({
  baseURL: "https://api.kassandah.gigmobility.com",

  headers: authHeader(),
});
