const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a[href^='#']");
const revealItems = document.querySelectorAll(".reveal");
const whatsappForm = document.querySelector("[data-whatsapp-form]");
const videos = document.querySelectorAll(".media-card video");

const closeMenu = () => {
  if (!navToggle || !mainNav) return;

  navToggle.classList.remove("is-open");
  mainNav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("nav-open");
};

const toggleHeaderState = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

toggleHeaderState();
window.addEventListener("scroll", toggleHeaderState, { passive: true });

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");

    mainNav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
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
    {
      threshold: 0.14,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      threshold: 0.3,
      rootMargin: "-24% 0px -58% 0px",
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

videos.forEach((video) => {
  video.addEventListener("play", () => {
    videos.forEach((otherVideo) => {
      if (otherVideo !== video) {
        otherVideo.pause();
      }
    });
  });
});

if (whatsappForm) {
  whatsappForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(whatsappForm);
    const name = String(formData.get("nome") || "").trim();
    const phone = String(formData.get("whatsapp") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const subject = String(formData.get("assunto") || "").trim();
    const message = String(formData.get("mensagem") || "").trim();

    const lines = [
      "Olá, vim pelo site da Auto Vidros BR.",
      "",
      `Nome: ${name}`,
      phone ? `WhatsApp: ${phone}` : "",
      email ? `E-mail: ${email}` : "",
      `Assunto: ${subject}`,
      "",
      `Mensagem: ${message}`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/5579999694595?text=${encodeURIComponent(lines.join("\n"))}`;

    window.open(whatsappUrl, "_blank", "noopener");
  });
}
