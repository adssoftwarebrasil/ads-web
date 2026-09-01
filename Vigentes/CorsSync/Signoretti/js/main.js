const WHATSAPP_PHONE = "556599602210";

function buildWhatsAppUrl(message) {
  const base = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}`;
  if (!message) {
    return `${base}&type=phone_number&app_absent=0`;
  }
  return `${base}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

function updateWhatsAppLinks() {
  const links = document.querySelectorAll("[data-wa-message]");

  links.forEach((link) => {
    const message = link.getAttribute("data-wa-message") || "";
    link.setAttribute("href", buildWhatsAppUrl(message));
  });
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  const header = document.querySelector("header");
  const headerOffset = header ? header.offsetHeight - 8 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

function setupScrollButtons() {
  const controls = document.querySelectorAll("[data-scroll-to]");

  controls.forEach((control) => {
    control.addEventListener("click", () => {
      const sectionId = control.getAttribute("data-scroll-to");
      if (!sectionId) {
        return;
      }

      closeMobileMenu();
      scrollToSection(sectionId);
    });
  });
}

const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

function closeMobileMenu() {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
}

function setupMobileMenu() {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

function setupContactForm() {
  const form = document.getElementById("whatsapp-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const area = String(data.get("area") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      "Ol\xe1! Vim pelo site da Signoretti & Barbosa e gostaria de atendimento jur\xeddico.",
      "",
      `Nome: ${name || "N\xe3o informado"}`,
      `Telefone: ${phone || "N\xe3o informado"}`,
      `\xc1rea de interesse: ${area || "N\xe3o informada"}`,
      `Mensagem: ${message || "N\xe3o informada"}`,
    ];

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateWhatsAppLinks();
  setupScrollButtons();
  setupMobileMenu();
  setupContactForm();
});
