import styled from "styled-components";
import { Trash2, Check } from "lucide-react";

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100vh;
`;

const FilterBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-right: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  /* Scrollbar fina para não poluir o layout */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
  }
`;

const FilterFooter = styled.div`
  padding-top: 1.5rem;
  margin-top: auto;
  border-top: 1px solid #e2e8f0;
  background: white;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 800;
    color: #0f172a;
    text-transform: uppercase;
    opacity: 0.8;

    span {
      color: #e31d24;
      font-weight: 900;
      text-transform: none;
      font-size: 0.75rem;
    }
  }

  input[type="text"],
  select {
    padding: 0.6rem;
    border-radius: 0.5rem;
    border: 1px solid #e2e8f0;
    background: #f8fafc;
    font-size: 0.95rem;
    outline: none;
    appearance: none;
    transition: border 0.2s;

    &:focus {
      border-color: #e31d24;
    }
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    background: #e2e8f0;
    border-radius: 5px;
    outline: none;
    margin: 8px 0;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      background: #e31d24;
      border-radius: 50%;
      cursor: pointer;
      border: 2px solid white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
`;

const ActionButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 0.8rem;
`;

const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem;
  border-radius: 0.6rem;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
`;

const ClearButton = styled(BaseButton)`
  background: #f1f5f9;
  color: #64748b;
  &:hover {
    background: #e2e8f0;
  }
`;

const ApplyButton = styled(BaseButton)`
  background: #e31d24;
  color: white;
  &:hover {
    filter: brightness(0.9);
  }
`;

interface SidebarFiltersProps {
  values: any;
  onChange: (update: any) => void;
  onClear: () => void;
  onApply: () => void;
}

export const SidebarFilters = ({
  values,
  onChange,
  onClear,
  onApply,
}: SidebarFiltersProps) => {
  const formatMoeda = (valor: any) =>
    Number(valor || 0).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0,
    });

  const formatKM = (valor: any) =>
    `${Number(valor || 0).toLocaleString("pt-BR")} km`;

  return (
    <FilterWrapper>
      <FilterBody>
        <FormGroup>
          <label>Cidade</label>
          <input
            type="text"
            placeholder="Ex: São Paulo"
            value={values.cidade || ""}
            onChange={(e) => onChange({ ...values, cidade: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label>
            Preço Até: <span>{formatMoeda(values.precoMax || 500000)}</span>
          </label>
          <input
            type="range"
            min="0"
            max="500000"
            step="5000"
            value={values.precoMax || 500000}
            onChange={(e) => onChange({ ...values, precoMax: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label>
            KM Até: <span>{formatKM(values.kmMax || 200000)}</span>
          </label>
          <input
            type="range"
            min="0"
            max="200000"
            step="1000"
            value={values.kmMax || 200000}
            onChange={(e) => onChange({ ...values, kmMax: e.target.value })}
          />
        </FormGroup>

        <FormGroup>
          <label>Cor do Veículo</label>
          <select
            value={values.cor || ""}
            onChange={(e) => onChange({ ...values, cor: e.target.value })}
          >
            <option value="">Todas as cores</option>
            <option value="Branco">Branco</option>
            <option value="Preto">Preto</option>
            <option value="Cinza">Cinza</option>
            <option value="Prata">Prata</option>
            <option value="Vermelho">Vermelho</option>
            <option value="Azul">Azul</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Combustível</label>
          <select
            value={values.combustivel || ""}
            onChange={(e) =>
              onChange({ ...values, combustivel: e.target.value })
            }
          >
            <option value="">Todos</option>
            <option value="Flex">Flex</option>
            <option value="Gasolina">Gasolina</option>
            <option value="Diesel">Diesel</option>
            <option value="Híbrido">Híbrido / Elétrico</option>
          </select>
        </FormGroup>
      </FilterBody>

      <FilterFooter>
        <ActionButtonGroup>
          <ClearButton type="button" onClick={onClear}>
            <Trash2 size={16} /> LIMPAR
          </ClearButton>
          <ApplyButton type="button" onClick={onApply}>
            <Check size={16} /> APLICAR
          </ApplyButton>
        </ActionButtonGroup>
      </FilterFooter>
    </FilterWrapper>
  );
};
