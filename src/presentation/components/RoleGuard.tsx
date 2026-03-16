import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface RoleGuardProps {
  children: JSX.Element;
  allowedRole: "lojista" | "fornecedor";
}

export const RoleGuard = ({ children, allowedRole }: RoleGuardProps) => {
  const userType = localStorage.getItem("@Repax:userType");

  // Se o tipo de usuário logado não for o permitido para esta rota
  if (userType !== allowedRole) {
    // Redireciona para a home ou para o dashboard correto dele
    const redirectPath = userType === "fornecedor" ? "/gestao" : "/dashboard";
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
