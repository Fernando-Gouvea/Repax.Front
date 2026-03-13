// src/presentation/layouts/ProtectedLayout.tsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthUser } from "../../application/auth/queries/useAuthUser";
import { TokenManager } from "../../infra/common/TokenManager";
import { UserHeader } from "../components/UserHeader";

export const ProtectedLayout = () => {
  const { data: user, isLoading, isError } = useAuthUser();
  const location = useLocation();
  const hasToken = !!TokenManager.getAccessToken();

  // 1. Enquanto carrega e existe token, não decide nada (o GlobalLoader no AppProviders cuida do visual)
  if (isLoading && hasToken) return null;

  // 2. Se não tem token ou deu erro na busca do user (token expirado), manda para login
  if (!hasToken || isError || (!isLoading && !user)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return (
    <div className="app-layout">
      <header className="main-header">
        <UserHeader />
      </header>

      <div className="flex">
        {/* <Sidebar /> - Local para sua futura Sidebar */}
        <main className="content p-6 w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
