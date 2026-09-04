const siteHeader = document.querySelector(".site-header");
const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");
const navLinks = siteNav ? [...siteNav.querySelectorAll("a")] : [];
const revealItems = [...document.querySelectorAll(".reveal")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const productCards = [...document.querySelectorAll(".product-card")];

const toggleMenu = (forceOpen) => {
  if (!menuToggle || !siteNav) return;

  const nextState =
    typeof forceOpen === "boolean"
      ? forceOpen
      : menuToggle.getAttribute("aria-expanded") !== "true";

  menuToggle.setAttribute("aria-expanded", String(nextState));
  siteNav.classList.toggle("is-open", nextState);
  document.body.classList.toggle("menu-open", nextState);
};

if (menuToggle) {
  menuToggle.addEventListener("click", () => toggleMenu());
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 900) {
    toggleMenu(false);
  }
});

window.addEventListener("scroll", () => {
  if (!siteHeader) return;
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 18);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -32px 0px"
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const applyFilter = (filterValue) => {
  productCards.forEach((card) => {
    const categories = (card.dataset.category || "").split(" ");
    const shouldShow = filterValue === "all" || categories.includes(filterValue);
    card.classList.toggle("is-hidden", !shouldShow);
  });
};

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    applyFilter(button.dataset.filter || "all");
  });
});
