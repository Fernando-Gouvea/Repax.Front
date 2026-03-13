// src/core/api/client.ts
import axios from "axios";
import { TokenManager } from "../infra/common/TokenManager";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Aqui você usará o env.services.auth que configuramos
});

// INTERCEPTOR DE REQUISIÇÃO (Único e Limpo)
api.interceptors.request.use((config) => {
  const token = TokenManager.getAccessToken();

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// INTERCEPTOR DE RESPOSTA (O "Cérebro" da Autenticação)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Se o erro for 401 (Expirado) e não for uma tentativa de retry
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = TokenManager.getRefreshToken();

        // Chamada direta via axios para não entrar no interceptor infinito
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL_AUTH}/refresh`,
          {
            refreshToken,
          },
        );

        const { token, refreshToken: newRefresh } = response.data;

        // Atualiza o storage centralizado
        TokenManager.setTokens(token, newRefresh);

        // Retenta a requisição original com o novo token
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return api(originalRequest);
      } catch (refreshError) {
        // Se o refresh falhar, limpa tudo e desloga
        TokenManager.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
