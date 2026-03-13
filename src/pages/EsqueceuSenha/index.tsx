import { useState } from "react";
import styled from "styled-components";
import {
  ArrowLeft,
  Mail,
  KeyRound,
  CheckCircle2,
  ShieldAlert,
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
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.dark}; /* Fundo escuro para alinhar com o branding Repax */
  position: relative;
  overflow: hidden;
  padding: 2rem;

  /* Detalhe estético de fundo para parecer portal automotivo */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000")
      center/cover;
    opacity: 0.1;
    filter: grayscale(100%);
  }
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  border-radius: 1.5rem;
  overflow: hidden;
  position: relative;
  z-index: 2;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

const CardHeader = styled.div`
  background: ${colors.primary};
  padding: 3rem 2rem;
  text-align: center;
  color: white;

  .logo-text {
    font-size: 2rem;
    font-weight: 900;
    letter-spacing: -1px;
    margin-bottom: 0.5rem;
    display: block;
  }

  .icon-wrapper {
    background: rgba(255, 255, 255, 0.2);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem auto 0;
  }
`;

const Content = styled.div`
  padding: 3rem 2.5rem;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
    color: ${colors.dark};
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.textMuted};
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.75rem;
    font-weight: 800;
    color: ${colors.dark};
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 0.5px;
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    svg {
      position: absolute;
      left: 1rem;
      color: ${colors.textMuted};
    }

    input {
      width: 100%;
      padding: 1rem 1rem 1rem 3rem;
      border-radius: 0.5rem;
      border: 1px solid ${colors.border};
      background: ${colors.light};
      font-size: 1rem;
      font-weight: 500;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border-color: ${colors.primary};
        box-shadow: 0 0 0 3px rgba(227, 29, 36, 0.1);
      }
    }
  }
`;

const ResetButton = styled.button`
  width: 100%;
  background: ${colors.dark}; /* Botão escuro para contraste premium */
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: all 0.3s;

  &:hover {
    background: #000;
    transform: translateY(-2px);
  }
`;

const BackLink = styled.button`
  background: none;
  border: none;
  margin-top: 2rem;
  color: ${colors.textMuted};
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;

  &:hover {
    color: ${colors.primary};
  }
`;

export default function EsqueciSenha() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <PageContainer>
        <Card>
          <CardHeader>
            <span className="logo-text">REPAX</span>
            <div className="icon-wrapper">
              <CheckCircle2 size={32} />
            </div>
          </CardHeader>
          <Content>
            <h1>Verifique seu e-mail</h1>
            <p>
              Instruções de recuperação enviadas para <strong>{email}</strong>.
              Geralmente chega em menos de 2 minutos.
            </p>
            <ResetButton onClick={() => navigate("/login")}>
              IR PARA O LOGIN
            </ResetButton>
          </Content>
        </Card>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Card>
        <CardHeader>
          <span className="logo-text">REPAX</span>
          <div className="icon-wrapper">
            <KeyRound size={32} />
          </div>
        </CardHeader>

        <Content>
          <h1>Recuperar Senha</h1>
          <p>
            Digite o e-mail da sua loja. Enviaremos um link de segurança para
            você redefinir sua senha de parceiro.
          </p>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <label>E-mail da Conta</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="exemplo@loja.com.br"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </InputGroup>

            <ResetButton type="submit">
              RECUPERAR ACESSO <ShieldAlert size={18} color={colors.primary} />
            </ResetButton>
          </form>

          <BackLink onClick={() => navigate("/login")}>
            <ArrowLeft size={16} /> VOLTAR PARA O LOGIN
          </BackLink>
        </Content>
      </Card>
    </PageContainer>
  );
}
