import greenDoor from "../assets/images/porta-galpao-verde.jpg";
import navyDoor from "../assets/images/porta-galpao-azul-marinho.jpg";
import blueDoor from "../assets/images/porta-industrial-azul.jpg";
import magentaDoor from "../assets/images/porta-magenta.jpg";
import whiteDoor from "../assets/images/porta-residencial-branca.jpg";
import grayHouse from "../assets/images/porta-residencial-cinza.jpg";
import integratedDoor from "../assets/images/porta-social-integrada-prata.jpg";
import silverDoor from "../assets/images/porta-social-e-enrolar-prata.jpg";
import redDoor from "../assets/images/porta-vermelha.jpg";
import weldingPoster from "../assets/video-posters/fabricacao-solda.jpg";
import materialsPoster from "../assets/video-posters/materiais-acabamento.jpg";
import residencePoster from "../assets/video-posters/projeto-residencial.jpg";
import testPoster from "../assets/video-posters/teste-porta-automatica.jpg";
import weldingVideo from "../assets/videos/fabricacao-solda.mp4";
import materialsVideo from "../assets/videos/materiais-acabamento.mp4";
import residenceVideo from "../assets/videos/projeto-residencial.mp4";
import testVideo from "../assets/videos/teste-porta-automatica.mp4";

export const services = [
  {
    number: "01",
    title: "Portas automáticas",
    description: "Praticidade no acionamento e agilidade para a rotina de comércios, residências e operações.",
  },
  {
    number: "02",
    title: "Portas manuais",
    description: "Soluções resistentes, produzidas e instaladas de acordo com o espaço de cada cliente.",
  },
  {
    number: "03",
    title: "Portões sociais e residenciais",
    description: "Acessos funcionais que unem segurança, acabamento e integração com a fachada.",
  },
  {
    number: "04",
    title: "Elevadores industriais",
    description: "Projetos voltados às necessidades de movimentação e apoio em ambientes industriais.",
  },
  {
    number: "05",
    title: "Fachadas",
    description: "Execução cuidadosa para renovar, proteger e valorizar a apresentação do seu espaço.",
  },
  {
    number: "06",
    title: "Estruturas para galpões",
    description: "Estruturas metálicas planejadas para projetos que pedem firmeza, escala e durabilidade.",
  },
];

export const projects = [
  { src: grayHouse, alt: "Porta de aço cinza instalada em residência", className: "project-card--wide" },
  { src: redDoor, alt: "Porta de aço vermelha instalada em fachada", className: "project-card--tall" },
  { src: blueDoor, alt: "Porta de aço azul de grande porte em galpão", className: "project-card--tall" },
  { src: silverDoor, alt: "Porta de aço prata com acesso social integrado", className: "project-card--wide" },
  { src: greenDoor, alt: "Porta de aço verde instalada em galpão", className: "project-card--tall" },
  { src: whiteDoor, alt: "Porta de aço branca em residência", className: "project-card--tall" },
  { src: magentaDoor, alt: "Porta de aço magenta instalada em imóvel", className: "project-card--tall" },
  { src: navyDoor, alt: "Porta de aço azul-marinho em galpão", className: "project-card--tall" },
  { src: integratedDoor, alt: "Porta de aço prata com porta social", className: "project-card--wide" },
];

export const videos = [
  {
    id: "fabricacao",
    number: "01",
    title: "Fabricação em andamento",
    description: "O trabalho com o aço começa no cuidado com cada união e acabamento.",
    duration: "9s",
    src: weldingVideo,
    poster: weldingPoster,
  },
  {
    id: "residencial",
    number: "02",
    title: "Projeto residencial",
    description: "Porta de enrolar e acesso social compondo uma fachada limpa e funcional.",
    duration: "30s",
    src: residenceVideo,
    poster: residencePoster,
  },
  {
    id: "teste",
    number: "03",
    title: "Teste de funcionamento",
    description: "A instalação ganha movimento na etapa de verificação do conjunto.",
    duration: "28s",
    src: testVideo,
    poster: testPoster,
  },
  {
    id: "materiais",
    number: "04",
    title: "Materiais e acabamento",
    description: "Perfis e componentes preparados para seguir para a produção.",
    duration: "10s",
    src: materialsVideo,
    poster: materialsPoster,
  },
];
