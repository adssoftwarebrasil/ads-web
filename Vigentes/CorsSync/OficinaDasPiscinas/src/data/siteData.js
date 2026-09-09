import aquecimentoIntegrado from "../assets/media/aquecimento-integrado.jpeg";
import aquecimentoSolarVideo from "../assets/media/aquecimento-solar.mp4";
import aquecimentoSolarHorizontal from "../assets/media/aquecimento-solar-horizontal.jpeg";
import aquecimentoSolarVertical from "../assets/media/aquecimento-solar-vertical.jpeg";
import casaMaquinasResidencial from "../assets/media/casa-maquinas-residencial.jpeg";
import casaMaquinasTubulacao from "../assets/media/casa-maquinas-tubulacao.jpeg";
import hidromassagemVideoA from "../assets/media/hidromassagem-a.mp4";
import hidromassagemVideoB from "../assets/media/hidromassagem-b.mp4";
import impermeabilizacaoPiscina from "../assets/media/impermeabilizacao-piscina.jpeg";
import obraRevestimentoVideo from "../assets/media/obra-revestimento.mp4";
import piscinaCascata from "../assets/media/piscina-cascata.jpeg";
import piscinaCobertura from "../assets/media/piscina-cobertura.jpeg";
import piscinaCorredor from "../assets/media/piscina-corredor.jpeg";
import piscinaEmFuncionamento from "../assets/media/piscina-em-funcionamento.mp4";
import piscinaInterna from "../assets/media/piscina-interna.jpeg";
import piscinaLazer from "../assets/media/piscina-lazer.jpeg";
import piscinaNoturna from "../assets/media/piscina-noturna.jpeg";
import piscinaResidencial from "../assets/media/piscina-residencial.jpeg";
import piscinaRevestimento from "../assets/media/piscina-revestimento.jpeg";
import piscinaVistaLago from "../assets/media/piscina-vista-lago.jpeg";
import sistemaFiltragem from "../assets/media/sistema-filtragem.jpeg";
import sistemaHidraulicoVideo from "../assets/media/sistema-hidraulico.mp4";
import spaHidromassagem from "../assets/media/spa-hidromassagem.jpeg";
import trocadorCalor from "../assets/media/trocador-calor.jpeg";

export const contact = {
  whatsappDisplay: "19 91495 260",
  whatsappUrl:
    "https://wa.me/551991495260?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20uma%20avalia%C3%A7%C3%A3o%20para%20minha%20piscina.",
  email: "adm.oficinadaspiscinas@gmail.com",
  instagram: "https://www.instagram.com/oficina_das_piscinas/",
  instagramHandle: "@oficina_das_piscinas",
  facebook: "https://www.facebook.com/oficinadaspiscinas",
  facebookHandle: "@oficinadaspiscinas",
};

export const serviceGroups = [
  {
    id: "agua",
    eyebrow: "Água sempre convidativa",
    title: "Limpeza e manutenção",
    description:
      "Rotinas de cuidado, inspeção e manutenção para preservar a qualidade da água e o funcionamento de todo o conjunto.",
    services: [
      "Limpeza de piscinas",
      "Manutenção de piscinas",
      "Venda de produtos para piscina",
    ],
    image: piscinaCobertura,
    imageAlt: "Piscina limpa em uma cobertura residencial",
  },
  {
    id: "conforto",
    eyebrow: "Conforto em qualquer estação",
    title: "Aquecimento sob medida",
    description:
      "Soluções para aproveitar a piscina e o banho com mais conforto, considerando o sistema e a necessidade de cada instalação.",
    services: [
      "Aquecimento de piscinas",
      "Aquecimento de banho",
      "Trocador de calor",
    ],
    image: trocadorCalor,
    imageAlt: "Trocador de calor instalado próximo à piscina",
  },
  {
    id: "tratamento",
    eyebrow: "Tecnologia a favor da rotina",
    title: "Tratamento e equipamentos",
    description:
      "Integração entre filtração, circulação e tratamento para deixar a operação mais confiável e prática no dia a dia.",
    services: [
      "Gerador de cloro",
      "Casas de máquinas",
      "Sistemas de filtragem",
    ],
    image: casaMaquinasTubulacao,
    imageAlt: "Casa de máquinas com tubulação e bombas organizadas",
  },
  {
    id: "energia",
    eyebrow: "Uso inteligente de energia",
    title: "Eficiência energética",
    description:
      "Projetos que conectam aquecimento e geração de energia para uma operação mais eficiente dos sistemas da residência.",
    services: [
      "Energia fotovoltaica",
      "Aquecimento solar de piscinas",
      "Integração de sistemas",
    ],
    image: aquecimentoSolarHorizontal,
    imageAlt: "Coletores de aquecimento solar instalados sobre um telhado",
  },
];

