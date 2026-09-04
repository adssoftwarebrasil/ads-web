// ========================================
// Auto Socorro Dois Irmãos - Premium Dark Theme JS
// ========================================

document.addEventListener('DOMContentLoaded', () => {

    // ---- Mobile Navigation ----
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // ---- Header scroll effect ----
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 60);
        }
        lastScroll = window.scrollY;
    }, { passive: true });

    // ---- Smooth scroll ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);

            if (target) {
                const offset = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;

                window.scrollTo({
                    top,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ---- Product / Service filter ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productCards.forEach((card, index) => {
                const category = card.dataset.category;
                const show = filter === 'all' || category === filter;

                card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

                if (show) {
                    card.style.display = '';

                    requestAnimationFrame(() => {
                        card.style.opacity = '0';
                        card.style.transform = 'translateY(16px)';

                        requestAnimationFrame(() => {
                            card.style.transitionDelay = `${index * 0.05}s`;
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        });
                    });
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(16px)';

                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ---- Counter animation ----
    const animateCounter = (el) => {
        const target = parseInt(el.dataset.target);
        const duration = 1500;
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

    // ---- Scroll reveal ----
    const revealElements = document.querySelectorAll(
        '.product-card, .service-card, .testimonial-card, .city-card, ' +
        '.about-feature, .contact-item, .section-label, .section-title, ' +
        '.section-title-left, .section-subtitle, .about-text p, .about-buttons, ' +
        '.about-image-wrapper, .contact-form-wrapper'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const delay = Array.from(entry.target.parentElement.children)
                    .indexOf(entry.target) * 0.08;

                entry.target.style.transitionDelay = `${delay}s`;
                entry.target.classList.add('visible');

                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // ---- Counter observer ----
    const counterElements = document.querySelectorAll('.hero-stat-number');
    let countersAnimated = false;

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                countersAnimated = true;
                counterElements.forEach(el => animateCounter(el));
                counterObserver.disconnect();
            }
        });
    }, {
        threshold: 0.5
    });

    counterElements.forEach(el => counterObserver.observe(el));

    // ---- Contact Form WhatsApp Redirect ----
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, textarea');

            const name = inputs[0]?.value || '';
            const phone = inputs[1]?.value || '';
            const service = inputs[2]?.value || '';
            const message = inputs[3]?.value || '';

            const text = [
                `Olá! Meu nome é ${name}.`,
                phone ? `Telefone: ${phone}` : '',
                service ? `Serviço de interesse: ${service}` : '',
                message ? `Mensagem: ${message}` : '',
                'Gostaria de atendimento da Auto Socorro Dois Irmãos.'
            ].filter(Boolean).join('%0A');

            const url = `https://wa.me/5564999506100?text=${text}`;

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
            }, 500);
        });
    }

    // ---- WhatsApp tooltip close ----
    const tooltipClose = document.getElementById('tooltipClose');
    const tooltip = document.getElementById('whatsappTooltip');

    if (tooltipClose && tooltip) {
        tooltipClose.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            tooltip.classList.add('hidden');
        });
    }

    // ---- Page load animation ----
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});