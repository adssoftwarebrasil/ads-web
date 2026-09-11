document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const header = document.getElementById("header");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const revealItems = document.querySelectorAll(".reveal");
    const intentChips = document.querySelectorAll(".intent-chip");
    const tabs = document.querySelectorAll(".scenario-tab");
    const panels = document.querySelectorAll(".scenario-panel");
    const mailForm = document.getElementById("mailForm");
    const primaryEmail = "maisvidambulancias@gmail.com";
    const ccEmail = "mariovilelafilho@hotmail.com";

    const closeMenu = () => {
        if (!navToggle || !navMenu) {
            return;
        }

        navToggle.classList.remove("active");
        navMenu.classList.remove("active");
        navToggle.setAttribute("aria-expanded", "false");
        body.classList.remove("menu-open");
    };

    const updateHeader = () => {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 18);
    };

    const openEmail = (subject, bodyText) => {
        const mailto = `mailto:${primaryEmail}?cc=${encodeURIComponent(ccEmail)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
        window.location.href = mailto;
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

            if (!href || href === "#") {
                return;
            }

            const target = document.querySelector(href);

            if (!target) {
                return;
            }

            event.preventDefault();

            const offset = header ? header.offsetHeight : 0;
            const top = target.getBoundingClientRect().top + window.scrollY - offset + 2;
            window.scrollTo({ top, behavior: "smooth" });
            closeMenu();
        });
    });

    intentChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            const subject = chip.dataset.subject || "Solicitacao de atendimento - Mais Vida";
            const bodyText = chip.dataset.body || "Ola, gostaria de falar com a Mais Vida.";
            openEmail(subject, `${bodyText}\n\nVim pelo site e gostaria de receber orientacoes.`);
        });
    });

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const targetId = tab.dataset.target;

            tabs.forEach((button) => {
                const isActive = button === tab;
                button.classList.toggle("active", isActive);
                button.setAttribute("aria-selected", String(isActive));
            });

            panels.forEach((panel) => {
                const isActive = panel.id === targetId;
                panel.classList.toggle("active", isActive);
                panel.hidden = !isActive;
            });
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
            threshold: 0.16,
            rootMargin: "0px 0px -30px 0px"
        });

        revealItems.forEach((item) => observer.observe(item));
    } else {
        revealItems.forEach((item) => item.classList.add("visible"));
    }

    if (mailForm) {
        mailForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome")?.value.trim() || "";
            const cidade = document.getElementById("cidade")?.value.trim() || "";
            const tipo = document.getElementById("tipo")?.value || "";
            const detalhes = document.getElementById("detalhes")?.value.trim() || "";

            const bodyLines = [
                "Ola, equipe da Mais Vida!",
                `Meu nome e ${nome}.`,
                `Preciso de atendimento para a cidade de ${cidade}.`,
                `Tipo de servico: ${tipo}.`
            ];

            if (detalhes) {
                bodyLines.push(`Detalhes: ${detalhes}`);
            }

            bodyLines.push("Vim pelo site e gostaria de receber retorno sobre essa solicitacao.");

            openEmail(`Solicitacao de ${tipo} - ${cidade}`, bodyLines.join("\n"));
            mailForm.reset();
        });
    }

    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1080) {
            closeMenu();
        }
    });

    updateHeader();
});
