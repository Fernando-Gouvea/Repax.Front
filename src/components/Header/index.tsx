import styled, { keyframes } from "styled-components";
import {
  UserCircle,
  LogIn,
  ChevronRight,
  LayoutDashboard,
  Car,
  Truck,
  History,
  LogOut,
  PackageSearch,
  ShieldCheck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo/logo-repax.png";

// --- ANIMAÇÕES ---
const shine = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// --- ESTILIZAÇÃO ---
const HeaderContainer = styled.header`
  background-color: #0f172a;
  color: white;
  padding: 0 1.5rem;
  height: 65px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  img {
    height: 28px;
    width: auto;
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const NavLink = styled.a`
  color: #94a3b8;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-right: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
  &:hover {
    color: white;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 1.2rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  margin-left: 0.5rem;

  .user-data {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .name {
    font-size: 0.7rem;
    font-weight: 800;
    color: white;
    text-transform: uppercase;
    line-height: 1;
    margin-bottom: 3px;
  }
`;

const EliteBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(90deg, #ca8a04, #facc15, #ca8a04);
  background-size: 200% auto;
  animation: ${shine} 3s linear infinite;
  padding: 2px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.2);

  span {
    color: #0f172a;
    font-size: 0.55rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }
  svg {
    color: #0f172a;
  }
`;

const Avatar = styled.div<{ $isPremium?: boolean }>`
  width: 34px;
  height: 34px;
  background: ${(props) =>
    props.$isPremium ? "linear-gradient(135deg, #e31d24, #9f1239)" : "#334155"};
  border: ${(props) =>
    props.$isPremium ? "2px solid #facc15" : "1px solid rgba(255,255,255,0.1)"};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  font-size: 0.75rem;
  color: white;
`;

const LogoutButton = styled.button`
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #64748b;
  padding: 7px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 8px;
  transition: all 0.2s;
  &:hover {
    background: #e31d24;
    color: white;
    border-color: #e31d24;
  }
`;

const ActionButton = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "#E31D24" : "transparent")};
  color: white;
  border: ${(props) =>
    props.$primary ? "none" : "1px solid rgba(255, 255, 255, 0.2)"};
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

// --- COMPONENTE ---
export const Header = () => {
  const navigate = useNavigate();
  const userType = localStorage.getItem("@Repax:userType");
  const userEmail = localStorage.getItem("@Repax:userEmail") || "Usuário";
  const userName = userEmail.split("@")[0].toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("@Repax:userType");
    localStorage.removeItem("@Repax:userEmail");
    navigate("/login", { replace: true });
  };

  const renderNavMenu = () => {
    if (userType === "lojista") {
      return (
        <>
          <NavLink onClick={() => navigate("/dashboard")}>
            <LayoutDashboard size={13} /> Dashboard
          </NavLink>
          <NavLink onClick={() => navigate("/comprar-veiculos")}>
            <Car size={13} /> Comprar
          </NavLink>
          <NavLink onClick={() => navigate("/meus-pedidos")}>
            <History size={13} /> Pedidos
          </NavLink>

          <UserProfile>
            <div className="user-data">
              <span className="name">{userName}</span>
              <EliteBadge>
                <ShieldCheck size={10} strokeWidth={3} />
                <span>Lojista Premium</span>
              </EliteBadge>
            </div>
            <Avatar $isPremium={true}>{userName.substring(0, 2)}</Avatar>
          </UserProfile>
          <LogoutButton onClick={handleLogout} title="Sair">
            <LogOut size={14} />
          </LogoutButton>
        </>
      );
    }

    if (userType === "fornecedor") {
      return (
        <>
          <NavLink onClick={() => navigate("/gestao")}>
            <LayoutDashboard size={13} /> Gestão
          </NavLink>
          <NavLink onClick={() => navigate("/meus-anuncios")}>
            <PackageSearch size={13} /> Anúncios
          </NavLink>
          <NavLink onClick={() => navigate("/logistica")}>
            <Truck size={13} /> Logística
          </NavLink>

          <UserProfile>
            <div className="user-data">
              <span className="name">{userName}</span>
              <EliteBadge>
                <ShieldCheck size={10} strokeWidth={3} />
                <span>Fornecedor Premium</span>
              </EliteBadge>
            </div>
            <Avatar $isPremium={true}>{userName.substring(0, 2)}</Avatar>
          </UserProfile>
          <LogoutButton onClick={handleLogout} title="Sair">
            <LogOut size={14} />
          </LogoutButton>
        </>
      );
    }

    return (
      <>
        <NavLink onClick={() => navigate("/")}>Estoque</NavLink>
        <ActionButton onClick={() => navigate("/login")}>
          <LogIn size={14} /> Acessar
        </ActionButton>
        <ActionButton $primary onClick={() => navigate("/seja-parceiro")}>
          <UserCircle size={14} /> Parceiro <ChevronRight size={12} />
        </ActionButton>
      </>
    );
  };

  return (
    <HeaderContainer>
      <LogoWrapper onClick={() => navigate("/")}>
        <img src={logoImg} alt="REPAX" />
      </LogoWrapper>
      <NavActions>{renderNavMenu()}</NavActions>
    </HeaderContainer>
  );
};
