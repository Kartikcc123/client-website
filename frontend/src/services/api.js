import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Pointing to local Express backend
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add the JWT token automatically to protected endpoints
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
