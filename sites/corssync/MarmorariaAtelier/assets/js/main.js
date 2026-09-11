const body = document.body;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const mainNav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll("[data-reveal]");
const filterGroups = document.querySelectorAll("[data-filter-group]");
const yearTarget = document.querySelector("[data-current-year]");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

function syncHeaderState() {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

syncHeaderState();
window.addEventListener("scroll", syncHeaderState, { passive: true });

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -60px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

filterGroups.forEach((group) => {
  const buttons = group.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll(group.dataset.targets);

  if (!buttons.length || !items.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.dataset.filter;

      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      items.forEach((card) => {
        const categories = (card.dataset.category || "").split(" ");
        const shouldShow = value === "all" || categories.includes(value);
        card.classList.toggle("is-hidden", !shouldShow);
      });
    });
  });
});

const galleryButtons = document.querySelectorAll("[data-lightbox]");
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.innerHTML = `
  <div class="lightbox-dialog" role="dialog" aria-modal="true" aria-label="Visualizador de imagem">
    <button class="lightbox-close" type="button" aria-label="Fechar visualizador">×</button>
    <figure class="lightbox-figure">
      <img src="" alt="">
      <figcaption>
        <strong></strong>
        <span></span>
      </figcaption>
    </figure>
  </div>
`;

if (galleryButtons.length) {
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const lightboxTitle = lightbox.querySelector("strong");
  const lightboxText = lightbox.querySelector("span");
  const lightboxClose = lightbox.querySelector(".lightbox-close");

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    body.style.overflow = "";
  }

  function openLightbox(source) {
    lightboxImage.src = source.dataset.image || source.querySelector("img")?.src || "";
    lightboxImage.alt = source.dataset.alt || source.querySelector("img")?.alt || "";
    lightboxTitle.textContent = source.dataset.title || "";
    lightboxText.textContent = source.dataset.description || "";
    lightbox.classList.add("is-open");
    body.style.overflow = "hidden";
  }

  galleryButtons.forEach((button) => {
    button.addEventListener("click", () => openLightbox(button));
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}
