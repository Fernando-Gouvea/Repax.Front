import React, { useState } from "react";
import styled from "styled-components";
import { 
  Camera, Video, Heart, MapPin, 
  Clock, Gauge, Zap, 
  ShieldCheck
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const colors = {
  primary: "#E31D24",
  secondary: "#0056B3",
  dark: "#0F172A",
  textMuted: "#64748B",
  border: "#E2E8F0",
  white: "#FFFFFF",
  bgLight: "#F8FAFC",
};

const Card = styled.div<{ $viewType?: string }>`
  background: ${colors.white};
  border-radius: 8px;
  border: 1px solid ${colors.border};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: ${(props) => (props.$viewType === "list" ? "row" : "column")};
  overflow: hidden;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    /* Borda continua neutra, o que muda é a sombra profunda */
    border-color: #CBD5E1;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const ImageWrapper = styled.div<{ $viewType?: string }>`
  position: relative;
  aspect-ratio: 16 / 10;
  width: ${(props) => (props.$viewType === "list" ? "280px" : "100%")};
  background: #f1f1f1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${Card}:hover & img {
    transform: scale(1.08);
  }
`;

const BadgesOverlay = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  gap: 5px;
  z-index: 2;

  span {
    background: rgba(15, 23, 42, 0.75);
    backdrop-filter: blur(4px);
    color: white;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

const FavoriteButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background: ${(props) => (props.$active ? "white" : "rgba(0,0,0,0.2)")};
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);

  svg {
    transition: transform 0.2s ease;
    fill: ${(props) => (props.$active ? colors.primary : "none")};
    color: ${(props) => (props.$active ? colors.primary : "white")};
  }

  &:hover {
    background: white;
    transform: scale(1.1);
    svg { color: ${colors.primary}; }
  }
`;

const Content = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
`;

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  color: ${colors.dark};
  letter-spacing: -0.03em;
`;

const TechSpecs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  margin: 1rem 0;
  padding: 0.75rem 0;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
`;

const SpecItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.65rem;
  color: ${colors.textMuted};
  font-weight: 600;
  
  svg { color: ${colors.secondary}; }
  strong { color: ${colors.dark}; }
`;

const Title = styled.h3`
  font-size: 0.8rem;
  font-weight: 700;
  color: #334155;
  text-transform: uppercase;
  line-height: 1.4;
  margin-bottom: 0.5rem;
`;

const ActionButton = styled.button`
  width: 100%;
  background: transparent;
  color: ${colors.primary};
  border: 1.5px solid ${colors.primary};
  padding: 0.7rem;
  border-radius: 6px;
  font-weight: 800;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: all 0.3s;
  margin-bottom: 1rem;

  ${Card}:hover & {
    background: ${colors.primary};
    color: white;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const VeiculoCard = ({ veiculo, viewType = "grid" }: any) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card $viewType={viewType} onClick={() => navigate(`/veiculo/${veiculo.id}`)}>
      <ImageWrapper $viewType={viewType}>
        <BadgesOverlay>
          <span><Camera size={12} /> 12</span>
          <span><Video size={12} /> Vídeo</span>
        </BadgesOverlay>
        
        <FavoriteButton $active={isFavorite} onClick={toggleFavorite}>
          <Heart size={18} />
        </FavoriteButton>

        <img src={veiculo.fotoUrl} alt={veiculo.modelo} />
        
        <div style={{
          position: 'absolute', bottom: '8px', right: '8px',
          background: '#22c55e', color: 'white', padding: '2px 8px',
          borderRadius: '4px', fontSize: '0.6rem', fontWeight: 800
        }}>
          LAUDO APROVADO
        </div>
      </ImageWrapper>

      <Content>
        <HeaderInfo>
          <Price>
            {veiculo.valorVenda?.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
          </Price>
          <div style={{ color: colors.secondary, fontSize: '0.6rem', fontWeight: 800 }}>REPASSE</div>
        </HeaderInfo>

        <Title>{veiculo.marca} {veiculo.modelo} {veiculo.versao}</Title>

        <TechSpecs>
          <SpecItem><Gauge size={12} /> <strong>{veiculo.quilometragem?.toLocaleString()} km</strong></SpecItem>
          <SpecItem><Clock size={12} /> Ano: <strong>{veiculo.ano}</strong></SpecItem>
          <SpecItem><Zap size={12} /> Placa: <strong>Final {veiculo.placa || '8'}</strong></SpecItem>
          <SpecItem><ShieldCheck size={12} /> Câmbio: <strong>Auto</strong></SpecItem>
        </TechSpecs>

        <div style={{
          fontSize: '0.65rem', color: '#B91C1C', background: '#FEF2F2',
          padding: '8px', borderRadius: '6px', textAlign: 'center',
          fontWeight: 700, marginBottom: '1rem', display: 'flex', 
          alignItems: 'center', justifyContent: 'center', gap: '8px'
        }}>
          <Clock size={14} /> ENCERRA EM: 06H 53M
        </div>

        <ActionButton>Compre Já</ActionButton>

        <Footer>
          <span style={{ fontSize: '0.6rem', color: colors.textMuted, fontWeight: 700 }}>REF: {veiculo.id}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.65rem', color: colors.textMuted, fontWeight: 700 }}>
            <MapPin size={12} color={colors.primary} />
            {veiculo.cidade} - {veiculo.estado}
          </div>
        </Footer>
      </Content>
    </Card>
  );
};