"use strict";

const WHATSAPP_NUMBER = "5531988378837";

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-nav]");
const toast = document.querySelector("[data-toast]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 28);
}

function closeMenu() {
  if (!menuToggle || !navigation) return;
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  navigation.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  navigation?.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMenu();
});
updateHeader();

const revealElements = [...document.querySelectorAll(".reveal")];
revealElements.forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 5, 3) * 55}ms`;
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8%", threshold: 0.08 },
  );
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const fleetTabs = [...document.querySelectorAll("[data-fleet-tab]")];
const fleetPanels = [...document.querySelectorAll("[data-fleet-panel]")];

function activateFleet(key, shouldFocus = false) {
  fleetTabs.forEach((tab) => {
    const active = tab.dataset.fleetTab === key;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    if (active && shouldFocus) tab.focus();
  });

  fleetPanels.forEach((panel) => {
    const active = panel.dataset.fleetPanel === key;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });
}

fleetTabs.forEach((tab, index) => {
  tab.addEventListener("click", () => activateFleet(tab.dataset.fleetTab));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % fleetTabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + fleetTabs.length) % fleetTabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = fleetTabs.length - 1;
    activateFleet(fleetTabs[nextIndex].dataset.fleetTab, true);
  });
});

const galleryItems = [...document.querySelectorAll(".gallery-item")];
const galleryFilters = [...document.querySelectorAll("[data-gallery-filter]")];

galleryFilters.forEach((filterButton) => {
  filterButton.setAttribute("aria-pressed", String(filterButton.classList.contains("is-active")));
  filterButton.addEventListener("click", () => {
    const filter = filterButton.dataset.galleryFilter;
    galleryFilters.forEach((button) => {
      const active = button === filterButton;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    galleryItems.forEach((item) => {
      const visible = filter === "all" || item.dataset.category === filter;
      item.hidden = !visible;
    });
  });
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrevious = document.querySelector("[data-lightbox-prev]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
let currentGalleryIndex = 0;

function visibleGalleryItems() {
  return galleryItems.filter((item) => !item.hidden);
}

function renderLightbox(index) {
  const items = visibleGalleryItems();
  if (!items.length || !lightboxImage || !lightboxCaption) return;
  currentGalleryIndex = (index + items.length) % items.length;
  const current = items[currentGalleryIndex];
  lightboxImage.src = current.dataset.image;
  lightboxImage.alt = current.dataset.alt || "Foto da Manotur";
  lightboxCaption.textContent = current.querySelector("span")?.childNodes[0]?.textContent?.trim() || current.dataset.alt;
}

function openLightbox(item) {
  if (!lightbox) return;
  const items = visibleGalleryItems();
  renderLightbox(items.indexOf(item));
  document.body.classList.add("lightbox-open");
  if (typeof lightbox.showModal === "function") lightbox.showModal();
  else lightbox.setAttribute("open", "");
}

function closeLightbox() {
  if (!lightbox) return;
  document.body.classList.remove("lightbox-open");
  if (typeof lightbox.close === "function") lightbox.close();
  else lightbox.removeAttribute("open");
}

galleryItems.forEach((item) => item.addEventListener("click", () => openLightbox(item)));
lightboxClose?.addEventListener("click", closeLightbox);
lightboxPrevious?.addEventListener("click", () => renderLightbox(currentGalleryIndex - 1));
lightboxNext?.addEventListener("click", () => renderLightbox(currentGalleryIndex + 1));
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
lightbox?.addEventListener("close", () => document.body.classList.remove("lightbox-open"));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation?.classList.contains("is-open")) closeMenu();
  if (!lightbox?.open) return;
  if (event.key === "ArrowLeft") renderLightbox(currentGalleryIndex - 1);
  if (event.key === "ArrowRight") renderLightbox(currentGalleryIndex + 1);
});

const quoteForm = document.querySelector("[data-quote-form]");
const serviceSelect = quoteForm?.elements.namedItem("servico");
const destinationInput = quoteForm?.elements.namedItem("destino");
const phoneInput = quoteForm?.elements.namedItem("telefone");
const dateInput = quoteForm?.elements.namedItem("data");

const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60_000).toISOString().split("T")[0];
if (dateInput instanceof HTMLInputElement) dateInput.min = localToday;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

document.querySelectorAll("[data-service-link]").forEach((link) => {
  link.addEventListener("click", () => {
    if (serviceSelect instanceof HTMLSelectElement) {
      serviceSelect.value = link.dataset.serviceLink || "";
      serviceSelect.closest(".field")?.classList.remove("is-invalid");
    }
  });
});

document.querySelectorAll("[data-destination]").forEach((button) => {
  button.addEventListener("click", () => {
    if (destinationInput instanceof HTMLInputElement) {
      destinationInput.value = button.dataset.destination || "";
      destinationInput.closest(".field")?.classList.remove("is-invalid");
      document.querySelector("#orcamento")?.scrollIntoView({ behavior: "smooth" });
      window.setTimeout(() => destinationInput.focus({ preventScroll: true }), 650);
      showToast(`${button.dataset.destination} adicionado à sua rota.`);
    }
  });
});

function formatBrazilianPhone(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

phoneInput?.addEventListener("input", () => {
  phoneInput.value = formatBrazilianPhone(phoneInput.value);
});

quoteForm?.querySelectorAll("input, select, textarea").forEach((control) => {
  control.addEventListener("input", () => control.closest(".field")?.classList.remove("is-invalid"));
  control.addEventListener("change", () => control.closest(".field")?.classList.remove("is-invalid"));
});

function validateQuoteForm(formData) {
  const rules = {
    nome: String(formData.get("nome") || "").trim().length >= 2,
    telefone: String(formData.get("telefone") || "").replace(/\D/g, "").length >= 10,
    servico: Boolean(formData.get("servico")),
    origem: String(formData.get("origem") || "").trim().length >= 2,
    destino: String(formData.get("destino") || "").trim().length >= 2,
  };

  Object.entries(rules).forEach(([name, valid]) => {
    quoteForm?.elements.namedItem(name)?.closest(".field")?.classList.toggle("is-invalid", !valid);
  });

  return Object.values(rules).every(Boolean);
}

quoteForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(quoteForm);
  if (!validateQuoteForm(formData)) {
    quoteForm.querySelector(".is-invalid input, .is-invalid select")?.focus();
    showToast("Confira os campos destacados.");
    return;
  }

  const rawDate = String(formData.get("data") || "");
  const formattedDate = rawDate ? rawDate.split("-").reverse().join("/") : "A definir";
  const passengers = String(formData.get("passageiros") || "").trim() || "A definir";
  const details = String(formData.get("detalhes") || "").trim() || "Sem observações adicionais";
  const message = [
    "Olá, Manotur! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${formData.get("nome")}`,
    `Telefone: ${formData.get("telefone")}`,
    `Serviço: ${formData.get("servico")}`,
    `Origem: ${formData.get("origem")}`,
    `Destino: ${formData.get("destino")}`,
    `Data: ${formattedDate}`,
    `Passageiros: ${passengers}`,
    `Detalhes: ${details}`,
  ].join("\n");

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  showToast("Sua solicitação foi preparada no WhatsApp.");
});

const faqItems = [...document.querySelectorAll(".faq-list details")];
faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (!item.open) return;
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) otherItem.open = false;
    });
  });
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
