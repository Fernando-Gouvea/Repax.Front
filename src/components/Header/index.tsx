import styled from "styled-components";
import { UserCircle, LogIn, ChevronRight, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logo/logo-repax.png";

const HeaderContainer = styled.header`
  background-color: rgba(
    15,
    23,
    42,
    0.98
  ); /* Azul profundo com leve transparência */
  backdrop-filter: blur(8px);
  color: white;
  padding: 0 2rem;
  height: 65px; /* Altura reduzida para mais elegância */
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* Linha sutil em vez da borda grossa */

  @media (max-width: 1024px) {
    padding: 0 1rem;
    height: 60px;
  }
`;

const LogoWrapper = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;

  img {
    height: 35px; /* Logo mais discreta e proporcional */
    width: auto;
    transition: all 0.3s ease;
  }

  &:hover img {
    transform: translateY(-1px);
    filter: brightness(1.1);
  }
`;

const NavActions = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const NavLink = styled.a`
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 1.5rem;
  cursor: pointer;
  transition: color 0.2s;
  letter-spacing: 0.05em;

  &:hover {
    color: white;
  }

  @media (max-width: 900px) {
    display: none; /* Esconde links extras no mobile */
  }
`;

const Button = styled.button<{ $primary?: boolean }>`
  background: ${(props) => (props.$primary ? "#E31D24" : "transparent")};
  color: white;
  border: ${(props) =>
    props.$primary ? "none" : "1px solid rgba(255, 255, 255, 0.2)"};
  padding: 8px 16px; /* Botão mais fino */
  border-radius: 6px;
  font-size: 0.7rem; /* Fonte pequena e profissional */
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${(props) =>
      props.$primary ? "#C1181F" : "rgba(255, 255, 255, 0.1)"};
    border-color: ${(props) => (props.$primary ? "none" : "white")};
    transform: translateY(-1px);
  }

  svg {
    flex-shrink: 0;
  }

  span {
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

const MobileMenuBtn = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  cursor: pointer;

  @media (max-width: 650px) {
    display: block;
    margin-left: 10px;
  }
`;

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <div style={{ display: "flex", alignItems: "center" }}>
        <LogoWrapper onClick={() => navigate("/")}>
          <img src={logoImg} alt="Logo REPAX" />
        </LogoWrapper>
      </div>

      <NavActions>
        {/* Adicionei links de navegação para parecer um portal completo */}
        <NavLink onClick={() => navigate("/")}>Estoque</NavLink>
        <NavLink>Como Comprar</NavLink>

        <Button onClick={() => navigate("/login")}>
          <LogIn size={14} /> <span>Acessar</span>
        </Button>

        <Button $primary onClick={() => navigate("/seja-parceiro")}>
          <UserCircle size={14} /> <span>Seja Parceiro</span>
          <ChevronRight size={12} />
        </Button>

        <MobileMenuBtn>
          <Menu size={20} />
        </MobileMenuBtn>
      </NavActions>
    </HeaderContainer>
  );
};
