import { useState, useMemo, useEffect } from "react";
import styled from "styled-components";
import {
  LayoutGrid,
  List,
  X,
  Search,
  SlidersHorizontal,
  CarFront,
} from "lucide-react";

// --- COMPONENTES ---
import { veiculosMock } from "../../dados/mockDados";
import { VeiculoCard } from "../../components/VeiculoCard";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { VeiculoCardSkeleton } from "../../components/VeiculoCardSkeleton";
import { SidebarFilters } from "../../components/SidebarFilters";
import { BannerPromocional } from "../../components/BannerPromocional"; // Importando o novo Banner

const colors = {
  primary: "#E31D24",
  secondary: "#0056B3",
  dark: "#0F172A",
  lightGray: "#F8FAFC",
  border: "#E2E8F0",
  textMuted: "#64748B",
};

const INITIAL_FILTERS = {
  busca: "",
  marca: "",
  modelo: "",
  precoMin: "",
  precoMax: "",
  kmMin: "",
  kmMax: "",
  cor: "",
  combustivel: "",
  cambio: "",
  carroceria: "",
  cidade: "",
};

// --- STYLED COMPONENTS ---

const Page = styled.div`
  background: #f9fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LayoutFull = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 2rem 5%;
  width: 100%;
  flex: 1;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 2rem 0;
  gap: 1.5rem;

  .title-group {
    h1 {
      font-size: clamp(1.2rem, 3vw, 1.6rem);
      font-weight: 900;
      text-transform: uppercase;
      margin: 0;
    }
    p {
      color: ${colors.textMuted};
      font-size: 0.9rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchContainer = styled.div`
  background: white;
  border-radius: 0.8rem;
  border: 1px solid ${colors.border};
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.05);
  flex: 1;
  max-width: 44rem;

  input {
    border: none;
    outline: none;
    font-size: 1rem;
    width: 100%;
    color: #475569;
    background: transparent;
  }
  .filter-icon-btn {
    padding-left: 1rem;
    border: none;
    border-left: 1px solid ${colors.border};
    color: ${colors.dark};
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 600;
    white-space: nowrap;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  background: ${colors.border};
  padding: 0.25rem;
  border-radius: 0.6rem;
  button {
    border: none;
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    display: flex;
    transition: all 0.2s;
  }
`;

const Grid = styled.div<{ $viewType: "grid" | "list" }>`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: ${(props) =>
    props.$viewType === "grid"
      ? "repeat(auto-fill, minmax(18rem, 1fr))"
      : "1fr"};
`;

const FilterDrawer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.$isOpen ? "0" : "-100%")};
  width: min(25rem, 100%);
  height: 100vh;
  background: white;
  z-index: 3000;
  box-shadow: -0.6rem 0 2.5rem rgba(0, 0, 0, 0.15);
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Backdrop = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  z-index: 2999;
  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  background: white;
  border-radius: 1.5rem;
  border: 1px dashed ${colors.border};
  grid-column: 1 / -1;

  .icon-wrapper {
    width: 80px;
    height: 80px;
    background: ${colors.lightGray};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${colors.textMuted};
  }

  h3 {
    font-size: 1.4rem;
    font-weight: 800;
    color: ${colors.dark};
    margin-bottom: 0.5rem;
  }

  p {
    color: ${colors.textMuted};
    max-width: 300px;
    margin-bottom: 1.5rem;
    line-height: 1.5;
  }

  button {
    background: ${colors.dark};
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 700;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default function CatalogoPublico() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [filtros, setFiltros] = useState(INITIAL_FILTERS);

  // Removi os estados e efeitos do carrossel antigo daqui, pois agora o BannerPromocional cuida disso.

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, [filtros]);

  const veiculosFiltrados = useMemo(() => {
    return veiculosMock.filter((v: any) => {
      const matchBusca = (v.marca + " " + v.modelo)
        .toLowerCase()
        .includes(filtros.busca.toLowerCase());
      const matchCidade =
        !filtros.cidade ||
        v.cidade?.toLowerCase().includes(filtros.cidade.toLowerCase());
      const matchCombustivel =
        !filtros.combustivel || v.combustivel === filtros.combustivel;
      const matchCor = !filtros.cor || v.cor === filtros.cor;
      const matchCambio = !filtros.cambio || v.cambio === filtros.cambio;
      const matchPreco =
        (!filtros.precoMin ||
          (v.valorVenda || 0) >= Number(filtros.precoMin)) &&
        (!filtros.precoMax || (v.valorVenda || 0) <= Number(filtros.precoMax));
      const matchKm =
        (!filtros.kmMin || (v.quilometragem || 0) >= Number(filtros.kmMin)) &&
        (!filtros.kmMax || (v.quilometragem || 0) <= Number(filtros.kmMax));

      return (
        matchBusca &&
        matchCidade &&
        matchCombustivel &&
        matchCor &&
        matchCambio &&
        matchPreco &&
        matchKm
      );
    });
  }, [filtros]);

  return (
    <Page>
      <Header />

      {/* Substiuição do código antigo pelo componente BannerPromocional */}
      <BannerPromocional />

      <LayoutFull>
        <TopBar>
          <div className="title-group">
            <h1>Catálogo de Veículos</h1>
            <p>{veiculosFiltrados.length} encontrados</p>
          </div>

          <SearchContainer>
            <Search size={20} color={colors.primary} />
            <input
              placeholder="Digite marca ou modelo..."
              value={filtros.busca}
              onChange={(e) =>
                setFiltros({ ...filtros, busca: e.target.value })
              }
            />
            <button
              className="filter-icon-btn"
              onClick={() => setIsDrawerOpen(true)}
            >
              <SlidersHorizontal size={20} /> <span>Filtros</span>
            </button>
          </SearchContainer>

          <ViewToggle>
            <button
              onClick={() => setViewType("grid")}
              style={{
                background: viewType === "grid" ? "white" : "transparent",
              }}
            >
              <LayoutGrid size={18} />
            </button>
            <button
              onClick={() => setViewType("list")}
              style={{
                background: viewType === "list" ? "white" : "transparent",
              }}
            >
              <List size={18} />
            </button>
          </ViewToggle>
        </TopBar>

        <Grid $viewType={viewType}>
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <VeiculoCardSkeleton key={i} viewType={viewType} />
            ))
          ) : veiculosFiltrados.length > 0 ? (
            veiculosFiltrados.map((v) => (
              <VeiculoCard key={v.id} veiculo={v} viewType={viewType} />
            ))
          ) : (
            <EmptyState>
              <div className="icon-wrapper">
                <CarFront size={48} strokeWidth={1.5} />
              </div>
              <h3>Nenhum veículo encontrado</h3>
              <p>
                Não encontramos resultados para os filtros selecionados. Tente
                ajustar sua busca ou limpar os filtros.
              </p>
              <button onClick={() => setFiltros(INITIAL_FILTERS)}>
                LIMPAR FILTROS
              </button>
            </EmptyState>
          )}
        </Grid>
      </LayoutFull>

      <Backdrop $isOpen={isDrawerOpen} onClick={() => setIsDrawerOpen(false)} />
      <FilterDrawer $isOpen={isDrawerOpen}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
        >
          <h2 style={{ fontSize: "1.1rem", fontWeight: 900 }}>FILTROS</h2>
          <X
            onClick={() => setIsDrawerOpen(false)}
            style={{ cursor: "pointer" }}
          />
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          <SidebarFilters
            values={filtros}
            onChange={setFiltros}
            onClear={() => setFiltros(INITIAL_FILTERS)}
            onApply={() => setIsDrawerOpen(false)}
          />
        </div>
      </FilterDrawer>

      <Footer />
    </Page>
  );
}
