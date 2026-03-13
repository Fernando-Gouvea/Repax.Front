import styled from "styled-components";
import {
  ArrowLeft,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  Trophy,
  User,
  Mail,
  Phone,
  Building2,
  FileText,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const colors = {
  primary: "#E31D24",
  secondary: "#0056B3",
  dark: "#0F172A",
  textMuted: "#64748B",
  light: "#F8FAFC",
  border: "#E2E8F0",
};

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  background: white;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

// --- LADO ESQUERDO: INFOS E BRANDING ---
const InfoSide = styled.div`
  flex: 0.8;
  background: ${colors.dark};
  color: white;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000")
      center/cover;
    opacity: 0.15;
    filter: grayscale(100%);
  }

  .content {
    position: relative;
    z-index: 2;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2rem;
    line-height: 1.2;
    span {
      color: ${colors.primary};
    }
  }

  @media (max-width: 900px) {
    padding: 3rem 5%;
    display: none; /* Esconde o lado das infos no mobile para focar no form */
  }
`;

const BenefitItem = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 2rem;

  .icon-box {
    width: 48px;
    height: 48px;
    background: rgba(227, 29, 36, 0.1);
    border: 1px solid rgba(227, 29, 36, 0.3);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primary};
    flex-shrink: 0;
  }

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }

  p {
    font-size: 0.9rem;
    opacity: 0.7;
    line-height: 1.5;
  }
`;

// --- LADO DIREITO: FORMULÁRIO ---
const FormSide = styled.div`
  flex: 1;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${colors.light};

  @media (max-width: 600px) {
    padding: 2rem 5%;
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 2rem;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 550px;
  margin: 0 auto;

  .back-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.textMuted};
    cursor: pointer;
    font-weight: 600;
    font-size: 0.85rem;
    margin-bottom: 2rem;
    transition: color 0.2s;
    &:hover {
      color: ${colors.primary};
    }
  }

  header {
    margin-bottom: 2.5rem;
    h1 {
      font-size: 1.8rem;
      font-weight: 900;
      color: ${colors.dark};
    }
    p {
      color: ${colors.textMuted};
      margin-top: 0.5rem;
    }
  }
`;

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${colors.dark};
    text-transform: uppercase;
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
      padding: 0.8rem 1rem 0.8rem 3rem;
      border-radius: 0.8rem;
      border: 1px solid ${colors.border};
      background: ${colors.light};
      font-size: 1rem;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border-color: ${colors.primary};
        background: white;
        box-shadow: 0 0 0 4px rgba(227, 29, 36, 0.1);
      }
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  &:hover {
    filter: brightness(1.1);
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(227, 29, 36, 0.2);
  }
`;

export default function CadastroParceiro() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lógica de envio aqui
    alert("Solicitação enviada! Nossa equipe entrará em contato em breve.");
    navigate("/");
  };

  return (
    <PageContainer>
      <InfoSide>
        <div className="content">
          <h2>
            Seja um <span>Parceiro Repax</span> e domine seu mercado.
          </h2>

          <BenefitItem>
            <div className="icon-box">
              <Rocket size={24} />
            </div>
            <div>
              <h4>Giro de Estoque Acelerado</h4>
              <p>
                Nossa plataforma é otimizada para conectar seu carro ao
                comprador certo em tempo recorde.
              </p>
            </div>
          </BenefitItem>

          <BenefitItem>
            <div className="icon-box">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h4>Segurança e Credibilidade</h4>
              <p>
                Trabalhamos apenas com lojistas verificados, garantindo um
                ambiente de negócios saudável.
              </p>
            </div>
          </BenefitItem>

          <BenefitItem>
            <div className="icon-box">
              <Trophy size={24} />
            </div>
            <div>
              <h4>Tecnologia de Ponta</h4>
              <p>
                Painéis exclusivos de gestão para você acompanhar cada
                visualização e cada lead gerado.
              </p>
            </div>
          </BenefitItem>
        </div>
      </InfoSide>

      <FormSide>
        <FormCard>
          <div className="back-btn" onClick={() => navigate("/seja-parceiro")}>
            <ArrowLeft size={16} /> VOLTAR
          </div>

          <header>
            <h1>Vamos começar?</h1>
            <p>
              Preencha os dados abaixo e nossa equipe comercial entrará em
              contato para liberar seu acesso.
            </p>
          </header>

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <label>Nome Completo</label>
              <div className="input-wrapper">
                <User size={18} />
                <input type="text" placeholder="Nome do responsável" required />
              </div>
            </InputGroup>

            <InputGroup>
              <label>E-mail Corporativo</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="seuemail@empresa.com"
                  required
                />
              </div>
            </InputGroup>

            <InputGroup>
              <label>Telefone / WhatsApp</label>
              <div className="input-wrapper">
                <Phone size={18} />
                <input type="tel" placeholder="(00) 00000-0000" required />
              </div>
            </InputGroup>

            <InputGroup>
              <label>Nome da Loja</label>
              <div className="input-wrapper">
                <Building2 size={18} />
                <input type="text" placeholder="Ex: Repax Veículos" required />
              </div>
            </InputGroup>

            <InputGroup>
              <label>CNPJ</label>
              <div className="input-wrapper">
                <FileText size={18} />
                <input type="text" placeholder="00.000.000/0000-00" required />
              </div>
            </InputGroup>

            <SubmitButton type="submit">
              SOLICITAR PARCERIA <CheckCircle2 size={20} />
            </SubmitButton>
          </form>

          <p
            style={{
              fontSize: "0.75rem",
              color: colors.textMuted,
              textAlign: "center",
              marginTop: "2rem",
              lineHeight: 1.4,
            }}
          >
            Ao solicitar, você concorda com nossos termos de uso e política de
            privacidade. A liberação do estoque está sujeita a análise de
            crédito e verificação de CNPJ.
          </p>
        </FormCard>
      </FormSide>
    </PageContainer>
  );
}
