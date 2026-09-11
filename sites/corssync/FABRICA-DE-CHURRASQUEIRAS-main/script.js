"use strict";

const whatsappNumber = "5562993304123";

const productData = {
  churrasqueira: {
    index: "01",
    eyebrow: "A tradição da brasa",
    title: "Churrasqueira pré-moldada",
    description:
      "Estrutura robusta, montagem prática e diferentes opções de acabamento para transformar varandas e áreas de lazer.",
    image: "assets/images/churrasqueira-tijolinho-vermelha-nova.jpeg",
    alt: "Churrasqueira pré-moldada de tijolinho vermelho",
    fit: "contain",
    message: "Olá! Quero saber mais sobre as churrasqueiras pré-moldadas da Fábrica JA.",
    specs: [
      ["Construção", "Peças inteiriças"],
      ["Proteção", "Kit refratário completo"],
      ["Acabamento", "Kit inox"],
      ["Montagem", "Peças alinhadas"]
    ],
    hotspots: [
      {
        x: 50,
        y: 60,
        label: "Grelhas",
        title: "Alturas reguláveis",
        text: "Trilhos em níveis diferentes para controlar a distância entre o alimento e a brasa."
      },
      {
        x: 50,
        y: 24,
        label: "Chaminé",
        title: "Condução da fumaça",
        text: "Estrutura vertical que direciona a fumaça e completa o conjunto pré-moldado."
      },
      {
        x: 50,
        y: 84,
        label: "Estrutura",
        title: "Base pré-moldada",
        text: "Peças resistentes e pensadas para uma montagem mais ágil e segura."
      }
    ]
  },
  fogao: {
    index: "02",
    eyebrow: "Cozinhar sem pressa",
    title: "Fogão a lenha",
    description:
      "Modelos com ou sem forno para receitas cheias de memória, calor constante e aquele sabor que só a lenha entrega.",
    image: "assets/images/fogao-4-bocas-sem-forno.jpeg",
    alt: "Fogão a lenha de quatro bocas sem forno",
    fit: "contain",
    message: "Olá! Quero conhecer os modelos de fogão a lenha da Fábrica JA.",
    specs: [
      ["Aquecimento", "Forno alinhado à altura da chapa para melhor aquecimento"],
      ["Proteção", "Kit refratário completo"],
      ["Acabamento", "Kit inox"],
      ["Montagem", "Peças alinhadas"],
      ["Resistência", "Peças com barra de ferro para maior resistência"]
    ],
    hotspots: [
      {
        x: 43,
        y: 28,
        label: "Chaminé",
        title: "Saída de fumaça",
        text: "Estrutura vertical pré-moldada para conduzir a fumaça durante o preparo."
      },
      {
        x: 52,
        y: 54,
        label: "Chapas",
        title: "Quatro bocas",
        text: "Chapa ampla com quatro bocas para panelas de diferentes tamanhos."
      },
      {
        x: 59,
        y: 72,
        label: "Bancada",
        title: "Apoio lateral",
        text: "Superfície de apoio integrada para organizar os utensílios e o preparo."
      }
    ]
  },
  forno: {
    index: "03",
    eyebrow: "O centro da mesa",
    title: "Forno iglu assador",
    description:
      "Formato pensado para distribuir calor e criar experiências únicas com pizzas, pães, carnes e assados.",
    image: "assets/images/forno-iglu-frente.jpeg",
    alt: "Forno iglu artesanal em concreto visto de frente",
    fit: "contain",
    message: "Olá! Quero saber mais sobre o forno iglu assador da Fábrica JA.",
    specs: [
      ["Indicado para", "Pizzas, pães e assados"],
      ["Formato", "Cúpula tipo iglu"],
      ["Planejamento", "Base compatível e área ventilada"]
    ],
    hotspots: [
      {
        x: 50,
        y: 22,
        label: "Cúpula",
        title: "Calor envolvente",
        text: "O formato em cúpula favorece a circulação e o aproveitamento uniforme do calor."
      },
      {
        x: 50,
        y: 52,
        label: "Porta",
        title: "Controle de temperatura",
        text: "Fechamento frontal que ajuda a conservar o calor durante o preparo."
      },
      {
        x: 50,
        y: 82,
        label: "Construção",
        title: "Estrutura artesanal",
        text: "Produção cuidadosa para receber diferentes tipos de preparo e uso frequente."
      }
    ]
  }
};

