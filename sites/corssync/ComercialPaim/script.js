const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const filterButtons = document.querySelectorAll("[data-filter]");
const productCards = document.querySelectorAll("[data-family]");

const setHeaderState = () => {
  header.classList.toggle("scrolled", window.scrollY > 18);
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-label", "Abrir menu");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    productCards.forEach((card) => {
      const groups = card.dataset.family.split(" ");
      card.classList.toggle("hidden", filter !== "todos" && !groups.includes(filter));
    });
  });
});

const slides = [
  {
    image: "assets/img/cimento-atacadao-paim.png",
    alt: "Cimento para construção no Atacadão Paim",
    kicker: "Cimento para construção",
    title: "Qualidade e resistência do início ao fim",
    text: "Produtos de marcas confiáveis, bom rendimento e atendimento especializado.",
  },
  {
    image: "assets/img/ferramentas-atacadao-paim.png",
    alt: "Ferramentas profissionais no Atacadão Paim",
    kicker: "Ferramentas profissionais",
    title: "Furadeira, esmerilhadeira e muito mais",
    text: "Opções para o dia a dia de profissionais que precisam de durabilidade.",
  },
  {
    image: "assets/img/ferragens-atacadao-paim.png",
    alt: "Ferragens em geral no Atacadão Paim",
    kicker: "Ferragens em geral",
    title: "Peças para reforço, fixação e montagem",
    text: "Variedade para compras rápidas, manutenção e serviços de construção.",
  },
];

const gallery = document.querySelector("[data-gallery]");

if (gallery) {
  const galleryImage = gallery.querySelector("[data-gallery-image]");
  const galleryKicker = gallery.querySelector("[data-gallery-kicker]");
  const galleryTitle = gallery.querySelector("[data-gallery-title]");
  const galleryText = gallery.querySelector("[data-gallery-text]");
  const slideButtons = gallery.querySelectorAll("[data-slide]");

  const setSlide = (index) => {
    const slide = slides[index];

    galleryImage.src = slide.image;
    galleryImage.alt = slide.alt;
    galleryKicker.textContent = slide.kicker;
    galleryTitle.textContent = slide.title;
    galleryText.textContent = slide.text;
    slideButtons.forEach((button) => {
      button.classList.toggle("active", Number(button.dataset.slide) === index);
    });
  };

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => setSlide(Number(button.dataset.slide)));
  });
}

const revealItems = document.querySelectorAll(
  ".section-head, .product-card, .counter-copy, .gallery-panel, .proof-card, .location-card, .service-board, .final-grid"
);

revealItems.forEach((item) => item.setAttribute("data-reveal", ""));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
