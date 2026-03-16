import { useState } from "react";
import styled from "styled-components";
import {
  Truck,
  MapPin,
  ShieldCheck,
  PackageCheck,
  HelpCircle,
  Globe,
  Calculator,
  ArrowRight,
} from "lucide-react";

// --- Styled Components Adaptáveis ---

const LogisticaContainer = styled.div`
  background: white;
  padding: 1rem; // Reduzido para mobile
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`;

const LogisticaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatusHeader = styled.div`
  display: flex;
  flex-direction: column; // Empilha no mobile
  gap: 10px;
  padding: 0.8rem;
  background: #f8fafc;
  border-radius: 6px;
  border: 1px solid #e2e8f0;

  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .location-info {
    display: flex;
    align-items: center;
    gap: 8px;
    div {
      display: flex;
      flex-direction: column;
      span:first-child {
        font-size: 0.6rem;
        color: #64748b;
        font-weight: 700;
        text-transform: uppercase;
      }
      span:last-child {
        font-size: 0.75rem;
        color: #1e293b;
        font-weight: 700;
      }
    }
  }

  .status-badge-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: 480px) {
      align-items: flex-end;
    }
  }
`;

const FreteTypeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // 1 coluna no mobile
  gap: 0.75rem;

  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr; // 2 colunas no tablet/desktop
  }
`;

const FreteTypeCard = styled.div<{ $active: boolean }>`
  padding: 0.75rem;
  border: 2px solid ${(props) => (props.$active ? "#e31d24" : "#f1f5f9")};
  background: ${(props) => (props.$active ? "#fff" : "#f8fafc")};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;

  .icon-box {
    width: 32px;
    height: 32px;
    min-width: 32px;
    border-radius: 6px;
    background: ${(props) => (props.$active ? "#e31d24" : "#e2e8f0")};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => (props.$active ? "white" : "#64748b")};
  }

  .content {
    h3 {
      font-size: 0.75rem;
      margin: 0 0 2px 0;
      color: #0f172a;
      font-weight: 700;
    }
    p {
      font-size: 0.65rem;
      margin: 0;
      color: #64748b;
      line-height: 1.2;
    }
  }
`;

const ConfigTecnicaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; // Empilha inputs no mobile
  gap: 0.75rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr); // 3 colunas no desktop
  }
`;

const ConditionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const SimulationBox = styled.div`
  background: #f1f5f9;
  border-radius: 8px;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;

  h4 {
    font-size: 0.65rem;
    color: #475569;
    margin: 0 0 0.75rem 0;
    display: flex;
    align-items: center;
    gap: 5px;
    text-transform: uppercase;
  }
`;

const RouteLine = styled.div`
  display: flex;
  flex-direction: column; // No mobile muito pequeno, empilha os dados da rota
  gap: 4px;
  background: white;
  padding: 0.6rem;
  border-radius: 4px;
  border: 1px solid #cbd5e1;
  margin-bottom: 0.4rem;

  @media (min-width: 400px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .city {
    font-size: 0.7rem;
    font-weight: 600;
    color: #334155;
  }
  .price {
    font-size: 0.75rem;
    font-weight: 800;
    color: #16a34a;
  }
`;

