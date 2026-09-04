const WHATSAPP_PHONE = "5566996194229";

function buildWhatsAppUrl(message, phone = WHATSAPP_PHONE) {
  const base = `https://api.whatsapp.com/send/?phone=${phone}`;
  if (!message) {
    return `${base}&type=phone_number&app_absent=0`;
  }

  return `${base}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

function updateWhatsAppLinks() {
  document.querySelectorAll("[data-wa-message]").forEach((link) => {
    const message = link.getAttribute("data-wa-message") || "";
    const phone = link.getAttribute("data-wa-phone") || WHATSAPP_PHONE;
    link.setAttribute("href", buildWhatsAppUrl(message, phone));
  });
}

function closeMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (!target) {
    return;
  }

  const header = document.querySelector(".site-header");
  const headerOffset = header ? header.offsetHeight - 8 : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

function setupScrollButtons() {
  document.querySelectorAll("[data-scroll-to]").forEach((control) => {
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

function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.hidden = isOpen;
    document.body.classList.toggle("menu-open", !isOpen);
  });
}

function setupFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.nextElementSibling;
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      document.querySelectorAll(".faq-question").forEach((otherButton) => {
        otherButton.setAttribute("aria-expanded", "false");
      });

      document.querySelectorAll(".faq-answer").forEach((otherAnswer) => {
        otherAnswer.hidden = true;
      });

      button.setAttribute("aria-expanded", String(!isExpanded));
      if (answer) {
        answer.hidden = isExpanded;
      }
    });
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
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      "Olá! Vim pelo site da Torre Engenharia e quero atendimento.",
      "",
      `Nome: ${name || "Não informado"}`,
      `Telefone: ${phone || "Não informado"}`,
      `Assunto: ${subject || "Não informado"}`,
      `Mensagem: ${message || "Não informada"}`,
    ];

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
  });
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
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
    {
      threshold: 0.18,
    }
  );

  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  updateWhatsAppLinks();
  setupScrollButtons();
  setupMobileMenu();
  setupFaq();
  setupContactForm();
  setupReveal();
});
