const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const header = document.querySelector(".site-header");
const materialImage = document.getElementById("material-image");
const materialKicker = document.getElementById("material-kicker");
const materialTitle = document.getElementById("material-title");
const materialDescription = document.getElementById("material-description");
const materialList = document.getElementById("material-list");
const materialTags = document.getElementById("material-tags");
const materialTabs = document.querySelectorAll(".console-tab");
const contactForm = document.getElementById("contact-form");

const materialData = {
  drywall: {
    kicker: "Drywall e placas especiais",
    title: "Placas para diferentes exigências de obra, com soluções voltadas à construção a seco.",
    description:
      "A linha de placas da GessoPlac atende composições de paredes, forros e fechamentos com materiais usados em obras residenciais, comerciais e projetos com demandas técnicas específicas.",
    image: "assets/img/gessoplac-placas-amostra.jpeg",
    alt: "Amostra de placas de drywall e placas especiais",
    items: [
      "Placas drywall para paredes, forros e divisórias.",
      "Placas cimentícias para composições compatíveis com obras que exigem maior robustez.",
      "Placa Glasroc e versões especiais para sistemas técnicos."
    ],
    tags: ["Drywall", "Cimentícia", "Glasroc"]
  },
  massas: {
    kicker: "Massas e acabamento",
    title: "Tratamento de juntas, acabamento e apoio ao sistema com opções voltadas ao drywall.",
    description:
      "A GessoPlac trabalha com massas para drywall, massa pronta e soluções complementares para quem precisa avançar do fechamento ao acabamento com mais consistência.",
    image: "assets/img/gessoplac-massas-drywall.jpeg",
    alt: "Baldes de massa para drywall e massa cimentícia",
    items: [
      "Massa para drywall e juntas.",
      "Massa cimentícia e produtos de acabamento.",
      "Itens voltados ao preparo e ao tratamento de superfícies do sistema."
    ],
    tags: ["Juntas", "Acabamento", "Massa pronta"]
  },
  fixacao: {
    kicker: "Fixação e acessórios",
    title: "Parafusos, buchas e peças de apoio para montagem, sustentação e detalhamento da instalação.",
    description:
      "Além das placas e massas, a GessoPlac reúne itens de fixação usados na estruturação da obra a seco, facilitando a compra concentrada para a execução.",
    image: "assets/img/gessoplac-fixadores-mostruario.jpeg",
    alt: "Mostruário com parafusos, buchas e fixadores",
    items: [
      "Parafusos para drywall e acessórios de montagem.",
      "Fixadores, buchas e componentes de apoio.",
      "Kits e complementos para diferentes etapas da instalação."
    ],
    tags: ["Parafusos", "Buchas", "Acessórios"]
  },
  ferramentas: {
    kicker: "Ferramentas de instalação",
    title: "Ferramentas para medir, cortar, fixar e finalizar o serviço com mais praticidade na obra.",
    description:
      "O mostruário da loja ajuda a visualizar uma linha de ferramentas para construção a seco, incluindo itens úteis no corte, nivelamento, aplicação e acabamento.",
    image: "assets/img/gessoplac-ferramentas-mostruario.jpeg",
    alt: "Painel de ferramentas para drywall na GessoPlac",
    items: [
      "Ferramentas para montagem e acabamento em drywall.",
      "Itens para medição, corte e conferência.",
      "Complementos que ajudam na rotina de instalação."
    ],
    tags: ["Corte", "Medição", "Aplicação"]
  },
  estoque: {
    kicker: "Estoque e operação",
    title: "Estrutura para concentrar materiais, organizar o atendimento e apoiar compras em Uberlândia.",
    description:
      "As imagens do galpão mostram uma base com volume de placas, perfis e materiais de apoio, reforçando a proposta da GessoPlac de reunir diferentes frentes da construção a seco em um só lugar.",
    image: "assets/img/gessoplac-estoque-1.jpg",
    alt: "Área interna da GessoPlac com pallets e empilhadeira",
    items: [
      "Estoque com placas e materiais para drywall.",
      "Espaço voltado à organização do abastecimento da loja.",
      "Atendimento local para quem busca materiais em Uberlândia."
    ],
    tags: ["Galpão", "Organização", "Uberlândia"]
  }
};

function setMaterial(key) {
  const material = materialData[key];

  if (!material) {
    return;
  }

  materialKicker.textContent = material.kicker;
  materialTitle.textContent = material.title;
  materialDescription.textContent = material.description;
  materialImage.src = material.image;
  materialImage.alt = material.alt;

  materialList.innerHTML = material.items
    .map((item) => `<li>${item}</li>`)
    .join("");

  materialTags.innerHTML = material.tags
    .map((tag) => `<span>${tag}</span>`)
    .join("");

  materialTabs.forEach((tab) => {
    const isActive = tab.dataset.material === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

materialTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setMaterial(tab.dataset.material);
  });
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    siteNav.classList.toggle("is-open", !expanded);
    document.body.classList.toggle("menu-open", !expanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16
  }
);

document.querySelectorAll(".reveal").forEach((element) => {
  revealObserver.observe(element);
});

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 24);
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const city = document.getElementById("city")?.value.trim();
    const interest = document.getElementById("interest")?.value.trim();
    const quantity = document.getElementById("quantity")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    const lines = [
      "Olá! Vim pelo site da GessoPlac e quero atendimento."
    ];

    if (name) {
      lines.push(`Nome: ${name}`);
    }

    if (city) {
      lines.push(`Cidade: ${city}`);
    }

    if (interest) {
      lines.push(`Material de interesse: ${interest}`);
    }

    if (quantity) {
      lines.push(`Quantidade ou medida: ${quantity}`);
    }

    if (message) {
      lines.push(`Mensagem: ${message}`);
    }

    const url = `https://wa.me/553432557975?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
  });
}
