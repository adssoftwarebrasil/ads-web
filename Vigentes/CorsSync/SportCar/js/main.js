const serviceData = {
  diagnostico: {
    kicker: "Leitura avançada",
    title: "Diagnóstico eletrônico com leitura mais assertiva para diesel, flex, híbridos, elétricos e PHEV.",
    description:
      "Equipamentos modernos e experiência prática ajudam a interpretar falhas com mais segurança, o que reduz tentativa e erro e permite orientar o cliente com mais clareza sobre a manutenção indicada.",
    image: "assets/img/sportcar-diagnostico-autel.jpeg",
    alt: "Diagnóstico eletrônico da Sport Car",
    bullets: [
      "Análise explicativa para o cliente entender o problema e a proposta de serviço.",
      "Suporte para sistemas eletrônicos de veículos nacionais, importados, diesel, flex, híbridos, elétricos e PHEV.",
      "Mais segurança antes de seguir para troca de peças ou desmontagem."
    ],
    tags: ["Autel", "Diesel, flex, híbridos e PHEV", "Falha identificada com critério"]
  },
  eletrificados: {
    kicker: "Linha eletrificada",
    title: "Atendimento para veículos elétricos, híbridos e PHEV com diagnóstico técnico e leitura criteriosa.",
    description:
      "A Sport Car também inclui na linha de serviço o atendimento a veículos eletrificados, com análise inicial cuidadosa, leitura de sistemas e orientação clara para cada necessidade apresentada pelo cliente.",
    image: "assets/img/sportcar-diagnostico-autel.jpeg",
    alt: "Diagnóstico em veículo eletrificado na Sport Car",
    bullets: [
      "Atendimento para veículos elétricos, híbridos convencionais e híbridos plug-in (PHEV).",
      "Leitura de sistemas e apoio no direcionamento do diagnóstico com mais clareza.",
      "Conversa objetiva para alinhar sintomas, uso do veículo e próximos passos do atendimento."
    ],
    tags: ["Veículos elétricos", "Híbridos", "PHEV"]
  },
  mecanica: {
    kicker: "Motor e manutenção",
    title: "Mecânica completa e retífica com atenção ao que realmente precisa ser feito.",
    description:
      "A Sport Car atua em manutenção mecânica de rotina e em casos que exigem aprofundamento em motor, sistema de arrefecimento e componentes que pedem experiência para chegar no reparo correto.",
    image: "assets/img/sportcar-motor-aberto.jpeg",
    alt: "Serviço de mecânica e motor na Sport Car",
    bullets: [
      "Mecânica completa para veículos de diferentes perfis de uso.",
      "Sistema de arrefecimento e revisões com foco em confiabilidade.",
      "Retífica e serviços de motor com orientação transparente ao cliente."
    ],
    tags: ["Motor", "Arrefecimento", "Manutenção resolutiva"]
  },
  rodagem: {
    kicker: "Rodagem precisa",
    title: "Alinhamento, balanceamento, pneus e ajuste fino para o carro rodar melhor.",
    description:
      "A oficina trabalha com alinhamento, balanceamento e montagem de pneus buscando estabilidade, desgaste mais regular e uma condução mais segura para cidade, estrada e uso pesado.",
    image: "assets/img/sportcar-picape-alinhamento.jpeg",
    alt: "Picape em alinhamento na Sport Car",
    bullets: [
      "Alinhamento e balanceamento para passeio, picapes e utilitários.",
      "Montagem de pneus com atenção ao acabamento e ao ajuste final.",
      "Serviço pensado para rodagem mais segura e uniforme."
    ],
    tags: ["Alinhamento", "Balanceamento", "Montagem de pneus"]
  },
  sistemas: {
    kicker: "Conjuntos sensíveis",
    title: "Câmbio automático, freios e suspensão com critério no diagnóstico e no reparo.",
    description:
      "Quando o veículo apresenta perda de resposta, ruído, instabilidade ou comportamento fora do normal, a Sport Car atua nos sistemas que mais influenciam segurança, dirigibilidade e conforto.",
    image: "assets/img/sportcar-jeep-oficina.jpg",
    alt: "Veículo em atendimento na oficina Sport Car",
    bullets: [
      "Câmbio automático com avaliação cuidadosa antes de decidir a intervenção.",
      "Freios e suspensão tratados com foco em segurança e estabilidade.",
      "Método de manutenção definido de acordo com o uso real do cliente."
    ],
    tags: ["Câmbio automático", "Freios", "Suspensão"]
  },
  especial: {
    kicker: "Linha 4x4 e antigos",
    title: "Atendimento para 4x4, picapes de grande porte e restauração de veículos antigos.",
    description:
      "A rotina da Sport Car também contempla projetos que pedem mais experiência em estrutura, altura, peso, uso severo ou valor afetivo, incluindo picapes grandes, 4x4 e carros antigos.",
    image: "assets/img/sportcar-alinhamento-troller.jpeg",
    alt: "Veículo 4x4 em alinhamento na Sport Car",
    bullets: [
      "Atendimento para 4x4 e picapes com exigências diferentes de rodagem e estrutura.",
      "Restauração de antigos com olhar técnico e respeito ao projeto do veículo.",
      "Experiência local para definir o melhor método de manutenção em cada caso."
    ],
    tags: ["4x4", "Picapes grandes", "Restauração de antigos"]
  },
  pecas: {
    kicker: "Reposição certa",
    title: "Peças para nacionais e importados com apoio ao serviço mecânico da oficina.",
    description:
      "A Sport Car também atende quem precisa de peças para diferentes modelos, facilitando o fluxo entre diagnóstico, orientação e execução do serviço com mais praticidade.",
    image: "assets/img/sportcar-fachada.jpeg",
    alt: "Fachada da Sport Car Centro Automotivo",
    bullets: [
      "Peças para linhas nacionais e importadas conforme a necessidade do serviço.",
      "Mais praticidade para alinhar diagnóstico, reposição e manutenção no mesmo fluxo.",
      "Atendimento objetivo para orientar a melhor solução conforme o caso."
    ],
    tags: ["Nacionais", "Importados", "Fluxo completo de oficina"]
  }
};

