import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { veiculoService } from "../services/veiculoService";

export const useVeiculos = () => {
  const queryClient = useQueryClient();

  // Query: Busca de dados
  const {
    data: veiculos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["veiculos"],
    queryFn: veiculoService.listar,
  });

  // Mutation: Alteração de dados
  const mutationCriar = useMutation({
    mutationFn: veiculoService.criar,
    onSuccess: () => {
      // Invalida o cache para atualizar a lista automaticamente
      queryClient.invalidateQueries({ queryKey: ["veiculos"] });
    },
  });

  return {
    veiculos,
    isLoading,
    error,
    criarVeiculo: mutationCriar.mutateAsync,
    isCriando: mutationCriar.isPending,
  };
};
