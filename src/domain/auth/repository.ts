import type { AuthResponse, LoginCredentials, User } from "./types";

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<AuthResponse>;
  getCurrentUser(): Promise<User>;
  refreshToken(): Promise<string>;
}