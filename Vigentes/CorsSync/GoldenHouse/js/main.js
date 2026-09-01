const GOLDEN_HOUSE_PHONE = "5571993469993";

const header = document.querySelector(".site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");
const scrollButtons = document.querySelectorAll("[data-scroll-target], [data-scroll]");
const waLinks = document.querySelectorAll("[data-wa-message]");
const faqQuestions = document.querySelectorAll(".faq-question");
const serviceTabs = document.querySelectorAll(".service-tab");
const servicePanels = document.querySelectorAll(".service-panel");
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
  return `https://wa.me/${GOLDEN_HOUSE_PHONE}?text=${encoded}`;
};

const openFaqItem = (question) => {
  faqQuestions.forEach((currentQuestion) => {
    currentQuestion.setAttribute("aria-expanded", "false");
    currentQuestion.closest(".faq-item")?.classList.remove("is-open");
  });

  question.setAttribute("aria-expanded", "true");
  question.closest(".faq-item")?.classList.add("is-open");
};

const activateService = (targetName) => {
  serviceTabs.forEach((tab) => {
    const isActive = tab.dataset.serviceTarget === targetName;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  servicePanels.forEach((panel) => {
    const isActive = panel.dataset.servicePanel === targetName;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
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

faqQuestions.forEach((question, index) => {
  if (index === 0) {
    question.closest(".faq-item")?.classList.add("is-open");
  }

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

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activateService(tab.dataset.serviceTarget || "");
  });
});

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", toggleMobileMenu);
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
      threshold: 0.16,
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
  if (window.innerWidth > 1080) {
    closeMobileMenu();
  }
});

updateHeaderState();
activateService("usucapiao");
