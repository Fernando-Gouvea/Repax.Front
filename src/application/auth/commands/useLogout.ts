// src/application/auth/commands/useLogout.ts
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { authService } from "../../../infra/auth/AuthService";
import { TokenManager } from "../../../infra/common/TokenManager";

export const useLogout = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    // Chamada para o microserviço de Auth
    mutationFn: () => authService.logout(),

    // Usamos onSettled para garantir a limpeza mesmo se a rede falhar
    onSettled: async () => {
      // 1. Limpa o Storage (Sincrono)
      TokenManager.clear();

      // 2. Cancela qualquer busca em andamento (Importante para Microserviços!)
      // Isso evita que uma query de outro serviço termine DEPOIS do logout
      // e coloque dados lixo no cache.
      await queryClient.cancelQueries();

      // 3. Reseta o cache global
      queryClient.clear();

      // 4. Navegação limpa
      navigate("/login", { replace: true });
    },
  });
};
