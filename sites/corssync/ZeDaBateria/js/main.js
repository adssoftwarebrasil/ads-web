const header = document.getElementById("header");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const serviceTabs = document.querySelectorAll(".service-tab");
const servicePanels = document.querySelectorAll(".service-panel");
const faqTriggers = document.querySelectorAll(".faq-trigger");
const leadForm = document.getElementById("leadForm");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateHeaderState() {
    if (window.scrollY > 18) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
}

function closeMenu() {
    navMenu.classList.remove("is-open");
    navToggle.classList.remove("is-active");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
}

function openMenu() {
    navMenu.classList.add("is-open");
    navToggle.classList.add("is-active");
    navToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
}

navToggle?.addEventListener("click", () => {
    const isOpen = navMenu.classList.contains("is-open");
    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
});

navMenu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});

serviceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = tab.dataset.target;

        serviceTabs.forEach((item) => {
            item.classList.toggle("is-active", item === tab);
            item.setAttribute("aria-selected", item === tab ? "true" : "false");
        });

        servicePanels.forEach((panel) => {
            const isTarget = panel.id === target;
            panel.classList.toggle("is-active", isTarget);
            panel.hidden = !isTarget;
        });
    });
});

faqTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const item = trigger.closest(".faq-item");
        const content = trigger.nextElementSibling;
        const isOpen = item.classList.contains("is-open");

        faqTriggers.forEach((otherTrigger) => {
            const otherItem = otherTrigger.closest(".faq-item");
            const otherContent = otherTrigger.nextElementSibling;
            otherItem.classList.remove("is-open");
            otherTrigger.setAttribute("aria-expanded", "false");
            otherContent.hidden = true;
        });

        if (!isOpen) {
            item.classList.add("is-open");
            trigger.setAttribute("aria-expanded", "true");
            content.hidden = false;
        }
    });
});

leadForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const veiculo = document.getElementById("veiculo").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const lines = [
        "Olá! Vim pelo site da Zé da Bateria.",
        `Nome: ${nome}`,
        `Serviço: ${servico}`
    ];

    if (veiculo) {
        lines.push(`Veículo: ${veiculo}`);
    }

    if (mensagem) {
        lines.push(`Detalhes: ${mensagem}`);
    }

    const url = `https://wa.me/5563984458064?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");
});

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

if (!reduceMotion) {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    document.querySelectorAll("[data-reveal]").forEach((element) => {
        element.classList.add("is-visible");
    });
}
