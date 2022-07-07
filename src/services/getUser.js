import http from "./httpService";

export const getUserService = (id) => {
  return http.get(`/users/${id}`);
};
