export const business = {
  name: "M1 Películas",
  phone: "5548984397210",
  displayPhone: "(48) 98439-7210",
  address: "Av. das Universidades, 105, sala 3",
  neighborhood: "Cidade Universitária Pedra Branca",
  city: "Palhoça – SC",
  postalCode: "88137-315",
  instagram: "https://www.instagram.com/m1.peliculas/",
  facebook: "https://www.facebook.com/M1.peliculas",
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("M1 Películas, Av. das Universidades, 105, Pedra Branca, Palhoça - SC, 88137-315")}`;

export function whatsappUrl(
  message = "Olá! Gostaria de um orçamento de película para o meu carro.",
) {
  return `https://wa.me/${business.phone}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { label: "Películas", href: "#peliculas" },
  { label: "Nosso cuidado", href: "#cuidado" },
  { label: "A M1", href: "#a-m1" },
  { label: "Onde estamos", href: "#contato" },
];
