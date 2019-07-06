import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: false
})

http.interceptors.response.use(
  (response) => response,
  (error) => error.status === 401 ? window.location = "/login" : Promise.reject(error)
);

export default http;