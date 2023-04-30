import axios from "axios";
// Set api main endpoint
const baseURL = "https://dryrun-api.herokuapp.com/";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  //   add authentication headers that will go with requests
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
