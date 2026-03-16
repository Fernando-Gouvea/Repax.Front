import styled from "styled-components";
import {
  Package,
  PlusCircle,
  DollarSign,
  TrendingUp,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Edit3,
  Trash2,
  ArrowUpRight,
  ChevronRight,
  Calendar,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- Estilos Globais de Gestão ---
const Container = styled.div`
  padding: 1.5rem;
  max-width: 1300px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: #f8fafc;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;

  .title-group {
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
    }
    p {
      font-size: 0.85rem;
      color: #64748b;
      margin-top: 4px;
    }
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
  padding: 1.2rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  .label {
    color: #64748b;
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    letter-spacing: 0.05em;
  }
  .value {
    font-size: 1.4rem;
    font-weight: 800;
    color: #0f172a;
    margin-top: 8px;
  }
  .trend {
    font-size: 0.7rem;
    font-weight: 600;
    color: #16a34a;
    display: flex;
    align-items: center;
    gap: 2px;
    margin-top: 4px;
  }
`;

const CreateAction = styled.button`
  background: #e31d24;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background: #c1181f;
    transform: translateY(-1px);
  }
`;

// --- Componentes da Tabela ---
const ContentCard = styled.div`
  background: white;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
`;

const TableHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;

  .search-box {
    display: flex;
    align-items: center;
    background: #f1f5f9;
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    width: 300px;
    input {
      background: none;
      border: none;
      outline: none;
      padding-left: 8px;
      font-size: 0.85rem;
      width: 100%;
    }
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th {
    background: #f8fafc;
    padding: 0.8rem 1rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    color: #64748b;
    font-weight: 700;
    border-bottom: 1px solid #f1f5f9;
  }

  td {
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
    color: #1e293b;
    border-bottom: 1px solid #f1f5f9;
  }

  tr:hover {
    background: #fbfcfd;
  }
`;

const Badge = styled.span<{ $status?: string }>`
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  background: ${(props) =>
    props.$status === "active" ? "#dcfce7" : "#fee2e2"};
  color: ${(props) => (props.$status === "active" ? "#166534" : "#991b1b")};
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  &:hover {
    background: #f1f5f9;
    color: #e31d24;
  }
`;

export const GestaoFornecedor = () => {
  const navigate = useNavigate();

  // Dados Mockados para Exemplo
  const veiculos = [
    {
      id: 1,
      nome: "Honda Civic 2.0 EXL",
      preco: "R$ 145.900",
      km: "22.000",
      status: "active",
      data: "12/03/2026",
    },
    {
      id: 2,
      nome: "Toyota Corolla Altis",
      preco: "R$ 158.000",
      km: "10.500",
      status: "active",
      data: "10/03/2026",
    },
    {
      id: 3,
      nome: "VW Golf GTI MK8",
      preco: "R$ 290.000",
      km: "5.000",
      status: "sold",
      data: "05/03/2026",
    },
    {
      id: 4,
      nome: "BMW 320i M Sport",
      preco: "R$ 310.000",
      km: "12.000",
      status: "active",
      data: "01/03/2026",
    },
  ];

  return (
    <Container>
      <Header>
        <div className="title-group">
          <h1>Gestão de Inventário</h1>
          <p>Painel de controle de anúncios e métricas comerciais.</p>
        </div>
        <div style={{ display: "flex", gap: "0.8rem" }}>
          <IconButton
            style={{
              border: "1px solid #e2e8f0",
              padding: "8px 12px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Calendar size={16} />{" "}
            <span style={{ fontSize: "0.8rem", fontWeight: 600 }}>
              Relatórios
            </span>
          </IconButton>
          <CreateAction onClick={() => navigate("/meus-anuncios")}>
            <PlusCircle size={18} /> CRIAR ANÚNCIO
          </CreateAction>
        </div>
      </Header>

      <StatsGrid>
        <StatCard>
          <div className="label">
            <Package size={14} /> Ativos no Estoque
          </div>
          <span className="value">
            42{" "}
            <small
              style={{ fontSize: "0.8rem", fontWeight: 500, color: "#94a3b8" }}
            >
              unid.
            </small>
          </span>
          <div className="trend">
            <ArrowUpRight size={12} /> +4 esta semana
          </div>
        </StatCard>

        <StatCard>
          <div className="label">
            <TrendingUp size={14} color="#16a34a" /> Vendas do Mês
          </div>
          <span className="value">12</span>
          <div className="trend" style={{ color: "#94a3b8" }}>
            Meta: 20 unidades
          </div>
        </StatCard>

        <StatCard>
          <div className="label">
            <DollarSign size={14} color="#E31D24" /> Valor em Ofertas
          </div>
          <span className="value">R$ 2.45M</span>
          <div className="trend">
            <ArrowUpRight size={12} /> 12% vs mês anterior
          </div>
        </StatCard>

        <StatCard>
          <div className="label">
            <Eye size={14} color="#3b82f6" /> Visualizações
          </div>
          <span className="value">8.4k</span>
          <div className="trend" style={{ color: "#3b82f6" }}>
            +142 hoje
          </div>
        </StatCard>
      </StatsGrid>

      {/* Seção Gráfico Compacta */}
      <div
        style={{
          background: "#0F172A",
          padding: "1.2rem",
          borderRadius: "10px",
          color: "white",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h3 style={{ fontSize: "0.9rem", fontWeight: 700 }}>
            Performance de Cliques (Semanal)
          </h3>
          <span style={{ fontSize: "0.7rem", color: "#94a3b8" }}>
            Atualizado há 5 min
          </span>
        </div>
        <div
          style={{
            height: "100px",
            display: "flex",
            alignItems: "flex-end",
            gap: "8px",
          }}
        >
          {[30, 50, 40, 95, 60, 85, 45, 70, 90, 65, 55, 80].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                background: h > 80 ? "#E31D24" : "#334155",
                height: `${h}%`,
                borderRadius: "3px",
              }}
            />
          ))}
        </div>
      </div>

      {/* Lista de Estoque */}
      <ContentCard>
        <TableHeader>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div className="search-box">
              <Search size={14} color="#64748b" />
              <input
                type="text"
                placeholder="Buscar por modelo, placa ou ID..."
              />
            </div>
            <IconButton
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "6px",
                padding: "0 10px",
              }}
            >
              <Filter size={14} />
            </IconButton>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <span
              style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}
            >
              Status:
            </span>
            <Badge $status="active" style={{ cursor: "pointer" }}>
              Todos
            </Badge>
            <Badge
              style={{
                background: "#f1f5f9",
                color: "#64748b",
                cursor: "pointer",
              }}
            >
              Vendidos
            </Badge>
          </div>
        </TableHeader>

        <Table>
          <thead>
            <tr>
              <th>Veículo / Modelo</th>
              <th>Preço Web</th>
              <th>KM</th>
              <th>Data Cadastro</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {veiculos.map((v) => (
              <tr key={v.id}>
                <td style={{ fontWeight: 700 }}>{v.nome}</td>
                <td style={{ color: "#e31d24", fontWeight: 700 }}>{v.preco}</td>
                <td>{v.km} km</td>
                <td>{v.data}</td>
                <td>
                  <Badge $status={v.status}>
                    {v.status === "active" ? "ANUNCIADO" : "VENDIDO"}
                  </Badge>
                </td>
                <td style={{ textAlign: "right" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "4px",
                    }}
                  >
                    <IconButton title="Ver no site">
                      <Eye size={16} />
                    </IconButton>
                    <IconButton title="Editar">
                      <Edit3 size={16} />
                    </IconButton>
                    <IconButton title="Excluir">
                      <Trash2 size={16} />
                    </IconButton>
                    <IconButton>
                      <MoreHorizontal size={16} />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div
          style={{
            padding: "1rem",
            borderTop: "1px solid #f1f5f9",
            textAlign: "center",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "#e31d24",
              fontSize: "0.8rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              margin: "0 auto",
              gap: "5px",
            }}
          >
            VER ESTOQUE COMPLETO <ChevronRight size={14} />
          </button>
        </div>
      </ContentCard>
    </Container>
  );
};
