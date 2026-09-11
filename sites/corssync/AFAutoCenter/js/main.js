document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const waForm = document.getElementById("waForm");

    const closeMenu = () => {
        if (!navMenu || !navToggle) return;
        navMenu.classList.remove("active");
        navToggle.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isActive = navMenu.classList.toggle("active");
            navToggle.classList.toggle("active", isActive);
            navToggle.setAttribute("aria-expanded", String(isActive));
            document.body.classList.toggle("menu-open", isActive);
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
            const headerOffset = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - headerOffset + 2;
            window.scrollTo({ top, behavior: "smooth" });
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
            const veiculo = document.getElementById("veiculo")?.value.trim() || "";
            const servico = document.getElementById("servico")?.value.trim() || "";
            const mensagem = document.getElementById("mensagem")?.value.trim() || "";

            const linhas = [
                "Olá! Vim pelo site da AF André Auto Center.",
                nome ? `Meu nome é ${nome}.` : "",
                telefone ? `Meu telefone é ${telefone}.` : "",
                veiculo ? `Veículo: ${veiculo}.` : "",
                servico ? `Serviço desejado: ${servico}.` : "",
                mensagem ? `Detalhes: ${mensagem}` : ""
            ].filter(Boolean);

            const texto = encodeURIComponent(linhas.join("\n"));
            const url = `https://wa.me/5567999519750?text=${texto}`;

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
