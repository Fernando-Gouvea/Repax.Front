import styled from "styled-components";
import {
  Car,
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowUpRight,
  Package,
  ChevronRight,
  Filter,
  Download,
  MoreHorizontal,
} from "lucide-react";

// --- Estilos de UI Refinados ---

const Container = styled.div`
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f8fafc;
  min-height: 100vh;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2rem;

  .title-area {
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;
    }
    p {
      color: #64748b;
      font-size: 0.875rem;
      margin-top: 2px;
    }
  }

  .actions {
    display: flex;
    gap: 8px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: white;
  padding: 1.25rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .icon-box {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    &.blue {
      background: #f0f7ff;
      color: #2563eb;
    }
    &.red {
      background: #fff1f2;
      color: #e11d48;
    }
    &.green {
      background: #f0fdf4;
      color: #16a34a;
    }
    &.orange {
      background: #fff7ed;
      color: #ea580c;
    }
  }

  .value-area {
    span {
      font-size: 0.75rem;
      font-weight: 600;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.025em;
    }
    strong {
      display: block;
      font-size: 1.5rem;
      color: #0f172a;
      font-weight: 800;
      margin-top: 4px;
    }
  }
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 1.5rem;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled.section`
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  overflow: hidden; // Para a tabela não vazar
`;

const SectionHeader = styled.div`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th {
    background: #f8fafc;
    padding: 0.75rem 1.25rem;
    font-size: 0.7rem;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    border-bottom: 1px solid #e2e8f0;
  }

  td {
    padding: 0.85rem 1.25rem;
    font-size: 0.85rem;
    border-bottom: 1px solid #f1f5f9;
    color: #334155;
  }

  tr:hover {
    background: #fcfcfd;
  }
`;

const Badge = styled.span<{ color?: string }>`
  padding: 2px 8px;
  border-radius: 99px;
  font-size: 0.7rem;
  font-weight: 700;
  background: ${(props) => props.color || "#e2e8f0"};
  color: white;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
  background: white;
  font-size: 0.8rem;
  font-weight: 600;
  color: #334155;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f8fafc;
    border-color: #cbd5e1;
    transform: translateX(4px);
  }
`;

// --- Componente ---

export const LojistaDashboard = () => {
  return (
    <Container>
      <HeaderContainer>
        <div className="title-area">
          <h1>Dashboard Operacional</h1>
          <p>Visão geral da sua conta em 16 de Março, 2026</p>
        </div>
        <div className="actions">
          <button style={secondaryBtn}>
            <Filter size={14} /> Filtrar
          </button>
          <button style={primaryBtn}>
            <Download size={14} /> Relatório
          </button>
        </div>
      </HeaderContainer>

      <StatsGrid>
        <StatItem
          icon={<Car size={18} />}
          label="Estoque Ativo"
          value="142"
          color="blue"
        />
        <StatItem
          icon={<TrendingUp size={18} />}
          label="Volume Comprado"
          value="R$ 420k"
          color="green"
        />
        <StatItem
          icon={<Clock size={18} />}
          label="Lances em Aberto"
          value="03"
          color="orange"
        />
        <StatItem
          icon={<AlertCircle size={18} />}
          label="Pendências"
          value="01"
          color="red"
        />
      </StatsGrid>

      <MainGrid>
        <Section>
          <SectionHeader>
            <h2>
              <Package size={18} color="#e11d48" /> Oportunidades do Repasse
            </h2>
            <button
              style={{
                border: "none",
                background: "none",
                color: "#2563eb",
                fontSize: "0.75rem",
                fontWeight: 700,
              }}
            >
              Ver tudo
            </button>
          </SectionHeader>
          <div style={{ overflowX: "auto" }}>
            <Table>
              <thead>
                <tr>
                  <th>Veículo</th>
                  <th>Ano</th>
                  <th>KM</th>
                  <th>Preço</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  name="Toyota Corolla XEi"
                  year="2022/2022"
                  km="32.000"
                  price="R$ 115.900"
                  status="Novo"
                  badgeColor="#16a34a"
                />
                <TableRow
                  name="Honda Civic Touring"
                  year="2021/2021"
                  km="45.000"
                  price="R$ 138.000"
                  status="Em disputa"
                  badgeColor="#ea580c"
                />
                <TableRow
                  name="Jeep Compass Longitude"
                  year="2020/2021"
                  km="58.000"
                  price="R$ 102.000"
                  status="Novo"
                  badgeColor="#16a34a"
                />
              </tbody>
            </Table>
          </div>
        </Section>

        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <Section>
            <SectionHeader>
              <h2>
                <ArrowUpRight size={18} color="#e11d48" /> Atalhos
              </h2>
            </SectionHeader>
            <div
              style={{
                padding: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <ActionButton>
                Explorar Estoque <ChevronRight size={14} />
              </ActionButton>
              <ActionButton>
                Minhas Compras <ChevronRight size={14} />
              </ActionButton>
              <ActionButton>
                Financeiro <ChevronRight size={14} />
              </ActionButton>
              <ActionButton>
                Suporte Direto <ChevronRight size={14} />
              </ActionButton>
            </div>
          </Section>

          <div
            style={{
              background: "#0f172a",
              borderRadius: "8px",
              padding: "1.25rem",
              color: "white",
            }}
          >
            <h4 style={{ fontSize: "0.85rem", marginBottom: "8px" }}>
              Assinatura Premium
            </h4>
            <p
              style={{
                fontSize: "0.75rem",
                color: "#94a3b8",
                marginBottom: "1rem",
              }}
            >
              Sua conta expira em 12 dias. Renove agora para não perder o
              acesso.
            </p>
            <button
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "4px",
                background: "#e11d48",
                color: "white",
                border: "none",
                fontWeight: 700,
                fontSize: "0.75rem",
              }}
            >
              RENOVAR AGORA
            </button>
          </div>
        </div>
      </MainGrid>
    </Container>
  );
};

// --- Sub-componentes para Limpeza de Código ---

const StatItem = ({ icon, label, value, color }: any) => (
  <StatCard>
    <div className="top">
      <div className={`icon-box ${color}`}>{icon}</div>
      <MoreHorizontal size={14} color="#94a3b8" />
    </div>
    <div className="value-area">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  </StatCard>
);

const TableRow = ({ name, year, km, price, status, badgeColor }: any) => (
  <tr>
    <td>
      <strong style={{ color: "#0f172a" }}>{name}</strong>
    </td>
    <td>{year}</td>
    <td>{km}</td>
    <td>
      <strong style={{ color: "#0f172a" }}>{price}</strong>
    </td>
    <td>
      <Badge color={badgeColor}>{status}</Badge>
    </td>
    <td>
      <ChevronRight size={16} color="#cbd5e1" />
    </td>
  </tr>
);

const primaryBtn = {
  padding: "8px 16px",
  borderRadius: "6px",
  border: "none",
  background: "#0f172a",
  color: "white",
  fontSize: "0.8rem",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  cursor: "pointer",
};

const secondaryBtn = {
  ...primaryBtn,
  background: "white",
  border: "1px solid #e2e8f0",
  color: "#334155",
};
