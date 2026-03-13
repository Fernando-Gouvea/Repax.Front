export const CACHE_POLICIES = {
  /**
   * Dados que quase nunca mudam (ex: Países, Estados, Configurações do App)
   */
  IMMUTABLE: {
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60 * 24, // 24 horas
  },

  /**
   * Dados de sessão ou perfil (mudam pouco, mas precisam ser validados)
   */
  SESSION: {
    staleTime: 1000 * 60 * 30, // 30 minutos
    gcTime: 1000 * 60 * 60,    // 1 hora
    retry: false,              // Se falhar auth, não adianta tentar de novo
  },

  /**
   * Dados transacionais (ex: Lista de Pedidos, Saldo)
   * Precisam de atualização constante.
   */
  TRANSACTIONAL: {
    staleTime: 1000 * 10,      // 10 segundos (considerado "velho" rápido)
    gcTime: 1000 * 60 * 5,     // 5 minutos
    refetchOnWindowFocus: true, // Atualiza se o usuário voltar para a aba
  },

  /**
   * Dados em tempo real (ex: Notificações, Status de um Processamento)
   */
  REAL_TIME: {
    staleTime: 0, 
    refetchInterval: 1000 * 30, // Polling a cada 30 segundos
  }
} as const;