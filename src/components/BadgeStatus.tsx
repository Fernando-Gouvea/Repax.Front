import styled from "styled-components";
import type { StatusVeiculo } from "../types/tipos";

const configStatus: Record<
  StatusVeiculo,
  { rotulo: string; bg: string; color: string }
> = {
  disponivel: {
    rotulo: "Disponível",
    bg: "hsl(152, 60%, 42%)",
    color: "hsl(0, 0%, 100%)",
  },
  negociacao: {
    rotulo: "Em Negociação",
    bg: "hsl(38, 92%, 50%)",
    color: "hsl(0, 0%, 100%)",
  },
  vendido: {
    rotulo: "Vendido",
    bg: "hsl(0, 72%, 51%)",
    color: "hsl(0, 0%, 100%)",
  },
};

const StyledBadge = styled.span<{ $bg: string; $color: string }>`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
`;

interface BadgeStatusProps {
  status: StatusVeiculo;
}

export function BadgeStatus({ status }: BadgeStatusProps) {
  const config = configStatus[status];
  return (
    <StyledBadge $bg={config.bg} $color={config.color}>
      {config.rotulo}
    </StyledBadge>
  );
}
