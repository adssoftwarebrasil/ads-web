window.lucide?.createIcons();

const nav = document.querySelector("[data-nav]");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const productButtons = [...document.querySelectorAll("[data-filter]")];
const productCards = [...document.querySelectorAll("[data-category]")];

const setMenuState = (isOpen) => {
  nav?.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle?.setAttribute("aria-expanded", String(isOpen));
  menuToggle?.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
};

menuToggle?.addEventListener("click", () => {
  setMenuState(!nav?.classList.contains("is-open"));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuState(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) setMenuState(false);
});

productButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    productButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    productCards.forEach((card) => {
      const shouldShow = filter === "todos" || card.dataset.category === filter;
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const sections = [...document.querySelectorAll("main section[id]")];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => sectionObserver.observe(section));
