// lib/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL, // API의 기본 경로 설정
  headers: {
    'Content-Type': 'application/json',
    'accept': '*/*'
  },
});

if (typeof window !== 'undefined') {
  api.interceptors.request.use((config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  });
}

export const Agentapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_AGENT_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'accept': 'application/json'
  }
})

export default api;