import { useState } from "react";
import styled from "styled-components";
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  ShieldCheck,
  Building2 
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
  background: white;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

// --- LADO VISUAL (BRANDING) ---
const VisualSide = styled.div`
  flex: 1.2;
  background: ${colors.dark};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10%;
  color: white;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000') center/cover;
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
      span { color: ${colors.primary}; }
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

// --- LADO DO FORMULÁRIO ---
const FormSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  background: ${colors.light};

  @media (max-width: 600px) {
    padding: 2rem 5%;
  }
`;

const LoginCard = styled.div`
  width: 100%;
  max-width: 420px;

  header {
    margin-bottom: 2.5rem;
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

const InputGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    font-size: 0.75rem;
    font-weight: 800;
    color: ${colors.dark};
    text-transform: uppercase;
    margin-bottom: 0.6rem;
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
      border-radius: 0.6rem;
      border: 1px solid ${colors.border};
      background: white;
      font-size: 1rem;
      outline: none;
      transition: all 0.2s;

      &:focus {
        border-color: ${colors.primary};
        box-shadow: 0 0 0 4px rgba(227, 29, 36, 0.08);
      }
    }

    .eye-btn {
      position: absolute;
      right: 1rem;
      background: none;
      border: none;
      color: ${colors.textMuted};
      cursor: pointer;
      display: flex;
      align-items: center;
      &:hover { color: ${colors.dark}; }
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
    &:hover { text-decoration: underline; }
  }

  .remember {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${colors.textMuted};
    font-weight: 600;
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background: ${colors.dark};
  color: white;
  border: none;
  padding: 1.2rem;
  border-radius: 0.6rem;
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s;

  &:hover {
    background: #000;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
`;

const FooterAviso = styled.div`
  margin-top: 3rem;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${colors.border};

  p {
    color: ${colors.textMuted};
    font-size: 0.9rem;
    font-weight: 500;
  }

  button {
    background: none;
    border: none;
    color: ${colors.primary};
    font-weight: 800;
    cursor: pointer;
    margin-left: 0.5rem;
    text-transform: uppercase;
    &:hover { text-decoration: underline; }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login
    navigate("/dashboard");
  };

  return (
    <PageContainer>
      <VisualSide>
        <div className="content">
          <div className="logo-badge">REPAX</div>
          <h2>O motor do seu <span>negócio</span> automotivo.</h2>
          <p>
            Gerencie seu estoque, acompanhe seus leads e venda veículos 
            para todo o Brasil em uma única plataforma.
          </p>
          
          <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', opacity: 0.6 }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={20} /> <span>100% Seguro</span>
             </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Building2 size={20} /> <span>+500 Lojas</span>
             </div>
          </div>
        </div>
      </VisualSide>

      <FormSide>
        <LoginCard>
          <header>
            <h1>Painel do Lojista</h1>
            <p>Acesse sua conta para gerenciar seu estoque.</p>
          </header>

          <form onSubmit={handleLogin}>
            <InputGroup>
              <label>E-mail de Acesso</label>
              <div className="input-wrapper">
                <Mail size={18} />
                <input type="email" placeholder="nome@loja.com.br" required />
              </div>
            </InputGroup>

            <InputGroup>
              <label>Senha</label>
              <div className="input-wrapper">
                <Lock size={18} />
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
                <input type="checkbox" style={{ accentColor: colors.primary }} />
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
              Ainda não é parceiro? 
              <button onClick={() => navigate("/seja-parceiro")}>Solicitar Acesso</button>
            </p>
          </FooterAviso>
        </LoginCard>
      </FormSide>
    </PageContainer>
  );
}

// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Eye, EyeOff, ArrowRight, AlertCircle } from "lucide-react";
// import styled from "styled-components";
// import { useAuth } from "../../contextos/ContextoAuth";

// // Imports de assets (ajuste os caminhos conforme sua estrutura)
// import logoRepax from "../../assets/logo/logo-repax.png";
// import heroShowroom from "../../assets/hero-showroom.jpg";

// const colors = {
//   primary: "#E31D24",
//   primaryHover: "#C1181F",
//   secondary: "#0056B3",
//   dark: "#1E293B", // Azul Antracite moderno
//   muted: "#64748B",
//   white: "#FFFFFF",
//   border: "#E2E8F0",
//   bgLight: "#F8F9FA",
// };

// const PageWrapper = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   overflow: hidden;
//   background-color: ${colors.white};
// `;

