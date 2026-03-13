// Definindo o que é necessário para logar
export type LoginCredentials = {
  email: string;
  password: string;
};

// Exatamente o que sua API retorna (conforme o JSON que você enviou)
export type TipoUsuario = {
  tipoUsuario: string;
  tipoUsuarioId: number;
  id: number;
};

export type AuthResponse = {
  token: string;
  refreshToken: string;
  date: string;
  validFrom: string;
  validTo: string;
  tipoUsuario: TipoUsuario;
};

// O modelo de usuário que o restante do seu App vai usar (abstraído)
export type User = {
  id: number;
  nome: string;
  fotoUrl: string;
  permissoes: string[]; // ['admin', 'financeiro', etc]
  role: string;
};

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<AuthResponse>;
  getCurrentUser(): Promise<User>;
  refreshToken(): Promise<string>;
  logout(): Promise<void>; // Adicionamos este agora
}

// // O contrato que o AuthService DEVE seguir
// export interface IAuthRepository {
//   login(credentials: LoginCredentials): Promise<AuthResponse>;
//   getCurrentUser(): Promise<User>;
//   refreshToken(): Promise<string>;
//   logout(): Promise<void>;
// }