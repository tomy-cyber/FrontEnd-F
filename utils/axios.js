import axios from 'axios';

const API = axios.create({
  baseURL: 'https://f-backend-l4sd.vercel.app/api',
  headers: { 'Content-Type': 'application/json' },
});

export default API;
