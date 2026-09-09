export const company = {
  name: "Kadima",
  fullName: "Kadima Soluções em Informática",
  phoneDisplay: "(21) 97686-8932",
  phoneHref: "+5521976868932",
  whatsapp: "5521976868932",
  address:
    "Av. João Fernandes de Oliveira Neto, 61, Loja E — Seropédica, RJ",
  facebook: "https://www.facebook.com/share/19EG46aaLu/",
  mapQuery:
    "Av. João Fernandes de Oliveira Neto, 61, Loja E, Seropédica - RJ",
};

export const makeWhatsappLink = (message) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export const primaryWhatsappLink = makeWhatsappLink(
  "Olá! Encontrei a Kadima pelo site e gostaria de solicitar um orçamento.",
);

export const heroSlides = [
  {
    eyebrow: "Especialistas em tecnologia há +15 anos",
    title: "Conserto de computadores e impressoras",
    accent: "em Seropédica.",
    description:
      "Manutenção, upgrades, venda e locação com orientação próxima e experiência técnica.",
    image: "/assets/hero-tech.jpg",
    imageAlt:
      "Notebook, computador e impressora em ambiente técnico da Kadima",
    imageKicker: "Soluções completas",
    imageLabel: "Impressoras • Notebooks • Computadores",
    ctaLabel: "Solicitar orçamento",
    ctaHref: primaryWhatsappLink,
    secondaryLabel: "Conhecer soluções",
    secondaryHref: "#solucoes",
    statValue: "15+",
    statLabel: "anos de atuação",
    badgeIcon: "wrench",
    badgeText: "Técnica + agilidade",
  },
  {
    eyebrow: "Produtividade para empresas",
    title: "Locação de impressoras",
    accent: "para sua empresa.",
    description:
      "Impressoras coloridas profissionais para apoiar sua rotina, com atendimento nas regiões indicadas no site.",
    image: "/assets/carousel-locacao-impressoras.png",
    imageAlt:
      "Impressora multifuncional profissional em um escritório organizado",
    imageKicker: "Locação empresarial",
    imageLabel: "Equipamentos profissionais sob consulta",
    ctaLabel: "Falar no WhatsApp",
    ctaHref: makeWhatsappLink(
      "Olá! Gostaria de solicitar um orçamento para locação de impressoras.",
    ),
    secondaryLabel: "Ver regiões atendidas",
    secondaryHref: "#atendimento",
    statValue: "06",
    statLabel: "regiões atendidas",
    badgeIcon: "printer",
    badgeText: "Planos sob consulta",
  },
  {
    eyebrow: "Atendimento técnico responsável",
    title: "Manutenção especializada,",
    accent: "somente na loja.",
    description:
      "Leve sua impressora, notebook ou computador até a unidade da Kadima para avaliação e manutenção.",
    image: "/assets/carousel-manutencao-loja.png",
    imageAlt:
      "Notebook e computador recebendo manutenção em bancada técnica de loja",
    imageKicker: "Atendimento na unidade",
    imageLabel: "Diagnóstico e manutenção na loja",
    ctaLabel: "Solicitar avaliação",
    ctaHref: makeWhatsappLink(
      "Olá! Gostaria de levar meu equipamento até a loja para uma avaliação.",
    ),
    secondaryLabel: "Ver endereço da loja",
    secondaryHref: "#localizacao",
    statValue: "100%",
    statLabel: "na loja",
    badgeIcon: "mapPin",
    badgeText: "Leve até nossa unidade",
  },
];

export const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "A Kadima", href: "#sobre" },
  { label: "Locação", href: "#atendimento" },
  { label: "Localização", href: "#localizacao" },
];

export const highlights = [
  {
    number: "01",
    icon: "laptop",
    title: "Reparo de placa de notebook",
    description:
      "Diagnóstico e reparo em nível de placa para recuperar o equipamento sem partir direto para a substituição.",
    linkLabel: "Falar sobre meu notebook",
    whatsappMessage:
      "Olá! Preciso de uma avaliação para reparo de placa do meu notebook.",
  },
  {
    number: "02",
    icon: "gauge",
    title: "Upgrade de notebook",
    description:
      "Atualização de SSD e memória para melhorar a velocidade e prolongar a vida útil da sua máquina.",
    linkLabel: "Quero melhorar o desempenho",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para upgrade do meu notebook.",
  },
  {
    number: "03",
    icon: "printer",
    title: "Locação de impressoras",
    description:
      "Impressoras coloridas profissionais para apoiar a rotina e a produtividade do seu negócio.",
    linkLabel: "Consultar locação",
    whatsappMessage:
      "Olá! Gostaria de saber mais sobre a locação de impressoras coloridas profissionais.",
  },
];

export const services = [
  {
    id: "impressoras",
    number: "01",
    shortTitle: "Impressoras",
    icon: "printer",
    kicker: "Tanque de tinta e jato de tinta",
    title: "Manutenção especializada em impressoras",
    description:
      "Há mais de 15 anos, a Kadima acompanha a evolução das impressoras com tanque de tinta e atende equipamentos Epson, Canon, Brother e HP.",
    points: [
      "Manutenção de impressoras tanque de tinta",
      "Atendimento a modelos jato de tinta",
      "Diagnóstico e manutenção realizados somente na loja",
    ],
    cta: "Solicitar avaliação",
    whatsappMessage:
      "Olá! Preciso de manutenção para minha impressora. Gostaria de solicitar uma avaliação.",
  },
  {
    id: "notebooks",
    number: "02",
    shortTitle: "Notebooks",
    icon: "laptop",
    kicker: "Reparo e recuperação",
    title: "Reparo de notebooks e placas",
    description:
      "Atendimento para notebooks com falhas de funcionamento, incluindo reparo de placa e manutenção do equipamento.",
    points: [
      "Reparo de placa de notebook",
      "Manutenção de notebooks somente na loja",
      "Avaliação para identificar a solução adequada",
    ],
    cta: "Falar sobre meu notebook",
    whatsappMessage:
      "Olá! Meu notebook precisa de manutenção. Posso solicitar uma avaliação?",
  },
  {
    id: "upgrade",
    number: "03",
    shortTitle: "Computadores",
    icon: "monitor",
    kicker: "Manutenção e desempenho",
    title: "Computadores prontos para acompanhar sua rotina",
    description:
      "Manutenção de computadores e upgrades de notebooks para melhorar o desempenho e aproveitar melhor o equipamento.",
    points: [
      "Conserto de computadores e notebooks",
      "Upgrade de notebook",
      "Venda de notebooks e computadores",
    ],
    cta: "Pedir um orçamento",
    whatsappMessage:
      "Olá! Gostaria de um orçamento para manutenção ou upgrade do meu computador.",
  },
  {
    id: "locacao",
    number: "04",
    shortTitle: "Venda e locação",
    icon: "building",
    kicker: "Equipamentos para sua necessidade",
    title: "Venda e locação de equipamentos",
    description:
      "Soluções para quem precisa adquirir equipamentos ou contar com impressoras coloridas profissionais por locação.",
    points: [
      "Venda de impressoras, notebooks e computadores",
      "Locação de impressoras",
      "Impressoras coloridas profissionais",
    ],
    cta: "Consultar disponibilidade",
    whatsappMessage:
      "Olá! Quero saber mais sobre venda e locação de equipamentos na Kadima.",
  },
];

export const coverageAreas = [
  "Seropédica",
  "Fazenda Caxias",
  "Santa Cruz",
  "Campo Grande",
  "Paracambi",
  "Itaguaí",
];
