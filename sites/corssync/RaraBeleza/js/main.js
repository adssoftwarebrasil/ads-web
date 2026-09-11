document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.getElementById("header");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const waForm = document.getElementById("waForm");
    const quickActions = document.querySelectorAll(".quick-action");
    const whatsappBase = "https://wa.me/5575988574031?text=";

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

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            const offset = header ? header.offsetHeight : 0;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - offset + 2;
            window.scrollTo({ top: targetTop, behavior: "smooth" });
        });
    });

    const updateHeader = () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 18);
    };

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    const revealElements = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.14,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });

    const openWhatsApp = (message) => {
        window.open(`${whatsappBase}${encodeURIComponent(message)}`, "_blank", "noopener");
    };

    quickActions.forEach((button) => {
        button.addEventListener("click", () => {
            const message = button.dataset.message;
            if (!message) return;
            openWhatsApp(`Olá! Vim pelo site da Rara Beleza. ${message}`);
        });
    });

    if (waForm) {
        waForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome")?.value.trim() || "";
            const servico = document.getElementById("servico")?.value || "";
            const turno = document.getElementById("turno")?.value || "";
            const mensagem = document.getElementById("mensagem")?.value.trim() || "";
            const submitButton = waForm.querySelector('button[type="submit"]');

            const lines = [
                "Olá, equipe da Rara Beleza!",
                `Meu nome é ${nome}.`,
                `Tenho interesse em ${servico}.`
            ];

            if (turno) {
                lines.push(`Minha preferência de horário é: ${turno}.`);
            }

            if (mensagem) {
                lines.push(`Detalhes: ${mensagem}.`);
            }

            lines.push("Vim pelo site e gostaria de agendar um atendimento.");

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Abrindo WhatsApp...';
            }

            setTimeout(() => {
                openWhatsApp(lines.join("\n"));
                waForm.reset();

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Abrir conversa';
                }
            }, 250);
        });
    }
});
