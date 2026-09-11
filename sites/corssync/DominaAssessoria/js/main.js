const DOMINA_PHONE = "5566981226065";

const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const scrollButtons = document.querySelectorAll("[data-scroll-target], [data-scroll]");
const waLinks = document.querySelectorAll("[data-wa-message]");
const faqQuestions = document.querySelectorAll(".faq-question");
const form = document.getElementById("whatsapp-form");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const updateHeaderState = () => {
  if (!header) {
    return;
  }

  header.classList.toggle("is-scrolled", window.scrollY > 18);
};

const closeMobileMenu = () => {
  if (!menuToggle || !mobileNav) {
    return;
  }

  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.hidden = true;
  document.body.classList.remove("nav-open");
};

const toggleMobileMenu = () => {
  if (!menuToggle || !mobileNav) {
    return;
  }

  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  mobileNav.hidden = isExpanded;
  document.body.classList.toggle("nav-open", !isExpanded);
};

const scrollToSection = (targetId) => {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const headerOffset = header ? header.offsetHeight + 12 : 0;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: targetPosition,
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
  });
};

const buildWhatsappUrl = (message) => {
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${DOMINA_PHONE}?text=${encodedMessage}`;
};

waLinks.forEach((link) => {
  const customMessage = link.getAttribute("data-wa-message");

  if (customMessage) {
    link.setAttribute("href", buildWhatsappUrl(customMessage));
  }
});

scrollButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const targetId = button.dataset.scrollTarget || "inicio";

    if (button.hasAttribute("data-scroll") || button.dataset.scrollTarget) {
      event.preventDefault();
      closeMobileMenu();
      scrollToSection(targetId);
    }
  });
});

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    const isOpen = question.getAttribute("aria-expanded") === "true";

    faqQuestions.forEach((currentQuestion) => {
      currentQuestion.setAttribute("aria-expanded", "false");
      currentQuestion.closest(".faq-item")?.classList.remove("is-open");
    });

    if (!isOpen) {
      question.setAttribute("aria-expanded", "true");
      item?.classList.add("is-open");
    }
  });
});

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const lines = [
      "Olá! Vim pelo site da Domina Assessoria Contábil.",
      name ? `Nome: ${name}` : "",
      company ? `Empresa: ${company}` : "",
      service ? `Serviço de interesse: ${service}` : "",
      message ? `Mensagem: ${message}` : "Quero entender qual serviço faz mais sentido para a minha empresa.",
    ].filter(Boolean);

    window.open(buildWhatsappUrl(lines.join("\n")), "_blank", "noopener");
  });
}

if (!prefersReducedMotion.matches) {
  const revealElements = document.querySelectorAll("[data-reveal]");
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

  revealElements.forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => {
    element.classList.add("is-visible");
  });
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeMobileMenu();
  }
});

updateHeaderState();
