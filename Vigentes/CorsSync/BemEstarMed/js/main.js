document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("active");
            navToggle.classList.toggle("active");
        });

        document.querySelectorAll(".nav-menu a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                navToggle.classList.remove("active");
            });
        });
    }

    const header = document.getElementById("header");
    window.addEventListener(
        "scroll",
        () => {
            if (header) {
                header.classList.toggle("scrolled", window.scrollY > 30);
            }
        },
        { passive: true }
    );

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (event) {
            const href = this.getAttribute("href");
            if (href === "#") {
                return;
            }

            event.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: "smooth" });
            }
        });
    });

    const revealElements = document.querySelectorAll(".reveal, .reveal-right");
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    const waForm = document.getElementById("waForm");
    if (waForm) {
        waForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome").value || "";
            const necessidade = document.getElementById("necessidade").value || "";
            const mensagem = document.getElementById("mensagem").value || "";

            const textoFormatado = [
                `Olá Bem-Estar Med! Meu nome é *${nome}*.`,
                `Estou buscando por: *${necessidade}*`,
                mensagem ? `Mais detalhes: ${mensagem}` : ""
            ]
                .filter(Boolean)
                .join("%0A");

            const urlWhatsApp = `https://wa.me/5571992134220?text=${textoFormatado}`;
            const btnSubmit = waForm.querySelector('button[type="submit"]');

            if (btnSubmit) {
                btnSubmit.textContent = "Gerando link...";
                btnSubmit.style.pointerEvents = "none";
            }

            setTimeout(() => {
                window.open(urlWhatsApp, "_blank");
                waForm.reset();
                if (btnSubmit) {
                    btnSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar Mensagem';
                    btnSubmit.style.pointerEvents = "auto";
                }
            }, 500);
        });
    }

    const galleryModal = document.getElementById("galleryModal");
    const galleryModalImage = document.getElementById("galleryModalImage");
    const galleryModalClose = document.getElementById("galleryModalClose");
    const galleryCards = document.querySelectorAll("[data-gallery-image]");

    if (galleryModal && galleryModalImage && galleryCards.length) {
        const openGalleryModal = (src, altText) => {
            galleryModalImage.src = src;
            galleryModalImage.alt = altText;
            galleryModal.classList.add("active");
            galleryModal.setAttribute("aria-hidden", "false");
            document.body.classList.add("modal-open");
        };

        const closeGalleryModal = () => {
            galleryModal.classList.remove("active");
            galleryModal.setAttribute("aria-hidden", "true");
            galleryModalImage.src = "";
            galleryModalImage.alt = "";
            document.body.classList.remove("modal-open");
        };

        galleryCards.forEach((card) => {
            card.addEventListener("click", () => {
                openGalleryModal(card.dataset.galleryImage, card.dataset.galleryAlt || "Imagem ampliada");
            });
        });

        if (galleryModalClose) {
            galleryModalClose.addEventListener("click", closeGalleryModal);
        }

        galleryModal.addEventListener("click", (event) => {
            if (event.target === galleryModal) {
                closeGalleryModal();
            }
        });

        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && galleryModal.classList.contains("active")) {
                closeGalleryModal();
            }
        });
    }
});
