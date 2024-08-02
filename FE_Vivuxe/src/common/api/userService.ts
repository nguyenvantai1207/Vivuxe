import { getUserId } from "../helpers";
import axiosClient from "./axiousClient";
import { getHeaderWithToken } from "./getHeaderWithToken";

const BASE_URL = "/api/v1/users";

const getUserPaging = (page: number, size: number) => {
  return axiosClient.get(`${BASE_URL}/starred?page=${page}&size=${size}`, {
    // headers: getHeaderWithToken(),
  });
};

const createUser = (
  userId: number,
  userName: string,
  password: string,
  email: string,
  phone: string
) => {
  return axiosClient.post(`${BASE_URL}/create-user`, {
    userId,
    userName,
    password,
    email,
    phone,
  });
};

const getUser = (page: number, size: number) => {
  return axiosClient.get(`${BASE_URL}?page=${page}&size=${size}`, {
    //   headers: getHeaderWithToken(),
  });
};

const deleteUser = (id: number) => {
  return axiosClient.get(`${BASE_URL}/deleteUser/${id}`);
};

const getUserById = (id: number) => {
  return axiosClient.get(`${BASE_URL}/${id}`, {
    headers: getHeaderWithToken(),
  });
};

const updateUser = (body: any) => {
  const userId = getUserId();
  return axiosClient.put(`${BASE_URL}/${userId}`, body, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

const userService = {
  getUserPaging,
  createUser,
  getUser,
  deleteUser,
  getUserById,
  updateUser,
};

export default userService;
