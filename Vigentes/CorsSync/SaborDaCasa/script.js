const header = document.querySelector("[data-header]");
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("[data-nav]");
const tabs = Array.from(document.querySelectorAll(".choice-tab"));
const panels = Array.from(document.querySelectorAll(".choice-item"));
const revealItems = Array.from(document.querySelectorAll(".reveal"));

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 18);
}

function closeMenu() {
  nav?.classList.remove("is-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

menuButton?.addEventListener("click", () => {
  const isOpen = nav?.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(Boolean(isOpen)));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("aria-controls");

    tabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });

    panels.forEach((panel) => {
      const isSelected = panel.id === target;
      panel.classList.toggle("is-active", isSelected);
      panel.hidden = !isSelected;
    });
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
