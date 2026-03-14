import { useState } from "react";
import { Search } from "lucide-react";

// import carro1 from "@/assets/carro-1.jpg";
// import carro2 from "@/assets/carro-2.jpg";
// import carro3 from "@/assets/carro-3.jpg";
// import carro4 from "@/assets/carro-4.jpg";
// import carro5 from "@/assets/carro-5.jpg";
// import carro6 from "@/assets/carro-6.jpg";

import type { StatusVeiculo } from "../../types/tipos";
import { veiculosMock } from "../../dados/mockDados";


import "./index.css";

// const imagensVeiculos: Record<string, string> = {
//   "1": carro1,
//   "2": carro2,
//   "3": carro3,
//   "4": carro4,
//   "5": carro5,
//   "6": carro6,
// };

const filtrosStatus: { rotulo: string; valor: StatusVeiculo | "todos" }[] = [
  { rotulo: "Todos", valor: "todos" },
  { rotulo: "Disponíveis", valor: "disponivel" },
  { rotulo: "Em Negociação", valor: "negociacao" },
  { rotulo: "Vendidos", valor: "vendido" },
];

export default function Veiculos() {
  const [filtroStatus, setFiltroStatus] = useState<StatusVeiculo | "todos">(
    "todos",
  );

  const [busca, setBusca] = useState("");

  const veiculosFiltrados = veiculosMock.filter((v) => {
    const correspondeStatus =
      filtroStatus === "todos" || v.status === filtroStatus;

    const correspondeBusca =
      !busca ||
      `${v.marca} ${v.modelo} ${v.modelo}`
        .toLowerCase()
        .includes(busca.toLowerCase());

    return correspondeStatus && correspondeBusca;
  });

  return (
    <div className="veiculos-page">
      <div className="page-header">
        <h1 className="title">Veículos</h1>
        <p className="subtitle">
          Gerencie os veículos disponíveis para repasse
        </p>
      </div>

      <div className="filter-row">
        <div className="search-wrapper">
          <div className="search-icon">
            <Search size={16} />
          </div>

          <input
            className="search-input"
            placeholder="Buscar por marca, modelo..."
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>

        <div className="filter-buttons">
          {filtrosStatus.map((f) => (
            <button
              key={f.valor}
              className={`filter-btn ${
                filtroStatus === f.valor ? "active" : ""
              }`}
              onClick={() => setFiltroStatus(f.valor)}
            >
              {f.rotulo}
            </button>
          ))}
        </div>
      </div>

      <div className="grid">
        {/* {veiculosFiltrados.map((veiculo) => (
          <CardVeiculo
            key={veiculo.id}
            veiculo={veiculo}
            imagemSrc={imagensVeiculos[veiculo.id]}
          />
        ))} */}
      </div>

      {veiculosFiltrados.length === 0 && (
        <div className="empty-state">Nenhum veículo encontrado</div>
      )}
    </div>
  );
}
