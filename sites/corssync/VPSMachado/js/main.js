const WHATSAPP_PHONE = "5544991755988";

function buildWhatsAppUrl(message) {
  const base = `https://api.whatsapp.com/send/?phone=${WHATSAPP_PHONE}`;
  if (!message) {
    return `${base}&type=phone_number&app_absent=0`;
  }

  return `${base}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
}

function updateWhatsAppLinks() {
  document.querySelectorAll("[data-wa-message]").forEach((link) => {
    const message = link.getAttribute("data-wa-message") || "";
    link.setAttribute("href", buildWhatsAppUrl(message));
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

function setupTabs() {
  const tabs = Array.from(document.querySelectorAll("[data-tab-target]"));
  const panels = Array.from(document.querySelectorAll(".mix-panel"));

  if (!tabs.length || !panels.length) {
    return;
  }

  function activateTab(activeTab) {
    const targetId = activeTab.getAttribute("data-tab-target");
    if (!targetId) {
      return;
    }

    tabs.forEach((item) => {
      const isSelected = item === activeTab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      activateTab(tab);
    });
  });

  activateTab(tabs.find((tab) => tab.classList.contains("is-active")) || tabs[0]);
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
    const company = String(data.get("company") || "").trim();
    const city = String(data.get("city") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      "Ola! Quero atendimento comercial da VPS Machado.",
      "",
      `Empresa: ${company || "Nao informada"}`,
      `Cidade: ${city || "Nao informada"}`,
      `Telefone: ${phone || "Nao informado"}`,
      `Linha de interesse: ${subject || "Nao informada"}`,
      `Mensagem: ${message || "Nao informada"}`,
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
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  items.forEach((item) => observer.observe(item));
}

document.addEventListener("DOMContentLoaded", () => {
  updateWhatsAppLinks();
  setupScrollButtons();
  setupMobileMenu();
  setupTabs();
  setupFaq();
  setupContactForm();
  setupReveal();
});