// /* --- LADO ESQUERDO (HERO) --- */
// const HeroSide = styled.div`
//   display: none;
//   position: relative;
//   height: 100%;
//   @media (min-width: 1024px) {
//     display: flex;
//     width: 60%;
//   }
// `;

// const HeroImage = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

// const HeroOverlay = styled.div`
//   position: absolute;
//   inset: 0;
//   background: linear-gradient(
//     135deg,
//     rgba(30, 41, 59, 0.95) 0%,
//     /* Dark Blue */ rgba(227, 29, 36, 0.4) 100% /* Red tint */
//   );
// `;

// const HeroContent = styled.div`
//   position: absolute;
//   bottom: 12%;
//   left: 10%;
//   right: 10%;
//   z-index: 2;
// `;

// const HeroTitle = styled.h1`
//   font-size: 3rem;
//   font-weight: 900;
//   color: ${colors.white};
//   text-transform: uppercase;
//   margin: 0;
//   letter-spacing: -1px;

//   span {
//     color: ${colors.primary};
//   }
// `;

// const HeroDesc = styled.p`
//   color: rgba(255, 255, 255, 0.9);
//   font-size: 1.25rem;
//   max-width: 35rem;
//   line-height: 1.6;
//   margin-top: 1rem;
//   font-weight: 300;
// `;

// /* --- LADO DIREITO (FORMULÁRIO) --- */
// const FormSide = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 2rem;
//   background: ${colors.white};
//   @media (min-width: 1024px) {
//     width: 40%;
//   }
// `;

// const FormContainer = styled.div`
//   width: 100%;
//   max-width: 26rem;
//   display: flex;
//   flex-direction: column;
// `;

// const FormLogo = styled.img`
//   width: 180px;
//   margin-bottom: 2.5rem;
//   align-self: flex-start; /* Alinhado à esquerda para look moderno */
// `;

// const WelcomeHeader = styled.div`
//   margin-bottom: 2rem;
// `;

// const WelcomeTitle = styled.h2`
//   font-size: 1.8rem;
//   font-weight: 800;
//   color: ${colors.dark};
//   margin-bottom: 0.5rem;
//   letter-spacing: -0.5px;
// `;

// const WelcomeDesc = styled.p`
//   font-size: 1rem;
//   color: ${colors.muted};
// `;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 1.2rem;
// `;

// const FieldGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
// `;

// const StyledLabel = styled.label`
//   font-size: 0.75rem;
//   font-weight: 800;
//   color: ${colors.dark};
//   text-transform: uppercase;
//   letter-spacing: 0.5px;
// `;

// const StyledInput = styled.input`
//   width: 100%;
//   height: 3.5rem;
//   border-radius: 10px;
//   border: 1px solid ${colors.border};
//   padding: 0 1.2rem;
//   font-size: 1rem;
//   background: ${colors.bgLight};
//   transition: all 0.2s ease;

//   &:focus {
//     outline: none;
//     border-color: ${colors.secondary};
//     background: white;
//     box-shadow: 0 0 0 4px rgba(0, 86, 179, 0.05);
//   }
// `;

// const PasswordWrapper = styled.div`
//   position: relative;
// `;

// const TogglePassword = styled.button`
//   position: absolute;
//   right: 1.2rem;
//   top: 50%;
//   transform: translateY(-50%);
//   color: ${colors.muted};
//   background: none;
//   border: none;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   &:hover {
//     color: ${colors.dark};
//   }
// `;

// const HelperRow = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

// const TextLink = styled(Link)`
//   font-size: 0.85rem;
//   color: ${colors.secondary};
//   font-weight: 600;
//   text-decoration: none;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   height: 3.5rem;
//   margin-top: 1rem;
//   border-radius: 10px;
//   background: ${colors.primary};
//   color: white;
//   border: none;
//   font-weight: 700;
//   font-size: 1.1rem;
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.8rem;
//   transition: all 0.3s ease;