const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const header = document.querySelector(".site-header");
const serviceTabs = document.querySelectorAll(".service-tab");
const serviceImage = document.getElementById("service-image");
const serviceKicker = document.getElementById("service-kicker");
const serviceTitle = document.getElementById("service-title");
const serviceDescription = document.getElementById("service-description");
const serviceList = document.getElementById("service-list");
const serviceTags = document.getElementById("service-tags");
const faqItems = document.querySelectorAll(".faq-item");
const contactForm = document.getElementById("contact-form");
const sinceElement = document.querySelector("[data-since]");

if (sinceElement) {
  const startYear = Number(sinceElement.dataset.since);
  const currentYear = new Date().getFullYear();
  const years = Math.max(currentYear - startYear, 0);
  sinceElement.textContent = years > 0 ? `${years}+ anos` : `${startYear}`;
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    siteNav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", !isExpanded);
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    });
  });
}

window.addEventListener("scroll", () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 16);
});

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.service;
    const content = serviceData[key];

    if (!content) {
      return;
    }

    serviceTabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    serviceKicker.textContent = content.kicker;
    serviceTitle.textContent = content.title;
    serviceDescription.textContent = content.description;
    serviceImage.src = content.image;
    serviceImage.alt = content.alt;

    serviceList.innerHTML = "";
    content.bullets.forEach((bullet) => {
      const li = document.createElement("li");
      li.textContent = bullet;
      serviceList.appendChild(li);
    });

    serviceTags.innerHTML = "";
    content.tags.forEach((tag) => {
      const span = document.createElement("span");
      span.textContent = tag;
      serviceTags.appendChild(span);
    });
  });
});

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  if (!button || !answer) {
    return;
  }

  if (item.classList.contains("is-open")) {
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  }

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");

    faqItems.forEach((entry) => {
      const entryButton = entry.querySelector(".faq-question");
      const entryAnswer = entry.querySelector(".faq-answer");

      entry.classList.remove("is-open");
      if (entryButton) {
        entryButton.setAttribute("aria-expanded", "false");
      }
      if (entryAnswer) {
        entryAnswer.style.maxHeight = "0px";
      }
    });

    if (!isOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const vehicle = (formData.get("vehicle") || "").toString().trim();
    const city = (formData.get("city") || "").toString().trim();
    const service = (formData.get("service") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const lines = [
      "Olá! Vim pelo site da Sport Car e quero atendimento.",
      name ? `Nome: ${name}` : "",
      vehicle ? `Veículo: ${vehicle}` : "",
      city ? `Cidade: ${city}` : "",
      service ? `Serviço desejado: ${service}` : "",
      message ? `Detalhes: ${message}` : ""
    ].filter(Boolean);

    const url = `https://wa.me/5577999214785?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -40px 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}
