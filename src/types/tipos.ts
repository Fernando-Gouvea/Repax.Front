export type StatusVeiculo = "disponivel" | "negociacao" | "vendido";

export interface Veiculo {
  id: string;
  nomeAnuncio: string;
  marca: string;
  modelo: string;
  ano: number;
  anoModelo: number;
  descricao: string;
  valorFipe: number;
  valorWeb: number;
  valorVenda: number;
  opcionais: string[];
  fotos: string[];
  status: StatusVeiculo;
  criadoEm: string;
}

export interface Usuario {
  id: number;
  nome: string;
  senha: string;
  email: string;
  telefone: string;
  cargo: "admin" | "vendedor";
  ativo: boolean;
  criadoEm: string;
}
