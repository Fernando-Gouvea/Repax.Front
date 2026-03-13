import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import chassiImg from "../../assets/template/chassiCar.jpg"; // Sua imagem de eixo
import styled from "styled-components";
import {
  ArrowLeft,
  Fuel,
  Gauge,
  Calendar,
  Send,
  MapPin,
  Paintbrush,
  Settings2,
  Clock,
} from "lucide-react";

import { veiculosMock } from "../../dados/mockDados";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { OpcionaisVeiculo } from "../../components/OpcionaisVeiculo";

const colors = {
  primary: "#E31D24",
  secondary: "#0056B3",
  dark: "#1A1A1A",
  textMuted: "#6b7280",
  border: "#e5e7eb",
  bgLight: "#f8f9fa",
};

const Container = styled.div`
  background: ${colors.bgLight};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 1.5rem 1rem;
  width: 100%;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  @media (min-width: 968px) {
    grid-template-columns: 1fr 340px;
  }
`;

const SectionCard = styled.section`
  background: white;
  border-radius: 0.75rem;
  padding: 1.25rem;
  border: 1px solid ${colors.border};
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 0.85rem;
  font-weight: 700;
  color: ${colors.dark};
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

const TechItem = styled.div`
  display: flex;
  gap: 0.5rem;
  svg {
    color: ${colors.secondary};
    flex-shrink: 0;
  }
  .label {
    display: block;
    font-size: 0.65rem;
    color: ${colors.textMuted};
    text-transform: uppercase;
  }
  .value {
    font-size: 0.8rem;
    font-weight: 700;
    color: ${colors.dark};
  }
`;

/* DIAGRAMA DE PNEUS - RESTAURADO */
const TiresWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fdfdfd;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #f0f0f0;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const CarDiagram = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
  background-image: url(${chassiImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const TireMarker = styled.div<{ $status: string }>`
  position: absolute;
  width: 2.1rem;
  height: 1.0rem;
  border-radius: 0.2rem;
  background-color: ${(props) =>
    props.$status === "bom" ? "#22c55e" : "#eab308"};
  &.fl {
    top: 14%;
    left: 15%;
  }
  &.fr {
    top: 14%;
    right: 15%;
  }
  &.rl {
    bottom: 14%;
    left: 15%;
  }
  &.rr {
    bottom: 14%;
    right: 15%;
  }
`;

const PriceText = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${colors.dark};
  margin: 0.25rem 0;
`;

const ActionButton = styled.button`
  width: 100%;
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 0.75rem; /* Botão elegante */
  border-radius: 0.4rem;
  font-weight: 700;
  font-size: 0.8rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  transition: all 0.2s;
  &:hover {
    background: #c2151b;
  }
`;

