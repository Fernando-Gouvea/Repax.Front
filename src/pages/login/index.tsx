import { useState } from "react";
import styled from "styled-components";
import {
  ArrowRight,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  Building2,
  Store,
  Truck,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const colors = {
  primary: "#E31D24",
  dark: "#0F172A",
  textMuted: "#64748B",
  light: "#F8FAFC",
  border: "#E2E8F0",
};

const PageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: white;
  overflow: hidden;

  @media (max-width: 900px) {
    flex-direction: column;
    overflow-y: auto;
  }
`;

const VisualSide = styled.div`
  flex: 1.2;
  background: ${colors.dark};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  color: white;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000")
      center/cover;
    opacity: 0.2;
    filter: grayscale(100%);
  }

  .content {
    position: relative;
    z-index: 2;
    .logo-badge {
      display: inline-block;
      background: ${colors.primary};
      padding: 0.5rem 1.5rem;
      font-weight: 900;
      font-size: 1.5rem;
      margin-bottom: 2rem;
      border-radius: 0.2rem;
    }
    h2 {
      font-size: clamp(2rem, 4vw, 3.5rem);
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      span {
        color: ${colors.primary};
      }
    }
    p {
      font-size: 1.2rem;
      opacity: 0.8;
      max-width: 400px;
      line-height: 1.6;
    }
  }

  @media (max-width: 900px) {
    padding: 3rem 5%;
    flex: none;
    min-height: 300px;
  }
`;

const FormSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: ${colors.light};
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 420px;
  header {
    margin-bottom: 2rem;
    h1 {
      font-size: 2rem;
      font-weight: 900;
      color: ${colors.dark};
      text-transform: uppercase;
    }
    p {
      color: ${colors.textMuted};
      margin-top: 0.5rem;
      font-weight: 500;
    }
  }
`;

const UserTypeToggle = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
  button {
    flex: 1;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid ${colors.border};
    background: white;
    font-weight: 700;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.2s;
    color: ${colors.textMuted};
    &.active {
      border-color: ${colors.primary};
      color: ${colors.primary};
      background: rgba(227, 29, 36, 0.05);
    }
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;
  label {
    display: block;
    font-size: 0.75rem;
    font-weight: 800;
    color: ${colors.dark};
    text-transform: uppercase;
    margin-bottom: 0.6rem;
  }
  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    .main-icon {
      position: absolute;
      left: 1rem;
      color: ${colors.textMuted};
      z-index: 5;
    }
    input {
      width: 100%;
      padding: 1rem 3.5rem 1rem 3rem;
      border-radius: 0.8rem;
      border: 1px solid ${colors.border};
      outline: none;
      &:focus {
        border-color: ${colors.primary};
      }
    }
    .eye-btn {
      position: absolute;
      right: 0.75rem;
      background: none;
      border: none;
      color: ${colors.textMuted};
      cursor: pointer;
    }
  }
`;

const Utils = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  font-size: 0.85rem;
  .forgot-link {
    color: ${colors.primary};
    font-weight: 700;
    cursor: pointer;
  }
  .remember {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.textMuted};
    font-weight: 600;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: ${colors.dark};
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 0.6rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const FooterAviso = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${colors.border};
  p {
    color: ${colors.textMuted};
    font-size: 0.9rem;
  }
  button {
    background: none;
    border: none;
    color: ${colors.primary};
    font-weight: 800;
    cursor: pointer;
    text-transform: uppercase;
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<"lojista" | "fornecedor">("lojista");
  const [email, setEmail] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("@Repax:userType", userType);
    localStorage.setItem("@Repax:userEmail", email);
    navigate("/dashboard", { state: { type: userType } });
  };

  return (
    <PageContainer>
      <VisualSide>
        <div className="content">
          <div className="logo-badge">REPAX</div>
          <h2>
            O motor do seu <span>negócio</span> automotivo.
          </h2>
          <p>Gerencie seu estoque e venda veículos em uma única plataforma.</p>
          <div
            style={{
              marginTop: "3rem",
              display: "flex",
              gap: "2rem",
              opacity: 0.6,
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <ShieldCheck size={20} /> <span>100% Seguro</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <Building2 size={20} /> <span>+500 Lojas</span>
            </div>
          </div>
        </div>
      </VisualSide>

      <FormSide>
        <LoginCard>
          <header>
            <h1>Acesso ao Painel</h1>
            <p>Selecione seu perfil para continuar.</p>
          </header>

          <UserTypeToggle>
            <button
              className={userType === "lojista" ? "active" : ""}
              onClick={() => setUserType("lojista")}
            >
              <Store size={18} /> LOJISTA
            </button>
            <button
              className={userType === "fornecedor" ? "active" : ""}
              onClick={() => setUserType("fornecedor")}
            >
              <Truck size={18} /> FORNECEDOR
            </button>
          </UserTypeToggle>

          <form onSubmit={handleLogin}>
            <InputGroup>
              <label>E-mail de Acesso</label>
              <div className="input-wrapper">
                <Mail className="main-icon" size={18} />
                <input
                  type="email"
                  placeholder="nome@empresa.com.br"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </InputGroup>

            <InputGroup>
              <label>Senha</label>
              <div className="input-wrapper">
                <Lock className="main-icon" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Digite sua senha"
                  required
                />
                <button
                  type="button"
                  className="eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </InputGroup>

            <Utils>
              <label className="remember">
                <input
                  type="checkbox"
                  style={{ accentColor: colors.primary }}
                />{" "}
                Lembrar de mim
              </label>
              <span
                className="forgot-link"
                onClick={() => navigate("/esqueci-minha-senha")}
              >
                Esqueceu a senha?
              </span>
            </Utils>

            <LoginButton type="submit">
              Entrar no Painel <ArrowRight size={20} />
            </LoginButton>
          </form>

          <FooterAviso>
            <p>
              Ainda não é parceiro?{" "}
              <button type="button" onClick={() => navigate("/seja-parceiro")}>
                Solicitar Acesso
              </button>
            </p>
          </FooterAviso>
        </LoginCard>
      </FormSide>
    </PageContainer>
  );
}
