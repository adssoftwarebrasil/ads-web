const loader = document.querySelector(".page-loader");
const header = document.querySelector(".header");
const menuToggle = document.querySelector("#menuToggle");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".navbar a");
const revealElements = document.querySelectorAll(".reveal");
const contactForm = document.querySelector(".contact-form");

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.classList.add("hide");
  }, 700);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
  revealOnScroll();
  activeMenuOnScroll();
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navbar.classList.toggle("active");
  document.body.classList.toggle("menu-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbar.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

function activeMenuOnScroll() {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 180;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.querySelector('input[type="text"]').value;
    const phone = contactForm.querySelector('input[type="tel"]').value;
    const product = contactForm.querySelector("select").value;
    const message = contactForm.querySelector("textarea").value;

    const whatsappMessage = `
Olá, gostaria de solicitar um orçamento.

Nome: ${name}
Telefone: ${phone}
Produto de interesse: ${product}
Mensagem: ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = "556634219507";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

    contactForm.reset();
  });
}

revealOnScroll();
activeMenuOnScroll();