import http from "./httpService";

export const getAllUsersService = () => {
  return http.get("/users");
};
