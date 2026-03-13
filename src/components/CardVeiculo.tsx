import { Car } from "lucide-react";
import styled from "styled-components";
import type { Veiculo } from "../types/tipos";
import { BadgeStatus } from "./BadgeStatus";

interface CardVeiculoProps {
  veiculo: Veiculo;
  imagemSrc?: string;
  aoClicar?: () => void;
}

function formatarMoeda(valor: number) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.cardHover};
    transform: translateY(-2px);
    img {
      transform: scale(1.05);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.muted};
`;

const VehicleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BadgePosition = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
`;

const YearBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Content = styled.div`
  padding: 1.25rem;
`;

const Brand = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Model = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  line-height: 1.25;
  margin: 0.25rem 0 0.5rem;
`;

const Description = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const PriceItem = styled.div`
  text-align: center;
`;

const PriceLabel = styled.p`
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: 500;
`;

const PriceValue = styled.p<{ $color?: string }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $color, theme }) => $color || theme.colors.foreground};
`;

export function CardVeiculo({
  veiculo,
  imagemSrc,
  aoClicar,
}: CardVeiculoProps) {
  return (
    <CardWrapper onClick={aoClicar}>
      <ImageWrapper>
        {imagemSrc ? (
          <VehicleImage
            src={imagemSrc}
            alt={`${veiculo.marca} ${veiculo.modelo}`}
            loading="lazy"
          />
        ) : (
          <Placeholder>
            <Car size={64} color="rgba(0,0,0,0.15)" />
          </Placeholder>
        )}
        <BadgePosition>
          <BadgeStatus status={veiculo.status} />
        </BadgePosition>
        <YearBadge>{veiculo.ano}</YearBadge>
      </ImageWrapper>

      <Content>
        <Brand>{veiculo.marca}</Brand>
        <Model>{veiculo.modelo}</Model>
        <Description>{veiculo.descricao}</Description>
        <PriceGrid>
          <PriceItem>
            <PriceLabel>FIPE</PriceLabel>
            <PriceValue>{formatarMoeda(veiculo.valorFipe)}</PriceValue>
          </PriceItem>
          <PriceItem>
            <PriceLabel>Web</PriceLabel>
            <PriceValue $color="hsl(210, 80%, 52%)">
              {formatarMoeda(veiculo.valorWeb)}
            </PriceValue>
          </PriceItem>
          <PriceItem>
            <PriceLabel>Venda</PriceLabel>
            <PriceValue $color="hsl(28, 95%, 55%)">
              {formatarMoeda(veiculo.valorVenda)}
            </PriceValue>
          </PriceItem>
        </PriceGrid>
      </Content>
    </CardWrapper>
  );
}
