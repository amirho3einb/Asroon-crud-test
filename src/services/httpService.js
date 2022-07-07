import axios from "axios";

axios.defaults.baseURL = "https://62bfe35ec134cf51cec58701.mockapi.io/api/crud";

const http = {
  get: axios.get,
  put: axios.put,
  delete: axios.delete,
  post: axios.post,
};

export default http;
