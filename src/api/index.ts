import axios from "axios";
export const getKlineData = (data: object = {}) => {
  const path = "/market/kline";
  return axios.post(path, data, {
    responseType: "json",
    baseURL: localStorage.getItem("baseURL") || "",
  });
};
