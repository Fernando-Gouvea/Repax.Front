// src/application/auth/queries/useAuthUser.ts
import { useQuery } from '@tanstack/react-query';
import { authService } from '../../../infra/auth/AuthService';
import { TokenManager } from '../../../infra/common/TokenManager';

export const AUTH_QUERY_KEY = ['authUser'] as const;

export const useAuthUser = () => {
  const token = TokenManager.getAccessToken();

  return useQuery({
    queryKey: AUTH_QUERY_KEY,
    queryFn: async () => {
      // Se não tem token, não tentamos buscar o perfil
      if (!token) return null;
      
      // Busca os dados completos (nome, id, foto, permissões) da API
      return authService.getCurrentUser();
    },
    // Configurações de Robustez:
    staleTime: 1000 * 60 * 30, // O perfil é considerado "fresco" por 30 min
    gcTime: 1000 * 60 * 60,    // Mantém no cache por 1 hora
    retry: false,              // Se o token falhar, não tenta de novo (provavelmente expirou)
    enabled: !!token,          // Só executa se houver um token no TokenManager
  });
};