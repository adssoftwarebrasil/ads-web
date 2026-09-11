const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = navMenu ? navMenu.querySelectorAll("a") : [];
const quickChips = document.querySelectorAll(".quick-chip");
const revealItems = document.querySelectorAll(".reveal");
const whatsappBase = "https://wa.me/556635213387?text=";

const setHeaderState = () => {
    if (!header) {
        return;
    }

    header.classList.toggle("scrolled", window.scrollY > 18);
};

const closeMenu = () => {
    if (!navToggle || !navMenu) {
        return;
    }

    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
};

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        navToggle.classList.toggle("active", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.classList.toggle("menu-open", isOpen);
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
});

quickChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        const message = chip.dataset.message || "Olá! Quero falar com a Drogaria Sao Paulo.";
        window.open(`${whatsappBase}${encodeURIComponent(message)}`, "_blank", "noopener");
    });
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18
    });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

window.addEventListener("scroll", setHeaderState, { passive: true });
window.addEventListener("resize", () => {
    if (window.innerWidth > 1080) {
        closeMenu();
    }
});

setHeaderState();
