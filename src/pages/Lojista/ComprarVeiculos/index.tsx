import styled from "styled-components";
import {
  Search,
  Filter,
  MapPin,
  Calendar,
  Gauge,
  Zap,
  ChevronDown,
} from "lucide-react";

// --- Estilos Base ---

const Container = styled.div`
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #f8fafc;
  min-height: 100vh;

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 1.5rem;

  .top-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  h1 {
    font-size: 1.3rem;
    font-weight: 800;
    color: #0f172a;
    letter-spacing: -0.02em;
    @media (min-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    color: #64748b;
    font-size: 0.8rem;
    margin-top: 2px;
  }
`;

const FilterBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: center;
  }

  .search-input {
    position: relative;
    flex: 1;
    input {
      width: 100%;
      padding: 8px 12px 8px 36px;
      font-size: 0.85rem;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      background: #f8fafc;
      &:focus {
        outline: none;
        border-color: #cbd5e1;
        background: white;
      }
    }
    svg {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
    }
  }

  .quick-filters {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 4px;
    &::-webkit-scrollbar {
      display: none;
    } // Esconde scroll no mobile
  }
`;

const InventoryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const VehicleCard = styled.div`
  background: white;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
    border-color: #cbd5e1;
  }

  .image-container {
    position: relative;
    height: 160px;
    background: #f1f5f9;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .badge {
      position: absolute;
      top: 10px;
      left: 10px;
      background: #e31d24;
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.65rem;
      font-weight: 800;
      text-transform: uppercase;
    }
  }

  .content {
    padding: 1rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .header {
    margin-bottom: 0.75rem;
    h3 {
      font-size: 0.95rem;
      font-weight: 700;
      color: #1e293b;
    }
    span {
      font-size: 0.75rem;
      color: #64748b;
    }
  }

  .specs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #f1f5f9;

    .spec-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem;
      color: #64748b;
      svg {
        color: #94a3b8;
      }
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    .price {
      span {
        display: block;
        font-size: 0.65rem;
        color: #94a3b8;
        text-transform: uppercase;
        font-weight: 600;
      }
      strong {
        font-size: 1.1rem;
        color: #0f172a;
        font-weight: 800;
      }
    }
  }
`;

const BuyButton = styled.button`
  background: #0f172a;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1e293b;
  }
`;

const FilterButton = styled.button`
  background: white;
  border: 1px solid #e2e8f0;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #475569;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    background: #f8fafc;
  }
`;

// --- Componente ---

export const ComprarVeiculos = () => {
  const veiculos = [
    {
      id: 1,
      nome: "Toyota Corolla XEi 2.0",
      ano: "2022/2022",
      km: "32.000 km",
      local: "São Paulo, SP",
      preco: "R$ 115.800",
      tag: "Oportunidade",
      cambio: "Automático",
    },
    {
      id: 2,
      nome: "Jeep Compass Longitude",
      ano: "2021/2021",
      km: "45.100 km",
      local: "Curitiba, PR",
      preco: "R$ 138.900",
      tag: "Destaque",
      cambio: "Automático",
    },
    {
      id: 3,
      nome: "VW Gol MPI 1.0",
      ano: "2023/2023",
      km: "12.000 km",
      local: "Belo Horizonte, MG",
      preco: "R$ 64.500",
      tag: "Novo",
      cambio: "Manual",
    },
    {
      id: 4,
      nome: "Honda Civic Touring",
      ano: "2020/2021",
      km: "58.000 km",
      local: "Campinas, SP",
      preco: "R$ 142.000",
      tag: "Repasse",
      cambio: "Automático",
    },
  ];

  return (
    <Container>
      <PageHeader>
        <div className="top-row">
          <div className="title-section">
            <h1>Estoque de Repasse</h1>
            <p>Explore as melhores oportunidades disponíveis agora.</p>
          </div>
        </div>
      </PageHeader>

      <FilterBar>
        <div className="search-input">
          <Search size={16} />
          <input placeholder="Busque por marca, modelo ou placa..." />
        </div>
        <div className="quick-filters">
          <FilterButton>
            <Filter size={14} /> Filtros
          </FilterButton>
          <FilterButton>
            Preço <ChevronDown size={14} />
          </FilterButton>
          <FilterButton>
            Marca <ChevronDown size={14} />
          </FilterButton>
          <FilterButton>
            Ano <ChevronDown size={14} />
          </FilterButton>
        </div>
      </FilterBar>

      <InventoryGrid>
        {veiculos.map((v) => (
          <VehicleCard key={v.id}>
            <div className="image-container">
              <img
                src={`https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=400`}
                alt={v.nome}
              />
              <div className="badge">{v.tag}</div>
            </div>
            <div className="content">
              <div className="header">
                <h3>{v.nome}</h3>
                <span>{v.ano}</span>
              </div>

              <div className="specs">
                <div className="spec-item">
                  <Gauge size={14} /> {v.km}
                </div>
                <div className="spec-item">
                  <Zap size={14} /> {v.cambio}
                </div>
                <div className="spec-item">
                  <MapPin size={14} /> {v.local}
                </div>
                <div className="spec-item">
                  <Calendar size={14} /> Financiável
                </div>
              </div>

              <div className="footer">
                <div className="price">
                  <span>Preço para Lojista</span>
                  <strong>{v.preco}</strong>
                </div>
                <BuyButton>Ver Detalhes</BuyButton>
              </div>
            </div>
          </VehicleCard>
        ))}
      </InventoryGrid>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#64748b",
            fontSize: "0.8rem",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Carregar mais veículos...
        </button>
      </div>
    </Container>
  );
};
