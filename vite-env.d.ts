/// <reference types="vite/client" />

// adicione outras variáveis aqui de sistema global...
interface ImportMetaEnv {
  readonly VITE_API_URL_AUTH: string;
  readonly VITE_API_URL_USERS: string;
  readonly VITE_API_URL_PAYMENTS: string;
  readonly NODE_ENV: 'development'| 'homolog' | 'production' 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}