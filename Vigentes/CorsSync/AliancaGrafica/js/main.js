const WHATSAPP_PHONE = "5562984400615";

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
    control.addEventListener("click", (event) => {
      event.preventDefault();
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
  const triggers = Array.from(document.querySelectorAll("[data-tab-target]"));
  const panels = Array.from(document.querySelectorAll(".tab-panel"));

  if (!triggers.length || !panels.length) {
    return;
  }

  const clearTabs = () => {
    triggers.forEach((item) => {
      item.classList.remove("is-active");
      item.setAttribute("aria-selected", "false");
    });

    panels.forEach((panel) => {
      panel.classList.remove("is-active");
      panel.hidden = true;
    });
  };

  const activateTab = (targetId) => {
    triggers.forEach((item) => {
      const isSelected = item.getAttribute("data-tab-target") === targetId;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const targetId = trigger.getAttribute("data-tab-target");
      if (!targetId) {
        return;
      }

      const isAlreadyOpen = trigger.classList.contains("is-active");

      if (isAlreadyOpen) {
        clearTabs();
        return;
      }

      activateTab(targetId);
      trigger.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    });
  });

  clearTabs();
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

function setupQuoteForm() {
  const form = document.getElementById("quote-form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const business = String(data.get("business") || "").trim();
    const service = String(data.get("service") || "").trim();
    const deadline = String(data.get("deadline") || "").trim();
    const message = String(data.get("message") || "").trim();

    const lines = [
      "Ola! Vim pelo site da Alianca Grafica e quero um orcamento.",
      "",
      `Nome: ${name || "Nao informado"}`,
      `Empresa: ${business || "Nao informada"}`,
      `Necessidade: ${service || "Nao informada"}`,
      `Prazo: ${deadline || "Nao informado"}`,
      `Detalhes: ${message || "Nao informados"}`,
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

function setupHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) {
    return;
  }

  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

document.addEventListener("DOMContentLoaded", () => {
  updateWhatsAppLinks();
  setupScrollButtons();
  setupMobileMenu();
  setupTabs();
  setupFaq();
  setupQuoteForm();
  setupReveal();
  setupHeaderState();
});
