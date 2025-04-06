import axios from 'axios';

const API = axios.create({
  baseURL: 'https://back-end-f.vercel.app/api',
  headers: { 'Content-Type': 'application/json' },
});

export default API;
