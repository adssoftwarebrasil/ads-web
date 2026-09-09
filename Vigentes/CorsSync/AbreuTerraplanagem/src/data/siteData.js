export const contact = {
  phoneDisplay: "(62) 98558-5865",
  phoneDigits: "5562985585865",
  email: "abreuterraplenagem01@gmail.com",
  address:
    "Rua Gaipá, nº 80, Qd. 32, Lt. 01, Setor Santa Genoveva — Goiânia/GO — CEP 74.670-705",
  hoursWeek: "Segunda a sexta, das 07h às 17h",
  hoursSaturday: "Sábado, das 07h às 12h",
  instagram: "@abreuterraplenagem",
  instagramUrl: "https://www.instagram.com/abreuterraplenagem/",
  facebook: "Abreu Terraplenagem",
};

const whatsappMessage =
  "Olá! Gostaria de consultar a locação de máquinas pesadas para minha obra.";

export const whatsappUrl = `https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(whatsappMessage)}`;

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address)}`;

export const navigation = [
  { label: "Máquinas", href: "#maquinas" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "História", href: "#historia" },
  { label: "Atendimento", href: "#atendimento" },
];
