import axios from "axios";
import { getToken, logOut } from "../helpers";

export const BASE_HOST = "http://localhost:8080";

const axiosClient = axios.create({
  baseURL: BASE_HOST,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 403) {
      logOut();
      window.location.href = "/";
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
