const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileLinks = document.querySelectorAll(".mobile-nav a");
const revealElements = document.querySelectorAll(".reveal");
const whatsappForm = document.querySelector("#whatsapp-form");
const footerYear = document.querySelector("#footer-year");
const teamCards = document.querySelectorAll("[data-gallery-image]");
const galleryModal = document.querySelector("#gallery-modal");
const galleryImage = document.querySelector("#gallery-image");
const galleryClose = document.querySelector(".gallery-close");

if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}

const setHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState);

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.classList.toggle("is-open", !isOpen);
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("is-open");
    });
  });
}

if (revealElements.length) {
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

  revealElements.forEach((element) => revealObserver.observe(element));
}

if (whatsappForm) {
  whatsappForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(whatsappForm);
    const nome = String(formData.get("nome") || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    if (!nome || !mensagem) {
      return;
    }

    const messageParts = [
      "Olá! Vim pelo site da Super Casa Imóveis.",
      "",
      `Nome: ${nome}`,
      telefone ? `Telefone: ${telefone}` : "",
      email ? `E-mail: ${email}` : "",
      `Mensagem: ${mensagem}`,
    ].filter(Boolean);

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=5566999231818&text=${encodeURIComponent(
      messageParts.join("\n")
    )}&type=phone_number&app_absent=0`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  });
}

const openGallery = (src, alt) => {
  if (!galleryModal || !galleryImage) return;
  galleryImage.src = src;
  galleryImage.alt = alt;
  galleryModal.classList.add("is-open");
  galleryModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

const closeGallery = () => {
  if (!galleryModal || !galleryImage) return;
  galleryModal.classList.remove("is-open");
  galleryModal.setAttribute("aria-hidden", "true");
  galleryImage.src = "";
  galleryImage.alt = "";
  document.body.style.overflow = "";
};

teamCards.forEach((card) => {
  card.addEventListener("click", () => {
    const src = card.getAttribute("data-gallery-image");
    const alt = card.getAttribute("data-gallery-alt") || "Imagem da equipe";
    if (src) openGallery(src, alt);
  });
});

if (galleryClose) {
  galleryClose.addEventListener("click", closeGallery);
}

if (galleryModal) {
  galleryModal.addEventListener("click", (event) => {
    if (event.target === galleryModal) {
      closeGallery();
    }
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeGallery();
  }
});
