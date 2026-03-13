// src/infra/common/BaseService.ts
export abstract class BaseService {
  // Declare a propriedade explicitamente aqui em cima
  protected readonly baseUrl: string;

  constructor(baseUrl: string) {
    // Faça a atribuição manualmente dentro do corpo
    this.baseUrl = baseUrl;
  }

  protected fullUrl(path: string): string {
    const cleanBase = this.baseUrl.endsWith("/")
      ? this.baseUrl.slice(0, -1)
      : this.baseUrl;
    const cleanPath = path.startsWith("/") ? path : `/${path}`;

    return `${cleanBase}${cleanPath}`;
  }
}
