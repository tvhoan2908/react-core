const API_URL = import.meta.env.VITE_API_URL;
export const API = {
  API_URL,
  API_LOGIN: API_URL + "/api/v2/login",
  API_GET_USER_INFO: API_URL + "/api/me",
};
