const galleryImages = [
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_102752049.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_103226117_HDR.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_103347878.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_103801065.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_110739458.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_114727546.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_114902397.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_115301082.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_115519736.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_115813123_HDR.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_120838392_HDR.jpg",
  "assets/img/ciafibra_img3_ciafibra_img2_IMG_20250828_155538027.jpg",
];

const products = [
  {
    name: "Uniformes em Geral",
    image: "assets/img/1.jpeg",
    description: "Conforto, qualidade e padronização para diferentes segmentos",
  },
  {
    name: "Camisa Social",
    image: "assets/img/ciafibra_img4_ciafibra_img_Camisa Social.webp",
    description: "Tradicional, manga curta ou longa, ideal para ambientes formais",
  },
  {
    name: "Camisa Polo",
    image: "assets/img/2.jpeg",
    description: "Versátil, com gola e botões, une elegância e praticidade",
  },
  {
    name: "Camisete Social Feminina",
    image: "assets/img/3.jpeg",
    description: "Modelagem adaptada, conforto e sofisticação feminina",
  },
  {
    name: "Jaleco",
    image: "assets/img/4.jpeg",
    description: "Proteção profissional em áreas técnicas e de saúde",
  },
  {
    name: "Calça Jeans",
    image: "assets/img/ciafibra_img4_ciafibra_img_Calça Jeans.webp",
    description: "Resistência e estilo para setores que exigem durabilidade",
  },
  {
    name: "Calça de Brim",
    image: "assets/img/ciafibra_img4_ciafibra_img_Calça de Brim.webp",
    description: "Clássica no vestuário profissional, resistente e confortável",
  },
  {
    name: "Calça ½ Elástico de Brim",
    image: "assets/img/ciafibra_img4_ciafibra_img_Calça elástico de Brim.webp",
    description: "Conforto extra na cintura para maior mobilidade",
  },
];

const faqItems = [
  {
    question: "Quais tipos de uniformes vocês produzem?",
    answer:
      "Produzimos uniformes em geral, camisas sociais, polos, camisetes femininas, jalecos, calças jeans e de brim, além de modelos personalizados conforme a necessidade da sua empresa.",
  },
  {
    question: "Posso personalizar os uniformes com a logo da minha empresa?",
    answer:
      "Sim! Oferecemos bordado e silk screen para aplicação da sua marca, garantindo identidade visual e profissionalismo.",
  },
  {
    question: "Qual é o pedido mínimo?",
    answer:
      "O pedido mínimo varia conforme o tipo de peça e a personalização desejada. Entre em contato para avaliarmos juntos a melhor solução para sua empresa.",
  },
  {
    question: "Vocês fazem uniformes sob medida?",
    answer:
      "Trabalhamos com tamanhos padronizados e também com ajustes específicos para atender ao perfil da sua equipe, garantindo conforto e caimento adequado.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo depende da quantidade de peças e do tipo de personalização escolhida. Normalmente, os prazos variam entre 20 a 40 dias após a aprovação do pedido.",
  },
  {
    question: "Quais tecidos são utilizados?",
    answer:
      "Utilizamos tecidos de alta qualidade como brim, oxford, poliéster, algodão e jeans, sempre priorizando resistência, conforto e durabilidade.",
  },
  {
    question: "Vocês atendem empresas de quais segmentos?",
    answer:
      "Atendemos diversos setores: corporativo, industrial, hospitalar, eventos, segurança, logística e muito mais.",
  },
  {
    question: "Há garantia nos uniformes?",
    answer:
      "Sim. Garantimos a qualidade de costura, tecido e personalização. Caso identifique algum defeito de fabricação, realizamos a troca conforme nossa política de garantia.",
  },
  {
    question: "Como faço um orçamento?",
    answer:
      "Basta entrar em contato informando a quantidade de peças, o tipo de uniforme e a personalização desejada. Nossa equipe retornará rapidamente com um orçamento detalhado.",
  },
];

const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const floatingWhatsapp = document.querySelector(".floating-whatsapp");
const footerYear = document.querySelector("#footer-year");
const galleryGrid = document.querySelector("#gallery-grid");
const productsGrid = document.querySelector("#products-grid");
const faqList = document.querySelector("#faq-list");
const revealElements = document.querySelectorAll(".reveal");
const galleryModal = document.querySelector("#gallery-modal");
const galleryImage = document.querySelector("#gallery-image");
const galleryCounter = document.querySelector("#gallery-counter");
const galleryClose = document.querySelector(".gallery-close");
const galleryPrev = document.querySelector(".gallery-prev");
const galleryNext = document.querySelector(".gallery-next");

let currentGalleryIndex = 0;

const chevronRightIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m9 18 6-6-6-6"></path>
  </svg>
`;

const chevronDownIcon = `
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m6 9 6 6 6-6"></path>
  </svg>
`;

const encodeWhatsappMessage = (message) => encodeURIComponent(message.trim());

const openWhatsapp = (message) => {
  const url = `https://wa.me/556136122686?text=${encodeWhatsappMessage(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 50);
};

const setFloatingButtonState = () => {
  if (!floatingWhatsapp) return;
  floatingWhatsapp.classList.toggle("is-visible", window.scrollY > 500);
};

