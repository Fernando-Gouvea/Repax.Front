import styled from "styled-components";
import {
  CheckCircle2,
  Users,
  Zap,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Store,
} from "lucide-react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const colors = {
  primary: "#E31D24",
  dark: "#0F172A",
  textMuted: "#64748B",
  light: "#F8FAFC",
  gold: "#F59E0B",
};

const Page = styled.div`
  background: white;
  min-height: 100vh;
`;

// --- SEÇÃO HERO ---
const Hero = styled.section`
  padding: clamp(4rem, 10vh, 8rem) 5%;
  background: radial-gradient(circle at top right, #1e293b, #0f172a);
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2000")
      center/cover;
    opacity: 0.1;
  }

  .content {
    position: relative;
    max-width: 50rem;
    margin: 0 auto;
    z-index: 2;
  }

  span {
    color: ${colors.primary};
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    margin: 1.5rem 0;
  }

  p {
    font-size: clamp(1.1rem, 2vw, 1.4rem);
    opacity: 0.8;
    margin-bottom: 2.5rem;
  }
`;

const MainButton = styled.button`
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 800;
  border-radius: 3rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s;
  box-shadow: 0 10px 20px rgba(227, 29, 36, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(227, 29, 36, 0.4);
    filter: brightness(1.1);
  }
`;

// --- SEÇÃO VANTAGENS ---
const Section = styled.section`
  padding: 5rem 5%;
  max-width: 80rem;
  margin: 0 auto;
`;

const GridFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const FeatureCard = styled.div`
  padding: 2.5rem;
  background: ${colors.light};
  border-radius: 1.5rem;
  transition: all 0.3s;
  border: 1px solid transparent;

  &:hover {
    background: white;
    border-color: ${colors.primary};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  }

  .icon {
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.primary};
    margin-bottom: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${colors.dark};
  }

  p {
    color: ${colors.textMuted};
    line-height: 1.6;
  }
`;

// --- SEÇÃO PLANOS (MONETIZAÇÃO) ---
const PricingSection = styled.div`
  background: ${colors.light};
  padding: 6rem 5%;
  text-align: center;
`;

const PlanCard = styled.div`
  background: white;
  max-width: 400px;
  margin: 0 auto;
  border-radius: 2rem;
  padding: 3rem;
  border: 2px solid ${colors.primary};
  position: relative;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.1);

  .tag {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors.primary};
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    font-size: 0.8rem;
    font-weight: 800;
  }

  .price {
    font-size: 3.5rem;
    font-weight: 900;
    color: ${colors.dark};
    margin: 1rem 0;
    span {
      font-size: 1rem;
      color: ${colors.textMuted};
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    text-align: left;

    li {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-bottom: 1rem;
      color: ${colors.dark};
      font-weight: 500;
    }
  }
`;

export default function SejaParceiro() {
  const navigate = useNavigate();
  
  return (
    <Page>
      <Header />

      <Hero>
        <div className="content">
          <span>Oportunidade para Lojistas</span>
          <h1>Seu estoque visível para milhões de compradores.</h1>
          <p>
            Transforme sua loja física em uma potência digital. Anuncie no Repax
            e conecte-se com a maior rede de compradores profissionais e finais
            do Brasil.
          </p>
          <MainButton>
            QUERO SER PARCEIRO <ArrowRight size={20} />
          </MainButton>
        </div>
      </Hero>

      <Section>
        <div
          style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}
        >
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>
            Por que escolher a Repax?
          </h2>
          <p style={{ color: colors.textMuted }}>
            Unimos tecnologia de ponta e inteligência de mercado para girar seu
            estoque em tempo recorde.
          </p>
        </div>

        <GridFeatures>
          <FeatureCard>
            <div className="icon">
              <Users size={32} />
            </div>
            <h3>Audiência Qualificada</h3>
            <p>
              Seu estoque exposto para milhares de usuários que buscam veículos
              diariamente em nossa plataforma.
            </p>
          </FeatureCard>

          <FeatureCard>
            <div className="icon">
              <BarChart3 size={32} />
            </div>
            <h3>Painel de Performance</h3>
            <p>
              Gerencie seus leads, visualize estatísticas de visualização e
              saiba exatamente o que seu cliente procura.
            </p>
          </FeatureCard>

          <FeatureCard>
            <div className="icon">
              <Zap size={32} />
            </div>
            <h3>Giro Rápido</h3>
            <p>
              Nossa tecnologia de recomendação prioriza veículos com alto
              potencial de venda, acelerando seu retorno.
            </p>
          </FeatureCard>

          <FeatureCard>
            <div className="icon">
              <ShieldCheck size={32} />
            </div>
            <h3>Credibilidade Repax</h3>
            <p>
              Venda com o selo de confiança de quem entende do mercado
              automotivo nacional.
            </p>
          </FeatureCard>
        </GridFeatures>
      </Section>

      <PricingSection>
        <div style={{ marginBottom: "4rem" }}>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900 }}>
            Plano Parceiro Lojista
          </h2>
          <p>
            Tudo o que você precisa para dominar o mercado local e nacional.
          </p>
        </div>

        <PlanCard>
          <div className="tag">O MAIS POPULAR</div>
          <Store size={40} color={colors.primary} />
          <h3>Anunciante Pro</h3>
          <div className="price">
            R$ 299<span>/mês</span>
          </div>

          <ul>
            <li>
              <CheckCircle2 size={18} color={colors.primary} /> Estoque
              Ilimitado
            </li>
            <li>
              <CheckCircle2 size={18} color={colors.primary} /> Selo de Loja
              Verificada
            </li>
            <li>
              <CheckCircle2 size={18} color={colors.primary} /> Suporte
              Prioritário 24/7
            </li>
            <li>
              <CheckCircle2 size={18} color={colors.primary} /> Leads direto no
              WhatsApp
            </li>
            <li>
              <CheckCircle2 size={18} color={colors.primary} /> Relatórios
              Semanais
            </li>
          </ul>

          <MainButton
            onClick={() => navigate("/cadastro-parceiro")}
            style={{ width: "100%" }}
          >
            ASSINAR AGORA
          </MainButton>
        </PlanCard>

        <p style={{ marginTop: "3rem", color: colors.textMuted }}>
          Dúvidas?{" "}
          <a href="#" style={{ color: colors.primary, fontWeight: 700 }}>
            Fale com um consultor
          </a>
        </p>
      </PricingSection>

      <Footer />
    </Page>
  );
}
