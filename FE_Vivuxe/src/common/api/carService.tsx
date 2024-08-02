import axiosClient from "./axiousClient";
import { getHeaderWithToken } from "./getHeaderWithToken";

const BASE_URL = "/api/v1/cars";

const getCarPaging = (page: number, size: number) => {
  return axiosClient.get(`${BASE_URL}/starred?page=${page}&size=${size}`, {
    // headers: getHeaderWithToken(),
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createCar = (body: any) => {
  return axiosClient.post(`${BASE_URL}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const getAllCars = (size: number) => {
  return axiosClient.get(`${BASE_URL}/getall?size=${size}`);
};

const getCarById = (id: number) => {
  return axiosClient.get(`${BASE_URL}/${id}`, {
    headers: getHeaderWithToken(),
  });
};

const deleteCar = (id: number) => {
  return axiosClient.get(`${BASE_URL}/deleteUser/${id}`);
};

const carService = {
  getCarPaging,
  createCar,
  getAllCars,
  getCarById,
  deleteCar,
};

export default carService;
