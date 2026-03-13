// src/presentation/routes.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedLayout } from "../presentation/layouts/ProtectedLayout";
import Login from "../pages/login";

// Páginas Públicas
import CatalogoPublico from "../pages/Catalogo";
import DetalhesVeiculo from "../pages/DetalhesVeiculo"; // Certifique-se que o caminho está correto

// Páginas Lojista
import Dashboard from "../pages/dashboard";
import Veiculos from "../pages/veiculo";
import CreateVeiculo from "../pages/veiculo/create";
import Usuario from "../pages/usuario";
import SejaParceiro from "../pages/SejaParceiro";
import CadastroParceiro from "../pages/CadastroParceiro";
import EsqueciSenha from "../pages/EsqueceuSenha";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CatalogoPublico />, // O que a PF vê ao entrar
  },
  {
    path: "/veiculo/:id", // Rota dinâmica para detalhes do veículo
    element: <DetalhesVeiculo />,
  },
  {
    path: "/login",
    element: <Login />, // Onde o Lojista faz login
  },
  {
    path: "/seja-parceiro",
    element: <SejaParceiro />,
  },  
  {
    path: "/cadastro-parceiro",
    element: <CadastroParceiro />,
  },
  {
    path: "/esqueci-minha-senha",
    element: <EsqueciSenha />,
  },      
  {
    element: <ProtectedLayout />, // Área Restrita CNPJ
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "veiculos",
        children: [
          { index: true, element: <Veiculos /> },
          { path: "novo", element: <CreateVeiculo /> },
        ],
      },
      { path: "usuarios", element: <Usuario /> },
    ],
  },
  { path: "*", element: <Navigate to="/" replace /> },
]);