//   &:hover {
//     background: ${colors.primaryHover};
//     transform: translateY(-2px);
//     box-shadow: 0 8px 20px rgba(227, 29, 36, 0.25);
//   }

//   &:active {
//     transform: translateY(0);
//   }
// `;

// const ErrorMsg = styled.div`
//   background: #fef2f2;
//   color: ${colors.primary};
//   padding: 1rem;
//   border-radius: 8px;
//   font-size: 0.85rem;
//   font-weight: 600;
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   border: 1px solid rgba(227, 29, 36, 0.1);
// `;

// const CreateAccountSection = styled.div`
//   margin-top: 2.5rem;
//   text-align: center;
//   padding-top: 1.5rem;
//   border-top: 1px solid ${colors.border};

//   p {
//     font-size: 0.9rem;
//     color: ${colors.muted};
//     margin-bottom: 0.5rem;
//   }
// `;

// export default function PaginaLogin() {
//   const [email, setEmail] = useState("");
//   const [senha, setSenha] = useState("");
//   const [mostrarSenha, setMostrarSenha] = useState(false);
//   const [erro, setErro] = useState("");
//   const { entrar } = useAuth();
//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setErro("");

//     if (!email || !senha) {
//       setErro("Por favor, preencha todos os campos.");
//       return;
//     }

//     const sucesso = entrar(email, senha);
//     if (sucesso) {
//       navigate("/dashboard");
//     } else {
//       setErro("E-mail ou senha incorretos. Tente novamente.");
//     }
//   };

//   return (
//     <PageWrapper>
//       <HeroSide>
//         <HeroImage src={heroShowroom} alt="Showroom Repax" />
//         <HeroOverlay />
//         <HeroContent>
//           <HeroTitle>
//             Repax <span>Automotiva</span>
//           </HeroTitle>
//           <HeroDesc>
//             A plataforma líder em repasse de veículos. Conectamos
//             concessionárias a lojistas com transparência, velocidade e segurança
//             jurídica.
//           </HeroDesc>
//         </HeroContent>
//       </HeroSide>

//       <FormSide>
//         <FormContainer>
//           <FormLogo src={logoRepax} alt="Repax Logo" />

//           <WelcomeHeader>
//             <WelcomeTitle>Bem-vindo de volta</WelcomeTitle>
//             <WelcomeDesc>
//               Acesse sua conta para gerenciar seus repasses.
//             </WelcomeDesc>
//           </WelcomeHeader>

//           <Form onSubmit={handleSubmit}>
//             <FieldGroup>
//               <StyledLabel htmlFor="email">E-mail Corporativo</StyledLabel>
//               <StyledInput
//                 id="email"
//                 type="email"
//                 placeholder="seu@email.com.br"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </FieldGroup>

//             <FieldGroup>
//               <StyledLabel htmlFor="senha">Senha de Acesso</StyledLabel>
//               <PasswordWrapper>
//                 <StyledInput
//                   id="senha"
//                   type={mostrarSenha ? "text" : "password"}
//                   placeholder="Sua senha secreta"
//                   value={senha}
//                   onChange={(e) => setSenha(e.target.value)}
//                 />
//                 <TogglePassword
//                   type="button"
//                   onClick={() => setMostrarSenha(!mostrarSenha)}
//                   aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
//                 >
//                   {mostrarSenha ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </TogglePassword>
//               </PasswordWrapper>
//             </FieldGroup>

//             <HelperRow>
//               <TextLink to="/esqueci-minha-senha">Esqueceu sua senha?</TextLink>
//             </HelperRow>

//             {erro && (
//               <ErrorMsg>
//                 <AlertCircle size={18} />
//                 {erro}
//               </ErrorMsg>
//             )}

//             <SubmitButton type="submit">
//               Entrar na Plataforma <ArrowRight size={20} />
//             </SubmitButton>
//           </Form>

//           <CreateAccountSection>
//             <p>Ainda não é um parceiro?</p>
//             <TextLink
//               to="/cadastro"
//               style={{
//                 fontSize: "1rem",
//                 color: colors.primary,
//                 fontWeight: "800",
//               }}
//             >
//               Solicitar Acesso Agora
//             </TextLink>
//           </CreateAccountSection>
//         </FormContainer>
//       </FormSide>
//     </PageWrapper>
//   );
// }
