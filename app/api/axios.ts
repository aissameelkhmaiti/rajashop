import axios from "axios";

const api = axios.create({
  // Utilise 127.0.0.1 ou localhost selon ta config Laravel
  baseURL: "http://127.0.0.1:8000/api", 
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  // ATTENTION : Si withCredentials est true, Laravel ne doit PAS avoir '*' dans allowed_origins
  withCredentials: true, 
});

// Intercepteur pour les Tokens
api.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;