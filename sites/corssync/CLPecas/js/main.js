const services = {
    vans: {
        kicker: "Frente 01",
        title: "Mecânica especializada para vans e micro-ônibus",
        description:
            "Atendimento pensado para veículos de transporte que precisam de resposta rápida, manutenção confiável e mais segurança para seguir na rota.",
        bullets: [
            "Serviços para veículos utilitários usados em transporte diário.",
            "Manutenção preventiva e corretiva com foco em disponibilidade.",
            "Diagnóstico voltado para desempenho, segurança e continuidade da operação."
        ],
        tags: ["Transporte", "Utilitário diesel", "Manutenção programada"],
        metric: "+ disponibilidade",
        label: "Mais segurança para quem roda todos os dias.",
        badge: "Rota ativa",
        text: "Veículos que trabalham com passageiros e cargas precisam de mecânica que acompanha o ritmo da operação."
    },
    retifica: {
        kicker: "Frente 02",
        title: "Retífica de motores leves e pesados",
        description:
            "Serviço voltado para quem precisa recuperar força, regularidade e durabilidade de motores usados em trabalho intenso.",
        bullets: [
            "Atendimento para motores leves e pesados com foco em desempenho.",
            "Solução para clientes que buscam confiança técnica na recuperação do conjunto.",
            "Serviço orientado para reduzir falhas recorrentes e devolver produtividade."
        ],
        tags: ["Desempenho", "Motor forte", "Linha leve e pesada"],
        metric: "+ rendimento",
        label: "Motor pronto para voltar ao ritmo de trabalho.",
        badge: "Precisão mecânica",
        text: "A retífica certa protege o investimento e ajuda o cliente a retomar a operação com mais tranquilidade."
    },
    mwmcummins: {
        kicker: "Frente 03",
        title: "Especialização em motores MWM e Cummins",
        description:
            "A Mecânica CL trabalha com foco em duas linhas muito presentes no agro e no transporte regional, com serviço técnico voltado para a realidade do cliente.",
        bullets: [
            "Atendimento para aplicações agrícolas e automotivas.",
            "Conhecimento direcionado para motores usados em rotina pesada.",
            "Mais segurança para quem busca oficina com experiência nesse tipo de conjunto."
        ],
        tags: ["MWM", "Cummins", "Aplicação técnica"],
        metric: "foco técnico",
        label: "Especialização em marcas fortes do diesel.",
        badge: "Linha dedicada",
        text: "Quem trabalha com MWM e Cummins procura atendimento que entenda a exigência real do motor no campo e na estrada."
    },
    agro: {
        kicker: "Frente 04",
        title: "Atendimento para linha agrícola e automotiva",
        description:
            "Serviços para clientes que dependem de motor, veículo e produtividade no dia a dia, seja no campo, no transporte ou em uso comercial.",
        bullets: [
            "Suporte para produtores rurais, transportadores e frotistas.",
            "Mecânica para aplicações automotivas e agrícolas em uma região de alta demanda.",
            "Foco em continuidade operacional, economia e desempenho."
        ],
        tags: ["Agro", "Frota", "Produtividade"],
        metric: "+ operação",
        label: "Menos parada para quem depende do diesel.",
        badge: "Campo e estrada",
        text: "A oficina atende cenários em que o motor precisa entregar força, constância e confiança para não comprometer o trabalho."
    }
};

const serviceTabs = document.querySelectorAll(".specialty-tab");
const serviceKicker = document.getElementById("serviceKicker");
const serviceTitle = document.getElementById("serviceTitle");
const serviceDescription = document.getElementById("serviceDescription");
const serviceBullets = document.getElementById("serviceBullets");
const serviceTags = document.getElementById("serviceTags");
const visualMetric = document.getElementById("visualMetric");
const visualLabel = document.getElementById("visualLabel");
const visualBadge = document.getElementById("visualBadge");
const visualText = document.getElementById("visualText");

function renderService(key) {
    const service = services[key];
    if (!service) return;

    serviceKicker.textContent = service.kicker;
    serviceTitle.textContent = service.title;
    serviceDescription.textContent = service.description;
    visualMetric.textContent = service.metric;
    visualLabel.textContent = service.label;
    visualBadge.textContent = service.badge;
    visualText.textContent = service.text;

    serviceBullets.innerHTML = service.bullets
        .map((item) => `<li>${item}</li>`)
        .join("");

    serviceTags.innerHTML = service.tags
        .map((item) => `<span>${item}</span>`)
        .join("");
}

serviceTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        serviceTabs.forEach((button) => {
            button.classList.remove("is-active");
            button.setAttribute("aria-selected", "false");
        });

        tab.classList.add("is-active");
        tab.setAttribute("aria-selected", "true");
        renderService(tab.dataset.service);
    });
});

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const content = item.querySelector(".accordion-content");

    if (item.classList.contains("is-open")) {
        content.style.maxHeight = `${content.scrollHeight}px`;
    }

    button.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        accordionItems.forEach((entry) => {
            entry.classList.remove("is-open");
            entry.querySelector(".accordion-button").setAttribute("aria-expanded", "false");
            entry.querySelector(".accordion-content").style.maxHeight = null;
        });

        if (!isOpen) {
            item.classList.add("is-open");
            button.setAttribute("aria-expanded", "true");
            content.style.maxHeight = `${content.scrollHeight}px`;
        }
    });
});

const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const header = document.getElementById("header");

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const expanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!expanded));
        menuToggle.classList.toggle("is-active");
        siteNav.classList.toggle("is-open");
        document.body.classList.toggle("menu-open");
    });

    siteNav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.classList.remove("is-active");
            siteNav.classList.remove("is-open");
            document.body.classList.remove("menu-open");
        });
    });
}

window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
});

const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.16
    }
);

revealItems.forEach((item) => revealObserver.observe(item));

const whatsForm = document.getElementById("whatsForm");

if (whatsForm) {
    whatsForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(whatsForm);
        const nome = formData.get("nome")?.toString().trim() || "";
        const cidade = formData.get("cidade")?.toString().trim() || "";
        const veiculo = formData.get("veiculo")?.toString().trim() || "";
        const servico = formData.get("servico")?.toString().trim() || "";
        const mensagem = formData.get("mensagem")?.toString().trim() || "";

        const text = [
            "Olá! Vim pelo site da Mecânica CL e quero atendimento.",
            nome ? `Nome: ${nome}` : "",
            cidade ? `Cidade: ${cidade}` : "",
            veiculo ? `Veículo ou motor: ${veiculo}` : "",
            servico ? `Serviço desejado: ${servico}` : "",
            mensagem ? `Detalhes: ${mensagem}` : ""
        ]
            .filter(Boolean)
            .join("\n");

        const url = `https://wa.me/5577999732244?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank", "noopener,noreferrer");
    });
}

renderService("vans");
