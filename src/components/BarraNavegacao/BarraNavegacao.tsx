import { useNavigate, useLocation } from "react-router-dom";
import {
  Car,
  Users,
  PlusCircle,
  LayoutDashboard,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

import "./BarraNavegacao.css";
import { useAuth } from "../../contextos/ContextoAuth";

const itensMenu = [
  { rotulo: "Dashboard", caminho: "/dashboard", icone: LayoutDashboard },
  { rotulo: "Veículos", caminho: "/veiculos", icone: Car },
  { rotulo: "Novo Anúncio", caminho: "/veiculos/novo", icone: PlusCircle },
  { rotulo: "Usuários", caminho: "/usuarios", icone: Users },
];

export function BarraNavegacao() {
  const { usuario, sair } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuAberto, setMenuAberto] = useState(false);

  const handleSair = () => {
    sair();
    navigate("/");
  };

  return (
    <header className="header">
      <div className="container">
        <button className="logo" onClick={() => navigate("/dashboard")}>
          <Car size={28} color="hsl(28, 95%, 55%)" />
          <span className="logo-text">Repax</span>
        </button>

        <nav className="desktop-nav">
          {itensMenu.map((item) => {
            const Icone = item.icone;
            const ativo = location.pathname === item.caminho;

            return (
              <button
                key={item.caminho}
                className={`nav-button ${ativo ? "active" : ""}`}
                onClick={() => navigate(item.caminho)}
              >
                <Icone size={16} />
                {item.rotulo}
              </button>
            );
          })}
        </nav>

        <div className="desktop-right">
          <span className="user-name">
            Olá, <span>{usuario?.nome}</span>
          </span>

          <button className="logout-btn" onClick={handleSair}>
            <LogOut size={16} /> Sair
          </button>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuAberto && (
        <div className="mobile-menu">
          <nav className="mobile-nav">
            {itensMenu.map((item) => {
              const Icone = item.icone;
              return (
                <button
                  key={item.caminho}
                  className="mobile-nav-button"
                  onClick={() => {
                    navigate(item.caminho);
                    setMenuAberto(false);
                  }}
                >
                  <Icone size={16} /> {item.rotulo}
                </button>
              );
            })}

            <button
              className="mobile-nav-button logout-mobile"
              onClick={handleSair}
            >
              <LogOut size={16} /> Sair
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
