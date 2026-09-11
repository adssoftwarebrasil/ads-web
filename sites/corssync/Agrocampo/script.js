const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const tabs = [...document.querySelectorAll(".nutrition-tab")];
const panels = [...document.querySelectorAll(".nutrition-panel")];
const nutritionImages = [...document.querySelectorAll(".nutrition-image")];
const nutritionSection = document.querySelector(".nutrition");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function updateHeader() {
  header?.classList.toggle("is-sticky", window.scrollY > 56);
}

function closeMenu() {
  if (!menuToggle || !mobileMenu) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  if (!menuToggle || !mobileMenu) return;
  const shouldOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));
  menuToggle.setAttribute("aria-label", shouldOpen ? "Fechar menu" : "Abrir menu");
  mobileMenu.classList.toggle("open", shouldOpen);
  document.body.classList.toggle("menu-open", shouldOpen);
}

menuToggle?.addEventListener("click", toggleMenu);
mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMenu();
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

let activeTabIndex = 0;
let rotationTimer;

function activateNutritionTab(tabName, focusTab = false) {
  const nextIndex = tabs.findIndex((tab) => tab.dataset.tab === tabName);
  if (nextIndex === -1) return;

  activeTabIndex = nextIndex;

  tabs.forEach((tab, index) => {
    const isActive = index === activeTabIndex;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.setAttribute("tabindex", isActive ? "0" : "-1");
  });

  panels.forEach((panel) => {
    const isActive = panel.id === `panel-${tabName}`;
    panel.classList.toggle("active", isActive);
    panel.hidden = !isActive;
  });

  nutritionImages.forEach((image) => {
    const isActive = image.dataset.image === tabName;
    image.classList.toggle("active", isActive);
    image.setAttribute("aria-hidden", String(!isActive));
  });

  if (focusTab) tabs[activeTabIndex].focus();
}

function startTabRotation() {
  if (prefersReducedMotion.matches || tabs.length < 2) return;
  window.clearInterval(rotationTimer);
  rotationTimer = window.setInterval(() => {
    const nextIndex = (activeTabIndex + 1) % tabs.length;
    activateNutritionTab(tabs[nextIndex].dataset.tab);
  }, 5200);
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activateNutritionTab(tab.dataset.tab);
    startTabRotation();
  });

  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();

    if (event.key === "Home") activeTabIndex = 0;
    if (event.key === "End") activeTabIndex = tabs.length - 1;
    if (event.key === "ArrowRight") activeTabIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") activeTabIndex = (index - 1 + tabs.length) % tabs.length;

    activateNutritionTab(tabs[activeTabIndex].dataset.tab, true);
    startTabRotation();
  });
});

nutritionSection?.addEventListener("mouseenter", () => window.clearInterval(rotationTimer));
nutritionSection?.addEventListener("mouseleave", startTabRotation);
nutritionSection?.addEventListener("focusin", () => window.clearInterval(rotationTimer));
nutritionSection?.addEventListener("focusout", startTabRotation);
startTabRotation();

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && !prefersReducedMotion.matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -24px" }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

document.getElementById("year").textContent = String(new Date().getFullYear());