const closeMobileMenu = () => {
  if (!menuToggle || !mobileNav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
};

const toggleMobileMenu = () => {
  if (!menuToggle || !mobileNav) return;
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileNav.classList.toggle("is-open", !isExpanded);
  document.body.classList.toggle("menu-open", !isExpanded);
};

const renderGallery = () => {
  if (!galleryGrid) return;

  galleryGrid.innerHTML = galleryImages
    .map(
      (image, index) => `
        <button class="gallery-card reveal" type="button" data-gallery-index="${index}" aria-label="Abrir imagem ${index + 1}">
          <img src="${image}" alt="Trabalho Kaly Agon ${index + 1}" loading="lazy">
          <span class="gallery-tag">Ver mais</span>
        </button>
      `
    )
    .join("");
};

const renderProducts = () => {
  if (!productsGrid) return;

  productsGrid.innerHTML = products
    .map(
      (product, index) => `
        <article class="product-card reveal">
          <a
            class="product-card-button"
            href="#"
            data-whatsapp="Olá! Vim pelo site da Kaly Agon e tenho interesse em ${product.name}. Gostaria de receber mais informações e um orçamento."
            aria-label="Solicitar detalhes sobre ${product.name}"
          >
            <div class="product-image-wrap">
              <img src="${product.image}" alt="${product.name}" loading="lazy">
              <span class="product-index">${String(index + 1).padStart(2, "0")}</span>
            </div>

            <div class="product-copy">
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <span class="product-link">
                <span>Ver detalhes</span>
                ${chevronRightIcon}
              </span>
            </div>
          </a>
        </article>
      `
    )
    .join("");
};

const renderFaq = () => {
  if (!faqList) return;

  faqList.innerHTML = faqItems
    .map(
      (item, index) => `
        <article class="faq-item ${index === 0 ? "is-open" : ""}">
          <button
            class="faq-trigger"
            type="button"
            aria-expanded="${index === 0 ? "true" : "false"}"
            aria-controls="faq-panel-${index}"
          >
            <span class="faq-question">
              <span class="faq-index">${String(index + 1).padStart(2, "0")}</span>
              <span>${item.question}</span>
            </span>
            <span class="faq-chevron">${chevronDownIcon}</span>
          </button>

          <div class="faq-panel" id="faq-panel-${index}">
            <div class="faq-panel-inner">
              <div class="faq-panel-content">
                <div class="faq-divider"></div>
                <p>${item.answer}</p>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const refreshRevealElements = () => {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length || !("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  elements.forEach((element) => revealObserver.observe(element));
};

const updateGallery = () => {
  if (!galleryImage || !galleryCounter) return;
  galleryImage.src = galleryImages[currentGalleryIndex];
  galleryImage.alt = `Trabalho Kaly Agon ${currentGalleryIndex + 1}`;
  galleryCounter.textContent = `${currentGalleryIndex + 1} / ${galleryImages.length}`;
};

const openGallery = (index) => {
  if (!galleryModal) return;
  currentGalleryIndex = index;
  updateGallery();
  galleryModal.classList.add("is-open");
  galleryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
};

const closeGallery = () => {
  if (!galleryModal) return;
  galleryModal.classList.remove("is-open");
  galleryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
};

const showPrevGalleryImage = () => {
  currentGalleryIndex = currentGalleryIndex === 0 ? galleryImages.length - 1 : currentGalleryIndex - 1;
  updateGallery();
};

const showNextGalleryImage = () => {
  currentGalleryIndex = currentGalleryIndex === galleryImages.length - 1 ? 0 : currentGalleryIndex + 1;
  updateGallery();
};

const setupFaq = () => {
  const faqTriggers = document.querySelectorAll(".faq-trigger");

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".faq-item");
      if (!item) return;

      const willOpen = !item.classList.contains("is-open");
      const allItems = document.querySelectorAll(".faq-item");

      allItems.forEach((faqItem) => {
        faqItem.classList.remove("is-open");
        const faqButton = faqItem.querySelector(".faq-trigger");
        if (faqButton) {
          faqButton.setAttribute("aria-expanded", "false");
        }
      });

      if (willOpen) {
        item.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });
  });
};

const setupGlobalClickActions = () => {
  document.addEventListener("click", (event) => {
    const whatsappTarget = event.target.closest("[data-whatsapp]");
    if (whatsappTarget) {
      event.preventDefault();
      const message = whatsappTarget.getAttribute("data-whatsapp");
      if (message) {
        openWhatsapp(message);
      }
      return;
    }

    const galleryTarget = event.target.closest("[data-gallery-index]");
    if (galleryTarget) {
      const index = Number(galleryTarget.getAttribute("data-gallery-index"));
      if (!Number.isNaN(index)) {
        openGallery(index);
      }
      return;
    }

    const navLink = event.target.closest(".mobile-nav a");
    if (navLink) {
      closeMobileMenu();
    }
  });
};

const setupModalEvents = () => {
  if (!galleryModal || !galleryClose || !galleryPrev || !galleryNext) return;

  galleryClose.addEventListener("click", closeGallery);
  galleryPrev.addEventListener("click", showPrevGalleryImage);
  galleryNext.addEventListener("click", showNextGalleryImage);

  galleryModal.addEventListener("click", (event) => {
    if (event.target === galleryModal) {
      closeGallery();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!galleryModal.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeGallery();
    }

    if (event.key === "ArrowLeft") {
      showPrevGalleryImage();
    }

    if (event.key === "ArrowRight") {
      showNextGalleryImage();
    }
  });
};

if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}

renderGallery();
renderProducts();
renderFaq();
refreshRevealElements();
setupFaq();
setupGlobalClickActions();
setupModalEvents();

setHeaderState();
setFloatingButtonState();

window.addEventListener("scroll", setHeaderState);
window.addEventListener("scroll", setFloatingButtonState);

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
