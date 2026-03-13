import {
  useIsFetching,
  useIsMutating,
  Query,
  Mutation,
} from "@tanstack/react-query";
import { useEffect, useState, useCallback } from "react";
import { useLoadingStore } from "../../application/common/useLoadingStore";

export const GlobalLoader = () => {
  const { setIsGlobalLoading } = useLoadingStore();
  const [shouldRender, setShouldRender] = useState(false);

  // 1. Predicados memoizados para evitar recálculos desnecessários do TanStack
  const queryPredicate = useCallback((query: Query) => {
    return query.state.status === "pending" && query.meta?.hideLoader !== true;
  }, []);

  const mutationPredicate = useCallback(
    (mutation: Mutation<any, any, any, any>) => {
      return (
        mutation.state.status === "pending" &&
        mutation.meta?.hideLoader !== true
      );
    },
    [],
  );

  const isFetching = useIsFetching({ predicate: queryPredicate });
  const isMutating = useIsMutating({ predicate: mutationPredicate });

  // 2. Orquestração de Visibilidade (Debounce na entrada, Throttle na saída)
  useEffect(() => {
    const isWorking = isFetching > 0 || isMutating > 0;
    let timer: ReturnType<typeof setTimeout>;

    if (isWorking) {
      // Entrada: Espera 200ms antes de mostrar (UX: evita flash em conexões rápidas)
      timer = setTimeout(() => {
        setShouldRender(true);
        setIsGlobalLoading(true);
      }, 200);
    } else {
      // Saída: Mantém visível por pelo menos 300ms extras para finalização suave
      // Isso evita o efeito "chicote" quando uma requisição emenda na outra
      timer = setTimeout(() => {
        setShouldRender(false);
        setIsGlobalLoading(false);
      }, 300);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isFetching, isMutating, setIsGlobalLoading]);

  // Se não deve renderizar agora, mantemos o DOM limpo
  if (!shouldRender) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full z-[9999] pointer-events-none select-none"
      role="progressbar"
      aria-busy={shouldRender}
      aria-valuetext="Carregando..."
    >
      {/* Container da Barra */}
      <div className="relative h-[3px] w-full overflow-hidden bg-white/10 backdrop-blur-sm">
        <div
          className="absolute h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 shadow-[0_0_12px_rgba(99,102,241,0.8)] animate-progress-flow transition-all duration-500 ease-out"
          style={{ width: "100%" }}
        />
      </div>

      {/* Bloqueio de UI Otimizado: Só bloqueia cliques se for uma Mutação Crítica */}
      {isMutating > 0 && (
        <div
          className="fixed inset-0 bg-black/[0.02] backdrop-blur-[0.5px] pointer-events-auto cursor-wait animate-fade-in"
          aria-hidden="true"
        />
      )}
    </div>
  );
};
