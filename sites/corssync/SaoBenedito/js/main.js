const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
const revealItems = document.querySelectorAll(".reveal");
const tabs = document.querySelectorAll(".selector__tab");
const panels = document.querySelectorAll(".family-panel");
const tiltTargets = document.querySelectorAll("[data-tilt]");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

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
    threshold: 0.14,
    rootMargin: "0px 0px -48px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.target;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentId = entry.target.id;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("is-current", isCurrent);
      });
    });
  },
  {
    threshold: 0.35,
  }
);

document.querySelectorAll("section[id]").forEach((section) => sectionObserver.observe(section));

tiltTargets.forEach((target) => {
  target.addEventListener("pointermove", (event) => {
    if (window.innerWidth < 901) {
      return;
    }

    const rect = target.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 8;
    const rotateX = (0.5 - y) * 8;

    target.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  target.addEventListener("pointerleave", () => {
    target.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  });
});
