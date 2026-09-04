document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile (Abrir e Fechar)
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

    // 2. Header Scroll Effect
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            header.classList.toggle('scrolled', window.scrollY > 60);
        }
    }, { passive: true });

    // 3. Smooth Scroll Navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = header ? header.offsetHeight : 0;
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // 4. Filtro de Peças e Serviços
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

    // 5. Scroll Reveal Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // 6. Formulário de WhatsApp Dinâmico
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, select, textarea');
            const name = inputs[0]?.value || '';
            const brand = inputs[1]?.value || '';
            const desc = inputs[2]?.value || '';

            const text = [
                `Olá Giuliano! Meu nome é *${name}*.`,
                brand ? `Tenho interesse na marca/serviço: *${brand}*` : '',
                desc ? `Detalhes: ${desc}` : ''
            ].filter(Boolean).join('%0A');

            // Número do Briefing: (34) 99782-2706
            const url = `https://wa.me/5534997822706?text=${text}`;

            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) {
                btn.textContent = 'Processando...';
                btn.style.pointerEvents = 'none';
            }

            setTimeout(() => {
                window.open(url, '_blank');
                contactForm.reset();
                if (btn) {
                    btn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar Cotação via WhatsApp';
                    btn.style.pointerEvents = 'auto';
                }
            }, 600);
        });
    }
});