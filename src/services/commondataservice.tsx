import axios from "axios";

import { useEffect, useState } from "react";




export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 50000,
});

// const {userData, userNIN} = useData();

axiosInstance.interceptors.request.use(
  async function (config: any) {
    config.headers = {
      ...config.headers,
      "Content-Type": "application/json",
    };

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export const REACT_APP_API_URL = "http://mahmoodhamid.ddns.net:6677/send_sms?phone_number=%2B"
export default class CommonDataService {
  executeApiCall(path) {
    console.log(`${REACT_APP_API_URL}${path}`);
    return axiosInstance
      .post(`${REACT_APP_API_URL}${path}`)
      .then((res) => res);
  }

  removeCall(path,) {
    return axiosInstance
      .delete(`${REACT_APP_API_URL}${path}`)
      .then((res) => res);
  }

  fetchData(path) {
    return axiosInstance.get(`${REACT_APP_API_URL}${path}`).then((res) => res);
  }

  fetchData_2(path, data) {
    return axiosInstance
    .get(`${REACT_APP_API_URL}${path}`,data)
    .then((res) => res);
  }
  fetchData_3(path, data) {
    return axiosInstance
    .get(`${REACT_APP_API_URL}${path}`,{ params: data })
    .then((res) => res);
  }
}
