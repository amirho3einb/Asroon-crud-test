import http from "./httpService";

export const deleteUserService = (id) => {
  return http.delete(`/users/${id}`);
};
