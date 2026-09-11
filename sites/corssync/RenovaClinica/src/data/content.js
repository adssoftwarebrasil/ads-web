export const contact = {
  phoneDisplay: "+55 65 99603-1282",
  phoneHref: "tel:+5565996031282",
  email: "renovaclinicaintegrada@gmail.com",
  address: "Rua São Luís, 786 NE — Bairro Nossa Senhora Aparecida",
  city: "Campo Novo do Parecis — CEP 78360-000",
  hours: "7h às 11h e 13h às 19h",
  socialName: "Renova Clínica Integrada",
};

const whatsappMessage =
  "Olá! Vim pelo site da Renova Clínica Integrada e gostaria de agendar uma avaliação.";

export const whatsappUrl = `https://wa.me/5565996031282?text=${encodeURIComponent(whatsappMessage)}`;

const mapQuery =
  "Rua São Luís 786 NE, Nossa Senhora Aparecida, Campo Novo do Parecis, 78360-000";

export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

export const coverageCities = [
  "Campo Novo do Parecis",
  "Sapezal",
  "Brasnorte",
  "Juara",
  "Tangará da Serra",
];

export const serviceGroups = [
  {
    id: "odontologia",
    label: "Odontologia & Estética",
    eyebrow: "Sorrisos e expressão facial",
    services: [
      {
        title: "Harmonização facial",
        description:
          "Avaliação estética e planejamento individualizado para valorizar proporções e identidade.",
        icon: "Sparkles",
      },
      {
        title: "Tratamento de canal",
        description:
          "Cuidado endodôntico para tratar a região interna do dente e preservar sua função.",
        icon: "ShieldPlus",
      },
      {
        title: "Lentes de porcelana",
        description:
          "Planejamento estético para transformar forma, proporção e harmonia do sorriso.",
        icon: "Smile",
      },
      {
        title: "Implante dentário",
        description:
          "Reabilitação planejada para recuperar função, segurança e naturalidade ao sorrir.",
        icon: "BadgePlus",
      },
      {
        title: "Odontopediatria",
        description:
          "Atendimento odontológico pensado para acolher e cuidar das crianças.",
        icon: "Baby",
      },
    ],
  },
  {
    id: "medicina",
    label: "Medicina & Bem-estar",
    eyebrow: "Saúde em visão integrada",
    services: [
      {
        title: "Dermatologia",
        description:
          "Avaliação e acompanhamento da saúde da pele, dos cabelos e das unhas.",
        icon: "ScanFace",
      },
      {
        title: "Alergia",
        description:
          "Investigação e acompanhamento profissional de manifestações alérgicas.",
        icon: "Flower2",
      },
      {
        title: "Emagrecimento",
        description:
          "Acompanhamento médico individualizado com atenção à saúde e à rotina.",
        icon: "HeartPulse",
      },
      {
        title: "Clínico geral",
        description:
          "Avaliação ampla, orientação preventiva e acompanhamento da saúde.",
        icon: "Stethoscope",
      },
      {
        title: "Medicina integrativa",
        description:
          "Um olhar que considera diferentes aspectos da saúde e do bem-estar.",
        icon: "Orbit",
      },
      {
        title: "Soroterapia",
        description:
          "Terapia realizada após avaliação e indicação profissional individualizada.",
        icon: "Syringe",
      },
    ],
  },
];
