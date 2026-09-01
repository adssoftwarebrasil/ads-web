document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.getElementById("header");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const whatsappBase = "https://wa.me/5575992700255?text=";

    const closeMenu = () => {
        if (!navMenu || !navToggle) return;

        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        body.classList.remove("menu-open");
    };

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("active");
            navToggle.classList.toggle("active", isOpen);
            navToggle.setAttribute("aria-expanded", String(isOpen));
            body.classList.toggle("menu-open", isOpen);
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            const offset = header ? header.offsetHeight + 12 : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({
                top,
                behavior: reducedMotion ? "auto" : "smooth"
            });
        });
    });

    const syncHeader = () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 12);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    const revealItems = document.querySelectorAll(".reveal");
    if (reducedMotion) {
        revealItems.forEach((item) => item.classList.add("visible"));
    } else {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        }, {
            threshold: 0.16,
            rootMargin: "0px 0px -40px 0px"
        });

        revealItems.forEach((item) => observer.observe(item));
    }

    const openWhatsApp = (message) => {
        const text = encodeURIComponent(`Olá! Vim pelo site da Rede Erguer Apronte Casa. ${message}`);
        window.open(`${whatsappBase}${text}`, "_blank", "noopener");
    };

    document.querySelectorAll("[data-message]").forEach((button) => {
        button.addEventListener("click", () => {
            const message = button.getAttribute("data-message");
            if (!message) return;
            openWhatsApp(message);
        });
    });

    const quickContactForm = document.getElementById("quickContactForm");
    if (quickContactForm) {
        quickContactForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(quickContactForm);
            const nome = String(formData.get("nome") || "").trim();
            const whatsapp = String(formData.get("whatsapp") || "").trim();
            const email = String(formData.get("email") || "").trim();
            const assunto = String(formData.get("assunto") || "").trim();
            const message = [
                "Quero atendimento pelo formulário do site.",
                nome && `Nome: ${nome}`,
                whatsapp && `WhatsApp: ${whatsapp}`,
                email && `E-mail: ${email}`,
                assunto && `Assunto: ${assunto}`
            ].filter(Boolean).join(" | ");

            openWhatsApp(message);
        });
    }
});