const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const productStage = document.querySelector(".product-stage");
const productImage = document.querySelector("#product-image");
const productIndex = document.querySelector("#product-index");
const productEyebrow = document.querySelector("#product-eyebrow");
const productTitle = document.querySelector("#product-title");
const productDescription = document.querySelector("#product-description");
const productLink = document.querySelector("#product-link");
const productSpecs = document.querySelector("#product-specs");
const hotspotsContainer = document.querySelector("#hotspots");
const popover = document.querySelector("#detail-popover");
const popoverLabel = document.querySelector("#popover-label");
const popoverTitle = document.querySelector("#popover-title");
const popoverText = document.querySelector("#popover-text");
const lightbox = document.querySelector("#lightbox");

body.classList.add("is-loading");

Object.values(productData).forEach(({ image }) => {
  const preload = new Image();
  preload.src = image;
});

function finishPreloader() {
  window.setTimeout(() => {
    body.classList.add("is-ready");
    body.classList.remove("is-loading");

    window.setTimeout(() => {
      const preloader = document.querySelector(".preloader");
      if (preloader) preloader.hidden = true;
    }, 1200);
  }, 1150);
}

if (document.readyState === "complete") {
  finishPreloader();
} else {
  window.addEventListener("load", finishPreloader, { once: true });
}

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 40);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

menuToggle?.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
  body.classList.toggle("menu-open", willOpen);
});

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Abrir menu");
    body.classList.remove("menu-open");
  });
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min((index % 3) * 70, 140)}ms`;
  revealObserver.observe(element);
});

function closePopover() {
  popover?.classList.remove("is-open");
}

function showPopover(detail) {
  popoverLabel.textContent = detail.label;
  popoverTitle.textContent = detail.title;
  popoverText.textContent = detail.text;
  popover.classList.add("is-open");
}

function renderHotspots(hotspots) {
  hotspotsContainer.replaceChildren();

  hotspots.forEach((detail, index) => {
    const button = document.createElement("button");
    button.className = "hotspot";
    button.type = "button";
    button.style.left = `${detail.x}%`;
    button.style.top = `${detail.y}%`;
    button.style.animationDelay = `${index * 0.35}s`;
    button.setAttribute("aria-label", `Ver detalhe: ${detail.title}`);
    button.addEventListener("click", () => showPopover(detail));
    hotspotsContainer.append(button);
  });
}

function renderProductSpecs(specs) {
  const rows = productSpecs?.querySelectorAll("div");
  if (!rows) return;

  rows.forEach((row, index) => {
    const spec = specs[index];
    row.hidden = !spec;
    if (!spec) return;

    const [label, value] = spec;
    row.querySelector("dt").textContent = label;
    row.querySelector("dd").textContent = value;
  });
}

function selectProduct(key) {
  const product = productData[key];
  if (!product || productStage.classList.contains("is-changing")) return;

  document.querySelectorAll(".product-tab").forEach((tab) => {
    const active = tab.dataset.product === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  closePopover();
  productStage.classList.add("is-changing");

  window.setTimeout(() => {
    productImage.src = product.image;
    productImage.alt = product.alt;
    productImage.classList.toggle("is-contained", product.fit === "contain");
    productIndex.textContent = product.index;
    productEyebrow.textContent = product.eyebrow;
    productTitle.textContent = product.title;
    productDescription.textContent = product.description;
    productLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(product.message)}`;
    productLink.setAttribute("aria-label", `Solicitar orçamento para ${product.title}`);
    renderProductSpecs(product.specs);
    renderHotspots(product.hotspots);

    requestAnimationFrame(() => productStage.classList.remove("is-changing"));
  }, 320);
}

