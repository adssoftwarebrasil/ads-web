const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const revealItems = document.querySelectorAll(".reveal");
const quickChips = document.querySelectorAll(".quick-chip");

const whatsappBase = "https://wa.me/5562994075787?text=";

function toggleMenu(forceClose = false) {
    const shouldOpen = forceClose ? false : !navMenu.classList.contains("active");
    navMenu.classList.toggle("active", shouldOpen);
    navToggle.classList.toggle("active", shouldOpen);
    navToggle.setAttribute("aria-expanded", String(shouldOpen));
    document.body.classList.toggle("menu-open", shouldOpen);
}

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => toggleMenu());

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => toggleMenu(true));
    });
}

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 16);
});

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.16
});

revealItems.forEach((item) => revealObserver.observe(item));

quickChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        const message = chip.dataset.message || "Olá! Quero saber mais sobre a Empório das Cozinhas.";
        window.open(`${whatsappBase}${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
});
