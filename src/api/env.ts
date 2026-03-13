// src/core/config/env.ts
const getEnv = (key: keyof ImportMetaEnv) => {
  const value = import.meta.env[key];
  if (!value) throw new Error(`Variável de ambiente ${key} não definida.`);
  return value;
};

export const env = {
  services: {
    auth: getEnv('VITE_API_URL_AUTH'),
    users: getEnv('VITE_API_URL_USERS'),
    payments: getEnv('VITE_API_URL_PAYMENTS'),
  },
  isDev: import.meta.env.DEV,
  mode: import.meta.env.MODE, // 'development' | 'production' etc
};