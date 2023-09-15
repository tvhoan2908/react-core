const API_URL: string = import.meta.env.VITE_API_URL as string;
export const API = {
  API_URL,
  API_LOGIN: API_URL + "/api/auth/login",
  API_GET_USER_INFO: API_URL + "/api/user",
};