document.querySelectorAll(".product-tab").forEach((tab) => {
  tab.addEventListener("click", () => selectProduct(tab.dataset.product));

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    const tabs = [...document.querySelectorAll(".product-tab")];
    const current = tabs.indexOf(tab);
    const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
    const next = tabs[(current + direction + tabs.length) % tabs.length];
    next.focus();
    selectProduct(next.dataset.product);
  });
});

popover?.querySelector("button")?.addEventListener("click", closePopover);
renderHotspots(productData.churrasqueira.hotspots);

const filterButtons = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    galleryItems.forEach((item) => item.classList.add("is-filtering"));

    window.setTimeout(() => {
      galleryItems.forEach((item) => {
        item.hidden = filter !== "all" && item.dataset.category !== filter;
        item.classList.remove("is-filtering");
      });
    }, 230);
  });
});

function openLightbox(item) {
  const source = item.querySelector("img");
  const image = lightbox.querySelector("figure > img");
  const caption = lightbox.querySelector("figcaption strong");
  const action = lightbox.querySelector("figcaption a");
  const title = item.dataset.title || source.alt;

  image.src = source.src;
  image.alt = source.alt;
  caption.textContent = title;
  action.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Olá! Vi o projeto "${title}" no site e quero um modelo parecido.`
  )}`;

  if (typeof lightbox.showModal === "function") {
    lightbox.showModal();
  } else {
    lightbox.setAttribute("open", "");
  }
  body.classList.add("lightbox-open");
}

function closeLightbox() {
  if (lightbox.open) lightbox.close();
  body.classList.remove("lightbox-open");
}

galleryItems.forEach((item) => item.addEventListener("click", () => openLightbox(item)));
lightbox?.querySelector(".lightbox__close")?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox?.addEventListener("close", () => body.classList.remove("lightbox-open"));

function updateBusinessStatus() {
  const status = document.querySelector("[data-business-status]");
  if (!status) return;

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const weekday = values.weekday;
  const minutes = Number(values.hour) * 60 + Number(values.minute);
  const isWeekday = ["Mon", "Tue", "Wed", "Thu", "Fri"].includes(weekday);
  const isOpen = isWeekday && minutes >= 7 * 60 && minutes < 17 * 60;
  const title = status.querySelector("strong");
  const subtitle = status.querySelector("small");

  status.classList.toggle("is-open", isOpen);
  title.textContent = isOpen ? "Estamos atendendo agora" : "Atendimento fechado agora";
  subtitle.textContent = isOpen ? "Fale com a nossa equipe" : "Retornaremos no próximo horário útil";
}

updateBusinessStatus();
window.setInterval(updateBusinessStatus, 60000);

document.querySelector("[data-current-year]").textContent = new Date().getFullYear();

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const parallaxRoot = document.querySelector("[data-parallax-root]");

if (parallaxRoot && !prefersReducedMotion.matches && window.matchMedia("(pointer: fine)").matches) {
  const cards = parallaxRoot.querySelectorAll("[data-depth]");
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let frame;

  const animate = () => {
    currentX += (targetX - currentX) * 0.07;
    currentY += (targetY - currentY) * 0.07;

    cards.forEach((card) => {
      const depth = Number(card.dataset.depth);
      card.style.transform = `translate3d(${currentX * depth}px, ${currentY * depth}px, 0)`;
    });

    frame = requestAnimationFrame(animate);
  };

  parallaxRoot.addEventListener("pointermove", (event) => {
    const rect = parallaxRoot.getBoundingClientRect();
    targetX = ((event.clientX - rect.left) / rect.width - 0.5) * 4;
    targetY = ((event.clientY - rect.top) / rect.height - 0.5) * 4;
  });

  parallaxRoot.addEventListener("pointerleave", () => {
    targetX = 0;
    targetY = 0;
  });

  frame = requestAnimationFrame(animate);

  window.addEventListener(
    "beforeunload",
    () => {
      if (frame) cancelAnimationFrame(frame);
    },
    { once: true }
  );
}
