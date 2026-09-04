const body = document.body;
const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const dialog = document.querySelector("[data-order-dialog]");
const dialogPanel = dialog?.querySelector(".order-dialog__panel");
const orderOpeners = document.querySelectorAll("[data-order-open]");
const orderClosers = document.querySelectorAll("[data-order-close]");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("main section[id]");
let lastFocusedElement = null;

document.querySelector("[data-year]").textContent = new Date().getFullYear();

const setHeaderState = () => {
  header?.classList.toggle("is-fixed", window.scrollY > 34);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

const closeMenu = () => {
  if (!menuToggle || !nav) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  nav.classList.remove("is-open");
  body.classList.remove("menu-open");
};

menuToggle?.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
  nav?.classList.toggle("is-open", willOpen);
  body.classList.toggle("menu-open", willOpen);
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

const openOrderDialog = (event) => {
  if (!dialog) return;
  lastFocusedElement = event?.currentTarget || document.activeElement;
  dialog.classList.add("is-open");
  dialog.setAttribute("aria-hidden", "false");
  body.classList.add("dialog-open");
  window.setTimeout(() => dialog.querySelector("a")?.focus(), 50);
};

const closeOrderDialog = () => {
  if (!dialog) return;
  dialog.classList.remove("is-open");
  dialog.setAttribute("aria-hidden", "true");
  body.classList.remove("dialog-open");
  lastFocusedElement?.focus?.();
};

orderOpeners.forEach((opener) => opener.addEventListener("click", openOrderDialog));
orderClosers.forEach((closer) => closer.addEventListener("click", closeOrderDialog));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
    closeOrderDialog();
  }

  if (event.key !== "Tab" || !dialog?.classList.contains("is-open")) return;

  const focusable = dialogPanel.querySelectorAll(
    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
  );
  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -35px" },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min((index % 3) * 70, 140)}ms`;
  revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.hash === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-40% 0px -52%", threshold: 0 },
);

sections.forEach((section) => sectionObserver.observe(section));

window.addEventListener("resize", () => {
  if (window.innerWidth > 920) closeMenu();
});
