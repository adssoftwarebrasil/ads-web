const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        const isOpen = document.body.classList.toggle("menu-open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            document.body.classList.remove("menu-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const offers = {
    articulacoes: {
        category: "Suplementação em foco",
        title: "Renoforce Colágeno Tipo II",
        description: "Uma opção para quem busca suporte para articulações e mobilidade, com praticidade para encontrar esse cuidado em uma farmácia de confiança.",
        image: "assets/img/produto-renoforce-colageno.png",
        alt: "Renoforce Colágeno Tipo II em destaque na Farmácia Preço Baixo",
        bullets: [
            "Produto fácil de reconhecer para quem já procura suplementação específica.",
            "Categoria ligada à rotina de bem-estar e manutenção da saúde.",
            "Atendimento próximo para orientar a compra com mais segurança."
        ]
    },
    beleza: {
        category: "Autocuidado e rotina",
        title: "CentVita Caphair",
        description: "Uma alternativa para quem quer incluir cuidado com cabelo, pele e unhas na rotina, com a praticidade de resolver isso na mesma farmácia do dia a dia.",
        image: "assets/img/produto-centvita.png",
        alt: "CentVita Caphair na vitrine digital da Farmácia Preço Baixo",
        bullets: [
            "Boa escolha para clientes que valorizam autocuidado e suplementação.",
            "Categoria que complementa o mix de saúde e bem-estar da loja.",
            "Mais conveniência para quem quer encontrar variedade em um só lugar."
        ]
    },
    hair: {
        category: "Linha complementar",
        title: "Renoforce Hair",
        description: "Mais uma opção para quem procura suplementação ligada à rotina de cuidados pessoais, reforçando a variedade disponível na Farmácia Preço Baixo.",
        image: "assets/img/produto-renoforce-hair.png",
        alt: "Renoforce Hair apresentado na Farmácia Preço Baixo",
        bullets: [
            "Ajuda o cliente a comparar opções dentro da mesma categoria.",
            "Complementa uma compra voltada para bem-estar e cuidado contínuo.",
            "Mostra a variedade que a loja oferece para diferentes necessidades."
        ]
    },
    vitaminas: {
        category: "Vitaminas e manutenção",
        title: "Osthencal K2",
        description: "Uma escolha para quem busca suplementação com vitaminas e cálcio, com atendimento acessível e praticidade para encontrar o que precisa.",
        image: "assets/img/produto-osthencal.png",
        alt: "Osthencal K2 em destaque na Farmácia Preço Baixo",
        bullets: [
            "Categoria ligada à manutenção da saúde e prevenção.",
            "Opção importante para quem valoriza rotina de cuidados.",
            "Reforça o compromisso da farmácia com variedade e praticidade."
        ]
    }
};

const tabs = document.querySelectorAll(".offer-tab");
const categoryEl = document.getElementById("offerCategory");
const titleEl = document.getElementById("offerTitle");
const descriptionEl = document.getElementById("offerDescription");
const imageEl = document.getElementById("offerImage");
const bulletsEl = document.getElementById("offerBullets");

const renderOffer = (key) => {
    const offer = offers[key];
    if (!offer) {
        return;
    }

    categoryEl.textContent = offer.category;
    titleEl.textContent = offer.title;
    descriptionEl.textContent = offer.description;
    imageEl.src = offer.image;
    imageEl.alt = offer.alt;
    bulletsEl.innerHTML = offer.bullets.map((item) => `<li>${item}</li>`).join("");

    tabs.forEach((tab) => {
        const isActive = tab.dataset.offer === key;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
    });
};

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        renderOffer(tab.dataset.offer);
    });
});

renderOffer("articulacoes");

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.16 });

    revealElements.forEach((element) => observer.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("visible"));
}
