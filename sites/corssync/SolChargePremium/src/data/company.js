export const company = {
  name: "Premium Energia Solar & Electric Car Solutions",
  businessPhone: "(61) 3244-4605",
  businessNumber: "556132444605",
  mobilePhone: "(61) 99528-3458",
  mobileNumber: "5561995283458",
  instagram: "https://www.instagram.com/premiumenergiasolar/",
  address:
    "SCS Quadra 01, Bloco I, Edifício Central, nº 30, sala 703, Asa Sul, Brasília – DF",
  postalCode: "70304-900",
  hours: "Das 8h às 19h",
};

export function whatsappUrl(
  message = "Olá! Gostaria de conhecer as soluções da Premium e solicitar um orçamento.",
) {
  return `https://wa.me/${company.businessNumber}?text=${encodeURIComponent(message)}`;
}

export const navigation = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#para-voce", label: "Para você" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#a-premium", label: "A Premium" },
];
