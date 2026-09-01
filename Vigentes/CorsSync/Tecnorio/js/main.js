const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const revealItems = document.querySelectorAll(".reveal");
const quickActions = document.querySelectorAll(".quick-action");

const updateHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 16);
};

const closeMenu = () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
};

navToggle?.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.classList.toggle("active", !expanded);
    navMenu.classList.toggle("active", !expanded);
    navToggle.setAttribute("aria-expanded", String(!expanded));
    document.body.classList.toggle("menu-open", !expanded);
});

document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.16 });

revealItems.forEach((item) => revealObserver.observe(item));

quickActions.forEach((button) => {
    button.addEventListener("click", () => {
        const message = button.dataset.message || "Quero atendimento na TecnoRio.";
        const url = `https://wa.me/556436130969?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank", "noopener");
    });
});

window.addEventListener("scroll", updateHeader, { passive: true });
window.addEventListener("resize", () => {
    if (window.innerWidth > 1120) {
        closeMenu();
    }
});

updateHeader();
