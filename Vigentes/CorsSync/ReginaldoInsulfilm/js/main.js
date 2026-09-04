const solutions = {
  automotivo: {
    title: "Película automotiva com conforto, proteção e visual alinhado ao seu carro.",
    text:
      "A aplicação automotiva da Reginaldo Insulfilm ajuda a reduzir o calor, melhora a privacidade e entrega um acabamento limpo para quem valoriza proteção solar sem abrir mão da estética.",
    bullets: [
      "Insulfilm para carro, para-brisa, laterais e vidro traseiro.",
      "Opções Window Blue, Window Premium e linhas de alta performance.",
      "Aplicação cuidadosa para resultado uniforme no uso diário."
    ],
    type: "video",
    src: "Assets/videos/qem54w.mp4"
  },
  residencial: {
    title: "Película residencial para reduzir calor e controlar a entrada de luz.",
    text:
      "Em casas, apartamentos e ambientes comerciais, a película certa melhora o conforto interno, aumenta a privacidade e ajuda a proteger melhor o espaço ao longo do dia.",
    bullets: [
      "Película térmica para redução de calor em ambientes envidraçados.",
      "Linhas espelhadas e decorativas para fachadas, salas e varandas.",
      "Aplicação técnica em janelas amplas, portas de vidro e divisórias."
    ],
    type: "image",
    src: "Assets/img/8hg1o.jpeg"
  },
  ppf: {
    title: "PPF para pintura, faróis, lanternas, multimídias e áreas sensíveis.",
    text:
      "A proteção PPF é ideal para quem quer preservar superfícies expostas ao uso, ao atrito e ao desgaste do dia a dia, mantendo o visual e o valor do veículo.",
    bullets: [
      "PPF para lanternas, faróis, painéis e multimídias.",
      "Proteção para detalhes e opção de cobertura mais ampla no veículo.",
      "Serviço pensado para manter aparência e integridade por mais tempo."
    ],
    type: "image",
    src: "Assets/img/mhjca.jpeg"
  },
  especial: {
    title: "Linhas especiais para tratores, máquinas agrícolas e plotagem de móveis.",
    text:
      "Além do segmento automotivo e residencial, a Reginaldo Insulfilm também atende demandas especiais com aplicação em veículos de trabalho, máquinas e superfícies internas.",
    bullets: [
      "Películas para tratores e máquinas agrícolas.",
      "Plotagem de móveis para renovar ambientes e superfícies.",
      "Atendimento versátil para projetos práticos e personalizados."
    ],
    type: "image",
    src: "Assets/img/xw952d.jpeg"
  }
};

const galleryItems = [
  { src: "Assets/img/01qrga.jpeg", title: "Aplicação com foco em conforto e privacidade", tag: "automotivo" },
  { src: "Assets/img/2sgsz.jpeg", title: "Detalhe de película automotiva", tag: "automotivo" },
  { src: "Assets/img/46cmdh.jpeg", title: "Projeto com acabamento alinhado", tag: "automotivo" },
  { src: "Assets/img/64h6n.jpeg", title: "Vidros tratados para rotina mais confortável", tag: "automotivo" },
  { src: "Assets/img/6ciok.jpeg", title: "Aplicação real registrada em serviço", tag: "automotivo" },
  { src: "Assets/img/8hg1o.jpeg", title: "Película residencial em grandes panos de vidro", tag: "residencial" },
  { src: "Assets/img/8qgbkg.jpeg", title: "Acabamento de película em ambiente envidraçado", tag: "residencial" },
  { src: "Assets/img/a6wir.jpeg", title: "Aplicação com atenção aos detalhes", tag: "automotivo" },
  { src: "Assets/img/epx0vg.jpeg", title: "Projeto técnico com visual limpo", tag: "ppf" },
  { src: "Assets/img/f0f4ph.jpeg", title: "Proteção e estética no dia a dia", tag: "automotivo" },
  { src: "Assets/img/g9cic9.jpeg", title: "Serviço executado na rotina da oficina", tag: "automotivo" },
  { src: "Assets/img/jy8n1i.jpeg", title: "Aplicação de película com resultado uniforme", tag: "automotivo" },
  { src: "Assets/img/logo reginaldo insulfilm.jpeg", title: "Marca Reginaldo Insulfilm", tag: "estrutura" },
  { src: "Assets/img/mhjca.jpeg", title: "Linha automotiva de alta performance", tag: "ppf" },
  { src: "Assets/img/ms3lb.jpeg", title: "Atendimento automotivo na loja", tag: "estrutura" },
  { src: "Assets/img/n1rbnj.jpeg", title: "Detalhes do acabamento após aplicação", tag: "automotivo" },
  { src: "Assets/img/oarp9.jpeg", title: "Película aplicada para mais proteção solar", tag: "automotivo" },
  { src: "Assets/img/q4elas.jpeg", title: "Resultado visual em projeto real", tag: "residencial" },
  { src: "Assets/img/ql24g.jpeg", title: "Aplicação residencial com controle de luz", tag: "residencial" },
  { src: "Assets/img/r0cs40z.jpeg", title: "Proteção para o uso diário do veículo", tag: "ppf" },
  { src: "Assets/img/r0v70ai.jpeg", title: "Mais conforto térmico em superfícies de vidro", tag: "residencial" },
  { src: "Assets/img/Reginaldo Insulfilm SEM FUNDO (1).png", title: "Identidade da Reginaldo Insulfilm", tag: "estrutura" },
  { src: "Assets/img/ulk1h.jpeg", title: "Película automotiva com visual discreto", tag: "automotivo" },
  { src: "Assets/img/woiimm.jpeg", title: "Aplicação real em serviço técnico", tag: "ppf" },
  { src: "Assets/img/xw952d.jpeg", title: "Fachada da loja em Anápolis", tag: "estrutura" },
  { src: "Assets/img/z6lac.jpeg", title: "Aplicação com foco em proteção e estética", tag: "automotivo" },
  { src: "Assets/img/zw2z3i.jpeg", title: "Projeto de película em andamento", tag: "automotivo" }
];

