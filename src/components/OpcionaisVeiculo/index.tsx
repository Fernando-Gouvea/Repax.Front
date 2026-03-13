import React from "react";
import styled from "styled-components";
import {
  Battery,
  Key,
  BookOpen,
  Wind,
  Sun,
  ShieldCheck,
  UserCheck,
  Bell,
  Shield,
  Zap,
  CircleDot,
  Hammer,
  Wrench,
  Monitor,
  Gamepad2,
  Navigation,
  Camera,
  Disc,
  Armchair,
} from "lucide-react";
import type { Veiculo } from "../../dados/mockDados";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 0.4rem;
  margin-top: 0.75rem;
`;

const Tag = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0;
  border-bottom: 1px solid #f3f4f6;

  svg {
    color: #9ca3af;
    flex-shrink: 0;
  }

  .content {
    font-size: 0.75rem; /* Fonte pequena e elegante */
    color: #6b7280;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    strong {
      color: #111827;
      font-weight: 600;
    }
  }
`;

const iconMap: Record<string, React.ReactNode> = {
  bateria: <Battery size={14} />,
  chaveReserva: <Key size={14} />,
  manual: <BookOpen size={14} />,
  arCondicionado: <Wind size={14} />,
  tetoSolar: <Sun size={14} />,
  abs: <ShieldCheck size={14} />,
  airbag: <UserCheck size={14} />,
  alarme: <Bell size={14} />,
  blindado: <Shield size={14} />,
  gnv: <Zap size={14} />,
  estepe: <CircleDot size={14} />,
  macaco: <Hammer size={14} />,
  chaveRoda: <Wrench size={14} />,
  vidros: <Monitor size={14} />,
  controleVolante: <Gamepad2 size={14} />,
  multimidia: <Navigation size={14} />,
  cameraRe: <Camera size={14} />,
  sensorEstacionamento: <Navigation size={14} />,
  roda: <Disc size={14} />,
  bancos: <Armchair size={14} />,
};

export const OpcionaisVeiculo: React.FC<{ veiculo: Veiculo }> = ({
  veiculo,
}) => {
  const itens = [
    { id: "bateria", label: "Bateria", value: veiculo.bateria || "OK" },
    {
      id: "chaveReserva",
      label: "Chave Reserva",
      value: veiculo.chaveReserva || "Não",
    },
    { id: "manual", label: "Manual", value: veiculo.manual || "Sim" },
    {
      id: "arCondicionado",
      label: "Ar Cond.",
      value: veiculo.arCondicionado || "Sim",
    },
    { id: "tetoSolar", label: "Teto Solar", value: veiculo.tetoSolar || "Não" },
    { id: "abs", label: "ABS", value: veiculo.abs || "Sim" },
    { id: "airbag", label: "Airbag", value: veiculo.airbag || "Sim" },
    { id: "alarme", label: "Alarme", value: veiculo.alarme || "Sim" },
    { id: "blindado", label: "Blindado", value: veiculo.blindado || "Não" },
    { id: "gnv", label: "GNV", value: veiculo.gnv || "Não" },
    { id: "estepe", label: "Estepe", value: veiculo.estepe || "Sim" },
    { id: "macaco", label: "Macaco", value: veiculo.macaco || "Sim" },
    { id: "chaveRoda", label: "Chave Roda", value: veiculo.chaveRoda || "Sim" },
    { id: "vidros", label: "Vidros", value: veiculo.vidros || "Elétricos" },
    {
      id: "controleVolante",
      label: "Volante Mult.",
      value: veiculo.controleVolante || "Não",
    },
    {
      id: "multimidia",
      label: "Multimídia",
      value: veiculo.multimidia || "Não",
    },
    { id: "cameraRe", label: "Câmera Ré", value: veiculo.cameraRe || "Não" },
    {
      id: "sensorEstacionamento",
      label: "Sensor Estac.",
      value: veiculo.sensorEstacionamento || "Não",
    },
    { id: "roda", label: "Rodas", value: veiculo.roda || "Liga Leve" },
    { id: "bancos", label: "Bancos", value: veiculo.bancos || "Tecido" },
  ];

  return (
    <Grid>
      {itens.map((item) => (
        <Tag key={item.id}>
          {iconMap[item.id]}
          <div className="content">
            {item.label}: <strong>{item.value}</strong>
          </div>
        </Tag>
      ))}
    </Grid>
  );
};

