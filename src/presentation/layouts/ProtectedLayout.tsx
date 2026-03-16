// src/presentation/layouts/ProtectedLayout.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Header } from "../../components/Header";

const MainContent = styled.main`
  min-height: calc(100vh - 65px);
  background-color: #f8fafc;
  width: 100%;
`;

export const ProtectedLayout = () => {
  const location = useLocation();

  // Recupera as informações do usuário logado
  const userType = localStorage.getItem("@Repax:userType");
  const isAuthenticated = !!userType;

  // Se não estiver logado, manda para o login salvando a página que ele tentou acessar
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return (
    <>
      <Header />
      <MainContent>
        {/* O Outlet renderiza a página específica da rota (Dashboard, Gestão, etc) */}
        <Outlet />
      </MainContent>
    </>
  );
};
