document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.getElementById("header");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const quickOrderButtons = document.querySelectorAll(".quick-order");
    const waForm = document.getElementById("waForm");
    const orderSelect = document.getElementById("pedido");
    const currentYear = document.getElementById("currentYear");

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
            const top = target.getBoundingClientRect().top + window.scrollY - offset + 2;
            window.scrollTo({ top, behavior: "smooth" });
        });
    });

    const updateHeader = () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 24);
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

    const sendQuickOrder = (message) => {
        const text = encodeURIComponent(`Olá! Vim pelo site da Gás Família. ${message}`);
        window.open(`https://wa.me/5561999044298?text=${text}`, "_blank", "noopener");
    };

    quickOrderButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const product = button.dataset.product;
            if (!product) return;

            if (orderSelect) {
                const normalizedProduct = product.toLowerCase();
                const match = Array.from(orderSelect.options).find((option) =>
                    option.value && normalizedProduct.includes(option.value.toLowerCase().split(" ")[0])
                );

                if (match) {
                    orderSelect.value = match.value;
                }
            }

            sendQuickOrder(product);
        });
    });

    if (waForm) {
        waForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome")?.value.trim() || "";
            const bairro = document.getElementById("bairro")?.value.trim() || "";
            const endereco = document.getElementById("endereco")?.value.trim() || "";
            const pedido = document.getElementById("pedido")?.value || "";
            const observacao = document.getElementById("observacao")?.value.trim() || "";

            const lines = [
                "Olá, equipe Gás Família!",
                `Meu nome é ${nome}.`,
                `Gostaria de pedir: ${pedido}.`,
                `Bairro/região: ${bairro}.`,
                `Endereço de entrega: ${endereco}.`
            ];

            if (observacao) {
                lines.push(`Observações: ${observacao}.`);
            }

            lines.push("Vim pelo site e aguardo o retorno para confirmar o pedido.");

            const submitButton = waForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Abrindo WhatsApp...';
            }

            const text = encodeURIComponent(lines.join("\n"));

            setTimeout(() => {
                window.open(`https://wa.me/5561999044298?text=${text}`, "_blank", "noopener");
                waForm.reset();

                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Enviar pedido no WhatsApp';
                }
            }, 320);
        });
    }

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
});
