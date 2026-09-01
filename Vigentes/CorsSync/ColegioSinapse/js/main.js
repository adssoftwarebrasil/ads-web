const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const quickActions = document.querySelectorAll(".quick-action");
const whatsappBase = "https://wa.me/5562999690082?text=";

const syncHeader = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
};

const closeMenu = () => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
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

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });
}

quickActions.forEach((button) => {
    button.addEventListener("click", () => {
        const message = button.dataset.message || "Olá! Quero mais informações sobre o Colégio Sinapse.";
        window.open(`${whatsappBase}${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});

window.addEventListener("scroll", syncHeader, { passive: true });
window.addEventListener("resize", () => {
    if (window.innerWidth > 1100) {
        closeMenu();
    }
});

syncHeader();
