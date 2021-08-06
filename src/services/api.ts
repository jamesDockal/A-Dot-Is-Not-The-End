import axios from "axios";

const url = "https://a-dot-is-not-the-end-api.herokuapp.com";
const api = axios.create({
  baseURL: url,
});

export default api;
