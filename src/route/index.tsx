// src/presentation/routes.tsx
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ProtectedLayout } from "../presentation/layouts/ProtectedLayout";
import { RoleGuard } from "../presentation/components/RoleGuard"; // Importe o Guard
import Login from "../pages/login";

// Páginas Públicas
import CatalogoPublico from "../pages/Catalogo";
import DetalhesVeiculo from "../pages/DetalhesVeiculo";
import SejaParceiro from "../pages/SejaParceiro";
import CadastroParceiro from "../pages/CadastroParceiro";
import EsqueciSenha from "../pages/EsqueceuSenha";

// Páginas Lojista
import { LojistaDashboard } from "../pages/Lojista/Dashboard";
import { MeusPedidos } from "../pages/Lojista/MeusPedidos";

// Páginas Fornecedor
import { GestaoFornecedor } from "../pages/Fornecedor/Gestao";
import { MeusAnunciosFornecedores } from "../pages/Fornecedor/MeusAnuncios";

// Páginas Administrativas/Gerais
import Usuario from "../pages/usuario";
import CriarVeiculo from "../pages/Fornecedor/CriarVeiculo";
import SecaoLogistica from "../pages/Fornecedor/Logistica";
import { ComprarVeiculos } from "../pages/Lojista/ComprarVeiculos";

export const router = createBrowserRouter([
  // --- ROTAS PÚBLICAS ---
  { path: "/", element: <CatalogoPublico /> },
  { path: "/veiculo/:id", element: <DetalhesVeiculo /> },
  { path: "/login", element: <Login /> },
  { path: "/seja-parceiro", element: <SejaParceiro /> },
  { path: "/cadastro-parceiro", element: <CadastroParceiro /> },
  { path: "/esqueci-minha-senha", element: <EsqueciSenha /> },

  // --- ÁREA RESTRITA PROTEGIDA ---
  {
    element: <ProtectedLayout />,
    children: [
      // --- CENÁRIO: LOJISTA (Protegido) ---
      {
        path: "dashboard",
        element: (
          <RoleGuard allowedRole="lojista">
            <LojistaDashboard />
          </RoleGuard>
        ),
      },
      {
        path: "meus-pedidos",
        element: (
          <RoleGuard allowedRole="lojista">
            <MeusPedidos />
          </RoleGuard>
        ),
      },
      {
        path: "comprar-veiculos",
        element: (
          <RoleGuard allowedRole="lojista">
            <ComprarVeiculos />
          </RoleGuard>
        ),
      },

      // --- CENÁRIO: FORNECEDOR (Protegido) ---
      {
        path: "gestao",
        element: (
          <RoleGuard allowedRole="fornecedor">
            <GestaoFornecedor />
          </RoleGuard>
        ),
      },
      {
        path: "logistica",
        element: (
          <RoleGuard allowedRole="fornecedor">
            <SecaoLogistica />
          </RoleGuard>
        ),
      },
      {
        path: "meus-anuncios",
        children: [
          {
            index: true,
            element: (
              <RoleGuard allowedRole="fornecedor">
                <MeusAnunciosFornecedores />
              </RoleGuard>
            ),
          },
          {
            path: "novo",
            element: (
              <RoleGuard allowedRole="fornecedor">
                <CriarVeiculo />
              </RoleGuard>
            ),
          },
        ],
      },

      // Rota Comum (ex: Perfil ou Usuários que ambos acessam)
      { path: "usuarios", element: <Usuario /> },
    ],
  },

  { path: "*", element: <Navigate to="/" replace /> },
]);
