const topbar = document.querySelector(".topbar");
const revealSelectors = [
  ".section-heading",
  ".gallery__copy",
  ".gallery-card",
  ".hero-card",
  ".hero-visual",
  ".service-card",
  ".about__panel",
  ".about-photo",
  ".stat-card",
  ".feature-card",
  ".coverage__copy",
  ".coverage__box",
  ".cta"
];

const updateTopbarState = () => {
  if (!topbar) {
    return;
  }

  topbar.classList.toggle("is-scrolled", window.scrollY > 18);
};

updateTopbarState();
window.addEventListener("scroll", updateTopbarState, { passive: true });

const revealItems = document.querySelectorAll(revealSelectors.join(", "));

revealItems.forEach((item, index) => {
  item.classList.add("reveal", `reveal--delay-${index % 4}`);
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -40px 0px"
  }
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});
