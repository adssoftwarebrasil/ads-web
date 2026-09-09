import organico from "../assets/images/sofa-organico.webp";
import canto from "../assets/images/sofa-canto.webp";
import areia from "../assets/images/sofa-areia.webp";
import areiaAmbiente from "../assets/images/sofa-areia-ambiente.webp";
import bau from "../assets/images/sofa-bau.webp";
import bauFechado from "../assets/images/sofa-bau-fechado.webp";
import verde from "../assets/images/sofa-verde.webp";
import verdeOriginal from "../assets/images/sofa-verde-original.webp";
import vermelho from "../assets/images/sofa-vermelho.webp";
import cappuccino from "../assets/images/sofa-cappuccino.webp";
import amplo from "../assets/images/sofa-retratil-amplo.webp";
import classicoCinza from "../assets/images/sofa-classico-cinza.webp";
import classicoPreto from "../assets/images/sofa-classico-preto.webp";
import poltronasBege from "../assets/images/poltronas-bege.webp";
import poltronasOriginal from "../assets/images/poltronas-bege-original.webp";
import poltronasCinza from "../assets/images/poltronas-cinza.webp";
import cabeceiraRosa from "../assets/images/cabeceira-rosa.webp";
import cabeceiraPainel from "../assets/images/cabeceira-painel.webp";

export const categories = ["Todos", "Sofás", "Poltronas", "Cabeceiras"];

export const products = [
  {
    id: "sofa-organico",
    name: "Sofá orgânico",
    category: "Sofás",
    detail: "Curvas que acolhem",
    description:
      "Linhas arredondadas e almofadas que dão personalidade à sala. Uma referência para quem quer um ambiente acolhedor e cheio de estilo.",
    images: [organico],
    isolated: true,
    tag: "Formas que encantam",
  },
  {
    id: "sofa-canto",
    name: "Sofá de canto",
    category: "Sofás",
    detail: "Mais espaço para estar junto",
    description:
      "Uma composição em L para aproveitar os cantos da sala e reunir os seus momentos de descanso em um só lugar.",
    images: [canto],
    isolated: true,
  },
  {
    id: "sofa-areia",
    name: "Sofá retrátil areia",
    category: "Sofás",
    detail: "Um convite para ficar",
    description:
      "Tom neutro, encosto acolchoado e assentos amplos. Inspire-se neste modelo e converse com a gente sobre o que combina com a sua casa.",
    images: [areia, areiaAmbiente],
  },
  {
    id: "poltronas-bege",
    name: "Poltronas com base de madeira",
    category: "Poltronas",
    detail: "Aconchego em cada canto",
    description:
      "Linhas retas, braços estofados e base de madeira aparente. Para compor a sala ou criar aquele cantinho especial.",
    images: [poltronasBege, poltronasOriginal],
  },
  {
    id: "sofa-bau",
    name: "Sofá retrátil com baú",
    category: "Sofás",
    detail: "Conforto e espaço extra",
    description:
      "Um sofá com compartimentos sob os assentos, unindo o descanso à praticidade de guardar o que você quer ter por perto.",
    images: [bau, bauFechado],
    tag: "Praticidade no dia a dia",
  },
  {
    id: "sofa-verde",
    name: "Sofá retrátil verde",
    category: "Sofás",
    detail: "Cor e presença na sua sala",
    description:
      "O tom verde e as costuras em desenho geométrico trazem personalidade para uma composição de assentos amplos.",
    images: [verde, verdeOriginal],
  },
  {
    id: "sofa-vermelho",
    name: "Sofá retrátil vermelho",
    category: "Sofás",
    detail: "Para quem ama personalidade",
    description:
      "Vermelho marcante, almofadas generosas e detalhes no estofamento. Uma inspiração para deixar o sofá ser o protagonista do ambiente.",
    images: [vermelho],
  },
  {
    id: "sofa-cappuccino",
    name: "Sofá cappuccino",
    category: "Sofás",
    detail: "Acolhimento em tons quentes",
    description:
      "Três assentos e encostos com costuras aparentes em um tom fácil de combinar com diferentes ambientes.",
    images: [cappuccino],
  },
  {
    id: "sofa-amplo",
    name: "Sofá retrátil amplo",
    category: "Sofás",
    detail: "Seu momento de pausa",
    description:
      "Assentos espaçosos e almofadas de encosto que convidam a desacelerar. Conte para nós como você imagina o seu sofá.",
    images: [amplo],
  },
  {
    id: "sofa-cinza",
    name: "Sofá clássico cinza",
    category: "Sofás",
    detail: "Um clássico para a sua casa",
    description:
      "Braços arredondados e três assentos em uma composição clássica. Uma referência para renovar o conforto da sala.",
    images: [classicoCinza],
  },
  {
    id: "sofa-preto",
    name: "Sofá clássico preto",
    category: "Sofás",
    detail: "Presença em cada detalhe",
    description:
      "O preto e os braços acolchoados compõem uma proposta de visual clássico. Consulte as opções para o seu projeto.",
    images: [classicoPreto],
  },
  {
    id: "poltronas-cinza",
    name: "Poltronas de linhas retas",
    category: "Poltronas",
    detail: "Um lugar só seu",
    description:
      "Poltronas cinza com base de madeira e almofadas decorativas. Uma inspiração para complementar os assentos da sala.",
    images: [poltronasCinza],
  },
  {
    id: "cabeceira-rosa",
    name: "Cabeceira de formas arredondadas",
    category: "Cabeceiras",
    detail: "Suavidade para o quarto",
    description:
      "Módulos estofados com alturas diferentes e acabamento arredondado. Um detalhe delicado para transformar a parede da cama.",
    images: [cabeceiraRosa],
  },
  {
    id: "cabeceira-painel",
    name: "Cabeceira em painel estofado",
    category: "Cabeceiras",
    detail: "O quarto ainda mais acolhedor",
    description:
      "Uma referência de painel estofado com módulos e botões. Converse com a Wilson sobre as possibilidades para o seu quarto.",
    images: [cabeceiraPainel],
  },
];
