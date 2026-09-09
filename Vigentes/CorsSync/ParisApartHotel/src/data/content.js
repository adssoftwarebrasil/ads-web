import facadePanorama from "../assets/images/fachada-panoramica.webp";
import facadeMain from "../assets/images/fachada-principal.webp";
import hotelEntrance from "../assets/images/entrada-hotel.webp";
import parking from "../assets/images/estacionamento.webp";
import evCharge from "../assets/images/recarga-eletrica.webp";
import evChargeFront from "../assets/images/recarga-eletrica-frontal.webp";
import familyRoom from "../assets/images/apartamento-familia.webp";
import blueRoom from "../assets/images/apartamento-duplo-azul.webp";
import redFamilyRoom from "../assets/images/apartamento-familia-vermelho.webp";
import coupleRoom from "../assets/images/apartamento-casal.webp";
import compactRoom from "../assets/images/apartamento-casal-compacto.webp";
import bathroom from "../assets/images/banheiro-apartamento.webp";
import breakfastRoom from "../assets/images/cafe-da-manha-sala.webp";
import breakfastHall from "../assets/images/sala-cafe-da-manha.webp";
import breakfastBuffet from "../assets/images/cafe-da-manha-buffet.webp";
import breakfastCakes from "../assets/images/cafe-da-manha-bolos.webp";
import breakfastComplete from "../assets/images/cafe-da-manha-completo.webp";
import lobby from "../assets/images/lobby.webp";
import reception from "../assets/images/recepcao.webp";
import lounge from "../assets/images/lounge.webp";
import elevator from "../assets/images/elevador.webp";
import parisGallery from "../assets/images/galeria-paris.webp";
import parisDetail from "../assets/images/detalhe-paris.webp";
import triplo01 from "../assets/images/gallery/triplo-01.jpeg";
import triplo02 from "../assets/images/gallery/triplo-02.jpeg";
import triplo03 from "../assets/images/gallery/triplo-03.jpeg";
import triplo04 from "../assets/images/gallery/triplo-04.jpeg";
import quadruplo01 from "../assets/images/gallery/quadruplo-01.jpeg";
import quadruplo02 from "../assets/images/gallery/quadruplo-02.jpeg";
import duplo01 from "../assets/images/gallery/duplo-01.jpeg";
import duplo02 from "../assets/images/gallery/duplo-02.jpeg";
import duplo03 from "../assets/images/gallery/duplo-03.jpeg";
import suiteMaster01 from "../assets/images/gallery/suite-master-01.jpeg";
import suiteMaster02 from "../assets/images/gallery/suite-master-02.jpeg";
import suiteMaster03 from "../assets/images/gallery/suite-master-03.jpeg";
import suiteMaster04 from "../assets/images/gallery/suite-master-04.jpeg";
import individual01 from "../assets/images/gallery/individual-01.jpeg";
import individual02 from "../assets/images/gallery/individual-02.jpeg";
import geral01 from "../assets/images/gallery/geral-01.jpeg";
import geral02 from "../assets/images/gallery/geral-02.jpeg";
import geral03 from "../assets/images/gallery/geral-03.jpeg";
import geral04 from "../assets/images/gallery/geral-04.jpeg";
import geral05 from "../assets/images/gallery/geral-05.jpeg";
import geral06 from "../assets/images/gallery/geral-06.jpeg";
import geral07 from "../assets/images/gallery/geral-07.jpeg";
import geral08 from "../assets/images/gallery/geral-08.jpeg";
import geral09 from "../assets/images/gallery/geral-09.jpeg";
import geral10 from "../assets/images/gallery/geral-10.jpeg";
import geral11 from "../assets/images/gallery/geral-11.jpeg";

export const hotelImages = {
  facadePanorama,
  facadeMain,
  hotelEntrance,
  parking,
  evCharge,
  evChargeFront,
  familyRoom,
  blueRoom,
  redFamilyRoom,
  coupleRoom,
  compactRoom,
  bathroom,
  breakfastRoom,
  breakfastHall,
  breakfastBuffet,
  breakfastCakes,
  breakfastComplete,
  lobby,
  reception,
  lounge,
  elevator,
  parisGallery,
  parisDetail,
};

export const whatsappNumber = "557799340180";
export const whatsappMessage =
  "Olá! Gostaria de consultar a disponibilidade no Paris Apart Hotel.";
