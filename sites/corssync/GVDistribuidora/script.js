const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
  const closeMenu = () => {
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

const filterButtons = document.querySelectorAll(".filter-button");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    productCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = selected === "all" || categories.includes(selected);
      card.hidden = !shouldShow;
    });
  });
});

const profiles = {
  trabalho: {
    kicker: "Agilidade no dia a dia",
    title: "Seu escritório mais rápido e confiável.",
    description: "Configuração equilibrada para sistemas, planilhas, videochamadas e muitas tarefas ao mesmo tempo.",
    features: [
      "Inicialização rápida com SSD",
      "Memória dimensionada para sua rotina",
      "Componentes escolhidos com equilíbrio"
    ],
    message: "Olá, quero montar um computador para trabalho."
  },
  gamer: {
    kicker: "Desempenho para jogar",
    title: "Mais quadros, mais imersão, mais jogo.",
    description: "Processador, placa de vídeo, refrigeração e memória combinados para os jogos que você quer curtir.",
    features: [
      "Placa de vídeo para seu perfil",
      "Fonte e refrigeração dimensionadas",
      "Possibilidade de upgrades futuros"
    ],
    message: "Olá, quero montar um computador gamer."
  },
  criacao: {
    kicker: "Potência para aprender e criar",
    title: "Fluidez para ideias que não podem esperar.",
    description: "Uma máquina pensada para estudos, programação, projetos visuais, edição e uma rotina versátil.",
    features: [
      "Desempenho multitarefa",
      "Armazenamento rápido e espaçoso",
      "Configuração adaptada aos seus programas"
    ],
    message: "Olá, quero montar um computador para estudo e criação."
  }
};

const profileTabs = document.querySelectorAll(".profile-tab");
const profileKicker = document.querySelector("#profile-kicker");
const profileTitle = document.querySelector("#profile-title");
const profileDescription = document.querySelector("#profile-description");
const profileFeatures = document.querySelector("#profile-features");
const profileCta = document.querySelector("#profile-cta");

profileTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const profile = profiles[tab.dataset.profile];

    profileTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    profileKicker.textContent = profile.kicker;
    profileTitle.textContent = profile.title;
    profileDescription.textContent = profile.description;
    profileFeatures.innerHTML = profile.features.map((item) => `<li><span></span>${item}</li>`).join("");
    profileCta.href = `https://wa.me/553332038802?text=${encodeURIComponent(profile.message)}`;
  });
});

document.querySelectorAll(".faq-item button").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".faq-item");
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((faqItem) => {
      faqItem.classList.remove("open");
      faqItem.querySelector("button").setAttribute("aria-expanded", "false");
    });

    if (!isOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    }
  });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 3, 2) * 70}ms`;
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => element.classList.add("visible"));
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
