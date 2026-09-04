const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const navLinks = nav?.querySelectorAll("a");

const closeMenu = () => {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menu");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuButton?.addEventListener("click", () => {
  const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(willOpen));
  menuButton.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
  nav.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

navLinks?.forEach((link) => link.addEventListener("click", closeMenu));

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) closeMenu();
});

const updateHeader = () => {
  header?.classList.toggle("scrolled", window.scrollY > 24);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const revealItems = document.querySelectorAll("[data-reveal]");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.11, rootMargin: "0px 0px -36px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-tabs]").forEach((tabs) => {
  const buttons = [...tabs.querySelectorAll("[role='tab']")];
  const panels = [...tabs.querySelectorAll("[role='tabpanel']")];

  const activateTab = (button) => {
    const target = button.dataset.tab;

    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
      item.tabIndex = active ? 0 : -1;
    });

    panels.forEach((panel) => {
      const active = panel.dataset.panel === target;
      panel.hidden = !active;
      panel.classList.toggle("active", active);
    });
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activateTab(button));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % buttons.length;
      if (event.key === "ArrowLeft") nextIndex = (index - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = buttons.length - 1;
      activateTab(buttons[nextIndex]);
      buttons[nextIndex].focus();
    });
  });
});

document.querySelectorAll("[data-accordion] .accordion-item").forEach((item) => {
  const button = item.querySelector("button");
  const content = item.querySelector(".accordion-content");

  button?.addEventListener("click", () => {
    const accordion = item.closest("[data-accordion]");
    const opening = button.getAttribute("aria-expanded") !== "true";

    accordion?.querySelectorAll(".accordion-item").forEach((otherItem) => {
      const otherButton = otherItem.querySelector("button");
      const otherContent = otherItem.querySelector(".accordion-content");
      otherItem.classList.remove("open");
      otherButton?.setAttribute("aria-expanded", "false");
      if (otherContent) otherContent.hidden = true;
    });

    if (opening) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      if (content) content.hidden = false;
    }
  });
});

const currentYear = document.querySelector("[data-year]");
if (currentYear) currentYear.textContent = new Date().getFullYear();
