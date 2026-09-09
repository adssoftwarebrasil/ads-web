import logo from "../assets/media/logo-frt.webp";
import heroImage from "../assets/media/storefront-hero.webp";
import storefrontAngle from "../assets/media/storefront-angle.webp";
import storefrontSide from "../assets/media/storefront-side.webp";
import storefrontFront from "../assets/media/storefront-front.webp";
import storefrontWide from "../assets/media/storefront-wide.webp";
import storefrontStreet from "../assets/media/storefront-street.webp";
import office from "../assets/media/office.webp";
import lotLineup from "../assets/media/lot-lineup.webp";
import storefrontLineup from "../assets/media/storefront-lineup.webp";
import premiumSuv from "../assets/media/premium-suv.webp";
import storefrontFord from "../assets/media/storefront-ford.webp";
import storefrontToyota from "../assets/media/storefront-toyota.webp";
import showroomWide from "../assets/media/showroom-wide.webp";
import showroomHonda from "../assets/media/showroom-honda.webp";
import tracker from "../assets/media/vehicle-tracker.webp";
import peugeot from "../assets/media/vehicle-peugeot.webp";
import hilux from "../assets/media/vehicle-hilux.webp";
import showroomCars from "../assets/media/showroom-cars.webp";
import storeDetail from "../assets/media/store-detail.webp";
import storefrontPickups from "../assets/media/storefront-pickups.webp";
import showroomTour from "../assets/media/showroom-tour.mp4";

export const brand = {
  name: "FRT Veículos",
  logo,
  heroImage,
  showroomTour,
  videoPoster: showroomWide,
};

export const contact = {
  phoneDisplay: "(62) 98517-0398",
  phone: "5562985170398",
  email: "frrveiculos@gmail.com",
  address: "Avenida Manoel Monteiro, Qd. 07, Lt. 02, nº 1533, Setor Central",
  city: "Centro de Trindade",
  hours: "08h às 18h",
  instagram: "https://www.instagram.com/frt.veiculos/",
  facebook: "https://www.facebook.com/frt.veiculos",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Avenida%20Manoel%20Monteiro%201533%20Setor%20Central%20Trindade",
};

export const whatsappUrl = `https://wa.me/${contact.phone}?text=${encodeURIComponent(
  "Olá! Vim pelo site da FRT Veículos e gostaria de conhecer os veículos disponíveis.",
)}`;

export const navigation = [
  { label: "Veículos", href: "#veiculos" },
  { label: "Negociação", href: "#negociacao" },
  { label: "A FRT", href: "#frt" },
  { label: "Galeria", href: "#galeria" },
  { label: "Visite", href: "#visite" },
];

export const vehicleProfiles = [
  {
    title: "Seminovos selecionados",
    description:
      "Opções para diferentes rotinas, com procedência e informações claras para você decidir com tranquilidade.",
    image: peugeot,
    alt: "SUV seminovo em destaque no showroom da FRT Veículos",
    eyebrow: "Escolha com confiança",
  },
  {
    title: "Picapes para o seu ritmo",
    description:
      "Força, espaço e versatilidade para trabalho, estrada ou lazer. Consulte o estoque disponível.",
    image: hilux,
    alt: "Picape prata disponível na FRT Veículos",
    eyebrow: "Prontas para novos caminhos",
  },
  {
    title: "SUVs e carros premium",
    description:
      "Conforto, presença e tecnologia reunidos em veículos que combinam com a sua próxima fase.",
    image: tracker,
    alt: "SUV preto premium no showroom da FRT Veículos",
    eyebrow: "Seu próximo nível",
  },
];

export const negotiationOptions = [
  {
    number: "01",
    title: "Compre",
    text: "Conte o que procura e receba um atendimento direto para encontrar a melhor opção disponível.",
  },
  {
    number: "02",
    title: "Venda",
    text: "Fale com a equipe para apresentar seu veículo e entender as possibilidades de negociação.",
  },
  {
    number: "03",
    title: "Troque",
    text: "Use seu veículo atual na negociação e avance para uma escolha que faça sentido para você.",
  },
  {
    number: "04",
    title: "Financie",
    text: "Consulte as condições disponíveis e simule uma proposta de acordo com o seu perfil.",
  },
];

export const trustPoints = [
  {
    icon: "fileCheck",
    title: "Laudo cautelar",
    text: "Veículos avaliados para oferecer mais clareza e segurança na sua decisão.",
  },
  {
    icon: "shieldCheck",
    title: "Compra consciente",
    text: "Informação transparente e orientação em cada etapa da negociação.",
  },
  {
    icon: "badgeCheck",
    title: "Garantia sob consulta",
    text: "Condições apresentadas conforme o veículo para você saber exatamente o que está contratando.",
  },
  {
    icon: "messages",
    title: "Atendimento próximo",
    text: "Conversa direta com a equipe, do primeiro contato até a entrega das chaves.",
  },
];

export const gallery = [
  { src: storefrontAngle, alt: "Fachada da FRT Veículos vista em ângulo" },
  { src: storefrontSide, alt: "Fachada lateral da loja com veículos expostos" },
  { src: storefrontFront, alt: "Fachada da FRT Veículos com picapes e sedan" },
  { src: storefrontWide, alt: "Vista ampla da loja FRT Veículos em Trindade" },
  { src: storefrontStreet, alt: "Loja FRT Veículos vista da avenida" },
  { src: office, alt: "Espaço de atendimento da FRT Veículos" },
  { src: lotLineup, alt: "Linha de veículos no pátio da loja" },
  { src: storefrontLineup, alt: "Veículos alinhados em frente à FRT Veículos" },
  { src: premiumSuv, alt: "SUV prata em frente à FRT Veículos" },
  { src: storefrontFord, alt: "Picape Ford e carros em frente à loja" },
  { src: storefrontToyota, alt: "Picape Toyota e seminovos na FRT Veículos" },
  { src: showroomWide, alt: "Vista interna ampla do showroom" },
  { src: showroomHonda, alt: "SUV Honda em destaque dentro da loja" },
  { src: showroomCars, alt: "Seleção de carros no showroom da FRT Veículos" },
  { src: storeDetail, alt: "Detalhe da fachada e identificação da FRT Veículos" },
  { src: storefrontPickups, alt: "Picapes expostas em frente à loja" },
];

export const experienceImages = {
  primary: heroImage,
  secondary: showroomCars,
};
