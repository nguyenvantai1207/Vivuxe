import axiosClient from "./axiousClient";

const END_POINT = "/api/v1/auth";

const authService = {
  login(username: string, password: string) {
    return axiosClient.post(`${END_POINT}/signin`, {
      username,
      password,
    });
  },
  signUp(body: any) {
    return axiosClient.post(`${END_POINT}/signup`, body);
  },
};

export default authService;
