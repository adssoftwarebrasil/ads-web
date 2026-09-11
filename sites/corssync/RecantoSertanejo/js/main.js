const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const bookingForm = document.getElementById("bookingForm");
const currentYear = document.getElementById("currentYear");
const topbar = document.querySelector(".topbar");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        navToggle.classList.toggle("active", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("is-open");
            navToggle.classList.remove("active");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window && revealItems.length) {
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

window.addEventListener("scroll", () => {
    if (!topbar) {
        return;
    }

    topbar.classList.toggle("scrolled", window.scrollY > 24);
});

if (bookingForm) {
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(bookingForm);
        const name = formData.get("name")?.toString().trim() || "";
        const phone = formData.get("phone")?.toString().trim() || "";
        const service = formData.get("service")?.toString().trim() || "";
        const guests = formData.get("guests")?.toString().trim() || "";
        const message = formData.get("message")?.toString().trim() || "";

        const parts = [
            "Olá! Vim pelo site do Recanto Sertanejo.",
            name ? `Meu nome é ${name}.` : "",
            phone ? `Meu telefone é ${phone}.` : "",
            service ? `Preciso de: ${service}.` : "",
            guests ? `Quantidade de pessoas: ${guests}.` : "",
            message ? `Mensagem: ${message}` : ""
        ].filter(Boolean);

        const url = `https://wa.me/5565996190342?text=${encodeURIComponent(parts.join(" "))}`;
        window.open(url, "_blank", "noopener");
    });
}
