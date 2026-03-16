/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL_AUTH: string
  readonly VITE_API_URL_USERS: string
  readonly VITE_API_URL_PAYMENTS: string
  readonly VITE_APP_MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}