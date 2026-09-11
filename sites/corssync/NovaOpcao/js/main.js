const NOVA_OPCAO_PHONE = "5562999911485";

const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const scrollButtons = document.querySelectorAll("[data-scroll-target], [data-scroll]");
const waLinks = document.querySelectorAll("[data-wa-message]");
const filterChips = document.querySelectorAll(".filter-chip");
const portfolioCards = document.querySelectorAll(".portfolio-card");
const faqQuestions = document.querySelectorAll(".faq-question");
const contactForm = document.querySelector("[data-whatsapp-form]");
const currentYear = document.getElementById("current-year");
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

  const headerOffset = header ? header.offsetHeight + 10 : 0;
  const position = target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: position,
    behavior: prefersReducedMotion.matches ? "auto" : "smooth",
  });
};

const buildWhatsappUrl = (message) => {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${NOVA_OPCAO_PHONE}?text=${encoded}`;
};

const filterPortfolio = (targetCategory) => {
  filterChips.forEach((chip) => {
    const isActive = chip.dataset.filter === targetCategory;
    chip.classList.toggle("is-active", isActive);
    chip.setAttribute("aria-pressed", String(isActive));
  });

  portfolioCards.forEach((card) => {
    const shouldShow =
      targetCategory === "todos" || card.dataset.category === targetCategory;

    card.classList.toggle("is-hidden", !shouldShow);
  });
};

const openFaqItem = (question) => {
  faqQuestions.forEach((currentQuestion) => {
    currentQuestion.setAttribute("aria-expanded", "false");
    currentQuestion.closest(".faq-item")?.classList.remove("is-open");
  });

  question.setAttribute("aria-expanded", "true");
  question.closest(".faq-item")?.classList.add("is-open");
};

waLinks.forEach((link) => {
  const message = link.getAttribute("data-wa-message");

  if (message) {
    link.setAttribute("href", buildWhatsappUrl(message));
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

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterPortfolio(chip.dataset.filter || "todos");
  });
});

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const isOpen = question.getAttribute("aria-expanded") === "true";

    if (isOpen) {
      question.setAttribute("aria-expanded", "false");
      question.closest(".faq-item")?.classList.remove("is-open");
      return;
    }

    openFaqItem(question);
  });
});

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const nome = String(formData.get("nome") || "").trim();
    const telefone = String(formData.get("telefone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const assunto = String(formData.get("assunto") || "").trim();
    const mensagem = String(formData.get("mensagem") || "").trim();

    const lines = [
      "Olá! Vim pelo site da Nova Opção Persianas e gostaria de atendimento.",
    ];

    if (nome) {
      lines.push(`Nome: ${nome}`);
    }

    if (telefone) {
      lines.push(`WhatsApp: ${telefone}`);
    }

    if (email) {
      lines.push(`E-mail: ${email}`);
    }

    if (assunto) {
      lines.push(`Assunto: ${assunto}`);
    }

    if (mensagem) {
      lines.push(`Mensagem: ${mensagem}`);
    }

    window.open(buildWhatsappUrl(lines.join("\n")), "_blank", "noopener");
  });
}

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", toggleMobileMenu);
}

if (!prefersReducedMotion.matches) {
  const revealElements = document.querySelectorAll("[data-reveal]");
  const revealIfInView = (element) => {
    const rect = element.getBoundingClientRect();
    const isVisibleInViewport =
      rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (isVisibleInViewport) {
      element.classList.add("is-visible");
      return true;
    }

    return false;
  };

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
    }
  );

  revealElements.forEach((element) => {
    if (!revealIfInView(element)) {
      observer.observe(element);
    }
  });
} else {
  document.querySelectorAll("[data-reveal]").forEach((element) => {
    element.classList.add("is-visible");
  });
}

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

window.addEventListener("scroll", updateHeaderState, { passive: true });
window.addEventListener("resize", () => {
  if (window.innerWidth > 1080) {
    closeMobileMenu();
  }
});

updateHeaderState();
filterPortfolio("todos");
