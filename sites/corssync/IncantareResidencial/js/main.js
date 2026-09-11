const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const scrollButtons = document.querySelectorAll("[data-scroll-to]");
const counters = document.querySelectorAll("[data-counter]");
const revealElements = document.querySelectorAll("[data-reveal]");

function toggleMobileMenu(forceOpen) {
  const shouldOpen = typeof forceOpen === "boolean"
    ? forceOpen
    : mobileMenu.hasAttribute("hidden");

  menuToggle.classList.toggle("is-open", shouldOpen);
  menuToggle.setAttribute("aria-expanded", String(shouldOpen));

  if (shouldOpen) {
    mobileMenu.removeAttribute("hidden");
  } else {
    mobileMenu.setAttribute("hidden", "");
  }
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => toggleMobileMenu());
}

scrollButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-scroll-to");
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.innerWidth <= 1120 && mobileMenu && !mobileMenu.hasAttribute("hidden")) {
      toggleMobileMenu(false);
    }
  });
});

const useGsapReveal = Boolean(window.gsap && window.ScrollTrigger);

if (!useGsapReveal && "IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, {
    threshold: 0.18
  });

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else if (!useGsapReveal) {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

if ("IntersectionObserver" in window && counters.length > 0) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const endValue = Number(element.dataset.counter || "0");
      const duration = 1200;
      const startTime = performance.now();

      function updateCounter(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(endValue * eased);

        element.textContent = currentValue;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = endValue;
        }
      }

      requestAnimationFrame(updateCounter);
      counterObserver.unobserve(element);
    });
  }, {
    threshold: 0.5
  });

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

if (window.Swiper) {
  new Swiper(".gallery-swiper", {
    slidesPerView: 1.08,
    spaceBetween: 18,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 4200,
      disableOnInteraction: false
    },
    pagination: {
      el: ".gallery-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev"
    },
    breakpoints: {
      720: {
        slidesPerView: 2.1,
        spaceBetween: 20
      },
      1080: {
        slidesPerView: 3.05,
        spaceBetween: 24
      }
    }
  });
}

if (window.gsap) {
  if (window.ScrollTrigger) {
    window.gsap.registerPlugin(window.ScrollTrigger);
  }

  window.gsap.to(".marble-vein-left", {
    yPercent: -10,
    xPercent: 8,
    duration: 10,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  window.gsap.to(".marble-vein-right", {
    yPercent: 10,
    xPercent: -8,
    duration: 12,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  if (window.ScrollTrigger) {
    window.gsap.utils.toArray("[data-reveal]").forEach((element) => {
      window.gsap.fromTo(element, {
        y: 34,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: element,
          start: "top 84%"
        }
      });
    });
  }
}
