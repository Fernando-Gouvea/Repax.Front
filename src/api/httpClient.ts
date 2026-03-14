// src/core/api/httpClient.ts
import axios from "axios";
import { TokenManager } from "../infra/common/TokenManager";
import { queryClient } from "../core/query/client";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Sua URL base
});

// Interceptor de REQUISIÇÃO: Injeta o Token
api.interceptors.request.use((config) => {
  const token = TokenManager.getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor de RESPOSTA: O "Segurança" do App
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    // 1. Se o erro for 401 (Token Expirado/Inválido)
    if (error.response?.status === 401) {
      // Limpa tudo para segurança
      TokenManager.clear();
      queryClient.clear(); // Mata o cache do TanStack Query

      // Redireciona para o login de forma bruta para garantir limpeza de memória
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);
