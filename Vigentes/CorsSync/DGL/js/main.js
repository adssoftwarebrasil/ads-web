const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const tabButtons = document.querySelectorAll("[data-tab-target]");
const faqButtons = document.querySelectorAll(".faq-question");
const revealItems = document.querySelectorAll(".reveal");
const whatsappForm = document.getElementById("whatsapp-form");
const serviceStatus = document.getElementById("service-status");
const defaultTabButton = document.querySelector(".tab-button.is-active");

const toggleMenu = () => {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.classList.toggle("is-active", !isExpanded);
  mobileMenu.hidden = isExpanded;
};

const closeMenu = () => {
  if (!menuToggle || !mobileMenu) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.classList.remove("is-active");
  mobileMenu.hidden = true;
};

const activateTab = (targetId) => {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tabTarget === targetId;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll(".tab-panel").forEach((panel) => {
    const isActive = panel.id === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
};

const toggleFaq = (button) => {
  const answer = button.nextElementSibling;
  const isExpanded = button.getAttribute("aria-expanded") === "true";

  button.setAttribute("aria-expanded", String(!isExpanded));

  if (answer) {
    answer.hidden = isExpanded;
  }
};

const updateServiceStatus = () => {
  if (!serviceStatus) {
    return;
  }

  const now = new Date();
  const day = now.getDay();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;
  const morningStart = 7 * 60 + 30;
  const morningEnd = 12 * 60;
  const afternoonStart = 14 * 60;
  const afternoonEnd = 18 * 60;
  const isWeekday = day >= 1 && day <= 5;
  const isOpen =
    isWeekday &&
    ((currentTime >= morningStart && currentTime < morningEnd) ||
      (currentTime >= afternoonStart && currentTime < afternoonEnd));

  serviceStatus.textContent = isOpen
    ? "Aberto agora para atendimento e orçamentos"
    : "Fora do expediente, mas a equipe recebe sua mensagem";
};

const buildWhatsappMessage = (formData) => {
  const name = formData.get("name")?.trim() || "Cliente";
  const city = formData.get("city")?.trim() || "Não informada";
  const subject = formData.get("subject") || "Quero falar com a equipe";
  const message = formData.get("message")?.trim() || "Sem observações adicionais.";

  return [
    "Olá! Vim pelo site da DGL e gostaria de atendimento.",
    "",
    `Nome: ${name}`,
    `Cidade: ${city}`,
    `Gás de interesse: ${subject}`,
    `Mensagem: ${message}`
  ].join("\n");
};

const revealOnScroll = () => {
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
      threshold: 0.18
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

if (menuToggle) {
  menuToggle.addEventListener("click", toggleMenu);
}

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tabTarget);
  });
});

faqButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleFaq(button);
  });
});

if (whatsappForm) {
  whatsappForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(whatsappForm);
    const message = encodeURIComponent(buildWhatsappMessage(formData));
    const url = `https://wa.me/557921400981?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const targetId = anchor.getAttribute("href");
    const targetElement = targetId ? document.querySelector(targetId) : null;

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

updateServiceStatus();
if (defaultTabButton?.dataset.tabTarget) {
  activateTab(defaultTabButton.dataset.tabTarget);
}
revealOnScroll();
