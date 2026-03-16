import styled from "styled-components";
import {
  Plus,
  Edit,
  PauseCircle,
  ChevronLeft,
  MoreVertical,
  Gauge,
  Calendar,
  Settings2,
  Camera,
  Eye,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// --- ESTILOS ---
const Container = styled.div`
  padding: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: #f8fafc;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  .title-area {
    h1 {
      font-size: 1.5rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
    }
    p {
      font-size: 0.85rem;
      color: #64748b;
      margin-top: 2px;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  /* Garante 4 colunas em telas grandes */
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const AdCard = styled.div`
  background: white;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #cbd5e1;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  }

  .image-container {
    position: relative;
    height: 160px; /* Altura reduzida para escala menor */
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .status-badge {
      position: absolute;
      top: 8px;
      left: 8px;
      background: #0f172a;
      color: white;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.6rem;
      font-weight: 800;
      letter-spacing: 0.05em;
    }
    .photo-count {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.65rem;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }

  .content {
    padding: 1rem;
    flex: 1;

    .price-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;

      .price {
        font-size: 1.15rem;
        font-weight: 800;
        color: #e31d24;
      }
    }

    h3 {
      font-size: 0.9rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 8px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .specs-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      margin-bottom: 12px;

      .spec-item {
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 0.7rem;
        color: #64748b;
        font-weight: 500;
      }
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 6px;
  padding: 0.75rem 1rem;
  background: #f8fafc;
  border-top: 1px solid #f1f5f9;
`;

const BackLink = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 4px;
  text-transform: uppercase;
  &:hover {
    color: #0f172a;
  }
`;

// --- COMPONENTE EXPORTADO ---
export const MeusAnunciosFornecedores = () => {
  const navigate = useNavigate();

  const ads = [
    {
      id: 1,
      title: "Honda Civic 2.0 EXL Turbo",
      price: "R$ 102.900",
      year: "2021/2021",
      km: "34.000",
      gear: "Automático",
      img: "https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=500",
      status: "ATIVO",
      views: 1240,
    },
    {
      id: 2,
      title: "Fiat Toro Freedom 1.3",
      price: "R$ 89.000",
      year: "2022/2023",
      km: "12.500",
      gear: "Automático",
      img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=500",
      status: "ATIVO",
      views: 856,
    },
    {
      id: 3,
      title: "Toyota Corolla Altis",
      price: "R$ 142.500",
      year: "2023/2024",
      km: "5.200",
      gear: "CVT",
      img: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=500",
      status: "PAUSADO",
      views: 432,
    },
    {
      id: 4,
      title: "Jeep Compass Longitude",
      price: "R$ 118.900",
      year: "2020/2021",
      km: "45.000",
      gear: "Automático",
      img: "https://images.unsplash.com/photo-1611016186353-9af58c69a533?q=80&w=500",
      status: "ATIVO",
      views: 2105,
    },
  ];

  return (
    <Container>
      <TopBar>
        <div className="title-area">
          <BackLink onClick={() => navigate("/gestao")}>
            <ChevronLeft size={14} /> Voltar para Dashboard
          </BackLink>
          <h1>Meus Anúncios</h1>
          <p>
            Você possui <b>{ads.length} anúncios</b> ativos no momento.
          </p>
        </div>

        <ActionButton $primary onClick={() => navigate("/meus-anuncios/novo")}>
          <Plus size={16} /> NOVO ANÚNCIO
        </ActionButton>
      </TopBar>

      <Grid>
        {ads.map((ad) => (
          <AdCard key={ad.id}>
            <div className="image-container">
              <div
                className="status-badge"
                style={{
                  background: ad.status === "PAUSADO" ? "#64748b" : "#0f172a",
                }}
              >
                {ad.status}
              </div>
              <div className="photo-count">
                <Camera size={10} /> 12
              </div>
              <img src={ad.img} alt={ad.title} />
            </div>

            <div className="content">
              <div className="price-row">
                <span className="price">{ad.price}</span>
                <MoreVertical size={16} color="#94a3b8" cursor="pointer" />
              </div>

              <h3>{ad.title}</h3>

              <div className="specs-grid">
                <div className="spec-item">
                  <Calendar size={12} /> {ad.year}
                </div>
                <div className="spec-item">
                  <Gauge size={12} /> {ad.km} km
                </div>
                <div className="spec-item">
                  <Settings2 size={12} /> {ad.gear}
                </div>
                <div className="spec-item" style={{ color: "#3b82f6" }}>
                  <Eye size={12} /> {ad.views}
                </div>
              </div>
            </div>

            <ButtonGroup>
              <SecondaryButton>
                <Edit size={14} /> Editar
              </SecondaryButton>
              <SecondaryButton>
                <PauseCircle size={14} />{" "}
                {ad.status === "ATIVO" ? "Pausar" : "Ativar"}
              </SecondaryButton>
            </ButtonGroup>
          </AdCard>
        ))}
      </Grid>
    </Container>
  );
};

// --- COMPONENTES DE BOTÃO ---
const ActionButton = styled.button<{ $primary?: boolean }>`
  background: #e31d24;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #c1181f;
    transform: translateY(-1px);
  }
`;

const SecondaryButton = styled.button`
  flex: 1;
  background: white;
  border: 1px solid #e2e8f0;
  padding: 6px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #f1f5f9;
    color: #e31d24;
    border-color: #cbd5e1;
  }
`;
