// src/core/query/client.ts
import { QueryCache, QueryClient, MutationCache } from "@tanstack/react-query";
import { useLoadingStore } from "../../application/common/useLoadingStore";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // Sempre que uma query termina (seja sucesso ou erro)
    onSettled: () => {
      // Usamos um pequeno timeout para evitar "flicker" (piscada)
      // entre requisições sequenciais
      setTimeout(() => {
        if (queryClient.isFetching() === 0 && queryClient.isMutating() === 0) {
          useLoadingStore.getState().setIsGlobalLoading(false);
        }
      }, 50);
    },
    onError: (error) => {
      console.error("Erro Global Query:", error.message);
    },
  }),

  mutationCache: new MutationCache({
    onMutate: () => {
      // Liga o loading imediatamente no POST/PUT/DELETE
      useLoadingStore.getState().setIsGlobalLoading(true);
    },
    onSettled: () => {
      setTimeout(() => {
        if (queryClient.isFetching() === 0 && queryClient.isMutating() === 0) {
          useLoadingStore.getState().setIsGlobalLoading(false);
        }
      }, 50);
    },
    onError: (error) => {
      console.error("Erro Global Mutation:", error.message);
    },
  }),

  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
