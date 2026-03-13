import { createContext, useContext, useState, type ReactNode } from "react";
import type { Usuario } from "../types/tipos";
import { usuariosMock } from "../dados/mockDados";

interface ContextoAutenticacao {
  usuario: Usuario | null;
  estaAutenticado: boolean;
  entrar: (email: string, senha: string) => boolean;
  sair: () => void;
}

const ContextoAuth = createContext<ContextoAutenticacao | undefined>(undefined);

export function ProvedorAuth({ children }: { children: ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const entrar = (email: string, _senha: string): boolean => {
    const encontrado = usuariosMock.find((u) => u.email === email);
    if (encontrado) {
      setUsuario(encontrado);
      return true;
    }
    // Login demo: qualquer email/senha funciona
    setUsuario({
      id: "demo",
      nome: "Usuário Demo",
      email,
      telefone: "(11) 90000-0000",
      cargo: "vendedor",
      ativo: true,
      criadoEm: new Date().toISOString(),
    });
    return true;
  };

  const sair = () => setUsuario(null);

  return (
    <ContextoAuth.Provider
      value={{ usuario, estaAutenticado: !!usuario, entrar, sair }}
    >
      {children}
    </ContextoAuth.Provider>
  );
}

export function useAuth() {
  const contexto = useContext(ContextoAuth);
  if (!contexto)
    throw new Error("useAuth deve ser usado dentro do ProvedorAuth");
  return contexto;
}
