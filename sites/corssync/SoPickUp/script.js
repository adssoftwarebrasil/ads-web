const tabButtons = [...document.querySelectorAll(".tab-button")];
const tabPanels = [...document.querySelectorAll(".tab-panel")];

const activateTab = (targetId) => {
  tabButtons.forEach((item) => {
    const isMatch = item.dataset.tab === targetId;
    item.classList.toggle("is-active", isMatch);
    item.setAttribute("aria-selected", String(isMatch));
  });

  tabPanels.forEach((panel) => {
    const isMatch = panel.id === targetId;
    panel.classList.toggle("is-active", isMatch);
    panel.hidden = !isMatch;
  });
};

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });
});

activateTab(tabButtons.find((button) => button.classList.contains("is-active"))?.dataset.tab || tabButtons[0]?.dataset.tab);

const whatsappLinks = [...document.querySelectorAll("[data-whatsapp-message]")];

whatsappLinks.forEach((link) => {
  const message = link.dataset.whatsappMessage;

  if (!message) {
    return;
  }

  const url = new URL(link.href);
  url.searchParams.set("text", message);
  link.href = url.toString();
});

const galleryItems = [
  {
    src: "assets/img/1.jpeg",
    title: "Troca de óleo, filtros e revisão de freios",
    text: "Atendimento para caminhonetes que precisam manter a rotina em dia com revisão preventiva."
  },
  {
    src: "assets/img/3.jpeg",
    title: "Serviço técnico com foco em pickup",
    text: "Oficina voltada a caminhonetes de diferentes marcas, com atenção ao uso real do veículo."
  },
  {
    src: "assets/img/4.jpeg",
    title: "Rotina de manutenção com acompanhamento",
    text: "Checagem, reparo e cuidado de oficina para quem quer rodar com mais segurança."
  },
  {
    src: "assets/img/5.jpeg",
    title: "Atendimento em elevador e bancada",
    text: "Estrutura de oficina para revisões mecânicas e reparos em caminhonetes."
  },
  {
    src: "assets/img/6.jpeg",
    title: "Revisão preventiva e corretiva",
    text: "Serviços em mecânica em geral e preventiva para clientes de Barreiras e região."
  },
  {
    src: "assets/img/7.jpeg",
    title: "Diagnóstico atento em oficina especializada",
    text: "Acompanhamento visual e técnico para manter a caminhonete pronta para o dia a dia."
  },
  {
    src: "assets/img/8.jpeg",
    title: "Cuidado com componentes importantes",
    text: "Manutenção em peças e sistemas que impactam conforto, estabilidade e confiança."
  },
  {
    src: "assets/img/9.jpeg",
    title: "Pickup atendida por quem conhece o segmento",
    text: "Especialidade construída ao longo de mais de 25 anos de oficina ativa."
  },
  {
    src: "assets/img/10.jpeg",
    title: "Revisão completa e atenção aos detalhes",
    text: "Troca de óleo, filtros e freios entre os serviços mais procurados da oficina."
  },
  {
    src: "assets/img/11.jpeg",
    title: "Suspensão dianteira completa e freios",
    text: "Serviço indicado para melhorar estabilidade, resposta e segurança da caminhonete."
  },
  {
    src: "assets/img/12.jpeg",
    title: "Instalação e serviço técnico em motor",
    text: "Atendimento em componentes de desempenho e intervenções específicas conforme a necessidade."
  },
  {
    src: "assets/img/13.jpeg",
    title: "Reparos em diferencial traseiro",
    text: "Cuidado importante para quem depende da caminhonete em estrada, trabalho e deslocamento diário."
  },
  {
    src: "assets/img/14.jpeg",
    title: "Serviço interno de motor e componentes",
    text: "Trabalho técnico em sistemas que exigem conhecimento e atenção de oficina especializada."
  },
  {
    src: "assets/img/15.jpeg",
    title: "Motor em manutenção detalhada",
    text: "Acompanhamento mecânico para preservar desempenho e reduzir riscos de falhas maiores."
  },
  {
    src: "assets/img/16.jpeg",
    title: "Direção elétrica, suspensão e atendimento de pickup",
    text: "Soluções para caminhonetes que exigem segurança, firmeza e resistência no uso contínuo."
  }
];

const galleryImage = document.querySelector("#gallery-image");
const galleryTitle = document.querySelector("#gallery-title");
const galleryText = document.querySelector("#gallery-text");
const galleryStrip = document.querySelector("#gallery-strip");
const prevButton = document.querySelector(".gallery-control.prev");
const nextButton = document.querySelector(".gallery-control.next");

let currentIndex = 0;

const renderGallery = () => {
  galleryStrip.innerHTML = "";

  galleryItems.forEach((item, index) => {
    const thumbButton = document.createElement("button");
    thumbButton.type = "button";
    thumbButton.className = index === currentIndex ? "is-active" : "";
    thumbButton.setAttribute("aria-label", `Abrir imagem ${index + 1}`);

    const image = document.createElement("img");
    image.src = item.src;
    image.alt = item.title;

    thumbButton.appendChild(image);
    thumbButton.addEventListener("click", () => updateGallery(index));
    galleryStrip.appendChild(thumbButton);
  });
};

const centerThumbnail = (behavior = "smooth") => {
  const activeButton = galleryStrip.children[currentIndex];

  if (!activeButton) {
    return;
  }

  const targetLeft =
    activeButton.offsetLeft - galleryStrip.clientWidth / 2 + activeButton.clientWidth / 2;

  galleryStrip.scrollTo({
    left: Math.max(0, targetLeft),
    behavior
  });
};

const updateGallery = (index, options = {}) => {
  const { scrollThumb = true, behavior = "smooth" } = options;
  currentIndex = (index + galleryItems.length) % galleryItems.length;
  const currentItem = galleryItems[currentIndex];

  galleryImage.src = currentItem.src;
  galleryImage.alt = currentItem.title;
  galleryTitle.textContent = currentItem.title;
  galleryText.textContent = currentItem.text;

  [...galleryStrip.children].forEach((button, childIndex) => {
    button.classList.toggle("is-active", childIndex === currentIndex);
  });

  if (scrollThumb) {
    centerThumbnail(behavior);
  }
};

prevButton.addEventListener("click", () => updateGallery(currentIndex - 1));
nextButton.addEventListener("click", () => updateGallery(currentIndex + 1));

renderGallery();
updateGallery(0, { scrollThumb: false, behavior: "auto" });

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document
  .querySelectorAll(".arrival, .specialties, .history-rack, .workshop-grid, .media-dock, .gallery-section, .contact-bay")
  .forEach((section) => revealObserver.observe(section));
