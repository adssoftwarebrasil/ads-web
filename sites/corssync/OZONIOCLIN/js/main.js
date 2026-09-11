const root = document.documentElement;
const navToggle = document.getElementById("navToggle");
const header = document.querySelector(".site-header");
const navLinks = document.querySelectorAll(".nav-menu a");
const intentChips = document.querySelectorAll(".intent-chip");
const therapyTabs = document.querySelectorAll(".therapy-tab");
const therapyPanels = document.querySelectorAll(".therapy-panel");
const revealItems = document.querySelectorAll(".reveal");
const form = document.getElementById("whatsAppForm");

const whatsappNumber = "5566999161407";

const buildWhatsAppUrl = (message) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

if (navToggle) {
    navToggle.addEventListener("click", () => {
        const isOpen = header.classList.toggle("nav-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });
}

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        header.classList.remove("nav-open");
        navToggle?.setAttribute("aria-expanded", "false");
    });
});

intentChips.forEach((chip) => {
    chip.addEventListener("click", () => {
        const message = chip.dataset.message || "Olá! Quero informações sobre as terapias da Ozonioclin.";
        window.open(buildWhatsAppUrl(message), "_blank", "noopener");
    });
});

therapyTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const targetId = tab.dataset.target;

        therapyTabs.forEach((item) => {
            item.classList.toggle("active", item === tab);
            item.setAttribute("aria-selected", String(item === tab));
        });

        therapyPanels.forEach((panel) => {
            const isActive = panel.id === targetId;
            panel.hidden = !isActive;
            panel.classList.toggle("active", isActive);

            const panelVideo = panel.querySelector("video");
            if (panelVideo && !isActive) {
                panelVideo.pause();
                panelVideo.currentTime = 0;
            }
        });
    });
});

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = form.nome.value.trim();
        const interesse = form.interesse.value.trim();
        const cidade = form.cidade.value.trim();
        const mensagem = form.mensagem.value.trim();

        const text = [
            `Olá! Meu nome é ${nome}.`,
            interesse ? `Tenho interesse em ${interesse}.` : "",
            cidade ? `Sou de ${cidade}.` : "",
            mensagem ? `Detalhes: ${mensagem}` : "",
            "Gostaria de receber informações sobre atendimento na Ozonioclin."
        ]
            .filter(Boolean)
            .join(" ");

        window.open(buildWhatsAppUrl(text), "_blank", "noopener");
    });
}

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

root.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);

window.addEventListener("resize", () => {
    root.style.setProperty("--vh", `${window.innerHeight * 0.01}px`);
});