export default function DetalhesVeiculo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [valorProposta, setValorProposta] = useState("");

  const veiculo = useMemo(
    () => veiculosMock.find((v) => String(v.id) === String(id)),
    [id],
  );
  const [fotoAtiva, setFotoAtiva] = useState("");

  useEffect(() => {
    if (veiculo) setFotoAtiva(veiculo.fotoUrl);
    window.scrollTo(0, 0);
  }, [veiculo]);

  if (!veiculo) return null;

  return (
    <Container>
      <Header />
      <Content>
        <button
          onClick={() => navigate(-1)}
          style={{
            background: "none",
            border: "none",
            color: colors.secondary,
            fontSize: "0.75rem",
            fontWeight: 700,
            cursor: "pointer",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
          }}
        >
          <ArrowLeft size={14} /> VOLTAR PARA O ESTOQUE
        </button>

        <MainGrid>
          <div>
            <SectionCard style={{ padding: "0.5rem" }}>
              <img
                src={fotoAtiva}
                style={{
                  width: "100%",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                  borderRadius: "0.4rem",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  padding: "0.5rem",
                  overflowX: "auto",
                }}
              >
                {(veiculo.fotos || [veiculo.fotoUrl]).map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    onClick={() => setFotoAtiva(img)}
                    style={{
                      width: "60px",
                      height: "45px",
                      objectFit: "cover",
                      borderRadius: "0.25rem",
                      cursor: "pointer",
                      border:
                        fotoAtiva === img
                          ? `2px solid ${colors.primary}`
                          : "2px solid transparent",
                    }}
                  />
                ))}
              </div>
            </SectionCard>

            <SectionCard>
              <SectionTitle>
                <Settings2
                  size={14}
                  style={{ verticalAlign: "middle", marginRight: "4px" }}
                />{" "}
                Ficha Técnica
              </SectionTitle>
              <TechGrid>
                <TechItem>
                  <Calendar size={16} />
                  <div>
                    <span className="label">Ano</span>
                    <span className="value">{veiculo.ano}</span>
                  </div>
                </TechItem>
                <TechItem>
                  <Gauge size={16} />
                  <div>
                    <span className="label">Km</span>
                    <span className="value">
                      {veiculo.quilometragem.toLocaleString()}
                    </span>
                  </div>
                </TechItem>
                <TechItem>
                  <Fuel size={16} />
                  <div>
                    <span className="label">Combustível</span>
                    <span className="value">Flex</span>
                  </div>
                </TechItem>
                <TechItem>
                  <Paintbrush size={16} />
                  <div>
                    <span className="label">Cor</span>
                    <span className="value">Branco</span>
                  </div>
                </TechItem>
                <TechItem>
                  <Settings2 size={16} />
                  <div>
                    <span className="label">Câmbio</span>
                    <span className="value">Automático</span>
                  </div>
                </TechItem>
                <TechItem>
                  <Clock size={16} />
                  <div>
                    <span className="label">Prazo Doc</span>
                    <span className="value">30 dias</span>
                  </div>
                </TechItem>
              </TechGrid>
            </SectionCard>

            <SectionCard>
              <SectionTitle>Estado dos Pneus</SectionTitle>
              <TiresWrapper>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.75rem",
                  }}
                >
                  {[
                    "D. Esquerdo",
                    "D. Direito",
                    "T. Esquerdo",
                    "T. Direito",
                  ].map((p) => (
                    <div key={p} style={{ fontSize: "0.7rem" }}>
                      <span style={{ color: colors.textMuted }}>{p}:</span>{" "}
                      <strong style={{ color: "#22c55e" }}>Bom</strong>
                    </div>
                  ))}
                </div>
                <CarDiagram>
                  <TireMarker className="fl" $status="bom" />
                  <TireMarker className="fr" $status="bom" />
                  <TireMarker className="rl" $status="bom" />
                  <TireMarker className="rr" $status="bom" />
                </CarDiagram>
              </TiresWrapper>
            </SectionCard>

            <SectionCard>
              <SectionTitle>Opcionais</SectionTitle>
              <OpcionaisVeiculo veiculo={veiculo} />
            </SectionCard>

            <SectionCard style={{ borderLeft: `3px solid ${colors.primary}` }}>
              <SectionTitle>Observações</SectionTitle>
              <p
                style={{
                  fontSize: "0.75rem",
                  color: "#4b5563",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {veiculo.observacoes ||
                  "Ipva 2026 pago - veículo possui lanterna traseira lado esquerdo quebrada, para-lama dianteiro riscado e porta passageiro riscada."}
              </p>
            </SectionCard>
          </div>

          <aside>
            <SectionCard style={{ position: "sticky", top: "1rem" }}>
              <h1
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 800,
                  margin: "0 0 0.25rem",
                }}
              >
                {veiculo.marca} {veiculo.modelo}
              </h1>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: colors.textMuted,
                  marginBottom: "1rem",
                }}
              >
                <MapPin size={10} /> {veiculo.estado} • Ref: {veiculo.id}
              </div>

              <div
                style={{
                  borderTop: `1px solid ${colors.border}`,
                  paddingTop: "0.75rem",
                }}
              >
                <span style={{ fontSize: "0.65rem", color: colors.textMuted }}>
                  Preço de Venda
                </span>
                <PriceText>
                  {veiculo.valorVenda.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </PriceText>
              </div>

              <div style={{ marginTop: "1.25rem" }}>
                <input
                  type="number"
                  placeholder="Sua proposta R$"
                  value={valorProposta}
                  onChange={(e) => setValorProposta(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.6rem",
                    borderRadius: "0.3rem",
                    border: `1px solid ${colors.border}`,
                    fontSize: "0.8rem",
                    marginBottom: "0.5rem",
                    outline: "none",
                  }}
                />
                <ActionButton>
                  <Send size={14} /> Enviar Proposta
                </ActionButton>
              </div>
            </SectionCard>
          </aside>
        </MainGrid>
      </Content>
      <Footer />
    </Container>
  );
}