const solutionPanel = document.querySelector("#solutionPanel");
const solutionTabs = document.querySelectorAll(".solution-tab");
const galleryGrid = document.querySelector("#galleryGrid");
const galleryFilters = document.querySelectorAll(".gallery-filter");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxTag = document.querySelector("#lightboxTag");
const lightboxClose = document.querySelector("#lightboxClose");
const currentYear = document.querySelector("#currentYear");

document.body.classList.add("motion-ready");

function formatTag(tag) {
  const map = {
    automotivo: "Automotivo",
    residencial: "Residencial",
    ppf: "PPF",
    estrutura: "Estrutura"
  };

  return map[tag] || tag;
}

function renderSolution(key) {
  const solution = solutions[key];

  if (!solutionPanel || !solution) {
    return;
  }

  const mediaMarkup =
    solution.type === "video"
      ? `
        <div class="solution-media">
          <video autoplay muted loop playsinline preload="metadata">
            <source src="${solution.src}" type="video/mp4">
          </video>
        </div>
      `
      : `
        <div class="solution-media">
          <img src="${solution.src}" alt="${solution.title}">
        </div>
      `;

  solutionPanel.innerHTML = `
    <div class="solution-copy">
      <span class="mini-tag">${formatTag(key)}</span>
      <h3>${solution.title}</h3>
      <p>${solution.text}</p>
      <ul>
        ${solution.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
      </ul>
    </div>
    ${mediaMarkup}
  `;
}

function renderGallery(filter = "todos") {
  if (!galleryGrid) {
    return;
  }

  const filteredItems =
    filter === "todos" ? galleryItems : galleryItems.filter((item) => item.tag === filter);

  galleryGrid.innerHTML = filteredItems
    .map(
      (item) => `
        <article class="gallery-item">
          <button
            class="gallery-card-button"
            type="button"
            data-src="${item.src}"
            data-title="${item.title}"
            data-tag="${formatTag(item.tag)}"
          >
            <div class="gallery-media">
              <img src="${item.src}" alt="${item.title}" loading="lazy">
            </div>
            <div class="gallery-meta">
              <span class="gallery-badge">${formatTag(item.tag)}</span>
              <strong>${item.title}</strong>
              <div class="gallery-meta-footer">
                <span class="gallery-hint">Abrir imagem</span>
                <span class="gallery-arrow" aria-hidden="true">↗</span>
              </div>
            </div>
          </button>
        </article>
      `
    )
    .join("");
}

function openLightbox(src, title, tag) {
  if (!lightbox || !lightboxImage || !lightboxTitle || !lightboxTag) {
    return;
  }

  lightboxImage.src = src;
  lightboxImage.alt = title;
  lightboxTitle.textContent = title;
  lightboxTag.textContent = tag;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  if (!lightbox) {
    return;
  }

  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

solutionTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    solutionTabs.forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");
    renderSolution(tab.dataset.solution);
  });
});

galleryFilters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    galleryFilters.forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderGallery(filterButton.dataset.filter);
  });
});

galleryGrid?.addEventListener("click", (event) => {
  const trigger = event.target.closest(".gallery-card-button");

  if (!trigger) {
    return;
  }

  openLightbox(trigger.dataset.src, trigger.dataset.title, trigger.dataset.tag);
});

lightboxClose?.addEventListener("click", closeLightbox);

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeLightbox();
  }
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

renderSolution("automotivo");
renderGallery();

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}
