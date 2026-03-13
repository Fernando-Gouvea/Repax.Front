import { api } from "../api/api";
import type { Veiculo } from "../types/tipos";

export const veiculoService = {
  listar: async (): Promise<Veiculo[]> => {
    const { data } = await api.get("/veiculos");
    return data;
  },

  criar: async (novoVeiculo: Partial<Veiculo>): Promise<Veiculo> => {
    const { data } = await api.post("/veiculos", novoVeiculo);
    return data;
  },
};
