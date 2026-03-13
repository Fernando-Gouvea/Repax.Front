import { type ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contextos/ContextoAuth";
import styled from "styled-components";
import { BarraNavegacao } from "./BarraNavegacao/BarraNavegacao";


const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Main = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export function LayoutProtegido({ children }: { children: ReactNode }) {
  const { estaAutenticado } = useAuth();
  if (!estaAutenticado) return <Navigate to="/" replace />;
  return (
    <PageWrapper>
      <BarraNavegacao />
      <Main>{children}</Main>
    </PageWrapper>
  );
}
