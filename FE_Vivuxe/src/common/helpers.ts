import dayjs from "dayjs";
import { BASE_HOST } from "./api/axiousClient";

export const getUserId = () => {
    const userId = localStorage.getItem("userId")
    ? Number(localStorage.getItem("userId"))
    : null;

    return userId
}

export const getToken = () => {
    const token = localStorage.getItem("token")
    return token
}

export const formatDate = (date: string, type = 'DD/MM/YYYY') => {
    return dayjs(date).format(type)
}

export const logOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");
}

export const splitFileName = (fullPath: string) => {
    if(!fullPath) return ''
    const index = fullPath.lastIndexOf("\\");
    const relativePath = fullPath.substring(index + 1);
    return "/images/" + relativePath;
  };

  export const getImageUrl = (path: string) => {
    return BASE_HOST + splitFileName(path)
  }