// import React from "react";
// import styled from "styled-components";
// import {
//   Battery,
//   Key,
//   BookOpen,
//   Wind,
//   Sun,
//   ShieldCheck,
//   UserCheck,
//   Bell,
//   Shield,
//   Zap,
//   CircleDot,
//   Hammer,
//   Wrench,
//   Monitor,
//   Gamepad2,
//   Navigation,
//   Camera,
//   Disc,
//   Armchair,
// } from "lucide-react";
// import type { Veiculo } from "../../dados/mockDados";

// const Grid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   gap: 0.75rem;
//   margin-top: 1rem;
//   @media (min-width: 480px) {
//     grid-template-columns: 1fr 1fr;
//   }
// `;

// const Tag = styled.div`
//   background: white;
//   padding: 0.6rem 0.9rem;
//   border-radius: 0.5rem;
//   border: 1px solid #e5e7eb;
//   font-size: 0.8rem;
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   color: #6b7280;
//   svg {
//     color: #0056b3;
//     flex-shrink: 0;
//   }
//   strong {
//     color: #1a1a1a;
//   }
// `;

// const iconMap: Record<string, React.ReactNode> = {
//   bateria: <Battery size={16} />,
//   chaveReserva: <Key size={16} />,
//   manual: <BookOpen size={16} />,
//   arCondicionado: <Wind size={16} />,
//   tetoSolar: <Sun size={16} />,
//   abs: <ShieldCheck size={16} />,
//   airbag: <UserCheck size={16} />,
//   alarme: <Bell size={16} />,
//   blindado: <Shield size={16} />,
//   gnv: <Zap size={16} />,
//   estepe: <CircleDot size={16} />,
//   macaco: <Hammer size={16} />,
//   chaveRoda: <Wrench size={16} />,
//   vidros: <Monitor size={16} />,
//   controleVolante: <Gamepad2 size={16} />,
//   multimidia: <Navigation size={16} />,
//   cameraRe: <Camera size={16} />,
//   sensorEstacionamento: <Navigation size={16} />,
//   roda: <Disc size={16} />,
//   bancos: <Armchair size={16} />,
// };

// interface OpcionaisProps {
//   veiculo: Veiculo; // Agora usando a interface correta
// }

// export const OpcionaisVeiculo: React.FC<OpcionaisProps> = ({ veiculo }) => {
//   const itens = [
//     {
//       id: "bateria",
//       label: "Bateria",
//       value: veiculo.bateria || "Funcionando",
//     },
//     {
//       id: "chaveReserva",
//       label: "Chave Reserva",
//       value: veiculo.chaveReserva || "Não",
//     },
//     {
//       id: "manual",
//       label: "Manual do Proprietário",
//       value: veiculo.manual || "Sim",
//     },
//     {
//       id: "arCondicionado",
//       label: "Ar Condicionado",
//       value: veiculo.arCondicionado || "Sim",
//     },
//     { id: "tetoSolar", label: "Teto Solar", value: veiculo.tetoSolar || "Não" },
//     { id: "abs", label: "ABS", value: veiculo.abs || "Sim" },
//     { id: "airbag", label: "Airbag", value: veiculo.airbag || "Sim" },
//     { id: "alarme", label: "Alarme", value: veiculo.alarme || "Sim" },
//     { id: "blindado", label: "Blindado", value: veiculo.blindado || "Não" },
//     { id: "gnv", label: "GNV", value: veiculo.gnv || "Não" },
//     { id: "estepe", label: "Estepe", value: veiculo.estepe || "Sim" },
//     { id: "macaco", label: "Macaco", value: veiculo.macaco || "Sim" },
//     {
//       id: "chaveRoda",
//       label: "Chave de Roda",
//       value: veiculo.chaveRoda || "Sim",
//     },
//     { id: "vidros", label: "Vidros", value: veiculo.vidros || "Elétricos" },
//     {
//       id: "controleVolante",
//       label: "Controle Volante",
//       value: veiculo.controleVolante || "Não",
//     },
//     {
//       id: "multimidia",
//       label: "Central Multimídia",
//       value: veiculo.multimidia || "Não",
//     },
//     { id: "cameraRe", label: "Câmera de Ré", value: veiculo.cameraRe || "Não" },
//     {
//       id: "sensorEstacionamento",
//       label: "Sensor de Estacionamento",
//       value: veiculo.sensorEstacionamento || "Não",
//     },
//     { id: "roda", label: "Roda", value: veiculo.roda || "Liga Leve" },
//     { id: "bancos", label: "Bancos", value: veiculo.bancos || "Tecido" },
//   ];

//   return (
//     <Grid>
//       {itens.map((item) => (
//         <Tag key={item.id}>
//           {iconMap[item.id]} {item.label}: <strong>{item.value}</strong>
//         </Tag>
//       ))}
//     </Grid>
//   );
// };
