document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const menuToggle = document.getElementById("menuToggle");
    const siteNav = document.getElementById("siteNav");

    const closeMenu = () => {
        if (!menuToggle || !siteNav) return;
        menuToggle.classList.remove("is-active");
        siteNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
    };

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = siteNav.classList.toggle("is-open");
            menuToggle.classList.toggle("is-active", isOpen);
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            document.body.classList.toggle("menu-open", isOpen);
        });

        siteNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });
    }

    window.addEventListener("scroll", () => {
        if (!header) return;
        header.classList.toggle("is-scrolled", window.scrollY > 18);
    }, { passive: true });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const href = anchor.getAttribute("href");
            if (!href || href === "#") return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            const offset = (header?.offsetHeight || 0) + 8;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        });
    });

    const serviceTabs = document.querySelectorAll(".service-tab");
    const serviceKicker = document.getElementById("serviceKicker");
    const serviceTitle = document.getElementById("serviceTitle");
    const serviceDescription = document.getElementById("serviceDescription");
    const serviceImage = document.getElementById("serviceImage");
    const serviceBullets = document.getElementById("serviceBullets");
    const serviceTags = document.getElementById("serviceTags");

    const services = {
        bombas: {
            kicker: "Linha 01",
            title: "Reparação de bombas e bicos injetores",
            description: "Atendimento voltado para componentes que pedem desmontagem técnica, teste, regulagem e resposta confiável para o veículo voltar a trabalhar com força e estabilidade.",
            image: "assets/img/qq6qsf.jpeg",
            alt: "Bancada de teste para injeção diesel",
            bullets: [
                "Serviço direcionado para utilitários, vans, pickups e frotas diesel.",
                "Diagnóstico com apoio de bancada e rotina prática de oficina.",
                "Foco em desempenho, retomada e funcionamento regular do conjunto."
            ],
            tags: ["Common rail", "Bomba alta pressão", "Precisão de teste"]
        },
        arla: {
            kicker: "Linha 02",
            title: "Reparação de sistema ARLA 32",
            description: "Suporte para falhas ligadas ao pós-tratamento, com leitura técnica e correção voltada para manter o veículo operando sem perda de rendimento nem interrupções desnecessárias.",
            image: "assets/img/7fqzi.jpeg",
            alt: "Área técnica da AS Diesel para diagnóstico diesel",
            bullets: [
                "Avaliação dos sinais e comportamento do sistema no uso diário.",
                "Atendimento para rotina de estrada, carga e operação urbana.",
                "Orientação objetiva para o cliente entender a origem da falha."
            ],
            tags: ["ARLA 32", "Pós-tratamento", "Diagnóstico técnico"]
        },
        eletrica: {
            kicker: "Linha 03",
            title: "Elétrica diesel com leitura de sintomas e execução prática",
            description: "Quando a falha está no circuito, no acionamento ou na resposta do veículo, a AS Diesel trabalha com análise técnica e correção alinhada à rotina de oficina diesel.",
            image: "assets/img/5c1x9o.jpeg",
            alt: "Técnico operando equipamento na AS Diesel",
            bullets: [
                "Suporte para sintomas elétricos que impactam partida, funcionamento e comunicação.",
                "Atendimento com observação prática da rotina do veículo.",
                "Integração com outros serviços quando a falha envolve mais de um sistema."
            ],
            tags: ["Circuitos", "Leitura técnica", "Rotina diesel"]
        },
        injecao: {
            kicker: "Linha 04",
            title: "Injeção eletrônica para desempenho e regularidade",
            description: "A oficina atende demandas ligadas à injeção eletrônica diesel com foco em resposta, estabilidade, economia operacional e recuperação do funcionamento do veículo.",
            image: "assets/img/p5hay6.jpeg",
            alt: "Equipamento técnico da AS Diesel para serviços diesel",
            bullets: [
                "Diagnóstico de comportamento irregular e perda de resposta.",
                "Leitura do sistema para orientar reparo com mais precisão.",
                "Atendimento alinhado à necessidade de utilitários e veículos de trabalho."
            ],
            tags: ["Injeção eletrônica", "Resposta do motor", "Regularidade"]
        },
        diagnostico: {
            kicker: "Linha 05",
            title: "Diagnóstico complementar para EGR, DPF e catalisador",
            description: "Além das linhas principais, a AS Diesel também recebe demandas complementares ligadas ao conjunto diesel, ajudando o cliente a localizar falhas com mais clareza antes da intervenção.",
            image: "assets/img/bq8ile.jpeg",
            alt: "Área técnica da AS Diesel com várias máquinas de serviço",
            bullets: [
                "Análise inicial para sistemas que afetam rendimento e operação.",
                "Encaminhamento técnico conforme o comportamento do veículo.",
                "Atendimento com visão prática de oficina para reduzir tentativa e erro."
            ],
            tags: ["EGR", "DPF", "Catalisador"]
        }
    };

    const renderService = (key) => {
        const service = services[key];
        if (!service || !serviceTitle || !serviceDescription || !serviceImage || !serviceBullets || !serviceTags || !serviceKicker) {
            return;
        }

        serviceKicker.textContent = service.kicker;
        serviceTitle.textContent = service.title;
        serviceDescription.textContent = service.description;
        serviceImage.src = service.image;
        serviceImage.alt = service.alt;
        serviceBullets.innerHTML = service.bullets.map((item) => `<li>${item}</li>`).join("");
        serviceTags.innerHTML = service.tags.map((item) => `<span>${item}</span>`).join("");
    };

    serviceTabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            const key = tab.dataset.service;
            serviceTabs.forEach((button) => {
                const isActive = button === tab;
                button.classList.toggle("is-active", isActive);
                button.setAttribute("aria-selected", String(isActive));
            });
            renderService(key);
        });
    });

    const slides = Array.from(document.querySelectorAll("[data-slide]"));
    const dotsContainer = document.getElementById("galleryDots");
    let slideIndex = 0;
    let galleryTimer = null;

    const showSlide = (index) => {
        if (!slides.length) return;
        slideIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, currentIndex) => {
            slide.classList.toggle("is-active", currentIndex === slideIndex);
        });

        if (dotsContainer) {
            dotsContainer.querySelectorAll("button").forEach((dot, currentIndex) => {
                dot.classList.toggle("is-active", currentIndex === slideIndex);
                dot.setAttribute("aria-current", currentIndex === slideIndex ? "true" : "false");
            });
        }
    };

    const restartGallery = () => {
        if (galleryTimer) window.clearInterval(galleryTimer);
        galleryTimer = window.setInterval(() => {
            showSlide(slideIndex + 1);
        }, 6500);
    };

    if (dotsContainer && slides.length) {
        slides.forEach((_, index) => {
            const dot = document.createElement("button");
            dot.type = "button";
            dot.setAttribute("aria-label", `Ir para a galeria ${index + 1}`);
            dot.addEventListener("click", () => {
                showSlide(index);
                restartGallery();
            });
            dotsContainer.appendChild(dot);
        });
    }

    document.querySelectorAll("[data-gallery-nav]").forEach((button) => {
        button.addEventListener("click", () => {
            const direction = button.getAttribute("data-gallery-nav");
            showSlide(direction === "next" ? slideIndex + 1 : slideIndex - 1);
            restartGallery();
        });
    });

    if (slides.length) {
        showSlide(0);
        restartGallery();
    }

    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach((item) => {
        const trigger = item.querySelector(".accordion-button");
        const content = item.querySelector(".accordion-content");
        if (!trigger) return;

        if (item.classList.contains("is-open") && content) {
            content.style.maxHeight = `${content.scrollHeight}px`;
        }

        trigger.addEventListener("click", () => {
            const willOpen = !item.classList.contains("is-open");
            accordionItems.forEach((entry) => {
                entry.classList.remove("is-open");
                const entryContent = entry.querySelector(".accordion-content");
                const button = entry.querySelector(".accordion-button");
                if (button) button.setAttribute("aria-expanded", "false");
                if (entryContent) entryContent.style.maxHeight = "0px";
            });

            if (willOpen) {
                item.classList.add("is-open");
                trigger.setAttribute("aria-expanded", "true");
                if (content) content.style.maxHeight = `${content.scrollHeight}px`;
            }
        });
    });

    const revealElements = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.16,
            rootMargin: "0px 0px -48px 0px"
        });

        revealElements.forEach((element) => observer.observe(element));
    } else {
        revealElements.forEach((element) => element.classList.add("is-visible"));
    }
});
