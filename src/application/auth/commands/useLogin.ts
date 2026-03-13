import { useMutation, useQueryClient } from "@tanstack/react-query";
import type {
  AuthResponse,
  LoginCredentials
} from "../../../domain/auth/types";
import { authService } from "../../../infra/auth/AuthService";
import { AUTH_QUERY_KEY } from "../queries/useAuthUser";
import { TokenManager } from "../../../infra/common/TokenManager";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, Error, LoginCredentials>({
    mutationFn: (creds) => authService.login(creds),
    onSuccess: (data) => {
      TokenManager.setTokens(data.token, data.refreshToken);

      //Cache do TanStack Query reside apenas na memória RAM do navegador
      // Mapeia o retorno da API para o nosso modelo de User
      const user = {
        id: data.tipoUsuario.id,
        // nome: data.nome,
        // fotoUrl: data.fotoUrl,
        // permissoes: data.permissoes,
        // permissoes: data.permissoes || [],
        role: data.tipoUsuario.tipoUsuario,
      };

      // Alimenta o cache manualmente (Push do CQRS)
      queryClient.setQueryData(AUTH_QUERY_KEY, user);
    },
  });
};
