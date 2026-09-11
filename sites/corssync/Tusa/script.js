const topbar = document.querySelector(".topbar");
const menuToggle = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".site-menu a");
const revealItems = document.querySelectorAll(".reveal");
const tabs = document.querySelectorAll("[data-service-tab]");
const panes = document.querySelectorAll("[data-service-pane]");
const filters = document.querySelectorAll("[data-filter]");
const galleryItems = document.querySelectorAll(".gallery-grid figure");

const updateHeader = () => {
  topbar.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = topbar.classList.toggle("menu-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    topbar.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.serviceTab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panes.forEach((pane) => {
      pane.classList.toggle("is-active", pane.dataset.servicePane === target);
    });
  });
});

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const target = filter.dataset.filter;

    filters.forEach((item) => item.classList.toggle("is-active", item === filter));
    galleryItems.forEach((item) => {
      const shouldShow = target === "all" || item.dataset.category === target;
      item.classList.toggle("is-hidden", !shouldShow);
    });
  });
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
  { threshold: 0.16 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const sections = [...document.querySelectorAll("section[id]")];
const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

document.querySelector(".marque-track").innerHTML += document.querySelector(".marque-track").innerHTML;
