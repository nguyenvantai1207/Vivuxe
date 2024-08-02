export const getHeaderWithToken = () => {
  return {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
};
