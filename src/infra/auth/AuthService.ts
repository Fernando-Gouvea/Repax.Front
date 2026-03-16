// src/infra/auth/AuthService.ts
import { BaseService } from "../common/BaseService";
import type {
  IAuthRepository,
  LoginCredentials,
  AuthResponse,
  User,
} from "../../domain/auth/types";
import { env } from "../../core/config/env";
import { api } from "../../api/api";


export class AuthService extends BaseService implements IAuthRepository {
  constructor() {
    // Passamos a URL do microserviço de AUTH definida no env.ts
    super(env.services.auth);
  }

  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const { data } = await api.post<AuthResponse>(
      this.fullUrl("/login"),
      credentials,
    );
    return data;
  }

  async getCurrentUser(): Promise<User> {
    const { data } = await api.get<User>(this.fullUrl("/me"));
    return data;
  }

  async refreshToken(): Promise<string> {
    const refreshToken = localStorage.getItem("refresh_token");
    const { data } = await api.post<{ token: string }>(
      this.fullUrl("/refresh"),
      {
        refreshToken,
      },
    );
    return data.token;
  }

  async logout(): Promise<void> {
    await api.post(this.fullUrl("/logout"));
  }
}

export const authService = new AuthService();
