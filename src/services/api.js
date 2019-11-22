import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gobarberapi.ddns.net/',
});

export default api;
