import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  DollarSign,
  Camera,
  CheckCircle2,
  ChevronLeft,
  Upload,
  Save,
  Eye,
  Palette,
  CreditCard,
  Gauge,
  Search,
  X,
  Clock,
  Hash,
  Loader2,
  Info,
  Fuel,
  Settings2,
  FileText,
  Calendar,
} from "lucide-react";

// --- Interfaces ---
interface FipeItem {
  codigo: string;
  nome: string;
}

interface VeiculoDetalhe {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
}

// --- Lista de Opcionais Completa ---
const LISTA_OPCIONAIS = [
  "Ar Condicionado",
  "Direção Hidráulica",
  "Direção Elétrica",
  "Vidros Elétricos",
  "Travas Elétricas",
  "Alarme",
  "Airbag",
  "Freio ABS",
  "Ar Quente",
  "Bancos de Couro",
  "Teto Solar",
  "Rodas de Liga Leve",
  "Sensor de Ré",
  "Câmera de Ré",
  "Multimídia",
  "Bluetooth",
  "GPS",
  "Volante Multifuncional",
  "Piloto Automático",
  "Farol de Milha",
  "Farol de Xenônio",
  "Tração 4x4",
  "Computador de Bordo",
  "Sensor de Chuva",
  "Desembaçador Traseiro",
  "Limpador Traseiro",
  "Retrovisores Elétricos",
  "Único Dono",
];

// --- Estilos Refinados ---
const CriarContainer = styled.div`
  padding: 1rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  background-color: #f8fafc;
  color: #1e293b;

  @media (max-width: 768px) {
    padding: 0.75rem;
    padding-bottom: 5rem;
  }
`;

const CriarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;

  .title-area {
    h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }
    p {
      font-size: 0.8rem;
      color: #64748b;
    }
  }

  .actions {
    display: flex;
    gap: 0.5rem;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const CriarCard = styled.section`
  background: white;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  padding: 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);

  h2 {
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
    color: #475569;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const InputGrid = styled.div<{ $cols?: string; $mobileCols?: string }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.$cols || "repeat(auto-fit, minmax(180px, 1fr))"};
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: ${(props) => props.$mobileCols || "1fr"};
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  label {
    font-size: 0.7rem;
    font-weight: 600;
    color: #64748b;
    display: flex;
    align-items: center;
    gap: 4px;
  }

  input,
  select,
  textarea {
    padding: 0.6rem 0.75rem;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 0.85rem;
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #334155;

    &:focus {
      border-color: #e31d24;
      box-shadow: 0 0 0 2px rgba(227, 29, 36, 0.1);
      outline: none;
    }

    &:disabled {
      background: #f1f5f9;
      color: #94a3b8;
    }
  }
`;

const FipeBadge = styled.div`
  background: #fef2f2;
  border: 1px dashed #fecaca;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .label {
    font-size: 0.65rem;
    color: #991b1b;
    font-weight: 700;
    margin-bottom: 2px;
  }
  .price {
    font-size: 1.25rem;
    color: #e31d24;
    font-weight: 800;
  }
`;

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const PhotoSlot = styled.div<{ $hasImage?: boolean }>`
  border: 1px dashed ${(props) => (props.$hasImage ? "#e31d24" : "#cbd5e1")};
  background: ${(props) => (props.$hasImage ? "#fff" : "#f8fafc")};
  border-radius: 8px;
  aspect-ratio: 4/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #e31d24;
    background: #fff;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 7px;
  }
  span {
    font-size: 0.65rem;
    font-weight: 600;
    color: #94a3b8;
    margin-top: 4px;
  }

  .remove {
    position: absolute;
    top: 4px;
    right: 4px;
    background: #ef4444;
    color: white;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
`;

// Estilo de Checkbox mais compacto e denso
const CheckboxCard = styled.label`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.68rem; // Reduzido para caber mais itens
  font-weight: 500;
  transition: all 0.2s;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    border-color: #e31d24;
    background: #fff5f5;
  }
  input {
    accent-color: #e31d24;
    width: 12px;
    height: 12px;
    cursor: pointer;
  }
`;

const ActionButton = styled.button<{ $variant?: "primary" | "outline" }>`
  padding: 0.6rem 1.25rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border: ${(props) =>
    props.$variant === "primary" ? "none" : "1px solid #cbd5e1"};
  background: ${(props) =>
    props.$variant === "primary" ? "#e31d24" : "white"};
  color: ${(props) => (props.$variant === "primary" ? "white" : "#475569")};
  transition: all 0.1s;

  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export default function CriarVeiculo() {
  const navigate = useNavigate();

  // Estados FIPE
  const [marcas, setMarcas] = useState<FipeItem[]>([]);
  const [modelos, setModelos] = useState<FipeItem[]>([]);
  const [anos, setAnos] = useState<FipeItem[]>([]);
  const [selectedMarca, setSelectedMarca] = useState("");
  const [selectedModelo, setSelectedModelo] = useState("");
  const [selectedAno, setSelectedAno] = useState("");
  const [valorFipe, setValorFipe] = useState("R$ 0,00");
  const [loadingFipe, setLoadingFipe] = useState(false);

  // Estados de Negócio
  const [precoVenda, setPrecoVenda] = useState("");
  const [precoWeb, setPrecoWeb] = useState("");
  const [photos, setPhotos] = useState<Record<string, string>>({});

  // Efeitos FIPE
  useEffect(() => {
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
      .then((r) => r.json())
      .then(setMarcas);
  }, []);

  useEffect(() => {
    if (selectedMarca) {
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedMarca}/modelos`,
      )
        .then((r) => r.json())
        .then((d) => setModelos(d.modelos || []));
    }
  }, [selectedMarca]);

  useEffect(() => {
    if (selectedMarca && selectedModelo) {
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedMarca}/modelos/${selectedModelo}/anos`,
      )
        .then((r) => r.json())
        .then(setAnos);
    }
  }, [selectedMarca, selectedModelo]);

  useEffect(() => {
    if (selectedMarca && selectedModelo && selectedAno) {
      setLoadingFipe(true);
      fetch(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${selectedMarca}/modelos/${selectedModelo}/anos/${selectedAno}`,
      )
        .then((r) => r.json())
        .then((d: VeiculoDetalhe) => {
          setValorFipe(d.Valor);
          setLoadingFipe(false);
        });
    }
  }, [selectedMarca, selectedModelo, selectedAno]);

  const maskCurrency = (val: string) => {
    const onlyDigits = val.replace(/\D/g, "");
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(onlyDigits) / 100);
  };

  const handlePhoto = (
    slot: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () =>
        setPhotos((p) => ({ ...p, [slot]: reader.result as string }));
      reader.readAsDataURL(file);
    }
  };

  return (
    <CriarContainer>
      <CriarHeader>
        <div className="title-area">
          <button
            onClick={() => navigate(-1)}
            style={{
              border: "none",
              background: "none",
              color: "#e31d24",
              fontWeight: 700,
              fontSize: "0.7rem",
              marginBottom: 4,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 2,
            }}
          >
            <ChevronLeft size={14} /> VOLTAR AO ESTOQUE
          </button>
          <h1>Cadastrar Veículo</h1>
          <p>Insira os dados técnicos e comerciais para publicação.</p>
        </div>
        <div className="actions">
          <ActionButton $variant="outline">
            <Eye size={16} /> Preview
          </ActionButton>
          <ActionButton $variant="outline">
            <Save size={16} /> Rascunho
          </ActionButton>
          <ActionButton $variant="primary">
            <CheckCircle2 size={16} /> PUBLICAR AGORA
          </ActionButton>
        </div>
      </CriarHeader>

      <InputGrid $cols="1.8fr 1.2fr" $mobileCols="1fr">
        {/* Esquerda */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CriarCard>
            <h2>
              <Search size={16} color="#e31d24" /> Identificação
            </h2>
            <InputGrid $cols="1fr 1fr">
              <InputGroup style={{ gridColumn: "1 / -1" }}>
                <label>Título do Anúncio</label>
                <input
                  type="text"
                  placeholder="Ex: Toyota Hilux 2.8 SRV 4x4 Diesel Automático"
                />
              </InputGroup>
              <InputGroup>
                <label>Marca</label>
                <select
                  value={selectedMarca}
                  onChange={(e) => {
                    setSelectedMarca(e.target.value);
                    setSelectedModelo("");
                    setSelectedAno("");
                  }}
                >
                  <option value="">Selecione...</option>
                  {marcas.map((m) => (
                    <option key={m.codigo} value={m.codigo}>
                      {m.nome}
                    </option>
                  ))}
                </select>
              </InputGroup>
              <InputGroup>
                <label>Modelo</label>
                <select
                  value={selectedModelo}
                  disabled={!selectedMarca}
                  onChange={(e) => setSelectedModelo(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  {modelos.map((m) => (
                    <option key={m.codigo} value={m.codigo}>
                      {m.nome}
                    </option>
                  ))}
                </select>
              </InputGroup>
              <InputGroup>
                <label>Ano Modelo</label>
                <select
                  value={selectedAno}
                  disabled={!selectedModelo}
                  onChange={(e) => setSelectedAno(e.target.value)}
                >
                  <option value="">Selecione...</option>
                  {anos.map((a) => (
                    <option key={a.codigo} value={a.codigo}>
                      {a.nome}
                    </option>
                  ))}
                </select>
              </InputGroup>
              <InputGrid $cols="1fr 1fr" style={{ gap: "0.5rem" }}>
                <InputGroup>
                  <label>
                    <Hash size={12} /> Fab.
                  </label>
                  <input type="number" placeholder="2024" />
                </InputGroup>
                <InputGroup>
                  <label>
                    <Palette size={12} /> Cor
                  </label>
                  <select>
                    <option>Branco</option>
                    <option>Preto</option>
                    <option>Prata</option>
                    <option>Cinza</option>
                    <option>Azul</option>
                    <option>Vermelho</option>
                  </select>
                </InputGroup>
              </InputGrid>
            </InputGrid>
          </CriarCard>

          <CriarCard>
            <h2>
              <Settings2 size={16} color="#e31d24" /> Especificações & Opcionais
            </h2>
            <InputGrid $cols="1fr 1fr 1fr">
              <InputGroup>
                <label>
                  <Gauge size={12} /> Km Atual
                </label>
                <input type="number" placeholder="0" />
              </InputGroup>
              <InputGroup>
                <label>
                  <Fuel size={12} /> Combustível
                </label>
                <select>
                  <option>Flex</option>
                  <option>Gasolina</option>
                  <option>Etanol</option>
                  <option>Diesel</option>
                  <option>Híbrido</option>
                  <option>Elétrico</option>
                </select>
              </InputGroup>
              <InputGroup>
                <label>Câmbio</label>
                <select>
                  <option>Automático</option>
                  <option>Manual</option>
                  <option>CVT</option>
                  <option>Semi-Automático</option>
                </select>
              </InputGroup>
            </InputGrid>

            <div style={{ marginTop: "1.5rem" }}>
              <label
                style={{
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  color: "#94a3b8",
                  marginBottom: "0.75rem",
                  display: "block",
                  letterSpacing: "0.05em",
                }}
              >
                LISTA COMPLETA DE OPCIONAIS
              </label>
              <InputGrid
                $cols="repeat(4, 1fr)"
                $mobileCols="1fr 1fr"
                style={{ gap: "0.4rem" }}
              >
                {LISTA_OPCIONAIS.map((op) => (
                  <CheckboxCard key={op} title={op}>
                    <input type="checkbox" /> {op}
                  </CheckboxCard>
                ))}
              </InputGrid>
            </div>
          </CriarCard>

          <CriarCard>
            <h2>
              <FileText size={16} color="#e31d24" /> Descrição
            </h2>
            <InputGroup>
              <textarea
                rows={4}
                placeholder="Descreva o histórico do veículo, revisões, estado dos pneus, etc..."
              />
            </InputGroup>
          </CriarCard>
        </div>

        {/* Direita */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CriarCard>
            <h2>
              <DollarSign size={16} color="#e31d24" /> Preços
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <FipeBadge>
                <span className="label">
                  FIPE{" "}
                  {loadingFipe && (
                    <Loader2 size={10} className="animate-spin" />
                  )}
                </span>
                <span className="price">{valorFipe}</span>
              </FipeBadge>
              <InputGroup>
                <label>Preço Repasse</label>
                <input
                  value={precoVenda}
                  onChange={(e) => setPrecoVenda(maskCurrency(e.target.value))}
                  placeholder="R$ 0,00"
                />
              </InputGroup>
              <InputGroup>
                <label>Preço Web (Sugestão)</label>
                <input
                  value={precoWeb}
                  onChange={(e) => setPrecoWeb(maskCurrency(e.target.value))}
                  placeholder="R$ 0,00"
                  style={{ fontWeight: 800, color: "#e31d24" }}
                />
              </InputGroup>
              <InputGroup>
                <label>
                  <CreditCard size={12} /> IPVA
                </label>
                <select>
                  <option>Pago</option>
                  <option>Pendente</option>
                  <option>Parcelado</option>
                  <option>Isento</option>
                </select>
              </InputGroup>
            </div>
          </CriarCard>

          <CriarCard>
            <h2>
              <Camera size={16} color="#e31d24" /> Galeria
            </h2>
            <PhotoGrid>
              {[
                "Frente",
                "Traseira",
                "Lateral",
                "Interna",
                "Painel",
                "Motor",
              ].map((l) => (
                <PhotoSlot
                  key={l}
                  $hasImage={!!photos[l]}
                  onClick={() => document.getElementById(`f-${l}`)?.click()}
                >
                  {photos[l] ? (
                    <>
                      <img src={photos[l]} alt={l} />
                      <button
                        className="remove"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPhotos((p) => ({ ...p, [l]: "" }));
                        }}
                      >
                        <X size={12} />
                      </button>
                    </>
                  ) : (
                    <>
                      <Upload size={16} color="#cbd5e1" />
                      <span>{l}</span>
                    </>
                  )}
                  <input
                    type="file"
                    id={`f-${l}`}
                    hidden
                    onChange={(e) => handlePhoto(l, e)}
                    accept="image/*"
                  />
                </PhotoSlot>
              ))}
            </PhotoGrid>
          </CriarCard>

          <CriarCard>
            <h2>
              <Clock size={16} color="#e31d24" /> Exibição
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <InputGroup>
                <label>Período de Publicação</label>
                <select>
                  <option>30 Dias</option>
                  <option>60 Dias</option>
                  <option>Até Vender</option>
                </select>
              </InputGroup>

              <InputGrid $cols="1.2fr 0.8fr">
                <InputGroup>
                  <label>
                    <Calendar size={12} /> Início
                  </label>
                  <input
                    type="date"
                    defaultValue={new Date().toISOString().split("T")[0]}
                  />
                </InputGroup>
                <InputGroup>
                  <label>
                    <Clock size={12} /> Hora
                  </label>
                  <input type="time" defaultValue="08:00" />
                </InputGroup>
              </InputGrid>
              <p
                style={{
                  fontSize: "0.6rem",
                  color: "#94a3b8",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <Info size={12} /> Publicação agendada.
              </p>
            </div>
          </CriarCard>
        </div>
      </InputGrid>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "0.75rem",
          marginTop: "1.5rem",
          marginBottom: "4rem",
        }}
      >
        <ActionButton
          $variant="outline"
          style={{ minWidth: "120px" }}
          onClick={() => navigate(-1)}
        >
          CANCELAR
        </ActionButton>
        <ActionButton $variant="primary" style={{ minWidth: "200px" }}>
          FINALIZAR CADASTRO
        </ActionButton>
      </div>
    </CriarContainer>
  );
}
