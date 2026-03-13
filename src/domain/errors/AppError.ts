// src/domain/errors/AppError.ts
export class AppError extends Error {
  readonly code?: string;
  readonly status?: number;

  constructor(message: string, code?: string, status?: number) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.status = status;

    // Essencial para manter a pilha de erros correta em JS
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
