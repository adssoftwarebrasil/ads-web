document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const waForm = document.getElementById("waForm");
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanels = document.querySelectorAll(".tab-panel");
    const faqButtons = document.querySelectorAll(".faq-question");

    const closeMenu = () => {
        if (!navToggle || !navMenu) return;
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

        document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    window.addEventListener("scroll", () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 24);
    }, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            const offset = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset + 2;
            window.scrollTo({ top, behavior: "smooth" });
        });
    });

    if (tabButtons.length && tabPanels.length) {
        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const tab = button.dataset.tab;
                if (!tab) return;

                tabButtons.forEach((item) => {
                    const active = item === button;
                    item.classList.toggle("active", active);
                    item.setAttribute("aria-selected", String(active));
                });

                tabPanels.forEach((panel) => {
                    const active = panel.dataset.panel === tab;
                    panel.classList.toggle("active", active);
                    panel.hidden = !active;
                });
            });
        });
    }

    faqButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const item = button.closest(".faq-item");
            const answer = item?.querySelector(".faq-answer");
            const isOpen = button.getAttribute("aria-expanded") === "true";

            if (!item || !answer) return;

            button.setAttribute("aria-expanded", String(!isOpen));
            item.classList.toggle("open", !isOpen);
            answer.hidden = isOpen;
        });
    });

    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -40px 0px"
        });

        revealElements.forEach((element) => observer.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("visible"));
    }

    if (waForm) {
        waForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome")?.value.trim() || "";
            const telefone = document.getElementById("telefone")?.value.trim() || "";
            const segmento = document.getElementById("segmento")?.value.trim() || "";
            const necessidade = document.getElementById("necessidade")?.value.trim() || "";
            const cidade = document.getElementById("cidade")?.value.trim() || "";
            const mensagem = document.getElementById("mensagem")?.value.trim() || "";

            const linhas = [
                "Olá! Vim pelo site da Fladisco Embreagens.",
                nome ? `Nome: ${nome}.` : "",
                telefone ? `Telefone: ${telefone}.` : "",
                segmento ? `Perfil de atendimento: ${segmento}.` : "",
                necessidade ? `Necessidade: ${necessidade}.` : "",
                cidade ? `Cidade: ${cidade}.` : "",
                mensagem ? `Detalhes: ${mensagem}` : ""
            ].filter(Boolean);

            const url = `https://wa.me/559132920403?text=${encodeURIComponent(linhas.join("\n"))}`;
            const submitButton = waForm.querySelector('button[type="submit"]');

            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Abrindo WhatsApp...';
            }

            window.open(url, "_blank", "noopener");
            waForm.reset();

            setTimeout(() => {
                if (!submitButton) return;
                submitButton.disabled = false;
                submitButton.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar pelo WhatsApp';
            }, 700);
        });
    }
});
