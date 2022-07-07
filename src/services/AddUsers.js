import http from "./httpService";

export const AddUsersService = (data) => {
  return http.post("/users", data);
};
