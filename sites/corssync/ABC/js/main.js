document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile (Abrir e Fechar)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Fecha o menu automaticamente ao clicar nos links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // 2. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80; // Offset médio do novo header
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // 3. Efeito de Sombra e Redimensionamento da Logo no Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 4. Filtro de Produtos
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productCards.forEach((card) => {
                const category = card.dataset.category;
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // 5. Animação dos Contadores (Hero Stats)
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target) || 0;
        const duration = 2000;
        const start = performance.now();

        const update = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = target;
            }
        };
        requestAnimationFrame(update);
    };

    // 6. Scroll Reveal e Inicialização dos Contadores
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Inicializar contadores se houver
                const counter = entry.target.querySelector('.hero-stat-number');
                if (counter && !counter.dataset.animated) {
                    animateCounter(counter);
                    counter.dataset.animated = "true";
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Lida com contadores soltos
    const looseCounters = document.querySelectorAll('.hero-stat-number');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                animateCounter(entry.target);
                entry.target.dataset.animated = "true";
            }
        });
    });
    looseCounters.forEach(el => counterObs.observe(el));

    // 7. Formulário do WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, select, textarea');
            const name = inputs[0]?.value || '';
            const subject = inputs[1]?.value || '';
            const message = inputs[2]?.value || '';

            const text = [
                `Olá! Meu nome é ${name}.`,
                subject ? `Assunto: ${subject}` : '',
                message ? `Mensagem: ${message}` : ''
            ].filter(Boolean).join('%0A');

            const url = `https://wa.me/5534999871480?text=${text}`;

            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = 'Redirecionando...';
                btn.style.pointerEvents = 'none';
            }

            setTimeout(() => {
                window.open(url, '_blank');
                contactForm.reset();
                if (btn) {
                    btn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar pelo WhatsApp';
                    btn.style.pointerEvents = 'auto';
                }
            }, 600);
        });
    }
    
    // 8. Motor do Carrossel de Avaliações (Com Swipe para Mobile)
    const track = document.getElementById('reviewTrack');
    const cards = document.querySelectorAll('.review-card');
    const nextBtn = document.querySelector('.carousel-next');
    const prevBtn = document.querySelector('.carousel-prev');
    
    let index = 0;

    function updateCarousel() {
        if (!cards.length) return;
        const cardWidth = cards[0].offsetWidth + 20; // largura + gap
        track.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    if(nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            const visibleCards = window.innerWidth > 991 ? 3 : (window.innerWidth > 768 ? 2 : 1);
            if (index < cards.length - visibleCards) {
                index++;
            } else {
                index = 0; // Volta ao início
            }
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            if (index > 0) {
                index--;
            } else {
                index = cards.length - (window.innerWidth > 991 ? 3 : 1);
            }
            updateCarousel();
        });
    }

    // Funcionalidade de Deslizar (Swipe) para Celulares
    let touchStartX = 0;
    let touchEndX = 0;

    if(track) {
        track.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});

        track.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
    }

    function handleSwipe() {
        const threshold = 40; // Distância mínima para validar o arrasto
        if (touchEndX < touchStartX - threshold) {
            // Deslizou para a esquerda -> Próximo
            if(nextBtn) nextBtn.click();
        }
        if (touchEndX > touchStartX + threshold) {
            // Deslizou para a direita -> Anterior
            if(prevBtn) prevBtn.click();
        }
    }

    // Reseta a posição se a janela for redimensionada
    window.addEventListener('resize', () => {
        index = 0;
        updateCarousel();
    });

});