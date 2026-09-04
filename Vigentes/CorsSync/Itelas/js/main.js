document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Mobile (Toggle e Fechamento Automático)
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
            // Força fundo sólido ao abrir menu no topo
            if (window.scrollY < 50) header.classList.toggle('scrolled');
        });

        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // 2. Efeito Glassmorphism Dinâmico no Header
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
                // Altera a logo para menor opacidade no menu escuro (opcional, configurado via CSS)
            } else {
                header.classList.remove('scrolled');
            }
        }
    }, { passive: true });

    // 3. Navegação Suave (Smooth Scroll)
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

    // 4. Animações de Entrada de Alto Padrão (Intersection Observer)
    const animatedElements = document.querySelectorAll('.fade-up, .fade-right, .fade-left');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Se o elemento contiver um contador, dispara a função
                const counter = entry.target.querySelector('.counter');
                if (counter && !counter.dataset.animated) {
                    startCounter(counter);
                    counter.dataset.animated = 'true';
                }
                
                revealObserver.unobserve(entry.target); // Anima apenas 1 vez
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    animatedElements.forEach(el => revealObserver.observe(el));

    // Lida com contadores que não estão dentro de containers animados
    const looseCounters = document.querySelectorAll('.counter:not(.fade-up .counter, .fade-right .counter, .fade-left .counter)');
    const looseObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                startCounter(entry.target);
                entry.target.dataset.animated = 'true';
                looseObserver.unobserve(entry.target);
            }
        });
    });
    looseCounters.forEach(el => looseObserver.observe(el));

    // Função fluida para contadores numéricos
    function startCounter(el) {
        const target = parseInt(el.getAttribute('data-target')) || 0;
        const duration = 2000;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.innerText = Math.floor(target * eased);

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.innerText = target;
            }
        }

        requestAnimationFrame(update);
    }

    // 5. Motor do formulário para WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = contactForm.querySelectorAll('input, select, textarea');
            const nome = inputs[0]?.value || '';
            const servico = inputs[1]?.value || '';
            const detalhes = inputs[2]?.value || '';

            const textoFormatado = [
                `Olá, equipe Itelas! Meu nome é *${nome}*.`,
                servico ? `Tenho interesse no serviço: *${servico}*` : '',
                detalhes ? `Detalhes da obra: ${detalhes}` : ''
            ].filter(Boolean).join('%0A');

            // Número configurado: (82) 99619-9063
            const urlWhatsApp = `https://wa.me/5582996199063?text=${textoFormatado}`;

            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            if (btnSubmit) {
                const originalText = btnSubmit.innerHTML;
                btnSubmit.textContent = 'Gerando link...';
                btnSubmit.style.pointerEvents = 'none';

                setTimeout(() => {
                    window.open(urlWhatsApp, '_blank');
                    contactForm.reset();
                    btnSubmit.innerHTML = originalText;
                    btnSubmit.style.pointerEvents = 'auto';
                }, 600);
            }
        });
    }
});
