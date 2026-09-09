import facade from "../assets/fachada-principal.jpeg";
import family from "../assets/quarto-familia.png";
import double from "../assets/quarto-casal.png";
import triple from "../assets/quarto-casal-solteiro.png";
import lounge from "../assets/sala-estar-01.jpeg";
import reception from "../assets/recepcao-02.jpeg";
import breakfast from "../assets/cafe-buffet-01.png";
import breakfastCounter from "../assets/cafe-bancada.png";
import breakfastFruit from "../assets/cafe-buffet-02.png";
import dining from "../assets/sala-cafe-02.jpeg";
import parking from "../assets/estacionamento.jpeg";
import garden from "../assets/jardim-fachada.jpeg";
import logo from "../assets/brasao-entre-rios.png";

export const hotel = {
  name: "Entre Rios Hotel",
  whatsapp: "5563984061163",
  phoneDisplay: "(63) 98406-1163",
  email: "entrerioshotelparaiso@gmail.com",
  address: "Rua Bernardino Maciel, 549 — Centro",
  city: "Paraíso do Tocantins — TO",
  postalCode: "77600-000",
  instagram: "https://www.instagram.com/entrerioshotelparaiso/",
  facebook: "https://www.facebook.com/entrerioshotelparaiso/",
  maps: "https://www.google.com/maps/search/?api=1&query=Entre+Rios+Hotel+Rua+Bernardino+Maciel+549+Paraiso+do+Tocantins",
  mapEmbed:
    "https://maps.google.com/maps?q=Entre%20Rios%20Hotel%2C%20Rua%20Bernardino%20Maciel%20549%2C%20Para%C3%ADso%20do%20Tocantins&z=16&output=embed",
};

export function whatsappUrl(
  message = "Olá! Gostaria de consultar a disponibilidade no Entre Rios Hotel.",
) {
  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const photos = {
  facade,
  family,
  double,
  triple,
  lounge,
  reception,
  breakfast,
  breakfastCounter,
  breakfastFruit,
  dining,
  parking,
  garden,
  logo,
};

export const rooms = [
  {
    title: "Uma pausa a dois",
    label: "Cama de casal",
    image: double,
    alt: "Acomodação com cama de casal, ar-condicionado e smart TV",
    description:
      "Aconchego para desacelerar e aproveitar sua estadia com tranquilidade.",
    features: ["Cama de casal", "Smart TV de 50”"],
    message:
      "Olá! Gostaria de consultar a disponibilidade de uma acomodação com cama de casal.",
  },
  {
    title: "Mais espaço para estar junto",
    label: "Casal e solteiro",
    image: triple,
    alt: "Quarto com uma cama de casal e uma cama de solteiro",
    description: "Uma combinação de camas para quem viaja em boa companhia.",
    features: ["Casal + solteiro", "Smart TV de 50”"],
    message:
      "Olá! Gostaria de consultar a disponibilidade de uma acomodação com cama de casal e solteiro.",
  },
  {
    title: "Cada um com seu descanso",
    label: "Família e companhia",
    image: family,
    alt: "Acomodação com cama de casal e camas de solteiro, com smart TV",
    description:
      "Conte à nossa equipe quantas pessoas vêm e encontre a opção para sua viagem.",
    features: ["Múltiplas camas", "Smart TV de 50”"],
    message:
      "Olá! Gostaria de consultar uma acomodação para minha família ou grupo.",
  },
];

export const gallery = [
  {
    src: facade,
    alt: "Fachada do Entre Rios Hotel com jardim e entrada de vidro",
    category: "O hotel",
  },
  {
    src: triple,
    alt: "Quarto com cama de casal e cama de solteiro",
    category: "Acomodações",
  },
  {
    src: lounge,
    alt: "Sala de estar com sofás e poltronas na recepção",
    category: "O hotel",
  },
  {
    src: breakfastCounter,
    alt: "Bancada do café da manhã com bolos, café e utensílios",
    category: "Café da manhã",
  },
  {
    src: double,
    alt: "Quarto com cama de casal e smart TV",
    category: "Acomodações",
  },
  {
    src: dining,
    alt: "Salão do café da manhã com mesas e cadeiras",
    category: "Café da manhã",
  },
  {
    src: family,
    alt: "Quarto com cama de casal e camas de solteiro",
    category: "Acomodações",
  },
  {
    src: parking,
    alt: "Entrada do estacionamento ao lado do hotel",
    category: "O hotel",
  },
  {
    src: reception,
    alt: "Balcão da recepção do Entre Rios Hotel",
    category: "O hotel",
  },
  {
    src: breakfast,
    alt: "Buffet de café da manhã com frutas e bolos",
    category: "Café da manhã",
  },
  { src: garden, alt: "Jardim na fachada do hotel", category: "O hotel" },
  {
    src: breakfastFruit,
    alt: "Frutas e bolos servidos no buffet de café da manhã",
    category: "Café da manhã",
  },
];
