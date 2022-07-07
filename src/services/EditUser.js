import http from "./httpService";

export const editUserService = (id, data) => {
  return http.put(`/users/${id}`, data);
};
