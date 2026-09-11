const serviceData = {
  pests: {
    number: "01",
    icon: "icon-bug",
    tag: "Proteção completa",
    title: "Controle de pragas urbanas",
    description: "Tratamentos específicos para controlar insetos, roedores, cupins, mosquitos e moscas em residências, condomínios, comércios e indústrias.",
    items: ["Desinsetização para insetos", "Desratização para roedores", "Descupinização para cupins", "Termonebulização para mosquitos e moscas"],
    message: "Olá, gostaria de um orçamento para controle de pragas urbanas."
  },
  water: {
    number: "02",
    icon: "icon-drop",
    tag: "Cuidado com a água",
    title: "Limpeza de caixa d’água",
    description: "Higienização técnica de reservatórios para ajudar a preservar a qualidade da água utilizada no dia a dia.",
    items: ["Avaliação do reservatório", "Limpeza cuidadosa", "Orientações de conservação"],
    message: "Olá, gostaria de um orçamento para limpeza de caixa d'água."
  },
  rodents: {
    number: "03",
    icon: "icon-shield",
    tag: "Controle estratégico",
    title: "Desratização e monitoramento",
    description: "Ações direcionadas para controlar roedores e reduzir condições que favorecem sua presença no ambiente.",
    items: ["Mapeamento de pontos críticos", "Estratégia adequada ao local", "Acompanhamento preventivo"],
    message: "Olá, gostaria de um orçamento para desratização."
  },
  sanitization: {
    number: "04",
    icon: "icon-drop",
    tag: "Ambiente cuidado",
    title: "Sanitização de ambientes",
    description: "Procedimentos técnicos para o cuidado de espaços residenciais, comerciais e corporativos.",
    items: ["Aplicação planejada", "Equipe equipada", "Atendimento para diferentes espaços"],
    message: "Olá, gostaria de um orçamento para sanitização."
  }
};

const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

function closeMenu() {
  menuButton?.setAttribute("aria-expanded", "false");
  mainNav?.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mainNav.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) closeMenu();
});

const header = document.querySelector(".site-header");
const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 18);
updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });

const serviceElements = {
  number: document.querySelector("#service-number"),
  iconUse: document.querySelector("#service-icon use"),
  tag: document.querySelector("#service-tag"),
  title: document.querySelector("#service-title"),
  description: document.querySelector("#service-description"),
  list: document.querySelector("#service-list"),
  link: document.querySelector(".service-link")
};

document.querySelectorAll(".service-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const data = serviceData[tab.dataset.service];
    if (!data) return;

    document.querySelectorAll(".service-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });

    serviceElements.number.textContent = data.number;
    serviceElements.iconUse.setAttribute("href", `#${data.icon}`);
    serviceElements.tag.textContent = data.tag;
    serviceElements.title.textContent = data.title;
    serviceElements.description.textContent = data.description;
    serviceElements.list.innerHTML = data.items.map((item) =>
      `<li><svg class="icon"><use href="#icon-check"></use></svg>${item}</li>`
    ).join("");
    serviceElements.link.href = `https://wa.me/5575998704600?text=${encodeURIComponent(data.message)}`;

    const panel = document.querySelector(".service-main");
    panel.animate(
      [
        { opacity: .72, transform: "translateY(5px)" },
        { opacity: 1, transform: "translateY(0)" }
      ],
      { duration: 280, easing: "ease-out" }
    );
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const wasOpen = item.classList.contains("is-open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("is-open");
      faqItem.querySelector("button").setAttribute("aria-expanded", "false");
    });

    if (!wasOpen) {
      item.classList.add("is-open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12, rootMargin: "0px 0px -40px" });

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

document.querySelector("#year").textContent = new Date().getFullYear();
