import { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  ArrowLeft,
  Mail,
  KeyRound,
  CheckCircle2,
  ShieldCheck,
  Loader2,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const colors = {
  primary: "#E31D24",
  dark: "#0F172A",
  textMuted: "#64748B",
  light: "#F8FAFC",
  border: "#E2E8F0",
  success: "#10B981",
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #020617;
  background-image:
    radial-gradient(at 0% 0%, rgba(227, 29, 36, 0.15) 0, transparent 40%),
    radial-gradient(at 100% 100%, rgba(15, 23, 42, 1) 0, transparent 50%);
  position: relative;
  padding: 1.5rem;
`;

const BackToHome = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: ${colors.primary};
  }
`;

const Card = styled.div`
  background: white;
  width: 100%;
  max-width: 400px;
  border-radius: 24px;
  position: relative;
  z-index: 2;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  animation: ${fadeIn} 0.5s ease-out;
  overflow: hidden;
`;

const TopDecoration = styled.div`
  height: 6px;
  width: 100%;
  background: linear-gradient(90deg, ${colors.primary}, #991b1b);
`;

const CardContent = styled.div`
  padding: 3rem 2.5rem;
  text-align: center;

  .icon-container {
    width: 56px;
    height: 56px;
    background: #fff1f2;
    color: ${colors.primary};
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    box-shadow: 0 10px 15px -3px rgba(227, 29, 36, 0.1);
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 800;
    color: ${colors.dark};
    letter-spacing: -0.025em;
    margin-bottom: 0.75rem;
  }

  p {
    color: ${colors.textMuted};
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 2rem;
  }
`;

const InputGroup = styled.div`
  text-align: left;
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    color: ${colors.dark};
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;
  }

  .input-wrapper {
    position: relative;

    svg {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: ${colors.textMuted};
    }

    input {
      width: 100%;
      padding: 0.875rem 1rem 0.875rem 2.75rem;
      border-radius: 12px;
      border: 1.5px solid ${colors.border};
      background: ${colors.light};
      font-size: 0.95rem;
      transition: all 0.2s;

      &:focus {
        background: white;
        border-color: ${colors.primary};
        box-shadow: 0 0 0 4px rgba(227, 29, 36, 0.08);
        outline: none;
      }
    }
  }
`;

const MainButton = styled.button`
  width: 100%;
  background: ${colors.dark};
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #000;
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SecondaryAction = styled.button`
  background: none;
  border: none;
  margin-top: 1.5rem;
  color: ${colors.textMuted};
  font-weight: 600;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  width: 100%;
  transition: color 0.2s;

  &:hover {
    color: ${colors.primary};
  }
`;

const SuccessState = styled.div`
  animation: ${fadeIn} 0.4s ease-out;

  .success-icon {
    width: 64px;
    height: 64px;
    background: #ecfdf5;
    color: ${colors.success};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
  }
`;

export default function EsqueciSenha() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulação de delay de rede
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <PageContainer>
      {/* Botão de Voltar para a Home/Login no topo */}
      <BackToHome onClick={() => navigate("/")}>
        <ChevronLeft size={16} /> Voltar para Início
      </BackToHome>

      <Card>
        <TopDecoration />
        <CardContent>
          {!submitted ? (
            <>
              <div className="icon-container">
                <KeyRound size={28} />
              </div>
              <h1>Recuperar acesso</h1>
              <p>
                Insira seu e-mail abaixo. Se você tiver uma conta, enviaremos um
                link para redefinir sua senha.
              </p>

              <form onSubmit={handleSubmit}>
                <InputGroup>
                  <label>E-mail da sua conta</label>
                  <div className="input-wrapper">
                    <Mail size={18} />
                    <input
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </InputGroup>

                <MainButton type="submit" disabled={loading}>
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <>
                      Enviar instruções <ShieldCheck size={18} />
                    </>
                  )}
                </MainButton>
              </form>

              <SecondaryAction onClick={() => navigate("/login")}>
                <ArrowLeft size={16} /> Voltar para o Login
              </SecondaryAction>
            </>
          ) : (
            <SuccessState>
              <div className="success-icon">
                <CheckCircle2 size={32} />
              </div>
              <h1>E-mail enviado!</h1>
              <p>
                Verifique a caixa de entrada de <strong>{email}</strong> e siga
                as instruções para recuperar sua senha.
              </p>

              <MainButton onClick={() => navigate("/login")}>
                Ir para o Login
              </MainButton>

              <SecondaryAction onClick={() => setSubmitted(false)}>
                Tentar com outro e-mail
              </SecondaryAction>
            </SuccessState>
          )}
        </CardContent>
      </Card>
    </PageContainer>
  );
}
