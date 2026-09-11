const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const floatingWhatsapp = document.querySelector(".floating-whatsapp");

const services = {
  pneus: {
    label: "Pneus e peças",
    title: "Escolha, troca e suporte para rodar com segurança.",
    copy: "A Maquinor trabalha com pneus, peças e itens de reposição para resolver o que o veículo pede sem enrolação.",
    image: "Assets/img/WhatsApp Image 2026-06-17 at 15.38.50.jpeg",
    alt: "Estoque de pneus na Maquinor",
    checks: [
      "Pneus para diferentes rotinas de uso",
      "Peças e acessórios automotivos",
      "Orientação transparente antes da troca"
    ]
  },
  alinhamento: {
    label: "Alinhamento e balanceamento",
    title: "Ajuste preciso para reduzir desgaste e melhorar estabilidade.",
    copy: "O serviço ajuda a preservar os pneus, melhorar a direção e deixar o carro mais confortável no dia a dia.",
    image: "Assets/img/WhatsApp Image 2026-06-17 at 15.34.50 (2).jpeg",
    alt: "Boxes de alinhamento e balanceamento da Maquinor",
    checks: [
      "Correção de puxada e vibração",
      "Mais vida útil para os pneus",
      "Conferência em estrutura equipada"
    ]
  },
  oleo: {
    label: "Troca de óleo e filtros",
    title: "Manutenção preventiva para o motor trabalhar protegido.",
    copy: "A troca é feita com atenção ao tipo de óleo, filtros e condição geral do veículo.",
    image: "Assets/img/WhatsApp Image 2026-06-17 at 15.34.51.jpeg",
    alt: "Troca de óleo e filtros em veículo",
    checks: [
      "Óleo conforme a necessidade do veículo",
      "Filtros verificados no atendimento",
      "Serviço rápido para manter a revisão em dia"
    ]
  },
  freio: {
    label: "Freio",
    title: "Checagem para o carro responder bem quando mais importa.",
    copy: "A avaliação identifica desgaste, ruídos e sinais que podem comprometer a segurança.",
    image: "Assets/img/WhatsApp Image 2026-06-17 at 15.34.49 (3).jpeg",
    alt: "Diagnóstico automotivo no elevador",
    checks: [
      "Avaliação de componentes do sistema",
      "Orientação antes da substituição",
      "Execução focada em segurança"
    ]
  },
  suspensao: {
    label: "Suspensão",
    title: "Diagnóstico para eliminar folgas, ruídos e instabilidade.",
    copy: "A equipe verifica sinais de desgaste para resolver o problema de origem e evitar retorno.",
    image: "Assets/img/WhatsApp Image 2026-06-17 at 15.34.49 (2).jpeg",
    alt: "Profissional verificando suspensão sob o veículo",
    checks: [
      "Checagem sob o veículo",
      "Identificação de ruídos e folgas",
      "Reparo orientado pelo diagnóstico"
    ]
  }
};

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 20);
  floatingWhatsapp?.classList.toggle("is-visible", window.scrollY > Math.min(460, window.innerHeight * 0.62));
}

window.addEventListener("scroll", setHeaderState, { passive: true });
setHeaderState();

menuToggle?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    body.classList.remove("menu-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  }
});

const serviceImage = document.querySelector("[data-service-image]");
const serviceLabel = document.querySelector("[data-service-label]");
const serviceTitle = document.querySelector("[data-service-title]");
const serviceCopy = document.querySelector("[data-service-copy]");
const serviceList = document.querySelector("[data-service-list]");
const serviceTabs = document.querySelectorAll("[data-service]");

function renderService(key) {
  const service = services[key];

  if (!service) {
    return;
  }

  if (serviceImage) {
    serviceImage.src = service.image;
    serviceImage.alt = service.alt;
  }

  if (serviceLabel) {
    serviceLabel.textContent = service.label;
  }

  if (serviceTitle) {
    serviceTitle.textContent = service.title;
  }

  if (serviceCopy) {
    serviceCopy.textContent = service.copy;
  }

  if (serviceList) {
    serviceList.innerHTML = service.checks.map((item) => `<li>${item}</li>`).join("");
  }

  serviceTabs.forEach((tab) => {
    const isActive = tab.dataset.service === key;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => renderService(tab.dataset.service));
});

const galleryItems = Array.from(document.querySelectorAll("[data-gallery] .gallery-item"));
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxTitle = document.querySelector("[data-lightbox-title]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const closeLightboxButton = document.querySelector("[data-lightbox-close]");
const prevButton = document.querySelector("[data-lightbox-prev]");
const nextButton = document.querySelector("[data-lightbox-next]");
let activeGalleryIndex = 0;

function setLightboxContent(index) {
  const item = galleryItems[index];

  if (!item || !lightboxImage || !lightboxTitle || !lightboxCaption) {
    return;
  }

  activeGalleryIndex = index;
  lightboxImage.src = item.dataset.full;
  lightboxImage.alt = item.querySelector("img")?.alt || item.dataset.title || "Foto da Maquinor";
  lightboxTitle.textContent = item.dataset.title || "";
  lightboxCaption.textContent = item.dataset.caption || "";
}

function openLightbox(index) {
  setLightboxContent(index);
  lightbox?.classList.add("is-open");
  lightbox?.setAttribute("aria-hidden", "false");
  body.classList.add("lightbox-open");
  closeLightboxButton?.focus();
}

function closeLightbox() {
  lightbox?.classList.remove("is-open");
  lightbox?.setAttribute("aria-hidden", "true");
  body.classList.remove("lightbox-open");
}

function moveLightbox(direction) {
  const nextIndex = (activeGalleryIndex + direction + galleryItems.length) % galleryItems.length;
  setLightboxContent(nextIndex);
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

closeLightboxButton?.addEventListener("click", closeLightbox);
prevButton?.addEventListener("click", () => moveLightbox(-1));
nextButton?.addEventListener("click", () => moveLightbox(1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox?.classList.contains("is-open")) {
    return;
  }

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    moveLightbox(-1);
  }

  if (event.key === "ArrowRight") {
    moveLightbox(1);
  }
});
