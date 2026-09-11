const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("[data-nav]");
const serviceTabs = document.querySelectorAll("[data-service]");
const serviceDetail = document.querySelector("[data-service-detail]");
const quoteForm = document.querySelector("[data-quote-form]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const revealItems = document.querySelectorAll("[data-reveal]");
let serviceChangeTimer;

const services = {
  barracao: {
    code: "AG-01",
    title: "Montagem de barracão metálico",
    text: "Estrutura pensada para depósito, oficina, apoio rural, cobertura de máquinas e operação industrial leve, com dimensões alinhadas ao uso real do espaço.",
    bullets: [
      "Vigas, pilares e cobertura com solução metálica.",
      "Atendimento em chácaras, propriedades rurais e empresas.",
      "Orçamento direto para Sinop e cidades próximas."
    ]
  },
  cobertura: {
    code: "AG-02",
    title: "Coberturas metálicas sob medida",
    text: "Proteção para área de serviço, comércio, pátio, garagem, varanda ou espaço de trabalho com estrutura limpa e durável.",
    bullets: [
      "Boa alternativa para ampliar área útil sem obra pesada.",
      "Indicado para sol, chuva e rotina de uso constante.",
      "Pode atender imóveis urbanos, rurais e industriais."
    ]
  },
  chale: {
    code: "AG-03",
    title: "Chalés com estrutura metálica",
    text: "Solução para áreas de descanso, chácaras e projetos de hospedagem que pedem resistência, personalidade e montagem objetiva.",
    bullets: [
      "Estrutura para projetos compactos ou personalizados.",
      "Boa presença visual para área rural e lazer.",
      "Atendimento com conversa direta sobre medidas e uso."
    ]
  },
  garagem: {
    code: "AG-04",
    title: "Garagens e anexos metálicos",
    text: "Cobertura para proteger veículos, motos, implementos e ferramentas, com proporção adequada ao espaço disponível.",
    bullets: [
      "Projeto para casa, chácara, comércio ou empresa.",
      "Estrutura pensada para entrada, manobra e circulação.",
      "Acabamento funcional para o dia a dia."
    ]
  },
  gourmet: {
    code: "AG-05",
    title: "Áreas gourmet em metal",
    text: "Ambientes de lazer com cobertura resistente e visual marcante para receber família, amigos e clientes com conforto.",
    bullets: [
      "Indicado para quintais, chácaras e espaços de convivência.",
      "Ajuda a proteger churrasqueira, mobiliário e circulação.",
      "Pode ser combinado com garagens, anexos e varandas."
    ]
  }
};

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  nav?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
}

function renderService(serviceKey) {
  const service = services[serviceKey];

  if (!service || !serviceDetail) {
    return;
  }

  serviceDetail.innerHTML = `
    <span class="service-code">${service.code}</span>
    <h3>${service.title}</h3>
    <p>${service.text}</p>
    <ul>${service.bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
  `;
}

function updateWhatsappMessage() {
  if (!quoteForm || !whatsappLink) {
    return;
  }

  const formData = new FormData(quoteForm);
  const tipo = formData.get("tipo") || "Estrutura metálica";
  const cidade = formData.get("cidade") || "Sinop";
  const medida = (formData.get("medida") || "").toString().trim();
  const observacao = (formData.get("observacao") || "").toString().trim();

  const linhas = [
    "Olá, vim pelo site da Agronop.",
    `Quero orçamento para: ${tipo}.`,
    `Cidade: ${cidade}.`
  ];

  if (medida) {
    linhas.push(`Medida aproximada: ${medida}.`);
  }

  if (observacao) {
    linhas.push(`Observação: ${observacao}`);
  }

  whatsappLink.href = `https://wa.me/5566996192627?text=${encodeURIComponent(linhas.join("\n"))}`;
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

menuToggle?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    serviceTabs.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });

    tab.classList.add("is-active");
    tab.setAttribute("aria-selected", "true");

    window.clearTimeout(serviceChangeTimer);
    serviceDetail?.classList.add("is-changing");
    serviceChangeTimer = window.setTimeout(() => {
      renderService(tab.dataset.service);
      window.requestAnimationFrame(() => {
        serviceDetail?.classList.remove("is-changing");
      });
    }, 120);
  });
});

quoteForm?.addEventListener("input", updateWhatsappMessage);
quoteForm?.addEventListener("change", updateWhatsappMessage);
updateWhatsappMessage();

document.documentElement.classList.add("reveal-ready");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.12
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