export const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const roomTypes = [
  {
    name: "Individual",
    subtitle: "Praticidade para a sua rotina",
    description:
      "Uma opção confortável para quem vem a Barreiras a trabalho ou quer aproveitar a viagem com autonomia.",
    image: compactRoom,
    alt: "Apartamento individual do Paris Apart Hotel",
  },
  {
    name: "Casal ou duplo",
    subtitle: "Conforto para compartilhar",
    description:
      "Configurações preparadas para duas pessoas, com ambiente claro, climatizado e cuidado em cada detalhe.",
    image: coupleRoom,
    alt: "Apartamento de casal com enxoval branco e detalhes azuis",
  },
  {
    name: "Família",
    subtitle: "Mais espaço para todos",
    description:
      "Apartamentos que acomodam diferentes formações de viagem, mantendo conforto e funcionalidade.",
    image: familyRoom,
    alt: "Apartamento família com três camas e mesa de trabalho",
  },
];

export const galleryCategories = [
  {
    id: "individual",
    label: "Individual",
    description: "Acomodação individual com cama de casal e ambiente acolhedor.",
    images: [
      { src: individual01, alt: "Apartamento Individual com cama de casal e detalhes vermelhos" },
      { src: individual02, alt: "Vista completa do Apartamento Individual do Paris Apart Hotel" },
    ],
  },
  {
    id: "suite-master",
    label: "Suíte Master",
    description: "Acomodação para casal com conforto e cuidado em cada detalhe.",
    images: [
      { src: suiteMaster01, alt: "Suíte Master com cama de casal e enxoval em tons neutros" },
      { src: suiteMaster02, alt: "Suíte Master com cama de casal e decoração inspirada em Paris" },
      { src: suiteMaster03, alt: "Suíte Master com cama de casal, frigobar e poltrona" },
      { src: suiteMaster04, alt: "Entrada da Suíte Master com cama de casal" },
    ],
  },
  {
    id: "duplo",
    label: "Duplo",
    description: "Opções com camas separadas ou configuração para casal e criança.",
    images: [
      { src: duplo01, alt: "Apartamento da categoria Duplo com cama de casal e cama de solteiro" },
      { src: duplo02, alt: "Mesa de trabalho e televisão do apartamento Duplo" },
      { src: duplo03, alt: "Apartamento Duplo com enxoval branco e detalhes azuis" },
    ],
  },
  {
    id: "triplo",
    label: "Triplo",
    description: "Três camas separadas ou acomodação para um casal e dois filhos.",
    images: [
      { src: triplo01, alt: "Apartamento triplo do Paris Apart Hotel com três camas" },
      { src: triplo02, alt: "Vista das camas do apartamento triplo" },
      { src: triplo03, alt: "Apartamento triplo com enxoval branco e detalhes vermelhos" },
      { src: triplo04, alt: "Detalhe do enxoval do apartamento triplo" },
    ],
  },
  {
    id: "quadruplo",
    label: "Quádruplo (família)",
    description: "Apartamento para quatro pessoas, com camas separadas ou configuração para família.",
    images: [
      { src: quadruplo01, alt: "Apartamento quádruplo do Paris Apart Hotel com quatro camas" },
      { src: quadruplo02, alt: "Vista das camas e da televisão do apartamento quádruplo" },
    ],
  },
  {
    id: "galeria",
    label: "Galeria",
    description: "Detalhes dos apartamentos, banheiros e da decoração do hotel.",
    images: [
      { src: geral01, alt: "Secador de cabelo disponível no apartamento" },
      { src: geral02, alt: "Mesa de trabalho, televisão e frigobar do apartamento" },
      { src: geral03, alt: "Mesa de trabalho, armário e frigobar do apartamento" },
      { src: geral04, alt: "Banheiro com secador de cabelo, toalhas e box de vidro" },
      { src: geral05, alt: "Quadros inspirados em Paris na decoração do hotel" },
      { src: geral06, alt: "Banheiro higienizado com box de vidro" },
      { src: geral07, alt: "Controles de água quente e fria do chuveiro" },
      { src: geral08, alt: "Poltrona e armário no interior do apartamento" },
      {
        src: geral09,
        alt: "Aparador decorado com espelho, flores e miniatura da Torre Eiffel",
      },
      { src: geral10, alt: "Detalhes da decoração inspirada em viagens" },
      { src: geral11, alt: "Bandeja com copos e utensílios no apartamento" },
    ],
  },
];

export const videoTours = [
  {
    src: "/media/tour-hotel-01.mp4",
    poster: facadeMain,
    title: "Conheça o Paris",
  },
  {
    src: "/media/tour-hotel-02.mp4",
    poster: coupleRoom,
    title: "Conforto nos apartamentos",
  },
  {
    src: "/media/tour-hotel-03.mp4",
    poster: breakfastComplete,
    title: "Um olhar pelos ambientes",
  },
  {
    src: "/media/tour-hotel-04.mp4",
    poster: lounge,
    title: "Detalhes que acolhem",
  },
];
