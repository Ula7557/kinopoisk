import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_ROOT_API,
  timeout: 30000, // 30 seconds
});

api.defaults.headers.common["Accept"] = "application/json";
api.defaults.headers.common["Cache-Control"] = "no-cache";
api.defaults.headers.common["Content-Type"] = "application/json; charset=utf-8";

api.interceptors.request.use(
  (configs) => {
     
      configs.headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjE4MmE3N2E5OTg5ZGE1ZWI4OWU0ZTFlOGE2YjM3OSIsInN1YiI6IjYwNDMxZTBkODgxM2U0MDAyYWVkNDA1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aNhmDkW8sCtqRFuAEskGYcnNzwUCIcz7kk1bMh_SEtE';
      return configs;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;