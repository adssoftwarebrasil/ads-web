const body = document.body;
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a[href^='#']")];
const revealItems = document.querySelectorAll(".reveal");
const countItems = document.querySelectorAll("[data-count]");
const serviceCards = document.querySelectorAll("[data-service-card]");
const modal = document.querySelector(".image-modal");
const modalImage = document.querySelector(".image-modal__content");
const modalClose = document.querySelector(".image-modal__close");
const galleryCards = document.querySelectorAll("[data-modal-image]");
const progressBar = document.querySelector(".scroll-progress");
const sections = [...document.querySelectorAll("main section[id]")];
const tickerTrack = document.querySelector(".speed-strip__track");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    body.classList.toggle("menu-open", isOpen);
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      body.classList.remove("menu-open");
    });
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

const numberObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const element = entry.target;
    const target = Number(element.dataset.count);
    const suffix = element.dataset.suffix ?? (target === 100 ? "%" : "+");
    const duration = 1200;
    const startTime = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * target);
      element.textContent = `${current}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
    numberObserver.unobserve(element);
  });
}, { threshold: 0.35 });

countItems.forEach((item) => numberObserver.observe(item));

if (tickerTrack && !tickerTrack.dataset.duplicated) {
  tickerTrack.innerHTML += tickerTrack.innerHTML;
  tickerTrack.dataset.duplicated = "true";
}

serviceCards.forEach((card) => {
  const focusCard = () => {
    serviceCards.forEach((item) => item.classList.remove("is-focused"));
    card.classList.add("is-focused");
  };

  card.addEventListener("mouseenter", focusCard);
  card.addEventListener("focusin", focusCard);
  card.addEventListener("click", focusCard);
});

if (serviceCards[0]) {
  serviceCards[0].classList.add("is-focused");
}

if (modal && modalImage && modalClose) {
  galleryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const imageSrc = card.dataset.modalImage;
      const imageAlt = card.querySelector("img")?.alt ?? "Imagem da GR Motos";
      modalImage.src = imageSrc;
      modalImage.alt = imageAlt;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      body.style.overflow = "hidden";
    });
  });

  const closeModal = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    modalImage.src = "";
    modalImage.alt = "";
    body.style.overflow = "";
  };

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
}

const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

const updateActiveSection = () => {
  const offset = window.scrollY + 120;
  let activeId = "";

  sections.forEach((section) => {
    if (offset >= section.offsetTop) {
      activeId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${activeId}`);
  });
};

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveSection();
}, { passive: true });

updateProgress();
updateActiveSection();
