import { useState } from "react";
import styled, { keyframes } from "styled-components";
import {
  CheckCircle2,
  Users,
  Zap,
  BarChart3,
  ShieldCheck,
  Store,
  Truck,
  TrendingUp,
  Globe,
  Search,
  Handshake,
  Smartphone,
  PlayCircle,
  ShieldAlert,
  Layers,
  Cpu,
  MousePointerClick,
  MessageSquare,
  Plus,
  Minus,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const colors = {
  primary: "#E31D24",
  primaryHover: "#FF2E36",
  dark: "#020617",
  cardBg: "#0B1120",
  textMain: "#F8FAFC",
  textMuted: "#94A3B8",
  accent: "#38BDF8",
  glass: "rgba(255, 255, 255, 0.03)",
  success: "#10B981",
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageWrapper = styled.div`
  background-color: ${colors.dark};
  color: ${colors.textMain};
  min-height: 100vh;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  animation: ${fadeIn} 1s ease-out;
`;

// --- HERO ---
const HeroSection = styled.section`
  padding: clamp(100px, 15vh, 160px) 0 80px;
  text-align: center;
  background: radial-gradient(
    circle at 50% -20%,
    rgba(227, 29, 36, 0.15) 0%,
    transparent 50%
  );
`;

const Headline = styled.h1`
  font-size: clamp(2.2rem, 8vw, 4.5rem);
  font-weight: 900;
  line-height: 1;
  letter-spacing: -3px;
  margin-bottom: 24px;
  span {
    background: linear-gradient(180deg, #ffffff 0%, #94a3b8 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .red {
    color: ${colors.primary};
    -webkit-text-fill-color: ${colors.primary};
  }
`;

// --- GRID SISTEMA BENTO ---
const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  margin: 60px 0;
  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div<{ gridSpan?: number; bg?: string }>`
  grid-column: span ${(props) => props.gridSpan || 12};
  background: ${(props) => props.bg || colors.cardBg};
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 32px;
  padding: clamp(30px, 5vw, 50px);
  position: relative;
  overflow: hidden;
  @media (max-width: 968px) {
    grid-column: span 1;
  }

  .label {
    color: ${colors.primary};
    font-weight: 800;
    font-size: 0.75rem;
    text-transform: uppercase;
    margin-bottom: 15px;
    display: block;
  }
  h3 {
    font-size: 1.8rem;
    font-weight: 800;
    margin-bottom: 15px;
    letter-spacing: -1px;
  }
  p {
    color: ${colors.textMuted};
    line-height: 1.7;
    font-size: 1.05rem;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
    font-weight: 600;
    font-size: 0.95rem;
  }
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 12px 30px;
  border-radius: 12px;
  border: none;
  font-weight: 700;
  cursor: pointer;
  background: ${(props) => (props.active ? colors.primary : colors.glass)};
  color: white;
  transition: 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background: ${(props) =>
      props.active ? colors.primaryHover : "rgba(255,255,255,0.1)"};
  }
`;

// --- COMPONENTE ---
export default function SejaParceiro() {
  const navigate = useNavigate();
  const [type, setType] = useState<"lojista" | "fornecedor">("lojista");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const data = {
    lojista: {
      title:
        "O seu próximo <span>estoque está a um</span> <span className='red'>clique.</span>",
      desc: "Não perca tempo rodando pátios físicos. O Repax entrega inteligência de compra e logística na sua porta.",
      stats: [
        { icon: <TrendingUp />, val: "18%", label: "Margem Média" },
        { icon: <Search />, val: "+5k", label: "Veículos/Mês" },
        { icon: <Globe />, val: "Nacional", label: "Logística" },
      ],
      cards: [
        {
          span: 7,
          label: "Inteligência",
          icon: <Cpu />,
          title: "Filtros de Alta Performance",
          desc: "Nossa IA analisa o histórico de vendas da sua região e sugere os veículos que terão o giro mais rápido no seu pátio.",
          items: [
            "Acesso antecipado a lotes premium",
            "Histórico cautelar completo",
            "Sugestão de preço de revenda",
          ],
        },
        {
          span: 5,
          label: "Logística",
          icon: <Truck />,
          title: "Frete Integrado",
          desc: "Compre de qualquer lugar do Brasil sem se preocupar com o transporte. Cuidamos de tudo.",
          items: [
            "Cálculo automático no checkout",
            "Seguro total de carga",
            "Rastreio em tempo real",
          ],
        },
        {
          span: 12,
          label: "Segurança",
          icon: <ShieldCheck />,
          title: "Compra 100% Auditada e Segura",
          desc: "Eliminamos o risco do repasse. Todos os fornecedores passam por uma verificação rigorosa de compliance antes de anunciar.",
          items: [
            "Vendedores homologados",
            "Garantia de documentação",
            "Suporte jurídico especializado",
          ],
          bg: "linear-gradient(90deg, #0B1120 0%, #1e293b 100%)",
        },
      ],
    },
    fornecedor: {
      title:
        "<span>Liquidez imediata para seu</span> <span className='red'>estoque parado.</span>",
      desc: "Transforme veículos de repasse em capital de giro em minutos. Conecte-se à maior rede de compradores do país.",
      stats: [
        { icon: <Zap />, val: "4min", label: "Tempo de Venda" },
        { icon: <Users />, val: "+15k", label: "Compradores" },
        { icon: <BarChart3 />, val: "92%", label: "Liquidez" },
      ],
      cards: [
        {
          span: 7,
          label: "Distribuição",
          icon: <MousePointerClick />,
          title: "Escalabilidade de Venda",
          desc: "Ao anunciar, seu veículo é disparado para milhares de lojistas com perfil de compra compatível instantaneamente.",
          items: [
            "Algoritmo de recomendação",
            "Disparo em grupos VIP",
            "Destaque na vitrine principal",
          ],
        },
        {
          span: 5,
          label: "Gestão",
          icon: <BarChart3 />,
          title: "Dashboard Pro",
          desc: "Controle total sobre seu pátio de repasse. Saiba exatamente quem está olhando seus carros.",
          items: [
            "Relatórios de performance",
            "Gestão multilocação",
            "API para integração ERP",
          ],
        },
        {
          span: 12,
          label: "Financeiro",
          icon: <Handshake />,
          title: "Liquidação Financeira Ágil",
          desc: "Receba o valor das suas vendas com rapidez e segurança. Sistema de custódia que protege o fornecedor.",
          items: [
            "Recebimento em até 24h",
            "Sem taxas ocultas",
            "Conciliação bancária automática",
          ],
          bg: "linear-gradient(90deg, #0B1120 0%, #1e293b 100%)",
        },
      ],
    },
  };

  const current = data[type];

  return (
    <PageWrapper>
      <HeroSection>
        <Container>
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <TabButton
              active={type === "lojista"}
              onClick={() => setType("lojista")}
            >
              <Store size={18} /> Lojista
            </TabButton>
            <TabButton
              active={type === "fornecedor"}
              onClick={() => setType("fornecedor")}
            >
              <Truck size={18} /> Fornecedor
            </TabButton>
          </div>
          <Headline dangerouslySetInnerHTML={{ __html: current.title }} />
          <p
            style={{
              color: colors.textMuted,
              maxWidth: "700px",
              margin: "0 auto 40px",
              fontSize: "1.2rem",
              lineHeight: "1.6",
            }}
          >
            {current.desc}
          </p>
          <div
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => navigate("/cadastro")}
              style={{
                background: colors.primary,
                color: "white",
                border: "none",
                padding: "18px 40px",
                borderRadius: "15px",
                fontWeight: 800,
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              COMEÇAR AGORA
            </button>
            <button
              style={{
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.2)",
                padding: "18px 40px",
                borderRadius: "15px",
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PlayCircle size={20} /> VER DEMO
            </button>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "50px",
              marginTop: "80px",
              flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.05)",
              paddingTop: "40px",
            }}
          >
            {current.stats.map((s, i) => (
              <div key={i} style={{ textAlign: "left" }}>
                <div style={{ color: colors.primary, marginBottom: "5px" }}>
                  {s.icon}
                </div>
                <div style={{ fontSize: "1.8rem", fontWeight: 900 }}>
                  {s.val}
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: colors.textMuted,
                    fontWeight: 800,
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </HeroSection>

      <Container>
        <BentoGrid>
          {current.cards.map((card, i) => (
            <Card key={i} gridSpan={card.span} bg={card.bg}>
              <span className="label">{card.label}</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ color: colors.primary }}>{card.icon}</div>
                <h3>{card.title}</h3>
              </div>
              <p>{card.desc}</p>
              <ul>
                {card.items.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} color={colors.success} /> {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </BentoGrid>
      </Container>

      {/* RECURSOS TÉCNICOS ADICIONAIS */}
      <section
        style={{ padding: "80px 0", background: "rgba(255,255,255,0.02)" }}
      >
        <Container>
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 900,
                marginBottom: "15px",
              }}
            >
              Tecnologia que impulsiona.
            </h2>
            <p style={{ color: colors.textMuted }}>
              O Repax integra todas as pontas do mercado de repasse.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                icon: <Smartphone />,
                t: "App Mobile Nativo",
                d: "Toda a plataforma na palma da mão para decisões rápidas.",
              },
              {
                icon: <MessageSquare />,
                t: "Negociação Direta",
                d: "Chat criptografado para fechar negócios sem intermediários.",
              },
              {
                icon: <Layers />,
                t: "API Aberta",
                d: "Conecte o Repax ao seu sistema interno sem fricção.",
              },
              {
                icon: <ShieldAlert />,
                t: "Antifraude IA",
                d: "Proteção constante em cada oferta e proposta enviada.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: colors.cardBg,
                  padding: "40px",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div style={{ color: colors.primary, marginBottom: "20px" }}>
                  {item.icon}
                </div>
                <h4
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 800,
                    marginBottom: "10px",
                  }}
                >
                  {item.t}
                </h4>
                <p
                  style={{
                    color: colors.textMuted,
                    fontSize: "0.9rem",
                    lineHeight: "1.6",
                  }}
                >
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ ADICIONADA PARA CONVERSÃO */}
      <Container style={{ padding: "100px 0" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 900,
            marginBottom: "40px",
          }}
        >
          Perguntas Frequentes
        </h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {[
            {
              q: "Quais os requisitos para ser um parceiro?",
              a: "É necessário possuir CNPJ ativo no ramo automotivo e passar por nossa análise de compliance documental.",
            },
            {
              q: "Como funciona a garantia dos veículos?",
              a: "Os veículos de repasse são vendidos no estado, porém todos obrigatoriamente possuem laudo cautelar para transparência total.",
            },
            {
              q: "Existe custo de adesão?",
              a: "A Repax trabalha com modelos flexíveis de assinatura e taxas por transação, dependendo do seu perfil de volume.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                padding: "25px 0",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  fontWeight: 700,
                }}
              >
                {faq.q}{" "}
                {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
              </div>
              {openFaq === i && (
                <div
                  style={{
                    marginTop: "15px",
                    color: colors.textMuted,
                    lineHeight: "1.6",
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>

      <section
        style={{
          padding: "100px 0",
          textAlign: "center",
          background: "white",
          color: colors.dark,
        }}
      >
        <Container>
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: 900,
              letterSpacing: "-2px",
              marginBottom: "20px",
            }}
          >
            Pronto para escalar?
          </h2>
          <p
            style={{
              color: "#475569",
              fontSize: "1.2rem",
              marginBottom: "40px",
            }}
          >
            Não deixe seu negócio parado no tempo. Use a tecnologia Repax.
          </p>
          <button
            onClick={() => navigate("/cadastro")}
            style={{
              background: colors.primary,
              color: "white",
              border: "none",
              padding: "20px 60px",
              borderRadius: "100px",
              fontWeight: 900,
              cursor: "pointer",
              fontSize: "1.1rem",
            }}
          >
            QUERO ME CADASTRAR AGORA
          </button>
        </Container>
      </section>
    </PageWrapper>
  );
}
