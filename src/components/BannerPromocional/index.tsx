import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Rocket,
  ShieldCheck,
  Zap,
  ArrowRight,
} from "lucide-react";

const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: clamp(25rem, 60vh, 35rem);
  background: #000;
`;

const Slide = styled.div<{ $active: boolean }>`
  position: absolute;
  inset: 0;
  display: flex;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) => (props.$active ? "scale(1)" : "scale(1.1)")};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ImageSide = styled.div<{ $url: string; $color: string }>`
  flex: 1.5;
  background: url(${(props) => props.$url}) no-repeat center center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${(props) => props.$color};
    opacity: 0.6;
    mix-blend-mode: multiply;
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to right,
      rgba(15, 23, 42, 0.9),
      transparent 70%
    );
    z-index: 2;
  }

  @media (max-width: 900px) {
    flex: 1;
    &::after {
      background: linear-gradient(to bottom, transparent, rgba(15, 23, 42, 1));
    }
  }
`;

const ContentSide = styled.div`
  flex: 1;
  background: #0f172a;
  padding: clamp(2rem, 6vw, 5rem);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-left-radius: 12rem;
  margin-left: -10rem;
  z-index: 3;
  box-shadow: -30px 0 60px rgba(0, 0, 0, 0.5);

  .badge {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    background: rgba(227, 29, 36, 0.1);
    color: #e31d24;
    width: fit-content;
    padding: 0.5rem 1.2rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(227, 29, 36, 0.2);
  }

  h2 {
    font-size: clamp(1.8rem, 4.5vw, 2.8rem);
    font-weight: 900;
    margin-bottom: 1.2rem;
    line-height: 1;
    letter-spacing: -1.5px;
    text-transform: uppercase;

    span {
      color: #e31d24; /* Aqui o destaque vermelho */
      display: inline-block;
    }
  }

  p {
    font-size: clamp(0.95rem, 2vw, 1.1rem);
    margin-bottom: 2.5rem;
    opacity: 0.8;
    line-height: 1.6;
    max-width: 450px;
  }

  @media (max-width: 900px) {
    margin-left: 0;
    border-top-left-radius: 3rem;
    margin-top: -5rem;
    padding: 4rem 2rem;
    text-align: center;
    align-items: center;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;

  &:hover {
    background: #e31d24;
    border-color: #e31d24;
    transform: translateY(-50%) scale(1.1);
  }
  &.prev {
    left: 1.5rem;
  }
  &.next {
    right: 1.5rem;
  }
`;

const CTAButton = styled.button`
  background: #e31d24;
  color: white;
  border: none;
  padding: 1.2rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  width: fit-content;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(227, 29, 36, 0.3);
    filter: brightness(1.1);
  }
`;

export const BannerPromocional = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      id: 1,
      badge: "Repasse de Elite",
      icon: <Zap size={16} />,
      titleMain: "Gire seu estoque ",
      titleHighlight: "hoje",
      desc: "Acesso exclusivo às melhores oportunidades de repasse do Brasil com margem real para lojistas.",
      color: "#E31D24",
      img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2000",
      btnText: "Ver Estoque",
      link: "/",
    },
    {
      id: 2,
      badge: "Para Anunciantes",
      icon: <Rocket size={16} />,
      titleMain: "Alcance ",
      titleHighlight: "milhões",
      titleAfter: " de leads",
      desc: "Sua frota no maior ecossistema automotivo digital. Tecnologia de ponta para vender mais rápido.",
      color: "#1e293b",
      img: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2000",
      btnText: "Anunciar Frota",
      link: "/seja-parceiro",
    },
    {
      id: 3,
      badge: "Segurança Total",
      icon: <ShieldCheck size={16} />,
      titleMain: "Ambiente ",
      titleHighlight: "100%",
      titleAfter: " Seguro",
      desc: "Negocie com tranquilidade em uma comunidade verificada de lojistas com auditoria de qualidade.",
      color: "#E31D24",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2000",
      btnText: "Cadastrar Loja",
      link: "/cadastro-parceiro",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <CarouselWrapper>
      <NavButton
        className="prev"
        onClick={() =>
          setCurrentSlide((p) => (p === 0 ? banners.length - 1 : p - 1))
        }
      >
        <ChevronLeft size={24} />
      </NavButton>
      <NavButton
        className="next"
        onClick={() =>
          setCurrentSlide((p) => (p === banners.length - 1 ? 0 : p + 1))
        }
      >
        <ChevronRight size={24} />
      </NavButton>

      {banners.map((b, index) => (
        <Slide key={b.id} $active={currentSlide === index}>
          <ImageSide $url={b.img} $color={b.color} />
          <ContentSide>
            <div className="badge">
              {b.icon} {b.badge}
            </div>
            <h2>
              {b.titleMain}
              <span>{b.titleHighlight}</span>
              {b.titleAfter}
            </h2>
            <p>{b.desc}</p>
            <CTAButton onClick={() => navigate(b.link)}>
              {b.btnText} <ArrowRight size={20} />
            </CTAButton>
          </ContentSide>
        </Slide>
      ))}
    </CarouselWrapper>
  );
};