export default function SecaoLogistica() {
  const [tipoFrete, setTipoFrete] = useState("proprio");

  return (
    <LogisticaContainer>
      {/* Título Responsivo */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "0.8rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "#1e293b",
          }}
        >
          <Truck size={18} color="#e31d24" /> Logística de Entrega de Veículos
        </h2>
        <HelpCircle size={16} color="#94a3b8" />
      </div>

      <LogisticaWrapper>
        <StatusHeader>
          <div className="location-info">
            <MapPin size={18} color="#e31d24" />
            <div>
              <span>Pátio de Origem</span>
              <span>São Bernardo do Campo, SP</span>
            </div>
          </div>
          <div className="status-badge-group">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#16a34a",
              }}
            >
              <ShieldCheck size={14} />
              <span style={{ fontSize: "0.6rem", fontWeight: 800 }}>
                SEGURO CARGA ATIVO
              </span>
            </div>
            <span style={{ fontSize: "0.55rem", color: "#94a3b8" }}>
              Monitoramento 24h
            </span>
          </div>
        </StatusHeader>

        <FreteTypeGrid>
          <FreteTypeCard
            $active={tipoFrete === "proprio"}
            onClick={() => setTipoFrete("proprio")}
          >
            <div className="icon-box">
              <Truck size={16} />
            </div>
            <div className="content">
              <h3>Guincho Próprio (Plataforma)</h3>
              <p>Ideal para entregas locais e veículos premium.</p>
            </div>
          </FreteTypeCard>

          <FreteTypeCard
            $active={tipoFrete === "transportadora"}
            onClick={() => setTipoFrete("transportadora")}
          >
            <div className="icon-box">
              <Globe size={16} />
            </div>
            <div className="content">
              <h3>Cegonha / Transportadora</h3>
              <p>Rede logística para entregas interestaduais.</p>
            </div>
          </FreteTypeCard>
        </FreteTypeGrid>

        <ConfigTecnicaGrid>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label
              style={{ fontSize: "0.65rem", fontWeight: 700, color: "#64748b" }}
            >
              Saída Estimada
            </label>
            <select
              style={{
                padding: "0.6rem",
                fontSize: "0.8rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            >
              <option>Imediato (Próximo Guincho)</option>
              <option>Agendar para 48h</option>
            </select>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label
              style={{ fontSize: "0.65rem", fontWeight: 700, color: "#64748b" }}
            >
              R$ por KM (Veículo Passeio)
            </label>
            <input
              type="text"
              placeholder="R$ 3,50"
              style={{
                padding: "0.6rem",
                fontSize: "0.8rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <label
              style={{ fontSize: "0.65rem", fontWeight: 700, color: "#64748b" }}
            >
              Adicional p/ SUV/Picape
            </label>
            <input
              type="text"
              placeholder="R$ 150,00"
              style={{
                padding: "0.6rem",
                fontSize: "0.8rem",
                borderRadius: "6px",
                border: "1px solid #cbd5e1",
              }}
            />
          </div>
        </ConfigTecnicaGrid>

        <ConditionsGrid>
          {[
            "Porta-a-Porta",
            "Veículo Sem Motor",
            "Seguro de Pátio",
            "Acesso p/ Cegonha",
          ].map((item) => (
            <label
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.7rem",
                color: "#334155",
                padding: "0.6rem",
                border: "1px solid #e2e8f0",
                borderRadius: "4px",
              }}
            >
              <input type="checkbox" style={{ accentColor: "#e31d24" }} />{" "}
              {item}
            </label>
          ))}
        </ConditionsGrid>

        <SimulationBox>
          <h4>
            <Calculator size={14} /> Estimativa de Entrega de Veículos
          </h4>
          <RouteLine>
            <span className="city">São Paulo → Rio de Janeiro</span>
            <div style={{ textAlign: "right" }}>
              <div className="price">R$ 1.850,00</div>
              <div style={{ fontSize: "0.55rem", color: "#64748b" }}>
                Prazo: 2 dias úteis
              </div>
            </div>
          </RouteLine>
          <div style={{ textAlign: "center", marginTop: "8px" }}>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#e31d24",
                fontSize: "0.65rem",
                fontWeight: 800,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                margin: "0 auto",
              }}
            >
              CALCULAR NOVA ROTA PERSONALIZADA <ArrowRight size={12} />
            </button>
          </div>
        </SimulationBox>

        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <label
            style={{
              fontSize: "0.65rem",
              fontWeight: 700,
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <PackageCheck size={14} /> INSTRUÇÕES DE CARREGAMENTO (Checklist)
          </label>
          <textarea
            rows={3}
            placeholder="Ex: Veículo rebaixado, requer prancha especial. Chave reserva no porta-luvas."
            style={{
              width: "100%",
              padding: "0.6rem",
              fontSize: "0.8rem",
              borderRadius: "6px",
              border: "1px solid #cbd5e1",
              resize: "none",
            }}
          />
        </div>
      </LogisticaWrapper>
    </LogisticaContainer>
  );
}
