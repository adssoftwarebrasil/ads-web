const productData = {
  compressao: {
    className: "spring-compressao",
    kicker: "Carga axial",
    name: "Molas de compressão",
    description: "Projetadas para absorver ou resistir à força quando pressionadas, com dimensões adequadas ao funcionamento do conjunto."
  },
  tracao: {
    className: "spring-tracao",
    kicker: "Retorno e tensão",
    name: "Molas de tração",
    description: "Desenvolvidas para trabalhar esticadas e retornar ao estado inicial, com terminais definidos conforme a forma de fixação."
  },
  torcao: {
    className: "spring-torcao",
    kicker: "Força angular",
    name: "Molas de torção",
    description: "Indicadas para mecanismos que exigem giro, abertura, fechamento ou controle de movimento ao redor de um eixo."
  },
  arame: {
    className: "spring-arame",
    kicker: "Geometria personalizada",
    name: "Artefatos de arame",
    description: "Peças conformadas em diferentes formatos e medidas para atender montagens, travas, suportes e aplicações especiais."
  }
};

const tabs = document.querySelectorAll(".product-tab");
const springVisual = document.querySelector("#spring-visual");
const productKicker = document.querySelector("#product-kicker");
const productName = document.querySelector("#product-name");
const productDescription = document.querySelector("#product-description");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const key = tab.dataset.product;
    const product = productData[key];

    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    springVisual.setAttribute("class", `spring-visual ${product.className}`);
    productKicker.textContent = product.kicker;
    productName.textContent = product.name;
    productDescription.textContent = product.description;
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

const closeMenu = () => {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  mobileMenu.classList.remove("open");
  document.body.classList.remove("menu-open");
};

menuToggle.addEventListener("click", () => {
  const willOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(willOpen));
  menuToggle.setAttribute("aria-label", willOpen ? "Fechar menu" : "Abrir menu");
  mobileMenu.classList.toggle("open", willOpen);
  document.body.classList.toggle("menu-open", willOpen);
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.13, rootMargin: "0px 0px -30px" }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

document.querySelector("#quote-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#client-name").value.trim();
  const type = document.querySelector("#spring-type").value;
  const detail = document.querySelector("#project-detail").value.trim();
  const greeting = name ? `Olá, meu nome é ${name}.` : "Olá.";
  const extra = detail ? `\n\nDetalhes da aplicação: ${detail}` : "";
  const message = `${greeting} Gostaria de solicitar um orçamento para ${type}.${extra}`;
  const url = `https://wa.me/5562999449565?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();
