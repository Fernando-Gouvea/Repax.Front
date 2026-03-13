import styled from "styled-components";
import {
  Instagram,
  Linkedin,
  Facebook,
  ShieldCheck,
  Globe,
  MessageCircle,
} from "lucide-react";

const FooterContainer = styled.footer`
  background: #111827;
  color: #f3f4f6;
  border-top: 1px solid #1f2937;
  padding: 3rem 1.5rem 1.5rem;
  margin-top: 4rem;
`;

const FooterGrid = styled.div`
  max-width: 1100px;
  margin: 0 auto 3rem;
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  h3 {
    font-size: 1.1rem;
    font-weight: 900;
    margin-bottom: 0.8rem;
    color: #ffffff;
    span {
      color: #e31d24;
    }
  }

  h4 {
    color: #9ca3af;
    font-size: 0.7rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  p {
    color: #9ca3af;
    font-size: 0.75rem;
    line-height: 1.6;
    max-width: 260px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    color: #d1d5db;
    font-size: 0.75rem;
    margin-bottom: 0.7rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem; /* Espaço entre ícone e texto */
    transition: all 0.2s ease;

    svg {
      color: #6b7280;
      transition: color 0.2s ease;
    }

    &:hover {
      color: #ffffff;
      svg {
        color: #e31d24;
      }
    }
  }
`;

const SocialGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`;

const SocialIcon = styled.a`
  color: #9ca3af;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #1f2937;

  &:hover {
    color: #ffffff;
    background: #e31d24;
    transform: translateY(-2px);
  }
`;

const Copyright = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  border-top: 1px solid #1f2937;
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #6b7280;
  font-size: 0.65rem;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterGrid>
      <Column>
        <h3>
          REPAX<span>.</span>
        </h3>
        <p>
          A maior plataforma de repasse para lojistas do Brasil. Segurança e
          transparência em cada negociação.
        </p>
        <SocialGroup>
          <SocialIcon href="#">
            <Instagram size={16} />
          </SocialIcon>
          <SocialIcon href="#">
            <Linkedin size={16} />
          </SocialIcon>
          <SocialIcon href="#">
            <Facebook size={16} />
          </SocialIcon>
        </SocialGroup>
      </Column>

      <Column>
        <h4>Institucional</h4>
        <ul>
          <li>
            <Globe size={14} /> Sobre nós
          </li>
          <li>
            <ShieldCheck size={14} /> Como funciona
          </li>
          <li>
            <ShieldCheck size={14} /> Termos de uso
          </li>
        </ul>
      </Column>

      <Column>
        <h4>Suporte</h4>
        <ul>
          <li>
            <MessageCircle size={14} /> Central de Ajuda
          </li>
          <li>
            <MessageCircle size={14} /> Contato
          </li>
          <li>
            <ShieldCheck size={14} /> Segurança
          </li>
        </ul>
      </Column>

      <Column>
        <h4>Nossa Sede</h4>
        <p style={{ fontSize: "0.7rem" }}>
          Av. das Nações Unidas, 1267
          <br />
          São Paulo - SP
          <br />
          CEP: 04578-000
        </p>
      </Column>
    </FooterGrid>

    <Copyright>
      <span>
        © 2024 REPAX Tecnologia Automotiva. Todos os direitos reservados.
      </span>
      <div style={{ display: "flex", gap: "1rem" }}>
        <span>Privacidade</span>
        <span>Cookies</span>
      </div>
    </Copyright>
  </FooterContainer>
);
