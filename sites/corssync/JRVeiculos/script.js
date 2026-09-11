const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");
const tabs = document.querySelectorAll(".service-tab");
const panels = document.querySelectorAll(".service-panel");
const showroomThumbs = Array.from(document.querySelectorAll(".showroom-thumb"));
const showroomMainImage = document.querySelector(".showroom-main-image");
const showroomCurrentLabel = document.querySelector(".showroom-current-label");
const showroomCounter = document.querySelector(".showroom-counter");
const showroomPrev = document.querySelector('[data-showroom-nav="prev"]');
const showroomNext = document.querySelector('[data-showroom-nav="next"]');
const revealTargets = document.querySelectorAll(
  ".hero-copy, .hero-visual, .showroom, .services, .story, .locadora, .mission, .contact, .footer"
);

revealTargets.forEach((element) => element.setAttribute("data-reveal", ""));

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open");
  });
}

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (!menu || !menuToggle) return;
    menu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const service = tab.dataset.service;

    tabs.forEach((item) => item.classList.toggle("is-active", item === tab));
    panels.forEach((panel) => panel.classList.toggle("is-active", panel.dataset.panel === service));
  });
});

if (showroomThumbs.length && showroomMainImage && showroomCurrentLabel && showroomCounter) {
  let currentShowroomIndex = showroomThumbs.findIndex((thumb) => thumb.classList.contains("is-active"));

  if (currentShowroomIndex < 0) currentShowroomIndex = 0;

  const activateShowroomImage = (index) => {
    currentShowroomIndex = (index + showroomThumbs.length) % showroomThumbs.length;
    const activeThumb = showroomThumbs[currentShowroomIndex];

    showroomThumbs.forEach((thumb, thumbIndex) => {
      const isActive = thumbIndex === currentShowroomIndex;
      thumb.classList.toggle("is-active", isActive);
      thumb.setAttribute("aria-pressed", String(isActive));
    });

    showroomMainImage.src = activeThumb.dataset.full;
    showroomMainImage.alt = activeThumb.querySelector("img")?.alt || "Veículo disponível na JR Veículos";
    showroomCurrentLabel.textContent = activeThumb.dataset.name || `Foto ${currentShowroomIndex + 1} da vitrine`;
    showroomCounter.textContent = `${currentShowroomIndex + 1} / ${showroomThumbs.length}`;
    activeThumb.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  showroomThumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => activateShowroomImage(index));
  });

  showroomPrev?.addEventListener("click", () => activateShowroomImage(currentShowroomIndex - 1));
  showroomNext?.addEventListener("click", () => activateShowroomImage(currentShowroomIndex + 1));

  activateShowroomImage(currentShowroomIndex);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

revealTargets.forEach((target) => observer.observe(target));
