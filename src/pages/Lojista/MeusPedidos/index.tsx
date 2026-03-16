import styled from "styled-components";
import { Search, Eye, Filter, Download, FileText } from "lucide-react";

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
  display: flex;
  flex-direction: column; // Empilha no mobile
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }

  .title-section {
    h1 {
      font-size: 1.25rem;
      font-weight: 800;
      color: #0f172a;
      letter-spacing: -0.02em;

      @media (min-width: 768px) {
        font-size: 1.4rem;
      }
    }
    p {
      color: #64748b;
      font-size: 0.8rem;
      margin-top: 2px;
    }
  }

  .actions {
    display: flex;
    gap: 8px;
    width: 100%; // Botões ocupam largura total ou se ajustam

    @media (min-width: 768px) {
      width: auto;
    }

    button {
      flex: 1; // Botões iguais no mobile
      justify-content: center;
      @media (min-width: 768px) {
        flex: none;
      }
    }
  }
`;

const ToolBar = styled.div`
  display: flex;
  flex-direction: column; // Empilha no mobile
  background: white;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-bottom: none;
  border-radius: 8px 8px 0 0;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem;
  }

  .search-wrapper {
    position: relative;
    width: 100%;

    @media (min-width: 768px) {
      flex: 1;
      max-width: 400px;
    }

    input {
      width: 100%;
      padding: 10px 12px 10px 36px; // Padding maior para toque no mobile
      font-size: 0.85rem;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      background: #f8fafc;

      @media (min-width: 768px) {
        padding: 6px 12px 6px 32px;
      }
    }

    svg {
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      color: #94a3b8;
    }
  }

  .actions {
    display: flex;
    justify-content: flex-end;
  }
`;

const TableCard = styled.div`
  background: white;
  border-radius: 0 0 8px 8px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  /* Esconde o cabeçalho no mobile */
  thead {
    @media (max-width: 768px) {
      display: none;
    }
  }

  th {
    background: #f8fafc;
    padding: 0.75rem 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border-bottom: 1px solid #e2e8f0;
  }

  tbody tr {
    /* Transforma a linha em um "Card" no mobile */
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      padding: 1rem;
      border-bottom: 1px solid #e2e8f0;
      position: relative;
    }
  }

  td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #f1f5f9;
    font-size: 0.85rem;
    color: #334155;

    @media (max-width: 768px) {
      display: flex;
      justify-content: space-between;
      padding: 0.25rem 0;
      border: none;

      /* Adiciona o rótulo antes do valor no mobile */
      &::before {
        content: attr(data-label);
        font-weight: 700;
        color: #64748b;
        font-size: 0.75rem;
        text-transform: uppercase;
      }
    }
  }

  /* Ajuste específico para a célula de ações no mobile */
  td:last-child {
    @media (max-width: 768px) {
      margin-top: 0.5rem;
      padding-top: 0.75rem;
      border-top: 1px dashed #e2e8f0;
      justify-content: flex-end;
      &::before {
        display: none;
      }
    }
  }
`;

const StatusTag = styled.span<{ status: string }>`
  padding: 2px 8px;
  border-radius: 99px;
  font-size: 0.65rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-transform: uppercase;

  background: ${(props) => (props.status === "pago" ? "#f0fdf4" : "#fffbeb")};
  color: ${(props) => (props.status === "pago" ? "#16a34a" : "#b45309")};
  border: 1px solid
    ${(props) => (props.status === "pago" ? "#bcf0da" : "#fde68a")};

  &::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: currentColor;
  }
`;

const IconButton = styled.button`
  background: white;
  border: 1px solid #e2e8f0;
  padding: 8px; // Maior para mobile
  border-radius: 6px;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  @media (min-width: 768px) {
    padding: 6px;
  }

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
    border-color: #cbd5e1;
  }
`;

// --- Estilos de Botão Reutilizáveis ---
const PrimaryBtn = styled.button`
  background: #0f172a;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const SecondaryBtn = styled(PrimaryBtn)`
  background: white;
  color: #334155;
  border: 1px solid #e2e8f0;
`;

// --- Componente Principal ---

export const MeusPedidos = () => {
  const pedidos = [
    {
      id: "#8821",
      veiculo: "Toyota Corolla XEi 2.0",
      data: "12/03/2026",
      valor: "R$ 115.000,00",
      status: "pago",
      origem: "Repasse Direto",
    },
    {
      id: "#8815",
      veiculo: "VW Gol MPI 2021",
      data: "10/03/2026",
      valor: "R$ 42.900,00",
      status: "aguardando",
      origem: "Estoque Interno",
    },
    {
      id: "#8790",
      veiculo: "Jeep Compass Longitude",
      data: "05/03/2026",
      valor: "R$ 138.000,00",
      status: "pago",
      origem: "Parceiro VIP",
    },
  ];

  return (
    <Container>
      <PageHeader>
        <div className="title-section">
          <h1>Meus Pedidos</h1>
          <p>Gerencie suas aquisições e o status financeiro.</p>
        </div>
        <div className="actions">
          <SecondaryBtn>
            <Download size={14} /> Exportar
          </SecondaryBtn>
          <PrimaryBtn>Novo Pedido</PrimaryBtn>
        </div>
      </PageHeader>

      <ToolBar>
        <div className="search-wrapper">
          <Search size={14} />
          <input placeholder="Filtrar por ID ou veículo..." />
        </div>
        <div className="actions">
          <IconButton title="Filtros Avançados">
            <Filter size={16} />
          </IconButton>
        </div>
      </ToolBar>

      <TableCard>
        <Table>
          <thead>
            <tr>
              <th>ID Pedido</th>
              <th>Veículo / Detalhes</th>
              <th>Origem</th>
              <th>Data</th>
              <th>Valor Total</th>
              <th>Status</th>
              <th style={{ textAlign: "right" }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => (
              <tr key={p.id}>
                <td
                  data-label="ID Pedido"
                  style={{ fontWeight: 800, color: "#e31d24" }}
                >
                  {p.id}
                </td>
                <td data-label="Veículo">
                  <div style={{ textAlign: "right", display: "contents" }}>
                    <div style={{ fontWeight: 700, color: "#1e293b" }}>
                      {p.veiculo}
                    </div>
                  </div>
                </td>
                <td data-label="Origem">{p.origem}</td>
                <td data-label="Data">{p.data}</td>
                <td
                  data-label="Valor"
                  style={{ fontWeight: 800, color: "#0f172a" }}
                >
                  {p.valor}
                </td>
                <td data-label="Status">
                  <StatusTag status={p.status}>
                    {p.status === "pago" ? "Liquidado" : "Pendente"}
                  </StatusTag>
                </td>
                <td>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <IconButton>
                      <Eye size={14} />
                    </IconButton>
                    <IconButton>
                      <FileText size={14} />
                    </IconButton>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableCard>
    </Container>
  );
};
