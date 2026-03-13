// Definição de interface para garantir que o TypeScript reconheça as propriedades
export interface Veiculo {
  id: number;
  marca: string;
  modelo: string;
  valorVenda: number;
  quilometragem: number;
  ano: string;
  estado: string;
  status: string;
  fotoUrl: string;
  fotos: string[];
  // Novos campos para suportar os detalhes e opcionais:
  observacoes?: string;
  bateria?: string;
  chaveReserva?: string;
  manual?: string;
  arCondicionado?: string;
  tetoSolar?: string;
  abs?: string;
  airbag?: string;
  alarme?: string;
  blindado?: string;
  gnv?: string;
  estepe?: string;
  macaco?: string;
  chaveRoda?: string;
  vidros?: string;
  controleVolante?: string;
  multimidia?: string;
  cameraRe?: string;
  sensorEstacionamento?: string;
  roda?: string;
  bancos?: string;
}

export const veiculosMock: Veiculo[] = [
  {
    id: 1,
    marca: "Chevrolet",
    modelo: "ONIX 1.0 TURBO LTZ",
    valorVenda: 68500,
    quilometragem: 42130,
    ano: "23/23",
    estado: "SP",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 2,
    marca: "Land Rover",
    modelo: "VELAR P340 SE R-DYNAMIC",
    valorVenda: 315000,
    quilometragem: 28720,
    ano: "21/21",
    estado: "GO",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 3,
    marca: "Citroen",
    modelo: "C3 FEEL PACK 1.6",
    valorVenda: 65900,
    quilometragem: 12500,
    ano: "23/24",
    estado: "SP",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
    fotos: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 4,
    marca: "Chevrolet",
    modelo: "TRACKER 1.2 TURBO LT",
    valorVenda: 104000,
    quilometragem: 34200,
    ano: "23/24",
    estado: "RJ",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 5,
    marca: "Chevrolet",
    modelo: "ONIX PLUS LTZ",
    valorVenda: 74000,
    quilometragem: 59514,
    ano: "20/21",
    estado: "SP",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 6,
    marca: "Fiat",
    modelo: "STRADA FREEDOM CD",
    valorVenda: 92000,
    quilometragem: 22000,
    ano: "22/22",
    estado: "MG",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 7,
    marca: "Volkswagen",
    modelo: "T-CROSS HIGHLINE 250",
    valorVenda: 139900,
    quilometragem: 15720,
    ano: "23/23",
    estado: "PR",
    status: "disponivel",
    fotoUrl:
      "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800",
    fotos: [
      "https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 8,
    marca: "Jeep",
    modelo: "COMPASS LIMITED DIESEL",
    valorVenda: 165000,
    quilometragem: 31000,
    ano: "21/22",
    estado: "SC",
    status: "disponivel",
    fotoUrl:
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
    fotos: [
      "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 9,
    marca: "Honda",
    modelo: "CIVIC TOURING TURBO",
    valorVenda: 142000,
    quilometragem: 28000,
    ano: "21/21",
    estado: "SP",
    status: "disponivel",
    fotoUrl:
      "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=800",
    fotos: [
      "https://images.pexels.com/photos/1637859/pexels-photo-1637859.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
  },
  {
    id: 10,
    marca: "Honda",
    modelo: "HR-V EXL HONDA SENSING",
    valorVenda: 154000,
    quilometragem: 18000,
    ano: "23/23",
    estado: "RS",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 11,
    marca: "Ford",
    modelo: "RANGER LIMITED 4X4",
    valorVenda: 245000,
    quilometragem: 35000,
    ano: "22/23",
    estado: "MT",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 12,
    marca: "BMW",
    modelo: "320i M SPORT",
    valorVenda: 289000,
    quilometragem: 12000,
    ano: "23/24",
    estado: "SP",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    fotos: [
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800",
    ],
  },
  {
    id: 13,
    marca: "Fiat",
    modelo: "TORO VOLCANO TURBO",
    valorVenda: 138000,
    quilometragem: 29000,
    ano: "22/22",
    estado: "PE",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
    fotos: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 14,
    marca: "Volkswagen",
    modelo: "NIVUS HIGHLINE",
    valorVenda: 118000,
    quilometragem: 31000,
    ano: "22/22",
    estado: "BA",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000&auto=format&fit=crop",
    fotos: [
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1000&auto=format&fit=crop",
    ],
  },
  {
    id: 15,
    marca: "Hyundai",
    modelo: "CRETA ULTIMATE 2.0",
    valorVenda: 149000,
    quilometragem: 15000,
    ano: "23/24",
    estado: "SP",
    status: "disponivel",
    fotoUrl:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop",
    fotos: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop",
    ],
  },
];

export const usuariosMock = [
  { id: 1, email: "admin@repax.com", senha: "123", nome: "Admin" },
];
