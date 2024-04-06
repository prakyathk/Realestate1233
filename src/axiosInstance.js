import axios from 'axios';

// Set up axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8081', // Replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to set the Authorization header for all requests
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('accessToken'); // Fetch token from local storage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

export default axiosInstance;