export const galleryItems = [
  {
    type: "image",
    category: "piscinas",
    src: piscinaVistaLago,
    title: "Piscina integrada à paisagem",
    alt: "Piscina residencial com vista para um lago",
  },
  {
    type: "image",
    category: "sistemas",
    src: casaMaquinasTubulacao,
    title: "Casa de máquinas organizada",
    alt: "Sistema hidráulico de piscina com tubulações pretas",
  },
  {
    type: "image",
    category: "piscinas",
    src: piscinaNoturna,
    title: "Iluminação para aproveitar a noite",
    alt: "Piscina com iluminação violeta durante a noite",
  },
  {
    type: "image",
    category: "sistemas",
    src: aquecimentoSolarHorizontal,
    title: "Aquecimento solar",
    alt: "Coletores solares instalados em telhado",
  },
  {
    type: "image",
    category: "piscinas",
    src: piscinaInterna,
    title: "Piscina interna",
    alt: "Piscina interna iluminada em ambiente amplo",
  },
  {
    type: "image",
    category: "sistemas",
    src: sistemaFiltragem,
    title: "Filtragem e circulação",
    alt: "Sistema de filtragem com bombas e tubulações",
  },
  {
    type: "image",
    category: "piscinas",
    src: piscinaLazer,
    title: "Área de lazer pronta",
    alt: "Piscina residencial com cascata em área verde",
  },
  {
    type: "image",
    category: "obra",
    src: impermeabilizacaoPiscina,
    title: "Preparação e impermeabilização",
    alt: "Piscina em processo de preparação e impermeabilização",
  },
  {
    type: "image",
    category: "piscinas",
    src: piscinaCorredor,
    title: "Projeto em espaço compacto",
    alt: "Piscina estreita em corredor residencial",
  },
  {
    type: "image",
    category: "sistemas",
    src: aquecimentoIntegrado,
    title: "Aquecimento integrado",
    alt: "Trocador de calor conectado à casa de máquinas",
  },
  {
    type: "image",
    category: "piscinas",
    src: piscinaCascata,
    title: "Piscina com parede d'água",
    alt: "Piscina iluminada com cascata em parede de pedra",
  },
  {
    type: "image",
    category: "obra",
    src: piscinaRevestimento,
    title: "Renovação de revestimento",
    alt: "Piscina vazia recebendo revestimento azul",
  },
  {
    type: "image",
    category: "piscinas",
    src: spaHidromassagem,
    title: "Spa com hidromassagem",
    alt: "Spa integrado à piscina com hidromassagem ligada",
  },
  {
    type: "image",
    category: "sistemas",
    src: aquecimentoSolarVertical,
    title: "Sistema solar em escala",
    alt: "Conjunto de coletores solares instalado em telhado",
  },
  {
    type: "image",
    category: "piscinas",
    src: piscinaResidencial,
    title: "Piscina residencial",
    alt: "Piscina residencial cercada e integrada ao jardim",
  },
  {
    type: "image",
    category: "piscinas",
    src: piscinaCobertura,
    title: "Piscina em cobertura",
    alt: "Piscina limpa e iluminada em uma cobertura residencial",
  },
  {
    type: "image",
    category: "sistemas",
    src: casaMaquinasResidencial,
    title: "Equipamentos protegidos",
    alt: "Casa de máquinas residencial com filtro e bombas",
  },
  {
    type: "image",
    category: "sistemas",
    src: trocadorCalor,
    title: "Trocador de calor instalado",
    alt: "Trocador de calor instalado ao lado da piscina",
  },
  {
    type: "video",
    category: "videos",
    src: piscinaEmFuncionamento,
    poster: piscinaLazer,
    title: "Piscina em funcionamento",
    alt: "Vídeo de piscina em funcionamento",
  },
  {
    type: "video",
    category: "videos",
    src: sistemaHidraulicoVideo,
    poster: casaMaquinasTubulacao,
    title: "Detalhes do sistema hidráulico",
    alt: "Vídeo do sistema hidráulico de uma piscina",
  },
  {
    type: "video",
    category: "videos",
    src: aquecimentoSolarVideo,
    poster: aquecimentoSolarHorizontal,
    title: "Aquecimento solar instalado",
    alt: "Vídeo de aquecimento solar em telhado",
  },
  {
    type: "video",
    category: "videos",
    src: obraRevestimentoVideo,
    poster: piscinaRevestimento,
    title: "Trabalho de revestimento",
    alt: "Vídeo de trabalho de revestimento em piscina",
  },
  {
    type: "video",
    category: "videos",
    src: hidromassagemVideoA,
    poster: spaHidromassagem,
    title: "Hidromassagem em ação",
    alt: "Vídeo de sistema de hidromassagem em ação",
  },
  {
    type: "video",
    category: "videos",
    src: hidromassagemVideoB,
    poster: spaHidromassagem,
    title: "Teste da hidromassagem",
    alt: "Vídeo de teste do sistema de hidromassagem",
  },
];

export const heroMedia = {
  main: piscinaVistaLago,
  detail: casaMaquinasTubulacao,
  night: piscinaNoturna,
};

export const expertiseMedia = {
  filtration: sistemaFiltragem,
  pool: piscinaCobertura,
};
