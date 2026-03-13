import { Car, TrendingUp, Clock, CheckCircle2 } from "lucide-react";
import styled from "styled-components";
import { useAuth } from "../../contextos/ContextoAuth";
import { veiculosMock } from "../../dados/mockDados";

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 0.25rem;
`;

const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin: 2rem 0;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const KPICard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.5rem;
`;

const KPIValue = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
`;

const KPILabel = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.mutedForeground};
  margin-top: 0.25rem;
`;

const TableCard = styled.div`
  background: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.radius};
  box-shadow: ${({ theme }) => theme.shadows.card};
  padding: 1.5rem;
`;

const TableTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.foreground};
  margin-bottom: 1rem;
`;

const Table = styled.table`
  width: 100%;
  font-size: 0.875rem;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: 0.75rem 0;
  color: ${({ theme }) => theme.colors.mutedForeground};
  font-weight: 500;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  &:last-child {
    text-align: right;
  }
  &:nth-child(3) {
    text-align: right;
  }
`;

const Td = styled.td`
  padding: 0.75rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border}40;
  &:last-child {
    text-align: right;
  }
  &:nth-child(3) {
    text-align: right;
  }
`;

const StatusBadge = styled.span<{ $status: string }>`
  display: inline-block;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${({ $status }) =>
    $status === "disponivel"
      ? "hsla(152, 60%, 42%, 0.1)"
      : $status === "negociacao"
        ? "hsla(38, 92%, 50%, 0.1)"
        : "hsla(0, 72%, 51%, 0.1)"};
  color: ${({ $status }) =>
    $status === "disponivel"
      ? "hsl(152, 60%, 42%)"
      : $status === "negociacao"
        ? "hsl(38, 92%, 50%)"
        : "hsl(0, 72%, 51%)"};
`;

export default function PaginaDashboard() {
  const { usuario } = useAuth();

  const totalVeiculos = veiculosMock.length;
  const disponiveis = veiculosMock.filter(
    (v) => v.status === "disponivel",
  ).length;
  const emNegociacao = veiculosMock.filter(
    (v) => v.status === "negociacao",
  ).length;
  const vendidos = veiculosMock.filter((v) => v.status === "vendido").length;

  const cards = [
    {
      titulo: "Total de Veículos",
      valor: totalVeiculos,
      icone: Car,
      cor: "hsl(230, 60%, 22%)",
    },
    {
      titulo: "Disponíveis",
      valor: disponiveis,
      icone: TrendingUp,
      cor: "hsl(152, 60%, 42%)",
    },
    {
      titulo: "Em Negociação",
      valor: emNegociacao,
      icone: Clock,
      cor: "hsl(38, 92%, 50%)",
    },
    {
      titulo: "Vendidos",
      valor: vendidos,
      icone: CheckCircle2,
      cor: "hsl(28, 95%, 55%)",
    },
  ];

  return (
    <div>
      <div>
        <Title>Olá, {usuario?.nome}!</Title>
        <Subtitle>Aqui está o resumo do seu painel de repasses</Subtitle>
      </div>

      <KPIGrid>
        {cards.map((card) => (
          <KPICard key={card.titulo}>
            <div style={{ marginBottom: "1rem" }}>
              <card.icone size={32} color={card.cor} />
            </div>
            <KPIValue>{card.valor}</KPIValue>
            <KPILabel>{card.titulo}</KPILabel>
          </KPICard>
        ))}
      </KPIGrid>

      <TableCard>
        <TableTitle>Últimos Anúncios</TableTitle>
        <div style={{ overflowX: "auto" }}>
          <Table>
            <thead>
              <tr>
                <Th>Veículo</Th>
                <Th>Ano</Th>
                <Th>Valor Venda</Th>
                <Th>Status</Th>
              </tr>
            </thead>
            <tbody>
              {veiculosMock.slice(0, 5).map((v) => (
                <tr key={v.id}>
                  <Td style={{ fontWeight: 500, color: "inherit" }}>
                    {v.marca} {v.modelo}
                  </Td>
                  <Td style={{ color: "hsl(225, 10%, 48%)" }}>{v.ano}</Td>
                  <Td style={{ fontWeight: 600, color: "hsl(28, 95%, 55%)" }}>
                    {v.valorVenda.toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </Td>
                  <Td>
                    <StatusBadge $status={v.status}>
                      {v.status === "disponivel"
                        ? "Disponível"
                        : v.status === "negociacao"
                          ? "Negociação"
                          : "Vendido"}
                    </StatusBadge>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </TableCard>
    </div>
  );
}
