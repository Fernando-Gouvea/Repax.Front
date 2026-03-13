import { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  X,
  Eye,
  Save,
  Image as ImageIcon,
  DollarSign,
  ChevronLeft,
  ChevronRight,
  FileText,
  Settings2,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import "./Create.css";

export default function PaginaCadastroVeiculo() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imagens, setImagens] = useState<File[]>([]);
  const [previewImagens, setPreviewImagens] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [fotoAtivaIndex, setFotoAtivaIndex] = useState(0);
  const [loadingFipe, setLoadingFipe] = useState(false);

  const [formulario, setFormulario] = useState({
    titulo: "",
    marca: "",
    modelo: "",
    ano: "",
    km: "",
    cor: "",
    descricao: "",
    valorFipe: "R$ 0,00",
    valorVenda: "R$ 0,00",
    caracteristicas: [] as string[],
  });

  const opcoesCaracteristicas = [
    "Ar Condicionado",
    "Ar Digital",
    "Direção Hidráulica",
    "Direção Elétrica",
    "Banco de Couro",
    "Banco Elétrico",
    "Banco Aquecido",
    "Volante Multifuncional",
    "Teto Solar",
    "Teto Panorâmico",
    "Vidro Elétrico",
    "Trava Elétrica",
    "Chave Presencial",
    "Start/Stop",
    "Airbag Motorista",
    "Airbag Passageiro",
    "Airbag Lateral",
    "Airbag Cortina",
    "Freios ABS",
    "Controle de Tração",
    "Controle de Estabilidade",
    "Assistente de Rampa",
    "Alarme",
    "Câmera de Ré",
    "Sensor de Estacionamento",
    "Blindado",
    "Central Multimídia",
    "Apple CarPlay",
    "Android Auto",
    "Bluetooth",
    "GPS",
    "Painel Digital",
    "Computador de Bordo",
    "Carregador por Indução",
    "Câmbio Automático",
    "Câmbio Manual",
    "Câmbio CVT",
    "4x4",
    "Turbo",
    "Rodas de Liga Leve",
    "Farol de LED",
    "Farol de Xenon",
    "Som Premium",
  ];

  const progresso = useMemo(() => {
    let total = 6;
    let completo = 0;
    if (formulario.titulo) completo++;
    if (imagens.length > 0) completo++;
    if (formulario.marca && formulario.modelo && formulario.ano) completo++;
    if (formulario.valorVenda !== "R$ 0,00") completo++;
    if (formulario.descricao) completo++;
    if (formulario.caracteristicas.length > 0) completo++;
    return Math.round((completo / total) * 100);
  }, [formulario, imagens]);

  useEffect(() => {
    if (
      formulario.marca.length > 2 &&
      formulario.modelo.length > 2 &&
      formulario.ano.length === 4
    ) {
      setLoadingFipe(true);
      const timer = setTimeout(() => {
        setFormulario((prev) => ({ ...prev, valorFipe: "R$ 85.400,00" }));
        setLoadingFipe(false);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [formulario.marca, formulario.modelo, formulario.ano]);

  const handleImagens = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const novos = Array.from(e.target.files);
    const disponivel = 5 - imagens.length;
    const permitidos = novos.slice(0, disponivel);
    const previews = permitidos.map((f) => URL.createObjectURL(f));
    setImagens((prev) => [...prev, ...permitidos]);
    setPreviewImagens((prev) => [...prev, ...previews]);
  };

  const removerImagem = (idx: number) => {
    setImagens((prev) => prev.filter((_, i) => i !== idx));
    setPreviewImagens((prev) => prev.filter((_, i) => i !== idx));
    if (fotoAtivaIndex >= previewImagens.length - 1) setFotoAtivaIndex(0);
  };

  const toggleCaracteristica = (item: string) => {
    setFormulario((prev) => ({
      ...prev,
      caracteristicas: prev.caracteristicas.includes(item)
        ? prev.caracteristicas.filter((c) => c !== item)
        : [...prev.caracteristicas, item],
    }));
  };

  const formatarMoeda = (v: string) => {
    const n = Number(v.replace(/\D/g, "")) / 100;
    setFormulario((prev) => ({
      ...prev,
      valorVenda: n.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
    }));
  };

  const handlePublicar = () => {
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="page-wrapper">
      <header className="top-navbar">
        <div className="nav-container">
          <div className="nav-left">
            <button onClick={() => navigate(-1)} className="back-circle-btn">
              <ArrowLeft size={18} />
            </button>
            <div>
              <h1>Novo Anúncio</h1>
              <p>Crie um anúncio profissional</p>
            </div>
          </div>
          <div className="nav-right">
            <button
              className="btn-secondary"
              onClick={() => setShowPreview(true)}
            >
              <Eye size={16} /> Visualizar
            </button>
            <button className="btn-primary">
              <Save size={16} /> Salvar
            </button>
          </div>
        </div>
      </header>

      <main className="content-container">
        <div className="layout-grid">
          <div className="main-form-flow">
            <section className="form-card">
              <div className="card-header-inner">
                <FileText size={18} />
                <h3>Título</h3>
              </div>
              <input
                className="input-modern"
                placeholder="Ex: Honda Civic 2.0 EXL Turbo 2024"
                value={formulario.titulo}
                onChange={(e) =>
                  setFormulario({ ...formulario, titulo: e.target.value })
                }
              />
            </section>

            <section className="form-card">
              <div className="card-header-inner">
                <ImageIcon size={18} />
                <h3>Galeria ({imagens.length}/5)</h3>
              </div>
              <div className="photo-grid-fixed">
                {previewImagens.map((src, i) => (
                  <div key={i} className="photo-container-fixed">
                    <img src={src} alt="" className="fixed-img" />
                    <button
                      className="remove-photo-btn"
                      onClick={() => removerImagem(i)}
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
                {imagens.length < 5 && (
                  <div
                    className="photo-add-fixed"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Plus size={24} />
                    <span>Adicionar</span>
                  </div>
                )}
              </div>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                hidden
                accept="image/*"
                onChange={handleImagens}
              />
            </section>

            <section className="form-card">
              <div className="card-header-inner">
                <DollarSign size={18} />
                <h3>Preço e FIPE</h3>
              </div>
              <div className="price-row">
                <div className="input-group">
                  <label>Valor de Venda</label>
                  <input
                    className="input-price"
                    value={formulario.valorVenda}
                    onChange={(e) => formatarMoeda(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label>Tabela FIPE</label>
                  <div className="fipe-display">
                    {loadingFipe ? (
                      <Loader2 className="spin" size={16} />
                    ) : (
                      <span>{formulario.valorFipe}</span>
                    )}
                  </div>
                </div>
              </div>
            </section>

            <section className="form-card">
              <div className="card-header-inner">
                <CheckCircle2 size={18} />
                <h3>Características</h3>
              </div>
              <div className="checkbox-grid-modern">
                {opcoesCaracteristicas.map((item) => (
                  <div
                    key={item}
                    className={`checkbox-modern ${formulario.caracteristicas.includes(item) ? "active" : ""}`}
                    onClick={() => toggleCaracteristica(item)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="sidebar-modern">
            <div className="sticky-sidebar">
              <div className="progress-box">
                <h4>Progresso do Anúncio</h4>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${progresso}%` }}
                  />
                </div>
                <span>{progresso}% completo</span>
              </div>
              <button
                className="btn-publish-modern"
                disabled={progresso < 60 || isSubmitting}
                onClick={handlePublicar}
              >
                {isSubmitting ? (
                  <Loader2 className="spin" size={18} />
                ) : (
                  "Publicar Agora"
                )}
              </button>
              <div className="tip-modern">
                <Settings2 size={16} />
                <p>Anúncios com fotos reais vendem mais rápido.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {showPreview && (
        <div
          className="modal-overlay-full"
          onClick={() => setShowPreview(false)}
        >
          <div
            className="modal-content-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="btn-close-modal"
              onClick={() => setShowPreview(false)}
            >
              <X size={20} />
            </button>
            <div className="modal-inner-layout">
              <div className="modal-visual-side">
                {previewImagens.length > 0 ? (
                  <>
                    <img
                      src={previewImagens[fotoAtivaIndex]}
                      alt=""
                      className="modal-main-img"
                    />
                    <div className="carousel-controls">
                      <button
                        onClick={() =>
                          setFotoAtivaIndex((p) =>
                            p === 0 ? previewImagens.length - 1 : p - 1,
                          )
                        }
                      >
                        <ChevronLeft />
                      </button>
                      <button
                        onClick={() =>
                          setFotoAtivaIndex((p) =>
                            p === previewImagens.length - 1 ? 0 : p + 1,
                          )
                        }
                      >
                        <ChevronRight />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="no-photo">Sem fotos</div>
                )}
              </div>
              <div className="modal-data-side">
                <h2>{formulario.titulo || "Título do Veículo"}</h2>
                <div className="modal-price-display">
                  {formulario.valorVenda}
                </div>
                <div className="modal-section-title">Características</div>
                <div className="feature-list">
                  {formulario.caracteristicas.map((c) => (
                    <span key={c} className="feature-pill">
                      {c}
                    </span>
                  ))}
                </div>
                <div className="modal-section-title">Descrição</div>
                <p className="modal-desc">
                  {formulario.descricao || "Sem descrição disponível."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
