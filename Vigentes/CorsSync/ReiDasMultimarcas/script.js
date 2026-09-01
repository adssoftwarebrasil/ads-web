const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const galleryImage = document.getElementById("gallery-image");
const galleryTitle = document.getElementById("gallery-title");
const galleryCaption = document.getElementById("gallery-caption");
const thumbs = Array.from(document.querySelectorAll(".thumb"));

const setActiveThumb = (thumb) => {
  thumbs.forEach((item) => {
    const isActive = item === thumb;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", String(isActive));
  });

  galleryImage.src = thumb.dataset.image;
  galleryImage.alt = thumb.querySelector("img")?.alt || thumb.dataset.title;
  galleryTitle.textContent = thumb.dataset.title;
  galleryCaption.textContent = thumb.dataset.caption;
};

thumbs.forEach((thumb) => {
  thumb.addEventListener("click", () => setActiveThumb(thumb));
});

if (thumbs.length > 1) {
  let activeIndex = thumbs.findIndex((thumb) => thumb.classList.contains("is-active"));
  let galleryTimer = null;

  const startGalleryCycle = () => {
    galleryTimer = window.setInterval(() => {
      activeIndex = (activeIndex + 1) % thumbs.length;
      setActiveThumb(thumbs[activeIndex]);
    }, 4800);
  };

  const resetGalleryCycle = (thumb) => {
    window.clearInterval(galleryTimer);
    activeIndex = thumbs.indexOf(thumb);
    startGalleryCycle();
  };

  thumbs.forEach((thumb) => {
    thumb.addEventListener("click", () => resetGalleryCycle(thumb));
  });

  startGalleryCycle();
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-trigger");

  trigger?.addEventListener("click", () => {
    const willOpen = !item.classList.contains("is-open");

    faqItems.forEach((currentItem) => {
      currentItem.classList.remove("is-open");
      currentItem.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      item.classList.add("is-open");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});
